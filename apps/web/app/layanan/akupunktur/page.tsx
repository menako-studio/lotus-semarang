"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { Check } from "lucide-react";

export default function AkupunkturPage() {
  const applications = [
    {
      title: "Anak-Anak (Tumbuh Kembang)",
      desc: "Membantu menstimulasi tumbuh kembang optimal anak, meningkatkan konsentrasi belajar, menjaga stabilitas emosi, serta meningkatkan imunitas tubuh secara alami.",
      bg: "bg-peach-soft",
    },
    {
      title: "Kesehatan Dewasa & Lansia",
      desc: "Mengatasi keluhan umum seperti vertigo, gerd, hipertensi, diabetes, pemulihan stroke, nyeri sendi, saraf kejepit, hingga meredakan mual dan muntah akibat efek samping kemoterapi.",
      bg: "bg-sage-soft",
    },
    {
      title: "Reproduksi & Hormonal",
      desc: "Mendukung program kehamilan alami (promil) serta persiapan program bayi tabung (IVF) dengan menyeimbangkan hormon reproduksi.",
      bg: "bg-blush-soft",
    },
    {
      title: "Slimming & Estetika Wajah",
      desc: "Solusi alami untuk mengatasi jerawat (acne), menyamarkan kerutan wajah, serta merangsang kolagen untuk pengencangan kulit alami tanpa bahan kimia obat.",
      bg: "bg-sand-soft",
    },
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
                <span className="tag-pill bg-peach/40 text-terra font-semibold text-xs mb-4 inline-block">
                  Layanan Unggulan
                </span>
                <h1 className="font-display font-black text-espresso text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                  Akupunktur<br />
                  <span className="text-terra">Modern & Privat.</span>
                </h1>
              </div>
              <p className="font-sans text-espresso/70 text-lg leading-relaxed max-w-lg">
                Rasakan terapi tusuk jarum kuno yang menggunakan media berupa jarum steril sekali pakai (disposable sterile needle), ditusukkan secara presisi untuk mengembalikan harmonisasi sistem saraf, peredaran darah, hormonal, dan imunitas Anda.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://wa.me/6281802537509?text=Halo%20Lotus%20Semarang%2C%20saya%20tertarik%20dengan%20layanan%20Akupunktur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-dark font-bold text-sm px-8 py-4"
                >
                  Pesan Sesi Akupunktur
                </a>
                <a
                  href="https://wa.me/6281802537509?text=Halo%20Lotus%2C%20mau%20tanya%20dulu%20tentang%20Akupunktur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-outline font-bold text-sm px-8 py-4"
                >
                  Tanya Dokter
                </a>
              </div>
            </div>

            {/* Right Column: Rounded Image Block */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[3rem] bg-peach/20 -rotate-3" />
              <div className="relative rounded-[3rem] overflow-hidden aspect-[4/3] lg:aspect-[4/5] img-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80&fit=crop"
                  alt="Terapi Akupunktur di Lotus Semarang"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Marquee Accent */}
      <Marquee bg="peach" textClass="text-espresso" speed="slow" />

      {/* Expectation Details Section */}
      <section className="section-pad bg-peach-soft/30">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-[1.5fr_2fr] gap-12 lg:gap-20">
            <div>
              <span className="tag-pill bg-espresso/5 text-espresso/70 font-semibold text-xs mb-4 inline-block">
                Metode Diagnosa
              </span>
              <h2 className="font-display font-black text-espresso text-3xl lg:text-4xl leading-tight tracking-tight">
                Bagaimana Diagnosa Akupunktur Lotus Ditegakkan?
              </h2>
              <p className="font-sans text-espresso/60 mt-4 leading-relaxed">
                Kami tidak melakukan tindakan secara sembarangan. Sebelum memulai, kami melakukan rangkaian pemeriksaan holistik menyeluruh demi memastikan stimulasi titik tubuh Anda tepat sasaran.
              </p>
            </div>
            
            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-warm flex items-center justify-center font-display font-black text-terra text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-display font-bold text-espresso text-lg mb-2">Anamnesa & Palpasi Nadi</h3>
                  <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                    Terapis kami akan melakukan wawancara medis mendalam serta meraba denyut nadi Anda untuk mengukur kekuatan dan keseimbangan aliran energi organ vital tubuh.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-warm flex items-center justify-center font-display font-black text-terra text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-display font-bold text-espresso text-lg mb-2">Pemeriksaan Visual Lidah</h3>
                  <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                    Kami melakukan pemeriksaan lidah (meliputi bentuk, warna, dan selaput lidah) yang secara klinis menggambarkan kondisi retensi cairan, panas, atau defisiensi energi di dalam tubuh Anda.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-warm flex items-center justify-center font-display font-black text-terra text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-display font-bold text-espresso text-lg mb-2">Kesesuaian 5 Unsur Tubuh</h3>
                  <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                    Menganalisis kesesuaian sindrom klinis berdasarkan teori 5 Unsur Alami Tubuh (Kayu, Api, Tanah, Logam, dan Air) guna merancang peta titik stimulasi jarum yang harmonis bagi pemulihan Anda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application / Benefits Grid */}
      <section className="section-pad bg-white">
        <div className="container-wellness">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="tag-pill bg-sage/40 text-forest font-semibold text-xs mb-3 inline-block">
              Aplikasi Klinis
            </span>
            <h2 className="font-display font-black text-espresso text-3xl lg:text-4xl leading-tight">
              Manfaat Akupunktur untuk Seluruh Keluarga
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {applications.map((app) => (
              <div key={app.title} className={`${app.bg} rounded-3xl p-8 flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-300`}>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-terra flex-shrink-0 shadow-warm">
                  <Check size={16} />
                </div>
                <h3 className="font-display font-bold text-espresso text-xl">{app.title}</h3>
                <p className="font-sans text-espresso/65 text-sm leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
