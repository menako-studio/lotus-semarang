# 🌸 PROJECT STATE: Lotus Semarang (Single Source of Truth)

> **Document Purpose**: Complete architectural snapshot and execution blueprint for AI Coding Agents (Claude 3.7/4.6 Sonnet, GPT-4o, etc.) to perform feature implementation, refactoring, and bug fixes without full-codebase rescanning.

---

## 1. EXECUTIVE SUMMARY & TECH STACK

### 1.1 Application Scope & Brand Positioning
**Lotus Semarang** (`Lotus Health, Beauty & Care`) is a private clinical healthcare therapy clinic based in Semarang, Central Java (Jl. Pamularsih No. 90/100, Gisikdrono, Semarang Barat).
- **Core Clinical Services**: Medical Acupuncture (Akupunktur Medis), Hydrotherapy (Hidroterapi), and Physiotherapy (Fisioterapi), accompanied by an Advanced Active Maintenance Program (Swim Course).
- **Brand Identity & Tone**: Professional medical therapy and rehabilitation in a comfortable, private, and personal environment. **NOT** a luxury day spa, beauty salon, reflexology massage, or "kretek" chiropractic parlor.
- **Facility Specification**: Semi-outdoor private swimming pool (fresh, clean water sheltered from rain and mid-day sun, comfortable ambient temperature; **not** a heated/warm-water pool), sterile treatment suites, and licensed medical staff.
- **Aesthetic Benchmark**: Warm, accessible modern healthcare therapy inspired by visual aesthetics of **wthn.com** (warm cream `#FFFFFF`/`#FAF0E4`/`#FAF7F2`, serif typography `Fraunces`, clean UI `DM Sans`).
- **Client Website (`apps/web`)**: Production-ready patient-facing portal featuring service catalogs, interactive multi-step booking to WhatsApp, bilingual i18n support (Indonesian & English), video reels showcase with YouTube embed modal, and SEO-optimized architecture.
- **Admin Dashboard (`apps/admin`)**: Monorepo workspace placeholder for future internal clinic management.

### 1.2 Tech Stack & Key Tooling
- **Monorepo & Build System**: Turborepo (`turbo 2.x`), `pnpm` workspaces (`pnpm@9.x`).
- **Framework**: Next.js 14 (`14.2.35` / App Router) + React 18 (`18.3.1`).
- **Language**: TypeScript 5 (`5.4.5` / strict mode).
- **Styling**: Tailwind CSS v3 (`3.4.4`) with customized wellness design tokens + PostCSS + Autoprefixer.
- **Animation & Transitions**: `framer-motion` (`^11.2.10`).
- **Icons**: `lucide-react` (`^0.395.0`).
- **Image Optimization Engine**: `sharp` (`^0.35.4`) for native libvips AVIF/WebP generation.
- **State Management & i18n**: React Context API (`LanguageContext.tsx`) + `localStorage` persistence (`lotus_language` key).
- **Integrations**: Direct WhatsApp generator to official clinic hotline (`+6287700303645`), Google Maps embed & links (`https://maps.app.goo.gl/PWpA655K59Gq82Xy9`), Google Reviews 4.9 showcase, and YouTube modal player.

---

## 2. PROJECT STRUCTURE & ARCHITECTURE

