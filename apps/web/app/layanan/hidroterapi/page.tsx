import type { Metadata } from "next";
import { HidroterapiClient } from "@/components/HidroterapiClient";

export const metadata: Metadata = {
  title: "Kolam Hidroterapi Air Hangat Privat Semarang | Lotus Health",
  description:
    "Cari kolam hidroterapi hangat privat di Semarang? Lotus Health menyediakan hidroterapi air hangat suhu 32-34°C untuk pemulihan stroke, saraf, sendi lutut, bumil, & relaksasi.",
  keywords: [
    "hidroterapi semarang",
    "kolam hidroterapi semarang",
    "terapi air hangat semarang",
    "fisioterapi air semarang",
    "rehab stroke semarang",
    "kolam renang hangat semarang",
    "terapi air semarang",
    "hydrotherapy semarang",
  ],
  alternates: {
    canonical: "/layanan/hidroterapi",
    languages: {
      "id-ID": "/layanan/hidroterapi",
      "en-US": "/layanan/hidroterapi",
      "x-default": "/layanan/hidroterapi",
    },
  },
  openGraph: {
    title: "Kolam Hidroterapi Air Hangat Privat di Semarang | Lotus Health",
    description: "Satu-satunya kolam hidroterapi air hangat privat 32-34°C di Semarang dengan sterilisasi klorin rendah dan privasi 100% terjaga.",
    url: "https://lotussemarang.com/layanan/hidroterapi",
    images: [{ url: "/images/hero-1.webp", width: 1200, height: 630, alt: "Hidroterapi Air Hangat Semarang Lotus Health" }],
  },
};

export default function HidroterapiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Beranda",
            "item": "https://lotussemarang.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Layanan",
            "item": "https://lotussemarang.com/#layanan"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Hidroterapi Air Hangat Semarang",
            "item": "https://lotussemarang.com/layanan/hidroterapi"
          }
        ]
      },
      {
        "@type": "MedicalProcedure",
        "name": "Kolam Hidroterapi Air Hangat Privat Semarang",
        "description": "Terapi aquatic air hangat suhu 32-34°C di kolam indoor privat Semarang untuk rehabilitasi saraf, kelumpuhan pasca stroke, osteoarthritis, nyeri pinggang (LBP), dan relaksasi ibu hamil.",
        "procedureType": "NonSurgicalProcedure",
        "bodyLocation": "Full Body",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Physiotherapy"
        },
        "provider": {
          "@type": "MedicalClinic",
          "name": "Lotus Health, Beauty & Care",
          "telephone": "+6287700303645",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jl. Pamularsih No. 90/100, Gisikdrono, Semarang Barat",
            "addressLocality": "Semarang",
            "addressRegion": "Jawa Tengah",
            "postalCode": "50149",
            "addressCountry": "ID"
          }
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HidroterapiClient />
    </>
  );
}
