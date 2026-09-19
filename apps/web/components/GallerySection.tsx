"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Images, ChevronRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

interface GalleryPhoto {
  src: string;
  alt: string;
  category: "fasilitas" | "akupunktur" | "hidroterapi" | "fisioterapi" | "swim";
  title: string;
}

const allPhotos: GalleryPhoto[] = [
  // Fasilitas
  {
    src: "/images/lotus_interior_reception_greeting_staff.jpg",
    alt: "Lobi & Resepsionis Ramah Lotus Semarang",
    category: "fasilitas",
    title: "Lobi & Resepsionis",
  },
  {
    src: "/images/lotus_hydrotherapy_pool_male_floating_device.jpg",
    alt: "Kolam Hidroterapi Semi-Outdoor Teduh & Privat",
    category: "fasilitas",
    title: "Kolam Hidroterapi Semi-Outdoor",
  },
  {
    src: "/images/memoria.jpg",
    alt: "Sudut Fasilitas & Ruang Tunggu Nyaman",
    category: "fasilitas",
    title: "Fasilitas & Area Tunggu",
  },

  // Akupunktur
  {
    src: "/images/lotus_tools_acupuncture_needles_steel_jar.jpg",
    alt: "Peralatan Jarum Akupunktur Steril Sekali Pakai",
    category: "akupunktur",
    title: "Jarum Akupunktur Steril Sekali Pakai",
  },
  {
    src: "/images/lotus_treatment_body_back_acupuncture_female.jpg",
    alt: "Sesi Akupunktur Punggung & Relaksasi Saraf",
    category: "akupunktur",
    title: "Sesi Akupunktur Tubuh",
  },
  {
    src: "/images/lotus_equipment_kwd808_electro_acupuncture.jpg",
    alt: "Alat Elektroakupunktur Modern",
    category: "akupunktur",
    title: "Elektroakupunktur Modern",
  },
  {
    src: "/images/lotus_treatment_body_acupuncture_macro_needle.jpg",
    alt: "Detail Penjaruman Akupunktur Presisi",
    category: "akupunktur",
    title: "Stimulasi Titik Akupunktur",
  },

  // Hidroterapi
  {
    src: "/images/lotus_treatment_hydro_female_hijab_float_front.jpg",
    alt: "Terapi Air Privat Didampingi Fisioterapis",
    category: "hidroterapi",
    title: "Terapi Air Privat 1:1",
  },
  {
    src: "/images/lotus_treatment_hydro_adult_float_therapy_therapist.jpg",
    alt: "Pendampingan Latihan Gerak di Kolam",
    category: "hidroterapi",
    title: "Pendampingan Gerak Air",
  },
  {
    src: "/images/lotus_treatment_hydro_patient_floating_alone.jpg",
    alt: "Relaksasi Daya Apung Air Hidroterapi",
    category: "hidroterapi",
    title: "Relaksasi Daya Apung Air",
  },
  {
    src: "/images/lotus_treatment_hydro_adult_dumbbell_therapy.jpg",
    alt: "Latihan Beban Ringan Air Kolam Terapi",
    category: "hidroterapi",
    title: "Latihan Penguatan di Air",
  },

  // Fisioterapi
  {
    src: "/images/lotus_treatment_physio_child_exercise_ball.jpg",
    alt: "Fisioterapi Anak & Stimulasi Tumbuh Kembang",
    category: "fisioterapi",
    title: "Fisioterapi Tumbuh Kembang Anak",
  },
  {
    src: "/images/lotus_treatment_physio_adult_ball_exercise_close.jpg",
    alt: "Latihan Penguatan Otot & Keseimbangan",
    category: "fisioterapi",
    title: "Latihan Mobilitas & Keseimbangan",
  },
  {
    src: "/images/lotus_treatment_physio_kinesio_tape_knee.jpg",
    alt: "Pemasangan Taping Medis untuk Perlindungan Sendi",
    category: "fisioterapi",
    title: "Taping Medis & Perlindungan Sendi",
  },

  // Swim Course
  {
    src: "/images/swimming-course-lansia.jpg",
    alt: "Kelas Renang Privat Anak, Dewasa, hingga Lansia",
    category: "swim",
    title: "Renang Privat Lansia & Dewasa",
  },
  {
    src: "/images/swimming-course-lansia-2.jpg",
    alt: "Suasana Hangat & Terbimbing di Kolam Renang",
    category: "swim",
    title: "Bimbingan Instruktur Berpengalaman",
  },
  {
    src: "/images/lotus_treatment_hydro_elderly_hijab_smile_edge.jpg",
    alt: "Aktivitas Air Menyenangkan & Bebas Khawatir",
    category: "swim",
    title: "Aktivitas Air Nyaman & Privat",
  },
];

