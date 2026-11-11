import nodemailer, { SendMailOptions } from "nodemailer";
import { CONTACT_DETAILS } from "./data";
import { SendEmailPayload } from "./types";

/**
 * Escapes HTML characters in untrusted strings to prevent HTML injection in email bodies.
 */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Raised when the deployment is missing or has invalid SMTP environment values.
 */
export class SmtpConfigurationError extends Error {
  readonly code = "SMTP_CONFIG_ERROR";

  constructor(message = "SMTP configuration is incomplete or invalid.") {
    super(message);
    this.name = "SmtpConfigurationError";
  }
}

/**
 * Creates a Gmail SMTP transport.
 *
 * Port 587 uses STARTTLS. Port 465 uses implicit TLS.
 * SMTP_PASSWORD is the preferred secret name; SMTP_PASS remains supported
 * temporarily for backwards compatibility with existing deployments.
 */
export function getMailTransporter() {
  const host = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";
  const user = process.env.SMTP_USER?.trim();
  const pass =
    process.env.SMTP_PASSWORD?.replace(/\\s+/g, "").trim() ||
    process.env.SMTP_PASS?.replace(/\\s+/g, "").trim();

  const rawPort = process.env.SMTP_PORT?.trim();
  const port = rawPort ? Number(rawPort) : 587;
  const rawSecure = process.env.SMTP_SECURE?.trim().toLowerCase();

  if (!user || !pass) {
    throw new SmtpConfigurationError(
      "Set SMTP_USER and SMTP_PASSWORD in the GoDaddy production environment.",
    );
  }

  if (!host || !Number.isInteger(port) || ![465, 587].includes(port)) {
    throw new SmtpConfigurationError(
      "Gmail SMTP requires SMTP_HOST=smtp.gmail.com and SMTP_PORT=465 or 587.",
    );
  }

  if (rawSecure && rawSecure !== "true" && rawSecure !== "false") {
    throw new SmtpConfigurationError(
      "SMTP_SECURE must be either true or false.",
    );
  }

  const secure = rawSecure ? rawSecure === "true" : port === 465;
  if ((port === 465 && !secure) || (port === 587 && secure)) {
    throw new SmtpConfigurationError(
      "Use SMTP_SECURE=true with port 465, or SMTP_SECURE=false with port 587.",
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    requireTLS: port === 587,
    auth: { user, pass },
    connectionTimeout: 15_000,
    greetingTimeout: 15_000,
    socketTimeout: 30_000,
    tls: {
      minVersion: "TLSv1.2",
    },
  });
}

export interface MailOptions {
  to?: string | string[];
  from?: string;
  replyTo?: string;
  subject: string;
  text: string;
  html?: string;
  attachments?: SendMailOptions["attachments"];
}

/**
 * Sends one email and closes its SMTP connection after the attempt.
 */
export async function sendMail(options: MailOptions) {
  const smtpUser = process.env.SMTP_USER?.trim();
  const defaultFrom =
    process.env.SMTP_FROM?.trim() ||
    (smtpUser ? `"Triadz Solutions" <${smtpUser}>` : undefined);
  const defaultTo =
    process.env.CONTACT_RECEIVER_EMAIL?.trim() || CONTACT_DETAILS.mailId;

  if (!defaultFrom || !defaultTo) {
    throw new SmtpConfigurationError(
      "Set SMTP_USER, SMTP_PASSWORD, and CONTACT_RECEIVER_EMAIL.",
    );
  }

  const mailPayload: SendMailOptions = {
    from: options.from || defaultFrom,
    to: options.to || defaultTo,
    replyTo: options.replyTo,
    subject: options.subject,
    text: options.text,
    html: options.html,
    attachments: options.attachments,
  };

  const transporter = getMailTransporter();
  try {
    return await transporter.sendMail(mailPayload);
  } finally {
    transporter.close();
  }
}

/**
 * Builds HTML and text versions of the contact form notification email.
 */
