"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export function ReviewsSection() {
  const { t } = useLanguage();
  const reviewsList = t("reviews.list") || [];

  const categoryBadgeColors: Record<string, string> = {
    Akupunktur: "bg-akupunktur-soft text-lotus-deep border-akupunktur/30",
    Hidroterapi: "bg-hidro-soft text-hydro-deep border-hidro/30",
    "Akupunktur & Hidroterapi": "bg-blush-soft text-blush-deep border-blush/20",
    "Akupunktur & Hydrotherapy": "bg-blush-soft text-blush-deep border-blush/20",
    Acupuncture: "bg-akupunktur-soft text-lotus-deep border-akupunktur/30",
    Hydrotherapy: "bg-hidro-soft text-hydro-deep border-hidro/30",
  };

  return (
    <section className="section-pad bg-sand-soft/20 border-t border-espresso/5">
      <div className="container-wellness">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-18"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-4 text-xs font-bold tracking-wider uppercase border tag-pill bg-blush/20 text-blush-deep border-blush/20">
            {t("reviews.eyebrow")}
          </span>
          <h2 className="mb-4 text-3xl font-black leading-tight font-display text-espresso md:text-5xl">
            {t("reviews.title")}
          </h2>
          <p className="font-sans text-base leading-relaxed text-espresso/65 md:text-lg">
            {t("reviews.desc")}
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {reviewsList.map((review: any, idx: number) => {
            const badgeClass =
              categoryBadgeColors[review.category] ||
              "bg-sand-soft text-espresso/80 border-espresso/10";

            return (
              <motion.div
                key={idx}
                className={`bg-white rounded-[2rem] p-7 md:p-8 border border-espresso/6 shadow-warm hover:shadow-warm-lg transition-all duration-300 flex flex-col justify-between ${
                  idx === 0 ? "lg:col-span-2" : idx === 3 ? "lg:col-span-2" : ""
                }`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                {/* Quote header */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span
                      className={`inline-flex items-center text-xs font-bold px-3 py-1 rounded-full border ${badgeClass}`}
                    >
                      {review.category}
                    </span>
                    <Quote className="text-blush/30 w-7 h-7 flex-shrink-0" />
                  </div>

                  {/* Story text */}
                  <p className="font-sans text-espresso/85 text-sm md:text-base leading-relaxed mb-6 italic">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-espresso/5 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-sand-soft flex items-center justify-center font-display font-black text-espresso/80 text-sm border border-espresso/8 shadow-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-espresso text-sm md:text-base leading-snug">
                      {review.name}
                    </h3>
                    <p className="font-sans text-xs text-espresso/55 mt-0.5">
                      {review.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
