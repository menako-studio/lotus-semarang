# Lotus Semarang: Technical SEO and Data Export Blueprint

Production: <https://www.lotussemarang.com/> (canonical host is **www**).
Code: `apps/web` (Next.js App Router). SEO constants live in `apps/web/lib/seo.ts`.

No one can guarantee a #1 ranking. For a local clinic, the levers that actually move rankings are
(1) the **Google Business Profile** (map pack), (2) consistent NAP + reviews, (3) one strong page per
service with matching search intent, and (4) a technically clean, fast site. This document covers what
to export and how to act on it, plus what the codebase now does.

---

## 0. Code changes in this pass

| Area | Before | After |
|---|---|---|
| Canonical host | `https://lotussemarang.com` hardcoded in ~30 places | One `SITE_URL` in `lib/seo.ts`, default `https://www.lotussemarang.com` |
| `robots.txt` | `Disallow: /_next/`, which blocks the JS/CSS Googlebot needs to render | `/_next/` allowed; only `/api/` and `/admin/` blocked. Removed the non-Google `Host:` line |
| Titles | Page title + `"\| Lotus Health"` + template suffix, producing titles of about 100 characters with the brand twice | `"<Page> \| Lotus Semarang"` (about 50–60 chars) |
| Brand / NAP | Mix of "Lotus Health", "Lotus Health, Beauty & Care", "Lotus Akupunktur…" | One clinic entity (`@id …/#clinic`). Service pages reference it instead of re-declaring other names |
| hreflang | `id-ID`, `en-US` and `x-default` all pointing at the same URL (invalid; the language toggle is client-side only) | Removed. Add it back only if `/en/...` routes are ever built |
| Open Graph | Pages without their own `openGraph` inherited `og:url` = homepage; image was WebP | `pageMetadata()` helper gives every page its own canonical, OG and Twitter tags. New 1200×630 `og-image.jpg` (JPG previews reliably in WhatsApp) |
| JSON-LD | `MedicalClinic`+`LocalBusiness` duplicate types, placeholder Maps URL in `sameAs`, invalid `contactOption: "WhatsApp"` | `MedicalClinic` (already a LocalBusiness subtype) + `WebSite` graph, real Maps link as `hasMap`/`sameAs`, invalid property removed |
| GA4 + GTM | If both env vars were set, gtag.js and GTM both loaded and **double-counted** every event | gtag.js loads only when `NEXT_PUBLIC_GTM_ID` is empty |
| GSC verification | none | Optional `NEXT_PUBLIC_GSC_VERIFICATION` sets `<meta name="google-site-verification">` |
| Fonts | Preconnects to `fonts.googleapis.com`/`gstatic` | Removed. `next/font` self-hosts the fonts, so those connections were wasted |

**Required in Vercel (or your host):** set `NEXT_PUBLIC_SITE_URL=https://www.lotussemarang.com`. If it still
says the apex domain, every canonical will point to the non-www host. Also make sure
`lotussemarang.com` returns a **301** to `https://www.lotussemarang.com` (Vercel → Domains → Redirect).

### Remaining codebase items (not done here; they need content or decisions)

1. **Homepage is a client component** (`app/page.tsx` has `"use client"`). It still renders on the server,
   but the whole page ships as JS. Moving static sections to server components would improve LCP/INP.
2. **Bilingual content.** The ID/EN toggle swaps text on the client, so Google only indexes Indonesian.
   If English traffic matters, add `/en/...` routes with real hreflang pairs.
3. **Sitemap `lastmod`** is the build time for every URL. Google ignores lastmod values that are always
   "now". Use real per-page edit dates once content is managed in the admin app.
4. **FAQ schema.** Google shows FAQ rich results only for well-known authoritative health and government sites, so it is low priority.
   Self-written `Review`/`AggregateRating` on your own business is **not** eligible for stars. Collect
   reviews on Google Business Profile instead.
5. **Content depth per service.** Each `/layanan/*` page should answer "biaya / harga", "berapa sesi",
   "untuk siapa", "lokasi & parkir", and have a FAQ block. Map them to the queries from GSC (§1).
6. **Location page / blog** for condition-led queries (e.g. "terapi saraf kejepit semarang",
   "akupunktur promil semarang"), each linking to the service page.

---

## 1. Google Search Console: export checklist

Set up a **Domain property** (`lotussemarang.com`, DNS TXT verification). It covers www, apex, http and https.
Submit `https://www.lotussemarang.com/sitemap.xml` under *Sitemaps*.

Export (Export → Google Sheets/CSV) monthly. For the Performance report use **the last 16 months** the first time, then the last 28 days compared with the previous period:

