"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChevronRight, ChevronLeft, CheckCircle2, Send } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export function ReservasiClient() {
  const { t, language } = useLanguage();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    layanan: "",
    hari: "",
    jam: "",
    nama: "",
    keluhan: "",
    catatan: "",
  });

  const layananList = [
    { id: "akupunktur", label: `${t("services.akupunktur.name")} / ${language === "id" ? "Wajah" : "Facial"}`, emoji: "🪡", color: "border-blush/30 hover:bg-blush-soft/60" },
    { id: "hidroterapi", label: `${t("services.hidroterapi.name")} (${language === "id" ? "Kolam Hangat" : "Warm Pool"})`, emoji: "🌊", color: "border-hydro/30 hover:bg-hydro-soft/60" },
    { id: "fisioterapi", label: `${t("services.fisioterapi.name")} & ${language === "id" ? "Terapi Manual" : "Manual Therapy"}`, emoji: "💪", color: "border-sage/30 hover:bg-sage-soft/60" },
    { id: "swim-course", label: `${t("services.swimCourse.name")} (${language === "id" ? "Anak/Dewasa/Wanita" : "Kids/Adults/Women"})`, emoji: "🏊", color: "border-sand/40 hover:bg-sand-soft/60" },
  ];

  const jamList = [
    "09.00", "10.00", "11.00", "13.00", "14.00", "15.00", "16.00"
  ];

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSelectLayanan = (id: string) => {
    setFormData({ ...formData, layanan: id });
    nextStep();
  };

  const handleSelectJam = (jam: string) => {
    setFormData({ ...formData, jam });
  };

  const handleSendWhatsApp = () => {
    const formattedLayanan = layananList.find(l => l.id === formData.layanan)?.label || formData.layanan;
    const text = `${t("bookingFlow.waMessage.intro")}

- *${t("bookingFlow.waMessage.service")}*: ${formattedLayanan}
- *${t("bookingFlow.waMessage.date")}*: ${formData.hari}
- *${t("bookingFlow.waMessage.time")}*: ${formData.jam} ${language === "id" ? "WIB" : "GMT+7"}
- *${t("bookingFlow.waMessage.name")}*: ${formData.nama}
- *${t("bookingFlow.waMessage.complaint")}*: ${formData.keluhan || "-"}
- *${t("bookingFlow.waMessage.notes")}*: ${formData.catatan || "-"}

${t("bookingFlow.waMessage.outro")}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/6287700303645?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen bg-white text-espresso">
      <Navbar />

      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="container-wellness max-w-3xl">
          
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag-pill bg-blush/20 text-blush-deep font-bold text-xs uppercase tracking-wider mb-4 inline-block border border-blush/20">
              {t("bookingFlow.tag")}
            </span>
            <h1 className="font-display font-black text-espresso text-4xl lg:text-6xl tracking-tight mb-3">
              {t("bookingFlow.title")}
            </h1>
            <p className="font-sans text-espresso/60 text-sm">
              {t("bookingFlow.subtitle")}
            </p>
          </motion.div>

          {/* Stepper Progress */}
          <div className="flex justify-between items-center mb-10 relative">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-espresso/5 z-0 -translate-y-1/2" />
            <div
              className="absolute left-0 top-1/2 h-0.5 bg-blush z-0 -translate-y-1/2 transition-all duration-500"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            />
            
            {[1, 2, 3, 4].map((s) => (
              <motion.div
                key={s}
                className={`relative z-10 w-10 h-10 rounded-full font-display font-black text-sm flex items-center justify-center border-2 transition-all duration-300 ${
                  s < step
                    ? "bg-blush border-blush text-white"
                    : s === step
                    ? "bg-white border-blush text-blush scale-110 shadow-warm-lg"
                    : "bg-white border-espresso/10 text-espresso/30"
                }`}
                animate={{ scale: s === step ? 1.1 : 1 }}
              >
                {s}
              </motion.div>
            ))}
          </div>

          {/* Wizard Card */}
          <div className="bg-white border border-espresso/5 rounded-[2.5rem] p-8 lg:p-12 shadow-warm-lg overflow-hidden">
            <AnimatePresence mode="wait">
              {/* STEP 1: PILIH LAYANAN */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  className="flex flex-col gap-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-display font-bold text-espresso text-xl lg:text-2xl text-center mb-2">
                    {t("bookingFlow.step1Title")}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {layananList.map((layanan) => (
                      <button
                        key={layanan.id}
                        onClick={() => handleSelectLayanan(layanan.id)}
                        className={`flex items-center gap-4 p-5 rounded-2xl border text-left transition-all duration-300 hover:scale-[1.02] ${
                          formData.layanan === layanan.id
                            ? "border-blush bg-blush-soft/60 shadow-warm"
                            : "border-espresso/5 bg-white shadow-sm"
                        } ${layanan.color}`}
                      >
                        <span className="text-3xl">{layanan.emoji}</span>
                        <span className="font-sans font-bold text-sm text-espresso/80 leading-snug">
                          {layanan.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: DETAIL WAKTU */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  className="flex flex-col gap-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-display font-bold text-espresso text-xl lg:text-2xl text-center mb-2">
                    {t("bookingFlow.step2Title")}
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Hari Input */}
                    <div className="flex flex-col gap-2">
                      <label className="font-sans font-bold text-xs text-espresso/60 uppercase tracking-wider">
                        {t("bookingFlow.step2LabelDay")}
                      </label>
                      <input
                        type="date"
                        value={formData.hari}
                        onChange={(e) => setFormData({ ...formData, hari: e.target.value })}
                        className="w-full bg-cream-warm/50 border border-espresso/10 rounded-xl px-4 py-3.5 font-sans text-sm focus:outline-none focus:border-blush"
                      />
                      <span className="font-sans text-[0.7rem] text-espresso/40">
                        {t("bookingFlow.step2Notice")}
                      </span>
                    </div>

                    {/* Jam Grid */}
                    <div className="flex flex-col gap-3">
                      <label className="font-sans font-bold text-xs text-espresso/60 uppercase tracking-wider">
                        {t("bookingFlow.step2LabelTime")}
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {jamList.map((jam) => (
                          <button
                            key={jam}
                            type="button"
                            onClick={() => handleSelectJam(jam)}
                            className={`py-2.5 px-3 rounded-xl border text-center font-sans text-xs font-bold transition-all duration-200 ${
                              formData.jam === jam
                                ? "bg-espresso border-espresso text-white shadow-warm"
                                : "border-espresso/10 bg-white hover:border-blush/60"
                            }`}
                          >
                            {jam}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-8 pt-6 border-t border-espresso/5">
                    <button
                      onClick={prevStep}
                      className="flex items-center gap-1.5 font-sans font-bold text-xs text-espresso/50 hover:text-espresso"
                    >
                      <ChevronLeft size={16} /> {t("bookingFlow.prev")}
                    </button>
                    <button
                      disabled={!formData.hari || !formData.jam}
                      onClick={nextStep}
                      className="btn-pill-dark px-6 py-2.5 text-xs font-bold disabled:opacity-50 disabled:pointer-events-none"
                    >
                      {t("bookingFlow.next")} <ChevronRight size={16} className="inline ml-1" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: DATA PASIEN */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  className="flex flex-col gap-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-display font-bold text-espresso text-xl lg:text-2xl text-center mb-2">
                    {t("bookingFlow.step3Title")}
                  </h2>
                  
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans font-bold text-xs text-espresso/60 uppercase tracking-wider">
                        {t("bookingFlow.step3LabelName")}
                      </label>
                      <input
                        type="text"
                        placeholder={t("bookingFlow.step3PlaceholderName")}
                        value={formData.nama}
                        onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                        className="w-full bg-cream-warm/50 border border-espresso/10 rounded-xl px-4 py-3.5 font-sans text-sm focus:outline-none focus:border-blush"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans font-bold text-xs text-espresso/60 uppercase tracking-wider">
                        {t("bookingFlow.step3LabelComplaint")}
                      </label>
                      <textarea
                        rows={3}
                        placeholder={t("bookingFlow.step3PlaceholderComplaint")}
                        value={formData.keluhan}
                        onChange={(e) => setFormData({ ...formData, keluhan: e.target.value })}
                        className="w-full bg-cream-warm/50 border border-espresso/10 rounded-xl px-4 py-3.5 font-sans text-sm focus:outline-none focus:border-blush resize-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans font-bold text-xs text-espresso/60 uppercase tracking-wider">
                        {t("bookingFlow.step3LabelNotes")}
                      </label>
                      <input
                        type="text"
                        placeholder={t("bookingFlow.step3PlaceholderNotes")}
                        value={formData.catatan}
                        onChange={(e) => setFormData({ ...formData, catatan: e.target.value })}
                        className="w-full bg-cream-warm/50 border border-espresso/10 rounded-xl px-4 py-3.5 font-sans text-sm focus:outline-none focus:border-blush"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-8 pt-6 border-t border-espresso/5">
                    <button
                      onClick={prevStep}
                      className="flex items-center gap-1.5 font-sans font-bold text-xs text-espresso/50 hover:text-espresso"
                    >
                      <ChevronLeft size={16} /> {t("bookingFlow.prev")}
                    </button>
                    <button
                      disabled={!formData.nama || !formData.keluhan}
                      onClick={nextStep}
                      className="btn-pill-dark px-6 py-2.5 text-xs font-bold disabled:opacity-50 disabled:pointer-events-none"
                    >
                      {t("bookingFlow.next")} <ChevronRight size={16} className="inline ml-1" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: KONFIRMASI */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  className="flex flex-col gap-6 text-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 rounded-full bg-sage-soft text-forest flex items-center justify-center mx-auto mb-2 border border-sage/30">
                    <CheckCircle2 size={32} />
                  </div>
                  
                  <div>
                    <h2 className="font-display font-bold text-espresso text-xl lg:text-2xl mb-1">
                      {t("bookingFlow.step4Title")}
                    </h2>
                    <p className="font-sans text-espresso/60 text-xs">
                      {t("bookingFlow.step4Subtitle")}
                    </p>
                  </div>

                  {/* Summary Table */}
                  <div className="bg-cream-warm/60 rounded-2xl p-6 text-left border border-espresso/5 flex flex-col gap-3 font-sans text-sm shadow-warm">
                    <div className="flex justify-between border-b border-espresso/5 pb-2">
                      <span className="text-espresso/50">{t("bookingFlow.summaryService")}</span>
                      <span className="font-bold text-espresso">
                        {layananList.find(l => l.id === formData.layanan)?.label}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-espresso/5 pb-2">
                      <span className="text-espresso/50">{t("bookingFlow.summarySchedule")}</span>
                      <span className="font-bold text-espresso">{formData.hari}</span>
                    </div>
                    <div className="flex justify-between border-b border-espresso/5 pb-2">
                      <span className="text-espresso/50">{t("bookingFlow.summaryTime")}</span>
                      <span className="font-bold text-espresso">{formData.jam} {language === "id" ? "WIB" : "GMT+7"}</span>
                    </div>
                    <div className="flex justify-between border-b border-espresso/5 pb-2">
                      <span className="text-espresso/50">{t("bookingFlow.summaryPatient")}</span>
                      <span className="font-bold text-espresso">{formData.nama}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-espresso/50">{t("bookingFlow.summaryComplaint")}</span>
                      <span className="font-medium text-espresso/80 bg-white p-2.5 rounded-lg border border-espresso/5 text-xs">
                        {formData.keluhan}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-6 pt-6 border-t border-espresso/5">
                    <button
                      onClick={prevStep}
                      className="flex items-center gap-1.5 font-sans font-bold text-xs text-espresso/50 hover:text-espresso"
                    >
                      <ChevronLeft size={16} /> {t("bookingFlow.prev")}
                    </button>
                    <button
                      onClick={handleSendWhatsApp}
                      className="btn-pill-dark px-8 py-3.5 text-sm font-bold flex items-center gap-2 bg-forest hover:bg-forest/90 text-white shadow-warm"
                    >
                      <Send size={16} />
                      {t("bookingFlow.sendWhatsApp")}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
