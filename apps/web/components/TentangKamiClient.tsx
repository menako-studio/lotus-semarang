"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";

export function TentangKamiClient() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white text-espresso">
      <Navbar />

      {/* ── 1. THE HERO SECTION (Wide Title + Clean Intro) ── */}
      <section className="pt-32 pb-10 lg:pt-40 lg:pb-16 bg-white">
        <div className="container-wellness text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag-pill bg-blush/20 text-blush-deep font-bold text-xs uppercase tracking-wider mb-5 inline-block border border-blush/20">
              {t("navbar.tentangKami")}
            </span>
          </motion.div>
          <motion.h1
            className="font-display font-black text-espresso text-5xl lg:text-8.5xl leading-[1.02] tracking-tight mb-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {t("tentangKamiPage.title")}
          </motion.h1>
          <motion.p
            className="font-sans text-espresso/70 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t("tentangKamiPage.desc")}
          </motion.p>
        </div>
      </section>

      {/* Wide Banner Image (WTHN Signature) */}
      <section className="px-6 mb-20 lg:mb-28">
        <div className="container-wellness p-0">
          <motion.div
            className="relative rounded-[2rem] md:rounded-[3.5rem] overflow-hidden aspect-[21/9] w-full shadow-warm-lg"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-0 bg-espresso/5 z-10 pointer-events-none" />
            <Image
              src="/images/team-lotus.jpg"
              alt="Lotus Wellness Retreat Semarang"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              quality={85}
            />
          </motion.div>
        </div>
      </section>

      {/* ── 2. THE MISSION STATEMENT SECTION ── */}
      <section className="section-pad bg-white border-t border-espresso/5">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display font-black text-espresso text-3xl md:text-5xl leading-tight tracking-tight">
                {t("tentangKamiPage.missionTitle")}
              </h2>
            </motion.div>
            <motion.div
              className="lg:col-span-7 flex flex-col gap-6 font-sans text-espresso/70 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <p>
                {t("tentangKamiPage.missionDesc1")}
              </p>
              <p>
                {t("tentangKamiPage.missionDesc2")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. THREE-PILLAR STORY BLOCK (Core Values) ── */}
      <section className="section-pad bg-cream-warm/40 border-y border-espresso/5">
        <div className="container-wellness">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <motion.div
              className="flex flex-col gap-4 bg-white/80 p-8 rounded-3xl border border-blush/20 shadow-warm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="font-display font-black text-blush-deep text-lg">{t("tentangKamiPage.values.val1Title")}</span>
              <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                {t("tentangKamiPage.values.val1Desc")}
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-4 bg-white/80 p-8 rounded-3xl border border-sage/20 shadow-warm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="font-display font-black text-forest text-lg">{t("tentangKamiPage.values.val2Title")}</span>
              <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                {t("tentangKamiPage.values.val2Desc")}
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-4 bg-white/80 p-8 rounded-3xl border border-sand/30 shadow-warm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="font-display font-black text-espresso text-lg">{t("tentangKamiPage.values.val3Title")}</span>
              <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                {t("tentangKamiPage.values.val3Desc")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. FOUNDER SECTION (Clean Editorial Block) ── */}
      <section className="section-pad bg-white">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
              className="lg:col-span-5 relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-warm-lg img-zoom"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/images/lotus_team_founder_doctor_portrait.jpg"
                alt="drg. Arini Jannata, S.Tr. Akup, MM"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                quality={85}
              />
            </motion.div>
            <motion.div
              className="lg:col-span-7 flex flex-col gap-6"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <span className="tag-pill bg-blush/20 text-blush-deep font-bold text-xs uppercase tracking-wider self-start border border-blush/20">
                {t("tentangKamiPage.founderTitle")}
              </span>
              <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight tracking-tight">
                {t("tentangKamiPage.founderName")}
              </h2>
              <div className="font-sans text-espresso/70 text-base leading-relaxed flex flex-col gap-4">
                <p>
                  {t("tentangKamiPage.founderDesc1")}
                </p>
                <p>
                  {t("tentangKamiPage.founderDesc2")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 5. SPACE GALLERY (Grid of interior spaces) ── */}
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
              {t("tentangKamiPage.galleryTag")}
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight">
              {t("tentangKamiPage.galleryTitle")}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                src: "/images/lotus_interior_reception_greeting_staff.jpg",
                alt: "Lobi Penerimaan Tamu Lotus"
              },
              {
                src: "/images/lotus_hydrotherapy_pool_male_floating_device.jpg",
                alt: "Kolam Hidroterapi Privat"
              },
              {
                src: "/images/lotus_equipment_kwd808_electro_acupuncture.jpg",
                alt: "Peralatan Terapi Medis Steril"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-warm img-zoom"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  quality={80}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