| # | Report | Dimension / filter | Metrics | How to use it |
|---|---|---|---|---|
| 1 | Performance → Search results | **Queries** | Clicks, Impressions, CTR, Position | Find queries at position 4–20 with high impressions. These are the fastest wins: improve the title/H1/body on the matching page |
| 2 | Performance | **Pages** | same | Check that each service page ranks for its own cluster. If two pages share a query, that is cannibalization; merge them or differentiate |
| 3 | Performance | Query **contains "lotus"** | same | Branded health. "lotus semarang" should be position 1 with CTR above 40%. If not, check the GBP name and homepage title |
| 4 | Performance | Query **does not contain "lotus"** | same | Non-branded demand (akupunktur/hidroterapi/fisioterapi/les renang + semarang). This is the real growth metric |
| 5 | Performance | **Page × Query** (filter one page, then the Queries tab) | same | Per-page keyword map, used to rewrite the title and meta description to match the top queries |
| 6 | Performance | **Devices**, **Countries** | same | Expect mostly mobile and Indonesia. Low mobile CTR means the titles are truncated |
| 7 | Performance | Search appearance | same | Confirms breadcrumb rich results are showing |
| 8 | Indexing → **Pages** | "Not indexed" reasons | URL list | Fix "Duplicate, Google chose different canonical" (www/apex), "Crawled – currently not indexed" (thin content), and "Blocked by robots.txt" (should disappear after this deploy) |
| 9 | Indexing → **Sitemaps** | status | discovered URLs | Should report 7 URLs, Success |
| 10 | Experience → **Core Web Vitals** | Mobile + Desktop | Poor / Needs improvement / Good URL groups | Every URL group should be Good. LCP is usually the hero image; INP is usually framer-motion/hydration |
| 11 | Enhancements → **Breadcrumbs** | valid / invalid | items | Should be 0 invalid |
| 12 | **Links** | Top linking sites, Top linked pages (internal) | count | Backlink outreach list (local directories, Semarang health portals); internal links to service pages |
| 13 | URL Inspection | each `/layanan/*` URL | Live test screenshot | Confirms Google renders styled content (validates the `/_next/` fix) |

Optional: link GSC to GA4 (GA4 Admin → Product links → Search Console) so landing-page + query data
appears inside GA4. For more than 1,000 rows, use **Looker Studio** or the GSC **Bulk Data Export** to BigQuery.

**Keyword working sheet:** combine exports 1, 4 and 5 into one sheet with columns:
`query | target page | position | impressions | CTR | intent (info/commercial/local) | action`.

---

## 2. Google Analytics 4: export checklist

Export from *Reports* or build *Explore* reports, comparing the last 28 days with the previous period:

