"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { createHeroEntrance } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ArrowDown, ArrowUpRight, Code, Sparkles, MapPin, Briefcase } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const anim = createHeroEntrance({
      badge: badgeRef.current,
      heading: headingRef.current,
      subheading: subheadingRef.current,
      cta: ctaRef.current,
      highlights: highlightsRef.current,
      portrait: portraitRef.current,
    });

    return () => {
      anim?.kill();
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={containerRef}
      id="hero"
      aria-label="Hero Section"
      className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden"
    >
      {/* Dynamic ambient radial lighting */}
      <div className="absolute top-1/4 -left-20 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-indigo-600/15 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-80 sm:w-[450px] h-80 sm:h-[450px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introductions and CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status & Availability Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-mono font-medium tracking-wide mb-6 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Full-Time Roles & Freelance</span>
            </div>

            {/* Main Heading */}
            <h1
              ref={headingRef}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6"
            >
              Building Modern Web,{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Cross-Platform Mobile
              </span>{" "}
              & Shopify Apps.
            </h1>

            {/* Subheading / Professional Summary */}
            <p
              ref={subheadingRef}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8"
            >
              Hi, I&apos;m <strong className="text-foreground font-semibold">{siteConfig.name}</strong>, a{" "}
              <span className="text-foreground font-medium">Full Stack Developer</span>,{" "}
              <span className="text-foreground font-medium">React Native Developer</span>, and{" "}
              <span className="text-foreground font-medium">Shopify App Developer</span> based in {siteConfig.location}.
              I engineer high-performance software with clean architecture and refined user experiences.
            </p>

            {/* Primary Calls to Action */}
            <div
              ref={ctaRef}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/35 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-border bg-card/70 hover:bg-accent/40 text-foreground font-semibold text-sm transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Key Technology Highlights Strip */}
            <div
              ref={highlightsRef}
              className="w-full pt-6 border-t border-border/60"
            >
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-primary" />
                <span>Core Stack:</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "React Native",
                  "Shopify Liquid",
                  "PostgreSQL",
                  "Tailwind CSS",
                  "AWS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-muted text-muted-foreground border border-border/50 hover:border-primary/40 hover:text-foreground transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Profile Showcase & Meta Card */}
          <div
            ref={portraitRef}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Layered Decorative Backdrop Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-500/30 via-purple-500/20 to-cyan-500/30 blur-xl opacity-75" />

              {/* Main Profile Card Container */}
              <div className="relative rounded-3xl border border-border/80 bg-card/90 p-6 sm:p-7 backdrop-blur-xl shadow-2xl">
                {/* Visual Avatar / Profile Area */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border border-border/60 mb-6 flex flex-col items-center justify-center text-center p-6">
                  {/* Portrait Image with deliberate fallback */}
                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white text-3xl font-extrabold shadow-xl mb-4">
                      DM
                    </div>
                    <span className="font-heading font-bold text-lg text-white">
                      {siteConfig.name}
                    </span>
                    <span className="text-xs font-mono text-cyan-300 mt-1">
                      Full Stack Developer
                    </span>
                    <span className="text-[11px] text-slate-400 mt-2 max-w-[200px]">
                      Photo placeholder (replace at /public/images/dhilip-profile.webp)
                    </span>
                  </div>

                  {/* Corner Accent Badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-emerald-400">
                    <Sparkles className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Quick Profile Meta Grid */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-surface-subtle/60 border border-border/50">
                    <span className="text-muted-foreground block text-[10px] uppercase font-mono mb-1">
                      Experience
                    </span>
                    <span className="font-semibold text-foreground flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-primary" />
                      1.5 Years
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-surface-subtle/60 border border-border/50">
                    <span className="text-muted-foreground block text-[10px] uppercase font-mono mb-1">
                      Location
                    </span>
                    <span className="font-semibold text-foreground flex items-center gap-1 truncate">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      Coimbatore, IN
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
