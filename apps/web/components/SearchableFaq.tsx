"use client";

import { useState } from "react";
import { Search, HelpCircle, ChevronDown, ChevronUp, Check } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
  category: "umum" | "akupunktur" | "hidroterapi" | "fisioterapi" | "renang";
}

export function SearchableFaq() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "Semua Kategori" },
    { id: "umum", label: "Umum & Fasilitas" },
    { id: "akupunktur", label: "Akupunktur" },
    { id: "hidroterapi", label: "Hidroterapi" },
    { id: "fisioterapi", label: "Fisioterapi" },
    { id: "renang", label: "Swim Course" },
  ];

  const faqs: FaqItem[] = [
    {
      category: "umum",
      q: "Di mana lokasi Lotus Semarang?",
      a: "Kami berlokasi di Jl. Pamularsih No. 90/100, Gisikdrono, Semarang Barat, Semarang, Jawa Tengah. Lokasi kami sangat mudah diakses dan dilengkapi dengan area parkir privat yang aman.",
    },
    {
      category: "umum",
      q: "Bagaimana cara melakukan reservasi sesi terapi?",
      a: "Anda bisa memesan jadwal secara online melalui website ini dengan masuk ke halaman Reservasi, lalu mengisi formulir singkat yang akan terhubung langsung ke WhatsApp asisten medis kami.",
    },
    {
      category: "umum",
      q: "Apakah konsultasi awal di Lotus Semarang gratis?",
      a: "Ya. Kami menyediakan sesi konsultasi gratis sebelum memulai tindakan terapi untuk menganalisis keluhan Anda secara medis dan menyusun program terapi yang aman.",
    },
    {
      category: "umum",
      q: "Apakah area terapi privat aman untuk wanita berhijab?",
      a: "Sangat aman. Seluruh area ruang terapi dan kolam hidroterapi kami tertutup rapat (100% private suite) dan kami menyediakan tenaga terapis wanita profesional khusus untuk melayani pasien wanita.",
    },
    {
      category: "akupunktur",
      q: "Apakah terapi akupunktur medis aman untuk anak-anak?",
      a: "Sangat aman. Terapi akupunktur anak (pediatrik) menggunakan jarum ultra-tipis atau metode non-jarum (laser/akupresur) untuk membantu mengatasi keluhan tumbuh kembang dan nafsu makan.",
    },
    {
      category: "akupunktur",
      q: "Apakah akupunktur bisa membantu program kehamilan (promil)?",
      a: "Ya. Akupunktur promil berfungsi menyeimbangkan hormon reproduksi, melancarkan aliran darah ke rahim, serta merelaksasi sistem saraf stres untuk mendukung keberhasilan promil alami maupun IVF.",
    },
    {
      category: "hidroterapi",
      q: "Apa bedanya kolam hidroterapi dengan kolam renang biasa?",
      a: "Kolam hidroterapi kami diatur konstan dengan suhu hangat terapeutik (32°C - 34°C) dan dilengkapi dengan jet air bertekanan untuk terapi otot, serta disewa secara privat penuh.",
    },
    {
      category: "fisioterapi",
      q: "Peralatan modalitas apa saja yang digunakan di Fisioterapi?",
      a: "Kami menyediakan modalitas lengkap standar medis terakreditasi seperti alat Ultrasound (US), TENS (stimulasi saraf elektrik), Infra Red (IR) Lamp, dan alat Traksi tulang belakang.",
    },
    {
      category: "renang",
      q: "Apakah kelas renang (Swim Course) cocok untuk lansia?",
      a: "Sangat cocok. Latihan renang privat di kolam hangat kami sangat dianjurkan bagi lansia untuk melatih kekuatan jantung dan paru-paru tanpa risiko benturan keras pada sendi lutut.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="faq" className="section-pad bg-cream-warm/20 border-t border-espresso/5">
      <div className="container-wellness max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="tag-pill bg-sage/40 text-forest font-bold text-xs uppercase tracking-wider mb-4 inline-block">
            Pusat Edukasi & FAQ
          </span>
          <h2 className="font-display font-black text-espresso text-3xl md:text-5xl leading-tight">
            Pertanyaan Yang Sering Diajukan
          </h2>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-xl mx-auto shadow-warm rounded-2xl overflow-hidden border border-espresso/5">
          <input
            type="text"
            placeholder="Cari keluhan atau pertanyaan Anda di sini..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white px-6 py-4.5 pl-12 font-sans text-sm focus:outline-none focus:ring-1 focus:ring-terra text-espresso placeholder:text-espresso/45"
          />
          <Search size={18} className="absolute left-4.5 top-1/2 -translate-y-1/2 text-espresso/40" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-full font-sans text-xs font-bold transition-all duration-200 ${
                selectedCategory === cat.id
                  ? "bg-espresso text-white shadow-warm"
                  : "bg-white text-espresso/60 hover:bg-espresso/5 border border-espresso/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-3 min-h-[150px]">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-espresso/5 shadow-warm overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-display font-bold text-espresso hover:text-terra text-base md:text-lg"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-terra flex-shrink-0" />
                    {faq.q}
                  </span>
                  {openIndex === index ? <ChevronUp size={18} className="flex-shrink-0" /> : <ChevronDown size={18} className="flex-shrink-0" />}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 pt-1 font-sans text-espresso/65 text-sm leading-relaxed border-t border-espresso/5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-10 font-sans text-espresso/40 text-sm">
              Tidak ada hasil pencarian yang cocok dengan kata kunci Anda.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
