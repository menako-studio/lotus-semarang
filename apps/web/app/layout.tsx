import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import {
  ADDRESS,
  BRAND_NAME,
  CLINIC_ID,
  DEFAULT_OG_IMAGE,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  MAPS_URL,
  PHONE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
// When GTM is present, GA4 must be configured as a tag inside GTM; loading
// gtag.js as well would double-count every page view and conversion.
const GA_ID = GTM_ID ? undefined : process.env.NEXT_PUBLIC_GA_ID;
const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

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
    default: SITE_NAME,
    template: `%s | ${BRAND_NAME}`,
  },
  description:
    "Klinik akupunktur, kolam hidroterapi privat semi-outdoor, fisioterapi, dan les renang privat di Semarang Barat. Ditangani tenaga profesional bersertifikat.",
  keywords: [
    "akupunktur semarang",
    "akupuntur semarang",
    "klinik akupunktur semarang",
    "hidroterapi semarang",
    "kolam hidroterapi semarang",
    "terapi media air semarang",
    "fisioterapi semarang",
    "swim course semarang",
    "les renang semarang",
    "kolam renang privat semarang",
    "wellness semarang",
    "lotus semarang",
    "drg arini jannata",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: BRAND_NAME,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description:
      "Layanan akupunktur, hidroterapi privat semi-outdoor, fisioterapi, dan swim course di Semarang. Pendekatan personal, profesional, dan nyaman.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: "Klinik akupunktur & kolam hidroterapi privat semi-outdoor profesional di Semarang.",
    images: [DEFAULT_OG_IMAGE],
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
  ...(GSC_VERIFICATION && { verification: { google: GSC_VERIFICATION } }),
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

/* ─── Root Layout ────────────────────────────────────────────────────────── */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const clinic = {
    "@type": "MedicalClinic",
    "@id": CLINIC_ID,
    "name": SITE_NAME,
    "alternateName": [
      "Lotus Semarang",
      "Klinik Akupunktur, Hidroterapi, Fisioterapi Lotus Semarang",
      "Lotus Acupuncture, Hydrotherapy & Physiotherapy Semarang"
    ],
    "image": [
      `${SITE_URL}${DEFAULT_OG_IMAGE}`,
      `${SITE_URL}/images/hero-1.webp`,
      `${SITE_URL}/logo.png`
    ],
    "logo": `${SITE_URL}/logo.png`,
    "url": SITE_URL,
    "telephone": PHONE,
    "hasMap": MAPS_URL,
    "priceRange": "$$",
    "currenciesAccepted": "IDR",
    "paymentAccepted": "Cash, QRIS, Bank Transfer, Debit Card",
    "medicalSpecialty": "Physiotherapy",
    "address": ADDRESS,
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
            "@type": "Service",
            "name": "Terapi Akupunktur Medis & Wajah Semarang",
            "description": "Terapi tusuk jarum steril untuk saraf kejepit, stroke, insomnia, promil, slimming, dan peremajaan wajah.",
            "url": `${SITE_URL}/layanan/akupunktur`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hidroterapi Privat Semi-Outdoor Semarang",
            "description": "Fisioterapi media air di kolam privat semi-outdoor untuk pemulihan sendi, saraf, pasca stroke, dan relaksasi.",
            "url": `${SITE_URL}/layanan/hidroterapi`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fisioterapi & Rehabilitasi Medik",
            "description": "Penanganan gangguan gerak, saraf kejepit, nyeri otot dengan modalitas modern TENS, Ultrasound, dan IR.",
            "url": `${SITE_URL}/layanan/fisioterapi`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Kursus Les Renang Privat",
            "description": "Pelatihan renang privat intensif untuk balita, anak-anak, wanita, dan dewasa dengan instruktur berpengalaman di kolam semi-outdoor privat.",
            "url": `${SITE_URL}/layanan/swim-course`
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
        "telephone": PHONE,
        "contactType": "customer service",
        "areaServed": "ID",
        "availableLanguage": ["Indonesian", "English"]
      }
    ],
    "sameAs": [
      INSTAGRAM_URL,
      FACEBOOK_URL,
      MAPS_URL
    ]
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      clinic,
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": SITE_NAME,
        "alternateName": BRAND_NAME,
        "inLanguage": "id-ID",
        "publisher": { "@id": CLINIC_ID }
      }
    ]
  };

  return (
    <html
      lang="id"
      className={`${fraunces.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
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
