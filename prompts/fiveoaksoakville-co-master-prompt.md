# Master prompt — fiveoaksoakville.co (paste into another Cursor)

**How to use:** Open the empty/new Cursor project for this domain. Copy **from `## Role` to the end**. Paste into Agent chat. Allow file access to the `.ca` folder when asked. Do not paste secrets yourself.

---

## Role

You are a senior Next.js engineer, conversion designer, and SEO/AEO/GEO specialist. Build a **new production site** in **this** Cursor project for:

**https://www.fiveoaksoakville.co**

This is a sibling campaign to the live site https://www.fiveoaksbycaivan.ca/  
Same project, **same form**, **same Google Sheet**, **same pictures**, **same backend config**. **New visual design. Stronger SEO** so Five Oaks Oakville queries rank and convert.

Start building immediately. Do not ask Rohit to paste credentials.

---

## Source on this Mac (copy from here)

`CA_ROOT=/Users/rohitbansal/Developer/fiveoaksbycaivan.ca`

Live example (do **not** clone the look): https://www.fiveoaksbycaivan.ca/

Stack: Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS 4, Zod 4, Vitest, Vercel. After `npm install`, read `node_modules/next/dist/docs/` before using Next APIs.

You **may read and port code** from `CA_ROOT` for leads, validation, Sheets, emails, security, rate-limit, env, logger, and the lead API. **Do not port** `app/page.tsx`, `app/layout.tsx`, `app/globals.css`, Header/Hero/section components as-is. Those must be a new design.

---

## Credentials — copy yourself, never ask to paste

```bash
cp /Users/rohitbansal/Developer/fiveoaksbycaivan.ca/.env.local ./.env.local
```

If missing, pull from the linked `.ca` Vercel project (do not print values):

```bash
npx vercel env pull /Users/rohitbansal/Developer/fiveoaksbycaivan.ca/.env.local --environment production --yes --cwd /Users/rohitbansal/Developer/fiveoaksbycaivan.ca
cp /Users/rohitbansal/Developer/fiveoaksbycaivan.ca/.env.local ./.env.local
```

`.ca` Vercel: `/Users/rohitbansal/Developer/fiveoaksbycaivan.ca/.vercel/project.json`  
projectName `fiveoaksbycaivan.ca` · projectId `prj_e0ut0jMKZLZFifNwt5q17EnAnn7D`

Then **change only**:

- `NEXT_PUBLIC_SITE_URL=https://www.fiveoaksoakville.co`
- `NEXT_PUBLIC_SITE_DOMAIN=www.fiveoaksoakville.co`
- `NEXT_PUBLIC_LANDING_PAGE_VARIANT=co-oakville-2026-08`

Keep every Google OAuth, `GOOGLE_SHEETS_SPREADSHEET_ID`, tab name, email, analytics, verification, and publisher key as copied.

Do not commit `.env.local`. Do not echo secrets in chat, README, or git.

When you `vercel link` this `.co` project, import env from the copied `.env.local` so production writes to the **same Sheet**.

---

## Pictures (same assets)

Reuse these exact URLs:

- Hero: `https://ewzutahmskuhbsalpygn.supabase.co/storage/v1/object/public/campaign-media/uploads/five%20oaks%20hero%20image.jpg`
- Logo: `https://ewzutahmskuhbsalpygn.supabase.co/storage/v1/object/public/campaign-media/uploads/Caivan-FiveOaks-Logo-Teal-RGB@2x.png`

Copy neighbourhood images into this project’s `public/images/`:

```bash
mkdir -p public/images
cp /Users/rohitbansal/Developer/fiveoaksbycaivan.ca/public/images/oakville-lakeshore.jpg public/images/
cp /Users/rohitbansal/Developer/fiveoaksbycaivan.ca/public/images/oakville-park-trail.jpg public/images/
cp /Users/rohitbansal/Developer/fiveoaksbycaivan.ca/public/images/architectural-garden.jpg public/images/
```

If local files are missing, download from:

