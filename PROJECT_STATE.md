# 🌸 PROJECT STATE: Lotus Semarang (Single Source of Truth)

> **Document Purpose**: Complete architectural snapshot and execution blueprint for AI Coding Agents and developers to perform feature implementation, refactoring, and bug fixes without full-codebase rescanning.

---

## 1. EXECUTIVE SUMMARY & TECH STACK

### 1.1 Application Scope & Brand Positioning
**Lotus Semarang** (`Lotus Akupunktur, Hidroterapi, Fisioterapi Semarang`) is a private clinical healthcare therapy clinic based in Semarang, Central Java (Jl. Pamularsih No. 90/100, Gisikdrono, Semarang Barat).
- **Core Clinical Services**: Akupunktur (Acupuncture), Hidroterapi (Hydrotherapy), and Fisioterapi (Physiotherapy), accompanied by an Active Lifestyle Program (Swim Course).
- **Brand Identity & Tone**: Professional medical therapy and rehabilitation in a comfortable, private, and personal environment. **NOT** a luxury day spa, beauty salon, reflexology parlor, or "kretek" chiropractic center.
- **Facility Specification**: Semi-outdoor private swimming pool (fresh, clean water sheltered from rain and sun, comfortable ambient temperature; private 1-on-1 sessions), sterile treatment suites, and licensed medical staff.
- **Color Palette & Design Tokens** (Synchronized with official clinic brochure & banner guide):
  - **Brand Colors**: Lotus Pink (`#D65A8C`), Lotus Green (`#A7B89F`).
  - **Service Accents**: Akupunktur (`#F4C0DF`), Fisioterapi (`#CDE0D0`), Hidroterapi (`#416DC2`), Swim Course (`#2F9FC9`).
  - **Pastel Tints**: `#FBE9F2` (Pink Tint), `#EAF2FF` (Blue Tint), `#EEF5EC` (Green Tint), `#E4F5FA` (Cyan Tint).
  - **Neutrals**: Pure White (`#FFFFFF`), Primary Text (`#2E2E2E`), Secondary Text (`#6B6B6B`), Border Lines (`#E8E8E8`).
- **Typography Benchmark**: Elegant modern wellness typography using Google Fonts:
  - **Display / Headings**: `Fraunces` (warm, sophisticated serif).
  - **Body & UI**: `DM Sans` (clean, accessible sans-serif).
- **Client Website (`apps/web`)**: Production-ready patient-facing portal featuring service catalogs, interactive 4-step reservation wizard directly connected to clinic admin via WhatsApp, bilingual i18n support (Indonesian & English), Amana-style expandable photo gallery, YouTube Shorts video reels showcase, authentic patient stories ("Kata Mereka"), and SEO-optimized metadata.

### 1.2 Tech Stack & Key Tooling
- **Monorepo & Build System**: Turborepo (`turbo 2.x`), `pnpm` workspaces (`pnpm@9.x`).
- **Framework**: Next.js 15 (`15.5.25` / App Router) + React 18 (`18.3.1`).
- **Language**: TypeScript 5 (`5.4.5` / strict mode).
- **Styling**: Tailwind CSS v3 (`3.4.4`) with official clinic color tokens + PostCSS + Autoprefixer.
- **Animation & Transitions**: `framer-motion` (`^11.2.10`).
- **Icons**: `lucide-react` (`^0.395.0`).
- **Image Optimization Engine**: `sharp` (`^0.35.4`) for native libvips AVIF/WebP generation.
- **State Management & i18n**: React Context API (`LanguageContext.tsx`) + `localStorage` persistence (`lotus_language` key).
- **Integrations**: Direct WhatsApp generator to official clinic hotline (`+6287700303645`), Google Maps embed & links (`https://maps.app.goo.gl/PWpA655K59Gq82Xy9`), Instagram (`https://www.instagram.com/lotus_semarang/`), and YouTube modal player.

---

## 2. PROJECT STRUCTURE & ARCHITECTURE

