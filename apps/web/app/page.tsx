"use client";

import { motion } from "framer-motion";
import { Navbar }       from "@/components/Navbar";
import { Hero }         from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Footer }       from "@/components/Footer";

import { GallerySection } from "@/components/GallerySection";
import { ReelsShowcase } from "@/components/ReelsShowcase";
import { ReviewsSection } from "@/components/ReviewsSection";
import { SearchableFaq } from "@/components/SearchableFaq";
import { TeamShowcase }  from "@/components/TeamShowcase";
import { ContactSection } from "@/components/ContactSection";
import { useLanguage } from "@/components/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white text-espresso">

      {/* ── 1. NAVIGATION & HERO ── */}
      <Navbar />
      <Hero />

      {/* ── 3. SERVICES GRID ── */}
      <ServicesGrid />

      {/* ── 4. THE LOTUS EXPERIENCE (4 Core Pillars & Visual Showcase) ── */}
      <section id="tentang" className="bg-white border-t section-pad border-espresso/5">
        <div className="container-wellness">
          
          <motion.div
            className="mx-auto mb-16 max-w-2xl text-center lg:mb-20"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block mb-4 text-xs font-bold tracking-wider uppercase border tag-pill bg-blush/20 text-blush-deep border-blush/20">
              {t("experience.tagline")}
            </span>
            <h2 className="mb-4 text-3xl font-black leading-tight font-display text-espresso md:text-5xl">
              {t("experience.title")}
            </h2>
            <p className="font-sans text-base leading-relaxed text-espresso/70 md:text-lg">
              {t("experience.desc")}
            </p>
          </motion.div>

          {/* 4 Pillars Grid (Clean, no top emojis, 2 photos removed) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                    <h3 className="mb-3 text-xl font-bold leading-snug font-display text-espresso">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-xs leading-relaxed text-espresso/70 md:text-sm">
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


      {/* ── 6. GALERI LOTUS (Ruang & Fasilitas Klinis Ala Amana) ── */}
      <GallerySection />

      {/* ── 6.5. REELS VIDEO SHOWCASE ── */}
      <ReelsShowcase />

      {/* ── 7. KATA MEREKA (Cerita & Pengalaman Pasien Ala Amana) ── */}
      <ReviewsSection />

      {/* ── 7.5. SEARCHABLE FAQ SECTION ── */}
      <SearchableFaq />

      {/* ── 7.6. AMANA-STYLE CONTACT & MAP SECTION ── */}
      <ContactSection />

      {/* ── 8. FOOTER WITH CTA ── */}
      <Footer />
    </main>
  );
}
