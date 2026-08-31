# 🌸 PROJECT STATE: Lotus Semarang (Single Source of Truth)

> **Document Purpose**: Complete architectural snapshot and execution blueprint for AI Coding Agents (Claude 3.7/4.6 Sonnet, GPT-4o, etc.) to perform feature implementation, refactoring, and bug fixes without full-codebase rescanning.

---

## 1. EXECUTIVE SUMMARY & TECH STACK

### 1.1 Application Scope & Purpose
**Lotus Semarang** (`Lotus Health, Beauty & Care`) is a private wellness, medical acupuncture, hydrotherapy, physiotherapy, and exclusive swimming course clinic based in Semarang, Indonesia.
- **Client Website (`apps/web`)**: Production-ready patient-facing portal featuring service catalogs, interactive multi-step booking to WhatsApp, multilingual i18n support (Indonesian & English), video reels showcase with YouTube embed modal, and SEO-optimized architecture.
- **Aesthetic Benchmark**: Inspired by **wthn.com** (warm pastel tones, skin tones, cream background `#FFFFFF`/`#FAF0E4`, serif typography `Fraunces`, modern UI `DM Sans`).
- **Admin Dashboard (`apps/admin`)**: Monorepo workspace placeholder for future internal clinic management.

### 1.2 Tech Stack & Key Tooling
- **Monorepo & Build System**: Turborepo (`turbo 2.x`), `pnpm` workspaces (`pnpm@9.x`).
- **Framework**: Next.js 14 (`14.2.35` / App Router) + React 18 (`18.3.1`).
- **Language**: TypeScript 5 (`5.4.5` / strict mode).
- **Styling**: Tailwind CSS v3 (`3.4.4`) with customized wellness design tokens + PostCSS + Autoprefixer.
- **Animation & Transitions**: `framer-motion` (`^11.2.10`).
- **Icons**: `lucide-react` (`^0.395.0`).
- **State Management & i18n**: React Context API (`LanguageContext.tsx`) + `localStorage` persistence (`lotus_language` key).
- **Database & Backend APIs**: Currently static / client-driven; bookings dispatch structured WhatsApp payload directly to clinic operators (`+6287700303645`). No external DB connected yet.

---

## 2. PROJECT STRUCTURE & ARCHITECTURE

### 2.1 Workspace Directory Tree
```
lotus-semarang/
├── apps/
│   ├── web/                           # Patient Web Application (Next.js 14 App Router)
│   │   ├── app/
│   │   │   ├── layout.tsx             # Root layout: Fraunces & DM Sans fonts, JSON-LD Schema.org
│   │   │   ├── page.tsx               # Homepage: Hero, Marquee, Services, Experience, Gallery, Reels, Reviews, FAQ
│   │   │   ├── globals.css            # CSS variables, typography utilities, pill buttons, animations
│   │   │   ├── not-found.tsx          # Custom 404 error page with i18n support
│   │   │   ├── tentang-kami/page.tsx  # About page (Server Component wrapper + metadata)
│   │   │   ├── reservasi/page.tsx     # Reservation page (Server Component wrapper + metadata)
│   │   │   └── layanan/               # Service detail routes (Server Components)
│   │   │       ├── akupunktur/page.tsx
│   │   │       ├── hidroterapi/page.tsx
│   │   │       ├── fisioterapi/page.tsx
│   │   │       └── swim-course/page.tsx
│   │   ├── components/                # Interactive UI and Client views
│   │   │   ├── Navbar.tsx             # Sticky header, dropdown, language switcher (ID/EN), mobile drawer
│   │   │   ├── Hero.tsx               # Split hero layout with trust badges & CTAs
│   │   │   ├── ServicesGrid.tsx       # 2x2 color-blocked service cards
│   │   │   ├── SearchableFaq.tsx      # Category-filterable & searchable FAQ accordion
│   │   │   ├── ReelsShowcase.tsx      # YouTube video modal player & reels showcase
│   │   │   ├── ReservasiClient.tsx    # 4-step interactive booking wizard + WhatsApp formatter
│   │   │   ├── BookingFlow.tsx        # Alternative luxury multi-step booking module
│   │   │   ├── AkupunkturClient.tsx   # Detailed Acupuncture landing & pricing/benefits
│   │   │   ├── HidroterapiClient.tsx  # Detailed Hydrotherapy landing
│   │   │   ├── FisioterapiClient.tsx  # Detailed Physiotherapy landing
│   │   │   ├── SwimCourseClient.tsx   # Detailed Swim Course landing
│   │   │   ├── TentangKamiClient.tsx  # Founder profile, clinic history & vision
│   │   │   ├── Footer.tsx             # Contact info, map links, schedule & bottom bar
│   │   │   ├── Marquee.tsx            # Animated continuous marquee banners
│   │   │   ├── Sanctuary.tsx          # Wellness retreat space feature section
│   │   │   └── LanguageContext.tsx    # Translation provider & useLanguage hook
│   │   ├── lib/
│   │   │   └── translations.ts        # Full bilingual dictionary (ID / EN)
│   │   ├── public/                    # High-res compressed WebP/JPG assets & logo
│   │   ├── next.config.js             # Transpiles @lotus/ui, remote image patterns (Unsplash, YouTube)
│   │   └── tailwind.config.js         # Wellness color tokens (peach, sand, sage, terra, blush, espresso)
│   │
│   └── admin/                         # Admin Dashboard (Stub)
│       ├── package.json               # Next.js 14 setup on port 3001
│       └── tsconfig.json
│
├── packages/
│   ├── ui/                            # Shared Component Library
│   │   ├── components/                # EyebrowLabel, DividerRule, GhostButton, SectionWrapper
│   │   ├── lib/utils.ts               # clsx + tailwind-merge (cn helper)
│   │   ├── index.ts                   # UI package barrel export
│   │   └── package.json
│   └── config/                        # Shared configurations
│       ├── tailwind.config.js         # Base shared Tailwind configuration
│       └── tsconfig.json              # Shared tsconfig bases
│
├── turbo.json                         # Turborepo task pipeline (build, dev, lint, type-check)
├── pnpm-workspace.yaml                # Monorepo packages definition
└── package.json                       # Root script definitions
```

