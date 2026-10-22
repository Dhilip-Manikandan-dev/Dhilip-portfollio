/**
 * Technical Skills Data
 * Categorized strictly according to verified technologies.
 * No arbitrary percentages or fake proficiency scores.
 */

export interface SkillItem {
  name: string;
  description?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Building responsive, accessible, and high-performance user interfaces with modern React ecosystems.",
    iconName: "Layout",
    skills: [
      { name: "React", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "JavaScript (ES6+)" },
      { name: "HTML5 & Semantic Web" },
      { name: "CSS3 & Modern Layouts" },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description: "Developing cross-platform mobile apps for iOS and Android with native feel and shared codebases.",
    iconName: "Smartphone",
    skills: [
      { name: "React Native", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "NativeWind" },
      { name: "Mobile UI/UX" },
      { name: "Cross-Platform Optimization" },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description: "Creating resilient server-side routes, API integrations, and scalable business logic.",
    iconName: "Server",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "Next.js Route Handlers", highlight: true },
      { name: "RESTful APIs" },
      { name: "Serverless Architecture" },
    ],
  },
  {
    id: "data",
    title: "Databases & ORM",
    description: "Managing relational and document data storage with type-safe queries and data modeling.",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL", highlight: true },
      { name: "Prisma ORM", highlight: true },
      { name: "MongoDB", highlight: true },
      { name: "Data Modeling" },
    ],
  },
  {
    id: "platforms",
    title: "E-Commerce & CMS Platforms",
    description: "Customizing store themes, liquid architectures, and extensible CMS solutions.",
    iconName: "ShoppingBag",
    skills: [
      { name: "Shopify Themes", highlight: true },
      { name: "Shopify App Development", highlight: true },
      { name: "Liquid Templating" },
      { name: "WordPress & Plugins", highlight: true },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Deployment",
    description: "Deploying and managing web services on modern cloud platforms with reliable automation.",
    iconName: "Cloud",
    skills: [
      { name: "AWS (Amplify & Aurora)", highlight: true },
      { name: "Google Cloud Platform" },
      { name: "Vercel Deployment", highlight: true },
      { name: "CI/CD & Git Workflows" },
    ],
  },
  {
    id: "tools",
    title: "Engineering Tools",
    description: "Productivity, version control, and testing workflows.",
    iconName: "Wrench",
    skills: [
      { name: "Git & GitHub", highlight: true },
      { name: "VS Code" },
      { name: "Postman" },
      { name: "npm / Node Tooling" },
      { name: "Vitest & Testing" },
    ],
  },
];
