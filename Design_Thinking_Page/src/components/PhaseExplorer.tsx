import { motion, AnimatePresence } from 'motion/react';
import { PhaseCard } from './PhaseCard';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Trophy } from 'lucide-react';

interface PhaseExplorerProps {
  currentPhase: number;
  onPhaseChange: (phase: number) => void;
  onPhaseComplete: (phase: number) => void;
  completedPhases: number[];
  onStartQuiz: () => void;
}

const phasesData = [
  {
    title: 'Empatizar',
    subtitle: 'Comprender al usuario',
    description: 'La empatía es el corazón del Design Thinking. En esta fase, observamos y nos sumergimos en las experiencias de los usuarios para comprender profundamente sus necesidades, deseos y motivaciones.',
    color: 'from-red-400 to-pink-500',
    icon: '❤️',
    activities: [
      'Entrevistas en profundidad',
      'Observación de usuarios',
      'Mapas de empatía',
      'Inmersión en el contexto del usuario',
    ],
    tips: [
      'Escucha activamente sin juzgar',
      'Haz preguntas abiertas',
      'Observa comportamientos, no solo palabras',
      'Documenta todo lo que descubras',
    ],
  },
  {
    title: 'Definir',
    subtitle: 'Clarificar el problema',
    description: 'Después de empatizar, es momento de analizar y sintetizar toda la información recopilada para definir el problema central que resolveremos. Creamos un punto de vista claro y accionable.',
    color: 'from-orange-400 to-yellow-500',
    icon: '🎯',
    activities: [
      'Análisis de insights',
      'Definición del punto de vista (POV)',
      'Declaración del problema',
      'Pregunta "¿Cómo podríamos...?"',
    ],
    tips: [
      'Enfócate en las necesidades del usuario',
      'Sé específico pero no prescriptivo',
      'Busca problemas significativos',
      'Reformula hasta encontrar el problema real',
    ],
  },
  {
    title: 'Idear',
    subtitle: 'Generar soluciones',
    description: 'La fase de ideación es donde la creatividad florece. Generamos una gran cantidad de ideas sin limitaciones, fomentando el pensamiento divergente antes de converger en las mejores soluciones.',
    color: 'from-green-400 to-emerald-500',
    icon: '💡',
    activities: [
      'Brainstorming',
      'Sketching de ideas',
      'Técnicas SCAMPER',
      'Mapas mentales',
    ],
    tips: [
      'Cantidad sobre calidad al inicio',
      'No juzgues las ideas',
      'Construye sobre las ideas de otros',
      'Piensa de forma radical',
    ],
  },
  {
    title: 'Prototipar',
    subtitle: 'Hacer tangible',
    description: 'Los prototipos transforman ideas en realidad tangible. Creamos versiones simplificadas de nuestras soluciones para experimentar y aprender rápidamente qué funciona y qué no.',
    color: 'from-blue-400 to-cyan-500',
    icon: '🔨',
    activities: [
      'Prototipos de baja fidelidad',
      'Maquetas y mockups',
      'Storyboards',
      'Prototipos interactivos',
    ],
    tips: [
      'Comienza con baja fidelidad',
      'Falla rápido y aprende',
      'Prototipar es pensar',
      'No te enamores de tu primer prototipo',
    ],
  },
  {
    title: 'Testear',
    subtitle: 'Validar y aprender',
    description: 'La última fase es probar nuestros prototipos con usuarios reales. Obtenemos feedback valioso, refinamos nuestras soluciones y aprendemos más sobre los usuarios y el problema.',
    color: 'from-purple-400 to-pink-500',
    icon: '🧪',
    activities: [
      'Tests con usuarios',
      'Recopilación de feedback',
      'Iteración de soluciones',
      'Validación de hipótesis',
    ],
    tips: [
      'Crea escenarios realistas',
      'Observa más que preguntes',
      'Acepta críticas constructivas',
      'Itera basándote en aprendizajes',
    ],
  },
];

export function PhaseExplorer({
  currentPhase,
  onPhaseChange,
  onPhaseComplete,
  completedPhases,
  onStartQuiz,
}: PhaseExplorerProps) {
  const handleNext = () => {
    if (currentPhase < phasesData.length - 1) {
      onPhaseComplete(currentPhase);
      onPhaseChange(currentPhase + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPhase > 0) {
      onPhaseChange(currentPhase - 1);
    }
  };

  const allPhasesCompleted = completedPhases.length === phasesData.length;

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhase}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            <PhaseCard phase={phasesData[currentPhase]} />
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between mt-8">
          <Button
            onClick={handlePrevious}
            disabled={currentPhase === 0}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Anterior
          </Button>

          {allPhasesCompleted && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <Button
                onClick={onStartQuiz}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white flex items-center gap-2"
              >
                <Trophy className="w-5 h-5" />
                ¡Prueba tus conocimientos!
              </Button>
            </motion.div>
          )}

          <Button
            onClick={handleNext}
            disabled={currentPhase === phasesData.length - 1}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            Siguiente
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
