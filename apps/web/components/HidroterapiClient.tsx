"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { useLanguage } from "@/components/LanguageContext";
import { ArrowRight, MessageCircle } from "lucide-react";

export function HidroterapiClient() {
  const { t, language } = useLanguage();

  const applications = language === "id" ? [
    {
      title: "Nyeri & Gangguan Muskuloskeletal",
      desc: "Membantu latihan pada berbagai keluhan seperti nyeri sendi, nyeri punggung, kekakuan, serta gangguan gerak pada lutut, pinggang, dan bagian tubuh lainnya.",
      img: "/images/lotus_hydrotherapy_pool_male_floating_device.jpg",
      bg: "bg-hydro-soft/80 border border-hydro/20",
    },
    {
      title: "Rehabilitasi & Pemulihan Gerak",
      desc: "Mendukung latihan gerak, kekuatan, keseimbangan, dan koordinasi pada pasien dalam proses pemulihan, termasuk setelah stroke atau tindakan operasi.",
      img: "/images/lotus_treatment_hydro_adult_dumbbell_therapy.jpg",
      bg: "bg-sage-soft/80 border border-sage/20",
    },
    {
      title: "Tumbuh Kembang Anak",
      desc: "Media air dapat digunakan untuk mendukung stimulasi gerak dan perkembangan motorik anak melalui latihan yang disesuaikan dengan kondisi dan kebutuhannya.",
      img: "/images/lotus_treatment_baby_group_foot_hijab.webp",
      bg: "bg-blush-soft/80 border border-blush/20",
    },
    {
      title: "Kehamilan",
      desc: "Membantu dalam persiapan kehamilan, mendukung kebutuhan gerak pada masa kehamilan dan persiapan persalinan.",
      img: "/images/swimming-course-lansia-2.jpg",
      bg: "bg-sand-soft/80 border border-sand/30",
    },
  ] : [
    {
      title: "Musculoskeletal Pain & Mobility Disorders",
      desc: "Supports movement training for various conditions such as joint pain, back pain, stiffness, and knee or lower back mobility challenges.",
      img: "/images/lotus_hydrotherapy_pool_male_floating_device.jpg",
      bg: "bg-hydro-soft/80 border border-hydro/20",
    },
    {
      title: "Rehabilitation & Movement Recovery",
      desc: "Fosters progressive movement, muscular strength, balance, and coordination recovery, including post-stroke rehabilitation and post-surgical care.",
      img: "/images/lotus_treatment_hydro_adult_dumbbell_therapy.jpg",
      bg: "bg-sage-soft/80 border border-sage/20",
    },
    {
      title: "Child Growth & Motor Stimulation",
      desc: "Water provides a gentle, encouraging medium to stimulate pediatric movement and motor development tailored to each child's pace.",
      img: "/images/lotus_treatment_baby_group_foot_hijab.webp",
      bg: "bg-blush-soft/80 border border-blush/20",
    },
    {
      title: "Prenatal & Pregnancy Support",
      desc: "Supports gentle mobility throughout pregnancy, eases lower back tension, and assists in healthy labor preparation.",
      img: "/images/swimming-course-lansia-2.jpg",
      bg: "bg-sand-soft/80 border border-sand/30",
    },
  ];

  const mechanisms = language === "id" ? [
    {
      num: "01",
      title: "Daya Apung Air",
      desc: "Daya apung air membantu mengurangi beban tubuh, sehingga tekanan pada sendi dan tubuh menjadi lebih ringan. Kondisi ini memungkinkan pasien melakukan latihan gerak yang mungkin terasa lebih sulit ketika dilakukan di darat.",
    },
    {
      num: "02",
      title: "Tekanan Air",
      desc: "Tekanan air memberikan rangsangan pada tubuh dan membantu mendukung sirkulasi darah selama latihan di dalam air.",
    },
    {
      num: "03",
      title: "Kolam Privat, Didampingi Fisioterapis",
      desc: "Efek relaksasi dari air membuat latihan terasa lebih nyaman dan menyenangkan. Di Lotus, hidroterapi dilakukan di kolam privat dengan suasana semi-outdoor yang teduh, sehingga pasien dapat berlatih dengan lebih tenang dan leluasa bersama fisioterapis.",
    },
  ] : [
    {
      num: "01",
      title: "Water Buoyancy",
      desc: "Water buoyancy dramatically relieves body weight and joint pressure. This enables patients to perform range-of-motion exercises that might feel difficult or painful on land.",
    },
    {
      num: "02",
      title: "Hydrostatic Pressure",
      desc: "Gentle hydrostatic water pressure stimulates soft tissues and supports healthy cardiovascular and lymphatic circulation during exercise.",
    },
    {
      num: "03",
      title: "Private Pool with 1:1 Physiotherapist",
      desc: "Water relaxation makes recovery comforting and enjoyable. At Lotus, therapy takes place in a sheltered semi-outdoor private pool with undivided 1-on-1 guidance from a licensed physiotherapist.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              className="lg:col-span-6 flex flex-col gap-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div>
                <span className="tag-pill bg-hydro-soft text-hydro-deep font-bold text-xs uppercase tracking-wider mb-4 inline-block border border-hydro/30">
                  {language === "id" ? "Layanan Terapi" : "Therapy Service"}
                </span>
                <h1 className="font-display font-black text-espresso text-5xl lg:text-7.5xl leading-[1.05] tracking-tight">
                  Hidroterapi
                </h1>
              </div>
              <p className="font-sans text-espresso/70 text-lg leading-relaxed max-w-lg">
                {language === "id"
                  ? "Hidroterapi merupakan tindakan fisioterapi yang memanfaatkan media air. Sifat fisik air membantu meringankan beban tubuh, sehingga latihan gerak dapat dilakukan dengan lebih ringan dan mudah dibandingkan latihan di darat. Efek relaksasi dari air membuat proses latihan terasa lebih nyaman dan menyenangkan, sekaligus mendukung proses pemulihan. Di Lotus, setiap sesi dilakukan dalam kolam privat bersama fisioterapis."
                  : "Hydrotherapy is physiotherapy utilizing water as a therapeutic medium. The buoyancy relieves body weight, allowing movement exercises to feel gentler and easier than on land. At Lotus, each session is held in a private pool with dedicated 1:1 physiotherapist supervision."}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/reservasi"
                  className="btn-pill-dark font-bold text-sm px-8 py-4 shadow-warm group inline-flex items-center gap-2"
                >
                  {language === "id" ? "Reservasi Sekarang" : "Reserve Now"}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={`https://wa.me/6287700303645?text=${encodeURIComponent(language === "id" ? "Halo Lotus, mau tanya tentang layanan Hidroterapi" : "Hello Lotus, I'd like to ask about Hydrotherapy")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-outline font-bold text-sm px-8 py-4 inline-flex items-center gap-2"
                >
                  <MessageCircle size={16} className="text-forest" />
                  {language === "id" ? "Tanya Admin" : "Ask Admin"}
                </a>
              </div>
            </motion.div>

            {/* Right: Editorial Images */}
            <motion.div
              className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] lg:min-h-[500px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute top-10 left-10 w-4/5 h-4/5 bg-hydro-soft rounded-[3rem] -rotate-3" />
              <div className="absolute top-0 right-4 w-[65%] aspect-[3/4] rounded-3xl overflow-hidden shadow-warm-lg img-zoom z-10">
                <Image
                  src="/images/lotus_hydrotherapy_pool_male_floating_device.jpg"
                  alt="Sesi Hidroterapi Privat Lotus"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={85}
                />
              </div>
              <div className="absolute bottom-4 left-4 w-[45%] aspect-square rounded-3xl overflow-hidden shadow-warm-xl border-4 border-white img-zoom z-20">
                <Image
                  src="/images/swimming-course-lansia-2.jpg"
                  alt="Kolam Terapi Semi Outdoor Teduh"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  quality={80}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Marquee Accent */}
      <Marquee bg="espresso" textClass="text-cream" speed="slow" />

      {/* Mechanism Section: Bagaimana Cara Kerja Hidroterapi? */}
      <section className="section-pad bg-white">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
              className="lg:col-span-6 relative aspect-[4/3] rounded-[3.5rem] overflow-hidden shadow-warm-lg img-zoom"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/images/lotus_treatment_hydro_adult_dumbbell_therapy.jpg"
                alt="Fisioterapis Mendampingi Hidroterapi"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
            </motion.div>
            <motion.div
              className="lg:col-span-6 flex flex-col gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <span className="tag-pill bg-espresso/5 text-espresso/80 font-bold text-xs uppercase tracking-wider self-start">
                {language === "id" ? "Cara Kerja Terapi" : "How It Works"}
              </span>
              <h2 className="font-display font-black text-espresso text-3xl md:text-5xl leading-tight tracking-tight">
                {language === "id" ? "Bagaimana Cara Kerja Hidroterapi?" : "How Does Hydrotherapy Work?"}
              </h2>
              <div className="flex flex-col gap-6 mt-4">
                {mechanisms.map((mech, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-hidro-soft text-hydro-deep flex items-center justify-center font-display font-black text-lg flex-shrink-0 border border-hidro/30">
                      {mech.num}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-espresso text-lg mb-1">
                        {mech.title}
                      </h3>
                      <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                        {mech.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications Grid: Kasus & Penanganan */}
      <section className="section-pad bg-cream-warm/40 border-t border-espresso/5">
        <div className="container-wellness">
          <motion.div
            className="text-center max-w-xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag-pill bg-espresso/5 text-espresso/70 font-bold text-xs uppercase tracking-wider mb-4 inline-block">
              {language === "id" ? "Kasus & Penanganan" : "Cases & Treatments"}
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight">
              {language === "id" ? "Bidang Aplikasi Hidroterapi" : "Hydrotherapy Applications"}
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {applications.map((app, i) => (
              <motion.div
                key={i}
                className={`${app.bg} rounded-[2.5rem] p-8 lg:p-10 flex flex-col gap-6 shadow-warm hover:-translate-y-1.5 transition-all duration-300`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
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
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      quality={80}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <Link
              href="/reservasi"
              className="btn-pill-dark font-bold text-sm px-8 py-4 shadow-warm inline-flex items-center gap-2"
            >
              {language === "id" ? "Reservasi Sekarang" : "Reserve Now"}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
