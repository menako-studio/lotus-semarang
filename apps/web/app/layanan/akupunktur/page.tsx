import type { Metadata } from "next";
import { AkupunkturClient } from "@/components/AkupunkturClient";

export const metadata: Metadata = {
  title: "Terapi Akupunktur Medis & Estetika Semarang | Lotus Health",
  description:
    "Cari tempat terapi akupunktur medis profesional di Semarang? Lotus Health menyediakan terapi akupunktur steril untuk syaraf kejepit, stroke, promil, kecantikan & slimming.",
  keywords: [
    "akupunktur semarang",
    "akupuntur semarang",
    "klinik akupunktur semarang",
    "akupunktur promil semarang",
    "akupunktur saraf kejepit semarang",
    "akupunktur wajah semarang",
    "akupunktur stroke semarang",
    "akupunktur pelangsing semarang",
    "drg arini jannata",
  ],
  alternates: {
    canonical: "/layanan/akupunktur",
    languages: {
      "id-ID": "/layanan/akupunktur",
      "en-US": "/layanan/akupunktur",
      "x-default": "/layanan/akupunktur",
    },
  },
  openGraph: {
    title: "Terapi Akupunktur Medis & Estetika di Semarang | Lotus Health",
    description: "Klinik akupunktur medis bersertifikasi di Semarang Barat. Ditangani tenaga profesional di ruangan privat dan steril.",
    url: "https://lotussemarang.com/layanan/akupunktur",
    images: [{ url: "/images/hero-1.webp", width: 1200, height: 630, alt: "Akupunktur Medis Semarang Lotus Health" }],
  },
};

export default function AkupunkturPage() {
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
            "name": "Akupunktur Medis Semarang",
            "item": "https://lotussemarang.com/layanan/akupunktur"
          }
        ]
      },
      {
        "@type": "MedicalProcedure",
        "name": "Terapi Akupunktur Medis & Estetika Semarang",
        "description": "Layanan akupunktur medis profesional di Semarang untuk pengobatan saraf kejepit, pemulihan stroke, program hamil (promil), insomnia, slimming, dan peremajaan wajah.",
        "procedureType": "NonSurgicalProcedure",
        "bodyLocation": "Full Body",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Acupuncture"
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
      <AkupunkturClient />
    </>
  );
}