### 2.1 Workspace Directory Tree
```
lotus-semarang/
├── apps/
│   ├── web/                           # Patient Web Application (Next.js 14 App Router)
│   │   ├── app/
│   │   │   ├── layout.tsx             # Root layout: Fraunces & DM Sans fonts, JSON-LD Schema.org
│   │   │   ├── page.tsx               # Homepage: Hero, Marquee, Services, Experience, Team, Gallery, Reels, Reviews, FAQ, Contact
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
│   │   │   ├── Hero.tsx               # Streamlined hero: "Sehat Itu Menyenangkan." + CTAs
│   │   │   ├── ServicesGrid.tsx       # 3 uniform clinical cards (Akupunktur, Hidroterapi, Fisioterapi) + Swim Course journey
│   │   │   ├── TeamShowcase.tsx       # "Kenali Tim yang Merawatmu": 9 certified medical therapists & credentials
│   │   │   ├── ContactSection.tsx     # Amana Care-inspired 2-column contact: WhatsApp form + Info & Google Maps
│   │   │   ├── SearchableFaq.tsx      # Category-filterable & searchable FAQ with 7 exact clinical questions
│   │   │   ├── ReelsShowcase.tsx      # YouTube video modal player & reels showcase
│   │   │   ├── ReservasiClient.tsx    # 4-step interactive booking wizard + WhatsApp formatter
│   │   │   ├── BookingFlow.tsx        # Alternative luxury multi-step booking module
│   │   │   ├── AkupunkturClient.tsx   # Detailed Acupuncture landing & pricing/benefits
│   │   │   ├── HidroterapiClient.tsx  # Detailed Hydrotherapy landing (semi-outdoor pool, private 1-on-1)
│   │   │   ├── FisioterapiClient.tsx  # Detailed Physiotherapy landing (modalities + kinesitherapy)
│   │   │   ├── SwimCourseClient.tsx   # Detailed Swim Course landing (kids, adults, active seniors)
│   │   │   ├── TentangKamiClient.tsx  # Founder profile drg. Arini Jannata, clinic history & philosophy
│   │   │   ├── Footer.tsx             # Contact info, map links, schedule & bottom bar
│   │   │   ├── Marquee.tsx            # Animated continuous marquee banners
│   │   │   └── LanguageContext.tsx    # Translation provider & useLanguage hook
│   │   ├── lib/
│   │   │   ├── translations.ts        # Full bilingual dictionary (ID / EN)
│   │   │   └── analytics.ts           # GA4 / GTM event tracking utilities
│   │   ├── public/                    # High-res compressed WebP/JPG assets & logo
│   │   ├── next.config.js             # Transpiles @lotus/ui, remote image patterns (Unsplash, YouTube)
│   │   └── tailwind.config.js         # Wellness color tokens (peach, sand, sage, terra, blush, espresso, forest)
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

---

## 3. HOMEPAGE ARCHITECTURE & CLIENT REVISIONS

Following the comprehensive 12-page clinic revision document (`WEB LOTUS.pdf`), the homepage layout is structured as follows:

| Section | Component | Description & Key Specs |
|---|---|---|
| **1. Header & Hero** | `Hero.tsx` | Eyebrow: `Akupunktur · Fisioterapi · Hidroterapi`. Title: `Sehat Itu Menyenangkan.` Subcopy emphasizes personalized, professional, and private care. Action buttons: `[Lihat Layanan]` & `[Reservasi Sekarang]`. Removed distracting bottom trust pills. |
| **2. Marquee** | `Marquee.tsx` | Dark espresso band with smooth infinite scrolling text. |
| **3. Services** | `ServicesGrid.tsx` | Split into 2 tiers: <br>1. **3 Primary Healthcare Cards**: Akupunktur, Hidroterapi, and Fisioterapi with comprehensive symptom lists and badges.<br>2. **Program Lanjutan**: Swim Course presented with the Care → Recovery → Maintenance → Active lifestyle journey. |
| **4. Experience** | `page.tsx` (Section 4) | **4 Value Pillars**: Privat (1 patient/session), Personal (custom care plan), Nyaman untuk Menjadi Dirimu Sendiri (safe & welcoming), Bersih Terawat dan Profesional (certified hygiene & therapists). Updated visual with aesthetic hydrotherapy floating photo. |
| **5. Team Directory** | `TeamShowcase.tsx` | "Kenali Tim yang Merawatmu" featuring 9 certified therapists across Acupuncture, Physiotherapy, and Swim Coaching with updated high-res photoshoot headshots (`1670255493152.jpg`, `1670255538800.jpg`, `1670255458385.jpg`, `1670255352307.jpg`, `1670255425034.jpg`) and verified credentials (`drg. Arini`, `Ayun`, `Sofin`, `Mei`, `Zul`, `Aziz`, `Nikmah`, `Dicky`, `Esti`). |
| **6. Facility Gallery** | `page.tsx` (Section 6) | 4 facility showcase cards (Acupuncture Suite, Hydrotherapy Pool, Physiotherapy Gym, Consultation Lounge) with streamlined titles. |
| **7. Video Reels** | `ReelsShowcase.tsx` | 4 active verified YouTube video reels with modal video player (removed copyright-claimed 404 video, balanced into 4-column layout). |
| **8. Testimonials** | `page.tsx` (Section 7) | "Cerita dari Mereka": Google Reviews 4.9 rating summary card on the left + 5 core value reviews highlighting stroke rehab, hijabi privacy, back pain relief, fear-free acupuncture, and sports recovery. |
| **9. FAQ** | `SearchableFaq.tsx` | Searchable accordion with the **exact 7 clinical questions** from the client: reservation policy, painless acupuncture, children safety, hydrotherapy vs. swimming, swimming ability requirement, referral requirements, and initial consultation. |
| **10. Contact / CTA** | `ContactSection.tsx` | Amana Care-inspired 2-column layout: Left column features an interactive WhatsApp form (Nama, Jenis Kelamin, Usia, Pesan) dispatching to `+6287700303645`. Right column features clinic address, operating hours, direct links, and a responsive Google Maps embed. |
| **11. Footer** | `Footer.tsx` | Clinic branding, operating hours, navigation links, and social channels. |

---

## 4. DATA FLOW & TECHNICAL MATURITY

### 4.1 Data Flow & External Integrations
- **WhatsApp Direct Booking Flows**:
  - `ContactSection.tsx`: Homepage interactive contact form dispatching to WhatsApp hotline (`+6287700303645`).
  - `ReservasiClient.tsx`: 4-step comprehensive booking wizard on `/reservasi`.
- **Google Maps Integration**:
  - Embedded iframe centered on `Jl. Pamularsih No. 90/100, Semarang`.
  - Direct directions link to Google Maps: `https://maps.app.goo.gl/PWpA655K59Gq82Xy9`.
