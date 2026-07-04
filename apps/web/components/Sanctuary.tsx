"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

/* ─── Copy — Bahasa Indonesia ─────────────────────────────────────────────── */
const copy = {
  eyebrow: "Tentang Kami",
  pullQuote:
    "\"Setiap tetes air membawa keheningan.\nSetiap momen adalah milik Anda sepenuhnya.\"",
  body1:
    "Lotus Semarang lahir dari satu keyakinan: bahwa kemewahan sejati bukan tentang apa yang Anda miliki, melainkan tentang kedamaian yang Anda rasakan. Kami menciptakan ruang suaka yang benar-benar privat — kolam renang pribadi Anda, waktu Anda, privasi mutlak Anda.",
  body2:
    "Dirancang khusus untuk mereka yang menghargai ketenangan dan kerahasiaan, Lotus Semarang menawarkan pengalaman hydrotherapy dan relaksasi di air yang tidak akan Anda temukan di tempat lain. Setiap sesi dijamin eksklusif — tanpa tamu lain, tanpa gangguan.",
  stat1Label: "Meter Persegi",
  stat1Val:   "800+",
  stat2Label: "Jam Privasi",
  stat2Val:   "24/7",
  stat3Label: "Kapasitas Eksklusif",
  stat3Val:   "Hanya Anda",
  caption1: "Kolam Renang Privat Utama",
  caption2: "Ruang Hydrotherapy",
  caption3: "Taman Ketenangan",
};

/* ─── Image References ────────────────────────────────────────────────────── */
const images = {
  main:   "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1400&q=85&fit=crop",
  inset:  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=85&fit=crop",
  detail: "https://images.unsplash.com/photo-1531256379416-9f000e90aacc?w=900&q=85&fit=crop",
};

/* ─── Reusable scroll-reveal hook ────────────────────────────────────────── */
function useReveal(threshold = 0.2) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  return { ref, isInView };
}

