import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/* ─── Font Loading ───────────────────────────────────────────────────────────
 * Fraunces — chunky, friendly display serif for all headings
 * DM Sans  — clean, modern sans-serif for body text and UI
 * ──────────────────────────────────────────────────────────────────────────── */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  preload: true,
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
    default: "Lotus Health, Beauty & Care — Akupunktur & Hidroterapi Privat Semarang",
    template: "%s | Lotus Semarang",
  },
  description:
    "Pusat akupunktur medis profesional, kolam hidroterapi air hangat privat 32-34°C, fisioterapi, dan kursus renang eksklusif di Semarang. Privasi terjamin, nyaman, ditangani tenaga ahli.",
  keywords: [
    "akupunktur semarang",
    "akupuntur semarang",
    "klinik akupunktur semarang",
    "hidroterapi semarang",
    "kolam hidroterapi semarang",
    "terapi air hangat semarang",
    "fisioterapi semarang",
    "swim course semarang",
    "les renang semarang",
    "kolam renang privat semarang",
    "wellness semarang",
    "lotus semarang",
    "lotus health semarang",
    "drg arini jannata",
  ],
  authors: [{ name: "Lotus Health, Beauty & Care" }],
  creator: "Lotus Health, Beauty & Care",
  publisher: "Lotus Semarang",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://lotussemarang.com"),
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
      "en-US": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://lotussemarang.com",
    siteName: "Lotus Health, Beauty & Care Semarang",
    title: "Lotus Health, Beauty & Care — Akupunktur & Hidroterapi Privat Semarang",
    description:
      "Layanan akupunktur medis, hidroterapi air hangat privat 32-34°C, fisioterapi, dan les renang eksklusif di Semarang. Temukan keseimbangan jiwa dan raga.",
    images: [
      {
        url: "/images/hero-1.webp",
        width: 1200,
        height: 630,
        alt: "Lotus Health, Beauty & Care Semarang - Akupunktur dan Hidroterapi Privat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lotus Health, Beauty & Care — Akupunktur & Hidroterapi Semarang",
    description: "Klinik akupunktur medis & kolam hidroterapi air hangat privat terbaik di Semarang.",
    images: ["/images/hero-1.webp"],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: ["/icon.png"],
    apple: [{ url: "/icon.png", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
    "@type": ["MedicalClinic", "HealthAndBeautyBusiness", "LocalBusiness"],
    "@id": "https://lotussemarang.com/#clinic",
    "name": "Lotus Health, Beauty & Care",
    "alternateName": [
      "Lotus Semarang",
      "Klinik Akupunktur & Hidroterapi Lotus Semarang",
      "Lotus Acupuncture & Hydrotherapy Clinic Semarang"
    ],
    "image": [
      "https://lotussemarang.com/images/hero-1.webp",
      "https://lotussemarang.com/logo.png",
      "https://lotussemarang.com/icon.png"
    ],
    "logo": "https://lotussemarang.com/logo.png",
    "url": "https://lotussemarang.com",
    "telephone": "+6287700303645",
    "priceRange": "$$",
    "currenciesAccepted": "IDR",
    "paymentAccepted": "Cash, QRIS, Bank Transfer, Debit Card",
    "medicalSpecialty": [
      "Acupuncture",
      "Physiotherapy"
    ],
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
      "latitude": -6.9934758,
      "longitude": 110.3957242
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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Layanan Kesehatan & Wellness Lotus Semarang",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Terapi Akupunktur Medis & Wajah Semarang",
            "description": "Terapi tusuk jarum steril untuk saraf kejepit, stroke, insomnia, promil, slimming, dan peremajaan wajah.",
            "url": "https://lotussemarang.com/layanan/akupunktur"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Hidroterapi Air Hangat Privat Semarang",
            "description": "Terapi air hangat suhu 32-34°C di kolam privat indoor untuk pemulihan sendi, pasca stroke, dan relaksasi.",
            "url": "https://lotussemarang.com/layanan/hidroterapi"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Fisioterapi & Rehabilitasi Medik",
            "description": "Penanganan gangguan gerak, saraf kejepit, nyeri otot dengan modalitas modern TENS, Ultrasound, dan IR.",
            "url": "https://lotussemarang.com/layanan/fisioterapi"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Kursus Les Renang Privat Kolam Hangat",
            "description": "Pelatihan renang privat intensif untuk balita, anak-anak, wanita, dan dewasa dengan instruktur bersertifikasi.",
            "url": "https://lotussemarang.com/layanan/swim-course"
          }
        }
      ]
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Semarang Barat"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Kota Semarang"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Jawa Tengah"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+6287700303645",
        "contactType": "customer service",
        "contactOption": "WhatsApp",
        "areaServed": "ID",
        "availableLanguage": ["Indonesian", "English"]
      }
    ],
    "sameAs": [
      "https://www.instagram.com/lotus_semarang",
      "https://maps.app.goo.gl/uX3L3Yq9HwHwHwHw"
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

        {/* ─── Google Tag (gtag.js) / GA4 ─── */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga4-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`,
              }}
            />
          </>
        )}

        {/* ─── Google Tag Manager (Head Script) ─── */}
        {GTM_ID && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        )}
      </head>
      <body className="antialiased overflow-x-hidden bg-cream">
        {/* ─── Google Tag Manager (Noscript Fallback) ─── */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
