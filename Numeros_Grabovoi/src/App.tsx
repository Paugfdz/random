import image_32ec3b639d43f85f24236b8cdfc9825a20bcf8f4 from 'figma:asset/32ec3b639d43f85f24236b8cdfc9825a20bcf8f4.png';
import image_f7e4d696fedb9ba994d47de4ac002f60f2b187ee from 'figma:asset/f7e4d696fedb9ba994d47de4ac002f60f2b187ee.png';
import image_e13986b4773c7857c93394d081c7765381c7bceb from 'figma:asset/e13986b4773c7857c93394d081c7765381c7bceb.png';
import image_7abf91dac1188b1e0d28da9db0b18c2734a11c56 from 'figma:asset/7abf91dac1188b1e0d28da9db0b18c2734a11c56.png';
import { NumberSequenceCard } from "./components/NumberSequenceCard";
import { SequenceCalculator } from "./components/SequenceCalculator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Card } from "./components/ui/card";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Sparkles, Heart, Wallet, Shield, Lightbulb, Users, Star, Calculator } from "lucide-react";
import { useState, useEffect } from "react";

interface Sequence {
  sequence: string;
  title: string;
  description: string;
  category: string;
}

export default function App() {
  const [favorites, setFavorites] = useState<Sequence[]>([]);
  const [personalSequences, setPersonalSequences] = useState<Sequence[]>([]);

  // Cargar favoritos del localStorage al iniciar
  useEffect(() => {
    const savedFavorites = localStorage.getItem("grabovoiFavorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
    const savedPersonal = localStorage.getItem("grabovoiPersonal");
    if (savedPersonal) {
      setPersonalSequences(JSON.parse(savedPersonal));
    }
  }, []);

  // Guardar favoritos en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem("grabovoiFavorites", JSON.stringify(favorites));
  }, [favorites]);

  // Guardar secuencias personales en localStorage
  useEffect(() => {
    localStorage.setItem("grabovoiPersonal", JSON.stringify(personalSequences));
  }, [personalSequences]);

  const toggleFavorite = (seq: Sequence) => {
    const isFavorite = favorites.some(fav => fav.sequence === seq.sequence && fav.title === seq.title);
    
    if (isFavorite) {
      setFavorites(favorites.filter(fav => !(fav.sequence === seq.sequence && fav.title === seq.title)));
    } else {
      setFavorites([...favorites, seq]);
    }
  };

  const isFavorite = (seq: Sequence) => {
    return favorites.some(fav => fav.sequence === seq.sequence && fav.title === seq.title);
  };

  const handleSequenceCalculated = (seq: Sequence) => {
    // Verificar si ya existe esta secuencia personal
    const exists = personalSequences.some(
      ps => ps.sequence === seq.sequence && ps.title === seq.title
    );
    
    if (!exists) {
      setPersonalSequences([...personalSequences, seq]);
    }
  };
  const sequences = {
    salud: [
      {
        sequence: "1489999",
        title: "Salud General",
        description: "Para mantener y restaurar la salud en general del cuerpo y la mente.",
        category: "Salud"
      },
      {
        sequence: "8888888",
        title: "Sistema Inmunológico",
        description: "Fortalece las defensas naturales del organismo.",
        category: "Salud"
      },
      {
        sequence: "1238888",
        title: "Energía Vital",
        description: "Incrementa la energía y vitalidad física.",
        category: "Salud"
      }
    ],
    abundancia: [
      {
        sequence: "520741891",
        title: "Abundancia General",
        description: "Atrae prosperidad y abundancia en todos los aspectos de la vida.",
        category: "Abundancia"
      },
      {
        sequence: "318798",
        title: "Dinero Urgente",
        description: "Para situaciones donde se necesita dinero de manera inmediata.",
        category: "Abundancia"
      },
      {
        sequence: "71427321893",
        title: "Éxito en Negocios",
        description: "Favorece el éxito y crecimiento en emprendimientos y negocios.",
        category: "Abundancia"
      }
    ],
    amor: [
      {
        sequence: "888412",
        title: "Amor Verdadero",
        description: "Atrae relaciones de amor auténtico y duradero.",
        category: "Amor"
      },
      {
        sequence: "519888",
        title: "Armonía en Pareja",
        description: "Mejora la comunicación y armonía en las relaciones existentes.",
        category: "Amor"
      },
      {
        sequence: "97318541",
        title: "Amor Propio",
        description: "Fortalece la autoaceptación y el amor hacia uno mismo.",
        category: "Amor"
      }
    ],
    proteccion: [
      {
        sequence: "9187948181",
        title: "Protección General",
        description: "Protege de energías negativas y situaciones adversas.",
        category: "Protección"
      },
      {
        sequence: "741",
        title: "Limpieza Energética",
        description: "Limpia y purifica el campo energético personal.",
        category: "Protección"
      },
      {
        sequence: "516798",
        title: "Protección del Hogar",
        description: "Crea un escudo protector en el espacio donde vives.",
        category: "Protección"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#FFB4D1] via-[#F3E8FF] to-[#BAE6FD]">
        <div className="absolute inset-0 opacity-5">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1482952980430-be6f9ff18749?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGlyaXR1YWwlMjBtZWRpdGF0aW9uJTIwbGlnaHR8ZW58MXx8fHwxNzYwMDI0ODg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Elementos decorativos flotantes tipo plastilina */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#C4B5FD] to-[#A78BFA] clay-blob blur-sm opacity-50 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-[#FFB4D1] to-[#F472B6] clay-blob blur-md opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-gradient-to-br from-[#FDE68A] to-[#FCD34D] clay-blob blur-sm opacity-45" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-[#A7F3D0] to-[#6EE7B7] clay-blob blur-sm opacity-40" style={{ animationDelay: '6s' }}></div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-24 text-center">
          <div className="inline-flex items-center gap-3 mb-8 px-7 py-4 bg-gradient-to-br from-[#C4B5FD] to-[#A78BFA] rounded-full shadow-2xl clay-button clay-glow" style={{ '--color': '#C4B5FD', '--color-dark': '#A78BFA' } as React.CSSProperties}>
            <span className="text-3xl clay-icon">🙌</span>
            <span className="text-white text-lg">Sanación Vibratoria</span>
          </div>
          
          <h1 className="mb-8 max-w-3xl mx-auto bg-gradient-to-r from-[#9B7EBD] via-[#D946A6] to-[#F472B6] bg-clip-text text-transparent drop-shadow-lg text-[40px] font-bold">
            Números de Grabovoi: Guía Completa y Sencilla
          </h1>
          
          <p className="max-w-2xl mx-auto text-[#4A4063] mb-8 leading-relaxed text-lg">
            Descubre cómo las secuencias numéricas pueden ayudarte a armonizar diferentes aspectos de tu vida 
            a través de la vibración y la intención consciente. ✨
          </p>
        </div>
      </div>

      {/* ¿Qué son? Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-6 px-5 py-3 bg-gradient-to-br from-[#A7F3D0] to-[#6EE7B7] rounded-full shadow-xl clay-button" style={{ '--color': '#A7F3D0', '--color-dark': '#6EE7B7' } as React.CSSProperties}>
              <span className="text-3xl clay-icon">🔢</span>
              <h2 className="text-[#065F46] m-0">¿Qué son?</h2>
            </div>
            
            <div className="space-y-6 mt-8">
              <p className="leading-relaxed text-lg">
                Los números de Grabovoi son secuencias numéricas desarrolladas por el científico ruso 
                <strong> Grigori Grabovoi</strong>, quien propone que cada número tiene una vibración 
                única que puede influir en la realidad.
              </p>
              
              <p className="leading-relaxed text-lg">
                Según esta metodología, al concentrarse en estas secuencias numéricas específicas, 
                podemos armonizar diferentes aspectos de nuestra vida: salud, abundancia, amor, 
                protección y más.
              </p>
              
              <Card className="clay-card p-7 bg-gradient-to-br from-[#FFE5EC] to-[#FECACA] border-3 border-white/90 clay-glow">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FFB4D1] to-[#F472B6] rounded-full flex items-center justify-center shadow-lg clay-button flex-shrink-0" style={{ '--color': '#FFB4D1', '--color-dark': '#F472B6' } as React.CSSProperties}>
                    <span className="text-2xl clay-icon">💬</span>
                  </div>
                  <p className="italic leading-relaxed text-[#9F1239] pt-2">
                    "Cada número es una vibración específica que resuena con diferentes aspectos de la 
                    realidad, permitiendo la armonización y restauración."
                  </p>
                </div>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-[#C4B5FD] via-[#FFB4D1] to-[#FDE68A] rounded-[3rem] opacity-25 blur-2xl clay-blob"></div>
            <ImageWithFallback
              src={image_f7e4d696fedb9ba994d47de4ac002f60f2b187ee}
              alt="Números y geometría sagrada"
              className="relative rounded-[2.5rem] shadow-2xl w-full clay-card border-[6px] border-white"
            />
          </div>
        </div>
      </section>

      {/* Cómo Funcionan */}
      <section className="relative bg-gradient-to-br from-[#F3E8FF] via-[#E0F2FE] to-[#FFF5F8] py-20 overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-[#FDE68A] to-[#FCD34D] clay-blob opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-[#FFB4D1] to-[#F472B6] clay-blob opacity-20" style={{ animationDelay: '3s' }}></div>
        
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-br from-[#FDE68A] to-[#FCD34D] rounded-full shadow-xl clay-button" style={{ '--color': '#FDE68A', '--color-dark': '#FCD34D' } as React.CSSProperties}>
              <span className="text-4xl clay-icon">⚡</span>
              <h2 className="text-[#92400E] m-0">¿Cómo Funcionan?</h2>
            </div>
            <p className="text-[#4A4063] max-w-2xl mx-auto leading-relaxed text-lg">
              El principio básico es simple: todo en el universo vibra a diferentes frecuencias, 
              incluyendo los números.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <Card className="clay-card p-9 text-center border-3 border-white/90 hover:-translate-y-3 hover:scale-105 transition-all duration-300 clay-glow">
              <div className="w-20 h-20 bg-gradient-to-br from-[#C4B5FD] to-[#A78BFA] rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-2xl clay-button" style={{ '--color': '#C4B5FD', '--color-dark': '#A78BFA' } as React.CSSProperties}>
                <span className="text-3xl clay-icon">1️⃣</span>
              </div>
              <h3 className="mb-4">Vibración Numérica</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cada número emite una frecuencia específica que resuena con aspectos particulares de la vida.
              </p>
            </Card>

            <Card className="clay-card p-9 text-center border-3 border-white/90 hover:-translate-y-3 hover:scale-105 transition-all duration-300 clay-glow">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FFB4D1] to-[#F472B6] rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-2xl clay-button" style={{ '--color': '#FFB4D1', '--color-dark': '#F472B6' } as React.CSSProperties}>
                <span className="text-3xl clay-icon">2️⃣</span>
              </div>
              <h3 className="mb-4">Intención Consciente</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tu enfoque e intención amplifican el efecto de la secuencia numérica.
              </p>
            </Card>

            <Card className="clay-card p-9 text-center border-3 border-white/90 hover:-translate-y-3 hover:scale-105 transition-all duration-300 clay-glow">
              <div className="w-20 h-20 bg-gradient-to-br from-[#A7F3D0] to-[#6EE7B7] rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-2xl clay-button" style={{ '--color': '#A7F3D0', '--color-dark': '#6EE7B7' } as React.CSSProperties}>
                <span className="text-3xl clay-icon">3️⃣</span>
              </div>
              <h3 className="mb-4">Armonización</h3>
              <p className="text-muted-foreground leading-relaxed">
                La vibración de los números ayuda a armonizar y restaurar el equilibrio deseado.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Cómo Usar las Secuencias */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="mb-4 flex items-center justify-center gap-3">
            <span className="text-4xl">📚</span>
            Cómo Utilizar las Secuencias Numéricas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Sigue estos pasos sencillos para trabajar con los números de Grabovoi
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#C4B5FD] to-[#A78BFA] text-white rounded-3xl flex items-center justify-center shadow-lg clay-icon">
                1
              </div>
              <div>
                <h3 className="mb-2">Elige tu Secuencia</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Selecciona la secuencia numérica que corresponda a tu intención o necesidad actual.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#FFB4D1] to-[#F472B6] text-white rounded-3xl flex items-center justify-center shadow-lg clay-icon">
                2
              </div>
              <div>
                <h3 className="mb-2">Crea un Espacio Tranquilo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Busca un lugar tranquilo donde puedas concentrarte sin interrupciones.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#A7F3D0] to-[#6EE7B7] text-[#065F46] rounded-3xl flex items-center justify-center shadow-lg clay-icon">
                3
              </div>
              <div>
                <h3 className="mb-2">Define tu Intención</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Clarifica mentalmente qué deseas lograr o armonizar con esta secuencia.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#FDE68A] to-[#FCD34D] text-[#92400E] rounded-3xl flex items-center justify-center shadow-lg clay-icon">
                4
              </div>
              <div>
                <h3 className="mb-2">Concentra tu Atención</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Puedes repetir mentalmente los números, escribirlos, visualizarlos o meditarlos.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#FECACA] to-[#FCA5A5] text-[#991B1B] rounded-3xl flex items-center justify-center shadow-lg clay-icon">
                5
              </div>
              <div>
                <h3 className="mb-2">Práctica Regular</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Repite el proceso diariamente durante varios minutos, idealmente 3 veces al día.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FDE68A] to-[#A7F3D0] rounded-3xl opacity-20 blur-xl"></div>
            <ImageWithFallback
              src={image_32ec3b639d43f85f24236b8cdfc9825a20bcf8f4}
              alt="Meditación y sanación"
              className="relative rounded-3xl shadow-2xl w-full h-full object-cover clay-card border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Métodos de Uso */}
      <section className="bg-gradient-to-br from-[#FFE5EC] to-[#FFF5F8] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center mb-12 flex items-center justify-center gap-3">
            <span className="text-4xl">🎨</span>
            Métodos de Aplicación
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="clay-card p-6 border-2 border-white/80 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#C4B5FD] to-[#A78BFA] rounded-3xl flex items-center justify-center mb-4 shadow-lg clay-icon">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h4 className="mb-2">Visualización</h4>
              <p className="text-muted-foreground leading-relaxed">
                Cierra los ojos y visualiza los números brillando con luz.
              </p>
            </Card>

            <Card className="clay-card p-6 border-2 border-white/80 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FFB4D1] to-[#F472B6] rounded-3xl flex items-center justify-center mb-4 shadow-lg clay-icon">
                <span className="text-3xl">✍️</span>
              </div>
              <h4 className="mb-2">Escritura</h4>
              <p className="text-muted-foreground leading-relaxed">
                Escribe la secuencia varias veces mientras mantienes tu intención.
              </p>
            </Card>

            <Card className="clay-card p-6 border-2 border-white/80 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#A7F3D0] to-[#6EE7B7] rounded-3xl flex items-center justify-center mb-4 shadow-lg clay-icon">
                <span className="text-3xl">🗣️</span>
              </div>
              <h4 className="mb-2">Repetición Verbal</h4>
              <p className="text-muted-foreground leading-relaxed">
                Repite los números en voz alta o mentalmente como un mantra.
              </p>
            </Card>

            <Card className="clay-card p-6 border-2 border-white/80 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FDE68A] to-[#FCD34D] rounded-3xl flex items-center justify-center mb-4 shadow-lg clay-icon">
                <span className="text-3xl">🎵</span>
              </div>
              <h4 className="mb-2">Canto</h4>
              <p className="text-muted-foreground leading-relaxed">
                Canta los números en un tono que te resulte cómodo y armonioso.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Secuencias Populares */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="mb-4 flex items-center justify-center gap-3">
            <span className="text-4xl">🌟</span>
            Secuencias Numéricas Populares
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explora las secuencias más utilizadas organizadas por categoría. 
            Haz clic en la estrella para guardar tus favoritas. ⭐
          </p>
        </div>

        <Tabs defaultValue="salud" className="w-full">
          <div className="mb-8 overflow-x-auto pb-2">
            <TabsList className="inline-flex w-full min-w-max md:grid md:grid-cols-6 gap-2 clay-card p-3 border-2 border-white/80 h-auto">
              <TabsTrigger 
                value="salud" 
                className="flex flex-col sm:flex-row items-center justify-center gap-2 rounded-2xl px-4 py-3 min-w-[100px] h-auto data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#A7F3D0] data-[state=active]:to-[#6EE7B7] data-[state=active]:text-[#065F46] data-[state=active]:shadow-lg transition-all hover:scale-105"
              >
                <span className="text-2xl sm:text-lg">💚</span>
                <span className="text-sm sm:text-base">Salud</span>
              </TabsTrigger>
              <TabsTrigger 
                value="abundancia" 
                className="flex flex-col sm:flex-row items-center justify-center gap-2 rounded-2xl px-4 py-3 min-w-[100px] h-auto data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#FDE68A] data-[state=active]:to-[#FCD34D] data-[state=active]:text-[#92400E] data-[state=active]:shadow-lg transition-all hover:scale-105"
              >
                <span className="text-2xl sm:text-lg">💰</span>
                <span className="text-sm sm:text-base">Abundancia</span>
              </TabsTrigger>
              <TabsTrigger 
                value="amor" 
                className="flex flex-col sm:flex-row items-center justify-center gap-2 rounded-2xl px-4 py-3 min-w-[100px] h-auto data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#FFB4D1] data-[state=active]:to-[#F472B6] data-[state=active]:text-white data-[state=active]:shadow-lg transition-all hover:scale-105"
              >
                <span className="text-2xl sm:text-lg">💖</span>
                <span className="text-sm sm:text-base">Amor</span>
              </TabsTrigger>
              <TabsTrigger 
                value="proteccion" 
                className="flex flex-col sm:flex-row items-center justify-center gap-2 rounded-2xl px-4 py-3 min-w-[100px] h-auto data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#C4B5FD] data-[state=active]:to-[#A78BFA] data-[state=active]:text-white data-[state=active]:shadow-lg transition-all hover:scale-105"
              >
                <span className="text-2xl sm:text-lg">🛡️</span>
                <span className="text-sm sm:text-base">Protección</span>
              </TabsTrigger>
              <TabsTrigger 
                value="favoritos" 
                className="flex flex-col sm:flex-row items-center justify-center gap-2 rounded-2xl px-4 py-3 min-w-[100px] h-auto data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#FCD34D] data-[state=active]:to-[#F59E0B] data-[state=active]:text-white data-[state=active]:shadow-lg transition-all hover:scale-105"
              >
                <Star className="w-6 h-6 sm:w-4 sm:h-4" />
                <span className="text-sm sm:text-base">Favoritos</span>
              </TabsTrigger>
              <TabsTrigger 
                value="personal" 
                className="flex flex-col sm:flex-row items-center justify-center gap-2 rounded-2xl px-4 py-3 min-w-[100px] h-auto data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#BAE6FD] data-[state=active]:to-[#7DD3FC] data-[state=active]:text-[#075985] data-[state=active]:shadow-lg transition-all hover:scale-105"
              >
                <span className="text-2xl sm:text-lg">✨</span>
                <span className="text-sm sm:text-base">Personal</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="salud" className="space-y-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sequences.salud.map((seq, index) => (
                <NumberSequenceCard 
                  key={index} 
                  {...seq} 
                  isFavorite={isFavorite(seq)}
                  onToggleFavorite={() => toggleFavorite(seq)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="abundancia" className="space-y-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sequences.abundancia.map((seq, index) => (
                <NumberSequenceCard 
                  key={index} 
                  {...seq} 
                  isFavorite={isFavorite(seq)}
                  onToggleFavorite={() => toggleFavorite(seq)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="amor" className="space-y-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sequences.amor.map((seq, index) => (
                <NumberSequenceCard 
                  key={index} 
                  {...seq} 
                  isFavorite={isFavorite(seq)}
                  onToggleFavorite={() => toggleFavorite(seq)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="proteccion" className="space-y-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sequences.proteccion.map((seq, index) => (
                <NumberSequenceCard 
                  key={index} 
                  {...seq} 
                  isFavorite={isFavorite(seq)}
                  onToggleFavorite={() => toggleFavorite(seq)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="favoritos" className="space-y-4">
            {favorites.length === 0 ? (
              <Card className="clay-card p-12 text-center border-2 border-white/80">
                <div className="w-24 h-24 bg-gradient-to-br from-[#FDE68A] to-[#FCD34D] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg clay-icon">
                  <Star className="w-12 h-12 text-[#92400E]" />
                </div>
                <h3 className="mb-3">No tienes favoritos guardados</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Haz clic en la estrella ⭐ de cualquier secuencia para guardarla aquí
                </p>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favorites.map((seq, index) => (
                  <NumberSequenceCard 
                    key={index} 
                    {...seq} 
                    isFavorite={true}
                    onToggleFavorite={() => toggleFavorite(seq)}
                  />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="personal" className="space-y-8">
            <SequenceCalculator onSequenceCalculated={handleSequenceCalculated} />
            
            {personalSequences.length > 0 && (
              <div>
                <h3 className="mb-6 text-center flex items-center justify-center gap-3">
                  <span className="text-3xl">💎</span>
                  Mis Secuencias Personales Guardadas
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {personalSequences.map((seq, index) => (
                    <NumberSequenceCard 
                      key={index} 
                      {...seq} 
                      isFavorite={isFavorite(seq)}
                      onToggleFavorite={() => toggleFavorite(seq)}
                    />
                  ))}
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-[#F3E8FF] to-[#FFE5EC] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center mb-12 flex items-center justify-center gap-3">
            <span className="text-4xl">❓</span>
            Preguntas Frecuentes
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>¿Cuánto tiempo debo dedicar a cada sesión?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Se recomienda dedicar entre 5 y 15 minutos por sesión, idealmente 3 veces al día. 
                  Lo más importante es la constancia y la calidad de tu intención, no tanto la duración.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>¿Puedo usar varias secuencias al mismo tiempo?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Sí, puedes trabajar con varias secuencias, pero es recomendable enfocarte en no más de 
                  3 a la vez para mantener la claridad de intención. Puedes trabajarlas en sesiones 
                  separadas durante el día.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>¿Cuándo veré resultados?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Los resultados varían según la persona, la situación y la constancia en la práctica. 
                  Algunas personas reportan cambios en días, otras en semanas. Lo importante es mantener 
                  una práctica regular y una actitud abierta.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>¿Necesito tener alguna creencia específica?</AccordionTrigger>
              <AccordionContent>
                <p>
                  No es necesario tener una creencia particular. Lo que sí es importante es mantener una 
                  mente abierta y una intención clara. La práctica funciona mejor cuando se combina con 
                  una actitud positiva y confianza.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>¿Puedo escribir los números en mi cuerpo?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Sí, algunas personas escriben las secuencias en sus manos, brazos u otras partes del cuerpo 
                  como una forma de mantener la vibración cerca. También puedes llevarlas escritas en papel, 
                  como fondo de pantalla, o cualquier forma que te permita verlas frecuentemente.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>¿Los números tienen contraindicaciones?</AccordionTrigger>
              <AccordionContent>
                <p>
                  No se conocen contraindicaciones. Los números de Grabovoi son considerados una herramienta 
                  de armonización suave. Sin embargo, siempre deben usarse como complemento y nunca como 
                  sustituto de tratamiento médico profesional cuando se trata de salud.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Tips Adicionales */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-center mb-12 flex items-center justify-center gap-3">
          <span className="text-4xl">💡</span>
          Consejos para Maximizar los Resultados
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="clay-card p-7 border-2 border-white/80 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FDE68A] to-[#FCD34D] rounded-2xl flex items-center justify-center shadow-lg clay-icon">
                <span className="text-2xl">✨</span>
              </div>
              <h3>Mantén una Actitud Positiva</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              La energía con la que te acercas a la práctica es fundamental. Trabaja desde un lugar de 
              gratitud y confianza, no de desesperación o miedo.
            </p>
          </Card>

          <Card className="clay-card p-7 border-2 border-white/80 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C4B5FD] to-[#A78BFA] rounded-2xl flex items-center justify-center shadow-lg clay-icon">
                <span className="text-2xl">🌟</span>
              </div>
              <h3>Sé Específico en tu Intención</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Cuanto más clara sea tu intención, más enfocada será la energía. Define exactamente qué 
              deseas armonizar o mejorar.
            </p>
          </Card>

          <Card className="clay-card p-7 border-2 border-white/80 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FFB4D1] to-[#F472B6] rounded-2xl flex items-center justify-center shadow-lg clay-icon">
                <span className="text-2xl">📝</span>
              </div>
              <h3>Lleva un Registro</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Anota las secuencias que usas, tus intenciones y cualquier cambio que observes. Esto te 
              ayudará a identificar patrones y mantener la constancia.
            </p>
          </Card>

          <Card className="clay-card p-7 border-2 border-white/80 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#A7F3D0] to-[#6EE7B7] rounded-2xl flex items-center justify-center shadow-lg clay-icon">
                <span className="text-2xl">🧘</span>
              </div>
              <h3>Combina con Meditación</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              La práctica de los números de Grabovoi se potencia cuando se combina con respiración 
              consciente, meditación o visualización.
            </p>
          </Card>

          <Card className="clay-card p-7 border-2 border-white/80 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#BAE6FD] to-[#7DD3FC] rounded-2xl flex items-center justify-center shadow-lg clay-icon">
                <span className="text-2xl">💫</span>
              </div>
              <h3>Confía en el Proceso</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Los cambios pueden manifestarse de formas inesperadas. Mantén la fe en el proceso y 
              permanece atento a las señales y oportunidades.
            </p>
          </Card>

          <Card className="clay-card p-7 border-2 border-white/80 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FECACA] to-[#FCA5A5] rounded-2xl flex items-center justify-center shadow-lg clay-icon">
                <span className="text-2xl">🌱</span>
              </div>
              <h3>Practica con Regularidad</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              La constancia es clave. Es mejor practicar 5 minutos diarios que una hora ocasionalmente. 
              Crea un hábito sostenible.
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-r from-[#9B7EBD] via-[#C4B5FD] to-[#FFB4D1] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white clay-blob"></div>
          <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-white clay-blob" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl clay-button clay-glow" style={{ '--color': 'rgba(255,255,255,0.3)', '--color-dark': 'rgba(255,255,255,0.2)' } as React.CSSProperties}>
              <span className="text-5xl clay-icon">✨</span>
            </div>
          </div>
          <p className="mb-6 leading-relaxed text-lg text-white/95">
            Los números de Grabovoi son una herramienta de desarrollo personal y espiritual. 
            Úsalos como complemento a tu bienestar integral. 🌈
          </p>
          <p className="text-white/90 leading-relaxed text-lg">
            Recuerda: La intención consciente y la práctica constante son la base del éxito. 💖
          </p>
        </div>
      </footer>
    </div>
  );
}
