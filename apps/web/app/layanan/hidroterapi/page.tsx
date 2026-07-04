"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { Check } from "lucide-react";

export default function HidroterapiPage() {
  const benefits = [
    { title: "Mengurangi Beban Sendi", desc: "Daya apung air menopang berat badan hingga 90%, sangat meringankan tekanan pada sendi yang meradang." },
    { title: "Melancarkan Aliran Darah", desc: "Suhu air hangat membantu melebarkan pembuluh darah, meningkatkan sirkulasi oksigen ke seluruh tubuh." },
    { title: "Relaksasi Otot Maksimal", desc: "Tekanan air teratur membantu memijat otot-otot yang tegang dan memicu pelepasan ketegangan saraf." },
    { title: "Privasi Total & Higienis", desc: "Satu-satunya kolam hidroterapi di Semarang yang disewakan secara privat per sesi demi kenyamanan penuh Anda." },
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
                Rasakan manfaat terapi air hangat bertekanan untuk pemulihan otot dan sendi. Dirancang khusus bagi Anda yang mendambakan privasi tanpa gangguan orang lain.
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

            {/* Right Column: Rounded Image Block */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[3rem] bg-sage/20 -rotate-3" />
              <div className="relative rounded-[3rem] overflow-hidden aspect-[4/3] lg:aspect-[4/5] img-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1576037722146-b28df2632723?w=800&q=80&fit=crop"
                  alt="Kolam Hidroterapi Privat di Lotus Semarang"
                  fill
                  className="object-cover"
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
                Mengapa Sesi Kolam Kami Berbeda?
              </h2>
              <p className="font-sans text-espresso/60 mt-4 leading-relaxed">
                Kami menyediakan lingkungan bebas canggung yang ideal untuk rehabilitasi medis, ibu hamil, maupun kalangan Niqabi yang membutuhkan ruang aman dan tertutup.
              </p>
            </div>
            
            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-warm flex items-center justify-center font-display font-black text-forest text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-display font-bold text-espresso text-lg mb-2">Suhu Air yang Diatur (Warm Pool)</h3>
                  <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                    Suhu air kolam kami dijaga pada kisaran 32°C hingga 34°C, suhu ideal untuk meredakan ketegangan otot dan mempercepat metabolisme tubuh.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-warm flex items-center justify-center font-display font-black text-forest text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-display font-bold text-espresso text-lg mb-2">Jet Air Terapeutik</h3>
                  <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                    Semburan air bertekanan yang diarahkan secara presisi ke area otot atau sendi yang lelah untuk memberikan efek pijatan lembut.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-warm flex items-center justify-center font-display font-black text-forest text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-display font-bold text-espresso text-lg mb-2">Sterilisasi Kualitas Air</h3>
                  <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                    Sistem filtrasi dan sterilisasi air dijalankan secara berkala sebelum dan sesudah sesi untuk menjamin higienitas air yang maksimal bagi kulit sensitif.
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
              Keunggulan Utama
            </span>
            <h2 className="font-display font-black text-espresso text-3xl lg:text-4xl leading-tight">
              Manfaat Hidroterapi untuk Tubuh
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="bg-peach-soft/30 rounded-3xl p-8 flex flex-col gap-3">
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
