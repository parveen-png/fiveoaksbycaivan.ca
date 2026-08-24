# Five Oaks by Caivan — Oakville informational landing page

Independent informational website for **Five Oaks**, a coming-soon Caivan Communities community of single-detached homes and townhomes in Oakville, Ontario, Canada.

This is **not** the official Five Oaks or Caivan website. Official Five Oaks details were incomplete as of **August 24, 2026**. Pricing, floor plans, deposits, incentives, exact project location, launch date and occupancy remain to be announced.

This implementation is a functioning landing page. It is **not** legally approved. Final legal, brokerage, privacy and compliance review remains the publisher's responsibility.

## Tech stack

- Next.js 16 App Router
- React 19
- TypeScript (strict)
- Tailwind CSS 4
- Zod 4 for server-side lead validation
- Vitest for unit tests

## Local setup

1. Copy the environment template:

```bash
cp .env.example .env.local
```

2. Keep placeholder publisher identity values until legal details are supplied. Do not put real secrets in `.env.example`.

3. Install dependencies:

```bash
npm install
```

## Commands

| Task | Command |
| --- | --- |
| Install dependencies | `npm install` |
| Development server | `npm run dev` |
| Production build | `npm run build` |
| Start production server | `npm start` |
| Lint | `npm run lint` |
| Type-check | `npm run typecheck` |
| Unit tests | `npm test` |

