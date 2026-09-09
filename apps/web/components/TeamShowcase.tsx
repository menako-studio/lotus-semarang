"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, UserCheck } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export function TeamShowcase() {
  const { t } = useLanguage();

  const members = (t("team.members") as any[]) || [];

  return (
    <section id="tim-medis" className="section-pad bg-white border-t border-espresso/5">
      <div className="container-wellness">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 lg:mb-18">
          <motion.span
            className="tag-pill bg-sage/30 text-forest font-bold text-xs uppercase tracking-wider mb-4 inline-block border border-sage/20"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t("team.tagline")}
          </motion.span>
          <motion.h2
            className="font-display font-black text-espresso text-3xl md:text-5xl leading-tight mb-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t("team.title")}
          </motion.h2>
          <motion.p
            className="font-sans font-semibold text-espresso/80 text-base md:text-lg mb-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {t("team.subtitle")}
          </motion.p>
          <motion.p
            className="font-sans text-espresso/65 text-sm md:text-base leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("team.desc")}
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {members.map((member, idx) => (
            <motion.div
              key={idx}
              className="bg-cream rounded-[2.25rem] p-6 border border-espresso/8 shadow-warm hover:shadow-warm-lg transition-all duration-300 flex flex-col justify-between group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  {/* Photo or Monogram Avatar */}
                  {member.image ? (
                    <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-sm flex-shrink-0 border-2 border-white bg-sand-soft">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 72px, 80px"
                      />
                    </div>
                  ) : (
                    <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-sand-soft/80 border border-sand/40 flex items-center justify-center text-espresso/70 font-display font-black text-xl flex-shrink-0">
                      {member.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}

                  <div>
                    <h3 className="font-display font-bold text-espresso text-base lg:text-lg leading-snug">
                      {member.name}
                    </h3>
                    <p className="font-sans text-espresso/60 text-xs mt-0.5">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* License / Credentials badge */}
              <div className="pt-3 border-t border-espresso/5 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 font-sans text-[0.7rem] font-bold text-forest bg-sage-soft/60 px-3 py-1 rounded-full border border-sage/20">
                  <ShieldCheck size={13} className="text-forest" />
                  {member.license}
                </span>
                <span className="font-sans text-[0.65rem] text-espresso/40 font-semibold">
                  Lotus Team
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
