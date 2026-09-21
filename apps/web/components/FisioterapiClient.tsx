"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";
import { ArrowRight, MessageCircle } from "lucide-react";

export function FisioterapiClient() {
  const { t, language } = useLanguage();

  const applications = language === "id" ? [
    {
      title: "Nyeri & Gangguan Muskuloskeletal",
      desc: "Membantu penanganan keluhan fisik seperti nyeri leher, bahu, punggung, pinggang, hingga sendi lutut.",
      img: "/images/lotus_treatment_hydro_adult_dumbbell_therapy.jpg",
      bg: "bg-sage-soft/80 border border-sage/20",
    },
    {
      title: "Rehabilitasi Cedera & Pascaoperasi",
      desc: "Program penguatan bertahap untuk memulihkan fungsi gerak setelah cedera fisik atau tindakan medis.",
      img: "/images/lotus_treatment_body_arm_therapist_interaction.jpg",
      bg: "bg-hydro-soft/80 border border-hydro/20",
    },
    {
      title: "Ibu Hamil & Tumbuh Kembang Anak",
      desc: "Latihan relaksasi dan postur untuk kenyamanan ibu hamil, serta stimulasi motorik untuk anak-anak.",
      img: "/images/lotus_treatment_baby_group_foot_hijab.webp",
      bg: "bg-blush-soft/80 border border-blush/20",
    },
    {
      title: "Koreksi Postur & Kebugaran Gerak",
      desc: "Melatih kembali pola postur tubuh yang ergonomis bagi pekerja dan lansia agar tetap aktif dan bebas cedera.",
      img: "/images/lotus_treatment_facial_portrait_patient_elderly.jpg",
      bg: "bg-sand-soft/80 border border-sand/30",
    },
  ] : [
    {
      title: "Musculoskeletal Pain & Mobility Disorders",
      desc: "Assists in relieving neck, shoulder, upper back, lower back, and knee joint pains and stiffness.",
      img: "/images/lotus_treatment_hydro_adult_dumbbell_therapy.jpg",
      bg: "bg-sage-soft/80 border border-sage/20",
    },
    {
      title: "Injury & Post-Surgical Rehabilitation",
      desc: "Step-by-step strengthening program to restore functional movement following sports injuries or medical procedures.",
      img: "/images/lotus_treatment_body_arm_therapist_interaction.jpg",
      bg: "bg-hydro-soft/80 border border-hydro/20",
    },
    {
      title: "Prenatal & Child Growth Development",
      desc: "Gentle mobility and posture exercises for pregnant mothers, alongside pediatric motor development stimulation for children.",
      img: "/images/lotus_treatment_baby_group_foot_hijab.webp",
      bg: "bg-blush-soft/80 border border-blush/20",
    },
    {
      title: "Posture Correction & Active Living",
      desc: "Re-educating ergonomic postural patterns for desk workers and active seniors to move freely without recurrent strain.",
      img: "/images/lotus_treatment_facial_portrait_patient_elderly.jpg",
      bg: "bg-sand-soft/80 border border-sand/30",
    },
  ];

  const mechanisms = language === "id" ? [
    {
      num: "01",
      title: "Asesmen Kondisi Fisik",
      desc: "Fisioterapis melakukan pemeriksaan untuk memahami kondisi dan keterbatasan gerak pasien, termasuk rentang gerak, kekuatan otot, postur, keseimbangan, dan fungsi gerak sesuai kebutuhan.",
    },
    {
      num: "02",
      title: "Terapi dan Latihan Gerak",
      desc: "Berdasarkan hasil pemeriksaan, fisioterapis menentukan pendekatan terapi yang sesuai, seperti terapi manual, latihan gerak, penguatan otot, latihan keseimbangan, serta penggunaan modalitas fisioterapi bila diperlukan.",
    },
    {
      num: "03",
      title: "Pendekatan yang Disesuaikan",
      desc: "Setiap program fisioterapi disusun berdasarkan kondisi dan tujuan terapi masing-masing pasien, kemudian dievaluasi sesuai perkembangan selama proses perawatan.",
    },
  ] : [
    {
      num: "01",
      title: "Physical Condition Assessment",
      desc: "Our physiotherapist conducts a thorough examination to understand movement limitations, range of motion, muscle strength, posture, and balance.",
    },
    {
      num: "02",
      title: "Targeted Therapy & Movement Exercise",
      desc: "Based on assessment results, appropriate therapies are delivered, including manual therapy, muscle re-education, balance training, and therapeutic modalities when indicated.",
    },
    {
      num: "03",
      title: "Tailored Individualized Plan",
      desc: "Every physiotherapy regimen is custom designed around personal clinical conditions and goals, with continuous evaluations throughout recovery.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-wellness">
          <div className="grid gap-12 items-center lg:grid-cols-12 lg:gap-16">
            
            {/* Left Content */}
            <motion.div
              className="flex flex-col gap-6 lg:col-span-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div>
                <span className="inline-block mb-4 text-xs font-bold tracking-wider uppercase border tag-pill bg-sage-soft text-forest border-sage/20">
                  {language === "id" ? "Layanan Terapi" : "Therapy Service"}
                </span>
                <h1 className="font-display font-black text-espresso text-5xl lg:text-7.5xl leading-[1.05] tracking-tight">
                  Fisioterapi
                </h1>
              </div>
              <p className="max-w-lg font-sans text-lg leading-relaxed text-espresso/70">
                {language === "id"
                  ? "Fisioterapi merupakan tindakan yang bertujuan untuk memelihara, memulihkan, memaksimalkan fungsi fisik secara keseluruhan. Fisioterapi dapat diterapkan pada seluruh rentang usia dengan berbagai tujuan mulai dari memaksimalkan tumbuh kembang anak, persiapan persalinan, menjaga postur tubuh, hingga pencegahan / pemulihan cedera."
                  : "Physiotherapy aims to preserve, restore, and maximize physical movement and function across all stages of life—from child motor development and pregnancy preparation to postural health and injury recovery."}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/reservasi"
                  className="inline-flex gap-2 items-center px-8 py-4 text-sm font-bold btn-pill-dark shadow-warm group"
                >
                  {language === "id" ? "Reservasi Sekarang" : "Reserve Now"}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={`https://wa.me/6287700303645?text=${encodeURIComponent(language === "id" ? "Halo Lotus, mau tanya tentang layanan Fisioterapi" : "Hello Lotus, I'd like to ask about Physiotherapy")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex gap-2 items-center px-8 py-4 text-sm font-bold btn-pill-outline"
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
              <div className="absolute top-10 left-10 w-4/5 h-4/5 bg-sage-soft rounded-[3rem] -rotate-3" />
              <div className="absolute top-0 right-4 w-[65%] aspect-[3/4] rounded-3xl overflow-hidden shadow-warm-lg img-zoom z-10">
                <Image
                  src="/images/lotus_treatment_body_arm_therapist_interaction.jpg"
                  alt="Sesi Terapi Manual Fisioterapi"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={85}
                />
              </div>
              <div className="absolute bottom-4 left-4 w-[45%] aspect-square rounded-3xl overflow-hidden shadow-warm-xl border-4 border-white img-zoom z-20">
                <Image
                  src="/images/1669852561694.jpg"
                  alt="Sesi Latihan Fisioterapi"
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

      {/* Mechanism Section: Bagaimana Cara Kerja Fisioterapi? */}
      <section className="bg-white section-pad">
        <div className="container-wellness">
          <div className="grid gap-12 items-center lg:grid-cols-12 lg:gap-20">
            <motion.div
              className="lg:col-span-6 relative aspect-[4/3] rounded-[3.5rem] overflow-hidden shadow-warm-lg img-zoom"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/images/lotus_treatment_body_arm_therapist_interaction.jpg"
                alt="Fisioterapis Melakukan Pemeriksaan Gerak"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
            </motion.div>
            <motion.div
              className="flex flex-col gap-6 lg:col-span-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <span className="self-start text-xs font-bold tracking-wider uppercase tag-pill bg-espresso/5 text-espresso/80">
                {language === "id" ? "Cara Kerja Terapi" : "How It Works"}
              </span>
              <h2 className="text-3xl font-black tracking-tight leading-tight font-display text-espresso md:text-5xl">
                {language === "id" ? "Bagaimana Cara Kerja Fisioterapi?" : "How Does Physiotherapy Work?"}
              </h2>
              <div className="flex flex-col gap-6 mt-4">
                {mechanisms.map((mech, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-shrink-0 justify-center items-center w-12 h-12 text-lg font-black rounded-2xl border bg-sage-soft text-forest font-display border-sage/20">
                      {mech.num}
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-bold font-display text-espresso">
                        {mech.title}
                      </h3>
                      <p className="font-sans text-sm leading-relaxed text-espresso/65">
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
      <section className="border-t section-pad bg-cream-warm/40 border-espresso/5">
        <div className="container-wellness">
          <motion.div
            className="mx-auto mb-16 max-w-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-4 text-xs font-bold tracking-wider uppercase tag-pill bg-espresso/5 text-espresso/70">
              {language === "id" ? "Kasus & Penanganan" : "Cases & Treatments"}
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight">
              {language === "id" ? "Bidang Aplikasi Fisioterapi" : "Physiotherapy Applications"}
            </h2>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
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
                    <h3 className="text-xl font-black leading-tight font-display text-espresso lg:text-2xl">
                      {app.title}
                    </h3>
                    <p className="font-sans text-xs leading-relaxed text-espresso/65 lg:text-sm">
                      {app.desc}
                    </p>
                  </div>
                  <div className="overflow-hidden relative w-full rounded-2xl aspect-square shadow-warm img-zoom">
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
          <div className="mt-12 text-center">
            <Link
              href="/reservasi"
              className="inline-flex gap-2 items-center px-8 py-4 text-sm font-bold btn-pill-dark shadow-warm"
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
