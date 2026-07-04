"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { Check, ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function SwimCoursePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const applications = [
    {
      title: "Anak-Anak & Pemula",
      desc: "Latihan renang privat dasar dengan metode ramah anak yang berfokus pada water safety (keselamatan air) dan melatih keberanian di air.",
      img: "/images/lotus_treatment_hydro_female_hijab_float_front.jpg",
      bg: "bg-sand-soft",
    },
    {
      title: "Dewasa & Lansia",
      desc: "Latihan renang untuk melatih stamina kardio, menjaga kelenturan sendi lutut, serta terapi pernapasan bagi penderita asma/lansia.",
      img: "/images/swimming-course-lansia-2.jpg",
      bg: "bg-sage-soft",
    },
    {
      title: "Pengembangan Gaya",
      desc: "Menyempurnakan koordinasi tangan dan kaki untuk gaya dada (katak), gaya bebas, gaya punggung, serta teknik pernapasan efisien.",
      img: "/images/lotus_hydrotherapy_pool_male_floating_device.jpg",
      bg: "bg-peach-soft",
    },
    {
      title: "Sesi Privat Khusus Wanita",
      desc: "Fasilitas sewa kolam privat 100% dengan instruktur wanita terlatih, memberikan kenyamanan penuh bagi ibu berhijab (Niqabi).",
      img: "/images/lotus_treatment_hydro_elderly_hijab_smile_edge.jpg",
      bg: "bg-blush-soft",
    },
  ];

  const faqs = [
    {
      q: "Berapa kapasitas kolam renang saat kelas berlangsung?",
      a: "Satu kelas renang bersifat 100% privat (1 instruktur melayani 1 murid). Area kolam renang disewa khusus untuk sesi latihan Anda tanpa terganggu oleh kehadiran pengunjung umum.",
    },
    {
      q: "Berapa suhu air kolam renang?",
      a: "Kolam renang kami dipanaskan konstan berkisar antara 30°C hingga 32°C. Suhu hangat ini membuat tubuh murid rileks, mencegah kram otot, dan sangat aman bagi anak-anak maupun lansia.",
    },
    {
      q: "Apakah disediakan instruktur wanita?",
      a: "Ya. Kami menyediakan instruktur wanita profesional bersertifikat resmi demi kenyamanan penuh bagi murid perempuan dewasa, anak-anak, maupun kalangan ibu berhijab.",
    },
    {
      q: "Berapa kali pertemuan untuk paket kelas renang?",
      a: "Tersedia paket 4 kali pertemuan (mingguan) atau paket intensif 8 kali pertemuan yang bisa Anda sesuaikan sendiri jadwalnya bersama instruktur terkait.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── 1. HERO SECTION (50/50 Dual Image Layout) ── */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div>
                <span className="tag-pill bg-sand/40 text-espresso font-bold text-xs uppercase tracking-wider mb-4 inline-block">
                  Kursus Renang Privat
                </span>
                <h1 className="font-display font-black text-espresso text-5xl lg:text-7.5xl leading-[1.05] tracking-tight">
                  Swim Course<br />
                  <span className="text-espresso">Belajar Bebas Khawatir.</span>
                </h1>
              </div>
              <p className="font-sans text-espresso/70 text-lg leading-relaxed max-w-lg">
                Dapatkan bimbingan renang intensif di kolam hangat tertutup. Sempurna bagi pemula, anak-anak, lansia, maupun ibu berjilbab yang menginginkan privasi mutlak selama belajar berenang.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://wa.me/6287700303645?text=Halo%20Lotus%20Semarang%2C%20saya%20tertarik%20dengan%20layanan%20Swim%20Course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-dark font-bold text-sm px-8 py-4"
                >
                  Daftar Kelas Renang
                </a>
                <a
                  href="https://wa.me/6287700303645?text=Halo%20Lotus%2C%20mau%20tanya%20jadwal%20dan%20biaya%20Swim%20Course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-outline font-bold text-sm px-8 py-4"
                >
                  Tanya Jadwal & Biaya
                </a>
              </div>
            </div>

            {/* Right: Overlapping Editorial Images (WTHN style) */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] lg:min-h-[500px]">
              {/* Background Sand Box */}
              <div className="absolute top-10 left-10 w-4/5 h-4/5 bg-sand-soft rounded-[3rem] -rotate-3" />
              
              {/* Large Vertical Portrait */}
              <div className="absolute top-0 right-4 w-[65%] aspect-[3/4] rounded-3xl overflow-hidden shadow-warm-lg img-zoom z-10">
                <Image
                  src="/images/swimming-course-lansia.jpg"
                  alt="Kelas Renang Dewasa di Lotus Semarang"
                  fill
                  className="object-cover"
                  priority
                  sizes="40vw"
                  quality={85}
                />
              </div>

              {/* Smaller Overlapping Square */}
              <div className="absolute bottom-4 left-4 w-[45%] aspect-square rounded-3xl overflow-hidden shadow-warm-xl border-4 border-white img-zoom z-20">
                <Image
                  src="/images/swimming-course-lansia-2.jpg"
                  alt="Latihan Gerak Tungkai Renang"
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
      <Marquee bg="sand" textClass="text-espresso" speed="slow" />

      {/* ── 2. METODE LATIHAN (Latihan Air + Large Visual) ── */}
      <section className="section-pad bg-white">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left: Beautiful landscape image */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-[3.5rem] overflow-hidden shadow-warm-lg img-zoom">
              <Image
                src="/images/lotus_hydrotherapy_pool_male_floating_device.jpg"
                alt="Manfaat Latihan Fisik Kolam Renang Hangat"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
            </div>

            {/* Right: Scientific Explanations & Benefits */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="tag-pill bg-espresso/5 text-espresso/80 font-bold text-xs uppercase tracking-wider self-start">
                Metode Pembelajaran
              </span>
              <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight tracking-tight">
                Mengapa Memilih Kelas Renang Privat Kami?
              </h2>
              
              <div className="flex flex-col gap-6 mt-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sand-soft text-espresso flex items-center justify-center font-display font-black text-lg flex-shrink-0">
                    01
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-espresso text-lg mb-1">Kurikulum Bertahap (Step-by-Step)</h3>
                    <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                      Latihan dimulai dari pengenalan air dan meluncur secara menyenangkan. Tidak dipaksa, menyesuaikan kecepatan belajar masing-masing murid.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sage-soft text-forest flex items-center justify-center font-display font-black text-lg flex-shrink-0">
                    02
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-espresso text-lg mb-1">Kolam Hangat Bersih</h3>
                    <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                      Suhu kolam yang hangat membuat murid tidak mudah kedinginan dan merasa nyaman berlatih gerakan kaki/tangan lebih lama di dalam air.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blush-soft text-espresso-600 flex items-center justify-center font-display font-black text-lg flex-shrink-0">
                    03
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-espresso text-lg mb-1">Privasi Menenangkan</h3>
                    <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                      Sangat cocok bagi ibu-ibu yang risih apabila dilihat orang lain saat latihan renang, memberikan rasa aman 100% tanpa canggung.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. DETAILED APPLICATIONS GRID (WTHN Style Cards with Photos) ── */}
      <section className="section-pad bg-sand-soft/30 border-y border-espresso/5">
        <div className="container-wellness">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="tag-pill bg-espresso/5 text-espresso/70 font-bold text-xs uppercase tracking-wider mb-4 inline-block">
              Kelas Pilihan
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight">
              Kategori Program Swim Course
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

      {/* ── 4. WHAT TO EXPECT (Three step vertical flow with detailed images) ── */}
      <section className="section-pad bg-white">
        <div className="container-wellness">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="tag-pill bg-sand/40 text-espresso font-bold text-xs uppercase tracking-wider mb-4 inline-block">
              Alur Latihan
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight">
              Prosedur Sesi Latihan Renang Anda
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Step 1 */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-warm img-zoom mb-2">
                <Image
                  src="/images/lotus_treatment_hydro_equipment_noodle_front.jpg"
                  alt="Pengenalan Air & Keselamatan"
                  fill
                  className="object-cover"
                  sizes="30vw"
                  quality={80}
                />
              </div>
              <span className="font-display font-black text-espresso text-lg">01. Pengenalan & Asesmen</span>
              <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                Instruktur melakukan evaluasi keberanian air, mengajarkan teknik pernapasan dasar di kolam, meluncur dengan media bantu yang aman.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-warm img-zoom mb-2">
                <Image
                  src="/images/swimming-course-lansia-2.jpg"
                  alt="Latihan Koordinasi Gaya"
                  fill
                  className="object-cover"
                  sizes="30vw"
                  quality={80}
                />
              </div>
              <span className="font-display font-black text-espresso text-lg">02. Pengembangan Gaya</span>
              <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                Melatih gerakan tungkai dan lengan gaya dada atau gaya bebas secara teratur, melatih koordinasi pernapasan di permukaan air.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-warm img-zoom mb-2">
                <Image
                  src="/images/swimming-course-lansia.jpg"
                  alt="Melatih Stamina Renang"
                  fill
                  className="object-cover"
                  sizes="30vw"
                  quality={80}
                />
              </div>
              <span className="font-display font-black text-espresso text-lg">03. Pemantapan Gerak</span>
              <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                Melatih ketahanan fisik (stamina) renang beberapa putaran bolak-balik tanpa jeda, serta memantapkan teknik water safety mandiri.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. FAQs ACCORDION (WTHN Style) ── */}
      <section className="section-pad bg-sand-soft/20 border-t border-espresso/5">
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