- `https://www.fiveoaksbycaivan.ca/images/oakville-lakeshore.jpg`
- `https://www.fiveoaksbycaivan.ca/images/oakville-park-trail.jpg`
- `https://www.fiveoaksbycaivan.ca/images/architectural-garden.jpg`

Alt text must say neighbourhood imagery is **illustration only**, not Five Oaks renderings.

Allow the Supabase host in `next.config` `images.remotePatterns` (same as `.ca`).

---

## Form + Sheet (identical contract, new UI only)

Port from `CA_ROOT`: `app/api/leads/route.ts`, `lib/leads.ts`, `lib/leads-types.ts`, `lib/validation.ts`, `lib/google/sheets.ts`, `lib/emails.ts`, `lib/security.ts`, `lib/rate-limit.ts`, `lib/env.ts`, `lib/logger.ts`. Restyle `LeadForm`; keep payload and behaviour.

`POST /api/leads` + Sheet **columns must stay**:

Date, First Name, Last Name, Email, Phone, Product Interest, Buyer Timing, Marketing Consent, UTM Source, UTM Medium, UTM Campaign, Landing Page, Referrer, Submission ID, Project

Project cell: `Five Oaks Oakville`.

Visible fields:

- First name *, Last name *, Email *
- Phone optional
- I'm interested in *: `single-detached` | `townhome` | `not-sure`
- Honeypot `companyWebsite` — if filled, fake success and **do not** write a lead

Still send: `marketingConsent` (default false unless a real CASL checkbox exists), optional `buyerTiming`, attribution (landing URL, referrer, UTMs, gclid/gbraid/wbraid, versions, timezone, variant).

Allow origin `https://www.fiveoaksoakville.co` (and localhost for dev). Success only after confirmed capture. No PII in analytics. `generate_lead` only after server OK.

---

## Domain / SEO cannibalization

- Canonical origin: `https://www.fiveoaksoakville.co`
- HTTPS + www. Apex `fiveoaksoakville.co` 308 → `https://www.fiveoaksoakville.co/`
- Homepage sitemap loc: `https://www.fiveoaksoakville.co/` (trailing slash)
- **Self-canonical on every page.** Privacy/disclaimer/spokes must not canonical to home.
- Unique titles/H1s vs fiveoaksbycaivan.ca. Same facts, different copy and IA.
- README: after this `.co` site is the campaign you want indexed, 301 or canonical the `.ca` (and any `.com` duplicate) to matching `.co` URLs so rankings are not split.

---

## Hard facts (August 24, 2026) — never invent

Verified:

- Project: Five Oaks
- Developer: Caivan Communities
- Location: Oakville, Ontario, Canada — exact address/intersection **TBA**
- Status: Coming soon
- Homes: single-detached and townhomes
- Townhomes: Caivan Oakville overview indicates **freehold**; confirm per release
- Independent informational site, **not** official Caivan/Five Oaks, **not** an offering for sale

**Never invent or imply:** prices, starting prices, floor plans, deposits, incentives, launch date, occupancy, lot count, lot widths, sqft, beds/baths, site plan, exact pin, commute times, school ratings, “minutes to…”, scarcity, or that 209 Oak Park Blvd is the Five Oaks site (general Caivan Oakville sales centre only).

TBA = “to be announced” + register CTA, not “we forgot to add it.”

Official sources to cite (not impersonate):

- https://caivan.com/greater-toronto-area/oakville/five-oaks/
- https://caivan.com/greater-toronto-area/oakville/
- https://caivan.com/

Keep independent-site disclosure + E.&O.E. footer. Publisher identity from env placeholders until legal fills them.

### FAQs (keep these answers; you may rewrite headings slightly for search)

1. What is Five Oaks by Caivan? — coming-soon Caivan community in Oakville; detached + townhomes; pricing/plans/deposits/incentives/exact location/launch/occupancy not published in official sources reviewed Aug 24, 2026.
2. Where is Five Oaks located? — Oakville, Ontario; exact address TBA; no commute/amenity proximity claims until pin is official.
3. What types of homes? — single-detached and townhomes; models/lots TBA.
4. Are townhomes freehold? — Caivan Oakville overview says freehold townhomes; confirm per release.
5. How much will homes cost? — official pricing not published; register; don’t rely on undated third-party lists.
6. Floor plans? — not published; register.
7. Deposit structure? — not confirmed; confirm in official docs before purchase.
8. Incentives? — none advertised until verified official docs; request updates.
9. When will it launch? — not confirmed; occupancy TBA.
10. How to get updates? — submit the form; promotional email only with opt-in; unsubscribe anytime.

