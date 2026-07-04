"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Instagram, Clock } from "lucide-react";

const navLinks = [
  { label: "Akupunktur",  href: "#akupunktur" },
  { label: "Hidroterapi", href: "#hidroterapi" },
  { label: "Fisioterapi", href: "#fisioterapi" },
  { label: "Swim Course", href: "#swim-course" },
  { label: "Tentang Kami", href: "#tentang" },
];

export function Footer() {
  return (
    <footer id="kontak" className="bg-espresso text-cream overflow-hidden">

      {/* ── Top CTA Band ── */}
      <div className="bg-terra py-16 px-6">
        <div className="container-wellness text-center">
          <motion.h2
            className="font-display font-black text-cream"
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
            Mulai Hari Ini,<br />Karena Kamu Layak.
          </motion.h2>
          <motion.p
            className="font-sans text-cream/75 mt-4 mb-8 max-w-md mx-auto leading-relaxed"
            style={{ fontSize: "1rem" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Satu langkah kecil untuk hidupmu yang lebih sehat dan bahagia.
            Tim kami siap menyambut kamu.
          </motion.p>
          <motion.a
            href="https://wa.me/6281802537509?text=Halo%20Lotus%2C%20saya%20ingin%20reservasi%20jadwal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-cream text-espresso rounded-full font-sans font-bold px-8 py-4 text-base hover:bg-sand transition-all duration-300 hover:scale-105 shadow-warm-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            💬 Chat via WhatsApp
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
                Tempat perawatan kesehatan yang terasa seperti rumah sendiri —
                hangat, privat, dan selalu menyambut kamu apa adanya.
              </p>

              {/* Operating hours */}
              <div className="flex items-start gap-3 mt-6">
                <Clock size={15} className="text-peach mt-0.5 flex-shrink-0" />
                <div className="font-sans text-cream/50" style={{ fontSize: "0.82rem" }}>
                  <div className="font-semibold text-cream/70 mb-1">Jam Operasional</div>
                  <div>Senin – Jumat: 08.00 – 20.00</div>
                  <div>Sabtu – Minggu: 08.00 – 18.00</div>
                </div>
              </div>
            </div>

            {/* Nav links */}
            <div>
              <div className="font-sans text-cream/40 text-[0.65rem] tracking-widest uppercase mb-5 font-semibold">
                Layanan
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
                Hubungi Kami
              </div>
              <div className="flex flex-col gap-4">

                 {/* Address */}
                <a
                  href="https://maps.google.com/?q=Jalan+Pamularsih+no+90/100+Gisikdrono+Semarang"
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
                  href="https://wa.me/6281802537509"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <Phone size={16} className="text-peach flex-shrink-0" />
                  <span className="font-sans text-cream/65 group-hover:text-cream transition-colors duration-200 text-sm">
                    0818 0253 7509
                  </span>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/lotussemarang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <Instagram size={16} className="text-peach flex-shrink-0" />
                  <span className="font-sans text-cream/65 group-hover:text-cream transition-colors duration-200 text-sm">
                    @lotussemarang
                  </span>
                </a>
              </div>

              {/* Quick WA CTA */}
              <a
                href="https://wa.me/6281802537509?text=Halo%20Lotus%2C%20saya%20ingin%20tanya-tanya%20tentang%20layanan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 bg-peach/20 hover:bg-peach/30 text-cream rounded-full px-5 py-2.5 text-sm font-sans font-medium transition-all duration-300"
              >
                💬 Tanya Gratis via WA
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="font-sans text-cream/25 text-xs">
              © 2025 Lotus Health, Beauty & Care. Semua hak dilindungi.
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
