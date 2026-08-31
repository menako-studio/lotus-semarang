# 🌸 Lotus Semarang — Accessible Modern Wellness Web App

> *Suaka kolam renang privat, akupunktur medis, fisioterapi, dan swim course eksklusif di Semarang, Indonesia.*
>
> Desain dan layout terintegrasi yang diadaptasi dari benchmark estetika visual **wthn.com** (Accessible Modern Wellness: hangat, aman, privat, dan modern artsy).

---

## 🏗 Monorepo Architecture

Proyek ini dibangun menggunakan arsitektur **Turborepo** + **pnpm workspaces**:

```
lotus-semarang/
├── apps/
│   ├── web/                           # Website Pasien (Next.js 14 App Router, Port 3000)
│   │   ├── app/
│   │   │   ├── layout.tsx             # Root layout: Fraunces & DM Sans, Favicon, JSON-LD Schema.org
│   │   │   ├── page.tsx               # Homepage: Hero, Marquee, Services, Gallery, Reels, Reviews, FAQ
│   │   │   ├── tentang-kami/page.tsx  # Halaman Profil Klinik (Server Component)
│   │   │   ├── reservasi/page.tsx     # Wizard Reservasi 4 Langkah (Server Component)
│   │   │   ├── layanan/               # Detail Halaman Layanan (Server Components)
│   │   │   │   ├── akupunktur/page.tsx
│   │   │   │   ├── hidroterapi/page.tsx
│   │   │   │   ├── fisioterapi/page.tsx
│   │   │   │   └── swim-course/page.tsx
│   │   │   ├── not-found.tsx          # Halaman 404 Kustom Bilingual
│   │   │   └── globals.css            # Desain Token + Custom Utility CSS
│   │   ├── components/                # Interactive UI & Client Components
│   │   │   ├── Navbar.tsx             # Sticky navbar + Language Switcher (ID/EN)
│   │   │   ├── Hero.tsx               # Split Hero Layout + Optimized Images
│   │   │   ├── ServicesGrid.tsx       # 2x2 color-blocked grid WTHN-style
│   │   │   ├── ReelsShowcase.tsx      # Video Reels YouTube Modal Player
│   │   │   ├── SearchableFaq.tsx      # FAQ Accordion dengan pencarian & filter kategori
│   │   │   ├── ReservasiClient.tsx    # 4-Step Interactive Booking Wizard ke WhatsApp
│   │   │   ├── LanguageContext.tsx    # Context Provider Bilingual (ID / EN)
│   │   │   └── *Client.tsx            # Client wrappers untuk transisi & interaksi
│   │   ├── lib/
│   │   │   └── translations.ts        # Kamus terjemahan Bahasa Indonesia & English
│   │   ├── public/
│   │   │   ├── icon.png               # Hi-res Favicon & App Icon
│   │   │   ├── logo.png               # Brand Identity Logo
│   │   │   └── images/                # Asset foto terkompresi WebP
│   │   ├── next.config.js             # Transpile packages & konfigurasi remote images
│   │   └── package.json
│   │
│   └── admin/                         # Portal Manajemen Internal (Next.js 14, Port 3001)
│       ├── app/
│       │   ├── layout.tsx
│       │   ├── page.tsx               # Dashboard ringkasan operasional klinik
│       │   └── globals.css
│       ├── next.config.js
│       └── package.json
│
├── packages/
│   ├── ui/                            # Shared Component Library (@lotus/ui)
│   │   ├── components/                # SectionWrapper, EyebrowLabel, GhostButton, DividerRule
│   │   └── lib/utils.ts               # cn helper (clsx + tailwind-merge)
│   └── config/                        # Shared Tailwind & TypeScript Configs (@lotus/config)
│
├── turbo.json                         # Turborepo task pipeline
├── pnpm-workspace.yaml
└── package.json
```

---

## 🎨 Desain & Estetika Visual (WTHN-Style)

### 1. Sistem Warna & Tema Wellness
* **Background:** `#FFFFFF` (Pure White) & `#FAF0E4` / `#FDF8F2` (Warm Cream).
* **Warna Aksen Pastel (Tailwind Config):**
  * `peach` / `peach-soft`: Nuansa hangat & rejuvenasi akupunktur.
  * `sage` / `sage-soft`: Ketenangan dan kesegaran hidroterapi.
  * `blush` / `blush-soft`: Kelembutan pemulihan fisioterapi.
  * `sand` / `sand-soft`: Sentuhan alami & ramah swim course.
  * `espresso` (`#2D1F14`): Warna teks tipografi & tombol kontras utama.
  * `terra` (`#D4845A`): Warna aksen terakota hangat.

### 2. Tipografi Premium (Google Fonts)
* **Display / Headings:** **Fraunces** (Serif chunky bergaya artsy, mewah, dan hangat).
* **Body & UI:** **DM Sans** (Sans-serif modern, bersih, dan sangat nyaman dibaca).

---

## ✨ Fitur Utama

1. **Multilingual i18n (Bahasa Indonesia & English):**
   * Penggantian bahasa instan (ID ⇄ EN) melalui `LanguageContext` dengan persistensi ke `localStorage`.
   * Kamus terpusat di `apps/web/lib/translations.ts` mencakup seluruh teks navigasi, layanan, testimoni, FAQ, dan reservasi.
2. **Interactive 4-Step Booking Wizard:**
   * Alur reservasi terarah: Pilih Layanan → Pilih Tanggal & Sesi Jam → Data Pasien & Keluhan → Konfirmasi Otomatis.
   * Langsung tersambung ke WhatsApp Hotline Resmi: **`+62 877-0030-3645`** dengan format pesan terstruktur.
3. **SEO & Structured Data (JSON-LD):**
   * Tag metadata terindeks lengkap per rute halaman dengan OpenGraph.
   * Skema `MedicalBusiness` Schema.org dengan koordinat Google Maps dan jam operasional.
4. **Reels & Video Showcase Modal:**
   * Showcase video pengalaman dan edukasi klinik dengan modal player responsif tanpa memperlambat First Contentful Paint.
5. **Favicon & Brand Assets:**
   * Menggunakan icon resmi Lotus Semarang `icon.png` yang disematkan secara native di root App Router dan OpenGraph metadata.

---

## 🚀 Cara Menjalankan Aplikasi

```bash
# 1. Pasang seluruh dependensi workspace
pnpm install

# 2. Jalankan development server
# - Patient Web: http://localhost:3000
# - Admin Portal: http://localhost:3001
pnpm dev

# 3. Validasi tipe TypeScript
pnpm type-check

# 4. Jalankan linter ESLint
pnpm lint

# 5. Build seluruh workspace untuk produksi
pnpm build
```

---

*Dibuat dengan ❤ oleh Menako Studio untuk Lotus Semarang.*
