import React from "react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Globe,
  Smartphone,
  ShoppingBag,
  Layers,
  Code2,
  Database,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";

const serviceIcons: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  ShoppingBag,
  Layers,
  Code2,
  Database,
};

export function Services() {
  return (
    <section
      id="services"
      aria-label="Engineering Services"
      className="py-20 md:py-28 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Services & Offerings"
          title="Specialized Capabilities &"
          titleAccent="Engineering Services"
          description="High-quality software development services tailored for modern startups, established brands, and growing businesses."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = serviceIcons[service.iconName] || Globe;

            return (
              <div
                key={service.id}
                className="flex flex-col p-6 sm:p-7 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables checklist */}
                <div className="mt-auto pt-4 border-t border-border/60 space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block mb-1">
                    Key Deliverables:
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-foreground/80"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