### 2.2 Architectural Patterns
1. **Server vs. Client Component Separation (SEO First)**:
   - `apps/web/app/**/page.tsx` are pure **Server Components** exporting Next.js `Metadata` objects (canonical URLs, OpenGraph, title templates, SEO keywords).
   - Interactive DOM logic (accordions, language switching, step forms, Framer Motion) is encapsulated in `components/*Client.tsx` marked with `"use client"`.
2. **Design Token Hierarchy**:
   - Primary design tokens live in `apps/web/tailwind.config.js` and `packages/config/tailwind.config.js`.
   - Core palette: `peach` (`#F2C4A8`), `sand` (`#E8D5B5`), `sage` (`#B8C9A8`), `terra` (`#D4845A`), `blush` (`#E8C4C0`), `espresso` (`#2D1F14`), `forest` (`#1E3A28`), `cream` (`#FFFFFF`).
3. **Structured Localization Pattern**:
   - `lib/translations.ts` contains keyed dictionary structures for `id` (Indonesian default) and `en` (English).
   - `LanguageContext.tsx` provides `t("path.to.key")` with automatic fallback to `id` if any English key is missing.

---

## 3. CURRENT IMPLEMENTATION STATE & DATA FLOW

### 3.1 Active Modules & Pages
| Route | Type | Implementation State | Description |
|---|---|---|---|
| `/` | Page (SSR + Client) | **Completed** | Full landing page: Hero, ServicesGrid, Experience, Gallery, Reels, Reviews, FAQ, Footer |
| `/tentang-kami` | Page (SSR + Client) | **Completed** | Profile of founder drg. Arini Jannata, clinic history (since 2014), holistic philosophy |
| `/layanan/akupunktur` | Page (SSR + Client) | **Completed** | Medical & facial acupuncture, electro-acupuncture, slimming, pediatric treatments |
| `/layanan/hidroterapi` | Page (SSR + Client) | **Completed** | Warm water therapy pool (32-34°C), private hydro sessions, stroke/joint rehabilitation |
| `/layanan/fisioterapi` | Page (SSR + Client) | **Completed** | Modality tools (NMT, IR, US, TENS, Traction) + manual therapy exercises |
| `/layanan/swim-course` | Page (SSR + Client) | **Completed** | Private swimming course for children, women, and seniors in sterile heated pool |
| `/reservasi` | Page (SSR + Client) | **Completed** | 4-step wizard: Service → Schedule (Date & Time) → Patient info → WhatsApp dispatch |
| `/_not-found` | Page (Client) | **Completed** | Clean localized 404 page |

### 3.2 Data Flow & External Integrations
- **WhatsApp Direct Booking Flow**:
  - `ReservasiClient.tsx` collects `layanan`, `hari`, `jam`, `nama`, `keluhan`, `catatan`.
  - Encodes URI string to `https://wa.me/6287700303645?text={encoded_message}` and opens WhatsApp directly in a new tab.
- **YouTube Reels Showcase**:
  - Video IDs: `azv-Y1Or_Ps`, `DqXYDhLji4Y`, `J_L5eCHy-Fk`, `VtuUAN56IfI`, `fhbQ6rYgPB4`.
  - Lazy loads thumbnails from `https://img.youtube.com/vi/{id}/sddefault.jpg` and mounts modal iframe on click.
