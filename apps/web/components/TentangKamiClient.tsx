"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";

export function TentangKamiClient() {
  const { t } = useLanguage();

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <main className="min-h-screen bg-white text-espresso">
      <Navbar />

      {/* ── 1. THE HERO SECTION (Wide Title + Clean Intro) ── */}
      <section className="pt-32 pb-10 lg:pt-40 lg:pb-16 bg-white">
        <div className="container-wellness text-center max-w-4xl">
          <motion.div {...fadeUp(0)}>
            <span className="tag-pill bg-peach/40 text-terra font-bold text-xs uppercase tracking-wider mb-5 inline-block">
              {t("navbar.tentangKami")}
            </span>
          </motion.div>
          <motion.h1
            className="font-display font-black text-espresso text-5xl lg:text-8.5xl leading-[1.02] tracking-tight mb-8"
            {...fadeUp(0.1)}
          >
            {t("tentangKamiPage.title")}
          </motion.h1>
          <motion.p
            className="font-sans text-espresso/70 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
            {...fadeUp(0.2)}
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
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-espresso/5 z-10 pointer-events-none" />
            <Image
              src="/images/team-lotus.jpg"
              alt="Lotus Wellness Retreat Semarang"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={85}
            />
          </motion.div>
        </div>
      </section>

      {/* ── 2. THE MISSION STATEMENT SECTION ── */}
      <section className="section-pad bg-white border-t border-espresso/5">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-display font-black text-espresso text-3xl md:text-5xl leading-tight tracking-tight">
                {t("tentangKamiPage.missionTitle")}
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6 font-sans text-espresso/70 text-base md:text-lg leading-relaxed">
              <p>
                {t("tentangKamiPage.missionDesc1")}
              </p>
              <p>
                {t("tentangKamiPage.missionDesc2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. THREE-PILLAR STORY BLOCK (Core Values) ── */}
      <section className="section-pad bg-sand-soft/30 border-y border-espresso/5">
        <div className="container-wellness">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="flex flex-col gap-4">
              <span className="font-display font-black text-terra text-lg">{t("tentangKamiPage.values.val1Title")}</span>
              <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                {t("tentangKamiPage.values.val1Desc")}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-display font-black text-forest text-lg">{t("tentangKamiPage.values.val2Title")}</span>
              <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                {t("tentangKamiPage.values.val2Desc")}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-display font-black text-espresso-400 text-lg">{t("tentangKamiPage.values.val3Title")}</span>
              <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                {t("tentangKamiPage.values.val3Desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. FOUNDER SECTION (Clean Editorial Block) ── */}
      <section className="section-pad bg-white">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-warm-lg img-zoom">
              <Image
                src="/images/lotus_team_founder_doctor_portrait.jpg"
                alt="drg. Arini Jannata, S.Tr. Akup, MM"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                quality={85}
              />
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="tag-pill bg-peach/40 text-terra font-bold text-xs uppercase tracking-wider self-start">
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
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SPACE GALLERY (Grid of interior spaces) ── */}
      <section className="section-pad bg-peach-soft/20 border-t border-espresso/5">
        <div className="container-wellness">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="tag-pill bg-espresso/5 text-espresso/70 font-bold text-xs uppercase tracking-wider mb-4 inline-block">
              {t("tentangKamiPage.galleryTag")}
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight">
              {t("tentangKamiPage.galleryTitle")}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-warm img-zoom">
              <Image
                src="/images/lotus_interior_reception_greeting_staff.jpg"
                alt="Lobi Penerimaan Tamu Lotus"
                fill
                className="object-cover"
                sizes="30vw"
                quality={80}
              />
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-warm img-zoom">
              <Image
                src="/images/lotus_hydrotherapy_pool_male_floating_device.jpg"
                alt="Kolam Hidroterapi Privat"
                fill
                className="object-cover"
                sizes="30vw"
                quality={80}
              />
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-warm img-zoom">
              <Image
                src="/images/lotus_equipment_kwd808_electro_acupuncture.jpg"
                alt="Peralatan Terapi Medis Steril"
                fill
                className="object-cover"
                sizes="30vw"
                quality={80}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
