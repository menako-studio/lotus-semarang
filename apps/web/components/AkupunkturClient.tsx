"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { Check, ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export function AkupunkturClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const applications = [
    {
      title: "Anak-Anak (Tumbuh Kembang)",
      desc: "Menstimulasi tumbuh kembang motorik, meningkatkan konsentrasi belajar, merelaksasi stabilitas emosi, serta meningkatkan daya tahan tubuh alami.",
      img: "/images/lotus_treatment_baby_model_high_angle.webp",
      bg: "bg-peach-soft",
    },
    {
      title: "Dewasa & Lansia",
      desc: "Efektif untuk meredakan nyeri sendi, vertigo, gerd, hipertensi, saraf kejepit, migrain, pemulihan stroke, hingga mengurangi mual akibat kemoterapi.",
      img: "/images/lotus_treatment_body_moxibustion_smoke_therapy.jpg",
      bg: "bg-sage-soft",
    },
    {
      title: "Reproduksi & Hormonal",
      desc: "Menyeimbangkan hormon reproduksi untuk mendukung program kehamilan (promil) alami dan mempersiapkan program bayi tabung (IVF).",
      img: "/images/lotus_consultation_doctor_patient_model_hijab.jpg",
      bg: "bg-blush-soft",
    },
    {
      title: "Slimming & Estetika Wajah",
      desc: "Terapi akupunktur kecantikan wajah untuk merangsang kolagen, mengencangkan kulit, menyamarkan kerutan, dan meredakan jerawat.",
      img: "/images/lotus_treatment_facial_portrait_patient_closed_eyes.jpg",
      bg: "bg-sand-soft",
    },
  ];

  const faqs = [
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
                  Layanan Medis & Estetika
                </span>
                <h1 className="font-display font-black text-espresso text-5xl lg:text-7.5xl leading-[1.05] tracking-tight">
                  Akupunktur<br />
                  <span className="text-terra">Medis Privat.</span>
                </h1>
              </div>
              <p className="font-sans text-espresso/70 text-lg leading-relaxed max-w-lg">
                Kembalikan keseimbangan aliran energi tubuh Anda secara ilmiah. Kami menggabungkan stimulasi saraf modern dengan jarum steril sekali pakai untuk pemulihan nyeri, kesehatan hormonal, dan kecantikan kulit wajah Anda.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://wa.me/6287700303645?text=Halo%20Lotus%20Semarang%2C%20saya%20tertarik%20dengan%20layanan%20Akupunktur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-dark font-bold text-sm px-8 py-4"
                >
                  Pesan Sesi Akupunktur
                </a>
                <a
                  href="https://wa.me/6287700303645?text=Halo%20Lotus%2C%20mau%20tanya%20dulu%20tentang%20Akupunktur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-outline font-bold text-sm px-8 py-4"
                >
                  Tanya Dokter
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
                Sains di Balik Terapi
              </span>
              <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight tracking-tight">
                Bagaimana Akupunktur Memulihkan Tubuhmu?
              </h2>
              <div className="flex flex-col gap-6 mt-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-peach-soft text-terra flex items-center justify-center font-display font-black text-lg flex-shrink-0">
                    01
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-espresso text-lg mb-1">Membuka Aliran Oksigen</h3>
                    <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                      Penusukan titik meridian memicu sirkulasi darah lokal secara instan, mengalirkan oksigen dan nutrisi untuk memperbaiki sel-sel tubuh yang meradang.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sage-soft text-forest flex items-center justify-center font-display font-black text-lg flex-shrink-0">
                    02
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-espresso text-lg mb-1">Stimulasi Pelepasan Endorfin</h3>
                    <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                      Stimulasi jarum memberi sinyal pada otak untuk melepaskan hormon endorfin dan enkefalin, pereda nyeri alami tubuh yang efektif meredakan nyeri fisik dan stres mental.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blush-soft text-espresso-600 flex items-center justify-center font-display font-black text-lg flex-shrink-0">
                    03
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-espresso text-lg mb-1">Regulasi Sistem Saraf & Hormon</h3>
                    <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                      Membantu menyelaraskan kembali sistem saraf otonom Anda, menurunkan kadar hormon stres kortisol, serta memperbaiki keseimbangan hormon reproduksi tubuh.
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
              Kasus & Penanganan
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight">
              Bidang Aplikasi Terapi Akupunktur
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
              Prosedur Tindakan
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight">
              Bagaimana Sesi Terapi Anda Berlangsung?
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
              <span className="font-display font-black text-terra text-lg">01. Diagnosa Holistik</span>
              <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                Kami melakukan konsultasi personal meliputi anamnesa keluhan, palpasi denyut nadi, pemeriksaan visual lidah, serta keselarasan 5 unsur organ tubuh Anda.
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
              <span className="font-display font-black text-terra text-lg">02. Penjaruman & Stimulasi</span>
              <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                Jarum steril berukuran mikro dimasukkan dengan lembut ke titik terapi. Dapat dikombinasikan dengan stimulasi elektrik elektro-akupunktur atau terapi moxibustion (pembakaran moxa).
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
              <span className="font-display font-black text-terra text-lg">03. Rencana Tindak Lanjut</span>
              <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                Jarum dilepas secara steril setelah 20-30 menit. Terapis memberikan anjuran gaya hidup, asupan nutrisi penyeimbang, serta menjadwalkan sesi evaluasi lanjutan.
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
              Pertanyaan Umum
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5xl leading-tight">
              Hal-Hal yang Sering Ditanyakan
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
