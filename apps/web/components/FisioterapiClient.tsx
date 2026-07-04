"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export function FisioterapiClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const applications = [
    {
      title: "Nyeri & Persendian",
      desc: "Perawatan rehabilitatif komprehensif untuk meredakan nyeri pada pinggang, leher, bahu, lutut, dan masalah persendian gerak lainnya.",
      img: "/images/lotus_treatment_physio_kinesio_tape_knee.jpg",
      bg: "bg-blush-soft",
    },
    {
      title: "Kelainan Tulang Belakang",
      desc: "Terapi manual terfokus untuk membantu memperbaiki kelainan kelengkungan tulang belakang dan memulihkan postur tubuh ideal Anda.",
      img: "/images/lotus_treatment_physio_adult_ball_exercise_close.jpg",
      bg: "bg-peach-soft",
    },
    {
      title: "Stroke & Pemulihan Motorik",
      desc: "Latihan pemulihan saraf dan gerak motorik yang terstruktur pasca stroke, cedera traumatis, maupun pasca tindakan operasi medis.",
      img: "/images/lotus_treatment_body_arm_therapist_interaction.jpg",
      bg: "bg-sage-soft",
    },
    {
      title: "Ibu Hamil & Tumbuh Kembang",
      desc: "Latihan fisik terapeutik pemulihan panggul ibu hamil/melahirkan serta stimulasi melatih motorik tumbuh kembang anak-anak.",
      img: "/images/lotus_treatment_physio_child_exercise_ball.jpg",
      bg: "bg-sand-soft",
    },
  ];

  const tools = [
    "Manual Therapy (Kinesioterapi)",
    "Neuromuskular Tapping (NMT)",
    "Infra Red (IR) Lamp",
    "Ultrasound (US) Therapy",
    "Transcutaneus Electrical Stimulation (TENS)",
    "Traksi Lumbal / Cervical (Tarikan Tulang)",
  ];

  const faqs = [
    {
      q: "Apakah layanan Fisioterapi di Lotus dikerjakan secara privat?",
      a: "Ya. Setiap sesi fisioterapi bersifat privat (satu pasien per sesi) di dalam ruangan terapi khusus. Anda akan mendapatkan perhatian penuh dan pendampingan 1-on-1 dari fisioterapis kami tanpa terganggu.",
    },
    {
      q: "Modalitas alat apa saja yang digunakan selama fisioterapi?",
      a: "Kami menggunakan peralatan berstandar medis terakreditasi seperti Neuromuskular Tapping (NMT), Infra Red (IR) Lamp, Ultrasound (US), TENS (stimulasi listrik saraf), serta alat Traksi Lumbal / Cervical untuk traksi tulang.",
    },
    {
      q: "Berapa lama durasi per sesi fisioterapi?",
      a: "Satu sesi fisioterapi berkisar antara 45 hingga 60 menit, mencakup asesmen fungsi gerak awal, terapi manual / stimulasi alat, serta latihan mandiri terarah.",
    },
    {
      q: "Apakah saya perlu membawa rujukan dokter?",
      a: "Tidak wajib. Fisioterapis kami akan melakukan asesmen gerak & fungsi fisik lengkap pada pertemuan pertama untuk mendiagnosa keluhan Anda dan merancang rencana terapi yang aman bagi kondisi Anda.",
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
                <span className="tag-pill bg-blush/40 text-espresso font-bold text-xs uppercase tracking-wider mb-4 inline-block">
                  Rehabilitasi Fisik & Saraf
                </span>
                <h1 className="font-display font-black text-espresso text-5xl lg:text-7.5xl leading-[1.05] tracking-tight">
                  Fisioterapi<br />
                  <span className="text-terra">Pulih Secara Nyaman.</span>
                </h1>
              </div>
              <p className="font-sans text-espresso/70 text-lg leading-relaxed max-w-lg">
                Fisioterapi merupakan tindakan medis penting untuk memelihara, memulihkan, dan memaksimalkan fungsi fisik tubuh pada seluruh rentang usia. Pulih kembali secara percaya diri di ruang terapi privat kami.
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

            {/* Right: Overlapping Editorial Images */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] lg:min-h-[500px]">
              <div className="absolute top-10 left-10 w-4/5 h-4/5 bg-blush-soft rounded-[3rem] -rotate-3" />
              <div className="absolute top-0 right-4 w-[65%] aspect-[3/4] rounded-3xl overflow-hidden shadow-warm-lg img-zoom z-10">
                <Image
                  src="/images/lotus_treatment_physio_adult_ball_exercise_wide.jpg"
                  alt="Sesi Fisioterapi di Lotus Semarang"
                  fill
                  className="object-cover"
                  priority
                  sizes="40vw"
                  quality={85}
                />
              </div>
              <div className="absolute bottom-4 left-4 w-[45%] aspect-square rounded-3xl overflow-hidden shadow-warm-xl border-4 border-white img-zoom z-20">
                <Image
                  src="/images/lotus_treatment_physio_kinesio_tape_knee.jpg"
                  alt="Detail Kinesio Taping Fisioterapi"
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
      <Marquee bg="terra" textClass="text-cream" speed="slow" />

      {/* Sains Section */}
      <section className="section-pad bg-white">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-[3.5rem] overflow-hidden shadow-warm-lg img-zoom">
              <Image
                src="/images/lotus_treatment_body_arm_therapist_interaction.jpg"
                alt="Terapi Manual Mobilisasi Sendi"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
            </div>
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="tag-pill bg-espresso/5 text-espresso/80 font-bold text-xs uppercase tracking-wider self-start">
                Teknologi Modalitas
              </span>
              <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight tracking-tight">
                Pilihan Modalitas Alat Fisioterapi Kami
              </h2>
              <p className="font-sans text-espresso/60 leading-relaxed">
                Fisioterapis kami mengombinasikan manipulasi gerak manual dengan penerapan teknologi alat fisioterapi modern untuk merangsang proses perbaikan jaringan sel saraf dan otot dengan cepat.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-2">
                {tools.map((tool) => (
                  <div key={tool} className="flex items-center gap-3 bg-sand-soft/50 p-4 rounded-2xl shadow-warm border border-espresso/5">
                    <span className="text-terra text-base">✦</span>
                    <span className="font-sans text-xs font-bold text-espresso/80 leading-snug">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="section-pad bg-blush-soft/20 border-y border-espresso/5">
        <div className="container-wellness">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="tag-pill bg-espresso/5 text-espresso/70 font-bold text-xs uppercase tracking-wider mb-4 inline-block">
              Manfaat Utama
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight">
              Kondisi Fisik Yang Kami Tangani
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
            <span className="tag-pill bg-blush/40 text-espresso font-bold text-xs uppercase tracking-wider mb-4 inline-block">
              Alur Pemeriksaan
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight">
              Prosedur Sesi Fisioterapi Anda
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-warm img-zoom mb-2">
                <Image
                  src="/images/lotus_consultation_doctor_patient_model_hijab.jpg"
                  alt="Asesmen Fungsi Gerak Awal"
                  fill
                  className="object-cover"
                  sizes="30vw"
                  quality={80}
                />
              </div>
              <span className="font-display font-black text-terra text-lg">01. Asesmen Gerak & Fungsi</span>
              <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                Fisioterapis kami mengukur keterbatasan sendi, memeriksa titik nyeri otot, serta menganalisis pola gerak alami Anda untuk merancang rencana rehabilitasi yang aman.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-warm img-zoom mb-2">
                <Image
                  src="/images/lotus_treatment_physio_adult_ball_exercise_close.jpg"
                  alt="Sesi Terapi & Latihan Pemulihan"
                  fill
                  className="object-cover"
                  sizes="30vw"
                  quality={80}
                />
              </div>
              <span className="font-display font-black text-terra text-lg">02. Terapi Manual & Alat</span>
              <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                Tindakan terapi pijat medis gerak, kinesioterapi, dikombinasikan dengan stimulasi gelombang ultrasound (US), sinar infra merah, atau tarikan tulang traksi sesuai kebutuhan medis Anda.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-warm img-zoom mb-2">
                <Image
                  src="/images/lotus_treatment_physio_child_exercise_ball.jpg"
                  alt="Edukasi Gerak Mandiri"
                  fill
                  className="object-cover"
                  sizes="30vw"
                  quality={80}
                />
              </div>
              <span className="font-display font-black text-terra text-lg">03. Edukasi Latihan Rumah</span>
              <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                Anda dibekali instruksi gerakan peregangan dan penguatan otot mandiri yang aman dipraktikkan di rumah guna menjaga kelenturan sendi dan mencegah kekambuhan nyeri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-pad bg-blush-soft/20 border-t border-espresso/5">
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
