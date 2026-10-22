/**
 * Navigation Configuration
 * Centralizes all header and footer links, anchors, and display order.
 */

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const navItems: NavItem[] = [
  {
    label: "About",
    href: "#about",
    description: "Background & overview",
  },
  {
    label: "Skills",
    href: "#skills",
    description: "Core technologies & stack",
  },
  {
    label: "Projects",
    href: "#projects",
    description: "Featured engineering work",
  },
  {
    label: "Experience",
    href: "#experience",
    description: "Career timeline & growth",
  },
  {
    label: "Services",
    href: "#services",
    description: "Capabilities & client offerings",
  },
  {
    label: "Contact",
    href: "#contact",
    description: "Get in touch or enquire",
  },
];
