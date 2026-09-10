# Master prompt — Five Oaks `.com` landing page

Copy everything below the line into a new Cursor chat (new repo or this stack forked). Do not invent project facts. Reuse the existing lead pipeline.

---

## Role

You are a senior Next.js engineer, conversion designer, and technical SEO/AEO/GEO specialist. Build a **new production landing page** for:

**https://www.fiveoaksbycaivan.com**

This is a **sibling campaign site** to the live `.ca` page at https://www.fiveoaksbycaivan.ca/. Same project, same form contract, same Google Sheet. **Different visual design. Stronger SEO, AEO, and GEO.**

Reference implementation (read it, do not clone the look):

`/Users/rohitbansal/Developer/fiveoaksbycaivan.ca`

Live `.ca` stack: Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS 4, Zod 4, Vitest, Vercel.

---

## Goal

Ship a `.com` landing page that:

1. Looks like a **different product** from the `.ca` site (new layout, type, color, imagery treatment, section rhythm).
2. Converts with the **same lead form behaviour** and writes to the **same Google Sheet**.
3. Wins **Google SEO**, **answer engines** (AEO: snippets, PAA, voice), and **generative engines** (GEO: Google AI Overviews, ChatGPT, Perplexity, Copilot) without fabricating facts.
4. Remains an **independent informational site**, not the official Caivan/Five Oaks site, and not an offering for sale.

Primary CTA: **Get Project Updates**.

---

## Domain and cannibalization rules

Canonical origin:

`https://www.fiveoaksbycaivan.com`

- `NEXT_PUBLIC_SITE_URL=https://www.fiveoaksbycaivan.com`
- Force `www` + HTTPS. Apex `fiveoaksbycaivan.com` 308s to `https://www.fiveoaksbycaivan.com/`.
- Homepage sitemap + crawled URL use a **trailing slash**: `https://www.fiveoaksbycaivan.com/`
- Each page has a **self-canonical**. Never inherit homepage canonical onto `/privacy` or `/disclaimer`.
- `NEXT_PUBLIC_LANDING_PAGE_VARIANT=com-2026-08` so Sheet rows can be distinguished from `.ca`.
- Do **not** let `.ca` and `.com` compete as duplicates:
  - This `.com` site is the **indexable primary**.
  - After `.com` launches, the `.ca` site should 301 (or `rel=canonical`) to the matching `.com` URL. Mention this in README; do not silently leave two indexable copies.
- Unique title, meta description, H1, and Open Graph vs the `.ca` site. Same facts, different wording and information architecture.

---

## Hard legal / fact rules (do not violate)

Information last checked: **August 24, 2026**.

Verified only:

- Project: Five Oaks
- Developer: Caivan Communities
- Location: Oakville, Ontario, Canada (exact address/intersection **TBA**)
- Status: Coming soon
- Home types: single-detached homes and townhomes
- Townhome tenure: Caivan Oakville overview indicates **freehold townhomes**; buyers must confirm per release
- Independent site, not official Caivan/Five Oaks

**Never invent or imply:** prices, starting prices, price lists, floor plans, deposits, incentives, launch date, occupancy, lot count, lot widths, sqft, beds/baths, site plan, exact address, commute times, school ratings, “minutes to…”, scarcity, “selling fast”, or that 209 Oak Park Blvd is the Five Oaks project site (that is a general Caivan Oakville sales centre only).

TBA items must read as **to be announced** / **register for verified updates**, never as missing because the site is unfinished.

Keep visible independent-site disclosure and E.&O.E. legal footer. Neighbourhood photos: **“Neighbourhood imagery for illustration only”** — not Five Oaks renderings unless usage rights are confirmed.

Official source URLs (cite, do not scrape as if this were the official site):

- https://caivan.com/greater-toronto-area/oakville/five-oaks/
- https://caivan.com/greater-toronto-area/oakville/
- https://caivan.com/

Copy facts from `lib/project-data.ts` in the `.ca` repo. Rewrite prose for the new design; do not change verified values.

---

## Keep the same form, sheet, and backend

Port these from the `.ca` repo; restyle the UI only:

- `app/api/leads/route.ts`
- `lib/leads.ts`, `lib/leads-types.ts`, `lib/validation.ts`
- `lib/google/sheets.ts` — **same spreadsheet, same tab, same column headers, same row shape**
- `lib/emails.ts`, `lib/security.ts`, `lib/rate-limit.ts`, `lib/env.ts`, `lib/logger.ts`
- Client form: same payload to `POST /api/leads`

