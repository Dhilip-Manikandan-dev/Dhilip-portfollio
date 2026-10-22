import { describe, it, expect } from "vitest";
import { contactFormSchema } from "@/lib/validation";

describe("Contact Form Validation Schema", () => {
  it("passes validation with valid data", () => {
    const validData = {
      name: "John Doe",
      email: "john@example.com",
      subject: "Project Inquiry",
      message: "Hello Dhilip, I would like to discuss a Next.js project with you.",
      company: "Acme Corp",
      websiteHoneypot: "",
    };

    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("fails if name is too short", () => {
    const invalidData = {
      name: "A",
      email: "john@example.com",
      subject: "Inquiry",
      message: "Hello Dhilip, I would like to discuss a project with you.",
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.name).toBeDefined();
    }
  });

  it("fails if email is invalid", () => {
    const invalidData = {
      name: "John Doe",
      email: "not-an-email",
      subject: "Inquiry",
      message: "Hello Dhilip, I would like to discuss a project with you.",
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.email).toBeDefined();
    }
  });

  it("fails if message is shorter than 15 characters", () => {
    const invalidData = {
      name: "John Doe",
      email: "john@example.com",
      subject: "Inquiry",
      message: "Too short",
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.message).toBeDefined();
    }
  });
});
