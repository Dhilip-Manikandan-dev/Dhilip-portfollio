/**
 * Professional Experience Data
 * Represents 1.5 years of verified professional experience.
 * Clear placeholders provided for employer and dates to allow straightforward customization.
 */

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Full Stack Developer & Shopify Developer",
    company: "[Company / Organization Name]", // Replace with actual employer name
    location: "Coimbatore, Tamil Nadu, India",
    period: "2023 — Present (1.5 Years Total)",
    isCurrent: true,
    summary:
      "Developing production web applications, cross-platform mobile apps with React Native, and high-performance Shopify storefront customizations.",
    highlights: [
      "Engineered full-stack web applications with Next.js and TypeScript, integrating PostgreSQL and AWS cloud infrastructure.",
      "Built cross-platform mobile interfaces using React Native for unified iOS and Android experiences.",
      "Customized Shopify themes (Liquid) and configured plugins to optimize client e-commerce stores.",
      "Maintained modular WordPress plugins and responsive company websites with clean code standards.",
    ],
    technologies: [
      "Next.js",
      "React Native",
      "TypeScript",
      "Shopify Liquid",
      "WordPress",
      "PostgreSQL",
      "AWS",
    ],
  },
];
