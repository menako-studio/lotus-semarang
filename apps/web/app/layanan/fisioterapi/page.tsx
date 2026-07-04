import type { Metadata } from "next";
import { FisioterapiClient } from "@/components/FisioterapiClient";

export const metadata: Metadata = {
  title: "Fisioterapi Medis Privat di Semarang | Lotus Health",
  description:
    "Mencari layanan fisioterapi privat terpercaya di Semarang? Lotus Health & Beauty menyediakan rehabilitasi saraf, penanganan saraf kejepit, vertigo, pasca stroke, dan cedera olahraga.",
  keywords: [
    "fisioterapi semarang",
    "fisioterapi saraf kejepit semarang",
    "rehabilitasi medik semarang",
    "fisioterapi stroke semarang",
    "fisioterapi panggilan semarang",
    "terapi stroke semarang",
    "klinik fisioterapi semarang",
  ],
  alternates: {
    canonical: "/layanan/fisioterapi",
  },
};

export default function FisioterapiPage() {
  return <FisioterapiClient />;
}
