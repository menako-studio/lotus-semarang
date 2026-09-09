import type { Metadata } from "next";
import { HidroterapiClient } from "@/components/HidroterapiClient";

export const metadata: Metadata = {
  title: "Kolam Hidroterapi Privat Semi-Outdoor Semarang | Lotus Health",
  description:
    "Cari kolam hidroterapi privat di Semarang? Lotus Health menyediakan fisioterapi media air semi-outdoor untuk pemulihan pinggang, lutut, saraf, pasca stroke, dan bumil.",
  keywords: [
    "hidroterapi semarang",
    "kolam hidroterapi semarang",
    "fisioterapi air semarang",
    "rehab stroke semarang",
    "terapi air semarang",
    "hydrotherapy semarang",
    "kolam renang privat semarang",
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
    title: "Kolam Hidroterapi Privat Semi-Outdoor di Semarang | Lotus Health",
    description: "Kolam hidroterapi privat semi-outdoor di Semarang dengan pendampingan 1 pasien 1 fisioterapis dan privasi terjaga.",
    url: "https://lotussemarang.com/layanan/hidroterapi",
    images: [{ url: "/images/hero-1.webp", width: 1200, height: 630, alt: "Hidroterapi Semi-Outdoor Semarang Lotus Health" }],
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
            "name": "Hidroterapi Privat Semarang",
            "item": "https://lotussemarang.com/layanan/hidroterapi"
          }
        ]
      },
      {
        "@type": "MedicalProcedure",
        "name": "Kolam Hidroterapi Privat Semi-Outdoor Semarang",
        "description": "Fisioterapi media air di kolam semi-outdoor privat Semarang untuk rehabilitasi saraf, kelumpuhan pasca stroke, keluhan persendian, nyeri pinggang, dan relaksasi kehamilan.",
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
