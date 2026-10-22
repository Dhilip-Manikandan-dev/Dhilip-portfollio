import { describe, it, expect } from "vitest";
import {
  escapeHtml,
  createOwnerEmailHtml,
  createVisitorAcknowledgementHtml,
} from "@/lib/email";

describe("Email Service & Templates", () => {
  it("escapes malicious HTML characters to prevent XSS", () => {
    const malicious = `<script>alert("xss")</script> & 'hello' "world"`;
    const escaped = escapeHtml(malicious);

    expect(escaped).not.toContain("<script>");
    expect(escaped).toContain("&lt;script&gt;");
    expect(escaped).toContain("&amp;");
    expect(escaped).toContain("&quot;");
    expect(escaped).toContain("&#039;");
  });

  it("renders owner email template safely with escaped user inputs", () => {
    const testData = {
      name: "Jane <Tester>",
      email: "jane@example.com",
      subject: "Test & Review",
      message: "Testing <b>HTML escaping</b> behavior.",
      company: "Acme & Co",
    };

    const html = createOwnerEmailHtml(testData, "2026-10-22");
    expect(html).toContain("Jane &lt;Tester&gt;");
    expect(html).toContain("jane@example.com");
    expect(html).toContain("Test &amp; Review");
    expect(html).toContain("Acme &amp; Co");
    expect(html).not.toContain("<b>HTML escaping</b>");
  });

  it("renders visitor acknowledgement template with recipient name", () => {
    const html = createVisitorAcknowledgementHtml("Alex Smith");
    expect(html).toContain("Hi Alex Smith,");
    expect(html).toContain("Thank you for reaching out through my portfolio.");
    expect(html).toContain("Dhilip M");
  });
});
