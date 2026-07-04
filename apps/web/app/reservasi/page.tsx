import type { Metadata } from "next";
import { ReservasiClient } from "@/components/ReservasiClient";

export const metadata: Metadata = {
  title: "Reservasi Online & Sesi Terapi Privat | Lotus Semarang",
  description:
    "Pesan sesi hidroterapi, akupunktur medis, dan fisioterapi privat Anda di Semarang. Isi form konsultasi awal di sini dan jadwalkan via WhatsApp.",
  alternates: {
    canonical: "/reservasi",
  },
};

export default function ReservasiPage() {
  return <ReservasiClient />;
}
