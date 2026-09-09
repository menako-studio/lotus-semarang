"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { useLanguage } from "@/components/LanguageContext";
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from "lucide-react";

export function AkupunkturClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t, language } = useLanguage();

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const applications = language === "id" ? [
    {
      title: "Anak-Anak (Tumbuh Kembang)",
      desc: "Menstimulasi tumbuh kembang motorik, meningkatkan konsentrasi belajar, merelaksasi stabilitas emosi, serta meningkatkan daya tahan tubuh alami.",
      img: "/images/lotus_treatment_baby_model_high_angle.webp",
      bg: "bg-blush-soft/80 border border-blush/20",
    },
    {
      title: "Dewasa & Lansia",
      desc: "Efektif untuk meredakan nyeri sendi, vertigo, gerd, hipertensi, saraf kejepit, migrain, pemulihan stroke, hingga mengurangi mual akibat kemoterapi.",
      img: "/images/lotus_treatment_facial_portrait_patient_elderly.jpg",
      bg: "bg-sage-soft/80 border border-sage/20",
    },
    {
      title: "Reproduksi & Hormonal",
      desc: "Menyeimbangkan hormon reproduksi untuk mendukung program kehamilan (promil) alami dan mempersiapkan program bayi tabung (IVF).",
      img: "/images/lotus_treatment_body_abdomen_male_patient.jpg",
      bg: "bg-peach-soft/80 border border-peach/20",
    },
    {
      title: "Slimming & Estetika Wajah",
      desc: "Terapi akupunktur kecantikan wajah untuk merangsang kolagen, mengencangkan kulit, menyamarkan kerutan, dan meredakan jerawat.",
      img: "/images/lotus_treatment_facial_portrait_patient_closed_eyes.jpg",
      bg: "bg-sand-soft/80 border border-sand/30",
    },
  ] : [
    {
      title: "Children (Growth & Development)",
      desc: "Stimulates motor growth and development, improves concentration, relaxes emotional stability, and boosts natural immunity.",
      img: "/images/lotus_treatment_baby_model_high_angle.webp",
      bg: "bg-blush-soft/80 border border-blush/20",
    },
    {
      title: "Adults & Seniors",
      desc: "Effective for relieving joint pain, vertigo, GERD, hypertension, pinched nerves, migraines, stroke recovery, and reducing chemotherapy nausea.",
      img: "/images/lotus_treatment_facial_portrait_patient_elderly.jpg",
      bg: "bg-sage-soft/80 border border-sage/20",
    },
    {
      title: "Reproductive & Hormonal",
      desc: "Balances reproductive hormones to support natural pregnancy programs (promil) and prepare for in vitro fertilization (IVF).",
      img: "/images/lotus_treatment_body_abdomen_male_patient.jpg",
      bg: "bg-peach-soft/80 border border-peach/20",
    },
    {
      title: "Slimming & Facial Aesthetics",
      desc: "Facial beauty acupuncture therapy to stimulate collagen, tighten skin, smooth wrinkles, and clear acne.",
      img: "/images/lotus_treatment_facial_portrait_patient_closed_eyes.jpg",
      bg: "bg-sand-soft/80 border border-sand/30",
    },
  ];

  const faqs = language === "id" ? [
    {
      q: "Apakah terapi akupunktur terasa sakit?",
      a: "Sebagian besar pasien merasakan sensasi gigitan semut kecil yang sangat minim saat jarum dimasukkan. Jarum yang digunakan adalah disposable sterile needle kualitas premium yang berukuran sangat tipis (jauh lebih kecil dari jarum suntik biasa).",
    },
    {
      q: "Berapa sesi terapi yang saya butuhkan?",
      a: "Tergantung pada keluhan dan respon tubuh Anda. Untuk keluhan akut, biasanya 4-6 sesi sudah terasa perubahannya. Untuk keluhan kronis atau program kehamilan (promil), disarankan melakukan paket perawatan 10-12 sesi secara rutin.",
    },
    {
      q: "Apakah aman bagi ibu hamil dan anak-anak?",
      a: "Sangat aman. Terapis kami bersertifikat medis resmi dan memahami titik-titik meridian mana saja yang aman untuk menstimulasi tumbuh kembang anak-anak serta titik kontraindikasi bagi ibu hamil.",
    },
    {
      q: "Apa yang harus saya persiapkan sebelum sesi terapi?",
      a: "Kenakan pakaian yang longgar dan nyaman (agar mudah mengakses titik lengan/kaki), pastikan Anda sudah makan sekitar 1-2 jam sebelum terapi, dan hindari konsumsi kafein berlebih sebelum sesi dimulai.",
    },
  ] : [
    {
      q: "Does acupuncture therapy hurt?",
      a: "Most patients feel a very minor sensation like a small ant bite when the needle is inserted. The needles used are premium quality disposable sterile needles that are extremely thin (much smaller than standard injection needles).",
    },
    {
      q: "How many therapy sessions will I need?",
      a: "It depends on your symptoms and body response. For acute complaints, changes are usually felt in 4-6 sessions. For chronic conditions or fertility programs (promil), a package of 10-12 regular sessions is recommended.",
    },
    {
      q: "Is it safe for pregnant women and children?",
      a: "Extremely safe. Our therapists are officially certified medical practitioners who understand which meridian points are safe for stimulating child growth and development, as well as contraindication points for pregnant mothers.",
    },
    {
      q: "What should I prepare before a therapy session?",
      a: "Wear loose and comfortable clothing (for easy access to arm/leg points), ensure you have eaten about 1-2 hours before therapy, and avoid excessive caffeine intake before the session.",
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
                  {t("akupunkturPage.eyebrow")}
                </span>
                <h1 className="font-display font-black text-espresso text-5xl lg:text-7.5xl leading-[1.05] tracking-tight">
                  {language === "id" ? "Akupunktur" : "Medical"}<br />
                  <span className="text-blush">{language === "id" ? "Medis Privat." : "Private Acupuncture."}</span>
                </h1>
              </div>
              <p className="font-sans text-espresso/70 text-lg leading-relaxed max-w-lg">
                {language === "id" 
                  ? "Kembalikan keseimbangan aliran energi tubuh Anda secara ilmiah. Kami menggabungkan stimulasi saraf modern dengan jarum steril sekali pakai untuk pemulihan nyeri, kesehatan hormonal, dan kecantikan kulit wajah Anda."
                  : "Restore the balance of your body's energy flow scientifically. We combine modern nerve stimulation with single-use sterile needles for pain relief, hormonal health, and facial skin aesthetics."}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={`https://wa.me/6287700303645?text=${encodeURIComponent(t("akupunkturPage.whatsAppPrompt"))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-dark font-bold text-sm px-8 py-4 shadow-warm group gap-2"
                >
                  {t("akupunkturPage.cta")}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={`https://wa.me/6287700303645?text=${encodeURIComponent(language === "id" ? "Halo Lotus, mau tanya dulu tentang Akupunktur" : "Hello Lotus, I'd like to ask about Acupuncture first")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-outline font-bold text-sm px-8 py-4"
                >
                  {language === "id" ? "Tanya Dokter" : "Ask Doctor"}
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

      {/* Science Section */}
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
                {language === "id" ? "Sains di Balik Terapi" : "Science Behind Therapy"}
              </span>
              <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight tracking-tight">
                {language === "id" ? "Bagaimana Akupunktur Memulihkan Tubuhmu?" : "How Does Acupuncture Heal Your Body?"}
              </h2>
              <div className="flex flex-col gap-6 mt-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blush-soft text-blush-deep flex items-center justify-center font-display font-black text-lg flex-shrink-0 border border-blush/20">
                    01
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-espresso text-lg mb-1">
                      {language === "id" ? "Membuka Aliran Oksigen" : "Unblocking Oxygen Flow"}
                    </h3>
                    <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                      {language === "id" 
                        ? "Penusukan titik meridian memicu sirkulasi darah lokal secara instan, mengalirkan oksigen dan nutrisi untuk memperbaiki sel-sel tubuh yang meradang."
                        : "Needling meridian points triggers local blood circulation instantly, delivering oxygen and nutrients to repair inflamed body cells."}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sage-soft text-forest flex items-center justify-center font-display font-black text-lg flex-shrink-0 border border-sage/20">
                    02
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-espresso text-lg mb-1">
                      {language === "id" ? "Stimulasi Pelepasan Endorfin" : "Stimulating Endorphin Release"}
                    </h3>
                    <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                      {language === "id"
                        ? "Stimulasi jarum memberi sinyal pada otak untuk melepaskan hormon endorfin dan enkefalin, pereda nyeri alami tubuh yang efektif meredakan nyeri fisik dan stres mental."
                        : "Needle stimulation signals the brain to release endorphins and enkephalins, the body's natural painkillers that effectively relieve physical pain and mental stress."}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sand-soft text-espresso flex items-center justify-center font-display font-black text-lg flex-shrink-0 border border-sand/30">
                    03
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-espresso text-lg mb-1">
                      {language === "id" ? "Regulasi Sistem Saraf & Hormon" : "Regulating Nervous System & Hormones"}
                    </h3>
                    <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                      {language === "id"
                        ? "Membantu menyelaraskan kembali sistem saraf otonom Anda, menurunkan kadar hormon stres kortisol, serta memperbaiki keseimbangan hormon reproduksi tubuh."
                        : "Helps realign your autonomic nervous system, lowers cortisol stress hormone levels, and improves reproductive hormone balance."}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
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
              {language === "id" ? "Kasus & Penanganan" : "Cases & Treatments"}
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight">
              {language === "id" ? "Bidang Aplikasi Terapi Akupunktur" : "Acupuncture Therapy Application Areas"}
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
            <span className="tag-pill bg-blush/20 text-blush-deep font-bold text-xs uppercase tracking-wider mb-4 inline-block border border-blush/20">
              {language === "id" ? "Prosedur Tindakan" : "Treatment Procedure"}
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight">
              {language === "id" ? "Bagaimana Sesi Terapi Anda Berlangsung?" : "How Does Your Therapy Session Go?"}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                img: "/images/lotus_consultation_doctor_patient_model_hijab.jpg",
                alt: "Konsultasi Diagnosa Lidah & Nadi",
                step: language === "id" ? "01. Diagnosa Holistik" : "01. Holistic Diagnosis",
                desc: language === "id"
                  ? "Kami melakukan konsultasi personal meliputi anamnesa keluhan, palpasi denyut nadi, pemeriksaan visual lidah, serta keselarasan 5 unsur organ tubuh Anda."
                  : "We conduct a personal consultation covering case history, pulse palpation, visual tongue check, and the harmony of your body's 5 organ elements."
              },
              {
                img: "/images/lotus_equipment_kwd808_electro_acupuncture.jpg",
                alt: "Sesi Penjaruman Aman & Steril",
                step: language === "id" ? "02. Penjaruman & Stimulasi" : "02. Needling & Stimulation",
                desc: language === "id"
                  ? "Jarum steril berukuran mikro dimasukkan dengan lembut ke titik terapi. Dapat dikombinasikan dengan stimulasi elektrik elektro-akupunktur atau terapi moxibustion (pembakaran moxa)."
                  : "Micro-sized sterile needles are gently inserted into therapy points. Can be combined with electro-acupuncture electrical stimulation or moxibustion therapy."
              },
              {
                img: "/images/lotus_treatment_body_arm_therapist_interaction.jpg",
                alt: "Edukasi Pasca Terapi",
                step: language === "id" ? "03. Rencana Tindak Lanjut" : "03. Follow-Up Plan",
                desc: language === "id"
                  ? "Jarum dilepas secara steril setelah 20-30 menit. Terapis memberikan anjuran gaya hidup, asupan nutrisi penyeimbang, serta menjadwalkan sesi evaluasi lanjutan."
                  : "Needles are sterilely removed after 20-30 minutes. The therapist advises on lifestyle, balancing nutritional intake, and schedules follow-up evaluations."
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
                <span className="font-display font-black text-blush-deep text-lg">
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
