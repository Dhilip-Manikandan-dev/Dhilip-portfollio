import { Project } from "@/types/project";

/**
 * Verified Portfolio Projects for Dhilip M
 * Strictly adheres to verified projects list:
 * 1. YS LeadGen / YS Plugin
 * 2. YS Innovation
 * 3. Hyoka and Pickpair
 * 4. LoomsNWeaves
 * 5. Pattupadai
 * 6. Sri Kaliyammal
 * 7. HireZ
 */

export const projects: Project[] = [
  {
    id: "sri-kaliyammal",
    name: "Sri Kaliyammal",
    category: "Full-Stack Web",
    summary:
      "A full-stack web application developed using Next.js with PostgreSQL data storage and AWS cloud infrastructure.",
    problem:
      "Building a performant, reliable web application requiring secure relational data handling and scalable cloud deployment.",
    technologies: ["Next.js", "PostgreSQL", "AWS Amplify", "Amazon Aurora RDS", "TypeScript", "Tailwind CSS"],
    contribution:
      "Engineered frontend interfaces and integrated database persistence via AWS cloud infrastructure and Next.js.",
    targetAudience: "End-users and administrators managing service data",
    image: "/images/projects/sri-kaliyammal.svg",
    liveUrl: "https://example.com/sri-kaliyammal", // Replace with verified production URL when provided
    featured: true,
  },
  {
    id: "hirez",
    name: "HireZ",
    category: "Mobile & Cross-Platform",
    summary:
      "A full-stack platform featuring a responsive web portal and cross-platform mobile applications for iOS and Android.",
    problem:
      "Delivering a unified user experience across web and mobile ecosystems with consistent functionality and data synchronization.",
    technologies: ["Next.js", "React Native", "TypeScript", "AWS", "REST APIs", "Tailwind CSS"],
    contribution:
      "Developed web frontend interfaces with Next.js and cross-platform mobile views using React Native with TypeScript.",
    targetAudience: "Hiring teams, recruiters, and candidates",
    image: "/images/projects/hirez.svg",
    liveUrl: "https://example.com/hirez", // Replace with verified production URL when provided
    featured: true,
  },
  {
    id: "looms-n-weaves",
    name: "LoomsNWeaves",
    category: "Shopify E-Commerce",
    summary:
      "A customized Shopify e-commerce storefront crafted for home and kitchen accessories, featuring optimized mobile shopping.",
    problem:
      "Creating an intuitive, high-conversion shopping experience with custom liquid templating and responsive design across all devices.",
    technologies: ["Shopify Liquid", "JavaScript", "HTML5", "CSS3 / Sass", "Responsive Design"],
    contribution:
      "Implemented storefront theme customizations, product page layouts, and optimized mobile-first navigation.",
    targetAudience: "Online home decor and kitchenware shoppers",
    image: "/images/projects/looms-n-weaves.svg",
    liveUrl: "https://loomsnweaves.com", // Verified brand domain
    featured: true,
  },
  {
    id: "pattupadai",
    name: "Pattupadai",
    category: "Shopify E-Commerce",
    summary:
      "An e-commerce storefront for women's and children's clothing with tailored theme customizations and catalog organization.",
    problem:
      "Developing an elegant, fast-loading shopping storefront tailored for apparel categories, filters, and checkout readiness.",
    technologies: ["Shopify", "Liquid", "JavaScript", "Responsive UI", "E-Commerce Optimization"],
    contribution:
      "Customized Shopify theme components, catalog browsing layouts, and mobile shopping experience.",
    targetAudience: "Shoppers seeking traditional and modern apparel for women and children",
    image: "/images/projects/pattupadai.svg",
    liveUrl: "https://pattupadai.com", // Verified brand domain
    featured: true,
  },
  {
    id: "ys-leadgen",
    name: "YS LeadGen / YS Plugin",
    category: "WordPress & Plugins",
    summary:
      "A dedicated popup and form generator plugin for WordPress websites designed to streamline lead capture and conversions.",
    problem:
      "Enabling non-technical website owners to configure customizable modal forms and capture user inquiries effortlessly.",
    technologies: ["WordPress API", "PHP", "JavaScript", "CSS3", "Plugin Architecture"],
    contribution:
      "Developed interactive popup triggers, form rendering mechanics, and administrative configuration options.",
    targetAudience: "WordPress website owners and digital marketing practitioners",
    image: "/images/projects/ys-leadgen.svg",
    featured: false,
  },
  {
    id: "ys-innovation",
    name: "YS Innovation",
    category: "Company Websites",
    summary:
      "A corporate company website showcasing services, innovation products, and business identity with polished presentation.",
    problem:
      "Establishing an authoritative web presence with clear service presentations and responsive customer touchpoints.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Semantic HTML"],
    contribution:
      "Built responsive page templates, service showcase sections, and company contact channels.",
    targetAudience: "Prospective business clients and enterprise partners",
    image: "/images/projects/ys-innovation.svg",
    featured: false,
  },
  {
    id: "hyoka-and-pickpair",
    name: "Hyoka and Pickpair",
    category: "Company Websites",
    summary:
      "Company-related websites engineered as part of the organizational digital portfolio.",
    problem:
      "Creating modern, accessible web experiences that present product portfolios with strong visual hierarchy.",
    technologies: ["JavaScript", "HTML5", "CSS3", "UI/UX Architecture", "Responsive Layouts"],
    contribution:
      "Constructed structured web layouts, component navigation, and cross-browser styling.",
    targetAudience: "Target visitors, platform users, and portfolio stakeholders",
    image: "/images/projects/hyoka-pickpair.svg",
    featured: false,
  },
];
