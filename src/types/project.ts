/**
 * Project Types Definition
 */

export type ProjectCategory =
  | "All"
  | "Full-Stack Web"
  | "Mobile & Cross-Platform"
  | "Shopify E-Commerce"
  | "WordPress & Plugins"
  | "Company Websites";

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  summary: string;
  problem?: string;
  technologies: string[];
  contribution: string;
  targetAudience?: string;
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  detailUrl?: string;
  featured?: boolean;
}
