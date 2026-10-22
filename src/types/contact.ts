/**
 * Contact Form and API Types
 */

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
  websiteHoneypot?: string; // Low-friction honeypot spam protection
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}
