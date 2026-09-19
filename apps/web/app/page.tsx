"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar }       from "@/components/Navbar";
import { Hero }         from "@/components/Hero";
import { Marquee }      from "@/components/Marquee";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Footer }       from "@/components/Footer";

import { GallerySection } from "@/components/GallerySection";
import { ReelsShowcase } from "@/components/ReelsShowcase";
import { SearchableFaq } from "@/components/SearchableFaq";
import { TeamShowcase }  from "@/components/TeamShowcase";
import { ContactSection } from "@/components/ContactSection";
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

          {/* 4 Pillars Grid (Clean, no top emojis, 2 photos removed) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

        </div>
      </section>

      {/* ── 5. TRUST & KREDIBILITAS: KENALI TIM YANG MERAWATMU ── */}
      <TeamShowcase />

      {/* ── 5.5. SCROLLING MARQUEE (Lotus Blush band) ── */}
      <Marquee bg="blush" textClass="text-white" speed="slow" />

      {/* ── 6. GALERI LOTUS (Ruang & Fasilitas Klinis Ala Amana) ── */}
      <GallerySection />

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

      {/* ── 7.6. AMANA-STYLE CONTACT & MAP SECTION ── */}
      <ContactSection />

      {/* ── 8. FOOTER WITH CTA ── */}
      <Footer />
    </main>
  );
}
