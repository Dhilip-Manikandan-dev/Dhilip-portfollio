import React from "react";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Code2,
  Smartphone,
  ShoppingBag,
  Globe,
  Database,
  CheckCircle2,
} from "lucide-react";

export function About() {
  const domains = [
    {
      icon: Globe,
      title: "Web Applications",
      description:
        "Developing production-ready Next.js and React web apps with server-side rendering, strict TypeScript safety, and fast Core Web Vitals.",
    },
    {
      icon: Smartphone,
      title: "React Native Mobile",
      description:
        "Building cross-platform iOS and Android mobile experiences with shared component libraries, smooth gestures, and responsive layouts.",
    },
    {
      icon: ShoppingBag,
      title: "Shopify E-Commerce",
      description:
        "Customizing Shopify themes using Liquid, structuring product architectures, and building bespoke apps to drive conversions and sales.",
    },
    {
      icon: Code2,
      title: "WordPress & Plugins",
      description:
        "Engineering modular WordPress plugins, interactive popup tools, lead-generation forms, and clean customized themes.",
    },
    {
      icon: Database,
      title: "Backend & Databases",
      description:
        "Architecting serverless API routes, integrating relational databases with PostgreSQL and Prisma, and deploying scalable AWS infrastructure.",
    },
  ];

  return (
    <section
      id="about"
      aria-label="About Dhilip M"
      className="py-20 md:py-28 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Engineering Across"
          titleAccent="Web, Mobile & E-Commerce"
          description="A multi-disciplinary software engineer dedicated to crafting reliable digital products with maintainable architectures."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Detailed Narrative Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl border border-border bg-card/60 backdrop-blur-sm">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                Full-Stack Versatility & Attention to Detail
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {siteConfig.aboutDetailed}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                With 1.5 years of hands-on professional software engineering experience based in Coimbatore, Tamil Nadu, I partner with companies and founders to turn complex product requirements into resilient codebases.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-border/60">
                {[
                  "Clean Architecture & Type Safety with TypeScript",
                  "Performance-focused (LCP, CLS, and minimal client JS)",
                  "Seamless cross-platform experiences (Web & Mobile)",
                  "Custom Shopify storefronts & Liquid templating",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs text-foreground/90 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Focus Domains Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {domains.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl border border-border/80 bg-card/40 hover:bg-card/80 hover:border-primary/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-semibold text-base text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
