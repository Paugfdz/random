import { useState } from "react";
import { TarotCard } from "./components/TarotCard";
import { Button } from "./components/ui/button";
import { Textarea } from "./components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Moon, Star } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

interface TarotCardData {
  name: string;
  meaning: string;
  interpretation: string;
  image: string;
}

const tarotDeck: TarotCardData[] = [
  {
    name: "El Loco",
    meaning: "Nuevos comienzos, espontaneidad, fe",
    interpretation: "Es momento de dar un salto de fe. No temas a lo desconocido, confía en el universo y sigue tu intuición. Un nuevo comienzo te espera.",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400"
  },
  {
    name: "El Mago",
    meaning: "Manifestación, poder, habilidad",
    interpretation: "Tienes todo lo que necesitas para manifestar tus deseos. Tu poder personal está en su punto más alto. Es momento de actuar con confianza.",
    image: "https://images.unsplash.com/photo-1504194104404-433180773017?w=400"
  },
  {
    name: "La Sacerdotisa",
    meaning: "Intuición, misterio, sabiduría interior",
    interpretation: "La respuesta que buscas está dentro de ti. Confía en tu intuición y escucha tu voz interior. Los secretos se revelarán en el momento adecuado.",
    image: "https://images.unsplash.com/photo-1532767153582-b1a0e5145009?w=400"
  },
  {
    name: "La Emperatriz",
    meaning: "Abundancia, creatividad, nutrición",
    interpretation: "La prosperidad y la abundancia fluyen hacia ti. Es un momento fértil para crear y nutrir tus proyectos. Conecta con la naturaleza y tu lado creativo.",
    image: "https://images.unsplash.com/photo-1509909756405-be0199881695?w=400"
  },
  {
    name: "El Emperador",
    meaning: "Autoridad, estructura, control",
    interpretation: "Es momento de tomar el control y establecer orden. Tu liderazgo es necesario. Crea estructuras sólidas para tus objetivos.",
    image: "https://images.unsplash.com/photo-1464047736614-af63643285bf?w=400"
  },
  {
    name: "El Hierofante",
    meaning: "Tradición, educación, guía espiritual",
    interpretation: "Busca la sabiduría de quienes han recorrido el camino antes que tú. Las tradiciones y enseñanzas ancestrales te ofrecen guía valiosa.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
  },
  {
    name: "Los Enamorados",
    meaning: "Amor, elecciones, armonía",
    interpretation: "Una decisión importante se presenta. Elige desde el corazón y busca la armonía. Las relaciones significativas están siendo destacadas.",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400"
  },
  {
    name: "El Carro",
    meaning: "Determinación, victoria, control",
    interpretation: "Tu determinación te llevará al éxito. Mantén el control y avanza con confianza. La victoria está a tu alcance si mantienes el rumbo.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400"
  },
  {
    name: "La Fuerza",
    meaning: "Valor, paciencia, compasión",
    interpretation: "Tu verdadera fuerza radica en la gentileza y la compasión. Enfrenta los desafíos con coraje pero también con paciencia. Confía en tu poder interior.",
    image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=400"
  },
  {
    name: "El Ermitaño",
    meaning: "Introspección, soledad, búsqueda interior",
    interpretation: "Es momento de retirarte y reflexionar. La soledad te traerá claridad. Busca la luz interior que te guiará en la oscuridad.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400"
  },
  {
    name: "La Rueda de la Fortuna",
    meaning: "Cambio, ciclos, destino",
    interpretation: "Los vientos del cambio están soplando. La fortuna gira a tu favor. Acepta los ciclos naturales de la vida con sabiduría.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
  },
  {
    name: "La Justicia",
    meaning: "Equilibrio, verdad, consecuencias",
    interpretation: "La verdad prevalecerá. Busca el equilibrio en todas las cosas. Las consecuencias de tus acciones, buenas o malas, se manifestarán.",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400"
  },
  {
    name: "El Colgado",
    meaning: "Suspensión, nueva perspectiva, sacrificio",
    interpretation: "A veces es necesario ver las cosas desde un ángulo diferente. El sacrificio temporal traerá sabiduría. Pausa y reflexiona antes de actuar.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
  },
  {
    name: "La Muerte",
    meaning: "Transformación, finales, renacimiento",
    interpretation: "Un ciclo termina para dar paso a algo nuevo. No temas al cambio transformador. De las cenizas renacerás más fuerte.",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400"
  },
  {
    name: "La Templanza",
    meaning: "Moderación, equilibrio, paciencia",
    interpretation: "Busca el equilibrio en todas las áreas de tu vida. La paciencia y la moderación son tus aliadas. Mezcla los elementos de tu vida con sabiduría.",
    image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=400"
  },
  {
    name: "El Diablo",
    meaning: "Atadura, tentación, materialismo",
    interpretation: "Examina las cadenas que tú mismo has creado. Las tentaciones y dependencias pueden estar limitándote. Tienes el poder de liberarte.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400"
  },
  {
    name: "La Torre",
    meaning: "Revelación súbita, cambio drástico, liberación",
    interpretation: "Un cambio repentino sacudirá tus cimientos. Lo que ya no sirve será destruido. Esto es necesario para tu crecimiento y liberación.",
    image: "https://images.unsplash.com/photo-1496440737103-cd596325d314?w=400"
  },
  {
    name: "La Estrella",
    meaning: "Esperanza, inspiración, serenidad",
    interpretation: "La esperanza brilla en tu camino. Tus deseos están siendo escuchados por el universo. Mantén la fe y la inspiración te guiará.",
    image: "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?w=400"
  },
  {
    name: "La Luna",
    meaning: "Ilusión, intuición, miedos",
    interpretation: "No todo es lo que parece. Tus miedos e ilusiones pueden estar nublando tu visión. Confía en tu intuición para navegar por las aguas inciertas.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400"
  },
  {
    name: "El Sol",
    meaning: "Alegría, éxito, vitalidad",
    interpretation: "La luz del éxito brilla sobre ti. Es un momento de alegría, vitalidad y claridad. Todo se ilumina y el camino está claro.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400"
  },
  {
    name: "El Juicio",
    meaning: "Juicio, renacimiento, evaluación",
    interpretation: "Es momento de evaluar tu camino. Un llamado superior te despierta a tu verdadero propósito. El renacimiento espiritual está ocurriendo.",
    image: "https://images.unsplash.com/photo-1502378735452-bc7d86632805?w=400"
  },
  {
    name: "El Mundo",
    meaning: "Culminación, logro, totalidad",
    interpretation: "Has completado un ciclo importante. El éxito y la realización están aquí. Celebra tus logros y prepárate para nuevas aventuras.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400"
  }
];

