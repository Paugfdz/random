import { motion } from 'motion/react';
import { Check } from 'lucide-react';

interface ProgressTrackerProps {
  currentPhase: number;
  completedPhases: number[];
  onPhaseClick: (phase: number) => void;
}

const phases = [
  { name: 'Empatizar', color: 'from-red-400 to-pink-500' },
  { name: 'Definir', color: 'from-orange-400 to-yellow-500' },
  { name: 'Idear', color: 'from-green-400 to-emerald-500' },
  { name: 'Prototipar', color: 'from-blue-400 to-cyan-500' },
  { name: 'Testear', color: 'from-purple-400 to-pink-500' },
];

export function ProgressTracker({ currentPhase, completedPhases, onPhaseClick }: ProgressTrackerProps) {
  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-2">
          {phases.map((phase, index) => (
            <div key={index} className="flex items-center flex-1">
              <button
                onClick={() => onPhaseClick(index)}
                className="relative group flex flex-col items-center cursor-pointer"
              >
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                    completedPhases.includes(index)
                      ? `bg-gradient-to-r ${phase.color}`
                      : currentPhase === index
                      ? `bg-gradient-to-r ${phase.color}`
                      : 'bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {completedPhases.includes(index) ? (
                    <Check className="w-6 h-6 text-white" />
                  ) : (
                    <span className="text-white">{index + 1}</span>
                  )}
                </motion.div>
                <span className="text-xs mt-2 text-center hidden sm:block">
                  {phase.name}
                </span>
              </button>
              
              {index < phases.length - 1 && (
                <div className="flex-1 h-1 bg-gray-200 mx-2">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${phase.color}`}
                    initial={{ width: 0 }}
                    animate={{
                      width: completedPhases.includes(index) ? '100%' : '0%',
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
