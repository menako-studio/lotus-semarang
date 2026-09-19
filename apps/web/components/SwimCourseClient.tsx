"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { useLanguage } from "@/components/LanguageContext";
import { ArrowRight, MessageCircle } from "lucide-react";

export function SwimCourseClient() {
  const { t, language } = useLanguage();

  const purposes = language === "id" ? [
    {
      title: "Mulai Belajar",
      desc: "Untuk kamu yang baru ingin mengenal air dan belajar berenang dari dasar.",
      bg: "bg-hydro-soft/80 border border-hydro/20",
    },
    {
      title: "Meningkatkan Kemampuan",
      desc: "Untuk kamu yang sudah dapat berenang dan ingin meningkatkan teknik maupun kemampuan renang.",
      bg: "bg-sage-soft/80 border border-sage/20",
    },
    {
      title: "Tetap Aktif",
      desc: "Untuk kamu yang ingin menjadikan renang sebagai bagian dari rutinitas aktivitas fisik, termasuk setelah menyelesaikan rangkaian terapi.",
      bg: "bg-blush-soft/80 border border-blush/20",
    },
    {
      title: "Anak, Dewasa, Hingga Lansia",
      desc: "Program dapat diikuti mulai dari anak-anak hingga dewasa, dengan latihan yang disesuaikan dengan kemampuan masing-masing peserta.",
      bg: "bg-sand-soft/80 border border-sand/30",
    },
  ] : [
    {
      title: "Start Learning",
      desc: "For those looking to become familiar with water and learn swimming fundamentals from scratch.",
      bg: "bg-hydro-soft/80 border border-hydro/20",
    },
    {
      title: "Enhancing Technique",
      desc: "For those who can already swim and wish to refine stroke technique, stamina, and efficiency.",
      bg: "bg-sage-soft/80 border border-sage/20",
    },
    {
      title: "Staying Active",
      desc: "For anyone seeking swimming as a sustainable physical routine, including continuation after medical therapy.",
      bg: "bg-blush-soft/80 border border-blush/20",
    },
    {
      title: "Children, Adults & Seniors",
      desc: "Programs welcoming all generations, with individualized pacing adapted to each swimmer's capabilities.",
      bg: "bg-sand-soft/80 border border-sand/30",
    },
  ];

  const mechanisms = language === "id" ? [
    {
      num: "01",
      title: "Pembelajaran Bertahap Sesuai Kemampuan",
      desc: "Setiap orang memiliki kemampuan dan pengalaman yang berbeda di dalam air. Latihan dilakukan secara bertahap dan disesuaikan dengan kemampuan serta tujuan masing-masing.",
    },
    {
      num: "02",
      title: "Kolam Semi-Outdoor yang Nyaman",
      desc: "Latihan dilakukan di kolam semi-outdoor dengan suasana yang teduh dan nyaman, sehingga proses latihan berjalan dengan lebih leluasa.",
    },
    {
      num: "03",
      title: "Didampingi Instruktur Berpengalaman",
      desc: "Setiap sesi didampingi langsung oleh instruktur berpengalaman yang memberikan arahan sesuai kemampuan dan kebutuhan peserta.",
    },
  ] : [
    {
      num: "01",
      title: "Step-by-Step Personalized Learning",
      desc: "Every individual brings unique comfort levels in water. Training progresses gradually and is personalized to each swimmer's pace and goals.",
    },
    {
      num: "02",
      title: "Comfortable Semi-Outdoor Pool",
      desc: "Sessions take place in a sheltered, serene semi-outdoor private pool, creating a relaxed, unhurried learning environment.",
    },
    {
      num: "03",
      title: "Certified Experienced Instructors",
      desc: "Each lesson is directly guided by experienced swim instructors who tailor feedback and safety to participants' individual needs.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              className="lg:col-span-6 flex flex-col gap-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div>
                <span className="tag-pill bg-hydro-soft text-hydro-deep font-bold text-xs uppercase tracking-wider mb-4 inline-block border border-hydro/30">
                  {language === "id" ? "Program Aktivitas" : "Activity Program"}
                </span>
                <h1 className="font-display font-black text-espresso text-5xl lg:text-7.5xl leading-[1.05] tracking-tight">
                  Swim Course
                </h1>
                <p className="font-display font-bold text-blush text-xl lg:text-2xl mt-2">
                  {language === "id"
                    ? "Renang untuk Memulai, Berkembang, dan Tetap Aktif"
                    : "Swimming to Start, Progress, and Stay Active"}
                </p>
              </div>
              <div className="font-sans text-espresso/70 text-base lg:text-lg leading-relaxed max-w-lg flex flex-col gap-4">
                <p>
                  {language === "id"
                    ? "Setiap orang memiliki kemampuan dan pengalaman yang berbeda di dalam air. Karena itu, Swim Course Lotus memberikan latihan secara personal dan bertahap, sesuai kemampuan serta tujuan masing-masing. Mulai dari belajar berenang untuk pertama kali, meningkatkan teknik, hingga menjadikan renang sebagai bagian dari rutinitas aktivitas fisik."
                    : "Everyone possesses unique comfort and skills in water. Lotus Swim Course offers personal, step-by-step training tailored to your abilities and goals—from first strokes to advanced swimming habits."}
                </p>
                <div className="p-4 rounded-2xl bg-sand-soft/50 border border-espresso/5 text-sm font-medium text-espresso/85">
                  <span className="font-bold text-espresso block mb-1">
                    {language === "id" ? "Sehat Bukan Sekadar Pulih" : "Health Beyond Recovery"}
                  </span>
                  {language === "id"
                    ? "Bagi kamu yang telah menyelesaikan rangkaian terapi, renang dapat menjadi salah satu pilihan aktivitas untuk tetap aktif dan menjaga tubuh tetap bergerak."
                    : "For those who completed their therapy sessions, swimming offers the ideal low-impact routine to maintain lifelong mobility."}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/reservasi"
                  className="btn-pill-dark font-bold text-sm px-8 py-4 shadow-warm group inline-flex items-center gap-2"
                >
                  {language === "id" ? "Reservasi Sekarang" : "Reserve Now"}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={`https://wa.me/6287700303645?text=${encodeURIComponent(language === "id" ? "Halo Lotus, mau tanya tentang program Swim Course" : "Hello Lotus, I'd like to ask about the Swim Course")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-outline font-bold text-sm px-8 py-4 inline-flex items-center gap-2"
                >
                  <MessageCircle size={16} className="text-forest" />
                  {language === "id" ? "Tanya Admin" : "Ask Admin"}
                </a>
              </div>
            </motion.div>

            {/* Right: Editorial Images */}
            <motion.div
              className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] lg:min-h-[500px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute top-10 left-10 w-4/5 h-4/5 bg-hydro-soft rounded-[3rem] -rotate-3" />
              <div className="absolute top-0 right-4 w-[65%] aspect-[3/4] rounded-3xl overflow-hidden shadow-warm-lg img-zoom z-10">
                <Image
                  src="/images/swimming-course-lansia-2.jpg"
                  alt="Instruktur Renang Privat Lotus Semarang"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={85}
                />
              </div>
              <div className="absolute bottom-4 left-4 w-[45%] aspect-square rounded-3xl overflow-hidden shadow-warm-xl border-4 border-white img-zoom z-20">
                <Image
                  src="/images/swimming-course-anak.jpg"
                  alt="Latihan Renang Anak Ramah & Aman"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  quality={80}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Marquee Accent */}
      <Marquee bg="swim" textClass="text-white" speed="slow" />

      {/* Mechanism Section: Bagaimana Belajar Renang di Lotus? */}
      <section className="section-pad bg-white">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
              className="lg:col-span-6 relative aspect-[4/3] rounded-[3.5rem] overflow-hidden shadow-warm-lg img-zoom"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/images/swimming-course-dewasa.jpg"
                alt="Proses Belajar Renang Dewasa Privat"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
            </motion.div>
            <motion.div
              className="lg:col-span-6 flex flex-col gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <span className="tag-pill bg-espresso/5 text-espresso/80 font-bold text-xs uppercase tracking-wider self-start">
                {language === "id" ? "Metode Pembelajaran" : "Learning Method"}
              </span>
              <h2 className="font-display font-black text-espresso text-3xl md:text-5xl leading-tight tracking-tight">
                {language === "id" ? "Bagaimana Belajar Renang di Lotus?" : "How Do You Learn Swimming at Lotus?"}
              </h2>
              <div className="flex flex-col gap-6 mt-4">
                {mechanisms.map((mech, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-hydro-soft text-hydro-deep flex items-center justify-center font-display font-black text-lg flex-shrink-0 border border-hydro/30">
                      {mech.num}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-espresso text-lg mb-1">
                        {mech.title}
                      </h3>
                      <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                        {mech.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Purposes Grid: Untuk Berbagai Tujuan (Without photos as requested by client) */}
      <section className="section-pad bg-cream-warm/40 border-t border-espresso/5">
        <div className="container-wellness">
          <motion.div
            className="text-center max-w-xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag-pill bg-espresso/5 text-espresso/70 font-bold text-xs uppercase tracking-wider mb-4 inline-block">
              {language === "id" ? "Program Renang" : "Swimming Programs"}
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight">
              {language === "id" ? "Untuk Berbagai Tujuan" : "For Diverse Goals"}
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {purposes.map((p, i) => (
              <motion.div
                key={i}
                className={`${p.bg} rounded-[2rem] p-7 flex flex-col gap-3.5 shadow-warm hover:-translate-y-1.5 transition-all duration-300`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="font-display font-black text-espresso text-xl leading-tight">
                  {p.title}
                </h3>
                <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <Link
              href="/reservasi"
              className="btn-pill-dark font-bold text-sm px-8 py-4 shadow-warm inline-flex items-center gap-2"
            >
              {language === "id" ? "Reservasi Sekarang" : "Reserve Now"}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
