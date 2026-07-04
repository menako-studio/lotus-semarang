"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

/* ─── Animation Helpers ──────────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.45, 0.05, 0.55, 0.95] },
});

/* ─── Trust Badges ───────────────────────────────────────────────────────── */
const badges = [
  { emoji: "🔒", text: "Privasi Terjamin" },
  { emoji: "⭐", text: "Tenaga Ahli Bersertifikat" },
  { emoji: "🌿", text: "Ramah & Nyaman" },
];

/* ─── Hero Component ─────────────────────────────────────────────────────── */
export function Hero() {
  return (
    <section
      className="min-h-screen flex items-center bg-cream overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-0"
      aria-label="Lotus Health, Beauty & Care — Wellness Privat di Semarang"
    >
      <div className="container-wellness w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-7rem)]">

          {/* ── LEFT: Content ── */}
          <div className="flex flex-col gap-6 lg:gap-8 py-8 lg:py-16">

            {/* Eyebrow pill */}
            <motion.div {...fadeUp(0.1)}>
              <span className="tag-pill bg-sage/30 text-forest font-semibold text-xs">
                ✦ Wellness Privat di Semarang
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="font-display font-black text-espresso"
              style={{
                fontSize: "clamp(2.75rem, 6.5vw, 5.5rem)",
                lineHeight: "1.0",
                letterSpacing: "-0.025em",
              }}
              {...fadeUp(0.2)}
            >
              Sembuh Itu{" "}
              <span
                className="relative inline-block"
                style={{ color: "var(--color-terra)" }}
              >
                Menyenangkan.
                {/* Underline squiggle decoration */}
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8C50 2 100 10 150 5C200 0 250 9 298 4"
                    stroke="#D4845A"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    opacity="0.7"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="font-sans text-espresso/65 leading-relaxed max-w-lg"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}
              {...fadeUp(0.3)}
            >
              Dari akupunktur yang menenangkan hingga hidroterapi yang memulihkan —
              kami menghadirkan perawatan medis berbasis sains dalam suasana yang{" "}
              <em className="not-italic font-semibold text-espresso">hangat, privat, dan bebas rasa canggung.</em>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="flex flex-wrap gap-3" {...fadeUp(0.4)}>
              <a
                href="/reservasi"
                className="btn-pill-dark group gap-2.5 py-4 px-8 text-base"
              >
                Mulai Perjalananmu
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a href="#layanan" className="btn-pill-outline py-4 px-8 text-base">
                Lihat Layanan
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              {...fadeUp(0.5)}
            >
              {badges.map((b) => (
                <div key={b.text} className="flex items-center gap-2">
                  <span className="text-base">{b.emoji}</span>
                  <span className="font-sans text-xs font-medium text-espresso/50">
                    {b.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Image Block ── */}
          <motion.div
            className="relative flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.45, 0.05, 0.55, 0.95] }}
          >
            {/* Background color blob */}
            <div
              className="absolute inset-0 rounded-[3rem] lg:rounded-[4rem] -rotate-3"
              style={{ backgroundColor: "var(--color-peach)", opacity: 0.35 }}
            />

            {/* Floating accent pill — top left */}
            <motion.div
              className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 z-10 bg-sage/80 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-warm"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="font-display font-black text-forest text-lg leading-none">800+</div>
              <div className="font-sans text-[0.6rem] text-forest/70 font-medium mt-0.5">Pasien Puas</div>
            </motion.div>

            {/* Floating accent pill — bottom right */}
            <motion.div
              className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 z-10 bg-cream rounded-2xl px-4 py-3 shadow-warm-lg"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-forest" />
                <div>
                  <div className="font-sans text-[0.6rem] font-semibold text-espresso">100% Privat</div>
                  <div className="font-sans text-[0.55rem] text-espresso/50">Nyaman & Aman</div>
                </div>
              </div>
            </motion.div>

            {/* Main image container — rounded mask */}
            <div
              className="relative w-full max-w-[480px] lg:max-w-none img-zoom"
              style={{ borderRadius: "3rem", overflow: "hidden", aspectRatio: "4/5" }}
            >
              {/* Warm color overlay so even average photos look great */}
              <div
                className="absolute inset-0 z-10 pointer-events-none mix-blend-color"
                style={{ backgroundColor: "#F2C4A8", opacity: 0.15 }}
              />
              <Image
                src="/images/lotus_consultation_doctor_patient_model_hijab.jpg"
                alt="Terapis profesional Lotus Health memberikan perawatan dalam suasana yang nyaman dan privat"
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