export function generateContactEmailTemplate(data: SendEmailPayload) {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safePhone = data.phone ? escapeHtml(data.phone) : "Not provided";
  const safeService = data.service
    ? escapeHtml(data.service)
    : "General Inquiry";
  const safeBudget = data.budget ? escapeHtml(data.budget) : "Not specified";
  const subjectText = (
    data.subject || `New inquiry from ${data.name}`
  ).replace(/[\\r\\n]+/g, " ").trim();
  const safeSubject = escapeHtml(subjectText);
  const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br/>");

  const attachmentsList =
    data.attachments && data.attachments.length > 0
      ? data.attachments
          .map((att) => {
            const sizeKb = att.size
              ? ` (${(att.size / 1024).toFixed(1)} KB)`
              : "";
            return `${escapeHtml(att.filename)}${sizeKb}`;
          })
          .join(", ")
      : null;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #14171c; color: #dfe2eb; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background-color: #1C2026; border: 1px solid #31353c; border-radius: 12px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #1C2026 0%, #262A31 100%); padding: 28px 32px; border-bottom: 2px solid #ffb500; }
    .title { color: #ffffff; font-size: 20px; font-weight: bold; margin: 0 0 4px; }
    .subtitle { color: #ffb500; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
    .content { padding: 32px; }
    .field-group { margin-bottom: 20px; }
    .field-label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #9E8E78; margin-bottom: 6px; }
    .field-value { font-size: 15px; color: #DFE2EB; background: #262A31; padding: 10px 14px; border-radius: 8px; border: 1px solid #31353c; word-break: break-word; }
    .message-box { font-size: 15px; line-height: 1.6; color: #DFE2EB; background: #262A31; padding: 16px; border-radius: 8px; border-left: 3px solid #ffb500; white-space: normal; }
    .footer { padding: 20px 32px; background-color: #14171c; font-size: 12px; color: #9E8E78; text-align: center; border-top: 1px solid #262A31; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="subtitle">Triadz Website Notification</div>
      <h1 class="title">New Contact Submission</h1>
    </div>
    <div class="content">
      <div class="field-group">
        <div class="field-label">Sender Name</div>
        <div class="field-value">${safeName}</div>
      </div>
      <div class="field-group">
        <div class="field-label">Email Address</div>
        <div class="field-value"><a href="mailto:${safeEmail}" style="color: #ffb500; text-decoration: none;">${safeEmail}</a></div>
      </div>
      <div class="field-group">
        <div class="field-label">Phone Number</div>
        <div class="field-value">${safePhone}</div>
      </div>
      <div class="field-group">
        <div class="field-label">Service / Topic</div>
        <div class="field-value">${safeService}</div>
      </div>
      <div class="field-group">
        <div class="field-label">Budget Range</div>
        <div class="field-value" style="color: #ffb500; font-weight: 600;">${safeBudget}</div>
      </div>
      ${
        attachmentsList
          ? `<div class="field-group">
        <div class="field-label">Attachments (${data.attachments?.length || 0})</div>
        <div class="field-value" style="color: #ffb500;">📎 ${attachmentsList}</div>
      </div>`
          : ""
      }
      <div class="field-group">
        <div class="field-label">Subject</div>
        <div class="field-value">${safeSubject}</div>
      </div>
      <div class="field-group">
        <div class="field-label">Message / Project Description</div>
        <div class="message-box">${safeMessage}</div>
      </div>
    </div>
    <div class="footer">
      This email was received via the Triadz website contact form. Simply hit reply to respond directly to ${safeName} (${safeEmail}).
    </div>
  </div>
</body>
</html>
  `.trim();

  const text = `
New Contact Submission - Triadz
=========================================
Name:        ${data.name}
Email:       ${data.email}
Phone:       ${data.phone || "Not provided"}
Service:     ${data.service || "General Inquiry"}
Budget:      ${data.budget || "Not specified"}
Attachments: ${attachmentsList || "None"}
Subject:     ${data.subject || "Website Inquiry"}
-----------------------------------------
Message:
${data.message}
=========================================
Reply-To: ${data.email}
  `.trim();

  return { html, text, subject: subjectText };
}

/**
 * Builds HTML and text confirmation email sent to the inquirer.
 */
export function generateAutoReplyTemplate(name: string) {
  const safeName = escapeHtml(name);

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #14171c; color: #dfe2eb; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background-color: #1C2026; border: 1px solid #31353c; border-radius: 12px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #1C2026 0%, #262A31 100%); padding: 28px 32px; border-bottom: 2px solid #ffb500; text-align: center; }
    .title { color: #ffffff; font-size: 22px; font-weight: bold; margin: 0 0 6px; }
    .content { padding: 32px; font-size: 15px; line-height: 1.6; color: #DFE2EB; }
    .highlight { color: #ffb500; font-weight: 600; }
    .footer { padding: 20px 32px; background-color: #14171c; font-size: 12px; color: #9E8E78; text-align: center; border-top: 1px solid #262A31; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 class="title">Thank You for Reaching Out!</h1>
    </div>
    <div class="content">
      <p>Hi <span class="highlight">${safeName}</span>,</p>
      <p>We've successfully received your inquiry. A member of our team will review your requirements and get back to you within 24 hours.</p>
      <p>If you have immediate questions, feel free to reply directly to this email or reach us on WhatsApp at <a href="${CONTACT_DETAILS.whatsAppLink}" style="color: #ffb500;">${CONTACT_DETAILS.phoneNo}</a>.</p>
      <br/>
      <p>Warm regards,<br/><strong>The Triadz Team</strong><br/><a href="https://triadz.in" style="color: #ffb500; text-decoration: none;">triadz.in</a></p>
    </div>
    <div class="footer">
      Triadz Solutions &bull; ${CONTACT_DETAILS.address} &bull; ${CONTACT_DETAILS.mailId}
    </div>
  </div>
</body>
</html>
  `.trim();

  const text = `
Hi ${name},

Thank you for reaching out to Triadz!
We have received your message and our team will get back to you within 24 hours.

If you have urgent questions, you can reach us via WhatsApp at ${CONTACT_DETAILS.phoneNo} or email us at ${CONTACT_DETAILS.mailId}.

Warm regards,
The Triadz Team
https://triadz.in
  `.trim();

  return { html, text, subject: "We received your message - Triadz" };
}
