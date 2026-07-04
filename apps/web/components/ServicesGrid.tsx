"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/* ─── Service Data ────────────────────────────────────────────────────────── */
const services = [
  {
    id:       "akupunktur",
    number:   "01",
    name:     "Akupunktur",
    tagline:  "Rileks Sampai ke Ujung Jarum",
    desc:     "Terapi tusuk jarum modern yang mengurangi nyeri kronis, stres, dan insomnia. Ditangani oleh akupunkturis bersertifikat dalam ruang privat yang tenang.",
    benefits: ["Kurangi nyeri kronik", "Atasi stres & kecemasan", "Perbaiki kualitas tidur"],
    cta:      "Coba Akupunktur",
    bg:       "bg-peach-soft",
    accent:   "bg-peach",
    textAccent: "text-terra",
    emoji:    "🪡",
    href:     "#akupunktur",
  },
  {
    id:       "hidroterapi",
    number:   "02",
    name:     "Hidroterapi",
    tagline:  "Sembuh Bareng Air",
    desc:     "Kolam renang privat eksklusif dan terapi air berteknologi tinggi. Hanya kamu, air, dan ketenangan — tanpa ada orang lain mengganggu.",
    benefits: ["Kolam 100% privat", "Terapi air terapeutik", "Cocok untuk semua usia"],
    cta:      "Pesan Sesi Air",
    bg:       "bg-sage-soft",
    accent:   "bg-sage",
    textAccent: "text-forest",
    emoji:    "💧",
    href:     "#hidroterapi",
  },
  {
    id:       "fisioterapi",
    number:   "03",
    name:     "Fisioterapi Privat",
    tagline:  "Pulih Tanpa Canggung",
    desc:     "Rehabilitasi fisik yang dilakukan oleh fisioterapis berpengalaman di ruang khusus. Tidak perlu malu atau canggung — ini ruang healing milikmu.",
    benefits: ["Pasca cedera & operasi", "Nyeri punggung & leher", "Pemulihan stroke"],
    cta:      "Mulai Rehabilitasi",
    bg:       "bg-blush-soft",
    accent:   "bg-blush",
    textAccent: "text-espresso-600",
    emoji:    "🦾",
    href:     "#fisioterapi",
  },
  {
    id:       "swim-course",
    number:   "04",
    name:     "Swim Course",
    tagline:  "Belajar Renang, Bebas Khawatir",
    desc:     "Kursus renang privat untuk semua level — dari yang baru kenal air sampai yang ingin sempurnakan teknik. Kolam riservasi eksklusif untuk sesi kamu.",
    benefits: ["Untuk anak & dewasa", "Instruktur bersertifikat", "Jadwal fleksibel"],
    cta:      "Daftar Kelas",
    bg:       "bg-sand-soft",
    accent:   "bg-sand",
    textAccent: "text-espresso",
    emoji:    "🏊",
    href:     "#swim-course",
  },
];

/* ─── ServicesGrid Component ──────────────────────────────────────────────── */
export function ServicesGrid() {
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
            Layanan Kami
          </motion.span>
          <motion.h2
            className="font-display font-black text-espresso"
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
            Semua yang Kamu<br />Butuhkan, di Satu Tempat.
          </motion.h2>
          <motion.p
            className="font-sans text-espresso/60 mt-4 leading-relaxed"
            style={{ fontSize: "1rem" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Perawatan medis berbasis sains yang terasa seperti <em className="not-italic font-semibold">me time</em> — bukan kunjungan ke klinik.
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
function ServiceCard({ service }: { service: (typeof services)[0] }) {
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
        {service.benefits.map((b) => (
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
