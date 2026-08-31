"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { useLanguage } from "@/components/LanguageContext";
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from "lucide-react";

export function FisioterapiClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t, language } = useLanguage();

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const applications = language === "id" ? [
    {
      title: "Nyeri & Persendian",
      desc: "Perawatan rehabilitatif komprehensif untuk meredakan nyeri pada pinggang, leher, bahu, lutut, dan masalah persendian gerak lainnya.",
      img: "/images/lotus_treatment_physio_knee_mobilization_closeup.webp",
      bg: "bg-sage-soft/80 border border-sage/20",
    },
    {
      title: "Kelainan Tulang Belakang",
      desc: "Terapi manual terfokus untuk membantu memperbaiki kelainan kelengkungan tulang belakang dan memulihkan postur tubuh ideal Anda.",
      img: "/images/lotus_treatment_pediatric_spine_assessment_hijab.webp",
      bg: "bg-blush-soft/80 border border-blush/20",
    },
    {
      title: "Stroke & Pemulihan Motorik",
      desc: "Latihan pemulihan saraf dan gerak motorik yang terstruktur pasca stroke, cedera traumatis, maupun pasca tindakan operasi medis.",
      img: "/images/lotus_treatment_physio_adult_ball_exercise_close.jpg",
      bg: "bg-peach-soft/80 border border-peach/20",
    },
    {
      title: "Ibu Hamil & Tumbuh Kembang",
      desc: "Latihan fisik terapeutik pemulihan panggul ibu hamil/melahirkan serta stimulasi melatih motorik tumbuh kembang anak-anak.",
      img: "/images/lotus_treatment_physio_child_exercise_ball.jpg",
      bg: "bg-sand-soft/80 border border-sand/30",
    },
  ] : [
    {
      title: "Pain & Joints",
      desc: "Comprehensive rehabilitative care to relieve pain in the lower back, neck, shoulders, knees, and other joint movement issues.",
      img: "/images/lotus_treatment_physio_knee_mobilization_closeup.webp",
      bg: "bg-sage-soft/80 border border-sage/20",
    },
    {
      title: "Spinal Abnormalities",
      desc: "Focused manual therapy to help correct spinal curvature abnormalities and restore your ideal posture.",
      img: "/images/lotus_treatment_pediatric_spine_assessment_hijab.webp",
      bg: "bg-blush-soft/80 border border-blush/20",
    },
    {
      title: "Stroke & Motor Recovery",
      desc: "Structured nerve and motor movement recovery exercises post-stroke, traumatic injury, or post-surgical medical procedures.",
      img: "/images/lotus_treatment_physio_adult_ball_exercise_close.jpg",
      bg: "bg-peach-soft/80 border border-peach/20",
    },
    {
      title: "Pregnancy & Development",
      desc: "Therapeutic physical exercise for pelvic recovery of pregnant/postpartum mothers and stimulation to train children's motor skills.",
      img: "/images/lotus_treatment_physio_child_exercise_ball.jpg",
      bg: "bg-sand-soft/80 border border-sand/30",
    },
  ];

  const tools = language === "id" ? [
    "Manual Therapy (Kinesioterapi)",
    "Neuromuskular Tapping (NMT)",
    "Infra Red (IR) Lamp",
    "Ultrasound (US) Therapy",
    "Transcutaneus Electrical Stimulation (TENS)",
    "Traksi Lumbal / Cervical (Tarikan Tulang)",
  ] : [
    "Manual Therapy (Kinesiotherapy)",
    "Neuromuscular Tapping (NMT)",
    "Infra Red (IR) Lamp",
    "Ultrasound (US) Therapy",
    "Transcutaneous Electrical Stimulation (TENS)",
    "Lumbar / Cervical Traction (Spinal Traction)",
  ];

  const faqs = language === "id" ? [
    {
      q: "Apakah layanan Fisioterapi di Lotus dikerjakan secara privat?",
      a: "Ya. Setiap sesi fisioterapi bersifat privat (satu pasien per sesi) di dalam ruangan terapi khusus. Anda akan mendapatkan perhatian penuh dan pendampingan 1-on-1 dari fisioterapis kami tanpa terganggu.",
    },
    {
      q: "Modalitas alat apa saja yang digunakan selama fisioterapi?",
      a: "Kami menggunakan peralatan berstandar medis terakreditasi seperti Neuromuskular Tapping (NMT), Infra Red (IR) Lamp, Ultrasound (US), TENS (stimulasi listrik saraf), serta alat Traksi Lumbal / Cervical untuk traksi tulang.",
    },
    {
      q: "Berapa lama durasi per sesi fisioterapi?",
      a: "Satu sesi fisioterapi berkisar antara 45 hingga 60 menit, mencakup asesmen fungsi gerak awal, terapi manual / stimulasi alat, serta latihan mandiri terarah.",
    },
    {
      q: "Apakah saya perlu membawa rujukan dokter?",
      a: "Tidak wajib. Fisioterapis kami akan melakukan asesmen gerak & fungsi fisik lengkap pada pertemuan pertama untuk mendiagnosa keluhan Anda dan merancang rencana terapi yang aman bagi kondisi Anda.",
    },
  ] : [
    {
      q: "Is the Physical Therapy service at Lotus private?",
      a: "Yes. Every physical therapy session is completely private (one patient per session) in a dedicated therapy room. You will receive undivided attention and 1-on-1 guidance from our therapist without interruption.",
    },
    {
      q: "What equipment modalities are used during physical therapy?",
      a: "We use accredited medical standard equipment such as Neuromuscular Tapping (NMT), Infra Red (IR) Lamp, Ultrasound (US), TENS (electrical nerve stimulation), and Lumbar/Cervical Traction for spinal traction.",
    },
    {
      q: "How long is each physical therapy session?",
      a: "One physical therapy session ranges from 45 to 60 minutes, which includes an initial movement & function assessment, manual therapy / device stimulation, and guided home exercises.",
    },
    {
      q: "Do I need to bring a doctor's referral?",
      a: "Not mandatory. Our physical therapist will conduct a complete movement & physical function assessment on the first visit to diagnose your complaint and design a safe therapy plan for your condition.",
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
                <span className="tag-pill bg-sage/30 text-forest font-bold text-xs uppercase tracking-wider mb-4 inline-block border border-sage/20">
                  {t("fisioterapiPage.eyebrow")}
                </span>
                <h1 className="font-display font-black text-espresso text-5xl lg:text-7.5xl leading-[1.05] tracking-tight">
                  {language === "id" ? "Fisioterapi" : "Physical Therapy"}<br />
                  <span className="text-forest">{language === "id" ? "Pulih Secara Nyaman." : "Recover Comfortably."}</span>
                </h1>
              </div>
              <p className="font-sans text-espresso/70 text-lg leading-relaxed max-w-lg">
                {language === "id" 
                  ? "Fisioterapi merupakan tindakan medis penting untuk memelihara, memulihkan, dan memaksimalkan fungsi fisik tubuh pada seluruh rentang usia. Pulih kembali secara percaya diri di ruang terapi privat kami."
                  : "Physiotherapy is an essential medical procedure to maintain, restore, and maximize the body's physical function across all age groups. Recover confidently in our private therapy rooms."}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={`https://wa.me/6287700303645?text=${encodeURIComponent(t("fisioterapiPage.whatsAppPrompt"))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-dark font-bold text-sm px-8 py-4 shadow-warm group gap-2"
                >
                  {t("fisioterapiPage.cta")}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={`https://wa.me/6287700303645?text=${encodeURIComponent(language === "id" ? "Halo Lotus, mau konsultasi masalah fisioterapi" : "Hello Lotus, I'd like to consult on physical therapy issues")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-outline font-bold text-sm px-8 py-4"
                >
                  {language === "id" ? "Konsultasi Medis" : "Medical Consultation"}
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
              <div className="absolute top-10 left-10 w-4/5 h-4/5 bg-sage-soft rounded-[3rem] -rotate-3" />
              <div className="absolute top-0 right-4 w-[65%] aspect-[3/4] rounded-3xl overflow-hidden shadow-warm-lg img-zoom z-10">
                <Image
                  src="/images/lotus_treatment_physio_adult_ball_exercise_wide.jpg"
                  alt="Sesi Fisioterapi di Lotus Semarang"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={85}
                />
              </div>
              <div className="absolute bottom-4 left-4 w-[45%] aspect-square rounded-3xl overflow-hidden shadow-warm-xl border-4 border-white img-zoom z-20">
                <Image
                  src="/images/lotus_treatment_physio_kinesio_tape_knee.jpg"
                  alt="Detail Kinesio Taping Fisioterapi"
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
      <Marquee bg="forest" textClass="text-cream" speed="slow" />

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
                src="/images/team-lotus-2.jpg"
                alt="Tim Terapis Fisioterapi Lotus Semarang"
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
                {language === "id" ? "Teknologi Modalitas" : "Modality Technology"}
              </span>
              <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight tracking-tight">
                {language === "id" ? "Pilihan Modalitas Alat Fisioterapi Kami" : "Our Physical Therapy Device Modality Options"}
              </h2>
              <p className="font-sans text-espresso/60 leading-relaxed">
                {language === "id"
                  ? "Fisioterapis kami mengombinasikan manipulasi gerak manual dengan penerapan teknologi alat fisioterapi modern untuk merangsang proses perbaikan jaringan sel saraf dan otot dengan cepat."
                  : "Our physical therapists combine manual movement manipulation with modern physical therapy device technology to stimulate fast repair of nerve cells and muscle tissue."}
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-2">
                {tools.map((tool, idx) => (
                  <motion.div
                    key={tool}
                    className="flex items-center gap-3 bg-sand-soft/50 p-4 rounded-2xl shadow-warm border border-espresso/5 hover:border-sage transition-all"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                  >
                    <span className="text-forest text-base font-bold">✦</span>
                    <span className="font-sans text-xs font-bold text-espresso/80 leading-snug">{tool}</span>
                  </motion.div>
                ))}
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
              {language === "id" ? "Kondisi Fisik Yang Kami Tangani" : "Physical Conditions We Treat"}
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
                      sizes="20vw"
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
              {language === "id" ? "Prosedur Tindakan" : "Treatment Procedure"}
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight">
              {language === "id" ? "Bagaimana Sesi Terapi Anda Berlangsung?" : "How Does Your Therapy Session Go?"}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                img: "/images/lotus_treatment_physio_adult_ball_exercise_wide.jpg",
                alt: "Asesmen Awal Fisioterapi",
                step: language === "id" ? "01. Asesmen Fisik Awal" : "01. Initial Physical Assessment",
                desc: language === "id"
                  ? "Pemeriksaan detail rentang gerak (Range of Motion), uji kekuatan otot, pemeriksaan postur tulang belakang, serta analisis respon refleks saraf Anda."
                  : "Detailed range of motion test, muscle strength assessment, spine posture check, and analysis of your nerve reflex responses."
              },
              {
                img: "/images/lotus_treatment_physio_knee_mobilization_closeup.webp",
                alt: "Terapi Manual Mobilisasi Sendi",
                step: language === "id" ? "02. Terapi Manual & Alat" : "02. Manual & Device Therapy",
                desc: language === "id"
                  ? "Kombinasi terapi pijat manipulasi (manual mobilization) untuk mengendurkan sendi kaku dipadu dengan stimulasi alat medis pereda nyeri otot."
                  : "Combination of massage manipulation therapy (manual mobilization) to loosen stiff joints paired with medical device muscle pain relief stimulation."
              },
              {
                img: "/images/lotus_treatment_physio_child_exercise_ball.jpg",
                alt: "Latihan Pemulihan & Edukasi Mandiri",
                step: language === "id" ? "03. Edukasi Latihan Mandiri" : "03. Home Exercise Education",
                desc: language === "id"
                  ? "Terapis melatih gerakan rehabilitasi bertahap untuk dipraktikkan secara aman di rumah demi mempercepat dan mempertahankan pemulihan fisik Anda."
                  : "The therapist trains gradual rehabilitation movements to practice safely at home to accelerate and sustain your physical recovery."
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
                    sizes="30vw"
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
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-display font-bold text-espresso hover:text-forest text-base md:text-lg transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-forest flex-shrink-0" />
                    {faq.q}
                  </span>
                  {openFaq === index ? <ChevronUp size={18} className="flex-shrink-0 text-forest" /> : <ChevronDown size={18} className="flex-shrink-0 text-espresso/40" />}
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
