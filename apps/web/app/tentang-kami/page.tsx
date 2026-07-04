"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function TentangKamiPage() {
  const pillars = [
    {
      number: "01",
      title: "Medis Berbasis Sains",
      desc: "Setiap program terapi dirancang secara klinis, menggabungkan teknik akupunktur klasik dan fisioterapi modern untuk hasil pemulihan yang terukur.",
      color: "text-terra",
    },
    {
      number: "02",
      title: "Privasi Mutlak (100% Privat)",
      desc: "Menghadirkan lingkungan terapi per sesi yang sepenuhnya steril dan tertutup, memberikan rasa aman dan kenyamanan maksimal, terutama bagi kalangan Niqabi.",
      color: "text-forest",
    },
    {
      number: "03",
      title: "Pendekatan Manusiawi",
      desc: "Kami mendengarkan keluhan Anda secara mendalam. Tidak ada suasana dingin ala klinik konvensional, hanya kehangatan ruang pemulihan yang ramah.",
      color: "text-espresso-400",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-espresso">
      <Navbar />

      {/* ── 1. HERO SECTION (Centered, Bold, WTHN-style) ── */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 text-center">
        <div className="container-wellness max-w-4xl">
          <motion.span
            className="tag-pill bg-peach-soft text-terra font-bold text-xs uppercase tracking-wider mb-6 inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Tentang Lotus Semarang
          </motion.span>
          <motion.h1
            className="font-display font-black text-espresso text-5xl md:text-7xl leading-[1.05] tracking-tight mb-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Membawa Ketenangan ke Tengah Kehidupanmu.
          </motion.h1>
          <motion.p
            className="font-sans text-espresso/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sejak tahun 2014, kami telah merancang ulang pengalaman pemulihan kesehatan dan terapi tubuh menjadi ritual perawatan diri yang menyenangkan.
          </motion.p>
        </div>
      </section>

      {/* Wide Banner Image (WTHN Signature) */}
      <section className="px-6 mb-20 lg:mb-28">
        <div className="container-wellness p-0">
          <motion.div
            className="relative rounded-[2rem] md:rounded-[3.5rem] overflow-hidden aspect-[21/9] w-full shadow-warm-lg"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-espresso/5 z-10 pointer-events-none" />
            <Image
              src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1600&q=85&fit=crop"
              alt="Lotus Wellness Retreat Semarang"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* ── 2. THE MISSION STATEMENT SECTION (Asymmetrical Row) ── */}
      <section className="section-pad bg-white border-t border-espresso/5">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            <div className="lg:col-span-5">
              <h2 className="font-display font-black text-espresso text-3xl md:text-5xl leading-tight tracking-tight">
                Penyembuhan Tidak Harus Terasa Dingin.
              </h2>
            </div>
            
            <div className="lg:col-span-7 font-sans text-espresso/70 text-base md:text-lg leading-relaxed flex flex-col gap-6">
              <p>
                Banyak orang menunda terapi karena merasa canggung atau tidak nyaman dengan lingkungan klinik konvensional yang kaku. Lotus Semarang lahir untuk mengubah paradigma tersebut.
              </p>
              <p>
                Kami menggabungkan protokol terapi medis yang terukur dengan kenyamanan spa premium. Hasilnya adalah sebuah ruang suaka privat di mana tubuh Anda dirawat secara profesional selagi pikiran Anda beristirahat dalam ketenangan maksimal.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. MEET THE FOUNDER SECTION (Clean Editorial Box) ── */}
      <section className="section-pad bg-sand-soft/40 border-y border-espresso/5">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Founder Photo */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 rounded-[3rem] bg-peach-soft rotate-2" />
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[3/4] shadow-warm-lg z-10">
                <Image
                  src="https://images.unsplash.com/photo-1594824813573-246434e33963?w=800&q=85&fit=crop"
                  alt="drg. Arini Jannata, S.Tr. Akup, MM"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Right Column: Narrative / Credentials */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="tag-pill bg-terra/10 text-terra font-bold text-xs uppercase tracking-wider self-start">
                Meet our Founder
              </span>
              
              <blockquote className="font-display font-black text-espresso text-2xl md:text-3.5xl leading-tight italic">
                “Saya percaya bahwa pemulihan fisik yang optimal berawal dari kenyamanan psikologis dan rasa aman yang tak terganggu.”
              </blockquote>

              <div className="font-sans text-espresso/75 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                <p>
                  Didirikan pada tahun <strong>2014</strong> oleh <strong>drg. Arini Jannata, S.Tr. Akup, MM</strong>, Lotus Health, Beauty & Care berawal dari gagasan untuk mengintegrasikan keahlian kedokteran gigi klinis dengan pengobatan komplementer berbasis sains.
                </p>
                <p>
                  Melalui pemahaman mendalam tentang relaksasi saraf, beliau merancang fasilitas Lotus Semarang sebagai ruang khusus yang bersahabat bagi kaum hawa, profesional aktif, serta para ibu yang membutuhkan privasi total selama proses pemulihan sendi, otot, atau sesi olahraga renang.
                </p>
              </div>

              <div className="border-t border-espresso/10 pt-4">
                <h4 className="font-display font-black text-espresso text-lg">
                  drg. Arini Jannata, S.Tr. Akup, MM
                </h4>
                <p className="font-sans text-xs text-espresso/50 font-medium">
                  Pendiri, Lotus Health, Beauty & Care
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. PILLARS SECTION (3-Column Elegant Layout) ── */}
      <section className="section-pad bg-white">
        <div className="container-wellness">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="tag-pill bg-sage-soft text-forest font-bold text-xs uppercase tracking-wider mb-4 inline-block">
              Pilar Wellness Kami
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-4.5xl leading-tight">
              Prinsip yang Menjaga Kualitas Terapi Kami
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="flex flex-col gap-4 p-2 border-b border-espresso/5 md:border-b-0 md:border-r md:last:border-r-0 border-espresso/10 md:pr-8 lg:pr-12 last:pr-0"
              >
                <span className={`font-display font-black text-4xl lg:text-5xl ${pillar.color}`}>
                  {pillar.number}
                </span>
                <h3 className="font-display font-black text-espresso text-xl">
                  {pillar.title}
                </h3>
                <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. THE SPACE GALLERY (Experience WTHN Aesthetic) ── */}
      <section className="section-pad bg-blush-soft/20 border-t border-espresso/5">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">
            <div>
              <span className="tag-pill bg-espresso/5 text-espresso/70 font-bold text-xs uppercase tracking-wider mb-4 inline-block">
                Eksplorasi Ruang
              </span>
              <h2 className="font-display font-black text-espresso text-3xl md:text-5xl leading-tight">
                Ruang Suaka Privat Anda.
              </h2>
            </div>
            <p className="font-sans text-espresso/65 text-base md:text-lg leading-relaxed">
              Setiap ruangan di Lotus Semarang dirancang menggunakan pencahayaan alami yang lembut, sirkulasi udara optimal, serta material bernuansa alam untuk menenangkan panca indera Anda sejak pertama kali melangkah masuk.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative rounded-3xl overflow-hidden aspect-square img-zoom shadow-warm">
              <Image
                src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600&q=80&fit=crop"
                alt="Ruang Tunggu Santai"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-square img-zoom shadow-warm mt-4 md:mt-0">
              <Image
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80&fit=crop"
                alt="Area Hidroterapi"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-square img-zoom shadow-warm">
              <Image
                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80&fit=crop"
                alt="Detail Aromaterapi & Lilin"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-square img-zoom shadow-warm mt-4 md:mt-0">
              <Image
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80&fit=crop"
                alt="Ruang Konsultasi Medis"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. MARQUEE ACCENT ── */}
      <Marquee bg="espresso" textClass="text-cream" speed="slow" />

      {/* ── 7. FOOTER ── */}
      <Footer />
    </main>
  );
}
