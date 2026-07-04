"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, Lock, Calendar, User, ShieldCheck } from "lucide-react";

/* ─── Copy ────────────────────────────────────────────────────────────────── */
const copy = {
  eyebrow:    "Reservasi Privat",
  headline:   "Mulai Perjalanan\nKetenangan Anda.",
  subheading: "Proses reservasi kami dirancang untuk kemudahan dan privasi Anda. Tiga langkah, satu tujuan — kedamaian jiwa.",
  privacyNote:"Semua informasi Anda dijaga kerahasiaannya. Kami tidak pernah membagikan data Anda.",
  steps: [
    {
      number:  "01",
      icon:    Calendar,
      title:   "Pilih Waktu",
      subtitle:"Tanggal & Sesi",
    },
    {
      number:  "02",
      icon:    User,
      title:   "Detail Tamu",
      subtitle:"Profil & Preferensi",
    },
    {
      number:  "03",
      icon:    ShieldCheck,
      title:   "Konfirmasi",
      subtitle:"Privasi & Pembayaran",
    },
  ],
};

/* ─── Step field definitions ──────────────────────────────────────────────── */
const stepFields = [
  // Step 1 — Date & Session
  {
    title:    "Pilih Tanggal & Sesi Anda",
    subtitle: "Semua slot tersedia secara eksklusif hanya untuk Anda.",
    fields: [
      {
        id: "date", label: "Tanggal Kunjungan", type: "date",
        placeholder: "", hint: "Tersedia 7 hari ke depan",
      },
      {
        id: "duration", label: "Durasi Sesi", type: "select",
        options: [
          "1 Jam (Relaksasi Singkat)",
          "2 Jam (Pengalaman Penuh)",
          "3 Jam (Retreat Mendalam)",
          "Full Day (Suaka Pribadi Eksklusif)",
        ],
        hint: "Setiap sesi dijamin 100% privat",
      },
      {
        id: "session_time", label: "Waktu Mulai", type: "select",
        options: [
          "06:00 — Fajar Ketenangan",
          "09:00 — Pagi Segar",
          "12:00 — Siang Eksklusif",
          "15:00 — Sore Golden Hour",
          "19:00 — Malam Privat",
          "21:00 — Malam Larut",
        ],
        hint: "",
      },
      {
        id: "pool", label: "Pilih Kolam", type: "select",
        options: [
          "Kolam Utama — Olympic Style (25m)",
          "Kolam Hydrotherapy — Terapi Air",
          "Kolam Plunge — Kontras Panas/Dingin",
          "Suite Privat — Termasuk Semua Fasilitas",
        ],
        hint: "",
      },
    ],
  },

  // Step 2 — Guest Details
  {
    title:    "Ceritakan Tentang Diri Anda",
    subtitle: "Informasi ini kami gunakan semata-mata untuk mempersiapkan pengalaman terbaik Anda.",
    fields: [
      {
        id: "name", label: "Nama Lengkap", type: "text",
        placeholder: "Nama Anda",
        hint: "Sesuai dokumen identitas",
      },
      {
        id: "phone", label: "Nomor WhatsApp", type: "tel",
        placeholder: "+62 8xx xxxx xxxx",
        hint: "Konfirmasi reservasi via WhatsApp",
      },
      {
        id: "guests", label: "Jumlah Tamu", type: "select",
        options: [
          "Hanya Saya (Solo Retreat)",
          "2 Orang (Pasangan / Sahabat)",
          "3–5 Orang (Keluarga Kecil)",
          "6–10 Orang (Gathering Privat)",
        ],
        hint: "Kapasitas disesuaikan dengan area yang dipilih",
      },
      {
        id: "special_req", label: "Permintaan Khusus", type: "textarea",
        placeholder: "Informasikan kebutuhan khusus Anda — dekorasi, alergi, kebutuhan aksesibilitas, dll.",
        hint: "Opsional — kami selalu berusaha mengakomodasi",
      },
      {
        id: "privacy_pref", label: "Preferensi Privasi", type: "select",
        options: [
          "Standar — Staf tidak masuk selama sesi",
          "Ultra-Privat — Staf hanya dipanggil jika dibutuhkan",
          "Asistif — Staf siaga di dekat area kolam",
        ],
        hint: "Kami menghormati pilihan privasi Anda sepenuhnya",
      },
    ],
  },

  // Step 3 — Confirm & Pay
  {
    title:    "Konfirmasi & Kerahasiaan",
    subtitle: "Satu langkah terakhir. Reservasi Anda akan segera dikonfirmasi secara rahasia.",
    fields: [
      {
        id: "confirm_details", label: "Ringkasan Reservasi", type: "summary",
        placeholder: "", hint: "",
      },
      {
        id: "payment", label: "Metode Pembayaran", type: "select",
        options: [
          "Transfer Bank (BCA / Mandiri / BNI)",
          "QRIS — Scan & Bayar",
          "Virtual Account",
          "Bayar di Tempat (Khusus Pelanggan Terdaftar)",
        ],
        hint: "Pembayaran aman & terenkripsi",
      },
      {
        id: "consent", label: "Pernyataan Privasi", type: "checkbox",
        placeholder: "Saya menyetujui kebijakan privasi Lotus Semarang dan memahami bahwa data saya tidak akan pernah dibagikan kepada pihak ketiga.",
        hint: "",
      },
    ],
  },
];

