# Master prompt — Five Oaks `.com` SEO + leads (rank and convert)

Paste everything below the `---` into a **different Cursor project**. The agent must copy credentials itself from the `.ca` project on this Mac. Do not ask the operator to paste secrets. Same facts, form contract, and Google Sheet. Do not invent prices, addresses, or launch dates.

---

## Role

You are a senior Next.js engineer, conversion copywriter, and SEO lead who ships pages that rank **and** turn search traffic into registrations. Build the production site for:

**https://www.fiveoaksbycaivan.com**

You are in a **new project**. Scaffold or build here. The live `.ca` campaign already exists on this machine — use it as the credential and asset source.

**`.ca` project root (read/copy from here):**  
`/Users/rohitbansal/Developer/fiveoaksbycaivan.ca`

Live `.ca` site (design to beat, not copy): https://www.fiveoaksbycaivan.ca/

Stack: Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS 4, Zod 4, Vitest, Vercel. After install, read `node_modules/next/dist/docs/` before using Next APIs.

Images to reuse (already hosted):

- Hero: `https://ewzutahmskuhbsalpygn.supabase.co/storage/v1/object/public/campaign-media/uploads/five%20oaks%20hero%20image.jpg`
- Logo: `https://ewzutahmskuhbsalpygn.supabase.co/storage/v1/object/public/campaign-media/uploads/Caivan-FiveOaks-Logo-Teal-RGB@2x.png`

Neighbourhood photos: copy from `/Users/rohitbansal/Developer/fiveoaksbycaivan.ca/public/images/` (`oakville-lakeshore.jpg`, `oakville-park-trail.jpg`, `architectural-garden.jpg`). Always use “illustration only” alt text.

---

## Outcome (what “winning” means)

This site must be the **best independent answer** for Five Oaks Oakville queries, then convert that demand into Google Sheet leads.

Success looks like:

1. Rank for high-intent project names and “coming soon / prices / floor plans / location / townhomes / detached” modifiers in Google (Canada).
2. Get cited in AI Overviews, People Also Ask, ChatGPT, and Perplexity as the clear, dated, honest source.
3. Every indexable URL has a visible path to **Get Project Updates** and writes to the **existing** Five Oaks Sheet.
4. Out-convert the official Caivan project page on *registration* by being more complete, more specific about what is unknown, and easier to act on — without impersonating Caivan.

Do not promise “#1 guaranteed.” Do execute every legitimate ranking and conversion tactic below.

Primary CTA: **Get Project Updates**.

---

## Same details, form, and config (do not change the contract)

### Verified facts (August 24, 2026)

- Project: Five Oaks
- Developer: Caivan Communities
- Location: Oakville, Ontario, Canada — **exact address/intersection TBA**
- Status: Coming soon
- Homes: single-detached and townhomes
- Tenure: Caivan Oakville overview indicates **freehold townhomes**; confirm per release
- This site is **independent**, not official Caivan/Five Oaks, not an offering for sale

**Never invent:** prices, starting prices, price lists, floor plans, deposits, incentives, launch date, occupancy, lot count, lot widths, sqft, beds/baths, site plan, exact pin, commute times, school ratings, “minutes to…”, scarcity, or that 209 Oak Park Blvd is the Five Oaks site (general Caivan Oakville sales centre only).

Official sources to cite (not to impersonate):

- https://caivan.com/greater-toronto-area/oakville/five-oaks/
- https://caivan.com/greater-toronto-area/oakville/
- https://caivan.com/

Facts in this prompt are the source of truth. Rewrite for search intent; do not change verified values.

### Form → API → Sheet (identical behaviour, new UI)

Rebuild the same lead pipeline in **this** project. Match this contract exactly.

`POST /api/leads` JSON + Google Sheet **columns must stay**:

Date, First Name, Last Name, Email, Phone, Product Interest, Buyer Timing, Marketing Consent, UTM Source, UTM Medium, UTM Campaign, Landing Page, Referrer, Submission ID, Project

Project cell: `Five Oaks Oakville`.

Visible fields:

- First name * , Last name * , Email * , Phone (optional)
- I'm interested in * : `single-detached` | `townhome` | `not-sure`
- Honeypot `companyWebsite` (if filled: fake success, no row)

