"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { useLanguage } from "@/components/LanguageContext";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

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
      bg: "bg-sage-soft",
    },
    {
      title: "Rehabilitasi Motorik & Stroke",
      desc: "Lingkungan air hangat mempermudah latihan gerak, melatih koordinasi motorik, serta melatih keseimbangan tubuh dengan risiko cedera jatuh nol.",
      img: "/images/lotus_treatment_hydro_adult_dumbbell_therapy.jpg",
      bg: "bg-peach-soft",
    },
    {
      title: "Relaksasi Saraf & Otot",
      desc: "Jet aliran air hangat bertekanan melakukan pemijatan mikro pada otot-otot tegang, melancarkan aliran darah, serta menenangkan pikiran.",
      img: "/images/lotus_treatment_hydro_equipment_noodle_front.jpg",
      bg: "bg-blush-soft",
    },
    {
      title: "Tumbuh Kembang & Bumil",
      desc: "Menghadirkan sarana aman untuk stimulasi gerak motorik anak-anak dan olahraga kardio kehamilan yang aman bebas cemas benturan.",
      img: "/images/lotus_treatment_baby_group_foot_hijab.webp",
      bg: "bg-sand-soft",
    },
  ] : [
    {
      title: "Reduce Joint Load",
      desc: "The physical principles of water buoyancy reduce body weight by up to 90%, greatly relieving pressure on your knee joints, waist, and spine.",
      img: "/images/lotus_hydrotherapy_pool_male_floating_device.jpg",
      bg: "bg-sage-soft",
    },
    {
      title: "Motor & Stroke Rehab",
      desc: "The warm water environment eases movement exercises, trains motor coordination, and improves balance with zero fall injury risk.",
      img: "/images/lotus_treatment_hydro_adult_dumbbell_therapy.jpg",
      bg: "bg-peach-soft",
    },
    {
      title: "Nerve & Muscle Relaxation",
      desc: "Pressurized warm water jets provide micro-massage on tense muscles, improve blood circulation, and calm the mind.",
      img: "/images/lotus_treatment_hydro_equipment_noodle_front.jpg",
      bg: "bg-blush-soft",
    },
    {
      title: "Child Development & Pregnancy",
      desc: "Provides a safe environment to stimulate kids' motor skills and safe cardio exercise for pregnant mothers without worrying about impact.",
      img: "/images/lotus_treatment_baby_group_foot_hijab.webp",
      bg: "bg-sand-soft",
    },
  ];

  const faqs = language === "id" ? [
    {
      q: "Apakah kolam hidroterapi di Lotus Semarang bersifat privat?",
      a: "Ya, 100% privat. Setiap sesi disewakan secara eksklusif per pasien/keluarga. Tidak ada tamu lain yang masuk ke area kolam selama sesi Anda berlangsung, sangat nyaman untuk ibu berhijab (Niqabi) dan pasien yang butuh ketenangan penuh.",
    },
    {
      q: "Berapa suhu air kolam hidroterapi?",
      a: "Suhu air kolam kami diatur konstan berkisar antara 32°C hingga 34°C. Suhu hangat terapeutik ini sangat ideal untuk meredakan ketegangan otot dan melebarkan pembuluh darah untuk sirkulasi darah yang lebih baik.",
    },
    {
      q: "Apa yang harus saya bawa saat sesi hidroterapi?",
      a: "Cukup bawa pakaian renang yang nyaman. Bagi wanita berhijab, disarankan membawa baju renang muslimah/burkini yang bersih. Kami menyediakan fasilitas shower steril, handuk bersih, dan sabun pasca sesi.",
    },
    {
      q: "Apakah hidroterapi aman bagi penderita stroke dan lansia?",
      a: "Sangat aman dan sangat direkomendasikan. Latihan di dalam air hangat jauh lebih ringan dilakukan bagi penderita stroke atau lansia yang memiliki keterbatasan kekuatan otot di darat.",
    },
  ] : [
    {
      q: "Is the hydrotherapy pool at Lotus Semarang private?",
      a: "Yes, 100% private. Each session is leased exclusively per patient/family. No other guests will enter the pool area during your session, making it highly comfortable for hijabi mothers (Niqabi) and patients requiring complete quietness.",
    },
    {
      q: "What is the water temperature of the hydrotherapy pool?",
      a: "Our pool water temperature is kept constant at 32°C to 34°C. This therapeutic warm temperature is ideal for relieving muscle tension and dilating blood vessels for better circulation.",
    },
    {
      q: "What should I bring to the hydrotherapy session?",
      a: "Just bring comfortable swimwear. For hijabi women, it is recommended to bring clean Muslimah swimwear/burkini. We provide sterile shower facilities, clean towels, and body soap post-session.",
    },
    {
      q: "Is hydrotherapy safe for stroke patients and seniors?",
      a: "Extremely safe and highly recommended. Exercises in warm water are much lighter to perform for stroke survivors or seniors who have limited muscle strength on land.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div>
                <span className="tag-pill bg-sage/40 text-forest font-bold text-xs uppercase tracking-wider mb-4 inline-block">
                  {t("hidroterapiPage.eyebrow")}
                </span>
                <h1 className="font-display font-black text-espresso text-5xl lg:text-7.5xl leading-[1.05] tracking-tight">
                  {language === "id" ? "Hidroterapi" : "Hydrotherapy"}<br />
                  <span className="text-forest">{language === "id" ? "Suaka Air Privat." : "Private Water Sanctuary."}</span>
                </h1>
              </div>
              <p className="font-sans text-espresso/70 text-lg leading-relaxed max-w-lg">
                {language === "id" 
                  ? "Temukan pemulihan fisik yang menenangkan. Kolam air hangat privat kami memanfaatkan hukum fisika air untuk meringankan beban sendi, mempercepat pemulihan motorik, dan merelaksasi otot Anda."
                  : "Discover a soothing physical recovery. Our private warm water pool utilizes the physics laws of water to reduce joint load, accelerate motor recovery, and relax your muscles."}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={`https://wa.me/6287700303645?text=${encodeURIComponent(t("hidroterapiPage.whatsAppPrompt"))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-dark font-bold text-sm px-8 py-4"
                >
                  {t("hidroterapiPage.cta")}
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
            </div>

            {/* Right: Overlapping Editorial Images */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] lg:min-h-[500px]">
              <div className="absolute top-10 left-10 w-4/5 h-4/5 bg-sage-soft rounded-[3rem] -rotate-3" />
              <div className="absolute top-0 right-4 w-[65%] aspect-[3/4] rounded-3xl overflow-hidden shadow-warm-lg img-zoom z-10">
                <Image
                  src="/images/lotus_treatment_hydro_female_hijab_supine_wide.jpg"
                  alt="Latihan Terapi Air Hidroterapi"
                  fill
                  className="object-cover"
                  priority
                  sizes="40vw"
                  quality={85}
                />
              </div>
              <div className="absolute bottom-4 left-4 w-[45%] aspect-square rounded-3xl overflow-hidden shadow-warm-xl border-4 border-white img-zoom z-20">
                <Image
                  src="/images/lotus_treatment_hydro_female_hijab_float_front.jpg"
                  alt="Detail Sesi Floating Hidroterapi"
                  fill
                  className="object-cover"
                  sizes="25vw"
                  quality={80}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Marquee Accent */}
      <Marquee bg="sage" textClass="text-forest" speed="slow" />

      {/* Science Section */}
      <section className="section-pad bg-white">
        <div className="container-wellness">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-[3.5rem] overflow-hidden shadow-warm-lg img-zoom">
              <Image
                src="/images/lotus_treatment_hydro_patient_floating_alone.jpg"
                alt="Manfaat Daya Apung Air Fisika"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
            </div>
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="tag-pill bg-espresso/5 text-espresso/80 font-bold text-xs uppercase tracking-wider self-start">
                {language === "id" ? "Fisika Air & Pemulihan" : "Water Physics & Recovery"}
              </span>
              <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight tracking-tight">
                {language === "id" ? "Mengapa Tubuh Anda Lebih Mudah Pulih di Dalam Air?" : "Why Does Your Body Recover Easier in Water?"}
              </h2>
              <div className="flex flex-col gap-6 mt-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sage-soft text-forest flex items-center justify-center font-display font-black text-lg flex-shrink-0">
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
                  <div className="w-12 h-12 rounded-2xl bg-peach-soft text-terra flex items-center justify-center font-display font-black text-lg flex-shrink-0">
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
                  <div className="w-12 h-12 rounded-2xl bg-blush-soft text-espresso-600 flex items-center justify-center font-display font-black text-lg flex-shrink-0">
                    03
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-espresso text-lg mb-1">
                      {language === "id" ? "Termoregulasi Relaksasi" : "Relaxation Thermoregulation"}
                    </h3>
                    <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                      {language === "id"
                        ? "Suhu kolam air hangat yang stabil memberikan stimulasi nyaman pada ujung saraf kulit, mematikan sinyal rasa nyeri, serta melemaskan kekakuan otot."
                        : "Stable warm pool temperature provides comfortable stimulation on skin nerve endings, shutting down pain signals, and relaxing muscle stiffness."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="section-pad bg-sage-soft/10 border-y border-espresso/5">
        <div className="container-wellness">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="tag-pill bg-espresso/5 text-espresso/70 font-bold text-xs uppercase tracking-wider mb-4 inline-block">
              {language === "id" ? "Manfaat Utama" : "Key Benefits"}
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight">
              {language === "id" ? "Aplikasi Hidroterapi yang Kami Sediakan" : "Hydrotherapy Applications We Provide"}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {applications.map((app, i) => (
              <div
                key={i}
                className={`${app.bg} rounded-[2.5rem] p-8 lg:p-10 flex flex-col gap-6 shadow-warm hover:-translate-y-1 transition-all duration-300`}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section-pad bg-white">
        <div className="container-wellness">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="tag-pill bg-sage/45 text-forest font-bold text-xs uppercase tracking-wider mb-4 inline-block">
              {language === "id" ? "Alur Terapi Kolam" : "Pool Therapy Flow"}
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5.5xl leading-tight">
              {language === "id" ? "Bagaimana Sesi Hidroterapi Anda Berlangsung?" : "How Does Your Hydrotherapy Session Go?"}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-warm img-zoom mb-2">
                <Image
                  src="/images/lotus_treatment_hydro_equipment_noodle_angle.jpg"
                  alt="Persiapan Alat Bantu Apung"
                  fill
                  className="object-cover"
                  sizes="30vw"
                  quality={80}
                />
              </div>
              <span className="font-display font-black text-forest text-lg">
                {language === "id" ? "01. Persiapan & Bilas Steril" : "01. Preparation & Sterile Rinse"}
              </span>
              <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                {language === "id"
                  ? "Pasien diwajibkan bilas mandi steril terlebih dahulu. Instruktur menyiapkan alat bantu apung (noodles, belt, dumbbell air) sesuai dengan rencana latihan motorik pasien."
                  : "Patients are required to rinse in a sterile shower first. The instructor prepares float aids (noodles, belt, water dumbbells) according to the patient's motor exercise plan."}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-warm img-zoom mb-2">
                <Image
                  src="/images/lotus_treatment_hydro_adult_float_therapy_therapist.jpg"
                  alt="Latihan Terapi Bersama Instruktur"
                  fill
                  className="object-cover"
                  sizes="30vw"
                  quality={80}
                />
              </div>
              <span className="font-display font-black text-forest text-lg">
                {language === "id" ? "02. Latihan Terapeutik Air" : "02. Water Therapeutic Exercise"}
              </span>
              <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                {language === "id"
                  ? "Di bawah bimbingan instruktur profesional, Anda melakukan latihan gerak sendi, penguatan otot, atau relaksasi apung dengan jet air hangat bertekanan di area kolam privat."
                  : "Under the guidance of a professional instructor, you perform joint movement exercises, muscle strengthening, or floating relaxation with pressurized warm water jets in the private pool area."}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-warm img-zoom mb-2">
                <Image
                  src="/images/lotus_treatment_hydro_elderly_hijab_smile_edge.jpg"
                  alt="Selesai Sesi Relaksasi"
                  fill
                  className="object-cover"
                  sizes="30vw"
                  quality={80}
                />
              </div>
              <span className="font-display font-black text-forest text-lg">
                {language === "id" ? "03. Bilas & Evaluasi" : "03. Rinse & Evaluation"}
              </span>
              <p className="font-sans text-espresso/65 text-sm leading-relaxed">
                {language === "id"
                  ? "Setelah 30-45 menit latihan, Anda membilas diri di kamar mandi steril privat yang hangat. Instruktur mencatat perkembangan gerak sendi Anda untuk sesi berikutnya."
                  : "After 30-45 minutes of training, you rinse off in the warm private sterile shower. The instructor records your joint movement progress for the next session."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-pad bg-sage-soft/20 border-t border-espresso/5">
        <div className="container-wellness max-w-4xl">
          <div className="text-center mb-12">
            <span className="tag-pill bg-espresso/5 text-espresso/70 font-bold text-xs uppercase tracking-wider mb-4 inline-block">
              {language === "id" ? "Pertanyaan Umum" : "Frequently Asked Questions"}
            </span>
            <h2 className="font-display font-black text-espresso text-3xl md:text-5xl leading-tight">
              {language === "id" ? "Hal-Hal yang Sering Ditanyakan" : "Common Questions Asked"}
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-espresso/5 shadow-warm overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-display font-bold text-espresso hover:text-forest text-base md:text-lg"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-forest" />
                    {faq.q}
                  </span>
                  {openFaq === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-1 font-sans text-espresso/65 text-sm leading-relaxed border-t border-espresso/5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
