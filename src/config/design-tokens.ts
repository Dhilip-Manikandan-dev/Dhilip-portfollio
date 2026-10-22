/**
 * Centralized Design Tokens for Dhilip M's Portfolio
 * Encapsulates color palettes, typography rules, spacing, radii, shadows, and animation constants.
 */

export const designTokens = {
  fonts: {
    heading: "var(--font-heading), 'Space Grotesk', sans-serif",
    body: "var(--font-body), 'DM Sans', sans-serif",
    mono: "var(--font-mono), monospace",
  },
  typography: {
    sizes: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "3.75rem", // 60px
      "7xl": "4.5rem", // 72px
    },
    weights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeights: {
      tight: 1.15,
      snug: 1.25,
      normal: 1.5,
      relaxed: 1.65,
    },
    letterSpacing: {
      tighter: "-0.04em",
      tight: "-0.02em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
    },
  },
  colors: {
    brand: {
      navy: "#0a0f1d",
      deepNavy: "#050811",
      surfaceNavy: "#0e1526",
      cardNavy: "#121b30",
      borderNavy: "#1e293b",
      indigo: "#6366f1",
      indigoGlow: "#4f46e5",
      blueViolet: "#8b5cf6",
      cyanAccent: "#06b6d4",
      tealAccent: "#14b8a6",
      softLavender: "#c7d2fe",
      paleMuted: "#94a3b8",
    },
    lightMode: {
      surface: "#f8fafc",
      card: "#ffffff",
      border: "#e2e8f0",
      textPrimary: "#0f172a",
      textMuted: "#64748b",
      accent: "#4f46e5",
    },
  },
  gradients: {
    heroHeading: "linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #818cf8 100%)",
    brandPrimary: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)",
    accentGlow: "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, rgba(5, 8, 17, 0) 70%)",
    cardBorder: "linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%)",
    subtleGlass: "linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)",
  },
  shadows: {
    subtle: "0 4px 20px -2px rgba(0, 0, 0, 0.15)",
    card: "0 10px 30px -10px rgba(0, 0, 0, 0.3)",
    glow: "0 0 35px -5px rgba(99, 102, 241, 0.25)",
    glowCyan: "0 0 35px -5px rgba(6, 182, 212, 0.25)",
  },
  radii: {
    sm: "0.375rem", // 6px
    md: "0.5rem", // 8px
    lg: "0.75rem", // 12px
    xl: "1rem", // 16px
    "2xl": "1.5rem", // 24px
    full: "9999px",
  },
  spacing: {
    sectionPaddingY: "5rem", // 80px
    sectionPaddingX: "1.5rem",
    containerMax: "1200px",
  },
  animations: {
    duration: {
      fast: 0.2,
      normal: 0.4,
      smooth: 0.7,
      slow: 1.0,
    },
    easing: {
      standard: "power2.out",
      smoothEntrance: "power3.out",
      expoOut: "expo.out",
      springLike: "back.out(1.4)",
    },
  },
  layout: {
    navbarHeight: "4.5rem", // 72px
    mobileNavHeight: "4rem",
    maxContentWidth: "75rem", // 1200px
  },
} as const;

export type DesignTokens = typeof designTokens;
