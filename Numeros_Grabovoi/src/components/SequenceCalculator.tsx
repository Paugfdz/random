import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Sparkles } from "lucide-react";
import { useState } from "react";

interface CalculatedSequence {
  sequence: string;
  title: string;
  description: string;
  category: string;
}

export function SequenceCalculator({ onSequenceCalculated }: { onSequenceCalculated?: (seq: CalculatedSequence) => void }) {
  const [birthDate, setBirthDate] = useState("");
  const [intention, setIntention] = useState("");
  const [calculatedSequence, setCalculatedSequence] = useState<CalculatedSequence | null>(null);

  const calculatePersonalSequence = () => {
    if (!birthDate) return;

    // Extraer día, mes, año
    const [year, month, day] = birthDate.split("-");
    
    // Algoritmo simplificado para generar secuencia personal
    // Basado en la fecha de nacimiento
    const dayNum = parseInt(day);
    const monthNum = parseInt(month);
    const yearDigits = year.split('').map(Number);
    
    // Suma de todos los dígitos de la fecha
    const sumYear = yearDigits.reduce((a, b) => a + b, 0);
    
    // Crear secuencia personalizada
    let personalSeq = "";
    
    // Diferentes métodos según la intención
    switch(intention) {
      case "salud":
        // Secuencia para salud basada en fecha de nacimiento
        personalSeq = `${dayNum}${monthNum}${sumYear}${dayNum * monthNum % 10}`;
        break;
      case "abundancia":
        // Secuencia para abundancia
        personalSeq = `${monthNum}${sumYear}${dayNum}${(dayNum + monthNum) % 10}${yearDigits[2]}${yearDigits[3]}`;
        break;
      case "amor":
        // Secuencia para amor
        personalSeq = `${sumYear}${dayNum}${monthNum}${(sumYear + dayNum) % 10}${yearDigits[3]}`;
        break;
      case "proteccion":
        // Secuencia para protección
        personalSeq = `${yearDigits[2]}${yearDigits[3]}${dayNum}${monthNum}${sumYear}${(dayNum * 2) % 10}`;
        break;
      case "proposito":
        // Secuencia para propósito de vida
        personalSeq = `${sumYear}${monthNum}${dayNum}${yearDigits[3]}${(sumYear * 2) % 10}`;
        break;
      default:
        personalSeq = `${dayNum}${monthNum}${sumYear}`;
    }

    const intentionNames: { [key: string]: string } = {
      salud: "Salud Personal",
      abundancia: "Abundancia Personal",
      amor: "Amor Personal",
      proteccion: "Protección Personal",
      proposito: "Propósito de Vida"
    };

    const intentionDescriptions: { [key: string]: string } = {
      salud: "Secuencia personalizada para tu salud y bienestar, calculada con tu fecha de nacimiento.",
      abundancia: "Secuencia personalizada para atraer abundancia alineada con tu energía natal.",
      amor: "Secuencia personalizada para amor y relaciones armoniosas según tu vibración.",
      proteccion: "Secuencia personalizada de protección basada en tu patrón energético natal.",
      proposito: "Secuencia que te conecta con tu propósito de vida y misión personal."
    };

    const calculated: CalculatedSequence = {
      sequence: personalSeq,
      title: intentionNames[intention] || "Secuencia Personal",
      description: intentionDescriptions[intention] || "Secuencia calculada basada en tu fecha de nacimiento.",
      category: "Personal"
    };

    setCalculatedSequence(calculated);
    if (onSequenceCalculated) {
      onSequenceCalculated(calculated);
    }
  };

  return (
    <Card className="clay-card p-8 max-w-2xl mx-auto border-2 border-white/80">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-[#C4B5FD] to-[#A78BFA] rounded-3xl flex items-center justify-center shadow-lg clay-icon">
          <span className="text-3xl">🧮</span>
        </div>
        <div>
          <h3>Calculador de Secuencia Personal</h3>
          <p className="text-muted-foreground">Genera tu secuencia numérica personalizada</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <Label htmlFor="birthdate" className="flex items-center gap-2">
            <span className="text-xl">🎂</span>
            Fecha de Nacimiento
          </Label>
          <Input
            id="birthdate"
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            max={new Date().toISOString().split('T')[0]}
            className="clay-number border-2 border-white/80 rounded-2xl"
          />
          <p className="text-muted-foreground">
            Tu fecha de nacimiento se utiliza para calcular tu secuencia vibratoria única
          </p>
        </div>

        <div className="space-y-3">
          <Label htmlFor="intention" className="flex items-center gap-2">
            <span className="text-xl">🎯</span>
            Intención Principal
          </Label>
          <Select value={intention} onValueChange={setIntention}>
            <SelectTrigger id="intention" className="clay-number border-2 border-white/80 rounded-2xl">
              <SelectValue placeholder="Selecciona tu intención" />
            </SelectTrigger>
            <SelectContent className="clay-card border-2 border-white/80 rounded-2xl">
              <SelectItem value="salud" className="rounded-xl">💚 Salud y Bienestar</SelectItem>
              <SelectItem value="abundancia" className="rounded-xl">💰 Abundancia y Prosperidad</SelectItem>
              <SelectItem value="amor" className="rounded-xl">💖 Amor y Relaciones</SelectItem>
              <SelectItem value="proteccion" className="rounded-xl">🛡️ Protección Energética</SelectItem>
              <SelectItem value="proposito" className="rounded-xl">✨ Propósito de Vida</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-muted-foreground">
            Elige el área de tu vida que deseas armonizar
          </p>
        </div>

        <Button 
          onClick={calculatePersonalSequence}
          disabled={!birthDate || !intention}
          className="w-full clay-button rounded-2xl h-12 bg-gradient-to-r from-[#9B7EBD] to-[#8B5FBF] hover:from-[#8B5FBF] hover:to-[#7B4FAF] disabled:opacity-50"
        >
          <Sparkles className="w-5 h-5 mr-2 clay-icon" />
          Calcular Mi Secuencia Personal
        </Button>

        {calculatedSequence && (
          <div className="mt-6 p-6 bg-gradient-to-br from-[#F3E8FF] to-[#FFE5EC] rounded-3xl border-2 border-white clay-card">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FDE68A] to-[#FCD34D] rounded-2xl flex items-center justify-center shadow-lg clay-icon">
                <Sparkles className="w-6 h-6 text-[#92400E]" />
              </div>
              <div>
                <h4 className="mb-1">Tu Secuencia Personal</h4>
                <p className="text-muted-foreground">{calculatedSequence.title}</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2.5 mb-4 flex-wrap">
                {calculatedSequence.sequence.split('').map((digit, index) => (
                  <span 
                    key={index} 
                    className="clay-number inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#BAE6FD] to-[#7DD3FC] text-[#075985] rounded-2xl border-2 border-white/90 shadow-lg"
                  >
                    {digit}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">{calculatedSequence.description}</p>

            <div className="bg-white/60 p-5 rounded-2xl border-2 border-white clay-card">
              <p className="flex items-center gap-2 mb-3">
                <span className="text-xl">📖</span>
                <strong>Cómo usar tu secuencia personal:</strong>
              </p>
              <ul className="mt-3 space-y-2.5 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-lg">✍️</span>
                  <span>Escribe estos números en un papel y llévalo contigo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">🔄</span>
                  <span>Repite la secuencia mentalmente 3 veces al día</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">✨</span>
                  <span>Visualiza los números brillando con luz mientras los recitas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">🎯</span>
                  <span>Mantén tu intención clara al trabajar con esta secuencia</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