### 2.1 Workspace Directory Tree
```
lotus-semarang/
├── apps/
│   ├── web/                           # Patient Web Application (Next.js 14 App Router)
│   │   ├── app/
│   │   │   ├── layout.tsx             # Root layout: Fraunces & DM Sans fonts, JSON-LD Schema.org, Meta
│   │   │   ├── page.tsx               # Homepage: Navbar, Hero, Marquee, Services, Experience, Team, Gallery, Reels, Reviews, FAQ, Contact, Footer
│   │   │   ├── globals.css            # CSS variables with official clinic palette tokens
│   │   │   ├── not-found.tsx          # Custom 404 error page with i18n support
│   │   │   ├── tentang-kami/page.tsx  # About page (Server Component wrapper + metadata)
│   │   │   ├── reservasi/page.tsx     # Reservation page (Server Component wrapper + metadata)
│   │   │   └── layanan/               # Service detail routes (Server Components)
│   │   │       ├── akupunktur/page.tsx
│   │   │       ├── hidroterapi/page.tsx
│   │   │       ├── fisioterapi/page.tsx
│   │   │       └── swim-course/page.tsx
│   │   ├── components/                # Interactive UI and Client views
│   │   │   ├── Navbar.tsx             # Sticky header, enlarged logo, reordered nav (Tentang Kami -> Layanan -> Kontak -> ID/EN -> Reservasi)
│   │   │   ├── Hero.tsx               # Hero: "Sehat Itu Menyenangkan." + CTAs [Reservasi Sekarang] & [Tentang Kami]
│   │   │   ├── ServicesGrid.tsx       # 3 Primary Services with badges + simplified Swim Course
│   │   │   ├── TeamShowcase.tsx       # "Kenali Tim yang Merawatmu": 9 certified therapists & instructors
│   │   │   ├── GallerySection.tsx     # Amana-style expandable gallery with category filter tabs & lightbox
│   │   │   ├── ReelsShowcase.tsx      # 4-video Reels grid + [Lihat Reels Lainnya di Instagram] CTA
│   │   │   ├── ReviewsSection.tsx     # "Kata Mereka": 5 authentic patient story cards (Amana style)
│   │   │   ├── ContactSection.tsx     # Amana Care-inspired 2-column contact: WhatsApp form + Info & Google Maps
│   │   │   ├── SearchableFaq.tsx      # Category-filterable & searchable FAQ with 7 exact clinical questions
│   │   │   ├── ReservasiClient.tsx    # 4-step booking wizard with 8:00 - 16:00 schedule and admin WhatsApp
│   │   │   ├── AkupunkturClient.tsx   # Detailed Acupuncture landing (mechanism + cases)
│   │   │   ├── HidroterapiClient.tsx  # Detailed Hydrotherapy landing (buoyancy, pressure, 1:1 pool)
│   │   │   ├── FisioterapiClient.tsx  # Detailed Physiotherapy landing (assessment + exercise)
│   │   │   ├── SwimCourseClient.tsx   # Detailed Swim Course landing (activity program + diverse goals)
│   │   │   ├── TentangKamiClient.tsx  # Clinic history since 2014, founder drg. Arini, and 4 pillars
│   │   │   ├── Footer.tsx             # Clean footer without top banner, updated hours (08.00 - 17.00)
│   │   │   ├── Marquee.tsx            # Animated continuous marquee banners
│   │   │   └── LanguageContext.tsx    # Translation provider & useLanguage hook
│   │   ├── lib/
│   │   │   ├── translations.ts        # Full bilingual dictionary (ID / EN)
│   │   │   └── analytics.ts           # GA4 / GTM event tracking utilities
│   │   ├── public/                    # High-res compressed WebP/JPG assets & logo
│   │   ├── next.config.js             # Transpiles @lotus/ui, remote image patterns (YouTube)
│   │   └── tailwind.config.js         # Official clinic palette design tokens
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

## 3. REVISION ROADMAP & IMPLEMENTED CLIENT FEEDBACK

All changes requested in the 3 client PDFs (`general (untuk warna...).pdf`, `revisi-homepage.pdf`, `revisi-detail-page.pdf`) have been implemented and validated:

| Area | Component | Implementation Details |
|---|---|---|
| **Branding & Palette** | `tailwind.config.js`, `globals.css`, `layout.tsx` | Applied official brochure/banner palette (`#D65A8C`, `#A7B89F`, service colors, soft tints). Updated metadata title & OpenGraph to `Lotus Akupunktur, Hidroterapi, Fisioterapi Semarang`. |
| **Navbar** | `Navbar.tsx` | Enlarged logo (`w-[165px] md:w-[195px]`), reordered navigation items to `Tentang Kami` → `Layanan` → `Kontak` → `ID/EN Switcher` → `Reservasi`. |
| **Hero** | `Hero.tsx` | Action buttons changed to `[Reservasi Sekarang]` (primary) and `[Tentang Kami]` (secondary). |
| **Services Grid** | `ServicesGrid.tsx` | Updated copy to "pendekatan yang personal dan profesional", removed 01/02/03 numbering, added 2 badges to Hidroterapi (`Kolam privat`, `1 pasien : 1 fisioterapis`), simplified Swim Course (headline "renang privat untuk anak, dewasa, hingga lansia", 3 badges: `Kolam privat`, `Anak, dewasa, lansia`, `Instruktur berpengalaman`). |
| **Experience** | `page.tsx` (Section 4) | Removed emojis from 4 pillars, removed redundant dual photo cards for clean minimalism. |
| **Team Directory** | `TeamShowcase.tsx` | Streamlined cards to display strictly: Photo, Nama, Gelar, Jabatan (removed license bottom pills). Updated roles: Terapis Akupunktur (`Ayun`, `Sofin`, `Mei`, `Zul`, `Aziz`), Fisioterapis (`Nikmah`), Instruktur (`Dicky, S.Pd.`, `Esti`). |
| **Team Directory** | `TeamShowcase.tsx`, `translations.ts` | Streamlined cards to display strictly: Photo, Nama, Gelar, Jabatan. Updated roles: Terapis Akupunktur (`Ayun`, `Sofin`, `Mei`, `Zul`, `Aziz`), Fisioterapis (`Nikmah`), Instruktur (`Dicky, S.Pd.`, `Esti`). Integrated uploaded profile photos for `Mei` (`meiryana(akupunktur).jpg`) and `Dicky` (`dicky(instruktur).jpg`). |
| **Gallery** | `GallerySection.tsx` | Amana-style photo gallery with 4-card preview, `[Lihat Foto Lainnya]` expandable modal with category filter tabs (`Semua`, `Fasilitas`, `Akupunktur`, `Hidroterapi`, `Fisioterapi`, `Swim Course`), and full-screen lightbox. Integrated official photos: `kolam.jpg`, `1669871798393.jpg` (Akupunktur), and `swim_anak.jpg` (Swim Course). |
| **Reels** | `ReelsShowcase.tsx` | 4 reels (`Penjelasan Lotus`, `Alur Kedatangan`, `Cinematic Hydrotherapy`, `Proses Renang Anak`) with video modal player + `[Lihat Reels Lainnya di Instagram]` CTA. |
| **Patient Reviews** | `ReviewsSection.tsx` | "Kata Mereka" (Amana-style): 5 authentic patient story cards (`Ibu Lanny`, `Nin Hisyam dan Hisyam`, `Ibu Anny Chris`, `Ibu Reynelda`, `Indira`), replacing old Google Reviews rating block. |
| **Footer & CTA Band** | `Footer.tsx` | Completely removed the top pink CTA banner across the entire site. Updated footer subtitle to `Akupunktur · Hidroterapi · Fisioterapi`, updated hours to `08.00 – 17.00`. |
| **Reservasi Wizard** | `ReservasiClient.tsx` | Title: `Reservasi Jadwal Terapi Anda`. Subtitle refers to `admin`. 4 services: `Akupunktur`, `Hidroterapi`, `Fisioterapi`, `Swim Course`. 9 time slots: `08.00` to `16.00`. Notes field simplified to `Catatan Tambahan`. Added notes summary to step 4 confirmation. Responsive wizard card padding (`p-6 sm:p-8 lg:p-12`) and full-width stacked buttons on mobile. |
| **Tentang Kami** | `TentangKamiClient.tsx` | Removed group team photo (`team-lotus.jpg`), updated banner image to official `1669435688176.jpg`, updated copy to reflect 4 pillars (`Privat`, `Personal`, `Nyaman`, `Bersih & Terawat`), founder drg. Arini Jannata history since 2014. Standardized badge styles to `.tag-pill` and grid responsiveness (`sm:grid-cols-2 lg:grid-cols-4`). |
| **Layanan Akupunktur** | `AkupunkturClient.tsx` | Removed "Medis privat", updated 3-step mechanism (`Diagnosis`, `Menstimulasi Sistem Saraf`, `Pendekatan yang Disesuaikan`), updated 4 application cases (`Anak-anak`, `Dewasa & Lansia` mapped to `1670160632616.jpg`, `Reproduksi & Hormonal`, `Slimming & Estetika`), removed Procedure steps and FAQ. Pruned marquee banner for a clean aesthetic. |
| **Layanan Hidroterapi** | `HidroterapiClient.tsx` | Removed "Suaka air privat", updated 3-step mechanism (`Daya Apung Air`, `Tekanan Air`, `Kolam Privat Didampingi Fisioterapis`), updated 4 application cases (`Nyeri & Gangguan Muskuloskeletal`, `Rehabilitasi & Pemulihan Gerak`, `Tumbuh Kembang Anak` mapped to `1669852014391.jpg`, `Kehamilan`), removed Procedure steps and FAQ. Pruned marquee banner for a clean aesthetic. |
| **Layanan Fisioterapi** | `FisioterapiClient.tsx` | Removed "Pulih secara nyaman", updated 3-step mechanism (`Asesmen kondisi fisik`, `Terapi dan latihan gerak`, `Pendekatan yang disesuaikan`), updated 4 application cases (`Nyeri & Gangguan Muskuloskeletal`, `Rehabilitasi Cedera & Pascaoperasi`, `Ibu Hamil & Tumbuh Kembang Anak`, `Koreksi Postur & Kebugaran Gerak`), updated secondary hero photo to `1669852561694.jpg`, removed Procedure steps and FAQ. Pruned marquee banner for a clean aesthetic. |
| **Layanan Swim Course** | `SwimCourseClient.tsx` | Changed eyebrow to `Program Aktivitas`, title `Swim Course - Renang untuk Memulai, Berkembang, dan Tetap Aktif`, added `Sehat Bukan Sekadar Pulih` callout, 3-step learning methodology, 4 purpose cards (`Mulai belajar`, `Meningkatkan kemampuan`, `Tetap aktif`, `Anak, dewasa, hingga lansia`) without photos, updated secondary hero photo to `swim_anak.jpg`, removed Procedure steps and FAQ. Pruned marquee banner. |
| **Styling & Responsive Standard** | `globals.css`, multiple components | Standardized design tokens across all components: `.tag-pill`, `.container-wellness`, `.section-pad`, `.btn-pill-*`. Replaced non-existent utility classes (`badge-pill`, `heading-lg`) with Tailwind font tokens. Validated mobile, tablet, and desktop layouts. Adjusted gallery lightbox overlay to `z-[60]` for proper modal layering. |

