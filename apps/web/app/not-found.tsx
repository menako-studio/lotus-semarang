"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-cream flex flex-col justify-between text-espresso selection:bg-peach selection:text-espresso">
      <Navbar />

      <main className="flex-grow flex items-center justify-center pt-32 pb-24 relative overflow-hidden">
        {/* Soft, minimal ambient layout */}
        <div className="absolute w-[30rem] h-[30rem] bg-peach-light/20 blur-[120px] rounded-full -top-12 -left-12 -z-10" />
        <div className="absolute w-[30rem] h-[30rem] bg-sage-light/15 blur-[120px] rounded-full -bottom-20 -right-20 -z-10" />

        <div className="container-wellness max-w-2xl px-6 py-12 flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center max-w-lg"
          >
            {/* Title / Big 404 Heading */}
            <h1 className="font-display font-black text-espresso text-4xl md:text-6xl tracking-tight mb-4 leading-tight">
              {t("notFound.title")}
            </h1>

            {/* Simple Subtitle */}
            <p className="font-sans text-espresso/70 text-base md:text-lg max-w-md mx-auto mb-10 leading-relaxed">
              {t("notFound.subtitle")}
            </p>

            {/* Back Button */}
            <Link href="/" className="btn-pill-dark font-sans group">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              {t("notFound.backHome")}
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
