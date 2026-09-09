"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Waves, Activity, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import { trackServiceClick } from "@/lib/analytics";

/* ─── ServicesGrid Component ──────────────────────────────────────────────── */
export function ServicesGrid() {
  const { t } = useLanguage();

  const healthServices = [
    {
      id: "akupunktur",
      number: "01",
      name: t("services.akupunktur.name"),
      tagline: t("services.akupunktur.tagline"),
      desc: t("services.akupunktur.desc"),
      indications: t("services.akupunktur.indications") || [],
      cta: t("services.akupunktur.cta") || t("services.learnMore"),
      bg: "bg-blush-soft/40 hover:bg-blush-soft/60 border border-blush/25",
      accent: "bg-blush/20 text-blush-deep",
      textAccent: "text-blush-deep",
      icon: <Sparkles className="w-5 h-5 text-blush-deep" />,
      href: "/layanan/akupunktur",
    },
    {
      id: "hidroterapi",
      number: "02",
      name: t("services.hidroterapi.name"),
      tagline: t("services.hidroterapi.tagline"),
      desc: t("services.hidroterapi.desc"),
      indications: t("services.hidroterapi.indications") || [],
      badge: t("services.hidroterapi.badge"),
      cta: t("services.hidroterapi.cta") || t("services.learnMore"),
      bg: "bg-hydro-soft/40 hover:bg-hydro-soft/60 border border-hydro/25",
      accent: "bg-hydro/20 text-hydro-muted",
      textAccent: "text-hydro-muted",
      icon: <Waves className="w-5 h-5 text-hydro-muted" />,
      href: "/layanan/hidroterapi",
    },
    {
      id: "fisioterapi",
      number: "03",
      name: t("services.fisioterapi.name"),
      tagline: t("services.fisioterapi.tagline"),
      desc: t("services.fisioterapi.desc"),
      indications: t("services.fisioterapi.indications") || [],
      cta: t("services.fisioterapi.cta") || t("services.learnMore"),
      bg: "bg-sage-soft/40 hover:bg-sage-soft/60 border border-sage/25",
      accent: "bg-sage/25 text-forest",
      textAccent: "text-forest",
      icon: <Activity className="w-5 h-5 text-forest" />,
      href: "/layanan/fisioterapi",
    },
  ];

  const swimCourse = {
    eyebrow: t("services.swimCourse.eyebrow"),
    tagline: t("services.swimCourse.tagline"),
    title: t("services.swimCourse.title"),
    journey: t("services.swimCourse.journey") || "Care → Recovery → Maintenance → Active",
    desc: t("services.swimCourse.desc"),
    badge: t("services.swimCourse.badge"),
    cta: t("services.swimCourse.cta") || t("services.learnMore"),
    href: "/layanan/swim-course",
  };

  return (
    <section id="layanan" className="section-pad bg-cream">
      <div className="container-wellness">

        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <motion.span
            className="tag-pill bg-blush/20 text-blush-deep font-bold text-xs uppercase tracking-wider mb-4 inline-block border border-blush/25"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t("services.eyebrow")}
          </motion.span>
          <motion.h2
            className="font-display font-black text-espresso whitespace-pre-line"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              lineHeight: "1.08",
              letterSpacing: "-0.025em",
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t("services.title")}
          </motion.h2>
          <motion.p
            className="font-sans text-espresso/70 mt-4 leading-relaxed text-base md:text-lg"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("services.subheading")}
          </motion.p>
        </div>

        {/* ── KATEGORI 1: LAYANAN KESEHATAN (3 Cards Rata / Uniform Grid) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-10 lg:mb-14">
          {healthServices.map((service, i) => (
            <motion.div
              key={service.id}
              className="flex"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                className={`w-full rounded-[2.25rem] p-7 lg:p-8 ${service.bg} shadow-warm flex flex-col justify-between transition-all duration-300 hover:shadow-warm-lg`}
              >
                <div>
                  {/* Top Bar: Icon + Number */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-sans text-xs font-bold text-espresso/35 tracking-widest">
                      {service.number}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/80 flex items-center justify-center shadow-sm">
                      {service.icon}
                    </div>
                  </div>

                  {/* Service Name Pill & Title */}
                  <span className={`tag-pill ${service.accent} text-xs font-bold mb-3 inline-block`}>
                    {service.name}
                  </span>
                  <h3 className="font-display font-bold text-espresso text-xl lg:text-2xl leading-snug mb-3">
                    {service.tagline}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-espresso/70 text-xs md:text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Optional highlight badge (Hidroterapi) */}
                  {service.badge && (
                    <div className="mb-5 inline-block bg-white/80 border border-hydro/30 px-3 py-1.5 rounded-full">
                      <span className="font-sans text-xs font-bold text-hydro-muted">
                        ✦ {service.badge}
                      </span>
                    </div>
                  )}

                  {/* Dapat Membantu Untuk (Indications list) */}
                  <div className="border-t border-espresso/10 pt-5 mb-6">
                    <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-espresso/60 mb-3">
                      {t("services.helpsWithLabel")}
                    </h4>
                    <ul className="space-y-2">
                      {service.indications.map((ind: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-espresso/80 leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-espresso/40 flex-shrink-0 mt-0.5" />
                          <span>{ind}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-4 border-t border-espresso/10 mt-auto">
                  <a
                    href={service.href}
                    onClick={() => trackServiceClick(service.id, service.name, "services_health_cards")}
                    className="group inline-flex items-center gap-2 font-sans text-sm font-bold text-espresso hover:text-blush-deep transition-colors"
                  >
                    <span>{service.cta}</span>
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── KATEGORI 2: PROGRAM LANJUTAN (Swim Course with Care to Active Journey) ── */}
        <motion.div
          className="rounded-[2.5rem] bg-sand-soft/50 border border-sand/40 p-8 lg:p-12 shadow-warm"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          {/* Journey Steps Ribbon */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-espresso/10">
            <div>
              <span className="tag-pill bg-sand text-espresso font-bold text-xs uppercase tracking-wider mb-2 inline-block">
                {swimCourse.eyebrow}
              </span>
              <div className="font-sans text-xs md:text-sm font-semibold text-espresso/70">
                Alur Pemulihan Berkelanjutan:
              </div>
            </div>

            {/* Journey steps banner */}
            <div className="flex flex-wrap items-center gap-2 font-sans text-xs md:text-sm font-bold">
              <span className="px-3 py-1.5 rounded-full bg-white/70 text-espresso/60 border border-espresso/5">Care</span>
              <span className="text-espresso/30">→</span>
              <span className="px-3 py-1.5 rounded-full bg-white/70 text-espresso/60 border border-espresso/5">Recovery</span>
              <span className="text-espresso/30">→</span>
              <span className="px-3 py-1.5 rounded-full bg-white/70 text-espresso/60 border border-espresso/5">Maintenance</span>
              <span className="text-espresso/30">→</span>
              <span className="px-3.5 py-1.5 rounded-full bg-espresso text-cream shadow-sm flex items-center gap-1.5">
                <span>Active</span>
                <span className="text-peach">✦</span>
              </span>
            </div>
          </div>

          {/* Swim Course Content Row */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <span className="font-sans text-xs font-bold text-espresso/50 uppercase tracking-widest">
                {swimCourse.tagline}
              </span>
              <h3 className="font-display font-black text-espresso text-2xl lg:text-3.5xl leading-tight">
                {swimCourse.title}
              </h3>
              <p className="font-sans text-espresso/75 text-sm md:text-base leading-relaxed">
                {swimCourse.desc}
              </p>

              {/* Badge info */}
              <div className="mt-2 inline-flex items-center gap-2 bg-white/80 border border-sand/50 px-4 py-2 rounded-full w-fit">
                <span className="text-xs font-bold text-espresso">
                  ✦ {swimCourse.badge}
                </span>
              </div>

              {/* CTA Link */}
              <div className="pt-4">
                <a
                  href={swimCourse.href}
                  onClick={() => trackServiceClick("swim-course", "Swim Course", "services_journey_card")}
                  className="btn-pill-dark inline-flex items-center gap-2.5 py-3.5 px-7 text-sm font-bold shadow-warm group"
                >
                  <span>{swimCourse.cta}</span>
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-warm-lg img-zoom border border-white/60">
              <Image
                src="/images/swimming-course-lansia.jpg"
                alt="Program Lanjutan Renang Privat Lotus Semarang"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                quality={85}
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
