import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import { rateLimit } from "@/lib/rate-limit";
import { sendContactEmails } from "@/lib/email";
import { ContactApiResponse } from "@/types/contact";

export async function POST(request: NextRequest): Promise<NextResponse<ContactApiResponse>> {
  try {
    // 1. Content-Type check
    const contentType = request.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid content-type. Expected application/json.",
        },
        { status: 415 }
      );
    }

    // 2. Client Identifier for Rate Limiting (IP or forwarded headers)
    const forwardedFor = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const clientIp = (forwardedFor ? forwardedFor.split(",")[0] : realIp) || "127.0.0.1";

    // 5 requests per 2 minutes per IP
    const limiter = rateLimit(`contact_${clientIp.trim()}`, {
      windowMs: 2 * 60 * 1000,
      maxRequests: 5,
    });

    if (!limiter.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many messages sent. Please wait a few moments before trying again.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": Math.ceil((limiter.resetTime - Date.now()) / 1000).toString(),
          },
        }
      );
    }

    // 3. Payload size and parse check
    let rawBody: unknown;
    try {
      rawBody = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Malformed JSON payload.",
        },
        { status: 400 }
      );
    }

    // 4. Validate with Zod schema
    const validationResult = contactFormSchema.safeParse(rawBody);

    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please verify the form fields.",
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 5. Honeypot check (Spam defense)
    if (data.websiteHoneypot && data.websiteHoneypot.trim().length > 0) {
      // Bot detected - simulate success to avoid bot feedback loop while not executing
      return NextResponse.json(
        {
          success: true,
          message: "Your message has been received.",
        },
        { status: 200 }
      );
    }

    // 6. Deliver emails via Nodemailer
    const emailResult = await sendContactEmails(data);

    if (!emailResult.ownerDelivered) {
      // In development mode without SMTP configured, inform developer gracefully
      if (process.env.NODE_ENV !== "production" && !process.env.SMTP_HOST) {
        return NextResponse.json(
          {
            success: true,
            message:
              "Message received in development mode! (SMTP is not configured in .env.local yet, but submission validated successfully)",
          },
          { status: 200 }
        );
      }

      return NextResponse.json(
        {
          success: false,
          message:
            emailResult.error ||
            "Unable to deliver message at this time. Please reach out via email or LinkedIn.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your message has been sent successfully. An acknowledgement email has been sent to your address.",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[API /api/contact] Internal error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
