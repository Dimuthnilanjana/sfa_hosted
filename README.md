# Prima SFA - Production Marketing Website

A modern, high-converting, trust-focused marketing website built for **Prima SFA** (Sales Force Automation) by Prima Management Services (Pvt) Ltd, Colombo, Sri Lanka.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS + Custom Design System tokens
- **Animations**: Framer Motion (respects `prefers-reduced-motion`)
- **Icons**: Lucide React (1.75 stroke)
- **Forms**: React Hook Form + Zod validation
- **Typography**: Google Fonts via `next/font/google` (`Plus Jakarta Sans` & `Inter`)

---

## 🛠️ Getting Started

### 1. Prerequisites
- Node.js LTS (v18.19+ or v20+)
- npm v10+

### 2. Development Server
Run the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Type Checking & Linting
Validate TypeScript signatures and ESLint rules:
```bash
npx tsc --noEmit
npm run lint
```

### 4. Build Production Bundle
Build and test the production bundle locally:
```bash
npm run build
npm start
```

---

## ⚙️ Project Configuration & Content Management

All copy, configuration, contact information, features, and specs are centralized in single-source config files so non-developers can update content easily without altering JSX code:

- `/config/site.ts`: Product name, tagline, company info, hotline numbers, WhatsApp link, address, social channels, and video demo URL.
- `/data/features.ts`: Features bento grid titles, descriptions, and icon mappings.
- `/data/roles.ts`: Role-based benefits for Field Reps, Distributors, and Management.
- `/data/steps.ts`: 4-step "How it Works" workflow definitions.
- `/data/stats.ts`: Animated counter metrics (Reps, Distributors, Invoices, Years).
- `/data/testimonials.ts`: Customer reviews, featured quote, before/after metrics, and case studies.
- `/data/clients.ts`: Client/Distributor logo placeholders and categories.
- `/data/specs.ts`: Hardware, software, offline, and cloud technical matrix.
- `/data/faq.ts`: FAQ questions and answers (auto-generates JSON-LD schema).

---

## 🖼️ How to Swap Real Screenshots & Logos

1. **Client Logos**:
   - Save your logo SVG or PNG files in `/public/logos/`.
   - Update `/data/clients.ts` with the path and real company name.

2. **App Screenshots**:
   - Save mobile app screenshots in `/public/screens/` (e.g. `/public/screens/invoice.png`).
   - Replace the SVG/HTML mockup components in `/components/visuals/` or update image props in `/components/sections/Hero.tsx` and `AppShowcase.tsx`.

---

## 📬 Connecting Form Submissions (API / Webhooks / Email)

The demo request form posts data to `/api/demo-request/route.ts`.

To forward lead notifications to Slack, Microsoft Teams, Email, or CRM:
1. Create a `.env.local` file based on `.env.example`:
   ```env
   DEMO_WEBHOOK_URL="https://hooks.slack.com/services/YOUR/WEBHOOK/URL"
   RESEND_API_KEY="re_123456789"
   NEXT_PUBLIC_WHATSAPP="+94771234567"
   ```
2. Un-comment the notification logic inside `/app/api/demo-request/route.ts`.

---

## 🚀 Deployment (Vercel)

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push code to your Git repository (GitHub / GitLab / Bitbucket).
2. Import the project into Vercel.
3. Set environment variables (e.g., `DEMO_WEBHOOK_URL`).
4. Click **Deploy**.

---

## 📋 Pre-Launch Production Checklist (TODOs)

Before deploying to production, ensure you replace all placeholders marked with `// TODO`:

- [ ] **Config**: Update official phone numbers, email address, WhatsApp number, and office address in `/config/site.ts`.
- [ ] **Demo Video**: Replace YouTube embed URL in `/config/site.ts` with official product walkthrough.
- [ ] **Stats**: Confirm verified numbers for active reps, distributors, and invoices in `/data/stats.ts`.
- [ ] **Client Logos**: Replace placeholder client names in `/data/clients.ts` with real client logos with written consent.
- [ ] **Testimonials**: Replace placeholder names, roles, and metrics in `/data/testimonials.ts` with real, permission-approved quotes.
- [ ] **Specs**: Verify cloud server host and SLA guarantees with product team in `/data/specs.ts`.
- [ ] **Integrations**: Confirm back-end ERP connectors (SAP, Dynamics, Tally, etc.).
- [ ] **Form Hook**: Set production `DEMO_WEBHOOK_URL` in Vercel environment settings.
