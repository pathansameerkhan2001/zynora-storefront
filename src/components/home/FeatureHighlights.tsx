import { Leaf, ShieldCheck, Sparkles, Droplet } from "lucide-react";

const features = [
  { name: "100% Natural", icon: Leaf },
  { name: "Lab Tested", icon: ShieldCheck },
  { name: "Clean & Safe", icon: Droplet },
  { name: "No Preservatives", icon: Sparkles },
];

export default function FeatureHighlights() {
  return (
    <div className="bg-zynora-beige/30 py-8 border-y border-zynora-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-between">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300 border border-zynora-gold/20 text-zynora-gold">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium tracking-wide text-zynora-emerald/80 uppercase">
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
