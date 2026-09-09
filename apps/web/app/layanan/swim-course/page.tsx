import type { Metadata } from "next";
import { SwimCourseClient } from "@/components/SwimCourseClient";

export const metadata: Metadata = {
  title: "Kursus Les Renang Privat Semi-Outdoor Semarang | Lotus Health",
  description:
    "Cari kelas renang privat di Semarang? Lotus Health menyediakan les renang privat semi-outdoor untuk anak-anak, dewasa, lansia, dan kelas khusus wanita (hijab-friendly).",
  keywords: [
    "swim course semarang",
    "les renang semarang",
    "kursus renang semarang",
    "les renang privat semarang",
    "kolam renang privat semarang",
    "les renang anak semarang",
    "les renang wanita semarang",
  ],
  alternates: {
    canonical: "/layanan/swim-course",
    languages: {
      "id-ID": "/layanan/swim-course",
      "en-US": "/layanan/swim-course",
      "x-default": "/layanan/swim-course",
    },
  },
};

export default function SwimCoursePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
            "name": "Layanan",
            "item": "https://lotussemarang.com/#layanan"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Kursus Renang Privat Semarang",
            "item": "https://lotussemarang.com/layanan/swim-course"
          }
        ]
      },
      {
        "@type": "Course",
        "name": "Kursus Les Renang Privat Semarang",
        "description": "Les renang privat eksklusif di kolam semi-outdoor privat yang higienis, terlindung dari terik dan hujan, serta ramah muslimah.",
        "provider": {
          "@type": "MedicalClinic",
          "name": "Lotus Health, Beauty & Care",
          "telephone": "+6287700303645"
        }
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
