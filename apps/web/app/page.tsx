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

      {/* ── 4. THE LOTUS EXPERIENCE (Alternating split rows) ── */}
      <section id="tentang" className="section-pad bg-white border-t border-espresso/5">
        <div className="container-wellness">
          
          <motion.div
            className="text-center max-w-xl mx-auto mb-16 lg:mb-24"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="tag-pill bg-blush/20 text-blush-deep font-bold text-xs uppercase tracking-wider mb-4 inline-block border border-blush/20">
              {t("experience.tagline")}
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5xl leading-tight">
              {t("experience.title")}
            </h2>
          </motion.div>

          <div className="flex flex-col gap-20 lg:gap-32">
            
            {/* Row 1: Left Text, Right Image */}
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <motion.div
                className="lg:col-span-6 flex flex-col gap-5"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-4xl">🔒</span>
                <h3 className="font-display font-black text-espresso text-3xl lg:text-4xl leading-tight">
                  {t("experience.privacyTitle")}
                </h3>
                <p className="font-sans text-espresso/70 text-base leading-relaxed">
                  {t("experience.privacyDesc")}
                </p>
                <div className="flex flex-wrap gap-4 mt-2">
                  <div className="flex items-center gap-2 bg-sage-soft/60 px-3 py-1.5 rounded-full border border-sage/20">
                    <span className="text-forest font-bold">✓</span>
                    <span className="font-sans text-xs font-bold text-forest">{t("experience.privacyBadge1")}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-sage-soft/60 px-3 py-1.5 rounded-full border border-sage/20">
                    <span className="text-forest font-bold">✓</span>
                    <span className="font-sans text-xs font-bold text-forest">{t("experience.privacyBadge2")}</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="lg:col-span-6 relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-warm-lg img-zoom"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src="/images/lotus_treatment_hydro_female_hijab_float_front.jpg"
                  alt="Relaksasi Hidroterapi Privat Ramah Hijab"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                />
              </motion.div>
            </div>

            {/* Row 2: Left Image, Right Text */}
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <motion.div
                className="lg:col-span-6 order-2 lg:order-1 relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-warm-lg img-zoom"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src="/images/lotus_treatment_body_abdomen_male_patient.jpg"
                  alt="Konsultasi Diagnosa Medis Holistik"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                />
              </motion.div>

              <motion.div
                className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-5"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-4xl">👩‍⚕️</span>
                <h3 className="font-display font-black text-espresso text-3xl lg:text-4xl leading-tight">
                  {t("experience.scienceTitle")}
                </h3>
                <p className="font-sans text-espresso/70 text-base leading-relaxed">
                  {t("experience.scienceDesc")}
                </p>
                <div className="flex flex-wrap gap-4 mt-2">
                  <div className="flex items-center gap-2 bg-blush-soft/60 px-3 py-1.5 rounded-full border border-blush/20">
                    <span className="text-blush-deep font-bold">✓</span>
                    <span className="font-sans text-xs font-bold text-blush-deep">{t("experience.scienceBadge1")}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-blush-soft/60 px-3 py-1.5 rounded-full border border-blush/20">
                    <span className="text-blush-deep font-bold">✓</span>
                    <span className="font-sans text-xs font-bold text-blush-deep">{t("experience.scienceBadge2")}</span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. SCROLLING MARQUEE (Lotus Blush band) ── */}
      <Marquee bg="blush" textClass="text-white" speed="slow" />

      {/* ── 6. GALERI SUASANA (Space Showcase Grid) ── */}
      <section className="section-pad bg-cream-warm/40 border-y border-espresso/5">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="tag-pill bg-sage/30 text-forest font-bold text-xs uppercase tracking-wider mb-4 inline-block">
                {t("gallery.tagline")}
              </span>
              <h2 className="font-display font-black text-espresso text-3xl md:text-5xl leading-tight tracking-tight">
                {t("gallery.title")}
              </h2>
            </motion.div>
            <motion.p
              className="lg:col-span-5 font-sans text-espresso/65 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t("gallery.desc")}
            </motion.p>
          </div>

          {/* Asymmetric Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/lotus_interior_reception_greeting_staff.jpg", alt: "Lobby & Resepsionis Lotus Semarang", mt: "" },
              { src: "/images/lotus_tools_acupuncture_needles_steel_jar.jpg", alt: "Peralatan Terapi Akupunktur Steril", mt: "mt-4 md:mt-0" },
              { src: "/images/lotus_treatment_physio_child_exercise_ball.jpg", alt: "Fisioterapi Anak & Keluarga", mt: "" },
              { src: "/images/swimming-course-lansia-2.jpg", alt: "Kolam Terapi Renang Hangat", mt: "mt-4 md:mt-0" }
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
              
              {/* Review 1 */}
              {reviewsList[0] && (
                <motion.div
                  className="bg-white rounded-3xl p-8 border border-espresso/5 shadow-sm hover:shadow-warm transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blush-soft text-blush-deep font-display font-black flex items-center justify-center text-sm border border-blush/20">
                        IR
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-espresso text-sm">{reviewsList[0].name}</h4>
                        <span className="font-sans text-[0.65rem] text-espresso/50">{reviewsList[0].role}</span>
                      </div>
                    </div>
                    <div className="text-blush text-sm">★★★★★</div>
                  </div>
                  <p className="font-sans text-espresso/70 text-sm leading-relaxed italic">
                    &ldquo;{reviewsList[0].text}&rdquo;
                  </p>
                </motion.div>
              )}

              {/* Review 2 */}
              {reviewsList[1] && (
                <motion.div
                  className="bg-white rounded-3xl p-8 border border-espresso/5 shadow-sm hover:shadow-warm transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-sage-soft text-forest font-display font-black flex items-center justify-center text-sm border border-sage/20">
                        FT
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-espresso text-sm">{reviewsList[1].name}</h4>
                        <span className="font-sans text-[0.65rem] text-espresso/50">{reviewsList[1].role}</span>
                      </div>
                    </div>
                    <div className="text-blush text-sm">★★★★★</div>
                  </div>
                  <p className="font-sans text-espresso/70 text-sm leading-relaxed italic">
                    &ldquo;{reviewsList[1].text}&rdquo;
                  </p>
                </motion.div>
              )}

              {/* Review 3 */}
              {reviewsList[2] && (
                <motion.div
                  className="bg-white rounded-3xl p-8 border border-espresso/5 shadow-sm hover:shadow-warm transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-sand-soft text-espresso font-display font-black flex items-center justify-center text-sm border border-sand/30">
                        BG
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-espresso text-sm">{reviewsList[2].name}</h4>
                        <span className="font-sans text-[0.65rem] text-espresso/50">{reviewsList[2].role}</span>
                      </div>
                    </div>
                    <div className="text-blush text-sm">★★★★★</div>
                  </div>
                  <p className="font-sans text-espresso/70 text-sm leading-relaxed italic">
                    &ldquo;{reviewsList[2].text}&rdquo;
                  </p>
                </motion.div>
              )}

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
