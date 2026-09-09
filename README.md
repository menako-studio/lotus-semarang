# 🌸 Lotus Semarang — Accessible Modern Wellness Web App

> *Klinik terapi kesehatan privat terpadu di Semarang: Akupunktur Medis, Fisioterapi, Hidroterapi, dan Program Lanjutan Swim Course.*
>
> Desain dan layout terintegrasi yang diadaptasi dari benchmark estetika visual **wthn.com** (Accessible Modern Wellness: hangat, aman, privat, profesional, dan nyaman).

---

## 🏗 Monorepo Architecture

Proyek ini dibangun menggunakan arsitektur **Turborepo** + **pnpm workspaces**:

```
lotus-semarang/
├── apps/
│   ├── web/                           # Website Pasien (Next.js 14 App Router, Port 3000)
│   │   ├── app/
│   │   │   ├── layout.tsx             # Root layout: Fraunces & DM Sans, Favicon, JSON-LD Schema.org
│   │   │   ├── page.tsx               # Homepage: Hero, Marquee, Services, Experience, Team, Gallery, Reels, Reviews, FAQ, Contact
│   │   │   ├── tentang-kami/page.tsx  # Halaman Profil Klinik & Filosofi Perawatan (Server Component)
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
│   │   │   ├── Hero.tsx               # Hero Section: "Sehat Itu Menyenangkan."
│   │   │   ├── ServicesGrid.tsx       # 3 Layanan Medis Utama + Program Lanjutan Swim Course
│   │   │   ├── TeamShowcase.tsx       # "Kenali Tim yang Merawatmu" (9 Tenaga Medis Berizin Resmi)
│   │   │   ├── ContactSection.tsx     # Section Kontak WhatsApp (Amana Care pattern) & Google Maps Embed
│   │   │   ├── SearchableFaq.tsx      # FAQ Accordion 7 Pertanyaan Klinis Utama
│   │   │   ├── ReelsShowcase.tsx      # Video Reels YouTube Modal Player
│   │   │   ├── ReservasiClient.tsx    # 4-Step Interactive Booking Wizard ke WhatsApp
│   │   │   ├── LanguageContext.tsx    # Context Provider Bilingual (ID / EN)
│   │   │   └── *Client.tsx            # Client wrappers untuk transisi & interaksi
│   │   ├── lib/
│   │   │   ├── translations.ts        # Kamus terjemahan Bahasa Indonesia & English
│   │   │   └── analytics.ts           # Utilitas Tracking GA4 & GTM Event DataLayer
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
* **Background:** `#FFFFFF` (Pure White), `#FAF7F2` (Soft Canvas), `#FAF0E4` (Warm Cream).
* **Warna Aksen Desain Token:**
  * `forest` (`#1E3A28`): Identitas warna botani utama, elegan, dan profesional.
  * `peach` / `peach-soft`: Nuansa hangat & rejuvenasi akupunktur.
  * `sage` / `sage-soft`: Ketenangan dan pemulihan hidroterapi.
  * `blush` / `blush-soft`: Kelembutan pemulihan fisioterapi.
  * `sand` / `sand-soft`: Sentuhan alami swim course.
  * `espresso` (`#2D1F14`): Warna teks tipografi & tombol kontras.
  * `terra` (`#D4845A`): Warna aksen terakota hangat.

### 2. Tipografi Premium
* **Display / Headings:** **Fraunces** (Serif elegan, hangat, dan berwibawa).
* **Body & UI:** **DM Sans** (Sans-serif modern, bersih, dan nyaman dibaca).

---

## ✨ Fitur Utama & Struktur Halaman

1. **Struktur Homepage Berkelanjutan:**
   * **Hero Section**: Eyebrow `Akupunktur · Fisioterapi · Hidroterapi`, judul `Sehat Itu Menyenangkan.`, tombol `[Lihat Layanan]` dan `[Reservasi Sekarang]`.
   * **Layanan Terpadu**: 3 kartu terapi klinis setara (Akupunktur, Hidroterapi, Fisioterapi) dengan indikasi keluhan lengkap, ditambah Program Lanjutan (Swim Course) di bawahnya dengan siklus *Care → Recovery → Maintenance → Active*.
   * **Pengalaman Perawatan**: 4 pilar kenyamanan: *Privat*, *Personal*, *Nyaman untuk Menjadi Dirimu Sendiri*, serta *Bersih Terawat dan Profesional*.
   * **Kenali Tim yang Merawatmu**: Direktori 9 praktisi medis dan pelatih tersertifikasi dengan gelar kredensial resmi.
   * **Galeri Fasilitas & Video Reels**: Dokumentasi visual ruangan privat dan 5 video reels informatif dengan pemutar video modal.
   * **Cerita dari Mereka**: Rating Google 4.9 beserta 5 ulasan pasien nyata dari berbagai kebutuhan terapi.
   * **FAQ Klinis 7 Pertanyaan**: Jawaban transparan mengenai reservasi, akupunktur tanpa nyeri, hidroterapi, dan konsultasi awal.
   * **Section Kontak & Reservasi WhatsApp (Amana Care Pattern)**: Form interaktif WhatsApp (Nama, Jenis Kelamin, Usia, Pesan) di sebelah kiri, info kontak dan embed Google Maps di sebelah kanan.

2. **Multilingual i18n (Bahasa Indonesia & English):**
   * Penggantian bahasa instan (ID ⇄ EN) melalui `LanguageContext` dengan persistensi ke `localStorage`.
   * Kamus terpusat di `apps/web/lib/translations.ts`.

3. **SEO & Structured Data (JSON-LD):**
   * Skema `MedicalClinic` & `MedicalProcedure` Schema.org dengan koordinat Google Maps (`-6.9934758, 110.3957242`) dan jam operasional.
   * XML Sitemap dan `robots.txt` otomatis.

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