### 3.1 Pending Client Photos Status
The remaining photos will be updated as soon as provided by the client:
1. **Homepage – Tim Esti** (photo update for instructor Esti; currently using monogram avatar "ES").
2. **Homepage – Galeri Hidro Nikmah** (photo update for hydrotherapy gallery).
3. **Detail Page – Hidroterapi Kehamilan** (photo update for pregnancy hydrotherapy case; marked in PDF as *"foto nyusul (nikmah dan eka)"*).
4. **Homepage – Hero Image** (brighter edit `1669851074538(edited).jpg` if client delivers raw file; currently using high-res `lotus_consultation_doctor_patient_model_hijab.jpg`).

Clean existing fallback assets are currently in place with optimal aspect ratios and responsive sizing, ready for drop-in replacement once received.

---

## 4. QUALITY ASSURANCE & VERIFICATION

- **Build Status**: 100% clean production build (`pnpm --filter @lotus/web build`). All 12 routes prerendered statically:
  - `/` (Homepage)
  - `/tentang-kami`
  - `/reservasi`
  - `/layanan/akupunktur`
  - `/layanan/hidroterapi`
  - `/layanan/fisioterapi`
  - `/layanan/swim-course`
  - `/_not-found`
  - `/robots.txt`
  - `/sitemap.xml`
- **Responsive Layout Verification**: Fully responsive across Mobile (<=640px), Tablet (768px - 1024px), and Desktop (>=1280px).
- **Asset Integrity**: 0 broken images or 404 asset requests.
- **Type Safety**: TypeScript 5 strict mode passed with 0 errors.
- **Linting**: ESLint passed with 0 warnings.
- **Security & Dependency Audit**: 0 vulnerabilities (`pnpm audit` clean). Remediated 82 Dependabot alerts across critical, high, moderate, and low severities by upgrading Next.js to `15.5.25`, PostCSS, and configuring workspace overrides for sub-dependencies (`glob`, `minimatch`, `nanoid`, `browserslist`, `baseline-browser-mapping`).
- **Git Commit History**: Clean split commits in English documenting each progressive phase.
