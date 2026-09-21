# 🌸 Lotus Semarang — Accessible Modern Wellness Web App

> *Klinik terapi kesehatan privat terpadu di Semarang: Akupunktur, Hidroterapi, Fisioterapi, dan Program Aktivitas Swim Course.*
>
> Desain dan layout terintegrasi yang diadaptasi dari benchmark estetika visual **wthn.com** & **Amana Care** (Accessible Modern Wellness: hangat, aman, privat, profesional, dan nyaman).

---

## 🏗 Monorepo Architecture

Proyek ini dibangun menggunakan arsitektur **Turborepo** + **pnpm workspaces**:

```
lotus-semarang/
├── apps/
│   ├── web/                           # Website Pasien (Next.js 14 App Router, Port 3000)
│   │   ├── app/
│   │   │   ├── layout.tsx             # Root layout: Fraunces & DM Sans, Favicon, JSON-LD Schema.org, Meta
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
│   │   │   ├── Hero.tsx               # Hero Section: "Sehat Itu Menyenangkan." + CTAs
│   │   │   ├── ServicesGrid.tsx       # 3 Layanan Terapi Utama + Program Aktivitas Swim Course
│   │   │   ├── TeamShowcase.tsx       # "Kenali Tim yang Merawatmu" (9 Tenaga Medis & Instruktur)
│   │   │   ├── GallerySection.tsx     # Galeri Amana-style dengan Tab Filter & Modal Lightbox
│   │   │   ├── ReelsShowcase.tsx      # 4 Video Reels YouTube Modal Player + Link Instagram
│   │   │   ├── ReviewsSection.tsx     # "Kata Mereka" (5 Cerita Pengalaman Pasien Otentik)
│   │   │   ├── ContactSection.tsx     # Section Kontak WhatsApp (Amana Care pattern) & Google Maps Embed
│   │   │   ├── SearchableFaq.tsx      # FAQ Accordion 7 Pertanyaan Klinis Utama
│   │   │   ├── ReservasiClient.tsx    # 4-Step Interactive Booking Wizard ke WhatsApp Admin
│   │   │   ├── LanguageContext.tsx    # Context Provider Bilingual (ID / EN)
│   │   │   └── *Client.tsx            # Client views untuk halaman detail layanan
│   │   ├── lib/
│   │   │   ├── translations.ts        # Kamus terjemahan Bahasa Indonesia & English
│   │   │   └── analytics.ts           # Utilitas Tracking GA4 & GTM Event DataLayer
│   │   ├── public/                    # Asset foto terkompresi WebP & logo
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

## 🎨 Palet Warna Resmi Klinik (Sesuai Panduan Brosur & Banner)

* **Brand Colors:**
  * `lotus-pink` (`#D65A8C`): Warna aksen utama bunga teratai.
  * `lotus-green` (`#A7B89F`): Hijau sage botani yang menenangkan.
* **Warna Layanan:**
  * `akupunktur` (`#F4C0DF`): Nuansa pink lembut untuk akupunktur.
  * `fisioterapi` (`#CDE0D0`): Hijau pastel lembut untuk pemulihan gerak.
  * `hidroterapi` (`#416DC2`): Biru laut untuk terapi air privat.
  * `swim` (`#2F9FC9`): Cyan segar untuk aktivitas renang.
* **Tints & Backgrounds:**
  * `#FBE9F2` (Pink Tint), `#EAF2FF` (Blue Tint), `#EEF5EC` (Green Tint), `#E4F5FA` (Cyan Tint), `#FFFFFF` (Pure White).
* **Tipografi:**
  * **Headings:** `Fraunces` (Serif hangat, elegan, dan berwibawa).
  * **Body & UI:** `DM Sans` (Sans-serif modern, bersih, dan mudah dibaca).

---

## ✨ Fitur Utama & Hasil Revisi Klien

