"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Heart } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import { trackReelView } from "@/lib/analytics";

interface ReelItem {
  id: string;
  title: string;
  category: string;
  likes: string;
  thumbnail: string;
}

export function ReelsShowcase() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const { t } = useLanguage();

  const reelsList = t("reels.list") || [];
  const videoIds = ["azv-Y1Or_Ps", "DqXYDhLji4Y", "VtuUAN56IfI"];
  const likesList = ["1.2k", "945", "1.5k"];

  const reels: ReelItem[] = videoIds.map((id, index) => ({
    id,
    title: reelsList[index]?.title || "",
    category: reelsList[index]?.category || "",
    likes: likesList[index] || "0",
    thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
  }));

  return (
    <section className="bg-white border-b section-pad border-espresso/5">
      <div className="container-wellness">
        
        {/* Header */}
        <motion.div
          className="mx-auto mb-12 max-w-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-4 text-xs font-bold tracking-wider uppercase border tag-pill bg-blush/20 text-blush-deep border-blush/20">
            {t("reels.eyebrow")}
          </span>
          <h2 className="text-3xl font-black leading-tight font-display text-espresso md:text-5xl">
            {t("reels.title")}
          </h2>
          <p className="mt-3 font-sans text-sm leading-relaxed text-espresso/65">
            {t("reels.desc")}
          </p>
        </motion.div>

        {/* Reels Horizontal Scroll / Responsive Centered Grid */}
        <div className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide snap-x snap-mandatory md:grid md:grid-cols-2 md:pb-0 lg:grid-cols-3 md:gap-6 lg:gap-8 max-w-5xl mx-auto justify-center md:overflow-visible">
          {reels.map((reel, idx) => (
            <motion.div
              key={reel.id}
              onClick={() => {
                setActiveVideoId(reel.id);
                trackReelView(reel.id, reel.title);
              }}
              className={`flex-shrink-0 w-[260px] md:w-full snap-start group relative aspect-[9/16] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-espresso/5 shadow-warm border border-espresso/5 cursor-pointer hover:shadow-warm-lg transition-all duration-300 ${
                idx === 2 ? "md:col-span-2 md:max-w-[340px] md:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0" : ""
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Cover Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={reel.thumbnail}
                  alt={reel.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 260px, (max-width: 1024px) 45vw, 320px"
                  quality={80}
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-t to-transparent from-espresso/90 via-espresso/30" />
              </div>

              {/* Heart Badge */}
              <div className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1.5 text-white font-sans text-xs border border-white/20 shadow-sm">
                <Heart size={12} className="fill-white" />
                <span>{reel.likes}</span>
              </div>

              {/* Play Button Overlay */}
              <div className="flex absolute inset-0 z-20 justify-center items-center">
                <div className="flex justify-center items-center w-14 h-14 rounded-full transition-all duration-300 bg-cream text-espresso shadow-warm-xl group-hover:scale-110 group-hover:bg-blush group-hover:text-white">
                  <Play size={20} className="fill-current ml-0.5" />
                </div>
              </div>

              {/* Text details */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col gap-1.5 text-white">
                <span className="font-sans font-bold text-[0.65rem] tracking-wider uppercase text-blush-light">
                  {reel.category}
                </span>
                <h3 className="text-sm md:text-base font-bold leading-snug font-display line-clamp-2">
                  {reel.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Video Player overlay */}
      <AnimatePresence>
        {activeVideoId && (
          <motion.div
            className="flex fixed inset-0 z-50 justify-center items-center p-3 sm:p-6 backdrop-blur-md bg-espresso/80 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideoId(null)}
          >
            {/* Modal Container */}
            <div className="relative flex flex-col items-center justify-center max-h-full">
              {/* Close Button above/top right */}
              <button
                onClick={() => setActiveVideoId(null)}
                className="absolute -top-12 right-0 sm:-top-12 sm:right-0 z-50 flex justify-center items-center w-10 h-10 text-white rounded-full backdrop-blur-md transition-transform duration-200 bg-white/20 hover:bg-white/30 hover:scale-105 active:scale-95 border border-white/20 shadow-lg"
                aria-label="Tutup video"
              >
                <X size={20} />
              </button>

              <motion.div
                className="relative w-[85vw] max-w-[380px] h-[78vh] max-h-[680px] aspect-[9/16] bg-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* YouTube Shorts Embed with clean viewport */}
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?autoplay=1&rel=0&playsinline=1&modestbranding=1`}
                  className="w-full h-full border-0 block"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
