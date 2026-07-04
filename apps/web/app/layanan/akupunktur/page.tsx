import type { Metadata } from "next";
import { AkupunkturClient } from "@/components/AkupunkturClient";

export const metadata: Metadata = {
  title: "Terapi Akupunktur Medis & Estetika Semarang | Lotus Health",
  description:
    "Cari tempat terapi akupunktur medis profesional di Semarang? Lotus Health & Beauty menyediakan sesi akupunktur privat steril untuk nyeri saraf, promil, tumbuh kembang anak, dan slimming.",
  keywords: [
    "akupunktur semarang",
    "klinik akupunktur semarang",
    "akupunktur promil semarang",
    "akupunktur wajah semarang",
    "akupunktur stroke semarang",
    "akupunktur panggilan semarang",
    "drg arini jannata",
  ],
  alternates: {
    canonical: "/layanan/akupunktur",
  },
};

export default function AkupunkturPage() {
  return <AkupunkturClient />;
}
