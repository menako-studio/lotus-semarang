"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export function HidroterapiClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const applications = [
    {
      title: "Mereduksi Beban Sendi",
      desc: "Prinsip fisika daya apung air mengurangi beban tubuh hingga 90%, sangat meringankan tekanan pada sendi lutut, pinggang, dan tulang belakang Anda.",
      img: "/images/lotus_hydrotherapy_pool_male_floating_device.jpg",
      bg: "bg-sage-soft",
    },
    {
      title: "Rehabilitasi Motorik & Stroke",
      desc: "Lingkungan air hangat mempermudah latihan gerak, melatih koordinasi motorik, serta melatih keseimbangan tubuh dengan risiko cedera jatuh nol.",
      img: "/images/lotus_treatment_hydro_adult_float_therapy_therapist.jpg",
      bg: "bg-peach-soft",
    },
    {
      title: "Relaksasi Saraf & Otot",
      desc: "Jet aliran air hangat bertekanan melakukan pemijatan mikro pada otot-otot tegang, melancarkan aliran darah, serta menenangkan pikiran.",
      img: "/images/lotus_treatment_hydro_patient_floating_alone.jpg",
      bg: "bg-blush-soft",
    },
    {
      title: "Tumbuh Kembang & Bumil",
      desc: "Menghadirkan sarana aman untuk stimulasi gerak motorik anak-anak dan olahraga kardio kehamilan yang aman bebas cemas benturan.",
      img: "/images/lotus_treatment_hydro_female_hijab_float_front.jpg",
      bg: "bg-sand-soft",
    },
  ];

  const faqs = [
    {
      q: "Apakah kolam hidroterapi di Lotus Semarang bersifat privat?",
      a: "Ya, 100% privat. Setiap sesi disewakan secara eksklusif per pasien/keluarga. Tidak ada tamu lain yang masuk ke area kolam selama sesi Anda berlangsung, sangat nyaman untuk ibu berhijab (Niqabi) dan pasien yang butuh ketenangan penuh.",
    },
    {
      q: "Berapa suhu air kolam hidroterapi?",
      a: "Suhu air kolam kami diatur konstan berkisar antara 32°C hingga 34°C. Suhu hangat terapeutik ini sangat ideal untuk meredakan ketegangan otot dan melebarkan pembuluh darah untuk sirkulasi darah yang lebih baik.",
    },
    {
      q: "Apa yang harus saya bawa saat sesi hidroterapi?",
      a: "Cukup bawa pakaian renang yang nyaman. Bagi wanita berhijab, disarankan membawa baju renang muslimah/burkini yang bersih. Kami menyediakan fasilitas shower steril, handuk bersih, dan sabun pasca sesi.",
    },
    {
      q: "Apakah hidroterapi aman bagi penderita stroke dan lansia?",
      a: "Sangat aman dan sangat direkomendasikan. Latihan di dalam air hangat jauh lebih ringan dilakukan bagi penderita stroke atau lansia yang memiliki keterbatasan kekuatan otot di darat.",
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
                <span className="tag-pill bg-sage/40 text-forest font-bold text-xs uppercase tracking-wider mb-4 inline-block">
                  Fisioterapi Media Air
                </span>
                <h1 className="font-display font-black text-espresso text-5xl lg:text-7.5xl leading-[1.05] tracking-tight">
                  Hidroterapi<br />
                  <span className="text-forest">Suaka Air Privat.</span>
                </h1>
              </div>
              <p className="font-sans text-espresso/70 text-lg leading-relaxed max-w-lg">
                Temukan pemulihan fisik yang menenangkan. Kolam air hangat privat kami memanfaatkan hukum fisika air untuk meringankan beban sendi, mempercepat pemulihan motorik, dan merelaksasi otot Anda.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://wa.me/6287700303645?text=Halo%20Lotus%20Semarang%2C%20saya%20tertarik%20dengan%20layanan%20Hidroterapi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-dark font-bold text-sm px-8 py-4"
                >
                  Pesan Sesi Hidroterapi
                </a>
                <a
                  href="https://wa.me/6287700303645?text=Halo%20Lotus%2C%20mau%20tanya%20detail%20kolam%20Hidroterapi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-outline font-bold text-sm px-8 py-4"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>

            {/* Right: Overlapping Editorial Images */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] lg:min-h-[500px]">
              <div className="absolute top-10 left-10 w-4/5 h-4/5 bg-sage-soft rounded-[3rem] -rotate-3" />
              <div className="absolute top-0 right-4 w-[65%] aspect-[3/4] rounded-3xl overflow-hidden shadow-warm-lg img-zoom z-10">
                <Image
                  src="/images/lotus_treatment_hydro_female_hijab_supine_wide.jpg"
                  alt="Latihan Terapi Air Hidroterapi"
                  fill
                  className="object-cover"
                  priority
                  sizes="40vw"
                  quality={85}
                />
              </div>
              <div className="absolute bottom-4 left-4 w-[45%] aspect-square rounded-3xl overflow-hidden shadow-warm-xl border-4 border-white img-zoom z-20">
                <Image
                  src="/images/lotus_treatment_hydro_female_hijab_float_front.jpg"
                  alt="Detail Sesi Floating Hidroterapi"
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
      <Marquee bg="sage" textClass="text-forest" speed="slow" />

      {/* Science Section */}
      <section className="section-pad bg-white">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-[3.5rem] overflow-hidden shadow-warm-lg img-zoom">
              <Image
                src="/images/lotus_treatment_hydro_patient_floating_alone.jpg"
                alt="Manfaat Daya Apung Air Fisika"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
            </div>
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="tag-pill bg-espresso/5 text-espresso/80 font-bold text-xs uppercase tracking-wider self-start">
                Fisika Air & Pemulihan
              </span>
              <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight tracking-tight">
                Mengapa Tubuh Anda Lebih Mudah Pulih di Dalam Air?
              </h2>
              <div className="flex flex-col gap-6 mt-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sage-soft text-forest flex items-center justify-center font-display font-black text-lg flex-shrink-0">
                    01
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-espresso text-lg mb-1">Daya Apung Hidrostatik</h3>
                    <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                      Mengurangi beban gravitasi tubuh Anda secara drastis, sehingga otot dan sendi yang cedera dapat digerakkan secara bebas tanpa rasa sakit akibat beban berat badan.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-peach-soft text-terra flex items-center justify-center font-display font-black text-lg flex-shrink-0">
                    02
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-espresso text-lg mb-1">Tekanan Hidrodinamis</h3>
                    <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                      Tekanan air merangsang sirkulasi cairan getah bening dan melancarkan aliran darah balik ke jantung, sangat efektif mengurangi pembengkakan kaki/sendi.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blush-soft text-espresso-600 flex items-center justify-center font-display font-black text-lg flex-shrink-0">
                    03
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-espresso text-lg mb-1">Termoregulasi Relaksasi</h3>
                    <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                      Suhu kolam air hangat yang stabil memberikan stimulasi nyaman pada ujung saraf kulit, mematikan sinyal rasa nyeri, serta melemaskan kekakuan otot.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="section-pad bg-sage-soft/10 border-y border-espresso/5">
        <div className="container-wellness">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="tag-pill bg-espresso/5 text-espresso/70 font-bold text-xs uppercase tracking-wider mb-4 inline-block">
              Manfaat Utama
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight">
              Aplikasi Hidroterapi yang Kami Sediakan
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
            <span className="tag-pill bg-sage/45 text-forest font-bold text-xs uppercase tracking-wider mb-4 inline-block">
              Alur Terapi Kolam
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight">
              Bagaimana Sesi Hidroterapi Anda Berlangsung?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-warm img-zoom mb-2">
                <Image
                  src="/images/lotus_treatment_hydro_equipment_noodle_angle.jpg"
                  alt="Persiapan Alat Bantu Apung"
                  fill
                  className="object-cover"
                  sizes="30vw"
                  quality={80}
                />
              </div>
              <span className="font-display font-black text-forest text-lg">01. Persiapan & Bilas Steril</span>
              <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                Pasien diwajibkan bilas mandi steril terlebih dahulu. Instruktur menyiapkan alat bantu apung (noodles, belt, dumbbell air) sesuai dengan rencana latihan motorik pasien.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-warm img-zoom mb-2">
                <Image
                  src="/images/lotus_treatment_hydro_adult_float_therapy_therapist.jpg"
                  alt="Latihan Terapi Bersama Instruktur"
                  fill
                  className="object-cover"
                  sizes="30vw"
                  quality={80}
                />
              </div>
              <span className="font-display font-black text-forest text-lg">02. Latihan Terapeutik Air</span>
              <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                Di bawah bimbingan instruktur profesional, Anda melakukan latihan gerak sendi, penguatan otot, atau relaksasi apung dengan jet air hangat bertekanan di area kolam privat.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-warm img-zoom mb-2">
                <Image
                  src="/images/lotus_treatment_hydro_elderly_hijab_smile_edge.jpg"
                  alt="Selesai Sesi Relaksasi"
                  fill
                  className="object-cover"
                  sizes="30vw"
                  quality={80}
                />
              </div>
              <span className="font-display font-black text-forest text-lg">03. Bilas & Evaluasi</span>
              <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                Setelah 30-45 menit latihan, Anda membilas diri di kamar mandi steril privat yang hangat. Instruktur mencatat perkembangan gerak sendi Anda untuk sesi berikutnya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-pad bg-sage-soft/20 border-t border-espresso/5">
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
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-display font-bold text-espresso hover:text-forest text-base md:text-lg"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-forest" />
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
