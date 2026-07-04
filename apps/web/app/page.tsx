import type { Metadata } from "next";
import Image from "next/image";
import { Navbar }       from "@/components/Navbar";
import { Hero }         from "@/components/Hero";
import { Marquee }      from "@/components/Marquee";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Footer }       from "@/components/Footer";

import { ReelsShowcase } from "@/components/ReelsShowcase";
import { SearchableFaq } from "@/components/SearchableFaq";

export const metadata: Metadata = {
  title: "Lotus Health, Beauty & Care — Wellness Privat di Semarang",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-espresso">

      {/* ── 1. NAVIGATION & HERO ── */}
      <Navbar />
      <Hero />

      {/* ── 2. SCROLLING MARQUEE (Dark band) ── */}
      <Marquee bg="espresso" textClass="text-cream" speed="normal" />

      {/* ── 3. SERVICES GRID ── */}
      <ServicesGrid />

      {/* ── 4. THE LOTUS EXPERIENCE (Alternating split rows) ── */}
      <section id="tentang" className="section-pad bg-white border-t border-espresso/5">
        <div className="container-wellness">
          
          <div className="text-center max-w-xl mx-auto mb-16 lg:mb-24">
            <span className="tag-pill bg-peach/40 text-terra font-bold text-xs uppercase tracking-wider mb-4 inline-block">
              The Lotus Experience
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5xl leading-tight">
              Suasana Terapi Nyaman yang Dirancang Khusus
            </h2>
          </div>

          <div className="flex flex-col gap-20 lg:gap-32">
            
            {/* Row 1: Left Text, Right Image */}
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-6 flex flex-col gap-5">
                <span className="text-3xl">🔒</span>
                <h3 className="font-display font-black text-espresso text-3xl lg:text-4xl leading-tight">
                  Privasi Mutlak & Ramah Niqabi
                </h3>
                <p className="font-sans text-espresso/70 text-base leading-relaxed">
                  Kami memahami kebutuhan kenyamanan ekstra Anda. Setiap kolam hidroterapi, ruang akupunktur, dan ruang fisioterapi disewa khusus 100% secara privat per sesi. Tidak ada mata asing, tidak ada canggung — hanya ruang suaka pribadi Anda sepenuhnya.
                </p>
                <div className="flex gap-4 mt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-forest">✓</span>
                    <span className="font-sans text-xs font-bold text-espresso/60">One Patient per Session</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-forest">✓</span>
                    <span className="font-sans text-xs font-bold text-espresso/60">Fully Enclosed Suite</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-6 relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-warm-lg img-zoom">
                <Image
                  src="/images/lotus_treatment_hydro_female_hijab_float_front.jpg"
                  alt="Relaksasi Hidroterapi Privat Ramah Hijab"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                />
              </div>
            </div>

            {/* Row 2: Left Image, Right Text */}
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1 relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-warm-lg img-zoom">
                <Image
                  src="/images/lotus_treatment_body_abdomen_male_patient.jpg"
                  alt="Konsultasi Diagnosa Medis Holistik"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                />
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-5">
                <span className="text-3xl">👩‍⚕️</span>
                <h3 className="font-display font-black text-espresso text-3xl lg:text-4xl leading-tight">
                  Didukung Sains & Tenaga Medis Bersertifikat
                </h3>
                <p className="font-sans text-espresso/70 text-base leading-relaxed">
                  Didirikan oleh praktisi berpengalaman **drg. Arini Jannata, S.Tr. Akup, MM**, seluruh tindakan medis di Lotus Semarang dijalankan oleh fisioterapis dan akupunkturis berlisensi resmi. Kami mendiagnosa secara ilmiah melalui anamnesa fisik, nadi, lidah, dan struktur tulang belakang.
                </p>
                <div className="flex gap-4 mt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-terra">✓</span>
                    <span className="font-sans text-xs font-bold text-espresso/60">Certified Therapists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-terra">✓</span>
                    <span className="font-sans text-xs font-bold text-espresso/60">Modern Modality Tools</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. SCROLLING MARQUEE (Peach band) ── */}
      <Marquee bg="peach" textClass="text-espresso" speed="slow" />

      {/* ── 6. GALERI SUASANA (Space Showcase Grid) ── */}
      <section className="section-pad bg-cream-warm/30 border-y border-espresso/5">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14">
            <div className="lg:col-span-7">
              <span className="tag-pill bg-sage/40 text-forest font-bold text-xs uppercase tracking-wider mb-4 inline-block">
                Eksplorasi Ruang
              </span>
              <h2 className="font-display font-black text-espresso text-3xl md:text-5xl leading-tight tracking-tight">
                Galeri Suasana Retreat
              </h2>
            </div>
            <p className="lg:col-span-5 font-sans text-espresso/65 text-base md:text-lg leading-relaxed">
              Melihat lebih dekat kenyamanan ruang tunggu, kolam renang air hangat privat, serta peralatan terapi higienis kami.
            </p>
          </div>

          {/* Asymmetric Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative rounded-3xl overflow-hidden aspect-square img-zoom shadow-warm">
              <Image
                src="/images/lotus_interior_reception_greeting_staff.jpg"
                alt="Lobby & Resepsionis Lotus Semarang"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={80}
              />
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-square img-zoom shadow-warm mt-4 md:mt-0">
              <Image
                src="/images/lotus_tools_acupuncture_needles_steel_jar.jpg"
                alt="Peralatan Terapi Akupunktur Steril"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={80}
              />
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-square img-zoom shadow-warm">
              <Image
                src="/images/lotus_treatment_physio_child_exercise_ball.jpg"
                alt="Fisioterapi Anak & Keluarga"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={80}
              />
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-square img-zoom shadow-warm mt-4 md:mt-0">
              <Image
                src="/images/swimming-course-lansia-2.jpg"
                alt="Kolam Terapi Renang Hangat"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={80}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 6.5. REELS VIDEO SHOWCASE ── */}
      <ReelsShowcase />

      {/* ── 7. GOOGLE REVIEWS SHOWCASE ── */}
      <section className="section-pad bg-white">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Google Ratings Card */}
            <div className="lg:col-span-4 bg-sand-soft/30 rounded-[2.5rem] p-8 border border-espresso/5 flex flex-col gap-6 sticky top-32">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm font-sans font-black text-espresso text-lg">
                  G
                </span>
                <div>
                  <div className="font-display font-bold text-espresso text-base">Ulasan Google Maps</div>
                  <div className="font-sans text-xs text-espresso/50">Lotus Health, Beauty & Care</div>
                </div>
              </div>

              <div>
                <div className="font-display font-black text-espresso text-6xl leading-none">4.9</div>
                <div className="text-terra text-xl mt-2">★★★★★</div>
                <p className="font-sans text-espresso/60 text-xs mt-2">
                  Berdasarkan ulasan asli dari pasien terverifikasi di Semarang.
                </p>
              </div>

              <a
                href="https://maps.app.goo.gl/PWpA655K59Gq82Xy9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-dark text-center w-full py-3.5 text-xs font-bold"
              >
                Tulis Ulasan di Google
              </a>
            </div>

            {/* Right: Curated Reviews list */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              
              {/* Review 1 */}
              <div className="bg-white rounded-3xl p-8 border border-espresso/5 shadow-sm hover:shadow-warm transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-peach-soft text-terra font-display font-black flex items-center justify-center text-sm">
                      IR
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-espresso text-sm">Ibu Riana</h4>
                      <span className="font-sans text-[0.65rem] text-espresso/45">Pasien Hidroterapi, Gisikdrono</span>
                    </div>
                  </div>
                  <div className="text-terra text-sm">★★★★★</div>
                </div>
                <p className="font-sans text-espresso/70 text-sm leading-relaxed italic">
                  &ldquo;Sangat terbantu dengan sesi hidroterapi pasca operasi lutut saya. Kolamnya benar-benar privat, airnya hangat konstan, dan instruktur mendampingi dengan sabar. Proses pemulihan saya terasa jauh lebih cepat dan tidak menegangkan.&rdquo;
                </p>
              </div>

              {/* Review 2 */}
              <div className="bg-white rounded-3xl p-8 border border-espresso/5 shadow-sm hover:shadow-warm transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sage-soft text-forest font-display font-black flex items-center justify-center text-sm">
                      FT
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-espresso text-sm">Fathimah</h4>
                      <span className="font-sans text-[0.65rem] text-espresso/45">Pasien Akupunktur, Semarang Barat</span>
                    </div>
                  </div>
                  <div className="text-terra text-sm">★★★★★</div>
                </div>
                <p className="font-sans text-espresso/70 text-sm leading-relaxed italic">
                  &ldquo;Sebagai wanita berhijab (Niqabi), saya sangat pemilih dengan tempat terapi. Di Lotus, privasinya luar biasa terjaga (100% private suite). Terapisnya wanita ramah-ramah dan tindakan akupunktur wajahnya membuat kulit kencang alami.&rdquo;
                </p>
              </div>

              {/* Review 3 */}
              <div className="bg-white rounded-3xl p-8 border border-espresso/5 shadow-sm hover:shadow-warm transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sand-soft text-espresso font-display font-black flex items-center justify-center text-sm">
                      BG
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-espresso text-sm">Bapak Gunawan</h4>
                      <span className="font-sans text-[0.65rem] text-espresso/45">Pasien Fisioterapi, Ngaliyan</span>
                    </div>
                  </div>
                  <div className="text-terra text-sm">★★★★★</div>
                </div>
                <p className="font-sans text-espresso/70 text-sm leading-relaxed italic">
                  &ldquo;Saya menderita saraf kejepit di punggung bawah. Menjalani fisioterapi modalitas Ultrasound dan TENS di sini dipadu dengan latihan manual sangat meringankan nyeri. Terapisnya menjelaskan secara ilmiah dan mengedukasi gerakan mandiri di rumah.&rdquo;
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── 7.5. SEARCHABLE FAQ SECTION ── */}
      <SearchableFaq />

      {/* ── 8. FOOTER WITH CTA ── */}
      <Footer />
    </main>
  );
}
