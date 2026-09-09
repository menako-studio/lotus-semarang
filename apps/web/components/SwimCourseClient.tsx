"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { useLanguage } from "@/components/LanguageContext";
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from "lucide-react";

export function SwimCourseClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t, language } = useLanguage();

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const applications = language === "id" ? [
    {
      title: "Anak-Anak & Pemula",
      desc: "Latihan renang privat dasar dengan metode ramah anak yang berfokus pada water safety (keselamatan air) dan melatih keberanian di air.",
      img: "/images/lotus_treatment_hydro_female_hijab_float_front.jpg",
      bg: "bg-sand-soft/80 border border-sand/30",
    },
    {
      title: "Dewasa & Lansia",
      desc: "Latihan renang untuk melatih stamina kardio, menjaga kelenturan sendi lutut, serta terapi pernapasan bagi penderita asma/lansia.",
      img: "/images/swimming-course-lansia-2.jpg",
      bg: "bg-sage-soft/80 border border-sage/20",
    },
    {
      title: "Pengembangan Gaya",
      desc: "Menyempurnakan koordinasi tangan dan kaki untuk gaya dada (katak), gaya bebas, gaya punggung, serta teknik pernapasan efisien.",
      img: "/images/lotus_hydrotherapy_pool_male_floating_device.jpg",
      bg: "bg-peach-soft/80 border border-peach/20",
    },
    {
      title: "Sesi Privat Khusus Wanita",
      desc: "Fasilitas sewa kolam privat 100% dengan instruktur wanita terlatih, memberikan kenyamanan penuh bagi ibu berhijab (Niqabi).",
      img: "/images/lotus_treatment_hydro_elderly_hijab_smile_edge.jpg",
      bg: "bg-blush-soft/80 border border-blush/20",
    },
  ] : [
    {
      title: "Kids & Beginners",
      desc: "Basic private swimming lessons with child-friendly methods focusing on water safety and building confidence in water.",
      img: "/images/lotus_treatment_hydro_female_hijab_float_front.jpg",
      bg: "bg-sand-soft/80 border border-sand/30",
    },
    {
      title: "Adults & Seniors",
      desc: "Swimming lessons to build cardio stamina, preserve knee joint flexibility, and breathing therapy for asthma/seniors.",
      img: "/images/swimming-course-lansia-2.jpg",
      bg: "bg-sage-soft/80 border border-sage/20",
    },
    {
      title: "Stroke Development",
      desc: "Refining hand and foot coordination for breaststroke (frog), freestyle, backstroke, and efficient breathing techniques.",
      img: "/images/lotus_hydrotherapy_pool_male_floating_device.jpg",
      bg: "bg-peach-soft/80 border border-peach/20",
    },
    {
      title: "Women-Only Private Sessions",
      desc: "100% private pool rental options with trained female instructors, giving full privacy to hijabi mothers (Niqabi).",
      img: "/images/lotus_treatment_hydro_elderly_hijab_smile_edge.jpg",
      bg: "bg-blush-soft/80 border border-blush/20",
    },
  ];

  const faqs = language === "id" ? [
    {
      q: "Berapa kapasitas kolam renang saat kelas berlangsung?",
      a: "Satu kelas renang bersifat 100% privat (1 instruktur melayani 1 murid). Area kolam renang disewa khusus untuk sesi latihan Anda tanpa terganggu oleh kehadiran pengunjung umum.",
    },
    {
      q: "Apakah kolam renang di Lotus air hangat?",
      a: "Kolam renang di Lotus Semarang menggunakan air bersih biasa dengan konsep semi-outdoor yang terlindung dari terik matahari dan aman dari hujan. Suasana latihan sangat sejuk, nyaman, dan tenang.",
    },
    {
      q: "Apakah disediakan instruktur wanita?",
      a: "Ya. Kami menyediakan instruktur wanita profesional bersertifikat resmi demi kenyamanan penuh bagi murid perempuan dewasa, anak-anak, maupun kalangan ibu berhijab.",
    },
    {
      q: "Berapa kali pertemuan untuk paket kelas renang?",
      a: "Tersedia paket 4 kali pertemuan (mingguan) atau paket intensif 8 kali pertemuan yang bisa Anda sesuaikan sendiri jadwalnya bersama instruktur terkait.",
    },
  ] : [
    {
      q: "What is the capacity of the pool during class?",
      a: "Each swimming class is 100% private (1 instructor serves 1 student). The pool area is booked exclusively for your training session, uninterrupted by public visitors.",
    },
    {
      q: "Is the swimming pool at Lotus heated?",
      a: "The pool at Lotus Semarang is a sheltered semi-outdoor pool with clean freshwater (not heated). It is well protected from direct sunlight and rain, keeping the practice cool and comfortable.",
    },
    {
      q: "Are female instructors available?",
      a: "Yes. We provide certified professional female instructors for the complete comfort of female students, kids, and hijabi mothers.",
    },
    {
      q: "How many sessions are included in the swim packages?",
      a: "We offer weekly packages of 4 sessions or intensive packages of 8 sessions, which you can schedule flexibly with your assigned instructor.",
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
                <span className="tag-pill bg-sand text-espresso font-bold text-xs uppercase tracking-wider mb-4 inline-block border border-sand/40">
                  {t("swimCoursePage.eyebrow")}
                </span>
                <h1 className="font-display font-black text-espresso text-5xl lg:text-7.5xl leading-[1.05] tracking-tight">
                  {language === "id" ? "Swim Course" : "Private Swim"}<br />
                  <span className="text-espresso">{language === "id" ? "Belajar Bebas Khawatir." : "Worry-Free Swimming."}</span>
                </h1>
              </div>
              <p className="font-sans text-espresso/70 text-lg leading-relaxed max-w-lg">
                {language === "id" 
                  ? "Dapatkan bimbingan renang privat di kolam semi-outdoor yang teduh dan nyaman. Sempurna bagi anak-anak hingga dewasa yang ingin mulai belajar berenang maupun menjaga kebugaran tubuh."
                  : "Get private swimming instruction in a sheltered, comfortable semi-outdoor pool. Perfect for children to adults who want to learn swimming or stay fit and active."}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={`https://wa.me/6287700303645?text=${encodeURIComponent(t("swimCoursePage.whatsAppPrompt"))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-dark font-bold text-sm px-8 py-4 shadow-warm group gap-2"
                >
                  {t("swimCoursePage.cta")}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={`https://wa.me/6287700303645?text=${encodeURIComponent(language === "id" ? "Halo Lotus, mau tanya jadwal dan biaya Swim Course" : "Hello Lotus, I'd like to ask about schedules and rates for Swim Course")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-outline font-bold text-sm px-8 py-4"
                >
                  {language === "id" ? "Tanya Jadwal & Biaya" : "Inquire Rates & Schedules"}
                </a>
              </div>
            </motion.div>

            {/* Right: Overlapping Editorial Images */}
            <motion.div
              className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] lg:min-h-[500px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute top-10 left-10 w-4/5 h-4/5 bg-sand-soft rounded-[3rem] -rotate-3" />
              <div className="absolute top-0 right-4 w-[65%] aspect-[3/4] rounded-3xl overflow-hidden shadow-warm-lg img-zoom z-10">
                <Image
                  src="/images/swimming-course-lansia.jpg"
                  alt="Kelas Renang Dewasa di Lotus Semarang"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={85}
                />
              </div>
              <div className="absolute bottom-4 left-4 w-[45%] aspect-square rounded-3xl overflow-hidden shadow-warm-xl border-4 border-white img-zoom z-20">
                <Image
                  src="/images/swimming-course-lansia-2.jpg"
                  alt="Latihan Gerak Tungkai Renang"
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
      <Marquee bg="sand" textClass="text-espresso" speed="slow" />

      {/* Metode Section */}
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
                src="/images/lotus_hydrotherapy_pool_male_floating_device.jpg"
                alt="Manfaat Latihan Fisik Kolam Renang Semi-Outdoor"
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
              <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight tracking-tight">
                {language === "id" ? "Mengapa Memilih Kelas Renang Privat Kami?" : "Why Choose Our Private Swimming Classes?"}
              </h2>
              <div className="flex flex-col gap-6 mt-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sand-soft text-espresso flex items-center justify-center font-display font-black text-lg flex-shrink-0 border border-sand/30">
                    01
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-espresso text-lg mb-1">
                      {language === "id" ? "Kurikulum Bertahap (Step-by-Step)" : "Step-by-Step Curriculum"}
                    </h3>
                    <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                      {language === "id"
                        ? "Latihan dimulai dari pengenalan air dan meluncur secara menyenangkan. Tidak dipaksa, menyesuaikan kecepatan belajar masing-masing murid."
                        : "Training starts from water introduction and gliding in a fun way. No pressure, matching each student's learning pace."}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sage-soft text-forest flex items-center justify-center font-display font-black text-lg flex-shrink-0 border border-sage/20">
                    02
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-espresso text-lg mb-1">
                      {language === "id" ? "Kolam Semi-Outdoor Teduh" : "Sheltered Semi-Outdoor Pool"}
                    </h3>
                    <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                      {language === "id"
                        ? "Area kolam semi-outdoor terlindung dari terik matahari dan hujan, menjaga murid tetap nyaman berlatih tanpa kepanasan."
                        : "The sheltered semi-outdoor pool protects students from hot sun and rain, keeping practice sessions comfortable."}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blush-soft text-blush-deep flex items-center justify-center font-display font-black text-lg flex-shrink-0 border border-blush/20">
                    03
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-espresso text-lg mb-1">
                      {language === "id" ? "Privasi Menenangkan" : "Soothing Privacy"}
                    </h3>
                    <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                      {language === "id"
                        ? "Sangat cocok bagi ibu-ibu yang risih apabila dilihat orang lain saat latihan renang, memberikan rasa aman 100% tanpa canggung."
                        : "Perfect for women who prefer not to be seen by others during swim practice, providing 100% peace of mind without awkwardness."}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="section-pad bg-cream-warm/40 border-y border-espresso/5">
        <div className="container-wellness">
          <motion.div
            className="text-center max-w-xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag-pill bg-espresso/5 text-espresso/70 font-bold text-xs uppercase tracking-wider mb-4 inline-block">
              {language === "id" ? "Kelas Pilihan" : "Class Options"}
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight">
              {language === "id" ? "Kategori Program Swim Course" : "Swim Course Program Categories"}
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {applications.map((app, i) => (
              <motion.div
                key={i}
                className={`${app.bg} rounded-[2.5rem] p-8 lg:p-10 flex flex-col gap-6 shadow-warm hover:-translate-y-1.5 transition-all duration-300`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="grid grid-cols-[3fr_1.5fr] gap-4 items-center">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-black text-espresso text-xl lg:text-2xl leading-tight">
                      {app.title}
                    </h3>
                    <p className="font-sans text-espresso/65 text-xs lg:text-sm leading-relaxed">
                      {app.desc}
                    </p>
                  </div>
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-warm img-zoom">
                    <Image
                      src={app.img}
                      alt={app.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      quality={80}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section-pad bg-white">
        <div className="container-wellness">
          <motion.div
            className="text-center max-w-xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag-pill bg-sand text-espresso font-bold text-xs uppercase tracking-wider mb-4 inline-block border border-sand/40">
              {language === "id" ? "Alur Latihan" : "Practice Flow"}
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight">
              {language === "id" ? "Prosedur Sesi Latihan Renang Anda" : "Your Swim Practice Session Procedure"}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                img: "/images/lotus_treatment_hydro_equipment_noodle_front.jpg",
                alt: "Pengenalan Air & Keselamatan",
                step: language === "id" ? "01. Pengenalan & Asesmen" : "01. Introduction & Assessment",
                desc: language === "id"
                  ? "Instruktur melakukan evaluasi keberanian air, mengajarkan teknik pernapasan dasar di kolam, meluncur dengan media bantu yang aman."
                  : "The instructor evaluates water confidence, teaches basic pool breathing techniques, and guides gliding with safe float aids."
              },
              {
                img: "/images/swimming-course-lansia-2.jpg",
                alt: "Latihan Koordinasi Gaya",
                step: language === "id" ? "02. Pengembangan Gaya" : "02. Stroke Development",
                desc: language === "id"
                  ? "Melatih gerakan tungkai dan lengan gaya dada atau gaya bebas secara teratur, melatih koordinasi pernapasan di permukaan air."
                  : "Practicing leg and arm movements for breaststroke or freestyle regularly, training breathing coordination on the water surface."
              },
              {
                img: "/images/swimming-course-lansia.jpg",
                alt: "Melatih Stamina Renang",
                step: language === "id" ? "03. Pemantapan Gerak" : "03. Movement Consolidation",
                desc: language === "id"
                  ? "Melatih ketahanan fisik (stamina) renang beberapa putaran bolak-balik tanpa jeda, serta memantapkan teknik water safety mandiri."
                  : "Training swim endurance (stamina) with several back-and-forth laps without stopping, and reinforcing independent water safety techniques."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col gap-4"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-warm img-zoom mb-2">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={80}
                  />
                </div>
                <span className="font-display font-black text-espresso text-lg">
                  {item.step}
                </span>
                <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-pad bg-cream-warm/40 border-t border-espresso/5">
        <div className="container-wellness max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag-pill bg-espresso/5 text-espresso/70 font-bold text-xs uppercase tracking-wider mb-4 inline-block">
              {language === "id" ? "Pertanyaan Umum" : "Frequently Asked Questions"}
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5xl leading-tight">
              {language === "id" ? "Hal-Hal yang Sering Ditanyakan" : "Common Questions Asked"}
            </h2>
          </motion.div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl border border-espresso/5 shadow-warm overflow-hidden transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-display font-bold text-espresso hover:text-blush text-base md:text-lg transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-blush flex-shrink-0" />
                    {faq.q}
                  </span>
                  {openFaq === index ? <ChevronUp size={18} className="flex-shrink-0 text-blush" /> : <ChevronDown size={18} className="flex-shrink-0 text-espresso/40" />}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 font-sans text-espresso/65 text-sm leading-relaxed border-t border-espresso/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
