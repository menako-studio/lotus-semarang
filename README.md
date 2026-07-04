# 🌸 Lotus Semarang — Accessible Modern Wellness Web App

> *Suaka kolam renang privat, akupunktur medis, fisioterapi, dan swim course eksklusif di Semarang, Indonesia.*
>
> Desain dan layout terintegrasi yang diadaptasi dari benchmark estetika visual **wthn.com** (Accessible Modern Wellness: hangat, aman, privat, dan sedikit artsy).

---

## Monorepo Structure

```
lotus-semarang/
├── apps/
│   ├── web/                           # Website Pasien (Next.js 14, App Router)
│   │   ├── app/
│   │   │   ├── layout.tsx             # Root layout + Google Fonts + SEO
│   │   │   ├── page.tsx               # Halaman Utama (Server Component)
│   │   │   ├── tentang-kami/page.tsx  # Halaman Profil Klinik (Server Component)
│   │   │   ├── layanan/
│   │   │   │   ├── akupunktur/page.tsx # Detail Akupunktur (Server Component)
│   │   │   │   ├── hidroterapi/page.tsx# Detail Hidroterapi (Server Component)
│   │   │   │   ├── fisioterapi/page.tsx# Detail Fisioterapi (Server Component)
│   │   │   │   └── swim-course/page.tsx# Detail Swim Course (Server Component)
│   │   │   └── globals.css            # Desain Token + Custom CSS Utility
│   │   ├── components/
│   │   │   ├── Navbar.tsx             # Sticky navbar transparan → blur + Logo
│   │   │   ├── Hero.tsx               # Split Hero Layout + Real optimized image
│   │   │   ├── ServicesGrid.tsx       # 2x2 color-blocked grid WTHN-style
│   │   │   ├── Footer.tsx             # Informasi alamat, WA, & Instagram
│   │   │   ├── Marquee.tsx            # Running text penanda sirkulasi layanan
│   │   │   ├── ReelsShowcase.tsx      # Showcase video Reels Instagram/YT
│   │   │   └── *Client.tsx            # Client wrapper interaktif untuk SEO
│   │   ├── next.config.js             # Konfigurasi Next.js (Remote YouTube image)
│   │   └── package.json
│   │
│   └── admin/                         # Dashboard Admin (Next.js 14, stub)
│
├── packages/
│   ├── ui/                            # Shared Component Library
│   └── config/                        # Shared Tailwind & TypeScript Configs
│
├── turbo.json                         # Turborepo build pipeline
├── pnpm-workspace.yaml
└── README.md
```

---

## Desain & Estetika Visual (WTHN-Style)

### 1. Sistem Warna (Murni Putih & Pastel Hangat)
* **Background Utama:** `#FFFFFF` (Murni Putih, sangat bersih dan profesional).
* **Warna Aksen Pastel (Tailwind Config):**
  * `peach` / `peach-soft`: Representasi kehangatan akupunktur.
  * `sage` / `sage-soft`: Nuansa sejuk hidroterapi.
  * `blush` / `blush-soft`: Kelembutan fisioterapi.
  * `sand` / `sand-soft`: Sentuhan alami swim course.
  * `espresso`: Warna teks utama dan tombol kontras gelap.
  * `terra`: Warna aksen merah bata hangat.

### 2. Tipografi Premium (Google Fonts)
* **Display / Headings:** **Fraunces** (Serif chunky bergaya artsy, modern, dan kokoh).
* **Body / UI Elements:** **DM Sans** (Sans-serif bersih, netral, sangat mudah dibaca di mobile).

---

## Fitur Unggulan & Optimasi (Best Practices)

1. **Optimasi Pagespeed (Next.js Image):**
   * Semua aset foto real beresolusi tinggi telah di-resize ke ukuran maksimal lebar **1400px** dan dikompresi ke WebP/JPG kualitas optimal.
   * Menggunakan parameter Next.js Image `sizes`, `priority` (untuk LCP di atas lipatan layar), dan kompresi `quality` untuk meminimalkan waktu tunggu pemuatan gambar.
2. **Kepatuhan SEO Next.js App Router:**
   * Memisahkan logika halaman interaktif (Client Components, contoh: state FAQ accordion/motion) ke folder `components/` dengan nama suffix `*Client.tsx`.
   * Menjadikan file `page.tsx` rute sebagai **Server Component** murni untuk mengekspor objek `metadata` dinamis per halaman secara optimal guna meningkatkan peringkat pencarian di Google.
3. **Instagram Reels Showcase:**
   * Integrasi bagian video pendek Reels YouTube secara interaktif. Menggunakan *thumbnail image lazy load* dengan tombol putar melayang, serta memicu pemutaran video secara dinamis via *Floating Modal* demi menjaga nilai Pagespeed tetap sempurna.
4. **Pusat Kontak Baru:**
   * Menghubungkan seluruh formulir CTA di header, tombol halaman detail, dan tautan di footer ke kontak WhatsApp resmi: **`087700303645`** (Format: `6287700303645`).
   * Menghubungkan profil Instagram ke akun baru: **`@lotus_semarang`**.

---

## Cara Menjalankan Aplikasi

```bash
# 1. Pasang dependensi monorepo
pnpm install

# 2. Jalankan server development (apps/web di localhost:3000)
pnpm dev

# 3. Jalankan kompilasi produksi (Type-check & Build)
pnpm build
```

---

*Dibuat dengan ❤ oleh Menako Studio untuk Lotus Semarang.*
