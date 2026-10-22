import React from "react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Layout,
  Smartphone,
  Server,
  Database,
  ShoppingBag,
  Cloud,
  Wrench,
  LucideIcon,
} from "lucide-react";

// Icon mapping helper
const iconMap: Record<string, LucideIcon> = {
  Layout,
  Smartphone,
  Server,
  Database,
  ShoppingBag,
  Cloud,
  Wrench,
};

export function Skills() {
  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      className="py-20 md:py-28 relative bg-surface-subtle/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Skills"
          title="Curated Stack &"
          titleAccent="Modern Technologies"
          description="Technologies and frameworks I utilize in production to build resilient web, mobile, and commerce applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.iconName] || Layout;

            return (
              <div
                key={category.id}
                className="flex flex-col p-6 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base text-foreground">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                  {category.description}
                </p>

                {/* Technology Badges */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1 rounded-lg text-xs font-mono font-medium border transition-colors ${
                        skill.highlight
                          ? "bg-primary/10 text-primary border-primary/30"
                          : "bg-muted text-muted-foreground border-border/60"
                      }`}
                    >
                      {skill.name}
                    </span>
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
