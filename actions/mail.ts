"use server";

import {
  generateAutoReplyTemplate,
  generateContactEmailTemplate,
  sendMail,
} from "@/lib/mail";
import { EmailAttachment, MailActionResult, SendEmailPayload } from "@/lib/types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB

/**
 * Validates the contact payload fields.
 */
function validatePayload(data: Partial<SendEmailPayload>): {
  isValid: boolean;
  errors: Record<string, string[]>;
  sanitized: SendEmailPayload;
} {
  const errors: Record<string, string[]> = {};

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const phone = typeof data.phone === "string" ? data.phone.trim() : "";
  const service = typeof data.service === "string" ? data.service.trim() : "";
  const budget = typeof data.budget === "string" ? data.budget.trim() : "";
  const subject = typeof data.subject === "string" ? data.subject.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";

  if (!name) {
    errors.name = ["Name is required."];
  } else if (name.length < 2) {
    errors.name = ["Name must be at least 2 characters long."];
  } else if (name.length > 100) {
    errors.name = ["Name cannot exceed 100 characters."];
  }

  if (!email) {
    errors.email = ["Email address is required."];
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = ["Please provide a valid email address."];
  }

  if (!message) {
    errors.message = ["Message is required."];
  } else if (message.length < 10) {
    errors.message = ["Message must be at least 10 characters long."];
  } else if (message.length > 5000) {
    errors.message = ["Message cannot exceed 5000 characters."];
  }

  if (phone && phone.length > 30) {
    errors.phone = ["Phone number is too long."];
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitized: {
      name,
      email,
      phone: phone || undefined,
      service: service || undefined,
      budget: budget || undefined,
      subject:
        subject ||
        (service ? `Inquiry regarding ${service}` : `New message from ${name}`),
      message,
      attachments: data.attachments,
    },
  };
}

/**
 * Server Action for handling form submissions (supports React 19 `useActionState` and `<form action>`).
 *
 * @param prevStateOrFormData Previous action state or FormData when called directly by `<form action>`.
 * @param possibleFormData FormData when called via `useActionState(action, initialState)`.
 */
export async function sendContactEmailAction(
  prevStateOrFormData: MailActionResult | null | FormData,
  possibleFormData?: FormData,
): Promise<MailActionResult> {
  const formData =
    prevStateOrFormData instanceof FormData
      ? prevStateOrFormData
      : possibleFormData;

  if (!formData) {
    return {
      success: false,
      message: "No form data was received.",
    };
  }

  // Process attachments from FormData
  const attachments: EmailAttachment[] = [];
  const rawFiles = [
    ...formData.getAll("attachment"),
    ...formData.getAll("attachments"),
  ];

  for (const item of rawFiles) {
    if (
      item &&
      typeof item === "object" &&
      "size" in item &&
      (item as File).size > 0
    ) {
      const file = item as File;
      if (file.size > MAX_FILE_SIZE_BYTES) {
        return {
          success: false,
          message: `Attachment "${file.name}" exceeds the 10MB size limit.`,
          errors: {
            attachment: ["File size cannot exceed 10MB."],
          },
        };
      }

      try {
        const arrayBuffer = await file.arrayBuffer();
        attachments.push({
          filename: file.name,
          content: Buffer.from(arrayBuffer),
          contentType: file.type || "application/octet-stream",
          size: file.size,
        });
      } catch (fileErr) {
        console.error("Error reading attachment:", fileErr);
        return {
          success: false,
          message: `Could not read attachment "${file.name}".`,
          errors: {
            attachment: ["Error reading file attachment."],
          },
        };
      }
    }
  }

  const rawData: Partial<SendEmailPayload> = {
    name: formData.get("name")?.toString(),
    email: formData.get("email")?.toString(),
    phone: formData.get("phone")?.toString(),
    service: formData.get("service")?.toString(),
    budget: formData.get("budget")?.toString(),
    subject: formData.get("subject")?.toString(),
    message: formData.get("message")?.toString(),
    attachments: attachments.length > 0 ? attachments : undefined,
  };

  return await processAndSendEmail(rawData);
}

/**
 * Server Action for programmatic calls with JSON payload.
 */
export async function sendMailDirectAction(
  payload: Partial<SendEmailPayload>,
): Promise<MailActionResult> {
  return await processAndSendEmail(payload);
}

/**
 * Core processor for validating and sending contact emails.
 */
async function processAndSendEmail(
  rawData: Partial<SendEmailPayload>,
): Promise<MailActionResult> {
  const { isValid, errors, sanitized } = validatePayload(rawData);

  if (!isValid) {
    return {
      success: false,
      message: "Please fix the validation errors below.",
      errors,
    };
  }

  try {
    const { html, text, subject } = generateContactEmailTemplate(sanitized);

    // Send primary inquiry notification email to team
    await sendMail({
      replyTo: sanitized.email,
      subject: `[Website Inquiry] ${subject}`,
      text,
      html,
      attachments: sanitized.attachments?.map((att) => ({
        filename: att.filename,
        content: att.content,
        contentType: att.contentType,
      })),
    });

    // Optionally send an acknowledgment auto-reply to the sender
    try {
      const autoReply = generateAutoReplyTemplate(sanitized.name);
      await sendMail({
        to: sanitized.email,
        subject: autoReply.subject,
        text: autoReply.text,
        html: autoReply.html,
      });
    } catch (autoReplyErr) {
      // Don't fail the user submission if the auto-reply fails
      console.warn(
        "[Nodemailer] Warning: Auto-reply could not be sent:",
        autoReplyErr,
      );
    }

    return {
      success: true,
      message:
        "Thank you! Your message has been sent successfully. We will get back to you shortly.",
    };
  } catch (error: unknown) {
    console.error("[Nodemailer] Error sending email:", error);

    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred.";

    // If SMTP is not yet configured, provide a helpful note
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASSWORD
    ) {
      return {
        success: false,
        message:
          "SMTP email configuration is missing on the server. Please configure SMTP_HOST, SMTP_USER, and SMTP_PASSWORD in .env.local.",
      };
    }

    if (errorMessage.includes("EACCES")) {
      return {
        success: false,
        message:
          "Email server connection was blocked by local socket permissions (EACCES). Please ensure port 587 (STARTTLS) is configured in .env.local.",
      };
    }

    return {
      success: false,
      message: `Failed to send email: ${errorMessage}`,
    };
  }
}