- **Localization (i18n)**:
  - Central dictionary in `apps/web/lib/translations.ts` containing complete parallel translations for `id` and `en`.
  - `LanguageContext.tsx` handles seamless switching with `localStorage` persistence.
- **Analytics & Tracking**:
  - `apps/web/lib/analytics.ts` tracks WhatsApp leads (`generate_lead`), contact methods (`contact`), FAQ expansions (`view_faq`), and service selections (`select_item`).

### 4.2 Quality Assurance & Verification
- **Build Status**: 100% clean production build (`pnpm --filter @lotus/web build`) with all routes prerendered statically.
- **Type Safety**: TypeScript 5 strict mode passed with 0 errors.
- **Linting**: ESLint passed with 0 warnings.

### 4.3 Image Performance Optimization & Core Web Vitals
- **Native Image Pipeline Engine**: `sharp` (`^0.35.4`) installed in `@lotus/web`, replacing slow WebAssembly Squoosh with high-performance C/libvips processing for on-demand AVIF and WebP transcoding.
- **Cache Optimization**: Configured `minimumCacheTTL: 31536000` (1 year) with tailored `deviceSizes` (`[640, 750, 828, 1080, 1200, 1920]`) and `imageSizes` (`[16, 32, 48, 64, 96, 128, 256, 384]`) in `apps/web/next.config.js`.
- **Source Asset Optimization**:
  - Total static image asset weight reduced by **~77% (from 17.5 MB down to 4.05 MB)**.
  - Purged 7 unused bloat/duplicate files (including a 5.3 MB leftover raw photo).
  - Losslessly/perceptually optimized all JPEGs via MozJPEG (quality 80, progressive, subsampling 4:2:0), WebP files with maximum effort compression, and PNG files (`icon.png`, `logo.png`) with palette quantization (saving up to 73%).
  - Generated dedicated 1200x630 `hero-1.webp` for OpenGraph, Twitter cards, and Schema.org metadata previews.
- **Responsive Layout & LCP**:
  - Fine-tuned `sizes` attributes across all Next.js `<Image>` components (`Navbar.tsx`, `Hero.tsx`, `TentangKamiClient.tsx`, `AkupunkturClient.tsx`, `HidroterapiClient.tsx`, `FisioterapiClient.tsx`, `SwimCourseClient.tsx`).
  - Added strict dimensions on the navbar logo to prevent oversized thumbnail requests on retina viewports.