export function GallerySection() {
  const { t, language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("semua");
  const [lightboxImg, setLightboxImg] = useState<GalleryPhoto | null>(null);

  const previewPhotos = allPhotos.slice(0, 4);

  const categories = [
    { id: "semua", label: language === "en" ? "All Photos" : "Semua" },
    { id: "fasilitas", label: language === "en" ? "Facilities" : "Fasilitas" },
    { id: "akupunktur", label: language === "en" ? "Acupuncture" : "Akupunktur" },
    { id: "hidroterapi", label: language === "en" ? "Hydrotherapy" : "Hidroterapi" },
    { id: "fisioterapi", label: language === "en" ? "Physiotherapy" : "Fisioterapi" },
    { id: "swim", label: language === "en" ? "Swim Course" : "Swim Course" },
  ];

  const filteredPhotos =
    selectedCategory === "semua"
      ? allPhotos
      : allPhotos.filter((p) => p.category === selectedCategory);

  return (
    <section className="section-pad bg-cream-warm/40 border-y border-espresso/5">
      <div className="container-wellness">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <motion.span
            className="inline-block mb-4 text-xs font-bold tracking-wider uppercase border tag-pill bg-blush/20 text-blush-deep border-blush/20"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t("gallery.tagline")}
          </motion.span>
          <motion.h2
            className="font-display font-black text-espresso text-3xl md:text-5xl leading-tight tracking-tight"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t("gallery.title")}
          </motion.h2>
        </div>

        {/* Initial Preview Grid (4 Curated Photos) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          {previewPhotos.map((img, idx) => (
            <motion.div
              key={idx}
              onClick={() => setLightboxImg(img)}
              className="relative rounded-3xl overflow-hidden aspect-square img-zoom shadow-warm cursor-pointer group border border-espresso/5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={80}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-xs font-semibold">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* [Lihat Foto Lainnya] CTA Button */}
        <div className="text-center pt-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-pill-dark inline-flex items-center gap-2.5 px-8 py-3.5 text-sm font-bold shadow-warm hover:scale-105 transition-all"
          >
            <Images size={16} />
            <span>{language === "en" ? "View More Photos" : "Lihat Foto Lainnya"}</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* ── Expandable Modal Gallery ── */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-espresso/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white w-full max-w-5xl max-h-[90vh] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border border-espresso/10"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Modal Top Header */}
              <div className="p-6 md:p-8 border-b border-espresso/10 flex items-center justify-between bg-cream">
                <div>
                  <h3 className="font-display font-black text-espresso text-2xl md:text-3xl">
                    {language === "en" ? "Lotus Photo Gallery" : "Galeri Foto Lotus"}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-espresso/60 mt-1">
                    {language === "en"
                      ? "Explore our clean clinical facilities, acupuncture, hydrotherapy, physiotherapy, and swimming courses."
                      : "Eksplorasi fasilitas klinis, akupunktur, hidroterapi, fisioterapi, dan swim course kami."}
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-10 h-10 rounded-full bg-espresso/5 hover:bg-espresso/10 flex items-center justify-center text-espresso transition-colors"
                  aria-label="Tutup Galeri"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Category Filter Tabs */}
              <div className="px-6 md:px-8 py-4 border-b border-espresso/5 bg-white overflow-x-auto scrollbar-hide flex gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                      selectedCategory === cat.id
                        ? "bg-espresso text-white shadow-sm"
                        : "bg-espresso/5 text-espresso/70 hover:bg-espresso/10 hover:text-espresso"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Photos Grid Scrollable Area */}
              <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-180px)]">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {filteredPhotos.map((photo, i) => (
                    <motion.div
                      key={i}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setLightboxImg(photo)}
                      className="relative rounded-2xl overflow-hidden aspect-square group cursor-pointer shadow-sm hover:shadow-md bg-espresso/5 border border-espresso/5"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-espresso/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3 text-white">
                        <ZoomIn size={16} className="self-end" />
                        <p className="text-xs font-semibold leading-tight line-clamp-2">
                          {photo.title}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Lightbox Zoom Modal ── */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-espresso/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
          >
            <div className="relative max-w-4xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center">
              <button
                onClick={() => setLightboxImg(null)}
                className="absolute top-2 right-2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-sm"
              >
                <X size={20} />
              </button>
              <div className="relative w-full h-full max-h-[80vh] rounded-2xl overflow-hidden">
                <Image
                  src={lightboxImg.src}
                  alt={lightboxImg.alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  quality={90}
                />
              </div>
              <p className="text-white text-sm font-semibold mt-3 text-center">
                {lightboxImg.title}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
