"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Instagram, Clock, Facebook } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { label: t("services.akupunktur.name"),  href: "/layanan/akupunktur" },
    { label: t("services.hidroterapi.name"), href: "/layanan/hidroterapi" },
    { label: t("services.fisioterapi.name"), href: "/layanan/fisioterapi" },
    { label: t("services.swimCourse.name"), href: "/layanan/swim-course" },
    { label: t("navbar.tentangKami"), href: "/tentang-kami" },
  ];

  return (
    <footer id="kontak" className="bg-espresso text-cream overflow-hidden">

      {/* ── Top CTA Band ── */}
      <div className="bg-blush py-16 px-6 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="container-wellness text-center relative z-10">
          <motion.h2
            className="font-display font-black text-white whitespace-pre-line"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              lineHeight: "1.05",
              letterSpacing: "-0.025em",
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t("footer.ctaTitle")}
          </motion.h2>
          <motion.p
            className="font-sans text-white/85 mt-4 mb-8 max-w-md mx-auto leading-relaxed"
            style={{ fontSize: "1rem" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t("footer.ctaDesc")}
          </motion.p>
          <motion.a
            href="/reservasi"
            className="inline-flex items-center gap-2.5 bg-white text-espresso rounded-full font-sans font-bold px-8 py-4 text-base hover:bg-cream-warm transition-all duration-300 hover:scale-105 shadow-warm-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("footer.ctaBtn")}
          </motion.a>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="section-pad">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-[2fr_1fr_1.5fr] gap-12 lg:gap-16 mb-12">

            {/* Brand column */}
            <div>
              <div className="mb-5">
                <div
                  className="font-display font-black text-cream"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", letterSpacing: "-0.02em", lineHeight: "1" }}
                >
                  Lotus
                </div>
                <div className="font-sans text-cream/40 text-[0.6rem] tracking-widest uppercase mt-0.5">
                  Health · Beauty · Care
                </div>
              </div>
              <p className="font-sans text-cream/55 leading-relaxed max-w-sm" style={{ fontSize: "0.9rem" }}>
                {t("footer.desc")}
              </p>

              {/* Operating hours */}
              <div className="flex items-start gap-3 mt-6">
                <Clock size={15} className="text-peach mt-0.5 flex-shrink-0" />
                <div className="font-sans text-cream/50" style={{ fontSize: "0.82rem" }}>
                  <div className="font-semibold text-cream/70 mb-1">{t("footer.opsHours")}</div>
                  <div>{t("footer.mondaySaturday")}</div>
                  <div>{t("footer.sundayClosed")}</div>
                </div>
              </div>
            </div>

            {/* Nav links */}
            <div>
              <div className="font-sans text-cream/40 text-[0.65rem] tracking-widest uppercase mb-5 font-semibold">
                {t("footer.servicesHeader")}
              </div>
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-sans text-cream/65 hover:text-cream transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="font-sans text-cream/40 text-[0.65rem] tracking-widest uppercase mb-5 font-semibold">
                {t("footer.contactHeader")}
              </div>
              <div className="flex flex-col gap-4">

                 {/* Address */}
                <a
                  href="https://maps.app.goo.gl/PWpA655K59Gq82Xy9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <MapPin size={16} className="text-peach mt-0.5 flex-shrink-0" />
                  <span className="font-sans text-cream/65 group-hover:text-cream transition-colors duration-200 text-sm leading-relaxed">
                    Jl. Pamularsih No. 90/100, Gisikdrono,<br />Semarang Barat, Semarang 50149
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/6287700303645"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <Phone size={16} className="text-peach flex-shrink-0" />
                  <span className="font-sans text-cream/65 group-hover:text-cream transition-colors duration-200 text-sm">
                    0877 0030 3645
                  </span>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/lotus_semarang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <Instagram size={16} className="text-peach flex-shrink-0" />
                  <span className="font-sans text-cream/65 group-hover:text-cream transition-colors duration-200 text-sm">
                    @lotus_semarang
                  </span>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/lotusacupuncturecenter/?locale=id_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <Facebook size={16} className="text-peach flex-shrink-0" />
                  <span className="font-sans text-cream/65 group-hover:text-cream transition-colors duration-200 text-sm">
                    Lotus Acupuncture Center
                  </span>
                </a>
              </div>

              {/* Quick WA CTA */}
              <a
                href="https://wa.me/6287700303645?text=Halo%20Lotus%2C%20saya%20ingin%20tanya-tanya%20tentang%20layanan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 bg-peach/20 hover:bg-peach/30 text-cream rounded-full px-5 py-2.5 text-sm font-sans font-medium transition-all duration-300"
              >
                {t("footer.askWa")}
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="font-sans text-cream/25 text-xs">
              {t("footer.rights")}
            </span>
            <span className="font-sans text-cream/20 text-xs">
              Made with ❤ in Semarang
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
