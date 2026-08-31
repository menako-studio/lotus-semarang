"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <section id="faq" className="section-pad bg-cream-warm/40 border-t border-espresso/5">
      <div className="container-wellness max-w-4xl">
        
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="tag-pill bg-sage/30 text-forest font-bold text-xs uppercase tracking-wider mb-4 inline-block border border-sage/20">
            {t("faq.eyebrow")}
          </span>
          <h2 className="font-display font-black text-espresso text-3xl md:text-5xl leading-tight">
            {t("faq.title")}
          </h2>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="relative mb-8 max-w-xl mx-auto shadow-warm rounded-2xl overflow-hidden border border-espresso/5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <input
            type="text"
            placeholder={t("faq.searchPlaceholder")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white px-6 py-4.5 pl-12 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-blush text-espresso placeholder:text-espresso/45"
          />
          <Search size={18} className="absolute left-4.5 top-1/2 -translate-y-1/2 text-espresso/40" />
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setOpenIndex(null);
              }}
              className={`px-4.5 py-2 rounded-full font-sans text-xs font-bold transition-all duration-200 ${
                selectedCategory === cat.id
                  ? "bg-espresso text-white shadow-warm"
                  : "bg-white text-espresso/70 hover:bg-espresso/5 border border-espresso/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-3 min-h-[150px]">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl border border-espresso/5 shadow-warm overflow-hidden transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-display font-bold text-espresso hover:text-blush text-base md:text-lg transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-blush flex-shrink-0" />
                    {faq.q}
                  </span>
                  {openIndex === index ? <ChevronUp size={18} className="flex-shrink-0 text-blush" /> : <ChevronDown size={18} className="flex-shrink-0 text-espresso/40" />}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 font-sans text-espresso/70 text-sm leading-relaxed border-t border-espresso/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-10 font-sans text-espresso/45 text-sm">
              {t("faq.noResults")}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