---

## Design — must not look like .ca

`.ca` is Poppins, slate/teal, stacked corporate landing. This `.co` site must look like a **different product**.

Direction: **lakeside editorial Oakville** — cream paper, deep navy ink, bronze/gold CTA (not teal `#0d9488`), serif display (Fraunces or Newsreader) + a sans that is **not Poppins** (Figtree or Source Sans 3). Full-bleed hero, floating form panel on desktop, asymmetric fact ledger, sticky mobile CTA until the form is in view.

Accessibility: labels, 4.5:1 contrast, focus rings, skip link, `prefers-reduced-motion`.

Primary CTA: **Get Project Updates**.

---

## SEO — hub + spokes (do not ship only one long homepage)

Win **Five Oaks + Oakville + question** queries. Honest TBA still ranks when others invent prices.

| URL | Primary query |
| --- | --- |
| `/` | Five Oaks Oakville, Five Oaks by Caivan |
| `/location` | Where is Five Oaks |
| `/homes` | Five Oaks townhomes / detached |
| `/pricing` | Five Oaks prices / cost |
| `/floor-plans` | Five Oaks floor plans |
| `/faqs` | PAA |
| `/privacy` `/disclaimer` | Trust; unique self-canonical |

Every money page:

1. Unique title ~50–60 chars, H1 in query language  
2. 40–80 word **answer block** under H1 (snippet / AI Overview)  
3. Dated fact excerpt (Aug 24, 2026)  
4. **Lead form** on the page  
5. Links to 2+ sibling spokes + register  

Homepage first 80 words: Five Oaks, Caivan Communities, Oakville Ontario Canada, coming soon, detached + townhomes, independent site, register.

Oakville-safe local facts only: GTA, Lake Ontario, parks/trails, Oakville Transit, GO Lakeshore West, major corridors. No fake map pin.

Internal nav: Overview, Homes, Location, Pricing, Plans, FAQs, Register.

Technical:

- `sitePageUrl`: homepage always trailing slash  
- `robots.txt`: Googlebot, Bingbot, OAI-SearchBot allow; `/api/` disallow; sitemap URL  
- `sitemap.xml`: all routes above  
- JSON-LD `@graph`: WebSite, WebPage, Organization, BreadcrumbList, FAQPage where FAQs exist. **No** Offer, AggregateRating, RealEstateListing, geo coordinates  
- FAQ schema text = visible text  
- `public/llms.txt`: entities, TBA list, all URLs, canonical domain  
- `en-CA`, OG/Twitter, `metadataBase`  
- Index when HTTPS + `NEXT_PUBLIC_NOINDEX` is not true  

Do not: doorway duplicates, keyword stuffing, fake reviews/schema, impersonate Caivan.com, buy links.

---

## Implementation order

1. Copy `.env.local`, override the three public URL/variant keys.  
2. Scaffold Next 16; port lead pipeline from `CA_ROOT`; copy images.  
3. New design system + homepage with form.  
4. Spoke pages with unique copy + form + schema.  
5. robots, sitemap, llms.txt, JSON-LD, per-page canonicals.  
6. Lint, typecheck, test (validation, sheet headers, no Offer in JSON-LD).  
7. Browser-check form on `/` and `/pricing`; check `/sitemap.xml` and `/robots.txt`.

---

## Done when

- Looks clearly different from fiveoaksbycaivan.ca  
- Same logo/hero/neighbourhood photos  
- Test lead appears in the **existing** Five Oaks Sheet with landing URL on fiveoaksoakville.co and variant `co-oakville-2026-08`  
- Hub + spokes in sitemap, each with self-canonical and a form  
- No invented prices or address  

Build now. If a fact is unpublished, answer with the dated TBA and the form — never guess.

---
