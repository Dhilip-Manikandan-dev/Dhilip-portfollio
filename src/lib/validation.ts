import { z } from "zod";
import type { Resolver, FieldValues, FieldErrors } from "react-hook-form";

/**
 * Contact Form Zod Schema
 * Enforces strict validation, field lengths, and email verification.
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(80, { message: "Name must not exceed 80 characters." }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address." })
    .max(120, { message: "Email must not exceed 120 characters." }),
  subject: z
    .string()
    .trim()
    .min(3, { message: "Subject must be at least 3 characters." })
    .max(120, { message: "Subject must not exceed 120 characters." }),
  message: z
    .string()
    .trim()
    .min(15, { message: "Message must be at least 15 characters to provide context." })
    .max(3000, { message: "Message must not exceed 3,000 characters." }),
  company: z
    .string()
    .trim()
    .max(100, { message: "Company name must not exceed 100 characters." })
    .optional()
    .or(z.literal("")),
  websiteHoneypot: z.string().optional(), // Honeypot field must remain empty
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

/**
 * Universal Zod Resolver for React Hook Form.
 * Seamlessly handles Zod 3 and Zod 4 error structures without throwing unhandledRejection errors.
 */
export const zodFormResolver = <TFieldValues extends FieldValues = FieldValues>(
  schema: z.ZodType<TFieldValues>
): Resolver<TFieldValues> => {
  return async (values) => {
    const result = schema.safeParse(values);
    if (result.success) {
      return {
        values: result.data,
        errors: {},
      };
    }

    const errorRecord = result.error as unknown as {
      issues?: Array<{ path?: (string | number)[]; code?: string; message: string }>;
      errors?: Array<{ path?: (string | number)[]; code?: string; message: string }>;
    };
    const issues = errorRecord.issues || errorRecord.errors || [];
    const errors: FieldErrors<TFieldValues> = {};

    for (const issue of issues) {
      const path = issue.path && issue.path.length > 0 ? issue.path.join(".") : "_form";
      if (!errors[path as keyof FieldErrors<TFieldValues>]) {
        (errors as Record<string, unknown>)[path] = {
          type: issue.code || "validation",
          message: issue.message,
        };
      }
    }

    return {
      values: {} as Record<string, never>,
      errors,
    };
  };
};
