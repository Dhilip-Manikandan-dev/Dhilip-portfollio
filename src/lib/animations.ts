import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isScrollTriggerRegistered = false;

/**
 * Safely registers GSAP ScrollTrigger plugin on the client once.
 */
export function registerGsapPlugins(): boolean {
  if (typeof window === "undefined") return false;

  if (!isScrollTriggerRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    isScrollTriggerRegistered = true;
  }
  return true;
}

/**
 * Reusable scroll reveal animation setup
 */
export function createScrollReveal(
  targets: gsap.DOMTarget,
  options?: {
    trigger?: gsap.DOMTarget;
    start?: string;
    stagger?: number;
    delay?: number;
    yOffset?: number;
  }
) {
  if (typeof window === "undefined") return null;
  registerGsapPlugins();

  const trigger = options?.trigger || targets;
  const stagger = options?.stagger ?? 0.12;
  const yOffset = options?.yOffset ?? 32;

  return gsap.fromTo(
    targets,
    {
      opacity: 0,
      y: yOffset,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger,
      scrollTrigger: {
        trigger: trigger as Element,
        start: options?.start ?? "top 85%",
        once: true,
      },
    }
  );
}

/**
 * Hero section entrance animation sequence
 */
export function createHeroEntrance(elements: {
  badge?: Element | null;
  heading?: Element | null;
  subheading?: Element | null;
  cta?: Element | null;
  highlights?: Element | null;
  portrait?: Element | null;
}) {
  if (typeof window === "undefined") return null;

  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
  });

  if (elements.badge) {
    tl.fromTo(
      elements.badge,
      { opacity: 0, y: -16, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6 }
    );
  }

  if (elements.heading) {
    tl.fromTo(
      elements.heading,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.3"
    );
  }

  if (elements.subheading) {
    tl.fromTo(
      elements.subheading,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7 },
      "-=0.4"
    );
  }

  if (elements.cta) {
    tl.fromTo(
      elements.cta,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    );
  }

  if (elements.highlights) {
    tl.fromTo(
      elements.highlights,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    );
  }

  if (elements.portrait) {
    tl.fromTo(
      elements.portrait,
      { opacity: 0, scale: 0.95, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.8"
    );
  }

  return tl;
}