Open [http://localhost:3000](http://localhost:3000) after `npm run dev`.

## Environment variables

See `.env.example` for every supported variable. Important groups:

### Public identity and canonical URL

- `NEXT_PUBLIC_SITE_URL` — production origin, for example `https://www.example.com`. Must be HTTPS and not localhost before the site is indexed.
- `NEXT_PUBLIC_SITE_DOMAIN` — displayed domain placeholder until a verified domain is supplied.
- `NEXT_PUBLIC_PUBLISHER_LEGAL_NAME`
- `NEXT_PUBLIC_BROKERAGE_LEGAL_NAME`
- `NEXT_PUBLIC_RECO_REGISTERED_AGENT_NAME`
- `NEXT_PUBLIC_AGENT_DESIGNATION`
- `NEXT_PUBLIC_PUBLISHER_ADDRESS`
- `NEXT_PUBLIC_PUBLISHER_PHONE`
- `NEXT_PUBLIC_PUBLISHER_EMAIL`
- `NEXT_PUBLIC_PRIVACY_POLICY_URL`
- `NEXT_PUBLIC_NOINDEX` — keep `true` on staging. Set `false` only after the canonical domain is verified.

The site stays `noindex` until a public HTTPS canonical URL is configured **and** `NEXT_PUBLIC_NOINDEX` is not `true`.

### Lead integration

- `GOOGLE_SHEETS_SPREADSHEET_ID` — Google Sheet that receives form leads.
- `GOOGLE_OAUTH_CLIENT_ID` / `GOOGLE_OAUTH_CLIENT_SECRET` / `GOOGLE_OAUTH_REFRESH_TOKEN` — server-only OAuth credentials with Sheets access.
- `GOOGLE_SHEETS_TAB_NAME` — worksheet name, defaults to `Sheet1`.
- `LEAD_WEBHOOK_URL` — optional extra CRM/webhook destination.
- `LEAD_WEBHOOK_SECRET` — optional bearer token. Server-only.
- `CRM_OR_WEBHOOK_PROVIDER` / `LEAD_DESTINATION` — operator labels for the configured destination.
- `INTERNAL_LEAD_EMAIL` — operator notification recipient.
- `EMAIL_PROVIDER_API_KEY` — server-only key for the email API.
- `EMAIL_PROVIDER_ENDPOINT` — defaults to Resend's email API.
- `FROM_EMAIL` / `FROM_NAME` — sender identity for acknowledgement and internal mail.
- `ACKNOWLEDGEMENT_EMAIL_PROVIDER` — operator label for the transactional mail provider.

Lead-delivery order:

1. If Google Sheets OAuth and a spreadsheet ID are set, the server appends the validated lead to that sheet.
2. If `LEAD_WEBHOOK_URL` is also set, the server posts the lead there after a successful Sheets write.
3. Otherwise, if internal email and an email API key are set, the server sends the internal new-lead email.
4. In non-production, if neither destination is configured, leads are appended to `.data/leads.jsonl` so local testing can succeed without faking a CRM response.
5. Set `ALLOW_LOCAL_LEAD_CAPTURE=true` only for staging or local production-server tests when no CRM is configured. Do not enable it for a public production site.
6. In production, if no destination is configured and local capture is not explicitly enabled, the form returns a recoverable failure. The application does **not** report success when capture failed.

Acknowledgement email is best-effort after a successful capture. A failed acknowledgement does not undo a confirmed capture, but the operator should monitor email errors.

### Analytics

- `NEXT_PUBLIC_ANALYTICS_MEASUREMENT_ID` — optional GA4 measurement ID.
- `NEXT_PUBLIC_ALLOW_FBCLID` — set `true` only if the privacy configuration allows capturing `fbclid`.
- `NEXT_PUBLIC_LANDING_PAGE_VARIANT` — attribution variant label.

`generate_lead` fires only after the server confirms capture. Names, emails, phone numbers and other form values are never sent to analytics.

If analytics are required for launch, the measurement ID is a launch blocker until it is configured and reviewed.

### Search verification

- `GOOGLE_SEARCH_CONSOLE_VERIFICATION`
- `BING_WEBMASTER_VERIFICATION`

These populate metadata verification tags when present.

## Domain and canonical setup

1. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin.
2. Set `NEXT_PUBLIC_SITE_DOMAIN` to the same host.
3. Confirm the self-referencing canonical on the homepage.
4. Set `NEXT_PUBLIC_NOINDEX=false`.
5. Rebuild and deploy.
6. Submit the sitemap in Google Search Console and Bing Webmaster Tools.

## Google Search Console setup notes

1. Add the production property for the canonical domain.
2. Verify with the HTML tag token in `GOOGLE_SEARCH_CONSOLE_VERIFICATION`, or DNS/file verification if preferred.
3. Submit `https://[DOMAIN]/sitemap.xml`.
4. Inspect the homepage after the first successful crawl.
5. Do not request indexing while `noindex` is still active.

## Bing Webmaster Tools setup notes

1. Add the production site in Bing Webmaster Tools.
2. Import Search Console verification if available, or set `BING_WEBMASTER_VERIFICATION`.
3. Submit `https://[DOMAIN]/sitemap.xml`.
4. Confirm `robots.txt` allows Bingbot.

## Image replacement instructions

Supporting photographs live in `public/images/`:

- `oakville-tree-canopy.jpg`
- `oakville-lakeshore.jpg`
- `oakville-park-trail.jpg`
- `architectural-garden.jpg`

These are generic neighbourhood/architectural images. They must not be presented as Five Oaks renderings. Keep the visible qualifier: **Neighbourhood imagery for illustration only.**

Do not add Caivan or Five Oaks names or logos to images unless usage rights are confirmed. Do not use photographs of identifiable people unless specifically requested. Prefer 16:9 sources around 1200–1600px wide. Update `lib/project-data.ts` `images` if filenames, dimensions or alt text change. After replacing files, rebuild so Open Graph and `next/image` derivatives refresh.

Official Five Oaks imagery may be used only with permission.

## How to update project facts

All time-sensitive project copy is centralized in `lib/project-data.ts`.

1. Verify the new fact against official Five Oaks/Caivan material.
2. Update the fact ledger object: `value`, `sourceLabel`, `sourceUrl`, `checked`, `status`, and `displayBehavior`.
3. Use `VERIFIED`, `PROVISIONAL`, `CONFLICTING` or `TBA`.
4. TBA values must render as **To be announced** or **Request the latest verified update**. Do not invent a fallback.
5. Update `INFORMATION_CHECKED_ISO` / `INFORMATION_CHECKED_DISPLAY`.
6. Update visible FAQ answers if they depend on the fact.
7. Update JSON-LD only when the visible page actually supports the new entity or property.
8. Record any third-party conflict in `sourceConflicts` instead of silently merging it.

Never treat a third-party pre-construction directory as authority for prices, deposits, incentives, launch dates, occupancy, inventory, floor plans or site address.

## Consent and privacy configuration

- The marketing-consent checkbox is unchecked by default.
- Consent wording names `[PUBLISHER_LEGAL_NAME]`, not Caivan, unless Caivan is actually the sender/controller.
- Form submission for the requested project update is separate from permission for ongoing promotional messages.
- Canadian commercial electronic messaging requirements include consent, sender identification and an unsubscribe mechanism. Express consent requires a proactive opt-in.
- Link the Privacy Policy from the form and footer. `/privacy` is a review template until counsel supplies a final policy URL.
- Collect only the fields needed to handle the update request.
- Retention: keep lead records only as long as needed to respond, meet legal obligations, and resolve disputes. Document the operator's actual retention schedule before launch.
- Access/deletion: route requests to `[PUBLISHER_EMAIL]`, verify identity, locate records in the CRM/webhook destination and email provider, then respond according to applicable Canadian privacy law.
- Do not use dark patterns to force marketing consent.

`[PRIVACY_POLICY_URL]` is a launch blocker.

## Crawler configuration

Current production intent, once indexing is enabled:

- Allow Googlebot.
- Allow Bingbot.
- Allow OAI-SearchBot.
- Do not intentionally block those search crawlers.
- `/api/` is disallowed.
- `GPTBot` is currently allowed by the wildcard rule. Treat GPTBot **training** preferences separately from search-crawler access. If the owner wants to opt out of training while remaining available to search, add an explicit `GPTBot` disallow rule and keep `OAI-SearchBot` allowed.
- `public/llms.txt` is optional/experimental and is not a substitute for crawlable HTML. It does not guarantee AI citation.

Staging/default: `robots.txt` disallows all crawlers while the public canonical domain is unset or `NEXT_PUBLIC_NOINDEX=true`.

## Deployment

1. Complete the pre-launch checklist below.
2. Set production environment variables on the host. Never commit secrets.
3. Run `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build`.
4. Deploy the application to the verified domain.
5. Confirm HTTPS, canonical URL, `robots.txt`, `sitemap.xml`, form submission and acknowledgement email.

The app can be deployed on Vercel, Netlify, or any Node host that supports Next.js 16. After deploy, point DNS for `[DOMAIN]` to the host.

In-memory rate limiting and idempotency are per-instance. For multi-instance production traffic, replace `lib/rate-limit.ts` with Redis or another shared store.

## Lead-flow behaviour

- Client validation is for usability only.
- Server validation with Zod is required.
- Honeypot field `companyWebsite` is ignored and does not create a lead.
- Origin checks reject cross-site posts.
- Duplicate submissions with the same idempotency key are treated as already recorded.
- `generate_lead` is recorded only after confirmed server capture.

## Pre-launch checklist

- [ ] Replace `[DOMAIN]` with the verified canonical domain.
- [ ] Replace `[PUBLISHER_LEGAL_NAME]`, address, phone and email.
- [ ] Confirm brokerage and RECO identity if an Ontario registrant operates the site.
- [ ] Obtain brokerage/compliance approval if applicable.
- [ ] Replace the privacy-policy template with a reviewed policy URL.
- [ ] Finalize consent wording with legal review.
- [ ] Configure a real lead destination and production credentials.
- [ ] Configure acknowledgement-email sender identity and unsubscribe handling for commercial messages.
- [ ] Confirm image usage rights, or keep generic neighbourhood imagery and qualifiers.
- [ ] Set analytics IDs only if analytics are required and privacy-reviewed.
- [ ] Set Search Console and Bing verification if required.
- [ ] Turn off `NEXT_PUBLIC_NOINDEX` only after the above are complete.
- [ ] Do not advertise prices, floor plans, deposits, incentives, launch dates or a project address until official sources confirm them.

## Known TBA project information

As of August 24, 2026, official reviewed material had not published:

- Exact project site/address/intersection
- Official site plan
- Number of lots/homes
- Lot widths, home sizes, bedroom/bathroom configurations and elevations
- Detailed features and finishes
- Price list and starting prices
- Deposit schedule
- Incentives
- Release dates and sales launch date
- Occupancy/closing dates
- Assignment rules
- Development charges
- Parking details
- Official floor plans

Do not invent those details. Do not present Caivan's general Oakville Sales Centre at 209 Oak Park Blvd. as the Five Oaks project location.

## Legal launch blockers

These must remain visible until replaced. Do not silently omit them from the footer.

- `[DOMAIN]`
- `[PUBLISHER_LEGAL_NAME]`
- `[PUBLISHER_ADDRESS]`
- `[PUBLISHER_EMAIL]`
- `[PRIVACY_POLICY_URL]`
- Actual lead destination and production credentials
- Production acknowledgement-email sender
- Brokerage identity if operated by an Ontario registrant
- Brokerage compliance approval if applicable
- Final consent wording/legal review
- Rights/permission for any project imagery
- Verified canonical domain
- Analytics IDs if analytics are required

Project pricing, floor plans and deposit details are not site-launch blockers while the offer remains **Get Project Updates** and those items stay marked TBA.

## Updating this page later

If new official information appears after August 24, 2026:

1. Verify it against an official source.
2. Add the value, source and checked date to the fact ledger.
3. Update visible copy, FAQs and schema only where the page actually supports the claim.
4. Update the information-checked date.
