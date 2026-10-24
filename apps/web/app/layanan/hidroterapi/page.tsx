import type { Metadata } from "next";
import { HidroterapiClient } from "@/components/HidroterapiClient";
import { SITE_URL, breadcrumbJsonLd, clinicRef, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Kolam Hidroterapi Privat Semi-Outdoor Semarang",
  description:
    "Kolam hidroterapi privat semi-outdoor di Semarang: fisioterapi media air untuk pinggang, lutut, saraf, pasca stroke, dan ibu hamil. Pendampingan 1 pasien 1 fisioterapis.",
  path: "/layanan/hidroterapi",
  keywords: [
    "hidroterapi semarang",
    "kolam hidroterapi semarang",
    "fisioterapi air semarang",
    "rehab stroke semarang",
    "terapi air semarang",
    "hydrotherapy semarang",
    "kolam renang privat semarang",
  ],
  imageAlt: "Hidroterapi Semi-Outdoor di Lotus Semarang",
});

export default function HidroterapiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([
        { name: "Beranda", path: "/" },
        { name: "Layanan", path: "/#layanan" },
        { name: "Hidroterapi Privat Semarang", path: "/layanan/hidroterapi" },
      ]),
      {
        "@type": "MedicalProcedure",
        "name": "Kolam Hidroterapi Privat Semi-Outdoor Semarang",
        "description": "Fisioterapi media air di kolam semi-outdoor privat Semarang untuk rehabilitasi saraf, kelumpuhan pasca stroke, keluhan persendian, nyeri pinggang, dan relaksasi kehamilan.",
        "url": `${SITE_URL}/layanan/hidroterapi`,
        "procedureType": "NonSurgicalProcedure",
        "bodyLocation": "Full Body",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Physiotherapy"
        },
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
      <HidroterapiClient />
    </>
  );
}
