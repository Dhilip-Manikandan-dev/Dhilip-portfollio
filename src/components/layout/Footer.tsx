"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { navItems } from "@/config/navigation";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-border bg-card/40 backdrop-blur-md pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                D
              </div>
              <span className="font-heading font-bold text-xl text-foreground">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              {siteConfig.summary}
            </p>
            <p className="text-xs text-muted-foreground/80 font-mono">
              Based in {siteConfig.location}
            </p>
          </div>

          {/* Navigation Quick Links */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social and Connect */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground mb-4">
              Connect
            </h4>
            <div className="flex items-center gap-3 mb-4">
              {siteConfig.socials.github && (
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex items-center justify-center w-9 h-9 rounded-xl border border-border bg-card/60 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
              {siteConfig.socials.linkedin && (
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex items-center justify-center w-9 h-9 rounded-xl border border-border bg-card/60 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}
              {siteConfig.socials.email && (
                <a
                  href={`mailto:${siteConfig.socials.email}`}
                  aria-label="Email Dhilip M"
                  className="flex items-center justify-center w-9 h-9 rounded-xl border border-border bg-card/60 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              Open for full-time opportunities & freelance collaborations.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/80 bg-card/60 hover:bg-accent/40 text-foreground transition-all cursor-pointer"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