**Visible fields (current production form):**

| Field | Required | Notes |
| --- | --- | --- |
| First name | yes | |
| Last name | yes | |
| Email | yes | |
| Phone | no | |
| I'm interested in | yes | `single-detached` \| `townhome` \| `not-sure` |
| `companyWebsite` | honeypot | hidden; if filled, return fake success and do not write a lead |

**Still send in JSON (even if not shown):**

- `marketingConsent` boolean (current UI defaults false; keep CASL-safe: no commercial email unless opt-in exists)
- `buyerTiming` optional
- Attribution: landing URL, referrer, UTMs, gclid/gbraid/wbraid, optional fbclid, form/consent versions, timezone, `landingPageVariant`

**Google Sheet columns (do not rename or reorder):**

Date, First Name, Last Name, Email, Phone, Product Interest, Buyer Timing, Marketing Consent, UTM Source, UTM Medium, UTM Campaign, Landing Page, Referrer, Submission ID, Project

Project cell stays `Five Oaks Oakville`. Landing Page will be the `.com` URL.

Reuse the same Vercel env vars for Sheets OAuth, spreadsheet ID, tab name, email, analytics. Add `.com` public vars (`NEXT_PUBLIC_SITE_URL`, domain, variant). Allow the new origin in `originIsAllowed`.

Behaviour to preserve:

- Zod on the server is source of truth
- Origin check, rate limit, honeypot, idempotency
- Success only after confirmed capture
- `generate_lead` analytics only after server confirms; never send PII to GA
- Acknowledgement email best-effort after capture

Form may appear more than once (hero + footer). Same component, different `idPrefix`.

---

## Design brief — must not look like `.ca`

`.ca` today: Poppins, slate/teal, white header, stacked sections, card form in hero, sticky mobile CTA.

`.com` must be a **new visual system**. Use this direction:

**“Lakeside editorial estate”** — premium Oakville new-home magazine, not a generic SaaS landing page and not a clone of Caivan.com.

- Display type: a high-contrast serif (e.g. Fraunces or Newsreader) for H1–H3
- Body: a distinct sans (e.g. Figtree or Source Sans 3) — **not Poppins**
- Palette: warm cream paper, deep ink navy, muted bronze/gold CTA (not teal `#0d9488`), stone borders, forest only as a rare accent
- Hero: full-bleed photography, overlay, **split layout** with the form as a floating editorial panel on desktop; stacked on mobile
- Asymmetric grids, oversized numerals for TBA status, fact ledger as a typeset table not identical card grid
- Generous whitespace, fewer competing CTAs, one bronze primary button style
- Logo: existing Five Oaks by Caivan lockup from Supabase (keep usage honest; this is still an independent site)
- Hero image: existing Five Oaks hero from Supabase
- Supporting images: existing Oakville neighbourhood assets with qualifiers
- Motion: subtle, respect `prefers-reduced-motion`
- Accessibility: visible focus, 4.5:1 text contrast, labelled inputs, error summary, skip link
- Mobile: sticky CTA until the in-view form is visible

Page sections (same information, new IA and design):

1. Header (Overview, Homes, Location, FAQs, Register)
2. Hero + register form
3. Direct answer: “What is Five Oaks?” (40–80 words, crawlable)
4. Verified fact ledger (dated)
5. Why register
6. Home collection (detached + townhomes, TBA details)
7. Pricing / plans / deposit / incentives / launch — honest TBA board
8. Location (Oakville-safe facts only; no fake map pin)
9. Developer (Caivan summary + “don’t assume other communities’ specs”)
10. Buyer due-diligence checklist
11. FAQ (accordion, real `<h2>`/`<h3>` in DOM or accessible names; answers in HTML not only JS)
12. Final CTA + form
13. Footer: independent disclosure, privacy, disclaimer, publisher placeholders until legal fill

Also `/privacy` and `/disclaimer` with unique canonicals and layout that matches the new design.

---

## SEO (search)

