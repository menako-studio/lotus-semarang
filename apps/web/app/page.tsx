"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar }       from "@/components/Navbar";
import { Hero }         from "@/components/Hero";
import { Marquee }      from "@/components/Marquee";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Footer }       from "@/components/Footer";

import { ReelsShowcase } from "@/components/ReelsShowcase";
import { SearchableFaq } from "@/components/SearchableFaq";
import { TeamShowcase }  from "@/components/TeamShowcase";
import { useLanguage } from "@/components/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();

  const reviewsList = t("reviews.list") || [];

  return (
    <main className="min-h-screen bg-white text-espresso">

      {/* ── 1. NAVIGATION & HERO ── */}
      <Navbar />
      <Hero />

      {/* ── 2. SCROLLING MARQUEE (Dark band) ── */}
      <Marquee bg="espresso" textClass="text-cream" speed="normal" />

      {/* ── 3. SERVICES GRID ── */}
      <ServicesGrid />

      {/* ── 4. THE LOTUS EXPERIENCE (4 Core Pillars & Visual Showcase) ── */}
      <section id="tentang" className="section-pad bg-white border-t border-espresso/5">
        <div className="container-wellness">
          
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="tag-pill bg-blush/20 text-blush-deep font-bold text-xs uppercase tracking-wider mb-4 inline-block border border-blush/20">
              {t("experience.tagline")}
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5xl leading-tight mb-4">
              {t("experience.title")}
            </h2>
            <p className="font-sans text-espresso/70 text-base md:text-lg leading-relaxed">
              {t("experience.desc")}
            </p>
          </motion.div>

          {/* 4 Pillars Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {((t("experience.pillars") as any[]) || []).map((pillar: any, index: number) => {
              const bgColors = [
                "bg-blush-soft/40 border-blush/25",
                "bg-cream-warm border-espresso/10",
                "bg-sage-soft/40 border-sage/25",
                "bg-sand-soft/40 border-sand/30",
              ];
              return (
                <motion.div
                  key={pillar.title}
                  className={`rounded-[2rem] p-7 border ${bgColors[index % bgColors.length]} shadow-warm flex flex-col justify-between`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div>
                    <span className="text-3.5xl mb-4 block">{pillar.emoji}</span>
                    <h3 className="font-display font-bold text-espresso text-xl mb-3 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-espresso/70 text-xs md:text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Dual Visual Showcase: Female & Male Patient Care (Professional & Aesthetic) */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 items-center">
            <motion.div
              className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-warm-lg img-zoom border border-espresso/5"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/images/lotus_treatment_hydro_female_hijab_float_front.jpg"
                alt="Pelayanan Terapi Privat dan Ramah Hijab di Lotus Semarang"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent z-10" />
              <div className="absolute bottom-5 left-6 right-6 z-20 text-white font-sans text-xs md:text-sm font-semibold">
                Privasi Terjaga Penuh · Ramah Pasien Wanita & Hijab
              </div>
            </motion.div>

            <motion.div
              className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-warm-lg img-zoom border border-espresso/5"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <Image
                src="/images/lotus_hydrotherapy_pool_male_floating_device.jpg"
                alt="Latihan Terapi Medis Pasien Pria di Kolam Privat Lotus Semarang"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent z-10" />
              <div className="absolute bottom-5 left-6 right-6 z-20 text-white font-sans text-xs md:text-sm font-semibold">
                Pelayanan Terapi Profesional untuk Seluruh Pasien & Keluarga
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── 5. TRUST & KREDIBILITAS: KENALI TIM YANG MERAWATMU ── */}
      <TeamShowcase />

      {/* ── 5.5. SCROLLING MARQUEE (Lotus Blush band) ── */}
      <Marquee bg="blush" textClass="text-white" speed="slow" />

      {/* ── 6. GALERI LOTUS (Ruang & Fasilitas Klinis) ── */}
      <section className="section-pad bg-cream-warm/40 border-y border-espresso/5">
        <div className="container-wellness">
          <div className="text-center max-w-xl mx-auto mb-12">
            <motion.span
              className="tag-pill bg-sage/30 text-forest font-bold text-xs uppercase tracking-wider mb-4 inline-block"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t("gallery.tagline")}
            </motion.span>
            <motion.h2
              className="font-display font-black text-espresso text-3xl md:text-5xl leading-tight tracking-tight"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t("gallery.title")}
            </motion.h2>
          </div>

          {/* Asymmetric Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/lotus_interior_reception_greeting_staff.jpg", alt: "Lobby & Resepsionis Lotus Semarang", mt: "" },
              { src: "/images/lotus_tools_acupuncture_needles_steel_jar.jpg", alt: "Peralatan Terapi Akupunktur Steril", mt: "mt-4 md:mt-0" },
              { src: "/images/lotus_treatment_physio_child_exercise_ball.jpg", alt: "Fisioterapi Anak & Keluarga", mt: "" },
              { src: "/images/swimming-course-lansia-2.jpg", alt: "Kolam Terapi Privat Semi-Outdoor", mt: "mt-4 md:mt-0" }
            ].map((img, idx) => (
              <motion.div
                key={idx}
                className={`relative rounded-3xl overflow-hidden aspect-square img-zoom shadow-warm ${img.mt}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={80}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6.5. REELS VIDEO SHOWCASE ── */}
      <ReelsShowcase />

      {/* ── 7. GOOGLE REVIEWS SHOWCASE ── */}
      <section className="section-pad bg-white">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Google Ratings Card */}
            <motion.div
              className="lg:col-span-4 bg-sand-soft/30 rounded-[2.5rem] p-8 border border-espresso/5 flex flex-col gap-6 lg:sticky lg:top-32 shadow-warm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm font-sans font-black text-espresso text-lg border border-espresso/5">
                  G
                </span>
                <div>
                  <div className="font-display font-bold text-espresso text-base">{t("reviews.gmaps")}</div>
                  <div className="font-sans text-xs text-espresso/50">Lotus Health, Beauty & Care</div>
                </div>
              </div>

              <div>
                <div className="font-display font-black text-espresso text-6xl leading-none">4.9</div>
                <div className="text-blush text-xl mt-2 tracking-wide">★★★★★</div>
                <p className="font-sans text-espresso/60 text-xs mt-2">
                  {t("reviews.sub")}
                </p>
              </div>

              <a
                href="https://maps.app.goo.gl/PWpA655K59Gq82Xy9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-dark text-center w-full py-3.5 text-xs font-bold"
              >
                {t("reviews.cta")}
              </a>
            </motion.div>

            {/* Right: Curated Reviews list */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {reviewsList.map((review: any, idx: number) => {
                const avatarThemes = [
                  "bg-blush-soft text-blush-deep border-blush/20",
                  "bg-sage-soft text-forest border-sage/20",
                  "bg-sand-soft text-espresso border-sand/30",
                  "bg-cream-warm text-espresso border-espresso/10",
                  "bg-hydro-soft text-hydro-muted border-hydro/30",
                ];
                const initials = review.name
                  .split(" ")
                  .slice(0, 2)
                  .map((w: string) => w[0])
                  .join("")
                  .toUpperCase();

                return (
                  <motion.div
                    key={idx}
                    className="bg-white rounded-3xl p-7 md:p-8 border border-espresso/6 shadow-sm hover:shadow-warm transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-11 h-11 rounded-full font-display font-black flex items-center justify-center text-sm border ${avatarThemes[idx % avatarThemes.length]}`}>
                          {initials}
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-espresso text-base">{review.name}</h4>
                          <span className="font-sans text-xs text-espresso/55">{review.role}</span>
                        </div>
                      </div>
                      <div className="text-blush text-sm">★★★★★</div>
                    </div>
                    <p className="font-sans text-espresso/75 text-sm md:text-base leading-relaxed italic">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── 7.5. SEARCHABLE FAQ SECTION ── */}
      <SearchableFaq />

      {/* ── 8. FOOTER WITH CTA ── */}
      <Footer />
    </main>
  );
}