/* ─── Animation Variants ──────────────────────────────────────────────────── */
const stepVariants = {
  enter:  (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
  exit:   (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40, transition: { duration: 0.4 } }),
};

/* ─── BookingFlow Component ───────────────────────────────────────────────── */
export function BookingFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection]     = useState(1);
  const [formData, setFormData]       = useState<Record<string, string>>({});
  const [submitted, setSubmitted]     = useState(false);
  const sectionRef                    = useRef<HTMLElement>(null);

  const totalSteps = stepFields.length;
  const progress   = ((currentStep + 1) / totalSteps) * 100;

  function goNext() {
    if (currentStep < totalSteps - 1) {
      setDirection(1);
      setCurrentStep((s) => s + 1);
    } else {
      setSubmitted(true);
    }
  }

  function goPrev() {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((s) => s - 1);
    }
  }

  function handleChange(id: string, value: string) {
    setFormData((prev) => ({ ...prev, [id]: value }));
  }

  const step = stepFields[currentStep];

  return (
    <section
      id="reservasi"
      ref={sectionRef}
      className="bg-cream-warm section-padding"
      aria-label="Form Reservasi Lotus Semarang"
      style={{ backgroundColor: "var(--surface-warm)" }}
    >
      <div className="container-luxury">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">

          {/* ── Left Column — Intro & Step Navigator ── */}
          <motion.div
            className="lg:sticky lg:top-32"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Eyebrow */}
            <span className="text-eyebrow mb-6 block">{copy.eyebrow}</span>

            {/* Headline */}
            <h2
              className="font-serif text-charcoal mb-6 whitespace-pre-line"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                lineHeight: "1.12",
                letterSpacing: "-0.025em",
              }}
            >
              {copy.headline}
            </h2>

            <p className="font-sans text-charcoal-400 leading-relaxed mb-12"
              style={{ fontSize: "clamp(0.85rem, 1.2vw, 0.95rem)" }}>
              {copy.subheading}
            </p>

            {/* Step Nav Pills */}
            <div className="flex flex-col gap-4 mb-10">
              {copy.steps.map((s, i) => {
                const StepIcon = s.icon;
                const isDone    = i < currentStep;
                const isActive  = i === currentStep;
                return (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > currentStep ? 1 : -1); setCurrentStep(i); }}
                    className={`flex items-center gap-4 text-left transition-all duration-500 group ${
                      isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
                    }`}
                    aria-current={isActive ? "step" : undefined}
                  >
                    {/* Step indicator circle */}
                    <div className={`relative flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${
                      isDone
                        ? "bg-charcoal border-charcoal text-ivory"
                        : isActive
                        ? "border-charcoal text-charcoal"
                        : "border-stone-300 text-stone-300"
                    }`}>
                      {isDone ? (
                        <Check size={14} strokeWidth={2.5} />
                      ) : (
                        <StepIcon size={14} />
                      )}
                      {/* Active pulse ring */}
                      {isActive && (
                        <motion.span
                          className="absolute inset-0 rounded-full border border-charcoal/30"
                          animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      )}
                    </div>

                    <div>
                      <div className="font-sans text-[0.6rem] tracking-widest uppercase text-charcoal-300 mb-0.5">
                        Langkah {s.number}
                      </div>
                      <div className="font-serif text-base text-charcoal leading-none">{s.title}</div>
                      <div className="font-sans text-[0.65rem] text-charcoal-300 mt-0.5">{s.subtitle}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Progress bar */}
            <div className="w-full h-px bg-stone-200 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-charcoal"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-eyebrow text-[0.55rem]">Langkah {currentStep + 1} dari {totalSteps}</span>
              <span className="text-eyebrow text-[0.55rem]">{Math.round(progress)}%</span>
            </div>

            {/* Privacy lock notice */}
            <div className="flex items-start gap-3 mt-8 p-4 border border-stone-200/60 bg-ivory/60">
              <Lock size={14} className="text-charcoal-300 flex-shrink-0 mt-0.5" />
              <p className="font-sans text-charcoal-300 leading-snug" style={{ fontSize: "0.65rem" }}>
                {copy.privacyNote}
              </p>
            </div>
          </motion.div>

          {/* ── Right Column — Step Form ── */}
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              {!submitted ? (
                <motion.div
                  key={currentStep}
                  custom={direction}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  {/* Step Header */}
                  <div className="mb-10">
                    <h3
                      className="font-serif text-charcoal mb-3"
                      style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.02em" }}
                    >
                      {step.title}
                    </h3>
                    <p className="font-sans text-charcoal-400 leading-relaxed" style={{ fontSize: "0.85rem" }}>
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Form Fields */}
                  <div className="flex flex-col gap-7">
                    {step.fields.map((field) => (
                      <FormField
                        key={field.id}
                        field={field as any}
                        value={formData[field.id] || ""}
                        onChange={(val) => handleChange(field.id, val)}
                      />
                    ))}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between mt-12 pt-8 border-t border-stone-200/60">
                    {currentStep > 0 ? (
                      <button
                        onClick={goPrev}
                        className="font-sans text-charcoal-300 hover:text-charcoal text-xs uppercase tracking-widest transition-colors duration-300"
                        style={{ letterSpacing: "0.18em" }}
                      >
                        ← Kembali
                      </button>
                    ) : (
                      <div />
                    )}

                    <button
                      onClick={goNext}
                      className="group inline-flex items-center gap-3 bg-charcoal text-ivory px-8 py-4 text-xs uppercase tracking-widest hover:bg-charcoal-600 transition-all duration-500 font-sans"
                      style={{ letterSpacing: "0.2em" }}
                    >
                      {currentStep === totalSteps - 1 ? "Konfirmasi Reservasi" : "Lanjutkan"}
                      <ChevronRight
                        size={14}
                        className="transition-transform duration-400 group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* ── Success State ── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                  className="flex flex-col items-center justify-center text-center py-20"
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-charcoal flex items-center justify-center mb-8"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 200 }}
                  >
                    <Check size={24} className="text-ivory" strokeWidth={2} />
                  </motion.div>
                  <h3 className="font-serif text-charcoal text-3xl mb-4" style={{ letterSpacing: "-0.02em" }}>
                    Terima Kasih
                  </h3>
                  <p className="font-sans text-charcoal-400 leading-relaxed max-w-sm mb-2" style={{ fontSize: "0.9rem" }}>
                    Reservasi Anda sedang kami proses. Untuk mempercepat konfirmasi, silakan kirim detail reservasi langsung ke WhatsApp kami.
                  </p>
                  
                  {/* WhatsApp Confirmation Button */}
                  <a
                    href={`https://wa.me/6287700303645?text=${encodeURIComponent(
                      `Halo Lotus Semarang, saya ingin konfirmasi reservasi dengan detail berikut:\n\n` +
                      `- Nama: ${formData.name || "-"}\n` +
                      `- No. WhatsApp: ${formData.phone || "-"}\n` +
                      `- Tanggal: ${formData.date || "-"}\n` +
                      `- Durasi Sesi: ${formData.duration || "-"}\n` +
                      `- Waktu Mulai: ${formData.session_time || "-"}\n` +
                      `- Pilihan Kolam: ${formData.pool || "-"}\n` +
                      `- Jumlah Tamu: ${formData.guests || "-"}\n` +
                      `- Preferensi Privasi: ${formData.privacy_pref || "-"}\n` +
                      `- Metode Pembayaran: ${formData.payment || "-"}\n` +
                      `- Permintaan Khusus: ${formData.special_req || "-"}\n\n` +
                      `Mohon segera dikonfirmasi. Terima kasih!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-charcoal text-ivory px-8 py-4 text-xs uppercase tracking-widest hover:bg-charcoal-600 transition-all duration-500 font-sans mt-6"
                    style={{ letterSpacing: "0.2em" }}
                  >
                    Kirim ke WhatsApp
                    <ChevronRight
                      size={14}
                      className="transition-transform duration-400 group-hover:translate-x-1"
                    />
                  </a>

                  <p className="font-sans text-charcoal-300 mt-6" style={{ fontSize: "0.7rem", letterSpacing: "0.15em" }}>
                    Privasi Anda adalah prioritas utama kami.
                  </p>
                  <div className="flex items-center gap-2 mt-6 text-charcoal-300">
                    <Lock size={12} />
                    <span className="text-[0.6rem] font-sans uppercase tracking-widest">Informasi Anda Aman</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FormField Sub-component ─────────────────────────────────────────────── */
type FieldDef = {
  id: string;
  label: string;
  type: "text" | "date" | "tel" | "select" | "textarea" | "checkbox" | "summary";
  placeholder?: string;
  hint?: string;
  options?: string[];
};

function FormField({
  field,
  value,
  onChange,
}: {
  field: FieldDef;
  value: string;
  onChange: (val: string) => void;
}) {
  const baseInput =
    "w-full bg-transparent border-b border-stone-300 py-3 font-sans text-charcoal placeholder-charcoal-200 outline-none transition-all duration-300 focus:border-charcoal text-sm";
  const baseSelect =
    "w-full bg-transparent border-b border-stone-300 py-3 font-sans text-charcoal outline-none transition-all duration-300 focus:border-charcoal text-sm cursor-pointer appearance-none";

  return (
    <div className="flex flex-col gap-1.5 group">
      {/* Label */}
      <label
        htmlFor={field.id}
        className="text-eyebrow text-[0.6rem]"
      >
        {field.label}
      </label>

      {/* Input */}
      {field.type === "text" || field.type === "tel" || field.type === "date" ? (
        <input
          id={field.id}
          type={field.type}
          placeholder={field.placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={baseInput}
          style={{ fontSize: "0.9rem" }}
        />
      ) : field.type === "select" ? (
        <div className="relative">
          <select
            id={field.id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={baseSelect}
            style={{ fontSize: "0.9rem" }}
          >
            <option value="" disabled>Pilih opsi…</option>
            {field.options?.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          <ChevronRight
            size={12}
            className="absolute right-0 bottom-4 text-charcoal-300 rotate-90 pointer-events-none"
          />
        </div>
      ) : field.type === "textarea" ? (
        <textarea
          id={field.id}
          placeholder={field.placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          className={`${baseInput} resize-none`}
          style={{ fontSize: "0.9rem" }}
        />
      ) : field.type === "checkbox" ? (
        <label className="flex items-start gap-3 cursor-pointer">
          <div
            className={`mt-0.5 flex-shrink-0 w-4 h-4 border transition-all duration-300 flex items-center justify-center ${
              value === "yes" ? "bg-charcoal border-charcoal" : "border-stone-300"
            }`}
            onClick={() => onChange(value === "yes" ? "" : "yes")}
          >
            {value === "yes" && <Check size={10} className="text-ivory" strokeWidth={3} />}
          </div>
          <span className="font-sans text-charcoal-400 leading-relaxed" style={{ fontSize: "0.8rem" }}>
            {field.placeholder}
          </span>
        </label>
      ) : field.type === "summary" ? (
        <div
          className="border border-stone-200 p-5 bg-ivory/60 font-sans text-charcoal-400 leading-relaxed"
          style={{ fontSize: "0.8rem" }}
        >
          <p className="text-eyebrow mb-3 text-[0.55rem]">Detail akan dikonfirmasi via WhatsApp</p>
          <p>Reservasi Anda akan dikonfirmasi dalam 30 menit setelah pembayaran.</p>
          <p className="mt-2 text-charcoal-300" style={{ fontSize: "0.72rem" }}>
            Pembatalan gratis hingga 24 jam sebelum jadwal. Reschedule bebas biaya untuk pelanggan premium.
          </p>
        </div>
      ) : null}

      {/* Hint */}
      {field.hint && (
        <span className="font-sans text-charcoal-300 mt-0.5" style={{ fontSize: "0.62rem", letterSpacing: "0.08em" }}>
          {field.hint}
        </span>
      )}
    </div>
  );
}
