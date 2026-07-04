import type { Metadata } from "next";
import { SwimCourseClient } from "@/components/SwimCourseClient";

export const metadata: Metadata = {
  title: "Kursus Renang Privat Kolam Hangat Semarang | Lotus Health",
  description:
    "Cari kelas renang privat air hangat di Semarang? Lotus Health & Beauty menyediakan les renang privat untuk anak-anak, lansia, pemula, dan kelas khusus wanita (hijab-friendly).",
  keywords: [
    "swim course semarang",
    "les renang semarang",
    "kursus renang semarang",
    "kolam renang hangat semarang",
    "les renang anak semarang",
    "les renang wanita semarang",
    "les renang privat semarang",
  ],
  alternates: {
    canonical: "/layanan/swim-course",
  },
};

export default function SwimCoursePage() {
  return <SwimCourseClient />;
}