- **SEO, Structured Data & Analytics**:
  - Dynamic XML Sitemap (`apps/web/app/sitemap.ts`) & `robots.txt` (`apps/web/app/robots.ts`) with high priority indexing for `/`, `/layanan/akupunktur`, and `/layanan/hidroterapi`.
  - Rich JSON-LD Schemas on all pages: `MedicalClinic`, `HealthAndBeautyBusiness`, `MedicalProcedure`, `OfferCatalog`, `BreadcrumbList`, geo-coordinates (`-6.9934758, 110.3957242`), and `sameAs` social entity verification.
  - Google Tag Manager & GA4 helper module (`apps/web/lib/analytics.ts`) with conversion event tracking: WhatsApp booking dispatch (`generate_lead`), step checkout progression (`checkout_progress`), service clicks (`select_item`), and local contact channels (`contact`).
  - Next.js Script integration in `layout.tsx` driven by `NEXT_PUBLIC_GTM_ID` and `NEXT_PUBLIC_GA_ID` environment variables.

---

## 4. SUBSYSTEMS STATUS & TECHNICAL MATURITY

### 4.1 Subsystem Snapshot
1. **`apps/web` (Patient Portal)**:
   - **Status**: Production-ready.
   - Favicon & App Icons: Configured with `icon.png` (308KB hi-res lotus icon) in both `public/` and `app/` with explicit Next.js metadata icons & apple touch icon.
   - Linting & Type-checking: Strict type safety and 0 ESLint warnings (`pnpm lint`, `pnpm type-check`, `pnpm build`).
2. **`apps/admin` (Admin Management Portal)**:
   - **Status**: Initialized & running on port `3001`.
   - Contains Next.js 14 App Router layout (`app/layout.tsx`), dashboard overview page (`app/page.tsx`), and global styles (`app/globals.css`).
   - Integrated with monorepo `turbo run dev` and `turbo run build`.
3. **Shared Packages (`@lotus/ui` & `@lotus/config`)**:
   - Reusable UI primitives (`SectionWrapper`, `EyebrowLabel`, `GhostButton`, `DividerRule`, `cn` helper).
   - Shared Tailwind design tokens and TypeScript base configurations.

### 4.2 Potential Future Enhancements
1. **Admin Portal Data Integration**:
   - Connect `apps/admin` with a persistent database or headless CMS / Supabase for live booking and patient records.
2. **Double Booking Flow Components Cleanup**:
   - `components/ReservasiClient.tsx` is the active production booking wizard on `/reservasi`.
   - `components/BookingFlow.tsx` remains as an alternative luxury multi-step booking variant.
3. **YouTube Video Fallbacks**:
   - YouTube video thumbnails load cleanly; ensure fallback image gracefully handles offline network states.

---

## 5. AI AGENT CODING GUIDELINES

### 5.1 Naming Conventions & File Placement
- **Client Components**: Store in `apps/web/components/` with PascalCase naming (e.g., `ServiceNameClient.tsx`). Always add `"use client";` at line 1.
- **Server Routes**: Place in `apps/web/app/<route-name>/page.tsx`. Keep `page.tsx` minimal: export `metadata` and render the respective client component.
- **Shared Utilities**: Place common helper functions in `packages/ui/lib/utils.ts` or `apps/web/lib/`.
- **Translations**: When adding new text or UI copy, ALWAYS add keys to both `id` and `en` in `apps/web/lib/translations.ts`.

### 5.2 Tailwind & Style Rules
- Use semantic color names from the design system:
  - `bg-cream` / `bg-cream-warm`
  - `text-espresso` / `text-espresso/70`
  - `text-terra` / `bg-peach-soft` / `bg-sage-soft` / `bg-blush-soft` / `bg-sand-soft`
- Font classes:
  - Headings: `font-display` (Fraunces serif)
  - Body & UI: `font-sans` (DM Sans)
- Interactive buttons: Use `.btn-pill-dark`, `.btn-pill-outline`, or `.tag-pill`.

### 5.3 Step-by-Step Feature Implementation Workflow
When an AI agent is requested to build or modify features:
1. **Types & Translations**:
   - Update dictionary keys in `apps/web/lib/translations.ts` (both `id` and `en`).
2. **Component Implementation**:
   - Create or update the component in `apps/web/components/`.
   - Consume translation keys using `const { t, language } = useLanguage();`.
3. **Route Integration (If new page)**:
   - Create `apps/web/app/<path>/page.tsx`.
   - Define canonical `metadata` (Title, Description, Keywords, OpenGraph).
4. **Verification**:
   - Run type checking: `pnpm --filter @lotus/web type-check`.
   - Run production build: `pnpm --filter @lotus/web build`.
   - Validate that no broken imports or missing keys exist.
