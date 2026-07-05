"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X, Heart } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

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
  const videoIds = ["azv-Y1Or_Ps", "DqXYDhLji4Y", "J_L5eCHy-Fk", "VtuUAN56IfI", "fhbQ6rYgPB4"];
  const likesList = ["1.2k", "945", "1.5k", "876", "1.1k"];

  const reels: ReelItem[] = videoIds.map((id, index) => ({
    id,
    title: reelsList[index]?.title || "",
    category: reelsList[index]?.category || "",
    likes: likesList[index] || "0",
    thumbnail: `https://img.youtube.com/vi/${id}/sddefault.jpg`,
  }));

  return (
    <section className="section-pad bg-white border-b border-espresso/5">
      <div className="container-wellness">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="tag-pill bg-peach/40 text-terra font-bold text-xs uppercase tracking-wider mb-4 inline-block">
            {t("reels.eyebrow")}
          </span>
          <h2 className="font-display font-black text-espresso text-3xl md:text-5xl leading-tight">
            {t("reels.title")}
          </h2>
          <p className="font-sans text-espresso/60 text-sm mt-3 leading-relaxed">
            {t("reels.desc")}
          </p>
        </div>

        {/* Reels Horizontal Scroll / Responsive Grid */}
        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
          {reels.map((reel) => (
            <div
              key={reel.id}
              onClick={() => setActiveVideoId(reel.id)}
              className="flex-shrink-0 w-[260px] lg:w-full snap-start group relative aspect-[9/16] rounded-[2.5rem] overflow-hidden bg-espresso/5 shadow-warm border border-espresso/5 cursor-pointer hover:scale-[1.02] hover:shadow-warm-lg transition-all duration-300"
            >
              {/* Cover Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={reel.thumbnail}
                  alt={reel.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 20vw"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/30 to-transparent z-10" />
              </div>

              {/* Heart Badge */}
              <div className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1.5 text-white font-sans text-xs">
                <Heart size={12} className="fill-white" />
                <span>{reel.likes}</span>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-14 h-14 rounded-full bg-cream text-espresso flex items-center justify-center shadow-warm-xl group-hover:scale-110 group-hover:bg-terra group-hover:text-cream transition-all duration-300">
                  <Play size={20} className="fill-current ml-0.5" />
                </div>
              </div>

              {/* Text details */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col gap-1.5 text-white">
                <span className="font-sans font-bold text-[0.65rem] tracking-wider uppercase text-peach/90">
                  {reel.category}
                </span>
                <h3 className="font-display font-bold text-sm leading-snug line-clamp-2">
                  {reel.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Video Player overlay */}
      {activeVideoId && (
        <div className="fixed inset-0 bg-espresso/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-[400px] aspect-[9/16] bg-black rounded-[3rem] overflow-hidden shadow-warm-xl border-4 border-white/10">
            {/* Close Button */}
            <button
              onClick={() => setActiveVideoId(null)}
              className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-colors"
            >
              <X size={20} />
            </button>

            {/* YouTube embed */}
            <iframe
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0&modestbranding=1`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
