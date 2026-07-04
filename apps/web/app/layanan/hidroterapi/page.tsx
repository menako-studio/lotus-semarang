import type { Metadata } from "next";
import { HidroterapiClient } from "@/components/HidroterapiClient";

export const metadata: Metadata = {
  title: "Kolam Hidroterapi Privat & Hangat Semarang | Lotus Health",
  description:
    "Cari kolam hidroterapi hangat privat di Semarang? Lotus Health & Beauty menyediakan sesi hidroterapi medis khusus pemulihan stroke, rehab sendi lutut, bumil, dan relaksasi privat.",
  keywords: [
    "hidroterapi semarang",
    "kolam hidroterapi semarang",
    "terapi air hangat semarang",
    "fisioterapi air semarang",
    "rehab stroke semarang",
    "kolam renang hangat semarang",
    "terapi air semarang",
  ],
  alternates: {
    canonical: "/layanan/hidroterapi",
  },
};

export default function HidroterapiPage() {
  return <HidroterapiClient />;
}
