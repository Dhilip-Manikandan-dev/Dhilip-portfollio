# Dhilip M — Developer Portfolio

A production-ready personal portfolio website for **Dhilip M** (Full Stack Developer, React Native Developer, and Shopify App Developer) built with senior software engineering practices.

Developed with **Next.js App Router (v16)**, **TypeScript (Strict Mode)**, **Tailwind CSS (v4)**, **GSAP & ScrollTrigger**, **Lenis Smooth Scroll**, **React Hook Form & Zod**, and **Nodemailer**.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Feature Highlights](#feature-highlights)
3. [Technology Stack](#technology-stack)
4. [Prerequisites](#prerequisites)
5. [Installation & Setup](#installation--setup)
6. [Available Scripts](#available-scripts)
7. [Environment Variables](#environment-variables)
8. [Artificial Preloader Configuration](#artificial-preloader-configuration)
9. [Architecture & Folder Structure](#architecture--folder-structure)
10. [Design System & Tokens](#design-system--tokens)
11. [Verified Project Showcase](#verified-project-showcase)
12. [Customization Guide](#customization-guide)
    - [Replacing Profile Portrait](#replacing-profile-portrait)
    - [Adding & Editing Projects](#adding--editing-projects)
    - [Updating Skills & Experience](#updating-skills--experience)
    - [Adding a Resume](#adding-a-resume)
    - [Configuring SMTP Email](#configuring-smtp-email)
13. [Security & Rate Limiting](#security--rate-limiting)
14. [Testing Suite](#testing-suite)
15. [Vercel Deployment Guide](#vercel-deployment-guide)
16. [Troubleshooting](#troubleshooting)

---

## Project Overview

This portfolio website highlights Dhilip M's 1.5 years of professional engineering experience across:
- **Full-Stack Web Development**: Next.js, React, TypeScript, Tailwind CSS.
- **Cross-Platform Mobile Apps**: React Native with TypeScript.
- **Shopify E-Commerce**: Storefront theme customizations (Liquid) & custom Shopify app development.
- **Backend & Cloud Infrastructure**: Node.js, Next.js Route Handlers, PostgreSQL, AWS (Amplify, Aurora RDS), Prisma, and MongoDB.
- **WordPress Ecosystem**: Custom lead-generation plugins and business websites.

---

## Feature Highlights

- **Server-First Rendering**: App Router pages rendered server-side by default with minimal client-side JavaScript.
- **Editorial Design Identity**: Curated deep navy, indigo, blue-violet, and cyan accent palette with tailored dark and light modes.
- **Accessible Interactions**: Semantic HTML5 landmarks, keyboard-friendly navigation, ARIA roles, and high-contrast focus rings.
- **Restrained Motion Architecture**: GSAP entrance timeline, section reveal animations, and Lenis smooth scrolling that automatically respect `prefers-reduced-motion`.
- **Configurable Preloader**: High-tech branded loading sequence with an artificial delay in seconds configured via `NEXT_PUBLIC_LOADER_DELAY_SECONDS`.
- **Verified Projects Grid**: Interactive category filtering without hover-dependent essential information.
- **Secure Contact Flow**:
  - Browser-side validation via React Hook Form and Zod.
  - Server-side validation, payload sanitization, and XSS protection.
  - Honeypot spam trap defense.
  - IP-based sliding-window rate limiting.
  - Nodemailer delivery: Owner notification + professional visitor acknowledgement email.
- **SEO & Social Sharing Ready**: Dynamic `robots.txt`, `sitemap.xml`, OpenGraph tags, and Twitter summary metadata.

---

## Technology Stack

| Domain | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router with Turbopack) |
| **Language** | TypeScript (Strict Mode) |
| **UI Library** | React 19 |
| **Styling** | Tailwind CSS v4 |
| **Typography** | Space Grotesk (Headings), DM Sans (Body) via `next/font/google` |
| **Animation** | GSAP 3 & ScrollTrigger |
| **Smooth Scroll** | Lenis |
| **Forms & Validation** | React Hook Form & Zod |
| **Icons** | Lucide React + custom inline SVG icons |
| **Theme Management** | next-themes (System, Light, Dark) |
| **Email Transport** | Nodemailer |
| **Testing** | Vitest, Testing Library, JSDOM |
| **Target Platform** | Vercel Serverless |

---

## Prerequisites

- **Node.js**: `v20.x` or `v22.x` (LTS recommended)
- **Package Manager**: `npm` (v10+)
- **Git**

---

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Dhilip-Manikandan-dev/Dhilip-portfollio.git
   cd portfollio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.example .env.local
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command | Action |
|---|---|
| `npm run dev` | Starts Next.js development server with Turbopack |
| `npm run build` | Builds an optimized production bundle with TypeScript checks |
| `npm start` | Runs the production build server locally |
| `npm test` | Runs the Vitest automated unit and component test suite |
| `npm run test:watch` | Runs Vitest in interactive watch mode |
| `npm run lint` | Runs ESLint analysis across codebase |

---

## Environment Variables

Copy `.env.example` to `.env.local` for local development.

```dotenv
# Environment Mode
NODE_ENV=development

# Canonical Public Website URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Artificial Preloader Delay in Seconds (Float or Integer)
# e.g. 1.5 for a 1.5-second preloader sequence; set to 0 or leave empty to disable
NEXT_PUBLIC_LOADER_DELAY_SECONDS=1.5

# SMTP / Email Configuration (Server-Side Only - Never Exposed to Browser)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
CONTACT_TO_EMAIL=dhilip.dev@example.com
CONTACT_FROM_EMAIL=portfolio@dhilip.dev
```

---

## Artificial Preloader Configuration

The portfolio includes a brand preloader component (`src/components/ui/Preloader.tsx`).

- **Control via environment variable**:
  - `NEXT_PUBLIC_LOADER_DELAY_SECONDS=1.5` -> Plays a 1.5-second brand preloader with animated progress counter and neon orbit ring before smoothly revealing the site.
  - `NEXT_PUBLIC_LOADER_DELAY_SECONDS=0` (or omitted) -> Bypasses the artificial delay instantly for immediate page access.
- **Accessibility**: Automatically skips if the visitor has `prefers-reduced-motion` enabled.

---

## Architecture & Folder Structure

```text
portfollio/
├── public/
│   ├── images/
│   │   ├── dhilip-profile.svg       # Default avatar/portrait
│   │   └── projects/                # Project illustration visuals
│   │       ├── sri-kaliyammal.svg
│   │       ├── hirez.svg
│   │       ├── looms-n-weaves.svg
│   │       ├── pattupadai.svg
│   │       ├── ys-leadgen.svg
│   │       ├── ys-innovation.svg
│   │       └── hyoka-pickpair.svg
│   ├── favicon.ico
│   └── resume.pdf                   # Downloadable resume placeholder
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts         # Secure contact route handler
│   │   ├── error.tsx                # Error boundary fallback
│   │   ├── globals.css              # Theme CSS tokens & utilities
│   │   ├── layout.tsx               # Root layout & Google fonts
│   │   ├── loading.tsx              # Suspense loading fallback
│   │   ├── not-found.tsx            # Accessible 404 page
│   │   ├── page.tsx                 # Server-rendered home page
│   │   ├── robots.ts                # SEO robots.txt generator
│   │   └── sitemap.ts               # SEO sitemap.xml generator
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           # Sticky header with mobile drawer
│   │   │   └── Footer.tsx           # Dynamic footer with scroll-to-top
│   │   ├── providers/
│   │   │   ├── SmoothScrollProvider.tsx # Lenis + GSAP integration
│   │   │   └── ThemeProvider.tsx    # next-themes wrapper
│   │   ├── sections/
│   │   │   ├── About.tsx            # Engineering disciplines
│   │   │   ├── Contact.tsx          # React Hook Form + Zod form
│   │   │   ├── Experience.tsx       # 1.5 year career timeline
│   │   │   ├── Hero.tsx             # Asymmetrical entrance hero
│   │   │   ├── Projects.tsx         # Category filterable projects grid
│   │   │   ├── Services.tsx         # Specialized service cards
│   │   │   └── Skills.tsx           # Categorized technology stack
│   │   └── ui/
│   │       ├── CustomCursor.tsx     # Fine-pointer follower
│   │       ├── Icons.tsx            # Custom SVG brand icons
│   │       ├── Preloader.tsx        # Configurable artificial loader
│   │       ├── ProjectCard.tsx      # Verified project showcase card
│   │       ├── SectionHeading.tsx   # Reusable section title badge
│   │       └── ThemeToggle.tsx      # Dark/Light theme toggle
│   ├── config/
│   │   ├── design-tokens.ts         # Centralized design system
│   │   ├── navigation.ts            # Header & footer links
│   │   └── site.ts                  # Public portfolio meta & details
│   ├── data/
│   │   ├── experience.ts            # Career data & placeholders
│   │   ├── projects.ts              # 7 verified projects
│   │   ├── services.ts              # Engineering offerings
│   │   └── skills.ts                # Categorized skill badges
│   ├── hooks/
│   │   └── useReducedMotion.ts      # Accessibility motion hook
│   ├── lib/
│   │   ├── animations.ts            # GSAP helpers & timelines
│   │   ├── email.ts                 # Nodemailer & HTML email templates
│   │   ├── rate-limit.ts            # Sliding-window rate limiter
│   │   ├── utils.ts                 # Classname & formatting utilities
│   │   └── validation.ts            # Zod validation schema
│   └── types/
│       ├── contact.ts               # Contact form interfaces
│       └── project.ts               # Project model types
├── tests/
│   ├── component/
│   │   └── ThemeToggle.test.tsx     # Theme toggle component test
│   ├── unit/
│   │   ├── email.test.ts            # HTML escaping & template test
│   │   ├── projects.test.ts         # 7-project verification test
│   │   └── validation.test.ts       # Zod schema validation test
│   └── setup.ts                     # Jest-DOM & matchMedia setup
├── .env.example
├── .env.local
├── package.json
├── tsconfig.json
└── vitest.config.ts
```

---

## Design System & Tokens

All design tokens are centralized in:
- `src/config/design-tokens.ts`: Typography scales, font families, animation presets, border radii, and spacing scales.
- `src/app/globals.css`: Semantic CSS variables for light and dark themes.

### Colors
- **Dark Mode Surfaces**: Deep navy (`#070b14`), Card navy (`#0c1322`), subtle border (`#1e293b`).
- **Light Mode Surfaces**: Clean neutral surface (`#f8fafc`), card surface (`#ffffff`), border (`#e2e8f0`).
- **Brand Accents**: Indigo (`#6366f1`), Blue-violet (`#8b5cf6`), Cyan (`#06b6d4`), Soft lavender (`#c7d2fe`).

---

## Verified Project Showcase

The portfolio strictly includes only the **7 verified projects**:

1. **Sri Kaliyammal** (Full-Stack Web) — Next.js, PostgreSQL, AWS Amplify, Amazon Aurora RDS.
2. **HireZ** (Mobile & Cross-Platform) — Next.js web portal + React Native cross-platform mobile apps.
3. **LoomsNWeaves** (Shopify E-Commerce) — Shopify Liquid customization for home & kitchen decor.
4. **Pattupadai** (Shopify E-Commerce) — E-commerce storefront for women's and children's clothing.
5. **YS LeadGen / YS Plugin** (WordPress & Plugins) — Popup and lead generation plugin for WordPress.
6. **YS Innovation** (Company Websites) — Corporate website presenting products and services.
7. **Hyoka and Pickpair** (Company Websites) — Organizational portfolio web experiences.

*No unauthorized projects (e.g. Smart Offer Rules) are included.*

---

## Customization Guide

### Replacing Profile Portrait
Place your real photo at `public/images/dhilip-profile.webp` (or `.png`/`.jpg`).
Update the image reference in `src/components/sections/Hero.tsx` if you choose a custom file extension.

### Adding & Editing Projects
Modify `src/data/projects.ts`. Each project adheres to the `Project` interface in `src/types/project.ts`:
```ts
{
  id: "your-project-id",
  name: "Project Name",
  category: "Full-Stack Web",
  summary: "Brief description of the product...",
  problem: "Key problem addressed...",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  contribution: "Your direct engineering responsibilities...",
  image: "/images/projects/your-project.svg",
  liveUrl: "https://example.com",
  featured: true,
}
```

### Updating Skills & Experience
- **Skills**: Edit `src/data/skills.ts` to add or remove badges under specific categories.
- **Experience**: Edit `src/data/experience.ts` to update the employer name, exact dates, and achievements.

### Adding a Resume
Add your compiled PDF to `public/resume.pdf`. The download path is pre-wired to `siteConfig.resumePath`.

### Configuring SMTP Email
In `.env.local` (local) or Vercel Project Settings (production):
1. **Host**: e.g., `smtp.resend.com` or `smtp.sendgrid.net`
2. **Port**: `587` (or `465` for SSL)
3. **User**: Your SMTP username or API key
4. **Pass**: Your SMTP password or API token
5. **CONTACT_TO_EMAIL**: Your personal email address where you want to receive messages.
6. **CONTACT_FROM_EMAIL**: A verified domain email address (e.g., `hello@yourdomain.com`).

*Note: In development mode, if SMTP credentials are left blank, submissions are validated and simulated gracefully without failing.*

---

## Security & Rate Limiting

- **XSS & Injection Defense**: All user inputs in `src/lib/email.ts` are escaped with `escapeHtml()` prior to template insertion.
- **Header Injection Defense**: Email headers (`from`, `to`, `replyTo`) are strictly isolated and not directly concatenated with unvalidated strings.
- **Spam Trap (Honeypot)**: A visually hidden field `websiteHoneypot` traps automated spam bots without requiring intrusive CAPTCHAs.
- **Sliding-Window Rate Limiter**: Implemented in `src/lib/rate-limit.ts` (default: 5 submissions per 2 minutes per IP).
- **Server-Side Isolation**: Nodemailer and credentials are only imported in server route handlers, ensuring zero client bundle leakage.

---

## Testing Suite

The project includes unit and component tests powered by **Vitest**:

```bash
npm test
```

### Tests Covered:
- `tests/unit/validation.test.ts`: Zod contact schema field constraints, lengths, and email formats.
- `tests/unit/projects.test.ts`: Enforces exactly 7 verified projects and verifies no unauthorized projects are present.
- `tests/unit/email.test.ts`: Verifies HTML escaping, XSS prevention, and template rendering.
- `tests/component/ThemeToggle.test.tsx`: Validates theme toggle rendering and user interaction.

---

## Vercel Deployment Guide

1. **Push your code to GitHub / GitLab:**
   ```bash
   git add .
   git commit -m "feat: complete production portfolio for Dhilip M"
   git push origin main
   ```

2. **Import into Vercel:**
   - Log in to [Vercel](https://vercel.com).
   - Click **Add New Project** and select your repository.
   - Framework preset will automatically detect **Next.js**.

3. **Configure Environment Variables in Vercel:**
   In the project settings, add:
   - `NEXT_PUBLIC_SITE_URL` = `https://your-domain.vercel.app`
   - `NEXT_PUBLIC_LOADER_DELAY_SECONDS` = `0` (or `1.5` if you prefer the intro animation)
   - `SMTP_HOST` = your SMTP host
   - `SMTP_PORT` = `587`
   - `SMTP_SECURE` = `false`
   - `SMTP_USER` = your SMTP user
   - `SMTP_PASS` = your SMTP password
   - `CONTACT_TO_EMAIL` = `your-email@example.com`
   - `CONTACT_FROM_EMAIL` = `portfolio@your-verified-domain.com`

4. **Deploy:**
   - Click **Deploy**. Vercel will run `npm run build` and provision serverless edge nodes for static pages and the contact API.

---

## Troubleshooting

### Contact form returns 503 Service Unavailable
Ensure `SMTP_HOST`, `SMTP_USER`, and `SMTP_PASS` are set in your environment variables. Check that your SMTP provider has verified your sender email (`CONTACT_FROM_EMAIL`).

### Loader delay customization
To disable the preloader delay in production, set `NEXT_PUBLIC_LOADER_DELAY_SECONDS=0` or leave it empty.

### Animations on mobile
If animations appear reduced on certain devices, check if the device has system "Reduce Motion" enabled. The application respects accessibility settings by default.

---

## License
MIT License © Dhilip M.
