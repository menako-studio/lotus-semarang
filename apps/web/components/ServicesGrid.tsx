"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

/* ─── ServicesGrid Component ──────────────────────────────────────────────── */
export function ServicesGrid() {
  const { t } = useLanguage();

  const services = [
    {
      id:       "akupunktur",
      number:   "01",
      name:     t("services.akupunktur.name"),
      tagline:  t("services.akupunktur.tagline"),
      desc:     t("services.akupunktur.desc"),
      benefits: t("services.akupunktur.benefits"),
      cta:      t("services.akupunktur.cta"),
      bg:       "bg-blush-soft/80 border border-blush/20",
      accent:   "bg-blush/20 text-blush-deep",
      textAccent: "text-blush-deep",
      emoji:    "🪡",
      href:     "/layanan/akupunktur",
    },
    {
      id:       "hidroterapi",
      number:   "02",
      name:     t("services.hidroterapi.name"),
      tagline:  t("services.hidroterapi.tagline"),
      desc:     t("services.hidroterapi.desc"),
      benefits: t("services.hidroterapi.benefits"),
      cta:      t("services.hidroterapi.cta"),
      bg:       "bg-hydro-soft/80 border border-hydro/20",
      accent:   "bg-hydro/20 text-hydro-muted",
      textAccent: "text-hydro-muted",
      emoji:    "🌊",
      href:     "/layanan/hidroterapi",
    },
    {
      id:       "fisioterapi",
      number:   "03",
      name:     t("services.fisioterapi.name"),
      tagline:  t("services.fisioterapi.tagline"),
      desc:     t("services.fisioterapi.desc"),
      benefits: t("services.fisioterapi.benefits"),
      cta:      t("services.fisioterapi.cta"),
      bg:       "bg-sage-soft/80 border border-sage/20",
      accent:   "bg-sage/25 text-forest",
      textAccent: "text-forest",
      emoji:    "🦾",
      href:     "/layanan/fisioterapi",
    },
    {
      id:       "swim-course",
      number:   "04",
      name:     t("services.swimCourse.name"),
      tagline:  t("services.swimCourse.tagline"),
      desc:     t("services.swimCourse.desc"),
      benefits: t("services.swimCourse.benefits"),
      cta:      t("services.swimCourse.cta"),
      bg:       "bg-sand-soft/80 border border-sand/30",
      accent:   "bg-sand text-espresso-700",
      textAccent: "text-espresso",
      emoji:    "🏊",
      href:     "/layanan/swim-course",
    },
  ];

  return (
    <section id="layanan" className="section-pad bg-cream">
      <div className="container-wellness">

        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <motion.span
            className="tag-pill bg-peach/40 text-terra font-semibold text-xs mb-4 inline-block"
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
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              lineHeight: "1.05",
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
            className="font-sans text-espresso/60 mt-4 leading-relaxed"
            style={{ fontSize: "1rem" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("services.subheading")}
          </motion.p>
        </div>

        {/* 2×2 Color-Blocked Grid */}
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Service Card Sub-component ─────────────────────────────────────────── */
function ServiceCard({ service }: { service: any }) {
  return (
    <a
      href={service.href}
      className={`service-card ${service.bg} group block`}
    >
      {/* Top row: number + emoji */}
      <div className="flex items-start justify-between">
        <span className="font-sans text-xs font-semibold text-espresso/30 tracking-widest">
          {service.number}
        </span>
        <span className="text-3xl">{service.emoji}</span>
      </div>

      {/* Accent pill with service name */}
      <div>
        <span className={`tag-pill ${service.accent} text-espresso text-xs font-bold mb-3 inline-block`}>
          {service.name}
        </span>
        <h3
          className={`font-display font-black ${service.textAccent}`}
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
          }}
        >
          {service.tagline}
        </h3>
      </div>

      {/* Description */}
      <p className="font-sans text-espresso/65 leading-relaxed" style={{ fontSize: "0.9rem" }}>
        {service.desc}
      </p>

      {/* Benefit pills */}
      <div className="flex flex-wrap gap-2">
        {service.benefits.map((b: string) => (
          <span
            key={b}
            className="tag-pill bg-white/60 text-espresso/70 text-[0.65rem]"
          >
            ✓ {b}
          </span>
        ))}
      </div>

      {/* CTA row */}
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-espresso/10">
        <span className="font-sans text-sm font-semibold text-espresso/70 group-hover:text-espresso transition-colors duration-200">
          {service.cta}
        </span>
        <div className="w-8 h-8 rounded-full bg-espresso/10 group-hover:bg-espresso transition-all duration-300 flex items-center justify-center">
          <ArrowUpRight
            size={14}
            className="text-espresso group-hover:text-cream transition-colors duration-300"
          />
        </div>
      </div>
    </a>
  );
}
