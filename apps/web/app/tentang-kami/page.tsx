import type { Metadata } from "next";
import { TentangKamiClient } from "@/components/TentangKamiClient";

export const metadata: Metadata = {
  title: "Tentang Kami | Lotus Health, Beauty & Care Semarang",
  description:
    "Didirikan tahun 2014 oleh drg. Arini Jannata, S.Tr. Akup, MM. Lotus Semarang menghadirkan konsep baru wellness privat terpadu yang memadukan Akupunktur, Hidroterapi, dan Fisioterapi.",
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
  },
};

export default function TentangKamiPage() {
  return <TentangKamiClient />;
}