- Unique title ~50–60 chars. Example pattern: `Five Oaks by Caivan | Oakville Detached & Townhomes Coming Soon`
- Meta description ~150–160 chars with register CTA; no fake prices
- One H1. Question-style H2s that match real queries
- `metadataBase`, per-page canonical, Open Graph, Twitter, `en-CA`
- Keywords only as supporting metadata, not stuffing
- `robots.txt`: allow Googlebot, Bingbot, OAI-SearchBot; disallow `/api/`; `Sitemap: https://www.fiveoaksbycaivan.com/sitemap.xml`
- `sitemap.xml`: `/`, `/privacy`, `/disclaimer`; homepage loc with trailing slash; accurate lastmod
- JSON-LD `@graph`: WebSite, WebPage, Organization/publisher, BreadcrumbList, FAQPage, ImageObject. No Offer, AggregateRating, RealEstateListing, invented geo coordinates
- Speakable CSS selectors on the definition + FAQ
- OG/Twitter images generated or static; not generic Next default
- Internal links between sections; privacy/disclaimer in footer
- Performance: next/image, font subset, no layout shift on hero/logo
- Search Console + Bing verification env vars as on `.ca`
- Indexing: `noindex` until HTTPS canonical is set and `NEXT_PUBLIC_NOINDEX` is false

---

## AEO (answer engines)

Optimize for People Also Ask, featured snippets, and voice:

- Put a **direct answer paragraph** immediately under each major H2 before any fluff
- FAQ questions must match how people search (keep the 10 existing intents; you may add 2–4 more **only** if answers are fully supported by verified facts)
- Answers: 2–4 sentences, fact-first, include “as of August 24, 2026” where TBA
- Use FAQPage schema that **matches visible FAQ text**
- Definition box: “Five Oaks is…” in plain HTML
- Avoid contradiction between hero, facts table, and FAQs

Target queries (cover in copy, do not keyword-stuff):

- Five Oaks Oakville
- Five Oaks by Caivan
- Caivan Oakville townhomes / detached
- Five Oaks location / prices / floor plans / deposit / launch / freehold townhomes
- Five Oaks coming soon Oakville

---

## GEO (generative engines)

Make the page easy to cite in AI Overviews, ChatGPT, Perplexity:

- Entity clarity in the first viewport: name, developer, city, province, country, status, home types, “independent informational site”
- Dated fact ledger with source labels (official Five Oaks page / Oakville communities page / this page)
- Explicit negatives: “Official pricing has not been published in reviewed materials as of August 24, 2026”
- `llms.txt` at `/llms.txt` summarizing entities, TBA list, canonical URL, and “not official”
- Keep `OAI-SearchBot` allowed. Do not block useful retrieval crawlers unless legal says so
- Stable heading IDs (`#overview`, `#homes`, `#location`, `#faqs`, `#register`)
- No thin pages. Privacy/disclaimer should be real pages, not stubs
- Publisher identity from env; do not fake RECO/brokerage names
- Same language as citations: Oakville, Ontario, Canada — not “Toronto” as the project city

---

## Tech requirements

- Next.js 16 App Router, TypeScript strict, Tailwind 4, Zod, Vitest
- Read `node_modules/next/dist/docs/` before using Next APIs
- Port security headers from `.ca`
- Tests: validation, Sheets header contract, `sitePageUrl` trailing-slash helper, JSON-LD does not emit Offer/listing types
- README: env, Sheet reuse, `.ca` → `.com` canonical/redirect plan, GSC sitemap submit
- Deploy on Vercel; do not commit `.env.local` or `.vercel`

---

## Implementation order

1. Scaffold/port app; wire env and `sitePageUrl`.
2. Port lead API + Sheets + form logic; restyle form.
3. New design system + homepage sections with rewritten copy (same facts).
4. SEO/AEO/GEO: metadata, sitemap, robots, JSON-LD, llms.txt, FAQ.
5. Privacy + disclaimer self-canonicals.
6. Lint, typecheck, test, build.
7. Browser-verify: register form, success/error, mobile sticky CTA, privacy/disclaimer, `/sitemap.xml`, `/robots.txt`.

---

## Done when

- Visual design is clearly not the `.ca` site
- Form submits to `/api/leads` and a test row appears in the **existing** Five Oaks Sheet with `.com` landing URL and variant
- Homepage canonical is `https://www.fiveoaksbycaivan.com/` (or the live URL Next emits for that origin) and inner pages do not canonical to home
- JSON-LD + FAQ + fact ledger are consistent and contain no invented prices or addresses
- `llms.txt`, sitemap, robots are live
- No Poppins/teal clone, no fake map pin, no official-site impersonation

Build it. Do not ask for permission to start. If a project fact is unpublished, show TBA and the register CTA instead of guessing.

---