Still send: `marketingConsent` (default false unless a real CASL checkbox exists), optional `buyerTiming`, full attribution (UTMs, gclid/gbraid/wbraid, landing URL, referrer, versions, timezone).

Allow the `.com` origin. Success only after confirmed capture. No PII in analytics. `generate_lead` only after server OK.

### Credentials — copy them yourself, never ask the operator to paste

Do **not** ask Rohit to type OAuth tokens, spreadsheet IDs, email keys, or analytics IDs. Pull them from the `.ca` project.

`CA_ROOT=/Users/rohitbansal/Developer/fiveoaksbycaivan.ca`

**Step 1 — local `.env.local` (do this first)**

```bash
cp /Users/rohitbansal/Developer/fiveoaksbycaivan.ca/.env.local ./.env.local
```

If that file is missing, pull production env from the already-linked `.ca` Vercel project (do not print values):

```bash
npx vercel env pull /Users/rohitbansal/Developer/fiveoaksbycaivan.ca/.env.local --environment production --yes --cwd /Users/rohitbansal/Developer/fiveoaksbycaivan.ca
cp /Users/rohitbansal/Developer/fiveoaksbycaivan.ca/.env.local ./.env.local
```

`.ca` Vercel link already on disk: `/Users/rohitbansal/Developer/fiveoaksbycaivan.ca/.vercel/project.json`  
projectName: `fiveoaksbycaivan.ca`  
projectId: `prj_e0ut0jMKZLZFifNwt5q17EnAnn7D`

**Step 2 — change only these keys** in this project's `.env.local` (keep every Sheets/OAuth/email/analytics/secret as copied):

- `NEXT_PUBLIC_SITE_URL=https://www.fiveoaksbycaivan.com`
- `NEXT_PUBLIC_SITE_DOMAIN=www.fiveoaksbycaivan.com`
- `NEXT_PUBLIC_LANDING_PAGE_VARIANT=com-seo-leads-2026-08`

Do not commit `.env.local`. Do not echo secrets into the chat, README, or git.

Keys that must be copied from `.ca` (do not recreate):  
`GOOGLE_OAUTH_CLIENT_ID`, `GOOGLE_OAUTH_CLIENT_SECRET`, `GOOGLE_OAUTH_REFRESH_TOKEN`, `GOOGLE_SHEETS_SPREADSHEET_ID`, `GOOGLE_SHEETS_TAB_NAME`, `EMAIL_PROVIDER_API_KEY`, `EMAIL_PROVIDER_ENDPOINT`, `INTERNAL_LEAD_EMAIL`, `FROM_EMAIL`, `FROM_NAME`, `NEXT_PUBLIC_ANALYTICS_MEASUREMENT_ID`, `GOOGLE_SEARCH_CONSOLE_VERIFICATION`, `BING_WEBMASTER_VERIFICATION`, publisher identity keys, webhook secrets.

**Step 3 — when you `vercel link` this `.com` project**, import env from the copied `.env.local` so production writes to the same Sheet. Do not ask for paste. Never log the file contents.

---

## Domain / cannibalization

- Canonical: `https://www.fiveoaksbycaivan.com`
- www + HTTPS; apex 308 → `https://www.fiveoaksbycaivan.com/`
- Homepage loc and crawl URL: trailing slash
- **Self-canonical on every page** (privacy/disclaimer/hub pages must not point at `/`)
- `.com` is the **only indexable primary**. README must say `.ca` should 301 or canonical to matching `.com` URLs after launch. Two indexed copies will split rankings and leads.

Titles, H1s, and meta must differ from `.ca`. Same facts, different intent mapping.

---

## SEO strategy — rank by owning the query map

You cannot out-brand Caivan.com on “Caivan” alone. You **can** win **Five Oaks + question** queries and convert them, because the official page is thin on TBA honesty, FAQs, and a dedicated update form.

### 1. Keyword architecture (build pages to this, not to vibes)

**Cluster A — Brand / project (highest priority, money terms)**  
Primary: `Five Oaks Oakville`, `Five Oaks by Caivan`, `Five Oaks Caivan`, `Caivan Five Oaks`.  
Homepage target. H1 must include Five Oaks + Oakville. First 80 words must state developer, city, home types, coming soon, independent site, register CTA.

