import type { Metadata } from "next";
import { AkupunkturClient } from "@/components/AkupunkturClient";
import { SITE_URL, breadcrumbJsonLd, clinicRef, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Akupunktur Medis & Estetika Semarang",
  description:
    "Klinik akupunktur medis di Semarang Barat. Terapi steril untuk saraf kejepit, stroke, promil, insomnia, kecantikan wajah & slimming. Reservasi via WhatsApp.",
  path: "/layanan/akupunktur",
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
  imageAlt: "Akupunktur Medis di Lotus Semarang",
});

export default function AkupunkturPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([
        { name: "Beranda", path: "/" },
        { name: "Layanan", path: "/#layanan" },
        { name: "Akupunktur Medis Semarang", path: "/layanan/akupunktur" },
      ]),
      {
        "@type": "Service",
        "@id": `${SITE_URL}/layanan/akupunktur#service`,
        "name": "Terapi Akupunktur Medis & Estetika Semarang",
        "description": "Layanan akupunktur medis profesional di Semarang untuk pengobatan saraf kejepit, pemulihan stroke, program hamil (promil), insomnia, slimming, dan peremajaan wajah.",
        "url": `${SITE_URL}/layanan/akupunktur`,
        "serviceType": "Akupunktur",
        "areaServed": { "@type": "City", "name": "Semarang" },
        "provider": clinicRef
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
