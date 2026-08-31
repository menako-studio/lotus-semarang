import type { Metadata } from "next";
import { ReservasiClient } from "@/components/ReservasiClient";

export const metadata: Metadata = {
  title: "Reservasi Online & Sesi Terapi Privat | Lotus Semarang",
  description:
    "Pesan sesi hidroterapi, akupunktur medis, dan fisioterapi privat Anda di Semarang. Isi form konsultasi awal di sini dan jadwalkan via WhatsApp.",
  keywords: [
    "reservasi lotus semarang",
    "booking akupunktur semarang",
    "jadwal hidroterapi semarang",
    "daftar les renang semarang",
  ],
  alternates: {
    canonical: "/reservasi",
    languages: {
      "id-ID": "/reservasi",
      "en-US": "/reservasi",
      "x-default": "/reservasi",
    },
  },
};

export default function ReservasiPage() {
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
        "name": "Reservasi Jadwal",
        "item": "https://lotussemarang.com/reservasi"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReservasiClient />
    </>
  );
}
