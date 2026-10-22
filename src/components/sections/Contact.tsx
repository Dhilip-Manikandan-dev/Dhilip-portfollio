"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { contactFormSchema, ContactFormValues, zodFormResolver } from "@/lib/validation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import {
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export function Contact() {
  const [submissionState, setSubmissionState] = useState<{
    status: "idle" | "loading" | "success" | "error";
    message?: string;
  }>({ status: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodFormResolver(contactFormSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      company: "",
      websiteHoneypot: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmissionState({ status: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setSubmissionState({
          status: "error",
          message:
            result.message ||
            "Unable to submit message. Please try again or reach out directly via email.",
        });
        return;
      }

      setSubmissionState({
        status: "success",
        message:
          result.message ||
          "Thank you! Your message has been sent. An acknowledgement email was dispatched to your inbox.",
      });
      reset();
    } catch {
      setSubmissionState({
        status: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="py-20 md:py-28 relative bg-surface-subtle/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Build Something"
          titleAccent="Remarkable Together"
          description="Have a new project, an open role, or require consulting for web, mobile, or Shopify development? Send an enquiry below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl border border-border bg-card/70 backdrop-blur-sm space-y-6">
              <h3 className="font-heading text-xl font-bold text-foreground">
                Contact Information
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I am actively considering full-time engineering opportunities, freelance projects, and custom Shopify / React Native consulting.
              </p>

              <div className="space-y-4 pt-4 border-t border-border/60">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-muted-foreground block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${siteConfig.socials.email}`}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {siteConfig.socials.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-muted-foreground block">
                      Location
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {siteConfig.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-muted-foreground block">
                      Response Time
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      Typically within 24 business hours
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-border bg-card/80 backdrop-blur-md shadow-xl">
              {/* Submission Notification Banners */}
              {submissionState.status === "success" && (
                <div
                  role="alert"
                  className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{submissionState.message}</span>
                </div>
              )}

              {submissionState.status === "error" && (
                <div
                  role="alert"
                  className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{submissionState.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                {/* Honeypot field - visually hidden to prevent spam bots */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="websiteHoneypot">Website</label>
                  <input
                    id="websiteHoneypot"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    {...register("websiteHoneypot")}
                  />
                </div>

                {/* Name and Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div suppressHydrationWarning>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-foreground mb-1.5"
                    >
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      suppressHydrationWarning
                      placeholder="e.g. Alex Morgan"
                      {...register("name")}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-background text-foreground text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all ${
                        errors.name ? "border-red-500/60" : "border-border"
                      }`}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs text-red-400 mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div suppressHydrationWarning>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-foreground mb-1.5"
                    >
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      suppressHydrationWarning
                      placeholder="alex@company.com"
                      {...register("email")}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-background text-foreground text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all ${
                        errors.email ? "border-red-500/60" : "border-border"
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-red-400 mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject & Optional Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-medium text-foreground mb-1.5"
                    >
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="New project enquiry"
                      {...register("subject")}
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-background text-foreground text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all ${
                        errors.subject ? "border-red-500/60" : "border-border"
                      }`}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="text-xs text-red-400 mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-medium text-foreground mb-1.5"
                    >
                      Company or Project <span className="text-muted-foreground text-[10px]">(Optional)</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Company name"
                      {...register("company")}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-foreground mb-1.5"
                  >
                    Your Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Provide details about your project, timeline, or engineering goals..."
                    {...register("message")}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full px-3.5 py-2.5 rounded-xl border bg-background text-foreground text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all resize-y ${
                      errors.message ? "border-red-500/60" : "border-border"
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-red-400 mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submissionState.status === "loading"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-md shadow-primary/20 hover:shadow-primary/30 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {submissionState.status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Enquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