export default function App() {
  const [question, setQuestion] = useState("");
  const [selectedCard, setSelectedCard] = useState<TarotCardData | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isConsulting, setIsConsulting] = useState(false);

  const handleConsult = () => {
    if (!question.trim()) {
      return;
    }

    setIsConsulting(true);
    setIsRevealed(false);
    setSelectedCard(null);

    // Simular un momento de consulta
    setTimeout(() => {
      const randomCard = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
      setSelectedCard(randomCard);
      setIsConsulting(false);
      
      // Auto-revelar inmediatamente para mostrar la carta junto con la interpretación
      setTimeout(() => {
        setIsRevealed(true);
      }, 800);
    }, 2000);
  };

  const handleReset = () => {
    setQuestion("");
    setSelectedCard(null);
    setIsRevealed(false);
    setIsConsulting(false);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1677029907981-e9a44fb7409a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxteXN0aWMlMjBwdXJwbGUlMjBnYWxheHl8ZW58MXx8fHwxNzU5Nzk2NTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Mystic background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Floating stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${startX}%`,
                top: `${startY}%`
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            >
              <Star className="w-4 h-4 text-yellow-300" fill="currentColor" />
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Moon className="w-12 h-12 text-yellow-300" />
            <h1 className="text-yellow-300 font-bold text-[36px] font-[Aclonica]">Consulta al Tarot</h1>
            <Sparkles className="w-12 h-12 text-yellow-300" />
          </div>
          <p className="text-purple-200 max-w-2xl mx-auto font-[Montserrat_Alternates] font-bold">
            Haz una pregunta al universo y las cartas del tarot revelarán su sabiduría ancestral para guiarte en tu camino.
          </p>
        </motion.div>

        {/* Question Input */}
        {!selectedCard && !isConsulting && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl mb-8"
          >
            <Card className="bg-purple-900/50 border-purple-500 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-yellow-300 font-[Aboreto]">Escribe tu pregunta</CardTitle>
                <CardDescription className="text-purple-200 font-[Montserrat_Alternates]">
                  Enfócate en tu pregunta mientras escribes. El universo está escuchando...
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="¿Cuál es tu pregunta para el tarot?"
                  className="min-h-[120px] bg-purple-950/50 border-purple-500 text-white placeholder:text-purple-300 resize-none font-[Montserrat_Alternates]"
                />
                <Button
                  onClick={handleConsult}
                  disabled={!question.trim()}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Consultar las Cartas
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Consulting Animation */}
        <AnimatePresence>
          {isConsulting && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="mb-4 inline-block"
              >
                <Sparkles className="w-16 h-16 text-yellow-300" />
              </motion.div>
              <p className="text-yellow-300">Las cartas están siendo consultadas...</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tarot Card Display */}
        <AnimatePresence>
          {selectedCard && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-4xl"
            >
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Card */}
                <div className="flex justify-center">
                  <div className="w-80 h-[480px]">
                    <TarotCard
                      name={selectedCard.name}
                      image={selectedCard.image}
                      isRevealed={isRevealed}
                      onReveal={() => !isRevealed && setIsRevealed(true)}
                    />
                  </div>
                </div>

                {/* Interpretation */}
                <AnimatePresence>
                  {isRevealed && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Card className="bg-purple-900/50 border-yellow-500 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="text-yellow-300 font-bold">{selectedCard.name}</CardTitle>
                          <CardDescription className="text-purple-200">
                            {selectedCard.meaning}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="bg-purple-950/50 rounded-lg p-4 border border-purple-500">
                            <p className="text-sm text-purple-300 mb-2">Tu pregunta:</p>
                            <p className="text-white italic">"{question}"</p>
                          </div>
                          <div>
                            <p className="text-sm text-purple-300 mb-2">Interpretación:</p>
                            <p className="text-white">{selectedCard.interpretation}</p>
                          </div>
                          <Button
                            onClick={handleReset}
                            className="w-full bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white"
                          >
                            Hacer otra consulta
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {!isRevealed && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center mt-4 text-yellow-300"
                >
                  La carta se está revelando...
                </motion.p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
