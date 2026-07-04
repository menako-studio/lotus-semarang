"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { Check } from "lucide-react";

export default function HidroterapiPage() {
  const treatments = [
    { title: "Mereduksi Tekanan Sendi", desc: "Daya apung fisika air menopang berat badan Anda, meringankan tekanan sendi pinggang, lutut, dan kaki selama latihan." },
    { title: "Pemulihan Stroke & Saraf", desc: "Latihan motorik dan keseimbangan pasca operasi/stroke menjadi jauh lebih mudah dilakukan di dalam air hangat." },
    { title: "Relaksasi & Sirkulasi", desc: "Suhu hangat melancarkan aliran darah, mengurangi ketegangan saraf, dan memberikan efek relaksasi yang mempercepat penyembuhan." },
    { title: "Tumbuh Kembang & Kehamilan", desc: "Sangat baik untuk latihan stimulasi gerak motorik anak-anak serta olahraga kehamilan yang aman bebas risiko benturan." },
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
                <span className="tag-pill bg-sage/40 text-forest font-semibold text-xs mb-4 inline-block">
                  Layanan Unggulan
                </span>
                <h1 className="font-display font-black text-espresso text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                  Hidroterapi<br />
                  <span className="text-forest">Suaka Air Privat.</span>
                </h1>
              </div>
              <p className="font-sans text-espresso/70 text-lg leading-relaxed max-w-lg">
                Hidroterapi merupakan tindakan fisioterapi yang menggunakan media air hangat. Adanya sifat fisika air meringankan massa tubuh sehingga membuat gerakan rehabilitasi terasa lebih ringan dan menyenangkan dibanding di darat.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://wa.me/6281802537509?text=Halo%20Lotus%20Semarang%2C%20saya%20tertarik%20dengan%20layanan%20Hidroterapi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-dark font-bold text-sm px-8 py-4"
                >
                  Pesan Sesi Hidroterapi
                </a>
                <a
                  href="https://wa.me/6281802537509?text=Halo%20Lotus%2C%20mau%20tanya%20detail%20kolam%20Hidroterapi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-outline font-bold text-sm px-8 py-4"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>

            {/* Right Column: Rounded Image Block */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[3rem] bg-sage/20 -rotate-3" />
              <div className="relative rounded-[3rem] overflow-hidden aspect-[4/3] lg:aspect-[4/5] img-zoom">
                <Image
                  src="/images/lotus_treatment_hydro_female_hijab_supine_wide.jpg"
                  alt="Kolam Hidroterapi Privat di Lotus Semarang"
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
      <Marquee bg="sage" textClass="text-forest" speed="slow" />

      {/* Expectation Details Section */}
      <section className="section-pad bg-sage-soft/30">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-[1.5fr_2fr] gap-12 lg:gap-20">
            <div>
              <span className="tag-pill bg-espresso/5 text-espresso/70 font-semibold text-xs mb-4 inline-block">
                Fasilitas Kolam
              </span>
              <h2 className="font-display font-black text-espresso text-3xl lg:text-4xl leading-tight tracking-tight">
                Mengapa Hidroterapi Lotus Begitu Efektif?
              </h2>
              <p className="font-sans text-espresso/60 mt-4 leading-relaxed">
                Kondisi privat menjaga Anda bebas dari canggung, sementara suhu air hangat terapeutik yang terkendali merangsang relaksasi saraf secara alami.
              </p>
            </div>
            
            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-warm flex items-center justify-center font-display font-black text-forest text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-display font-bold text-espresso text-lg mb-2">Relaksasi Apung Tubuh</h3>
                  <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                    Sifat fisika air secara langsung mengurangi gaya gravitasi tubuh Anda, mengistirahatkan otot yang tegang, dan memudahkan sendi lutut/pinggang bergerak bebas nyeri.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-warm flex items-center justify-center font-display font-black text-forest text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-display font-bold text-espresso text-lg mb-2">Jet Aliran Air Hangat</h3>
                  <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                    Kolam dilengkapi dengan semburan tekanan air terapeutik pada titik optimal untuk membantu memicu sirkulasi darah serta pemulihan otot pasca cedera/operasi.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-warm flex items-center justify-center font-display font-black text-forest text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-display font-bold text-espresso text-lg mb-2">Higienitas Terjaga</h3>
                  <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                    Air disaring dan distabilkan secara teratur agar higienitas terjaga 100%, ramah untuk kulit anak-anak maupun terapi ibu hamil.
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
            <span className="tag-pill bg-peach/40 text-terra font-semibold text-xs mb-3 inline-block">
              Aplikasi Klinis
            </span>
            <h2 className="font-display font-black text-espresso text-3xl lg:text-4xl leading-tight">
              Manfaat Nyata Terapi Air Hangat
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {treatments.map((t) => (
              <div key={t.title} className="bg-peach-soft/30 rounded-3xl p-8 flex flex-col gap-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-forest flex-shrink-0 shadow-warm">
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
