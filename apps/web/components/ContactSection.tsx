"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Instagram, CheckCircle2, MessageSquare, Send, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import { trackWhatsAppLead, trackDirectContact } from "@/lib/analytics";

export function ContactSection() {
  const { t, language } = useLanguage();
  const [form, setForm] = useState({
    nama: "",
    gender: "Perempuan",
    usia: "",
    pesan: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleGenderSelect = (gender: string) => {
    setForm((prev) => ({ ...prev, gender }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nama.trim() || !form.usia.trim()) return;

    const message =
      language === "en"
        ? `Hello Lotus Semarang! 👋\n\nI would like to consult / book a therapy session at Lotus:\n\n👤 Name: ${form.nama}\n🚻 Gender: ${form.gender}\n🎂 Age: ${form.usia}\n${form.pesan ? `💬 Notes / Symptoms: ${form.pesan}\n` : ""}\nPlease share the available schedule. Thank you! 🙏`
        : `Halo Lotus Semarang! 👋\n\nSaya ingin konsultasi / reservasi perawatan di Lotus:\n\n👤 Nama: ${form.nama}\n🚻 Jenis Kelamin: ${form.gender}\n🎂 Usia: ${form.usia}\n${form.pesan ? `💬 Keluhan / Catatan: ${form.pesan}\n` : ""}\nMohon info ketersediaan jadwal perawatan ya. Terima kasih! 🙏`;

    window.open(
      `https://wa.me/6287700303645?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    trackWhatsAppLead({
      sourceLocation: "contact_section_form",
      patientName: form.nama,
    });

    setSubmitted(true);
  };

  return (
    <section id="kontak" className="py-20 lg:py-28 bg-[#FAF7F2] relative overflow-hidden" aria-labelledby="contact-heading">
      {/* Subtle decorative background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,228,217,0.4),transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-sage-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="inline-flex items-center gap-2 bg-sage-50 text-forest text-xs font-semibold px-3 py-1.5 rounded-full mb-4 border border-sage-200/60">
              <MessageSquare size={14} className="text-forest" />
              <span>{t("contact.eyebrow")}</span>
            </div>

            <h2 id="contact-heading" className="font-serif text-3xl sm:text-4xl text-forest font-normal tracking-tight leading-tight mb-3">
              {t("contact.title")}
            </h2>

            <p className="font-sans text-forest/70 text-sm sm:text-base leading-relaxed mb-8">
              {t("contact.subtitle")}
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nama Lengkap */}
                <div>
                  <label htmlFor="contact-nama" className="block font-sans text-xs sm:text-sm font-semibold text-forest mb-2">
                    {t("contact.nameLabel")}
                  </label>
                  <input
                    type="text"
                    id="contact-nama"
                    name="nama"
                    required
                    value={form.nama}
                    onChange={handleChange}
                    placeholder={t("contact.namePlaceholder")}
                    className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-white font-sans text-sm text-forest placeholder:text-forest/40 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition"
                  />
                </div>

                {/* Row: Gender & Age */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Gender Selector */}
                  <div>
                    <label className="block font-sans text-xs sm:text-sm font-semibold text-forest mb-2">
                      {t("contact.genderLabel")}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => handleGenderSelect(language === "en" ? "Female" : "Perempuan")}
                        className={`py-3 px-3 text-xs sm:text-sm rounded-xl font-sans font-medium transition-all text-center border ${
                          form.gender === "Perempuan" || form.gender === "Female"
                            ? "bg-forest text-cream border-forest shadow-sm"
                            : "bg-white text-forest/80 border-sage-200 hover:border-sage-300"
                        }`}
                      >
                        {t("contact.genderFemale")}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleGenderSelect(language === "en" ? "Male" : "Laki-laki")}
                        className={`py-3 px-3 text-xs sm:text-sm rounded-xl font-sans font-medium transition-all text-center border ${
                          form.gender === "Laki-laki" || form.gender === "Male"
                            ? "bg-forest text-cream border-forest shadow-sm"
                            : "bg-white text-forest/80 border-sage-200 hover:border-sage-300"
                        }`}
                      >
                        {t("contact.genderMale")}
                      </button>
                    </div>
                  </div>

                  {/* Age Input */}
                  <div>
                    <label htmlFor="contact-usia" className="block font-sans text-xs sm:text-sm font-semibold text-forest mb-2">
                      {t("contact.ageLabel")}
                    </label>
                    <input
                      type="text"
                      id="contact-usia"
                      name="usia"
                      required
                      value={form.usia}
                      onChange={handleChange}
                      placeholder={t("contact.agePlaceholder")}
                      className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-white font-sans text-sm text-forest placeholder:text-forest/40 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition"
                    />
                  </div>
                </div>

                {/* Pesan / Catatan */}
                <div>
                  <label htmlFor="contact-pesan" className="block font-sans text-xs sm:text-sm font-semibold text-forest mb-2">
                    {t("contact.messageLabel")}
                  </label>
                  <textarea
                    id="contact-pesan"
                    name="pesan"
                    rows={3}
                    value={form.pesan}
                    onChange={handleChange}
                    placeholder={t("contact.messagePlaceholder")}
                    className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-white font-sans text-sm text-forest placeholder:text-forest/40 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-forest hover:bg-forest/90 text-cream font-sans font-medium text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer"
                >
                  <Send size={18} />
                  <span>{t("contact.submitBtn")}</span>
                </button>

                <p className="text-center font-sans text-xs text-forest/50">
                  {language === "en"
                    ? "Your information is confidential and used solely for medical consultation coordination."
                    : "Data Anda dijaga kerahasiaannya khusus untuk koordinasi konsultasi dan perawatan medis."}
                </p>
              </form>
            ) : (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-100">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-serif text-2xl text-forest font-semibold mb-2">
                  {t("contact.successTitle")}
                </h3>
                <p className="font-sans text-forest/70 text-sm max-w-md mb-6 leading-relaxed">
                  {t("contact.successDesc")}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl border border-sage-300 text-forest text-sm font-medium hover:bg-sage-50 transition"
                >
                  {t("contact.sendAgain")}
                </button>
              </div>
            )}
          </motion.div>

          {/* Right Column: Info & Map Embed (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Contact Info Card */}
            <div className="bg-white rounded-3xl p-8 border border-sage-100 shadow-sm">
              <h3 className="font-serif text-xl sm:text-2xl text-forest font-normal mb-6">
                {t("contact.infoTitle")}
              </h3>

              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sage-50 text-forest flex items-center justify-center flex-shrink-0 border border-sage-100 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-sans text-xs font-bold uppercase tracking-wider text-forest/50 mb-0.5">
                      {t("contact.addressLabel")}
                    </p>
                    <a
                      href="https://maps.app.goo.gl/PWpA655K59Gq82Xy9"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackDirectContact("maps", "Contact Section Map Address")}
                      className="font-sans text-sm text-forest/85 hover:text-terracotta transition-colors leading-relaxed block"
                    >
                      {t("contact.addressVal")}
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sage-50 text-forest flex items-center justify-center flex-shrink-0 border border-sage-100 mt-0.5">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="font-sans text-xs font-bold uppercase tracking-wider text-forest/50 mb-0.5">
                      {t("contact.opsLabel")}
                    </p>
                    <p className="font-sans text-sm text-forest/85 leading-relaxed whitespace-pre-line">
                      {t("contact.opsVal")}
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 border border-emerald-100 mt-0.5">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-sans text-xs font-bold uppercase tracking-wider text-forest/50 mb-0.5">
                      {t("contact.waLabel")}
                    </p>
                    <a
                      href="https://wa.me/6287700303645"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackDirectContact("phone", "Contact Section WA Direct")}
                      className="font-sans text-sm font-medium text-forest hover:text-emerald-700 transition-colors"
                    >
                      +62 877-0030-3645
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-700 flex items-center justify-center flex-shrink-0 border border-pink-100 mt-0.5">
                    <Instagram size={18} />
                  </div>
                  <div>
                    <p className="font-sans text-xs font-bold uppercase tracking-wider text-forest/50 mb-0.5">
                      {t("contact.igLabel")}
                    </p>
                    <a
                      href="https://instagram.com/lotus_semarang"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackDirectContact("instagram", "Contact Section IG Direct")}
                      className="font-sans text-sm font-medium text-forest hover:text-pink-700 transition-colors"
                    >
                      @lotus_semarang
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct WA Button */}
              <div className="mt-7 pt-6 border-t border-sage-100">
                <a
                  href="https://wa.me/6287700303645?text=Halo%20Lotus%20Semarang%2C%20saya%20ingin%20konsultasi%20jadwal%20perawatan."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppLead({ sourceLocation: "contact_section_direct_btn" })}
                  className="w-full py-3 px-4 rounded-xl bg-sage-100/70 hover:bg-sage-100 text-forest font-sans font-medium text-sm flex items-center justify-center gap-2 transition duration-200"
                >
                  <span>{t("contact.chatDirect")}</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Google Maps Embed Card */}
            <div className="bg-white rounded-3xl p-3 border border-sage-100 shadow-sm overflow-hidden">
              <iframe
                title="Lokasi Lotus Semarang"
                src="https://maps.google.com/maps?q=Lotus+Semarang+Jl+Pamularsih+No+90&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: "1rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
