"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { Check } from "lucide-react";

export default function FisioterapiPage() {
  const benefits = [
    { title: "Pemulihan Cedera & Pasca Operasi", desc: "Membantu melatih kembali kekuatan dan rentang gerak tubuh Anda secara terstruktur dan bertahap." },
    { title: "Manajemen Nyeri Muskuloskeletal", desc: "Mengurangi nyeri punggung, leher, bahu, dan lutut melalui terapi manual dan latihan spesifik." },
    { title: "Fisioterapi Geriatri & Stroke", desc: "Program pemulihan gerak dan keseimbangan pasca stroke atau untuk menjaga keaktifan lansia." },
    { title: "Ruang Fisioterapi Mandiri & Privat", desc: "Satu pasien per sesi. Anda mendapatkan perhatian penuh dari fisioterapis kami tanpa terdistraksi." },
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
                Kembalikan fungsi gerak tubuh Anda secara optimal bersama fisioterapis profesional kami. Dilakukan di ruang privat yang dirancang hangat dan personal demi kenyamanan penyembuhan Anda.
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
                  Konsultasi Gratis
                </a>
              </div>
            </div>

            {/* Right Column: Rounded Image Block */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[3rem] bg-blush/20 -rotate-3" />
              <div className="relative rounded-[3rem] overflow-hidden aspect-[4/3] lg:aspect-[4/5] img-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&fit=crop"
                  alt="Fisioterapi di Lotus Semarang"
                  fill
                  className="object-cover"
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
                Pendekatan Kami
              </span>
              <h2 className="font-display font-black text-espresso text-3xl lg:text-4xl leading-tight tracking-tight">
                Bagaimana Kami Membantu Anda Pulih?
              </h2>
              <p className="font-sans text-espresso/60 mt-4 leading-relaxed">
                Kami percaya pemulihan fisik membutuhkan ketenangan pikiran. Lingkungan kami dirancang ramah untuk ibu rumah tangga, pekerja kantoran, olahragawan, maupun lansia.
              </p>
            </div>
            
            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-warm flex items-center justify-center font-display font-black text-espresso text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-display font-bold text-espresso text-lg mb-2">Asesmen Gerak & Fungsi</h3>
                  <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                    Kami melakukan pemeriksaan menyeluruh pada postur, kekuatan otot, koordinasi saraf, dan pola jalan Anda untuk mendeteksi akar masalah nyeri atau keterbatasan gerak Anda.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-warm flex items-center justify-center font-display font-black text-espresso text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-display font-bold text-espresso text-lg mb-2">Terapi Manual & Stimulasi</h3>
                  <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                    Kombinasi terapi pijat medis khusus otot, mobilisasi sendi, dan stimulasi menggunakan alat fisioterapi modern untuk meredakan radang dan nyeri dengan cepat.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-warm flex items-center justify-center font-display font-black text-espresso text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-display font-bold text-espresso text-lg mb-2">Latihan Penguatan Mandiri</h3>
                  <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                    Fisioterapis kami membimbing Anda melakukan gerakan rehabilitasi yang tepat dan aman agar dapat Anda praktikkan di rumah untuk mencegah nyeri datang kembali.
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
            <span className="tag-pill bg-sand/40 text-espresso/70 font-semibold text-xs mb-3 inline-block">
              Manfaat Utama
            </span>
            <h2 className="font-display font-black text-espresso text-3xl lg:text-4xl leading-tight">
              Kenapa Pilih Fisioterapi di Lotus?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="bg-sand-soft rounded-3xl p-8 flex flex-col gap-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-terra flex-shrink-0">
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
