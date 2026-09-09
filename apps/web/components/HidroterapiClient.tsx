"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { useLanguage } from "@/components/LanguageContext";
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from "lucide-react";

export function HidroterapiClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t, language } = useLanguage();

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const applications = language === "id" ? [
    {
      title: "Mereduksi Beban Sendi",
      desc: "Prinsip fisika daya apung air mengurangi beban tubuh hingga 90%, sangat meringankan tekanan pada sendi lutut, pinggang, dan tulang belakang Anda.",
      img: "/images/lotus_hydrotherapy_pool_male_floating_device.jpg",
      bg: "bg-hydro-soft/80 border border-hydro/20",
    },
    {
      title: "Rehabilitasi Motorik & Stroke",
      desc: "Media air mempermudah latihan gerak tubuh, melatih koordinasi motorik, serta melatih keseimbangan dengan risiko cedera benturan yang minimal.",
      img: "/images/lotus_treatment_hydro_adult_dumbbell_therapy.jpg",
      bg: "bg-sage-soft/80 border border-sage/20",
    },
    {
      title: "Relaksasi Saraf & Otot",
      desc: "Efek relaksasi dan gaya apung air meredakan ketegangan otot, melancarkan sirkulasi darah, serta menenangkan sistem saraf tubuh.",
      img: "/images/lotus_treatment_hydro_equipment_noodle_front.jpg",
      bg: "bg-blush-soft/80 border border-blush/20",
    },
    {
      title: "Tumbuh Kembang & Bumil",
      desc: "Menghadirkan sarana aman untuk stimulasi gerak motorik anak-anak dan olahraga kehamilan yang aman bebas cemas benturan.",
      img: "/images/lotus_treatment_baby_group_foot_hijab.webp",
      bg: "bg-sand-soft/80 border border-sand/30",
    },
  ] : [
    {
      title: "Reduce Joint Load",
      desc: "The physical principles of water buoyancy reduce body weight by up to 90%, greatly relieving pressure on your knee joints, waist, and spine.",
      img: "/images/lotus_hydrotherapy_pool_male_floating_device.jpg",
      bg: "bg-hydro-soft/80 border border-hydro/20",
    },
    {
      title: "Motor & Stroke Rehab",
      desc: "The water environment eases movement exercises, trains motor coordination, and improves balance with minimal impact risk.",
      img: "/images/lotus_treatment_hydro_adult_dumbbell_therapy.jpg",
      bg: "bg-sage-soft/80 border border-sage/20",
    },
    {
      title: "Nerve & Muscle Relaxation",
      desc: "Buoyancy and gentle water movement relieve muscle tension, promote blood circulation, and calm the nervous system.",
      img: "/images/lotus_treatment_hydro_equipment_noodle_front.jpg",
      bg: "bg-blush-soft/80 border border-blush/20",
    },
    {
      title: "Child Development & Pregnancy",
      desc: "Provides a safe environment to stimulate kids' motor skills and safe exercise for pregnant mothers without worrying about impact.",
      img: "/images/lotus_treatment_baby_group_foot_hijab.webp",
      bg: "bg-sand-soft/80 border border-sand/30",
    },
  ];

  const faqs = language === "id" ? [
    {
      q: "Apakah kolam hidroterapi di Lotus Semarang bersifat privat?",
      a: "Ya, 100% privat. Setiap sesi disewakan secara eksklusif 1 pasien : 1 fisioterapis. Tidak ada orang lain yang masuk ke area kolam selama sesi Anda berlangsung, sangat nyaman untuk wanita berhijab dan pasien yang membutuhkan privasi tinggi.",
    },
    {
      q: "Apakah kolam hidroterapi Lotus air hangat?",
      a: "Kolam di Lotus Semarang adalah kolam semi-outdoor dengan air bersih bersuhu biasa (bukan air hangat). Area kolam terlindung dari terik matahari siang hari dan aman dari hujan, sehingga suasana terapi tetap sejuk, nyaman, dan higienis.",
    },
    {
      q: "Apa yang harus saya bawa saat sesi hidroterapi?",
      a: "Cukup bawa pakaian renang yang nyaman. Bagi wanita berhijab, disarankan membawa baju renang muslimah yang bersih. Kami menyediakan fasilitas ruang bilas bersih dan privat pasca sesi.",
    },
    {
      q: "Apakah hidroterapi aman bagi penderita stroke dan lansia?",
      a: "Sangat aman dan didampingi langsung oleh fisioterapis profesional secara personal. Latihan di dalam media air jauh lebih ringan dilakukan bagi penderita stroke atau lansia yang memiliki keterbatasan kekuatan otot di darat.",
    },
  ] : [
    {
      q: "Is the hydrotherapy pool at Lotus Semarang private?",
      a: "Yes, 100% private. Each session is 1 patient : 1 physiotherapist. No other guests will enter the pool area during your session, ensuring total comfort and privacy.",
    },
    {
      q: "Is the hydrotherapy pool at Lotus heated?",
      a: "The pool at Lotus Semarang is a semi-outdoor pool with fresh clean water (standard temperature, not heated). It is sheltered from direct sun and protected from rain, keeping it cool, pleasant, and clean throughout the day.",
    },
    {
      q: "What should I bring to the hydrotherapy session?",
      a: "Just bring comfortable swimwear. For hijabi women, it is recommended to bring clean Muslimah swimwear. We provide private sterile shower facilities post-session.",
    },
    {
      q: "Is hydrotherapy safe for stroke patients and seniors?",
      a: "Extremely safe and personally assisted 1-on-1 by certified physiotherapists. Exercising in water significantly reduces body load for stroke survivors or seniors with limited strength on land.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              className="lg:col-span-6 flex flex-col gap-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div>
                <span className="tag-pill bg-hydro/20 text-hydro-muted font-bold text-xs uppercase tracking-wider mb-4 inline-block border border-hydro/30">
                  {t("hidroterapiPage.eyebrow")}
                </span>
                <h1 className="font-display font-black text-espresso text-5xl lg:text-7.5xl leading-[1.05] tracking-tight">
                  {language === "id" ? "Hidroterapi" : "Hydrotherapy"}<br />
                  <span className="text-hydro-muted">{language === "id" ? "Suaka Air Privat." : "Private Water Sanctuary."}</span>
                </h1>
              </div>
              <p className="font-sans text-espresso/70 text-lg leading-relaxed max-w-lg">
                {language === "id" 
                  ? "Temukan pemulihan fisik yang menenangkan. Kolam semi-outdoor privat kami memanfaatkan sifat fisika air untuk meringankan beban sendi, mempercepat pemulihan motorik, dan mendukung proses penyembuhan."
                  : "Discover a soothing physical recovery. Our private semi-outdoor pool utilizes the physics principles of water to reduce joint load, accelerate motor recovery, and support your healing process."}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={`https://wa.me/6287700303645?text=${encodeURIComponent(t("hidroterapiPage.whatsAppPrompt"))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-dark font-bold text-sm px-8 py-4 shadow-warm group gap-2"
                >
                  {t("hidroterapiPage.cta")}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={`https://wa.me/6287700303645?text=${encodeURIComponent(language === "id" ? "Halo Lotus, mau tanya detail kolam Hidroterapi" : "Hello Lotus, I'd like to ask details about Hydrotherapy Pool")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-outline font-bold text-sm px-8 py-4"
                >
                  {language === "id" ? "Hubungi Kami" : "Contact Us"}
                </a>
              </div>
            </motion.div>

            {/* Right: Overlapping Editorial Images */}
            <motion.div
              className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] lg:min-h-[500px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute top-10 left-10 w-4/5 h-4/5 bg-hydro-soft rounded-[3rem] -rotate-3" />
              <div className="absolute top-0 right-4 w-[65%] aspect-[3/4] rounded-3xl overflow-hidden shadow-warm-lg img-zoom z-10">
                <Image
                  src="/images/lotus_treatment_hydro_female_hijab_supine_wide.jpg"
                  alt="Latihan Terapi Air Hidroterapi"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={85}
                />
              </div>
              <div className="absolute bottom-4 left-4 w-[45%] aspect-square rounded-3xl overflow-hidden shadow-warm-xl border-4 border-white img-zoom z-20">
                <Image
                  src="/images/lotus_treatment_hydro_female_hijab_float_front.jpg"
                  alt="Detail Sesi Floating Hidroterapi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  quality={80}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Marquee Accent */}
      <Marquee bg="sage" textClass="text-forest" speed="slow" />

      {/* Science Section */}
      <section className="section-pad bg-white">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
              className="lg:col-span-6 relative aspect-[4/3] rounded-[3.5rem] overflow-hidden shadow-warm-lg img-zoom"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/images/lotus_treatment_hydro_patient_floating_alone.jpg"
                alt="Manfaat Daya Apung Air Fisika"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
            </motion.div>
            <motion.div
              className="lg:col-span-6 flex flex-col gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <span className="tag-pill bg-espresso/5 text-espresso/80 font-bold text-xs uppercase tracking-wider self-start">
                {language === "id" ? "Fisika Air & Pemulihan" : "Water Physics & Recovery"}
              </span>
              <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight tracking-tight">
                {language === "id" ? "Mengapa Tubuh Anda Lebih Mudah Pulih di Dalam Air?" : "Why Does Your Body Recover Easier in Water?"}
              </h2>
              <div className="flex flex-col gap-6 mt-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-hydro-soft text-hydro-muted flex items-center justify-center font-display font-black text-lg flex-shrink-0 border border-hydro/20">
                    01
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-espresso text-lg mb-1">
                      {language === "id" ? "Daya Apung Hidrostatik" : "Hydrostatic Buoyancy"}
                    </h3>
                    <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                      {language === "id"
                        ? "Mengurangi beban gravitasi tubuh Anda secara drastis, sehingga otot dan sendi yang cedera dapat digerakkan secara bebas tanpa rasa sakit akibat beban berat badan."
                        : "Drastically reduces the gravitational load on your body, so injured muscles and joints can be moved freely without pain from body weight."}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sage-soft text-forest flex items-center justify-center font-display font-black text-lg flex-shrink-0 border border-sage/20">
                    02
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-espresso text-lg mb-1">
                      {language === "id" ? "Tekanan Hidrodinamis" : "Hydrodynamic Pressure"}
                    </h3>
                    <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                      {language === "id"
                        ? "Tekanan air merangsang sirkulasi cairan getah bening dan melancarkan aliran darah balik ke jantung, sangat efektif mengurangi pembengkakan kaki/sendi."
                        : "Water pressure stimulates lymph fluid circulation and returns blood flow back to the heart, highly effective in reducing foot/joint swelling."}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blush-soft text-blush-deep flex items-center justify-center font-display font-black text-lg flex-shrink-0 border border-blush/20">
                    03
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-espresso text-lg mb-1">
                      {language === "id" ? "Suasana Nyaman & Teduh" : "Comfortable & Sheltered Atmosphere"}
                    </h3>
                    <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                      {language === "id"
                        ? "Area kolam semi-outdoor yang terlindung dari cuaca memberikan stimulasi segar dan nyaman, membebaskan pikiran dari stres, serta melemaskan kekakuan otot."
                        : "Sheltered semi-outdoor pool area provides a refreshing and comfortable environment, relieving stress and relaxing muscle stiffness."}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="section-pad bg-cream-warm/40 border-y border-espresso/5">
        <div className="container-wellness">
          <motion.div
            className="text-center max-w-xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag-pill bg-espresso/5 text-espresso/70 font-bold text-xs uppercase tracking-wider mb-4 inline-block">
              {language === "id" ? "Manfaat Utama" : "Key Benefits"}
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight">
              {language === "id" ? "Aplikasi Hidroterapi yang Kami Sediakan" : "Hydrotherapy Applications We Provide"}
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {applications.map((app, i) => (
              <motion.div
                key={i}
                className={`${app.bg} rounded-[2.5rem] p-8 lg:p-10 flex flex-col gap-6 shadow-warm hover:-translate-y-1.5 transition-all duration-300`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="grid grid-cols-[3fr_1.5fr] gap-4 items-center">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-black text-espresso text-xl lg:text-2xl leading-tight">
                      {app.title}
                    </h3>
                    <p className="font-sans text-espresso/65 text-xs lg:text-sm leading-relaxed">
                      {app.desc}
                    </p>
                  </div>
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-warm img-zoom">
                    <Image
                      src={app.img}
                      alt={app.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      quality={80}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section-pad bg-white">
        <div className="container-wellness">
          <motion.div
            className="text-center max-w-xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag-pill bg-sage/30 text-forest font-bold text-xs uppercase tracking-wider mb-4 inline-block border border-sage/20">
              {language === "id" ? "Alur Terapi Kolam" : "Pool Therapy Flow"}
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight">
              {language === "id" ? "Bagaimana Sesi Hidroterapi Anda Berlangsung?" : "How Does Your Hydrotherapy Session Go?"}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                img: "/images/lotus_treatment_hydro_equipment_noodle_angle.jpg",
                alt: "Persiapan Alat Bantu Apung",
                step: language === "id" ? "01. Persiapan & Bilas Steril" : "01. Preparation & Sterile Rinse",
                desc: language === "id"
                  ? "Pasien diwajibkan bilas mandi steril terlebih dahulu. Instruktur menyiapkan alat bantu apung (noodles, belt, dumbbell air) sesuai dengan rencana latihan motorik pasien."
                  : "Patients are required to rinse in a sterile shower first. The instructor prepares float aids (noodles, belt, water dumbbells) according to the patient's motor exercise plan."
              },
              {
                img: "/images/lotus_treatment_hydro_adult_float_therapy_therapist.jpg",
                alt: "Latihan Terapi Bersama Instruktur",
                step: language === "id" ? "02. Latihan Terapeutik Air" : "02. Water Therapeutic Exercise",
                desc: language === "id"
                  ? "Di bawah bimbingan fisioterapis profesional, Anda melakukan latihan gerak sendi, penguatan otot, atau relaksasi apung secara privat di kolam semi-outdoor."
                  : "Under the guidance of a professional physiotherapist, you perform joint movement exercises, muscle strengthening, or floating relaxation in the private semi-outdoor pool."
              },
              {
                img: "/images/lotus_treatment_hydro_elderly_hijab_smile_edge.jpg",
                alt: "Selesai Sesi Relaksasi",
                step: language === "id" ? "03. Bilas & Evaluasi" : "03. Rinse & Evaluation",
                desc: language === "id"
                  ? "Setelah 30-45 menit latihan, Anda membilas diri di ruang bilas privat yang bersih. Fisioterapis mencatat perkembangan gerak sendi Anda untuk sesi berikutnya."
                  : "After 30-45 minutes of training, you rinse off in the clean private shower. The physiotherapist records your joint movement progress for the next session."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col gap-4"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-warm img-zoom mb-2">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={80}
                  />
                </div>
                <span className="font-display font-black text-forest text-lg">
                  {item.step}
                </span>
                <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-pad bg-cream-warm/40 border-t border-espresso/5">
        <div className="container-wellness max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag-pill bg-espresso/5 text-espresso/70 font-bold text-xs uppercase tracking-wider mb-4 inline-block">
              {language === "id" ? "Pertanyaan Umum" : "Frequently Asked Questions"}
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5xl leading-tight">
              {language === "id" ? "Hal-Hal yang Sering Ditanyakan" : "Common Questions Asked"}
            </h2>
          </motion.div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl border border-espresso/5 shadow-warm overflow-hidden transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-display font-bold text-espresso hover:text-hydro-muted text-base md:text-lg transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-hydro-muted flex-shrink-0" />
                    {faq.q}
                  </span>
                  {openFaq === index ? <ChevronUp size={18} className="flex-shrink-0 text-hydro-muted" /> : <ChevronDown size={18} className="flex-shrink-0 text-espresso/40" />}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 font-sans text-espresso/65 text-sm leading-relaxed border-t border-espresso/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
