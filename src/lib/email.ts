import nodemailer from "nodemailer";
import { ContactFormValues } from "@/lib/validation";

/**
 * Escapes unsafe HTML characters to prevent template injection / XSS in emails.
 */
export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export interface EmailDispatchResult {
  ownerDelivered: boolean;
  visitorAcknowledged: boolean;
  error?: string;
}

/**
 * Create SMTP Transporter from environment variables.
 * Returns null if credentials are not fully configured.
 */
export function getMailTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: process.env.NODE_ENV === "production",
    },
  });
}

/**
 * Formats owner notification HTML email
 */
export function createOwnerEmailHtml(data: ContactFormValues, timestamp: string): string {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safeSubject = escapeHtml(data.subject);
  const safeCompany = data.company ? escapeHtml(data.company) : "Not specified";
  const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br />");

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Portfolio Enquiry</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b1120; color: #f1f5f9; padding: 32px 16px; margin: 0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #111c35; border-radius: 12px; border: 1px solid #1e293b; overflow: hidden;">
    <tr>
      <td style="padding: 28px 32px; background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: #ffffff;">
        <h1 style="margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em;">New Portfolio Enquiry</h1>
        <p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.9;">Received via portfolio contact form</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 32px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; width: 120px;"><strong>From:</strong></td>
            <td style="padding: 8px 0; color: #f8fafc; font-size: 14px;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; font-size: 13px;"><strong>Email:</strong></td>
            <td style="padding: 8px 0; color: #38bdf8; font-size: 14px;"><a href="mailto:${safeEmail}" style="color: #38bdf8; text-decoration: none;">${safeEmail}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; font-size: 13px;"><strong>Company:</strong></td>
            <td style="padding: 8px 0; color: #f8fafc; font-size: 14px;">${safeCompany}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; font-size: 13px;"><strong>Subject:</strong></td>
            <td style="padding: 8px 0; color: #f8fafc; font-size: 14px;">${safeSubject}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; font-size: 13px;"><strong>Timestamp:</strong></td>
            <td style="padding: 8px 0; color: #94a3b8; font-size: 13px;">${timestamp}</td>
          </tr>
        </table>

        <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #1e293b;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8; margin: 0 0 12px 0;">Message Content:</h2>
          <div style="background-color: #0c1427; padding: 20px; border-radius: 8px; border: 1px solid #1e293b; color: #e2e8f0; font-size: 15px; line-height: 1.6;">
            ${safeMessage}
          </div>
        </div>

        <div style="margin-top: 28px; text-align: center;">
          <a href="mailto:${safeEmail}?subject=Re: ${encodeURIComponent(data.subject)}" style="display: inline-block; background-color: #4f46e5; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 600;">
            Reply to ${safeName}
          </a>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Formats visitor acknowledgement HTML email
 */
export function createVisitorAcknowledgementHtml(name: string): string {
  const safeName = escapeHtml(name);

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Thanks for reaching out</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b1120; color: #f1f5f9; padding: 32px 16px; margin: 0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #111c35; border-radius: 12px; border: 1px solid #1e293b; overflow: hidden;">
    <tr>
      <td style="padding: 28px 32px; background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: #ffffff;">
        <h1 style="margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em;">Dhilip M</h1>
        <p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.9;">Full Stack | React Native | Shopify App Developer</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 32px; line-height: 1.6; font-size: 15px; color: #e2e8f0;">
        <p style="margin-top: 0;">Hi ${safeName},</p>
        
        <p>Thank you for reaching out through my portfolio.</p>
        
        <p>I've received your message and appreciate your interest. I'll review your enquiry and get back to you as soon as possible.</p>
        
        <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #1e293b; color: #94a3b8; font-size: 14px;">
          <p style="margin: 0; font-weight: 600; color: #f8fafc;">Best regards,</p>
          <p style="margin: 4px 0 0 0; color: #f8fafc;"><strong>Dhilip M</strong></p>
          <p style="margin: 2px 0 0 0; color: #94a3b8; font-size: 13px;">Full Stack Developer</p>
          <p style="margin: 2px 0 0 0; color: #94a3b8; font-size: 13px;">Coimbatore, Tamil Nadu, India</p>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Dispatches contact notification and visitor acknowledgement.
 */
export async function sendContactEmails(data: ContactFormValues): Promise<EmailDispatchResult> {
  const transporter = getMailTransporter();
  const toEmail = process.env.CONTACT_TO_EMAIL || "dhilip.dev@example.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "portfolio@dhilip.dev";
  const timestamp = new Date().toUTCString();

  if (!transporter) {
    // If SMTP is not yet configured, log for development inspection and notify caller
    console.warn("[Email Service] SMTP configuration missing. Check environment variables.");
    return {
      ownerDelivered: false,
      visitorAcknowledged: false,
      error: "SMTP service is currently not configured on this server.",
    };
  }

  let ownerDelivered = false;
  let visitorAcknowledged = false;
  let lastError: string | undefined;

  // 1. Send owner notification
  try {
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${fromEmail}>`,
      to: toEmail,
      replyTo: data.email,
      subject: `New Portfolio Enquiry — ${data.name}`,
      text: `
New Portfolio Enquiry
=====================
From: ${data.name}
Email: ${data.email}
Company: ${data.company || "Not specified"}
Subject: ${data.subject}
Timestamp: ${timestamp}

Message:
${data.message}
      `.trim(),
      html: createOwnerEmailHtml(data, timestamp),
    });
    ownerDelivered = true;
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("[Email Service] Failed to send owner notification:", errorMsg);
    lastError = `Failed to deliver message to portfolio owner: ${errorMsg}`;
  }

  // 2. Send visitor acknowledgement (only if visitor email is valid)
  try {
    await transporter.sendMail({
      from: `"Dhilip M" <${fromEmail}>`,
      to: data.email,
      subject: "Thanks for contacting Dhilip M",
      text: `
Hi ${data.name},

Thank you for reaching out through my portfolio.

I've received your message and appreciate your interest. I'll review your enquiry and get back to you as soon as possible.

Best regards,
Dhilip M
Full Stack Developer
      `.trim(),
      html: createVisitorAcknowledgementHtml(data.name),
    });
    visitorAcknowledged = true;
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("[Email Service] Failed to send visitor acknowledgement:", errorMsg);
    // Note: Do not override owner error if owner failed
    if (!lastError) {
      lastError = `Visitor acknowledgement could not be sent: ${errorMsg}`;
    }
  }

  return {
    ownerDelivered,
    visitorAcknowledged,
    error: lastError,
  };
}
