/**
 * Professional Services Data
 * Services Dhilip M genuinely provides based on proven technologies.
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export const services: ServiceItem[] = [
  {
    id: "full-stack-web",
    title: "Full-Stack Web Development",
    description:
      "Modern web applications built with Next.js, React, and TypeScript. Optimized for high performance, responsive layouts, and SEO.",
    deliverables: [
      "Server-rendered Next.js applications",
      "Type-safe TypeScript codebases",
      "SEO-friendly and accessible HTML",
      "API integrations & serverless endpoints",
    ],
    iconName: "Globe",
  },
  {
    id: "react-native-mobile",
    title: "React Native Mobile Apps",
    description:
      "Cross-platform mobile applications for iOS and Android built with React Native. Delivering consistent, intuitive user experiences from a unified codebase.",
    deliverables: [
      "Cross-platform iOS and Android builds",
      "Component-driven responsive mobile UI",
      "REST API synchronization",
      "Optimized mobile navigation flows",
    ],
    iconName: "Smartphone",
  },
  {
    id: "shopify-ecommerce",
    title: "Shopify Store & Theme Customization",
    description:
      "E-commerce storefront customization, custom Liquid templates, and tailored shopping experiences that drive sales and mobile conversions.",
    deliverables: [
      "Custom Shopify Liquid theme modifications",
      "Mobile-optimized product & collection pages",
      "Third-party app integration & setup",
      "Conversion-focused user journeys",
    ],
    iconName: "ShoppingBag",
  },
  {
    id: "shopify-apps",
    title: "Shopify App Development",
    description:
      "Custom app solutions and backend logic designed to extend Shopify stores with bespoke business features.",
    deliverables: [
      "Custom Shopify app features",
      "Admin API & Storefront API integrations",
      "Custom business workflow automation",
    ],
    iconName: "Layers",
  },
  {
    id: "wordpress-plugins",
    title: "WordPress Websites & Plugins",
    description:
      "Custom WordPress plugins, lead-generation popups, form integrations, and custom responsive theme implementations.",
    deliverables: [
      "Custom lead generation and popup plugins",
      "Form capture and notification flows",
      "Lightweight, clean PHP & JS scripting",
    ],
    iconName: "Code2",
  },
  {
    id: "api-database",
    title: "API Integrations & Database Solutions",
    description:
      "Database schema modeling, ORM configuration with Prisma, and RESTful API endpoints connecting web frontends to cloud data stores.",
    deliverables: [
      "PostgreSQL and MongoDB integration",
      "Prisma ORM setup & migrations",
      "Secure API route handlers with input validation",
    ],
    iconName: "Database",
  },
];
