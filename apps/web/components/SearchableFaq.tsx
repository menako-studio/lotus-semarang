"use client";

import { useState } from "react";
import { Search, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

interface FaqItem {
  q: string;
  a: string;
  category: "umum" | "akupunktur" | "hidroterapi" | "fisioterapi" | "renang";
}

export function SearchableFaq() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const categories = [
    { id: "all", label: t("faq.categories.all") },
    { id: "umum", label: t("faq.categories.umum") },
    { id: "akupunktur", label: t("faq.categories.akupunktur") },
    { id: "hidroterapi", label: t("faq.categories.hidroterapi") },
    { id: "fisioterapi", label: t("faq.categories.fisioterapi") },
    { id: "renang", label: t("faq.categories.renang") },
  ];

  const faqs: FaqItem[] = t("faq.list") || [];

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
            {t("faq.eyebrow")}
          </span>
          <h2 className="font-display font-black text-espresso text-3xl md:text-5xl leading-tight">
            {t("faq.title")}
          </h2>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-xl mx-auto shadow-warm rounded-2xl overflow-hidden border border-espresso/5">
          <input
            type="text"
            placeholder={t("faq.searchPlaceholder")}
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
              {t("faq.noResults")}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
