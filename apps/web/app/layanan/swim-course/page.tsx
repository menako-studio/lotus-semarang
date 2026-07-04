"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { Check } from "lucide-react";

export default function SwimCoursePage() {
  const benefits = [
    { title: "Instruktur Sabar & Ramah", desc: "Instruktur berpengalaman yang mampu mengajar dengan metode menyenangkan dan ramah bagi anak-anak maupun dewasa." },
    { title: "Kolam Renang Bersih & Hangat", desc: "Air kolam dijaga kehangatannya demi kenyamanan tubuh, bebas gatal dan steril dari bakteri." },
    { title: "Privasi Penuh saat Belajar", desc: "Sangat cocok untuk anak-anak pemalu, wanita berhijab, maupun dewasa yang ingin belajar renang dengan tenang tanpa ditonton umum." },
    { title: "Fokus pada Keamanan & Teknik", desc: "Kurikulum pengajaran berfokus pada keselamatan di air (water safety) sebelum melangkah ke teknik gaya renang." },
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
                <span className="tag-pill bg-sand/40 text-espresso font-semibold text-xs mb-4 inline-block">
                  Layanan Unggulan
                </span>
                <h1 className="font-display font-black text-espresso text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                  Swim Course<br />
                  <span className="text-espresso">Belajar Renang Bebas Khawatir.</span>
                </h1>
              </div>
              <p className="font-sans text-espresso/70 text-lg leading-relaxed max-w-lg">
                Kelas renang privat eksklusif di Semarang. Sempurna untuk segala tingkatan usia. Didampingi oleh instruktur profesional dalam lingkungan kolam renang yang sepenuhnya privat dan aman.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://wa.me/6281802537509?text=Halo%20Lotus%20Semarang%2C%20saya%20tertarik%20dengan%20layanan%20Swim%20Course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-dark font-bold text-sm px-8 py-4"
                >
                  Daftar Kelas Renang
                </a>
                <a
                  href="https://wa.me/6281802537509?text=Halo%20Lotus%2C%20mau%20tanya%20jadwal%20dan%20biaya%20Swim%20Course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-outline font-bold text-sm px-8 py-4"
                >
                  Tanya Jadwal & Biaya
                </a>
              </div>
            </div>

            {/* Right Column: Rounded Image Block */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[3rem] bg-sand/20 -rotate-3" />
              <div className="relative rounded-[3rem] overflow-hidden aspect-[4/3] lg:aspect-[4/5] img-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80&fit=crop"
                  alt="Swim Course di Lotus Semarang"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Marquee Accent */}
      <Marquee bg="sand" textClass="text-espresso" speed="slow" />

      {/* Expectation Details Section */}
      <section className="section-pad bg-sand-soft/30">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-[1.5fr_2fr] gap-12 lg:gap-20">
            <div>
              <span className="tag-pill bg-espresso/5 text-espresso/70 font-semibold text-xs mb-4 inline-block">
                Sistem Kelas
              </span>
              <h2 className="font-display font-black text-espresso text-3xl lg:text-4xl leading-tight tracking-tight">
                Bagaimana Sistem Kelas Renang Kami Bekerja?
              </h2>
              <p className="font-sans text-espresso/60 mt-4 leading-relaxed">
                Kami merancang kelas yang menyenangkan dan aman. Setiap sesi dibatasi secara privat agar instruktur dapat memantau perkembangan gerakan Anda secara detail.
              </p>
            </div>
            
            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-warm flex items-center justify-center font-display font-black text-espresso text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-display font-bold text-espresso text-lg mb-2">Penilaian Kemampuan Awal</h3>
                  <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                    Instruktur kami akan mengamati tingkat ketakutan/keberanian Anda terhadap air dan melakukan asesmen kemampuan mengapung untuk menentukan kurikulum latihan Anda.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-warm flex items-center justify-center font-display font-black text-espresso text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-display font-bold text-espresso text-lg mb-2">Latihan Keamanan & Teknik Dasar</h3>
                  <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                    Mempelajari teknik pernapasan di air, meluncur, dan gerakan tungkai kaki dengan media bantu yang aman dan tidak membuat anak cemas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-warm flex items-center justify-center font-display font-black text-espresso text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-display font-bold text-espresso text-lg mb-2">Pengembangan Gaya & Stamina</h3>
                  <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                    Setelah menguasai teknik dasar, latihan dilanjutkan ke gaya dada, gaya bebas, koordinasi tangan-kaki, serta melatih stamina berenang secara konsisten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="section-pad">
        <div className="container-wellness">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="tag-pill bg-sage/40 text-forest font-semibold text-xs mb-3 inline-block">
              Manfaat Utama
            </span>
            <h2 className="font-display font-black text-espresso text-3xl lg:text-4xl leading-tight">
              Kenapa Kursus Renang Bersama Kami?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="bg-sage-soft rounded-3xl p-8 flex flex-col gap-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-forest flex-shrink-0">
                  <Check size={16} />
                </div>
                <h3 className="font-display font-bold text-espresso text-xl">{b.title}</h3>
                <p className="font-sans text-espresso/60 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
