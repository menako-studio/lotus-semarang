import type { Metadata } from "next";
import { FisioterapiClient } from "@/components/FisioterapiClient";
import { SITE_URL, breadcrumbJsonLd, clinicRef, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Fisioterapi & Rehabilitasi Saraf Semarang",
  description:
    "Fisioterapi privat di Semarang untuk saraf kejepit (HNP), stroke, vertigo, nyeri punggung & cedera olahraga dengan modalitas TENS, Infrared, dan Ultrasound.",
  path: "/layanan/fisioterapi",
  keywords: [
    "fisioterapi semarang",
    "fisioterapi saraf kejepit semarang",
    "rehabilitasi medik semarang",
    "fisioterapi stroke semarang",
    "klinik fisioterapi semarang",
    "terapi stroke semarang",
  ],
});

export default function FisioterapiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([
        { name: "Beranda", path: "/" },
        { name: "Layanan", path: "/#layanan" },
        { name: "Fisioterapi Semarang", path: "/layanan/fisioterapi" },
      ]),
      {
        "@type": "Service",
        "@id": `${SITE_URL}/layanan/fisioterapi#service`,
        "name": "Fisioterapi Medis & Rehabilitasi Fisik Semarang",
        "description": "Layanan rehabilitasi medis komprehensif untuk saraf kejepit (HNP), frozen shoulder, pemulihan stroke, dan cedera otot.",
        "url": `${SITE_URL}/layanan/fisioterapi`,
        "serviceType": "Fisioterapi",
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
      <FisioterapiClient />
    </>
  );
}
