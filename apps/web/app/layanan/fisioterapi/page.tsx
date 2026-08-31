import type { Metadata } from "next";
import { FisioterapiClient } from "@/components/FisioterapiClient";

export const metadata: Metadata = {
  title: "Fisioterapi Medis & Rehabilitasi Saraf Semarang | Lotus Health",
  description:
    "Layanan fisioterapi privat terpercaya di Semarang. Penanganan saraf kejepit, stroke, vertigo, nyeri punggung & cedera olahraga dengan modalitas TENS, Infrared, & Ultrasound.",
  keywords: [
    "fisioterapi semarang",
    "fisioterapi saraf kejepit semarang",
    "rehabilitasi medik semarang",
    "fisioterapi stroke semarang",
    "klinik fisioterapi semarang",
    "terapi stroke semarang",
  ],
  alternates: {
    canonical: "/layanan/fisioterapi",
    languages: {
      "id-ID": "/layanan/fisioterapi",
      "en-US": "/layanan/fisioterapi",
      "x-default": "/layanan/fisioterapi",
    },
  },
};

export default function FisioterapiPage() {
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
            "name": "Fisioterapi Semarang",
            "item": "https://lotussemarang.com/layanan/fisioterapi"
          }
        ]
      },
      {
        "@type": "MedicalProcedure",
        "name": "Fisioterapi Medis & Rehabilitasi Fisik Semarang",
        "description": "Layanan rehabilitasi medis komprehensif untuk saraf kejepit (HNP), frozen shoulder, pemulihan stroke, dan cedera otot.",
        "procedureType": "NonSurgicalProcedure",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Physiotherapy"
        },
        "provider": {
          "@type": "MedicalClinic",
          "name": "Lotus Health, Beauty & Care",
          "telephone": "+6287700303645"
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
      <FisioterapiClient />
    </>
  );
}
