"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { motion } from "framer-motion";
import { Check, Calendar, MessageSquare, AlertCircle } from "lucide-react";

export default function AkupunkturPage() {
  const benefits = [
    { title: "Meredakan Nyeri Kronis", desc: "Sangat efektif untuk migrain, nyeri punggung, leher, dan nyeri sendi secara alami tanpa ketergantungan obat." },
    { title: "Mengurangi Stres & Kecemasan", desc: "Membantu tubuh melepaskan endorfin, hormon bahagia alami, untuk merilekskan sistem saraf Anda." },
    { title: "Memperbaiki Kualitas Tidur", desc: "Mengatasi insomnia dan menyeimbangkan siklus sirkadian agar Anda bangun dengan segar." },
    { title: "Meningkatkan Energi & Imunitas", desc: "Menyeimbangkan aliran energi (Qi) tubuh untuk mengembalikan vitalitas alami Anda." },
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
                Rasakan terapi tusuk jarum kuno yang disempurnakan dengan pendekatan medis modern. Ditangani oleh terapis ahli dalam ruangan yang 100% privat, tenang, dan higienis.
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
                Proses Terapi
              </span>
              <h2 className="font-display font-black text-espresso text-3xl lg:text-4xl leading-tight tracking-tight">
                Apa yang Kamu Dapatkan di Sesi Pertamamu?
              </h2>
              <p className="font-sans text-espresso/60 mt-4 leading-relaxed">
                Kami memastikan setiap sesi berjalan dengan aman, steril, dan bebas rasa khawatir. Kami menggunakan jarum sekali pakai kualitas premium yang sangat tipis untuk meminimalkan ketidaknyamanan.
              </p>
            </div>
            
            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-warm flex items-center justify-center font-display font-black text-terra text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-display font-bold text-espresso text-lg mb-2">Konsultasi Personal</h3>
                  <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                    Terapis kami akan memeriksa kondisi fisik, denyut nadi, serta riwayat kesehatanmu untuk menentukan titik akupunktur terbaik yang sesuai dengan kebutuhan tubuhmu.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-warm flex items-center justify-center font-display font-black text-terra text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-display font-bold text-espresso text-lg mb-2">Sesi Penjaruman yang Rileks</h3>
                  <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                    Jarum steril sekali pakai yang sangat tipis dimasukkan ke titik-titik meridian. Sebagian besar orang merasa sangat rileks dan bahkan tertidur selama sesi berlangsung.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-warm flex items-center justify-center font-display font-black text-terra text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-display font-bold text-espresso text-lg mb-2">Pasca Sesi & Rekomendasi</h3>
                  <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                    Terapis akan memberikan saran gaya hidup, asupan nutrisi, atau rencana perawatan lanjutan untuk membantu menjaga keseimbangan tubuh jangka panjang.
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
              Mengapa Tubuhmu Membutuhkan Akupunktur?
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
