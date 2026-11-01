export interface IconProps {
  size?: number;
}

export interface ThreeJsIconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  depth?: number;
  scale?: number;
  autoRotate?: boolean;
  radius?: number;
  strutRadius?: number;
  size?: number;
}

export interface StepsType {
  label: string;
  description: string;
}

export type BudgetRange =
  | "₹10,000 – ₹50,000"
  | "₹50,000 – ₹1,50,000"
  | "₹1,50,000+"
  | "Let's discuss";

export interface EmailAttachment {
  filename: string;
  content: Buffer | string;
  contentType?: string;
  size?: number;
}

export interface SendEmailPayload {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  budget?: string;
  subject?: string;
  message: string;
  attachments?: EmailAttachment[];
}

export interface MailActionResult {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}
