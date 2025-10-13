import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

interface TarotCardProps {
  name: string;
  image: string;
  isRevealed: boolean;
  onReveal?: () => void;
}

export function TarotCard({ name, image, isRevealed, onReveal }: TarotCardProps) {
  return (
    <div className="relative" style={{ perspective: "1000px" }}>
      <motion.div
        className="relative w-full h-full cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isRevealed ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        onClick={onReveal}
      >
        {/* Back of card */}
        <motion.div
          className="absolute inset-0 w-full h-full rounded-xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-full h-full bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 rounded-xl border-4 border-yellow-500 shadow-2xl p-4 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
            <div className="relative z-10 flex flex-col items-center gap-4">
              <Sparkles className="w-16 h-16 text-yellow-400 animate-pulse" />
              <div className="w-24 h-24 rounded-full border-4 border-yellow-400 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-yellow-400 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-yellow-400"></div>
                </div>
              </div>
              <Sparkles className="w-16 h-16 text-yellow-400 animate-pulse" />
            </div>
          </div>
        </motion.div>

        {/* Front of card */}
        <motion.div
          className="absolute inset-0 w-full h-full rounded-xl"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-amber-50 to-yellow-100 rounded-xl border-4 border-yellow-600 shadow-2xl overflow-hidden">
            <div className="h-3/4 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="h-1/4 bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center px-4">
              <h3 className="text-yellow-300 text-center">{name}</h3>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
