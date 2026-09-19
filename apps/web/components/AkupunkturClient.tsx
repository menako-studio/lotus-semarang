"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { useLanguage } from "@/components/LanguageContext";
import { ArrowRight, MessageCircle } from "lucide-react";

export function AkupunkturClient() {
  const { t, language } = useLanguage();

  const applications = language === "id" ? [
    {
      title: "Anak-anak (Tumbuh Kembang)",
      desc: "Membantu mendukung tumbuh kembang motorik, konsentrasi belajar, regulasi emosi, nafsu makan, serta daya tahan tubuh.",
      img: "/images/lotus_treatment_baby_model_high_angle.webp",
      bg: "bg-blush-soft/80 border border-blush/20",
    },
    {
      title: "Dewasa & Lansia",
      desc: "Membantu menangani berbagai keluhan seperti nyeri sendi, vertigo, GERD, hipertensi, saraf terjepit, migrain, pemulihan pascastroke, serta mual yang berkaitan dengan efek samping kemoterapi.",
      img: "/images/lotus_treatment_facial_portrait_patient_elderly.jpg",
      bg: "bg-sage-soft/80 border border-sage/20",
    },
    {
      title: "Reproduksi & Hormonal",
      desc: "Membantu menangani keluhan terkait siklus menstruasi dan masa premenopause, serta dapat digunakan sebagai terapi pendamping dalam program reproduksi, termasuk persiapan program bayi tabung.",
      img: "/images/lotus_treatment_body_abdomen_male_patient.jpg",
      bg: "bg-peach-soft/80 border border-peach/20",
    },
    {
      title: "Slimming & Estetika",
      desc: "Akupunktur untuk membantu menangani keluhan kulit seperti jerawat dan kulit kusam, serta mendukung perawatan wajah, pengencangan, shaping, dan program slimming.",
      img: "/images/lotus_treatment_facial_portrait_patient_closed_eyes.jpg",
      bg: "bg-sand-soft/80 border border-sand/30",
    },
  ] : [
    {
      title: "Children (Growth & Development)",
      desc: "Supports motor growth and development, learning focus, emotional regulation, appetite improvement, and natural immunity.",
      img: "/images/lotus_treatment_baby_model_high_angle.webp",
      bg: "bg-blush-soft/80 border border-blush/20",
    },
    {
      title: "Adults & Seniors",
      desc: "Helps manage conditions such as joint pain, vertigo, GERD, hypertension, pinched nerves, migraines, post-stroke recovery, and chemotherapy-related nausea.",
      img: "/images/lotus_treatment_facial_portrait_patient_elderly.jpg",
      bg: "bg-sage-soft/80 border border-sage/20",
    },
    {
      title: "Reproductive & Hormonal",
      desc: "Helps address menstrual cycle and perimenopausal complaints, and serves as complementary therapy for natural fertility and IVF preparation.",
      img: "/images/lotus_treatment_body_abdomen_male_patient.jpg",
      bg: "bg-peach-soft/80 border border-peach/20",
    },
    {
      title: "Slimming & Aesthetics",
      desc: "Acupuncture to support skin concerns such as acne and dullness, while promoting facial rejuvenation, skin tightening, body shaping, and slimming.",
      img: "/images/lotus_treatment_facial_portrait_patient_closed_eyes.jpg",
      bg: "bg-sand-soft/80 border border-sand/30",
    },
  ];

  const mechanisms = language === "id" ? [
    {
      num: "01",
      title: "Diagnosis",
      desc: "Pemeriksaan awal dilakukan untuk memahami kondisi kesehatan, kebutuhan, serta tujuan terapi pasien.",
    },
    {
      num: "02",
      title: "Menstimulasi Sistem Saraf",
      desc: "Stimulasi jarum akupunktur pada titik-titik spesifik di tubuh memberikan rangsangan pada sistem saraf yang dapat membantu mendukung keseimbangan berbagai fungsi tubuh, termasuk regulasi saraf, sirkulasi, hormonal, dan imunitas.",
    },
    {
      num: "03",
      title: "Pendekatan yang Disesuaikan",
      desc: "Titik-titik akupunktur dipilih berdasarkan hasil konsultasi dan pemeriksaan, sehingga setiap sesi dapat disesuaikan dengan kondisi pasien.",
    },
  ] : [
    {
      num: "01",
      title: "Comprehensive Diagnosis",
      desc: "Initial assessment is conducted to thoroughly understand your health condition, personal needs, and therapy goals.",
    },
    {
      num: "02",
      title: "Stimulating Nervous System",
      desc: "Acupuncture stimulation at specific anatomical points activates the nervous system, helping support balance across neural regulation, circulation, hormones, and immune functions.",
    },
    {
      num: "03",
      title: "Tailored Treatment Approach",
      desc: "Points are selected based on personal consultation and clinical examination, ensuring every session is customized to individual progress.",
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
                <span className="tag-pill bg-blush/20 text-blush-deep font-bold text-xs uppercase tracking-wider mb-4 inline-block border border-blush/20">
                  {language === "id" ? "Layanan Terapi" : "Therapy Service"}
                </span>
                <h1 className="font-display font-black text-espresso text-5xl lg:text-7.5xl leading-[1.05] tracking-tight">
                  Akupunktur
                </h1>
              </div>
              <p className="font-sans text-espresso/70 text-lg leading-relaxed max-w-lg">
                {language === "id" 
                  ? "Akupunktur merupakan tindakan terapi yang menggunakan jarum steril sekali pakai (disposable sterile needle) yang ditusukkan pada titik-titik akupunktur di tubuh sesuai dengan kondisi dan kebutuhan pasien."
                  : "Acupuncture is a therapeutic treatment using single-use disposable sterile needles inserted at specific acupuncture points tailored to each patient's condition and needs."}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/reservasi"
                  className="btn-pill-dark font-bold text-sm px-8 py-4 shadow-warm group inline-flex items-center gap-2"
                >
                  {language === "id" ? "Reservasi Sekarang" : "Reserve Now"}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={`https://wa.me/6287700303645?text=${encodeURIComponent(language === "id" ? "Halo Lotus, mau tanya tentang layanan Akupunktur" : "Hello Lotus, I'd like to ask about Acupuncture therapy")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-outline font-bold text-sm px-8 py-4 inline-flex items-center gap-2"
                >
                  <MessageCircle size={16} className="text-forest" />
                  {language === "id" ? "Tanya Admin" : "Ask Admin"}
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
              <div className="absolute top-10 left-10 w-4/5 h-4/5 bg-blush-soft rounded-[3rem] -rotate-3" />
              <div className="absolute top-0 right-4 w-[65%] aspect-[3/4] rounded-3xl overflow-hidden shadow-warm-lg img-zoom z-10">
                <Image
                  src="/images/lotus_treatment_body_back_acupuncture_female.jpg"
                  alt="Sesi Terapi Akupunktur Tubuh"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={85}
                />
              </div>
              <div className="absolute bottom-4 left-4 w-[45%] aspect-square rounded-3xl overflow-hidden shadow-warm-xl border-4 border-white img-zoom z-20">
                <Image
                  src="/images/lotus_treatment_body_acupuncture_macro_needle.jpg"
                  alt="Detail Jarum Akupunktur Steril"
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
      <Marquee bg="blush" textClass="text-white" speed="slow" />

      {/* Mechanism Section: Bagaimana Cara Kerja Akupunktur? */}
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
                src="/images/lotus_tools_acupuncture_needles_steel_jar.jpg"
                alt="Jarum Steril Sekali Pakai Lotus Semarang"
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
                {language === "id" ? "Cara Kerja Terapi" : "How It Works"}
              </span>
              <h2 className="font-display font-black text-espresso text-3xl md:text-5xl leading-tight tracking-tight">
                {language === "id" ? "Bagaimana Cara Kerja Akupunktur?" : "How Does Acupuncture Work?"}
              </h2>
              <div className="flex flex-col gap-6 mt-4">
                {mechanisms.map((mech, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blush-soft text-blush-deep flex items-center justify-center font-display font-black text-lg flex-shrink-0 border border-blush/20">
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

      {/* Applications Grid: Kasus & Penanganan */}
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
              {language === "id" ? "Kasus & Penanganan" : "Cases & Treatments"}
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight">
              {language === "id" ? "Bidang Aplikasi Akupunktur" : "Acupuncture Therapy Applications"}
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
