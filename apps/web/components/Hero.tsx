"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import { trackEvent } from "@/lib/analytics";

/* ─── Animation Helpers ──────────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

/* ─── Hero Component ─────────────────────────────────────────────────────── */
export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      className="min-h-screen flex items-center bg-cream overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-0"
      aria-label="Lotus Health, Beauty & Care — Akupunktur, Fisioterapi, Hidroterapi"
    >
      <div className="container-wellness w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-7rem)]">

          {/* ── LEFT: Content ── */}
          <div className="flex flex-col gap-6 lg:gap-8 py-8 lg:py-16">

            {/* Eyebrow pill */}
            <motion.div {...fadeUp(0.05)}>
              <span className="font-sans font-bold text-xs md:text-sm text-espresso/60 tracking-wider uppercase">
                {t("hero.eyebrow")}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="font-display font-black text-espresso"
              style={{
                fontSize: "clamp(2.75rem, 6vw, 5.25rem)",
                lineHeight: "1.02",
                letterSpacing: "-0.025em",
              }}
              {...fadeUp(0.15)}
            >
              {t("hero.titleStart")}{" "}
              <span className="relative inline-block text-blush">
                {t("hero.titleEnd")}
                {/* Underline squiggle decoration */}
                <svg
                  className="absolute -bottom-2.5 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8C50 2 100 10 150 5C200 0 250 9 298 4"
                    stroke="#D97087"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="font-sans text-espresso/75 leading-relaxed max-w-lg text-base md:text-lg"
              {...fadeUp(0.25)}
            >
              {t("hero.subheading")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="flex flex-wrap items-center gap-3.5 pt-2" {...fadeUp(0.35)}>
              <a
                href="#layanan"
                onClick={() => trackEvent("click_cta", { cta_name: "Hero Lihat Layanan", cta_location: "hero_primary" })}
                className="btn-pill-dark group gap-2.5 py-4 px-8 text-base shadow-warm"
              >
                {t("hero.ctaServices")}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="/reservasi"
                onClick={() => trackEvent("click_cta", { cta_name: "Hero Reservasi Sekarang", cta_location: "hero_secondary" })}
                className="btn-pill-outline py-4 px-8 text-base"
              >
                {t("hero.ctaStart")}
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT: Image Block ── */}
          <motion.div
            className="relative flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Background color blob */}
            <div
              className="absolute inset-0 rounded-[3rem] lg:rounded-[4rem] -rotate-3 bg-blush/20"
            />

            {/* Main image container — rounded mask */}
            <div
              className="relative w-full max-w-[480px] lg:max-w-none img-zoom shadow-warm-xl"
              style={{ borderRadius: "3rem", overflow: "hidden", aspectRatio: "4/5" }}
            >
              {/* Subtle warm ambient tint */}
              <div
                className="absolute inset-0 z-10 pointer-events-none mix-blend-color bg-blush/10"
              />
              <Image
                src="/images/lotus_consultation_doctor_patient_model_hijab.jpg"
                alt="Terapis profesional Lotus Semarang memberikan perawatan dalam suasana yang nyaman dan privat"
                fill
                priority
                quality={85}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
