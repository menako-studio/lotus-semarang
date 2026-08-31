"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen]         = useState(false);
  const [isLayananOpen, setIsLayananOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const layananItems = [
    { label: t("services.akupunktur.name"), href: "/layanan/akupunktur" },
    { label: t("services.hidroterapi.name"), href: "/layanan/hidroterapi" },
    { label: t("services.fisioterapi.name"), href: "/layanan/fisioterapi" },
    { label: t("services.swimCourse.name"), href: "/layanan/swim-course" },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LanguageSelector = () => (
    <div className="flex items-center bg-espresso/5 rounded-full p-0.5 border border-espresso/10">
      <button
        onClick={() => setLanguage("id")}
        className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-300 ${
          language === "id"
            ? "bg-espresso text-cream shadow-sm"
            : "text-espresso/60 hover:text-espresso"
        }`}
      >
        ID
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-300 ${
          language === "en"
            ? "bg-espresso text-cream shadow-sm"
            : "text-espresso/60 hover:text-espresso"
        }`}
      >
        EN
      </button>
    </div>
  );

  return (
    <>
      {/* ── Main Navbar ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-warm py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container-wellness flex items-center justify-between">

          {/* Logo / Brand Name */}
          <Link href="/" className="group flex items-center gap-3" aria-label="Lotus Health, Beauty & Care">
            <div className="relative w-[130px] h-[55px] md:w-[150px] md:h-[64px] transition-all duration-300">
              <Image
                src="/logo.png"
                alt="Lotus Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Layanan Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsLayananOpen(true)}
              onMouseLeave={() => setIsLayananOpen(false)}
            >
              <button className="flex items-center gap-1 font-sans text-sm font-semibold text-espresso/85 hover:text-blush py-2 transition-colors duration-200">
                {t("navbar.layanan")} <ChevronDown size={14} className={`transition-transform duration-200 ${isLayananOpen ? "rotate-180 text-blush" : ""}`} />
              </button>
              <AnimatePresence>
                {isLayananOpen && (
                  <motion.div
                    className="absolute top-full left-0 w-48 bg-white border border-espresso/5 rounded-2xl shadow-warm-lg p-2 flex flex-col z-50 mt-1"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {layananItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="font-sans text-xs font-semibold text-espresso/70 hover:text-blush hover:bg-blush-soft/60 px-4 py-2.5 rounded-xl transition-all"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/tentang-kami"
              className="font-sans text-sm font-semibold text-espresso/85 hover:text-blush transition-colors duration-200 relative group"
            >
              {t("navbar.tentangKami")}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blush rounded-full group-hover:w-full transition-all duration-300" />
            </Link>

            <Link
              href="#kontak"
              className="font-sans text-sm font-semibold text-espresso/85 hover:text-blush transition-colors duration-200 relative group"
            >
              {t("navbar.kontak")}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blush rounded-full group-hover:w-full transition-all duration-300" />
            </Link>
          </nav>

          {/* CTA + Language Selector + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <a
              href="/reservasi"
              className="hidden sm:inline-flex btn-pill-dark text-xs px-6 py-3 font-bold shadow-warm"
            >
              {t("navbar.reservasi")}
            </a>
            <button
              className="md:hidden p-2 rounded-full hover:bg-blush/20 transition-colors text-espresso"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? t("navbar.tutupMenu") : t("navbar.bukaMenu")}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white flex flex-col pt-24 pb-10 px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-5 mt-8">
              {/* Layanan Title */}
              <div className="font-sans text-[0.65rem] tracking-widest text-espresso/45 uppercase font-bold flex justify-between items-center">
                <span>{t("navbar.layananKami")}</span>
                <LanguageSelector />
              </div>
              <div className="grid grid-cols-2 gap-3 pl-1">
                {layananItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-display text-xl font-extrabold text-espresso hover:text-blush transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="h-px bg-espresso/5 my-2" />

              <Link
                href="/tentang-kami"
                className="font-display text-2xl font-black text-espresso hover:text-blush transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("navbar.tentangKami")}
              </Link>

              <Link
                href="#kontak"
                className="font-display text-2xl font-black text-espresso hover:text-blush transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("navbar.hubungiKami")}
              </Link>
            </nav>

            <div className="mt-auto flex flex-col gap-4">
              <a
                href="/reservasi"
                className="btn-pill-dark w-full justify-center text-center py-4 font-bold shadow-warm"
                onClick={() => setIsOpen(false)}
              >
                {t("navbar.reservasiWa")}
              </a>
              <p className="text-center text-xs text-espresso/45 font-sans">
                {t("navbar.address")}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
