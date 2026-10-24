import type { Metadata } from "next";
import { TentangKamiClient } from "@/components/TentangKamiClient";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Tentang Kami & drg. Arini Jannata",
  description:
    "Didirikan 2014 oleh drg. Arini Jannata, S.Tr. Akup, MM, Lotus Semarang memberi perawatan akupunktur, hidroterapi & fisioterapi yang profesional dan personal.",
  path: "/tentang-kami",
  keywords: [
    "lotus semarang",
    "drg arini jannata",
    "wellness retreat semarang",
    "sejarah lotus semarang",
    "klinik kesehatan privat semarang",
    "fisioterapi privat semarang",
  ],
});

export default function TentangKamiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    ...breadcrumbJsonLd([
      { name: "Beranda", path: "/" },
      { name: "Tentang Kami", path: "/tentang-kami" },
    ]),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TentangKamiClient />
    </>
  );
}
