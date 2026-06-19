# Arrowlink Global Procurement — Website & Platform

A premium, conversion-focused procurement consultancy website for **Arrowlink
Global Procurement Ltd** (RC 8646097). Built as a scalable Next.js platform that
can grow into a full procurement ecosystem (blog, client/supplier portals, CRM,
dashboards, AI assistant).

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** with a custom navy/bronze-gold design system
- **shadcn-style** UI primitives (Radix) + **Framer Motion** animations
- **React Hook Form** + **Zod** for forms and validation
- SEO: per-page metadata, JSON-LD (Organization, FAQ, Breadcrumb), sitemap, robots

## Getting started

```bash
# install (pnpm recommended; npm/yarn also work)
corepack pnpm install        # or: npm install --legacy-peer-deps

# copy env and fill in the integration IDs you have
cp .env.example .env.local

# run the dev server
corepack pnpm dev            # http://localhost:3000
```

> **Note:** every integration (Calendly, GA4, GTM, LinkedIn, Clarity, HubSpot)
> is optional and only loads when its env value is set. The site runs fully
> without any of them.

## Pages

| Route          | Purpose                                            |
| -------------- | -------------------------------------------------- |
| `/`            | Homepage — hero, value props, services, process    |
| `/services`    | Full service catalogue + hybrid pricing            |
| `/industries`  | Sectors + global sourcing markets                  |
| `/how-we-work` | 8-stage process, verification, inspection          |
| `/about`       | Story, mission/vision, principles, engagements     |
| `/book`        | Calendly consultation booking                      |
| `/contact`     | Contact form + direct channels                     |
| `/resources`   | Frameworks, brochure request, FAQ                  |
| `/onboarding`  | Multi-step client onboarding brief                 |
| `/api/lead`    | Form handler (logs by default; HubSpot/Resend opt) |

## Configuration

- **Company facts / contact:** `src/lib/site-config.ts`
- **Services & pricing:** `src/lib/services.ts`
- **Editorial content:** `src/lib/content.ts`
- **Design tokens:** `tailwind.config.ts` + `src/app/globals.css`

## Lead capture

`POST /api/lead` validates submissions and logs them server-side out of the box.
To forward leads, set in `.env.local`:

- `HUBSPOT_PRIVATE_APP_TOKEN` — creates a HubSpot contact per submission
- `RESEND_API_KEY` + `LEAD_NOTIFICATION_EMAIL` — emails a notification

## Deploy (Vercel)

1. Push to a Git repo and import into Vercel.
2. Add the env vars from `.env.example` in Project Settings.
3. Deploy. Runs on the Vercel free (Hobby) tier.

## Roadmap-ready architecture

The `src/` structure (route-grouped App Router, typed content libs, composable
UI) is built to extend into:

- `/(portal)` — client & supplier portals (auth-gated)
- `/blog` — MDX-driven insight library
- `/dashboard` — procurement tracking & supplier scorecards
- CRM + AI procurement assistant integrations via `/api`

---

© Arrowlink Global Procurement Ltd · RC 8646097 · Registered in Nigeria
