import type { Metadata } from "next";
import { SwimCourseClient } from "@/components/SwimCourseClient";
import { SITE_URL, breadcrumbJsonLd, clinicRef, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Les Renang Privat Semi-Outdoor Semarang",
  description:
    "Les renang privat di kolam semi-outdoor Semarang untuk balita, anak, dewasa, lansia, dan kelas khusus wanita (hijab-friendly) bersama instruktur berpengalaman.",
  path: "/layanan/swim-course",
  keywords: [
    "swim course semarang",
    "les renang semarang",
    "kursus renang semarang",
    "les renang privat semarang",
    "kolam renang privat semarang",
    "les renang anak semarang",
    "les renang wanita semarang",
  ],
});

export default function SwimCoursePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([
        { name: "Beranda", path: "/" },
        { name: "Layanan", path: "/#layanan" },
        { name: "Kursus Renang Privat Semarang", path: "/layanan/swim-course" },
      ]),
      {
        "@type": "Course",
        "name": "Kursus Les Renang Privat Semarang",
        "description": "Les renang privat eksklusif di kolam semi-outdoor privat yang higienis, terlindung dari terik dan hujan, serta ramah muslimah.",
        "url": `${SITE_URL}/layanan/swim-course`,
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
      <SwimCourseClient />
    </>
  );
}
