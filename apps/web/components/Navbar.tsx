"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const layananItems = [
  { label: "Akupunktur", href: "/layanan/akupunktur" },
  { label: "Hidroterapi", href: "/layanan/hidroterapi" },
  { label: "Fisioterapi", href: "/layanan/fisioterapi" },
  { label: "Swim Course", href: "/layanan/swim-course" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen]         = useState(false);
  const [isLayananOpen, setIsLayananOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
              <button className="flex items-center gap-1 font-sans text-sm font-semibold text-espresso/85 hover:text-terra py-2 transition-colors duration-200">
                Layanan <ChevronDown size={14} className={`transition-transform duration-200 ${isLayananOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {isLayananOpen && (
                  <motion.div
                    className="absolute top-full left-0 w-48 bg-white border border-espresso/5 rounded-2xl shadow-warm-lg p-2 flex flex-col z-50 mt-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {layananItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="font-sans text-xs font-semibold text-espresso/70 hover:text-terra hover:bg-peach-soft/40 px-4 py-2.5 rounded-xl transition-all"
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
              className="font-sans text-sm font-semibold text-espresso/85 hover:text-terra transition-colors duration-200 relative group"
            >
              Tentang Kami
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-terra rounded-full group-hover:w-full transition-all duration-300" />
            </Link>

            <Link
              href="#kontak"
              className="font-sans text-sm font-semibold text-espresso/85 hover:text-terra transition-colors duration-200 relative group"
            >
              Kontak
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-terra rounded-full group-hover:w-full transition-all duration-300" />
            </Link>
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/6287700303645?text=Halo%20Lotus%20Semarang%2C%20saya%20ingin%20reservasi%20jadwal"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn-pill-dark text-xs px-6 py-3 font-bold"
            >
              Reservasi Jadwal
            </a>
            <button
              className="md:hidden p-2 rounded-full hover:bg-peach/30 transition-colors text-espresso"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
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
              <div className="font-sans text-[0.65rem] tracking-widest text-espresso/45 uppercase font-bold">
                Layanan Kami
              </div>
              <div className="grid grid-cols-2 gap-3 pl-1">
                {layananItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-display text-xl font-extrabold text-espresso hover:text-terra transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="h-px bg-espresso/5 my-2" />

              <Link
                href="/tentang-kami"
                className="font-display text-2xl font-black text-espresso hover:text-terra transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Tentang Kami
              </Link>

              <Link
                href="#kontak"
                className="font-display text-2xl font-black text-espresso hover:text-terra transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Hubungi Kami
              </Link>
            </nav>

            <div className="mt-auto flex flex-col gap-4">
              <a
                href="https://wa.me/6287700303645?text=Halo%20Lotus%20Semarang%2C%20saya%20ingin%20reservasi%20jadwal"
                className="btn-pill-dark w-full justify-center text-center py-4 font-bold"
                onClick={() => setIsOpen(false)}
              >
                Reservasi Jadwal via WhatsApp
              </a>
              <p className="text-center text-xs text-espresso/45 font-sans">
                Jl. Pamularsih No. 90/100, Semarang
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