**Cluster B — Product intent**  
`Five Oaks townhomes`, `Five Oaks detached homes`, `Five Oaks freehold townhomes`, `Caivan Oakville townhomes`, `Caivan Oakville detached`.  
Dedicated `/townhomes` and `/detached-homes` (or one `/homes` with two crawlable H2 blocks plus unique titles if you keep a smaller IA). Each page: confirmed type + TBA details + form. Do not invent models.

**Cluster C — Shopping questions (these convert)**  
`Five Oaks prices` / `cost` / `floor plans` / `deposit` / `incentives` / `launch date` / `occupancy` / `location` / `where is Five Oaks`.  
These are **the ranking opportunity**: Google and AI tools want a clear answer. Your answer is honest TBA + dated fact + register. That still ranks when everyone else fabricates or stays silent.  
Build `/pricing`, `/floor-plans`, `/location` (and `/faqs` if not all on home). Each page’s first paragraph is a snippet-ready answer. Form above the fold on mobile.

**Cluster D — Local / discovery**  
`Oakville new homes coming soon`, `Oakville new townhomes`, `Oakville new detached homes`, `new homes Oakville Caivan`.  
Use Oakville-safe municipal facts only (GTA, Lake Ontario, parks/trails, Oakville Transit, GO Lakeshore West, major corridors). **No** fake commute or “near downtown Oakville” unless verified for the *project pin*.

**Cluster E — Trust / comparison**  
`Is Five Oaks freehold`, `Five Oaks vs other Caivan Oakville communities` — only compare using published Caivan Oakville list facts; do not invent other projects’ prices. Always: “specs from other Caivan communities are not Five Oaks specs until official Five Oaks docs say so.”

Every URL in A–C must appear in `sitemap.xml` and internally link to Register.

### 2. Information architecture (hub and spokes)

Do **not** ship only a single long homepage. Homepages rarely rank for every modifier.

Required indexable routes:

| URL | Primary query | Snippet job |
| --- | --- | --- |
| `/` | Five Oaks Oakville / Five Oaks by Caivan | Entity definition + register |
| `/location` | Where is Five Oaks | Oakville confirmed, address TBA |
| `/homes` | Townhomes & detached | Two product blocks |
| `/pricing` | Five Oaks prices / cost | Official pricing not published as of Aug 24, 2026 |
| `/floor-plans` | Five Oaks floor plans | Not published; register |
| `/faqs` | Mixed PAA | Full Q&A + FAQPage schema |
| `/privacy` `/disclaimer` | Trust | Self-canonical; noindex only if legal requires — default **index** thin legal pages is OK if unique |

Homepage is the hub. Every spoke: unique title/H1, 400–800+ words of **non-duplicate** copy, fact ledger excerpt, 1–2 FAQs, **lead form**, breadcrumb, link back to hub and to sibling spokes.

`llms.txt` lists all URLs, entities, TBA list, canonical domain.

### 3. On-page formula (every money page)

1. **Title tag** (50–60 chars): `{Query} | Five Oaks by Caivan Oakville`  
   Example: `Five Oaks Prices Oakville | Official List Not Published Yet`
2. **Meta description** (150–160): answer + TBA date + “Register for verified updates.”
3. **H1** = query language, not a slogan.
4. **Answer block** (40–80 words) immediately under H1 — this is the featured-snippet / AI Overview paragraph.
5. **Proof block**: dated fact table + source labels.
6. **Conversion block**: why register (pricing, plans, deposits, launch) + form.
7. **Related questions** with jump links to `/faqs#...`
8. **Disclaimer** one-liner: independent site, not an offering.

CTR: titles may be specific and slightly “newsroom” (`as of August 24, 2026`) rather than generic `Coming Soon Homes`. Do not use clickbait that implies prices exist.

### 4. Internal linking (PageRank to the form)

- Header: Overview, Homes, Location, Pricing, Plans, FAQs, Register
- In-body: every TBA mention links to `/pricing`, `/floor-plans`, or `#register`
- Footer: full spoke list + privacy/disclaimer
- Breadcrumbs in HTML + BreadcrumbList JSON-LD
- Homepage links to every spoke; every spoke links to 2+ siblings and `/#register` or in-page form

### 5. Technical SEO (non-negotiable)

