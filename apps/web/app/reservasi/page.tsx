import type { Metadata } from "next";
import { ReservasiClient } from "@/components/ReservasiClient";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Reservasi Online Sesi Terapi Privat",
  description:
    "Pesan sesi hidroterapi, akupunktur medis, fisioterapi, dan les renang privat di Semarang. Isi form konsultasi awal di sini dan jadwalkan via WhatsApp.",
  path: "/reservasi",
  keywords: [
    "reservasi lotus semarang",
    "booking akupunktur semarang",
    "jadwal hidroterapi semarang",
    "daftar les renang semarang",
  ],
});

export default function ReservasiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    ...breadcrumbJsonLd([
      { name: "Beranda", path: "/" },
      { name: "Reservasi Jadwal", path: "/reservasi" },
    ]),
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
