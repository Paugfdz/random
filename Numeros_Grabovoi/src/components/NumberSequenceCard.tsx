import { Card } from "./ui/card";
import { Copy, Check, Star } from "lucide-react";
import { useState } from "react";

interface NumberSequenceCardProps {
  sequence: string;
  title: string;
  description: string;
  category: string;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

const categoryColors: { [key: string]: { bg: string; text: string; icon: string } } = {
  "Salud": { bg: "bg-[#A7F3D0]", text: "text-[#065F46]", icon: "💚" },
  "Abundancia": { bg: "bg-[#FDE68A]", text: "text-[#92400E]", icon: "💰" },
  "Amor": { bg: "bg-[#FFB4D1]", text: "text-[#9F1239]", icon: "💖" },
  "Protección": { bg: "bg-[#C4B5FD]", text: "text-[#5B21B6]", icon: "🛡️" },
  "Personal": { bg: "bg-[#BAE6FD]", text: "text-[#075985]", icon: "✨" }
};

export function NumberSequenceCard({ 
  sequence, 
  title, 
  description, 
  category, 
  isFavorite = false,
  onToggleFavorite 
}: NumberSequenceCardProps) {
  const [copied, setCopied] = useState(false);
  const colors = categoryColors[category] || categoryColors["Personal"];

  const handleCopy = () => {
    navigator.clipboard.writeText(sequence);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="clay-card p-7 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 border-3 border-white/90 clay-glow">
      <div className="flex justify-between items-start mb-5">
        <span className={`px-5 py-2.5 ${colors.bg} ${colors.text} rounded-full inline-flex items-center gap-2.5 shadow-xl clay-button`} style={{ '--color': colors.bg.replace('bg-[', '').replace(']', ''), '--color-dark': colors.bg.replace('bg-[', '').replace(']', '') } as React.CSSProperties}>
          <span className="text-xl clay-icon">{colors.icon}</span>
          <span className="font-medium">{category}</span>
        </span>
        <div className="flex gap-2.5">
          {onToggleFavorite && (
            <button
              onClick={onToggleFavorite}
              className="p-3 rounded-3xl transition-all duration-300 hover:scale-110 clay-button clay-glow bg-gradient-to-br from-[#FDE68A] to-[#FCD34D]"
              style={{ '--color': '#FDE68A', '--color-dark': '#FCD34D' } as React.CSSProperties}
              aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
            >
              <Star 
                className={`w-5 h-5 clay-icon transition-all ${isFavorite ? 'fill-[#F59E0B] text-[#F59E0B]' : 'text-[#92400E]'}`} 
              />
            </button>
          )}
          <button
            onClick={handleCopy}
            className="p-3 rounded-3xl transition-all duration-300 hover:scale-110 clay-button clay-glow bg-gradient-to-br from-[#C4B5FD] to-[#A78BFA]"
            style={{ '--color': '#C4B5FD', '--color-dark': '#A78BFA' } as React.CSSProperties}
            aria-label="Copiar secuencia"
          >
            {copied ? 
              <Check className="w-5 h-5 text-white clay-icon" /> : 
              <Copy className="w-5 h-5 text-white clay-icon" />
            }
          </button>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4 flex-wrap justify-center">
          {sequence.split('').map((digit, index) => (
            <span 
              key={index} 
              className={`clay-number inline-flex items-center justify-center w-14 h-14 ${colors.bg} text-white rounded-3xl border-3 border-white/95 shadow-xl transition-transform hover:scale-110 hover:rotate-6`}
            >
              <span className="text-xl">{digit}</span>
            </span>
          ))}
        </div>
      </div>
      
      <h3 className="mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
}
