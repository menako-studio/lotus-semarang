import type { Metadata } from "next";
import { Navbar }       from "@/components/Navbar";
import { Hero }         from "@/components/Hero";
import { Marquee }      from "@/components/Marquee";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Footer }       from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lotus Health, Beauty & Care — Wellness Privat di Semarang",
};

export default function HomePage() {
  return (
    <main className="min-h-screen">

      {/* Sticky navigation */}
      <Navbar />

      {/* Full-bleed 50/50 hero */}
      <Hero />

      {/* Scrolling service marquee — dark band */}
      <Marquee bg="espresso" textClass="text-cream" speed="normal" />

      {/* Color-blocked 2x2 services grid */}
      <ServicesGrid />

      {/* Warm marquee between sections */}
      <Marquee bg="peach" textClass="text-espresso" speed="slow" />

      {/* About / Why Choose Us */}
      <AboutSection />

      {/* Footer with CTA + contact */}
      <Footer />
    </main>
  );
}

/* ─── About / Why Lotus Section ─────────────────────────────────────────── */
function AboutSection() {
  const reasons = [
    {
      emoji: "🔒",
      title: "Privasi Mutlak",
      desc:  "Setiap sesi adalah ruangan privat milikmu sepenuhnya. Tidak ada tamu lain yang masuk selama kamu di sini.",
      bg:    "bg-sage-soft",
    },
    {
      emoji: "👩‍⚕️",
      title: "Tim Ahli Bersertifikat",
      desc:  "Seluruh terapis dan instruktur kami memiliki sertifikasi nasional dan internasional yang terakreditasi.",
      bg:    "bg-peach-soft",
    },
    {
      emoji: "🕐",
      title: "Jadwal Fleksibel",
      desc:  "Buka setiap hari dengan slot jadwal yang bisa disesuaikan dengan rutinitas harianmu.",
      bg:    "bg-sand-soft",
    },
    {
      emoji: "💜",
      title: "Nyaman untuk Semua",
      desc:  "Dirancang khusus untuk kenyamanan semua kalangan, termasuk ibu berjilbab dan perempuan yang butuh privasi ekstra.",
      bg:    "bg-blush-soft",
    },
  ];

  return (
    <section id="tentang" className="section-pad bg-cream-warm">
      <div className="container-wellness">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-14 lg:mb-18">
          <div>
            <span className="tag-pill bg-terra/15 text-terra font-semibold text-xs mb-4 inline-block">
              Kenapa Lotus?
            </span>
            <h2
              className="font-display font-black text-espresso"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.75rem)",
                lineHeight: "1.05",
                letterSpacing: "-0.025em",
              }}
            >
              Karena Kamu Berhak dapat yang Terbaik.
            </h2>
          </div>
          <p className="font-sans text-espresso/60 leading-relaxed lg:pt-4" style={{ fontSize: "1.05rem" }}>
            Kami tahu perawatan kesehatan sering terasa berat, dingin, dan intimidatif.
            Di Lotus, kami membalik semua itu menjadi pengalaman yang{" "}
            <strong className="font-semibold text-espresso">menyenangkan, manusiawi, dan efektif.</strong>
          </p>
        </div>

        {/* Reason cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((r) => (
            <div
              key={r.title}
              className={`${r.bg} rounded-3xl p-6 flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-300`}
            >
              <span className="text-3xl">{r.emoji}</span>
              <h3
                className="font-display font-bold text-espresso"
                style={{ fontSize: "1.2rem", lineHeight: "1.2" }}
              >
                {r.title}
              </h3>
              <p className="font-sans text-espresso/60 leading-relaxed" style={{ fontSize: "0.85rem" }}>
                {r.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="font-sans text-espresso/50 mb-5" style={{ fontSize: "0.95rem" }}>
            Sudah lebih dari <strong className="text-espresso font-semibold">800 pasien</strong> yang mempercayakan kesehatan mereka kepada kami.
          </p>
          <a
            href="https://wa.me/6281802537509?text=Halo%20Lotus%2C%20saya%20ingin%20konsultasi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-dark inline-flex gap-2 py-4 px-8 text-base"
          >
            💬 Konsultasi Gratis Dulu
          </a>
        </div>
      </div>
    </section>
  );
}