- Unique canonical per path; homepage `/` trailing slash in sitemap
- `robots.txt`: Googlebot, Bingbot, OAI-SearchBot allowed; `/api/` disallowed; sitemap line
- Indexing on when HTTPS + `NEXT_PUBLIC_NOINDEX=false`
- JSON-LD `@graph` per template: WebSite, WebPage, Organization, BreadcrumbList, FAQPage where FAQs exist. **No** Offer, AggregateRating, RealEstateListing, geo coordinates
- One H1; valid heading order; FAQ answers in HTML (not only client JS)
- Canonical OG/Twitter image; `en-CA`; `metadataBase`
- Core Web Vitals: `next/image`, font subset, no CLS on hero/logo/form
- 308 www/https; no redirect chains on inner URLs
- Search Console + Bing verification env vars
- After deploy: submit sitemap; request index on `/` and each spoke

### 6. AEO + GEO (answers and citations)

- FAQ questions = real search phrasing (keep the 10 from `.ca`; add only if fully supported)
- FAQPage schema text **equals** visible text
- Speakable on definition + top FAQs
- First sentence of each spoke is a complete answer a model can quote
- Repeat entity tuple often: Five Oaks, Caivan Communities, Oakville, Ontario, Canada, coming soon, detached + townhomes, independent informational site
- Explicit negatives help citations: “Official Five Oaks pricing has not been published in reviewed materials as of August 24, 2026.”
- Allow retrieval crawlers; do not noindex the spokes

### 7. E-E-A-T / trust (needed to outrank scrapers)

- Visible independent-site disclosure in header or under H1
- “Information checked August 24, 2026” on facts
- Publisher legal name/address/email from env (placeholders until legal)
- Link official Caivan Five Oaks page as **source**, not as “our site”
- Neighbourhood photos qualified: illustration only
- E.&O.E. footer; not an offering for sale

### 8. Conversion SEO (traffic → Sheet rows)

Ranking without a form is a failed build.

- Form in hero on `/` and in a persistent rail or mid-page + footer on spokes
- Sticky mobile CTA until form is in view
- CTA copy matches intent: on `/pricing` use “Get notified when official pricing is published” (button can still be Get Project Updates)
- Prefill nothing illegal; capture UTMs so you can see which query clusters convert
- `landingPageUrl` will show spoke URLs in the Sheet — keep that
- Social proof only if true (do not fake registrant counts)
- Form UX: 4–5 fields, error summary, success state, honeypot, idempotency — same as `.ca`

### 9. What not to do (would hurt rankings or compliance)

- Doorway pages with duplicate TBA paragraphs
- Keyword stuffing / hidden text
- Fake schema offers or reviews
- Copying Caivan.com layout or claiming to be the official site
- Indexing `.ca` and `.com` in parallel
- Buying links, PBNs, cloaking, spun content
- Publishing a map pin or school catchment you cannot source

---

## Design

Different from `.ca` (no Poppins/teal clone). Premium, editorial, fast. Form must look trustworthy and easy, not secondary. Accessibility: labels, contrast, focus, skip link, `prefers-reduced-motion`.

Reuse existing logo + hero + neighbourhood images from the `.ca` `images` config / Supabase URLs.

---

## Implementation order

1. Port lead pipeline + env + `sitePageUrl`.
2. Design system + homepage (Cluster A) with form.
3. Spoke pages (location, homes, pricing, floor-plans, faqs) with unique copy + form + schema.
4. Global SEO: layout metadata, robots, sitemap (all URLs), llms.txt, JSON-LD helpers.
5. Internal links + breadcrumbs + sticky CTA.
6. Privacy/disclaimer self-canonicals.
7. Lint, typecheck, test (validation, sheet headers, no Offer in JSON-LD, URL helper).
8. Browser-verify form on home **and** one spoke; check `/sitemap.xml`, `/robots.txt`, canonicals.

---

## Done when

- Spoke URLs exist, are unique, and all sit in the sitemap
- Every money page has a snippet-ready answer + form
- Test submit lands in the **existing** Sheet with `.com` landing URL and `com-seo-leads-2026-08` variant
- No invented facts; JSON-LD has no Offer/listing
- `.ca` duplicate-index risk is documented with a 301/canonical plan
- Visual design is not the `.ca` site

Start building now. If a fact is unpublished, rank for the question with a dated honest answer and the registration form — never guess.

---
