import type { Metadata } from "next";
import { TentangKamiClient } from "@/components/TentangKamiClient";

export const metadata: Metadata = {
  title: "Tentang Kami | Lotus Health, Beauty & Care Semarang",
  description:
    "Didirikan tahun 2014 oleh drg. Arini Jannata, S.Tr. Akup, MM. Lotus Semarang menghadirkan pelayanan kesehatan privat terpadu: Akupunktur Medis, Hidroterapi, & Fisioterapi.",
  keywords: [
    "lotus semarang",
    "drg arini jannata",
    "wellness retreat semarang",
    "sejarah lotus semarang",
    "klinik kesehatan privat semarang",
    "fisioterapi privat semarang",
  ],
  alternates: {
    canonical: "/tentang-kami",
    languages: {
      "id-ID": "/tentang-kami",
      "en-US": "/tentang-kami",
      "x-default": "/tentang-kami",
    },
  },
};

export default function TentangKamiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
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
        "name": "Tentang Kami",
        "item": "https://lotussemarang.com/tentang-kami"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TentangKamiClient />
    </>
  );
}