/* ─── Animation Variants ──────────────────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] } },
};

const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1] } },
};

const slideLeft = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } },
};

/* ─── Sanctuary Component ─────────────────────────────────────────────────── */
export function Sanctuary() {
  const heading = useReveal(0.15);
  const text    = useReveal(0.2);
  const gallery = useReveal(0.1);
  const stats   = useReveal(0.3);

  return (
    <section
      id="tentang"
      className="bg-ivory section-padding overflow-hidden"
      aria-label="Tentang Lotus Semarang"
    >
      <div className="container-luxury">

        {/* ── Row 1: Eyebrow + Pull-quote ──────────────────────────────── */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 mb-20 lg:mb-28">
          {/* Left — eyebrow + accent */}
          <motion.div
            ref={heading.ref}
            className="flex flex-col gap-6 pt-2"
            initial="hidden"
            animate={heading.isInView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.span className="text-eyebrow" variants={fadeUp}>
              {copy.eyebrow}
            </motion.span>
            <motion.div
              className="w-px bg-stone-300 self-start"
              style={{ height: "80px" }}
              variants={{
                hidden:  { scaleY: 0, originY: 0 },
                visible: { scaleY: 1, originY: 0, transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.3 } },
              }}
            />
          </motion.div>

          {/* Right — Pull-quote */}
          <motion.div
            initial="hidden"
            animate={heading.isInView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } } }}
          >
            <motion.h2
              className="pull-quote text-charcoal mb-8 whitespace-pre-line"
              variants={fadeUp}
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                lineHeight: "1.35",
              }}
            >
              {copy.pullQuote}
            </motion.h2>
            <motion.div className="w-16 h-px bg-stone-300" variants={fadeIn} />
          </motion.div>
        </div>

        {/* ── Row 2: Asymmetric Gallery + Body Text ──────────────────── */}
        <div className="grid lg:grid-cols-[55%_45%] gap-8 lg:gap-12 items-start">

          {/* Left — Editorial Image Grid */}
          <motion.div
            ref={gallery.ref}
            className="relative"
            initial="hidden"
            animate={gallery.isInView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {/* Large main image */}
            <motion.div
              className="img-hover-zoom relative aspect-[4/5] overflow-hidden mb-4"
              variants={{
                hidden:  { opacity: 0, scale: 1.04 },
                visible: { opacity: 1, scale: 1, transition: { duration: 1.4, ease: [0.76, 0, 0.24, 1] } },
              }}
            >
              <Image
                src={images.main}
                alt={copy.caption1}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-charcoal/60 to-transparent">
                <span className="text-eyebrow text-ivory/70 text-[0.55rem]">
                  {copy.caption1}
                </span>
              </div>
            </motion.div>

            {/* Two inset images — offset for asymmetry */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="img-hover-zoom relative aspect-[3/4] overflow-hidden"
                variants={{
                  hidden:  { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] } },
                }}
              >
                <Image
                  src={images.inset}
                  alt={copy.caption2}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 50vw, 28vw"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/50 to-transparent">
                  <span className="text-eyebrow text-ivory/70 text-[0.55rem]">{copy.caption2}</span>
                </div>
              </motion.div>

              {/* Offset inset — sits higher for stagger effect */}
              <motion.div
                className="img-hover-zoom relative aspect-[3/4] overflow-hidden mt-8"
                variants={{
                  hidden:  { opacity: 0, y: 32 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1], delay: 0.1 } },
                }}
              >
                <Image
                  src={images.detail}
                  alt={copy.caption3}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 50vw, 28vw"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/50 to-transparent">
                  <span className="text-eyebrow text-ivory/70 text-[0.55rem]">{copy.caption3}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Body Copy + Stats, sticky to top */}
          <motion.div
            ref={text.ref}
            className="lg:sticky lg:top-32 flex flex-col gap-8 pt-4 lg:pt-16"
            initial="hidden"
            animate={text.isInView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } } }}
          >
            <motion.p className="font-sans text-charcoal-400 leading-[1.85]" variants={fadeUp}
              style={{ fontSize: "clamp(0.875rem, 1.2vw, 1rem)" }}>
              {copy.body1}
            </motion.p>

            <motion.p className="font-sans text-charcoal-400 leading-[1.85]" variants={fadeUp}
              style={{ fontSize: "clamp(0.875rem, 1.2vw, 1rem)" }}>
              {copy.body2}
            </motion.p>

            {/* Divider */}
            <motion.div className="divider" variants={fadeIn} />

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6"
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            >
              {[
                { val: copy.stat1Val, label: copy.stat1Label },
                { val: copy.stat2Val, label: copy.stat2Label },
                { val: copy.stat3Val, label: copy.stat3Label },
              ].map((stat, i) => (
                <motion.div key={i} className="flex flex-col gap-1.5" variants={fadeUp}>
                  <span
                    className="font-serif text-charcoal"
                    style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)", letterSpacing: "-0.02em" }}
                  >
                    {stat.val}
                  </span>
                  <span className="text-eyebrow leading-snug" style={{ fontSize: "0.58rem" }}>
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA link */}
            <motion.div variants={fadeUp}>
              <a
                href="#fasilitas"
                className="group inline-flex items-center gap-3 font-sans text-charcoal hover:text-charcoal-400 transition-colors duration-300"
                style={{ fontSize: "0.7rem", letterSpacing: "0.18em" }}
              >
                <span className="uppercase tracking-widest">Temukan Lebih Banyak</span>
                <span className="w-10 h-px bg-current transition-all duration-500 group-hover:w-16" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Row 3: Full-width textured quote band ────────────────────── */}
        <motion.div
          className="mt-24 lg:mt-32 border-y border-stone-300/40 py-16 lg:py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.5 }}
        >
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <span className="text-eyebrow">Filosofi Kami</span>
            </div>
            <div className="lg:col-span-2">
              <p
                className="font-serif italic text-charcoal"
                style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)", lineHeight: "1.55", letterSpacing: "-0.01em" }}
              >
                Kemewahan sejati adalah ketika Anda tak perlu berbagi ketenangan Anda dengan siapapun.
                Di Lotus Semarang, setiap sesi adalah dunia milik Anda.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