| # | Report | Dimensions | Metrics | Why |
|---|---|---|---|---|
| 1 | Engagement → **Landing page** | Landing page + query string, Session default channel group | Sessions, Engaged sessions, Engagement rate, Avg. engagement time, Key events | Shows which pages organic visitors land on and whether they engage (GA4's equivalent of bounce rate) |
| 2 | Acquisition → **Traffic acquisition** | Session source/medium | Sessions, Engagement rate, Key events, Key event rate | Compares organic, direct, Instagram and Google Maps (GBP) traffic |
| 3 | Engagement → **Events** | Event name | Event count, Users | Checks that the events in §3 fire |
| 4 | Explore → **Funnel**: `page_view /layanan/*` → `select_item` → `checkout_progress` (each step) → `generate_lead` | Device category | Completion / abandonment per step | Shows where the booking wizard loses people |
| 5 | Explore → **Path exploration** starting at `session_start` | Page path | — | Shows what people read before contacting you |
| 6 | Explore → Free form: `generate_lead` by `service_name` × `source_location` | — | Event count | Which service and which CTA position produce WhatsApp leads |
| 7 | Tech → **Device / Browser / Screen resolution** | — | Engagement rate | Finds UX problems on specific devices |
| 8 | Demographics → **City** | — | Users, Key events | Confirms the audience is local (Semarang and nearby). Use it to pick `areaServed` and content cities |
| 9 | Search Console → **Queries / Google organic search traffic** (after linking) | Landing page × Query | Clicks, Engagement rate, Key events | Ties ranking queries to conversions. Prioritize queries that convert |

Settings to check:
- Admin → Events → mark **`generate_lead`** (and optionally `contact`, `whatsapp_click`) as **Key events**.
- Data retention: **14 months**.
- Enhanced measurement: keep *Page changes based on browser history events* **on**. The app is a SPA and
  never calls `trackPageView()`, so client-side navigations are counted only through this setting.
- Register custom dimensions (event-scoped): `service_name`, `source_location`, `contact_channel`,
  `cta_name`, `cta_location`, `step_name`, `contact_method`, `faq_question`.
- PII: names, phone numbers and messages must never be sent. `trackWhatsAppLead()` accepts `patientName`
  but does not push it, and should stay that way (Google's terms forbid PII in GA).

---

## 3. Google Tag Manager: setup and audit

The code already pushes these `dataLayer` events (`apps/web/lib/analytics.ts`):

| dataLayer event | Fired from | Key params | GA4 tag |
|---|---|---|---|
| `generate_lead` | WhatsApp booking / contact form submit (5 places) | `service_name`, `source_location`, `contact_channel`, `booking_date`, `booking_time` | GA4 Event `generate_lead`. **Key event** |
| `whatsapp_click` | same as above | `service`, `source` | GA4 Event (optional, for GTM triggers / Ads) |
| `contact` | phone / maps / instagram / email links (6 places) | `contact_method`, `contact_label` | GA4 Event `contact` |
| `select_item` | service cards (3 places) | `item_id`, `item_name`, `source_location` | GA4 Event `select_item` |
| `checkout_progress` | booking wizard steps | `checkout_step`, `step_name`, `service_name` | GA4 Event (funnel) |
| `click_cta` | hero/nav CTAs | `cta_name`, `cta_location` | GA4 Event |
| `view_faq` | FAQ toggle | `faq_question` | GA4 Event |
| `video_start` | reels | `video_id`, `video_title` | GA4 Event |
| `change_language` | language toggle | `language` | GA4 Event |

Container setup:
1. **Google tag** (GA4 config) with the `G-…` ID, trigger *Initialization – All Pages*.
2. One **Data Layer Variable** per param above (`DLV – service_name`, …).
3. One **Custom Event trigger** per event name (or a single regex trigger
   `^(generate_lead|contact|select_item|checkout_progress|click_cta|view_faq|video_start|change_language)$`
   paired with a GA4 Event tag whose name is `{{Event}}`).
4. If you run Google Ads: Conversion tag on `generate_lead`, plus a **Conversion Linker** tag on All Pages.
5. **Consent Mode v2:** set defaults (`ad_storage`, `analytics_storage`, `ad_user_data`,
   `ad_personalization`) before the Google tag fires, using a CMP or a Consent Initialization tag.
6. Preview with **Tag Assistant**, check events in GA4 **DebugView**, then **Publish** with a version note.

Performance rules (Core Web Vitals):
- Set only `NEXT_PUBLIC_GTM_ID` in production and leave `NEXT_PUBLIC_GA_ID` empty. GA4 then runs inside GTM and is
  not loaded twice (the layout now enforces this).
- The GTM snippet uses `next/script` `afterInteractive`, so it does not block rendering.
- Do not add Custom HTML tags for chat widgets, heatmaps or pixels without checking that they don't add
  render-blocking scripts. Fire non-essential tags on *Window Loaded* instead of *Page View*.
- Audit the container quarterly: delete paused or unused tags, and keep it under about 100 KB (GTM → Admin → Container size).
- After every publish, check PageSpeed Insights (mobile) for the homepage and one `/layanan/*` page. INP and
  TBT should not regress.

---

## 4. Local SEO (outside the codebase, highest impact for "Lotus Semarang")

- **Google Business Profile.** Use a primary category such as *Acupuncture clinic*, with secondary categories *Physical therapy clinic* and
  *Swimming instructor*. The name must match the real-world signage, and the address, phone (`+62 877-0030-3645`) and hours
  (Mon–Sat 09:00–17:00) must match the site JSON-LD in `lib/seo.ts` + `app/layout.tsx` exactly. Set the website URL to
  `https://www.lotussemarang.com/` with UTM `?utm_source=google&utm_medium=organic&utm_campaign=gbp` so GBP traffic is separable in GA4.
- Upload photos and post updates weekly, ask every satisfied patient for a Google review, and reply to all reviews.
- Keep NAP consistent on Instagram, Halodoc/Alodokter (if listed), Google Maps, Facebook and local directories.
- Get local backlinks from Semarang health and parenting communities, swim-school directories and local news.

---

## 5. Monthly routine

1. Pull the GSC exports (§1, items 1, 4, 5 and 8) and the GA4 exports (§2, items 1, 4 and 6).
2. Pick 3–5 queries at position 4–20 and improve the matching page's title, H1, intro and FAQ.
3. Fix any new indexing or CWV issues.
4. Compare `generate_lead` per landing page month over month. Pages that rank but don't convert need UX/CTA work.
