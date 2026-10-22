"use client";

import React, { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Preloader() {
  const prefersReducedMotion = useReducedMotion();
  const configuredDelay = siteConfig.loader.delaySeconds; // from env NEXT_PUBLIC_LOADER_DELAY_SECONDS
  
  // If no delay or 0 or reduced motion, skip preloader immediately
  const shouldRun = configuredDelay > 0 && !prefersReducedMotion;
  const [isVisible, setIsVisible] = useState(shouldRun);
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (!shouldRun) {
      setIsVisible(false);
      return;
    }

    const totalDurationMs = configuredDelay * 1000;
    const intervalMs = 20;
    const step = 100 / (totalDurationMs / intervalMs);

    // Lock body scroll during preloader
    document.body.style.overflow = "hidden";

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return next;
      });
    }, intervalMs);

    const finishTimer = setTimeout(() => {
      setIsFadingOut(true);
      const exitTimer = setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = "";
      }, 500); // 500ms fadeout transition

      return () => clearTimeout(exitTimer);
    }, totalDurationMs);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(finishTimer);
      document.body.style.overflow = "";
    };
  }, [configuredDelay, shouldRun]);

  if (!isVisible) return null;

  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070b14] transition-opacity duration-500 ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute w-72 h-72 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
        {/* Animated Brand Monogram / Orbit */}
        <div className="relative flex items-center justify-center w-24 h-24 mb-8">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 opacity-20 blur-lg animate-pulse" />
          <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-[#0c1322] border border-indigo-500/30 shadow-2xl">
            <span className="font-heading text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              DM
            </span>
          </div>
          {/* Circular Orbit Indicator */}
          <div className="absolute -inset-1 rounded-3xl border border-indigo-500/30 animate-spin" style={{ animationDuration: "8s" }} />
        </div>

        {/* Title */}
        <h2 className="font-heading text-xl font-semibold text-white tracking-tight mb-2">
          {siteConfig.name}
        </h2>
        <p className="text-xs font-mono uppercase tracking-widest text-indigo-300/80 mb-6">
          Full Stack Developer
        </p>

        {/* Progress Bar */}
        <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden mb-3 border border-slate-700/50">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 transition-all duration-75 ease-out"
            style={{ width: `${Math.min(100, Math.round(progress))}%` }}
          />
        </div>

        {/* Percentage Counter */}
        <span className="text-xs font-mono text-slate-400">
          {Math.min(100, Math.round(progress))}%
        </span>
      </div>
    </div>
  );
}
