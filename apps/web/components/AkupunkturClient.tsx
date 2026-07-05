"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { useLanguage } from "@/components/LanguageContext";
import { Check, ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

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
      bg: "bg-peach-soft",
    },
    {
      title: "Dewasa & Lansia",
      desc: "Efektif untuk meredakan nyeri sendi, vertigo, gerd, hipertensi, saraf kejepit, migrain, pemulihan stroke, hingga mengurangi mual akibat kemoterapi.",
      img: "/images/lotus_treatment_facial_portrait_patient_elderly.jpg",
      bg: "bg-sage-soft",
    },
    {
      title: "Reproduksi & Hormonal",
      desc: "Menyeimbangkan hormon reproduksi untuk mendukung program kehamilan (promil) alami dan mempersiapkan program bayi tabung (IVF).",
      img: "/images/lotus_treatment_body_abdomen_male_patient.jpg",
      bg: "bg-blush-soft",
    },
    {
      title: "Slimming & Estetika Wajah",
      desc: "Terapi akupunktur kecantikan wajah untuk merangsang kolagen, mengencangkan kulit, menyamarkan kerutan, dan meredakan jerawat.",
      img: "/images/lotus_treatment_facial_portrait_patient_closed_eyes.jpg",
      bg: "bg-sand-soft",
    },
  ] : [
    {
      title: "Children (Growth & Development)",
      desc: "Stimulates motor growth and development, improves concentration, relaxes emotional stability, and boosts natural immunity.",
      img: "/images/lotus_treatment_baby_model_high_angle.webp",
      bg: "bg-peach-soft",
    },
    {
      title: "Adults & Seniors",
      desc: "Effective for relieving joint pain, vertigo, GERD, hypertension, pinched nerves, migraines, stroke recovery, and reducing chemotherapy nausea.",
      img: "/images/lotus_treatment_facial_portrait_patient_elderly.jpg",
      bg: "bg-sage-soft",
    },
    {
      title: "Reproductive & Hormonal",
      desc: "Balances reproductive hormones to support natural pregnancy programs (promil) and prepare for in vitro fertilization (IVF).",
      img: "/images/lotus_treatment_body_abdomen_male_patient.jpg",
      bg: "bg-blush-soft",
    },
    {
      title: "Slimming & Facial Aesthetics",
      desc: "Facial beauty acupuncture therapy to stimulate collagen, tighten skin, smooth wrinkles, and clear acne.",
      img: "/images/lotus_treatment_facial_portrait_patient_closed_eyes.jpg",
      bg: "bg-sand-soft",
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
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div>
                <span className="tag-pill bg-peach/40 text-terra font-bold text-xs uppercase tracking-wider mb-4 inline-block">
                  {t("akupunkturPage.eyebrow")}
                </span>
                <h1 className="font-display font-black text-espresso text-5xl lg:text-7.5xl leading-[1.05] tracking-tight">
                  {language === "id" ? "Akupunktur" : "Medical"}<br />
                  <span className="text-terra">{language === "id" ? "Medis Privat." : "Private Acupuncture."}</span>
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
                  className="btn-pill-dark font-bold text-sm px-8 py-4"
                >
                  {t("akupunkturPage.cta")}
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
            </div>

            {/* Right: Overlapping Editorial Images */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] lg:min-h-[500px]">
              <div className="absolute top-10 left-10 w-4/5 h-4/5 bg-peach-soft rounded-[3rem] -rotate-3" />
              <div className="absolute top-0 right-4 w-[65%] aspect-[3/4] rounded-3xl overflow-hidden shadow-warm-lg img-zoom z-10">
                <Image
                  src="/images/lotus_treatment_body_back_acupuncture_female.jpg"
                  alt="Sesi Terapi Akupunktur Tubuh"
                  fill
                  className="object-cover"
                  priority
                  sizes="40vw"
                  quality={85}
                />
              </div>
              <div className="absolute bottom-4 left-4 w-[45%] aspect-square rounded-3xl overflow-hidden shadow-warm-xl border-4 border-white img-zoom z-20">
                <Image
                  src="/images/lotus_treatment_body_acupuncture_macro_needle.jpg"
                  alt="Detail Jarum Akupunktur Steril"
                  fill
                  className="object-cover"
                  sizes="25vw"
                  quality={80}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Marquee Accent */}
      <Marquee bg="peach" textClass="text-espresso" speed="slow" />

      {/* Science Section */}
      <section className="section-pad bg-white">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-[3.5rem] overflow-hidden shadow-warm-lg img-zoom">
              <Image
                src="/images/lotus_tools_acupuncture_needles_steel_jar.jpg"
                alt="Jarum Steril Sekali Pakai Lotus Semarang"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
            </div>
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="tag-pill bg-espresso/5 text-espresso/80 font-bold text-xs uppercase tracking-wider self-start">
                {language === "id" ? "Sains di Balik Terapi" : "Science Behind Therapy"}
              </span>
              <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight tracking-tight">
                {language === "id" ? "Bagaimana Akupunktur Memulihkan Tubuhmu?" : "How Does Acupuncture Heal Your Body?"}
              </h2>
              <div className="flex flex-col gap-6 mt-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-peach-soft text-terra flex items-center justify-center font-display font-black text-lg flex-shrink-0">
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
                  <div className="w-12 h-12 rounded-2xl bg-sage-soft text-forest flex items-center justify-center font-display font-black text-lg flex-shrink-0">
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
                  <div className="w-12 h-12 rounded-2xl bg-blush-soft text-espresso-600 flex items-center justify-center font-display font-black text-lg flex-shrink-0">
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
            </div>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="section-pad bg-sand-soft/30 border-y border-espresso/5">
        <div className="container-wellness">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="tag-pill bg-espresso/5 text-espresso/70 font-bold text-xs uppercase tracking-wider mb-4 inline-block">
              {language === "id" ? "Kasus & Penanganan" : "Cases & Treatments"}
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight">
              {language === "id" ? "Bidang Aplikasi Terapi Akupunktur" : "Acupuncture Therapy Application Areas"}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {applications.map((app, i) => (
              <div
                key={i}
                className={`${app.bg} rounded-[2.5rem] p-8 lg:p-10 flex flex-col gap-6 shadow-warm hover:-translate-y-1 transition-all duration-300`}
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
                      sizes="20vw"
                      quality={80}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section-pad bg-white">
        <div className="container-wellness">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="tag-pill bg-peach/40 text-terra font-bold text-xs uppercase tracking-wider mb-4 inline-block">
              {language === "id" ? "Prosedur Tindakan" : "Treatment Procedure"}
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight">
              {language === "id" ? "Bagaimana Sesi Terapi Anda Berlangsung?" : "How Does Your Therapy Session Go?"}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-warm img-zoom mb-2">
                <Image
                  src="/images/lotus_consultation_doctor_patient_model_hijab.jpg"
                  alt="Konsultasi Diagnosa Lidah & Nadi"
                  fill
                  className="object-cover"
                  sizes="30vw"
                  quality={80}
                />
              </div>
              <span className="font-display font-black text-terra text-lg">
                {language === "id" ? "01. Diagnosa Holistik" : "01. Holistic Diagnosis"}
              </span>
              <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                {language === "id"
                  ? "Kami melakukan konsultasi personal meliputi anamnesa keluhan, palpasi denyut nadi, pemeriksaan visual lidah, serta keselarasan 5 unsur organ tubuh Anda."
                  : "We conduct a personal consultation covering case history, pulse palpation, visual tongue check, and the harmony of your body's 5 organ elements."}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-warm img-zoom mb-2">
                <Image
                  src="/images/lotus_equipment_kwd808_electro_acupuncture.jpg"
                  alt="Sesi Penjaruman Aman & Steril"
                  fill
                  className="object-cover"
                  sizes="30vw"
                  quality={80}
                />
              </div>
              <span className="font-display font-black text-terra text-lg">
                {language === "id" ? "02. Penjaruman & Stimulasi" : "02. Needling & Stimulation"}
              </span>
              <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                {language === "id"
                  ? "Jarum steril berukuran mikro dimasukkan dengan lembut ke titik terapi. Dapat dikombinasikan dengan stimulasi elektrik elektro-akupunktur atau terapi moxibustion (pembakaran moxa)."
                  : "Micro-sized sterile needles are gently inserted into therapy points. Can be combined with electro-acupuncture electrical stimulation or moxibustion therapy."}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-warm img-zoom mb-2">
                <Image
                  src="/images/lotus_treatment_body_arm_therapist_interaction.jpg"
                  alt="Edukasi Pasca Terapi"
                  fill
                  className="object-cover"
                  sizes="30vw"
                  quality={80}
                />
              </div>
              <span className="font-display font-black text-terra text-lg">
                {language === "id" ? "03. Rencana Tindak Lanjut" : "03. Follow-Up Plan"}
              </span>
              <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                {language === "id"
                  ? "Jarum dilepas secara steril setelah 20-30 menit. Terapis memberikan anjuran gaya hidup, asupan nutrisi penyeimbang, serta menjadwalkan sesi evaluasi lanjutan."
                  : "Needles are sterilely removed after 20-30 minutes. The therapist advises on lifestyle, balancing nutritional intake, and schedules follow-up evaluations."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-pad bg-peach-soft/20 border-t border-espresso/5">
        <div className="container-wellness max-w-4xl">
          <div className="text-center mb-12">
            <span className="tag-pill bg-espresso/5 text-espresso/70 font-bold text-xs uppercase tracking-wider mb-4 inline-block">
              {language === "id" ? "Pertanyaan Umum" : "Frequently Asked Questions"}
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5xl leading-tight">
              {language === "id" ? "Hal-Hal yang Sering Ditanyakan" : "Common Questions Asked"}
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-espresso/5 shadow-warm overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-display font-bold text-espresso hover:text-terra text-base md:text-lg"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-terra" />
                    {faq.q}
                  </span>
                  {openFaq === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-1 font-sans text-espresso/65 text-sm leading-relaxed border-t border-espresso/5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
