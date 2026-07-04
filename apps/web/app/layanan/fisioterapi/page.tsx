"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { Check } from "lucide-react";

export default function FisioterapiPage() {
  const treatments = [
    { title: "Nyeri & Persendian", desc: "Mengatasi keluhan pada area pinggang, bahu, leher, lutut, dan area persendian lainnya." },
    { title: "Kelainan Tulang Belakang", desc: "Perawatan terapeutik khusus untuk masalah postur dan kelainan kelengkungan tulang belakang." },
    { title: "Rehabilitasi Stroke & Pasca Operasi", desc: "Program terstruktur untuk melatih kembali gangguan motorik, keseimbangan, serta mempercepat pemulihan fisik." },
    { title: "Kandungan & Tumbuh Kembang", desc: "Membimbing latihan fisik selama kehamilan, persiapan persalinan, serta stimulasi motorik tumbuh kembang anak." },
  ];

  const tools = [
    "Manual Therapy",
    "Neuromuskular Tapping (NMT)",
    "Infra Red (IR)",
    "Ultrasound (US)",
    "Transcutaneus Electrical Stimulation (TENS)",
    "Traksi Lumbal / Cervical",
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-36 lg:pb-24">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Title & Intro */}
            <div className="flex flex-col gap-6">
              <div>
                <span className="tag-pill bg-blush/40 text-espresso font-semibold text-xs mb-4 inline-block">
                  Layanan Unggulan
                </span>
                <h1 className="font-display font-black text-espresso text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                  Fisioterapi<br />
                  <span className="text-terra">Pulih Tanpa Canggung.</span>
                </h1>
              </div>
              <p className="font-sans text-espresso/70 text-lg leading-relaxed max-w-lg">
                Fisioterapi merupakan tindakan medis komprehensif untuk memelihara, memulihkan, dan memaksimalkan fungsi fisik secara keseluruhan pada seluruh rentang usia. Dilakukan dalam suasana privat demi pemulihan optimal Anda.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://wa.me/6287700303645?text=Halo%20Lotus%20Semarang%2C%20saya%20tertarik%20dengan%20layanan%20Fisioterapi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-dark font-bold text-sm px-8 py-4"
                >
                  Pesan Sesi Fisioterapi
                </a>
                <a
                  href="https://wa.me/6287700303645?text=Halo%20Lotus%2C%20mau%20konsultasi%20masalah%20fisioterapi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-outline font-bold text-sm px-8 py-4"
                >
                  Konsultasi Medis
                </a>
              </div>
            </div>

            {/* Right Column: Rounded Image Block */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[3rem] bg-blush/20 -rotate-3" />
              <div className="relative rounded-[3rem] overflow-hidden aspect-[4/3] lg:aspect-[4/5] img-zoom">
                <Image
                  src="/images/lotus_treatment_physio_adult_ball_exercise_wide.jpg"
                  alt="Fisioterapi di Lotus Semarang"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Marquee Accent */}
      <Marquee bg="terra" textClass="text-cream" speed="slow" />

      {/* Expectation Details Section */}
      <section className="section-pad bg-blush-soft/30">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-[1.5fr_2fr] gap-12 lg:gap-20">
            <div>
              <span className="tag-pill bg-espresso/5 text-espresso/70 font-semibold text-xs mb-4 inline-block">
                Fasilitas & Alat
              </span>
              <h2 className="font-display font-black text-espresso text-3xl lg:text-4xl leading-tight tracking-tight">
                Metode Terapi & Modalitas Modern Kami
              </h2>
              <p className="font-sans text-espresso/60 mt-4 leading-relaxed">
                Kami menggabungkan terapi manual (kinesioterapi/mobilisasi gerak) dengan dukungan modalitas alat fisioterapi bersertifikat klinis demi mempercepat regenerasi jaringan tubuh Anda.
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              <h3 className="font-display font-bold text-espresso text-lg">Alat & Terapi yang Tersedia:</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {tools.map((tool) => (
                  <div key={tool} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-warm">
                    <span className="text-terra text-base">✦</span>
                    <span className="font-sans text-xs font-semibold text-espresso/80">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="section-pad">
        <div className="container-wellness">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="tag-pill bg-sand/40 text-espresso/70 font-semibold text-xs mb-3 inline-block">
              Aplikasi Klinis
            </span>
            <h2 className="font-display font-black text-espresso text-3xl lg:text-4xl leading-tight">
              Menyelesaikan Berbagai Masalah Fisik
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {treatments.map((t) => (
              <div key={t.title} className="bg-sand-soft rounded-3xl p-8 flex flex-col gap-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-terra flex-shrink-0 shadow-warm">
                  <Check size={16} />
                </div>
                <h3 className="font-display font-bold text-espresso text-xl">{t.title}</h3>
                <p className="font-sans text-espresso/60 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