1. **Homepage:**
   * **Navbar**: Logo diperbesar, urutan navigasi disesuaikan (`Tentang Kami` → `Layanan` → `Kontak` → `ID/EN` → `Reservasi`).
   * **Hero**: Aksi utama `[Reservasi Sekarang]` dan aksi sekunder `[Tentang Kami]`.
   * **Layanan**: Copy disesuaikan ("pendekatan yang personal dan profesional"), nomor 01/02/03 dihapus, ditambahkan badge hidroterapi (`Kolam privat`, `1 pasien : 1 fisioterapis`), serta program Swim Course disederhanakan dengan 3 badge.
   * **Tim Medis**: Tampilan kartu ringkas (Foto, Nama, Gelar, Jabatan) dengan peran terapis akupunktur, fisioterapis, dan instruktur renang yang diperbarui.
   * **Galeri Foto**: Galeri interaktif ala Amana Care dengan preview 4 kartu, tombol `[Lihat Foto Lainnya]`, filter kategori (`Semua`, `Fasilitas`, `Akupunktur`, `Hidroterapi`, `Fisioterapi`, `Swim Course`), dan lightbox.
   * **Video Reels**: 4 reels video YouTube Shorts informatif (`Penjelasan Lotus`, `Alur Kedatangan`, `Cinematic Hydrotherapy`, `Proses Renang Anak`) + tombol direct ke Instagram `@lotus_semarang`.
   * **Kata Mereka**: 5 cerita pengalaman otentik pasien (`Ibu Lanny`, `Nin Hisyam dan Hisyam`, `Ibu Anny Chris`, `Ibu Reynelda`, `Indira`) menggantikan badge rating Google.
   * **Footer**: Banner CTA pita merah muda dihapus sepenuhnya; jam operasional diperbarui menjadi `08.00 – 17.00 WIB`.
   * **Konsistensi & Responsivitas**: Standardisasi badge (`.tag-pill`), tombol (`.btn-pill-*`), padding container terpadu, dan tata letak responsif penuh pada resolusi mobile, tablet, dan desktop.

2. **Wizard Reservasi (`/reservasi`):**
   * Judul: `Reservasi Jadwal Terapi Anda`.
   * Terhubung langsung ke WhatsApp `admin`.
   * 4 opsi layanan: `Akupunktur`, `Hidroterapi`, `Fisioterapi`, `Swim Course`.
   * 9 slot waktu: `08.00` hingga `16.00`.
   * Form catatan disederhanakan menjadi `Catatan Tambahan`, dirangkum pada ringkasan konfirmasi langkah 4.
   * Padding kartu responsif (`p-6 sm:p-8 lg:p-12`) dan tombol aksi responsif penuh di mobile.

3. **Halaman Detail Layanan (`/layanan/*` & `/tentang-kami`):**
   * **Tentang Kami**: Banner foto utama diperbarui menggunakan aset resmi `1669435688176.jpg`. Copy diperbarui mencakup 4 pilar (`Privat`, `Personal`, `Nyaman`, `Bersih & Terawat`) dan sejarah pendiri drg. Arini Jannata sejak 2014. Grid 4 pilar responsif (`sm:grid-cols-2 lg:grid-cols-4`).
   * **Akupunktur**: Menampilkan mekanisme kerja 3 langkah (`Diagnosis`, `Menstimulasi Sistem Saraf`, `Pendekatan yang Disesuaikan`) dan 4 bidang kasus (`Anak-anak`, `Dewasa & Lansia` dengan foto resmi `1670160632616.jpg`, `Reproduksi & Hormonal`, `Slimming & Estetika`). Prosedur, FAQ, dan marquee berulang dihapus demi estetika yang bersih.
   * **Hidroterapi**: Menampilkan mekanisme daya apung, tekanan air, dan kolam privat 1:1 bersama fisioterapis, serta 4 bidang penanganan (`Muskuloskeletal`, `Rehabilitasi Gerak`, `Tumbuh Kembang Anak` dengan foto resmi `1669852014391.jpg`, `Kehamilan`).
   * **Fisioterapi**: Menampilkan asesmen fisik, latihan gerak, dan pendekatan individual, serta 4 bidang penanganan (`Muskuloskeletal`, `Rehabilitasi Pascaoperasi`, `Ibu Hamil & Tumbuh Kembang Anak`, `Koreksi Postur`). Foto hero sekunder diperbarui ke `1669852561694.jpg`.
   * **Swim Course**: Eyebrow `Program Aktivitas`, judul `Swim Course - Renang untuk Memulai, Berkembang, dan Tetap Aktif`, callout `Sehat Bukan Sekadar Pulih`, dan 4 tujuan latihan tanpa foto. Foto hero sekunder diperbarui dengan `swim_anak.jpg`.
   * **Tim & Galeri**: Foto profil `Mei` (`meiryana(akupunktur).jpg`) dan `Dicky` (`dicky(instruktur).jpg`) telah aktif. Galeri foto dilengkapi dengan `kolam.jpg`, `1669871798393.jpg`, dan `swim_anak.jpg`.

4. **Status Foto Menunggu Klien:**
   * Homepage: Foto Tim Esti (instruktur)
   * Homepage: Foto Galeri Hidro Nikmah
   * Detail Page: Foto Hidroterapi Kehamilan
   *(Aset fallback yang proporsional telah terpasang dengan baik dan siap diganti saat file diterima).*

---

## 🚀 Menjalankan Proyek Secara Lokal

```bash
# Install dependencies
pnpm install

# Jalankan server development
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat aplikasi web.

---

## 🧪 Validasi & Pengujian

```bash
# Build production (100% lulus tanpa error)
pnpm --filter @lotus/web build

# Linting kode
pnpm --filter @lotus/web lint
```
