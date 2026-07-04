"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, User, MessageSquare, ChevronRight, ChevronLeft, CheckCircle2 } from "lucide-react";

export function ReservasiClient() {
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
    { id: "akupunktur", label: "Akupunktur Medis / Wajah", emoji: "🪡", color: "border-peach hover:bg-peach-soft/30" },
    { id: "hidroterapi", label: "Hidroterapi privat Kolam Hangat", emoji: "🌊", color: "border-sage hover:bg-sage-soft/30" },
    { id: "fisioterapi", label: "Fisioterapi & Terapi Manual", emoji: "💪", color: "border-blush hover:bg-blush-soft/30" },
    { id: "swim-course", label: "Swim Course Privat (Anak/Dewasa/Wanita)", emoji: "🏊", color: "border-sand hover:bg-sand-soft/30" },
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
    const text = `Halo Lotus Semarang, saya ingin melakukan reservasi sesi terapi:

- *Layanan*: ${formattedLayanan}
- *Hari*: ${formData.hari}
- *Jam*: ${formData.jam} WIB
- *Nama Lengkap*: ${formData.nama}
- *Keluhan*: ${formData.keluhan || "-"}
- *Catatan Tambahan*: ${formData.catatan || "-"}

Mohon konfirmasi ketersediaan jadwalnya. Terima kasih.`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/6287700303645?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen bg-white text-espresso">
      <Navbar />

      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container-wellness max-w-3xl">
          
          {/* Header */}
          <div className="text-center mb-12">
            <span className="tag-pill bg-peach/40 text-terra font-bold text-xs uppercase tracking-wider mb-4 inline-block">
              Reservasi Online
            </span>
            <h1 className="font-display font-black text-espresso text-4xl lg:text-6xl tracking-tight mb-3">
              Pesan Sesi Terapi Anda
            </h1>
            <p className="font-sans text-espresso/60 text-sm">
              Sistem reservasi privat mudah yang langsung terhubung dengan asisten medis kami via WhatsApp.
            </p>
          </div>

          {/* Stepper Progress */}
          <div className="flex justify-between items-center mb-10 relative">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-espresso/5 z-0 -translate-y-1/2" />
            <div
              className="absolute left-0 top-1/2 h-0.5 bg-terra z-0 -translate-y-1/2 transition-all duration-500"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            />
            
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`relative z-10 w-10 h-10 rounded-full font-display font-black text-sm flex items-center justify-center border-2 transition-all duration-300 ${
                  s < step
                    ? "bg-terra border-terra text-white"
                    : s === step
                    ? "bg-white border-terra text-terra scale-110 shadow-warm-lg"
                    : "bg-white border-espresso/10 text-espresso/30"
                }`}
              >
                {s}
              </div>
            ))}
          </div>

          {/* Wizard Card */}
          <div className="bg-white border border-espresso/5 rounded-[2.5rem] p-8 lg:p-12 shadow-warm-lg">
            
            {/* STEP 1: PILIH LAYANAN */}
            {step === 1 && (
              <div className="flex flex-col gap-6">
                <h2 className="font-display font-bold text-espresso text-xl lg:text-2xl text-center mb-2">
                  Layanan apa yang Anda butuhkan?
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {layananList.map((layanan) => (
                    <button
                      key={layanan.id}
                      onClick={() => handleSelectLayanan(layanan.id)}
                      className={`flex items-center gap-4 p-5 rounded-2xl border text-left transition-all duration-300 ${
                        formData.layanan === layanan.id
                          ? "border-terra bg-peach-soft/30 shadow-warm"
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
              </div>
            )}

            {/* STEP 2: DETAIL WAKTU */}
            {step === 2 && (
              <div className="flex flex-col gap-6">
                <h2 className="font-display font-bold text-espresso text-xl lg:text-2xl text-center mb-2">
                  Kapan Anda ingin berkunjung?
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Hari Input */}
                  <div className="flex flex-col gap-2">
                    <label className="font-sans font-bold text-xs text-espresso/60 uppercase tracking-wider">
                      Pilih Hari Kunjungan
                    </label>
                    <input
                      type="date"
                      value={formData.hari}
                      onChange={(e) => setFormData({ ...formData, hari: e.target.value })}
                      className="w-full bg-sand-soft/30 border border-espresso/5 rounded-xl px-4 py-3.5 font-sans text-sm focus:outline-none focus:border-terra"
                    />
                    <span className="font-sans text-[0.7rem] text-espresso/40">
                      *Jam operasional: Senin – Sabtu (Minggu Libur).
                    </span>
                  </div>

                  {/* Jam Grid */}
                  <div className="flex flex-col gap-3">
                    <label className="font-sans font-bold text-xs text-espresso/60 uppercase tracking-wider">
                      Pilih Waktu (WIB)
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {jamList.map((jam) => (
                        <button
                          key={jam}
                          type="button"
                          onClick={() => handleSelectJam(jam)}
                          className={`py-2 px-3 rounded-lg border text-center font-sans text-xs font-bold transition-all duration-200 ${
                            formData.jam === jam
                              ? "bg-terra border-terra text-white"
                              : "border-espresso/5 bg-white hover:border-terra/50"
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
                    <ChevronLeft size={16} /> Kembali
                  </button>
                  <button
                    disabled={!formData.hari || !formData.jam}
                    onClick={nextStep}
                    className="btn-pill-dark px-6 py-2.5 text-xs font-bold disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Lanjut <ChevronRight size={16} className="inline ml-1" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: DATA PASIEN */}
            {step === 3 && (
              <div className="flex flex-col gap-6">
                <h2 className="font-display font-bold text-espresso text-xl lg:text-2xl text-center mb-2">
                  Detail Informasi Pasien
                </h2>
                
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans font-bold text-xs text-espresso/60 uppercase tracking-wider">
                      Nama Lengkap Pasien
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan nama lengkap Anda"
                      value={formData.nama}
                      onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                      className="w-full bg-sand-soft/30 border border-espresso/5 rounded-xl px-4 py-3.5 font-sans text-sm focus:outline-none focus:border-terra"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans font-bold text-xs text-espresso/60 uppercase tracking-wider">
                      Keluhan Utama (Gejala)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Contoh: Nyeri sendi lutut kanan saat digerakkan, atau vertigo berulang"
                      value={formData.keluhan}
                      onChange={(e) => setFormData({ ...formData, keluhan: e.target.value })}
                      className="w-full bg-sand-soft/30 border border-espresso/5 rounded-xl px-4 py-3.5 font-sans text-sm focus:outline-none focus:border-terra resize-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans font-bold text-xs text-espresso/60 uppercase tracking-wider">
                      Catatan Tambahan (Bumil / Lansia / Hijab-only)
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Butuh terapis wanita karena berhijab"
                      value={formData.catatan}
                      onChange={(e) => setFormData({ ...formData, catatan: e.target.value })}
                      className="w-full bg-sand-soft/30 border border-espresso/5 rounded-xl px-4 py-3.5 font-sans text-sm focus:outline-none focus:border-terra"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center mt-8 pt-6 border-t border-espresso/5">
                  <button
                    onClick={prevStep}
                    className="flex items-center gap-1.5 font-sans font-bold text-xs text-espresso/50 hover:text-espresso"
                  >
                    <ChevronLeft size={16} /> Kembali
                  </button>
                  <button
                    disabled={!formData.nama || !formData.keluhan}
                    onClick={nextStep}
                    className="btn-pill-dark px-6 py-2.5 text-xs font-bold disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Lanjut <ChevronRight size={16} className="inline ml-1" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: KONFIRMASI */}
            {step === 4 && (
              <div className="flex flex-col gap-6 text-center">
                <div className="w-16 h-16 rounded-full bg-sage-soft text-forest flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 size={32} />
                </div>
                
                <div>
                  <h2 className="font-display font-bold text-espresso text-xl lg:text-2xl mb-1">
                    Konfirmasi Reservasi
                  </h2>
                  <p className="font-sans text-espresso/60 text-xs">
                    Silakan periksa kembali rincian janji terapi Anda sebelum mengirimkan konfirmasi.
                  </p>
                </div>

                {/* Summary Table */}
                <div className="bg-sand-soft/30 rounded-2xl p-6 text-left border border-espresso/5 flex flex-col gap-3 font-sans text-sm">
                  <div className="flex justify-between border-b border-espresso/5 pb-2">
                    <span className="text-espresso/50">Layanan:</span>
                    <span className="font-bold text-espresso">
                      {layananList.find(l => l.id === formData.layanan)?.label}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-espresso/5 pb-2">
                    <span className="text-espresso/50">Jadwal:</span>
                    <span className="font-bold text-espresso">{formData.hari}</span>
                  </div>
                  <div className="flex justify-between border-b border-espresso/5 pb-2">
                    <span className="text-espresso/50">Jam Terapi:</span>
                    <span className="font-bold text-espresso">{formData.jam} WIB</span>
                  </div>
                  <div className="flex justify-between border-b border-espresso/5 pb-2">
                    <span className="text-espresso/50">Nama Pasien:</span>
                    <span className="font-bold text-espresso">{formData.nama}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-espresso/50">Keluhan:</span>
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
                    <ChevronLeft size={16} /> Kembali
                  </button>
                  <button
                    onClick={handleSendWhatsApp}
                    className="btn-pill-dark px-8 py-3 text-sm font-bold flex items-center gap-2 bg-forest hover:bg-forest/90"
                  >
                    💬 Kirim via WhatsApp
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
