import React from "react";
import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Professional Experience"
      className="py-20 md:py-28 relative bg-surface-subtle/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Career Journey"
          title="Professional Experience &"
          titleAccent="Milestones"
          description="1.5 years of continuous engineering experience across modern web platforms, mobile applications, and e-commerce ecosystems."
        />

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/30 pb-12 last:pb-0"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-md" />

              <div className="p-6 sm:p-8 rounded-2xl border border-border bg-card/70 backdrop-blur-sm hover:border-primary/40 transition-all shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-primary/10 text-primary border border-primary/20">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground font-mono">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    {exp.location}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                  {exp.role}
                </h3>

                <p className="text-sm font-medium text-primary mb-4 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4" />
                  <span>{exp.company}</span>
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {exp.summary}
                </p>

                {/* Key Responsibilities / Highlights */}
                <div className="space-y-2.5 mb-6">
                  {exp.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-foreground/90 font-medium leading-relaxed"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Used */}
                <div className="pt-4 border-t border-border/60">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block mb-2">
                    Technologies Applied:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-muted text-muted-foreground border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
