/**
 * Centralized Public Site Configuration for Dhilip M
 * Safe to expose to both client and server components.
 * Contains no secret keys, credentials, or sensitive data.
 */

export const siteConfig = {
  name: "Dhilip M",
  shortName: "Dhilip",
  role: "Full Stack Developer | React Native Developer | Shopify App Developer",
  titles: [
    "Full Stack Developer",
    "React Native Developer",
    "Shopify App Developer",
    "Next.js Specialist",
  ],
  experienceYears: "1.5+",
  experienceLabel: "1.5 Years Professional Experience",
  location: "Coimbatore, Tamil Nadu, India",
  summary:
    "I build modern web applications, cross-platform mobile experiences, e-commerce websites, and custom Shopify solutions using modern JavaScript and TypeScript technologies.",
  aboutDetailed:
    "Engineering reliable, performant software with a strong focus on clean architecture, responsive UX, and scalable infrastructure. Proficient across the full stack—from intuitive Next.js web applications and cross-platform React Native mobile solutions to high-converting Shopify store customizations and robust backend integrations.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "/images/og-image.png",
  resumePath: "/resume.pdf",
  socials: {
    github: "https://github.com/Dhilip-Manikandan-dev",
    linkedin: "https://linkedin.com/in/dhilip-m",
    email: "dhilip.dev@example.com", // Public display placeholder / replacement safe
  },
  seo: {
    title: "Dhilip M — Full Stack, React Native & Shopify App Developer",
    description:
      "Portfolio of Dhilip M, a Full Stack Developer, React Native Developer, and Shopify App Developer based in Coimbatore, India. Building modern web, mobile, and e-commerce solutions.",
    keywords: [
      "Dhilip M",
      "Full Stack Developer",
      "React Native Developer",
      "Shopify App Developer",
      "Next.js Developer",
      "Coimbatore Developer",
      "TypeScript",
      "Tailwind CSS",
      "Portfolio",
    ],
    creator: "Dhilip M",
  },
  loader: {
    // Artificial delay in seconds configured via env variable (defaults to 0 if not provided or 0)
    delaySeconds: Number(process.env.NEXT_PUBLIC_LOADER_DELAY_SECONDS || 0),
  },
} as const;

export type SiteConfig = typeof siteConfig;
