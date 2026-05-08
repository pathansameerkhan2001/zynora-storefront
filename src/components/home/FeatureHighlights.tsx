"use client";

import { Leaf, ShieldCheck, Sparkles, Droplet } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FeatureHighlights() {
  const { t } = useLanguage();

  const features = [
    { name: t.common.natural, icon: Leaf },
    { name: t.common.labTested, icon: ShieldCheck },
    { name: t.common.cleanSafe, icon: Droplet },
    { name: t.common.noPreservatives, icon: Sparkles },
  ];

  return (
    <div className="bg-[#F7F1E7] py-12 border-y border-[#D4B06A]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-between">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-500 border border-[#D4B06A]/20 text-[#D4B06A]">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#0B2E26]/60 uppercase">
                  {feature.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
