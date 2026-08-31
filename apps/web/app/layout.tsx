import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";

/* ─── Font Loading ───────────────────────────────────────────────────────────
 * Fraunces — chunky, friendly display serif for all headings
 * DM Sans  — clean, modern sans-serif for body text and UI
 *
 * Both are VARIABLE fonts so we can use the `axes` option safely.
 * ──────────────────────────────────────────────────────────────────────────── */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  preload: true,
  // Variable font axes: opsz (optical size), wght (weight), SOFT, WONK
  axes: ["opsz", "SOFT", "WONK"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
});

/* ─── SEO Metadata ───────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: "Lotus Health, Beauty & Care — Wellness Privat di Semarang",
    template: "%s | Lotus Semarang",
  },
  description:
    "Lotus Health, Beauty & Care menghadirkan layanan akupunktur, hidroterapi, fisioterapi, dan swim course eksklusif di Semarang. Privasi terjamin, nyaman, dan menyenangkan.",
  keywords: [
    "akupunktur semarang",
    "hidroterapi semarang",
    "fisioterapi semarang",
    "swim course semarang",
    "kolam renang privat semarang",
    "wellness semarang",
    "lotus health semarang",
    "spa semarang",
    "self care semarang",
  ],
  authors: [{ name: "Lotus Health, Beauty & Care" }],
  creator: "Menako Studio",
  metadataBase: new URL("https://lotussemarang.com"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://lotussemarang.com",
    siteName: "Lotus Health, Beauty & Care",
    title: "Lotus Health, Beauty & Care — Wellness Privat di Semarang",
    description:
      "Temukan keseimbangan jiwa dan raga bersama kami. Akupunktur, Hidroterapi, Fisioterapi & Swim Course di lingkungan yang privat dan nyaman.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Lotus Health Semarang" }],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: ["/icon.png"],
    apple: [
      { url: "/icon.png", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#FDF8F2",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

/* ─── Root Layout ────────────────────────────────────────────────────────── */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Lotus Health, Beauty & Care",
    "image": "https://lotussemarang.com/og-image.jpg",
    "@id": "https://lotussemarang.com/#business",
    "url": "https://lotussemarang.com",
    "telephone": "+6287700303645",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Pamularsih No. 90/100, Gisikdrono, Semarang Barat",
      "addressLocality": "Semarang",
      "addressRegion": "Jawa Tengah",
      "postalCode": "50149",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-6.9934758",
      "longitude": "110.3957242"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://instagram.com/lotus_semarang"
    ]
  };

  return (
    <html
      lang="id"
      className={`${fraunces.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased overflow-x-hidden bg-cream">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
