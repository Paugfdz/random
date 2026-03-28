import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, XCircle, Trophy, RotateCcw } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Progress } from './ui/progress';

interface InteractiveQuizProps {
  onClose: () => void;
}

const quizQuestions = [
  {
    question: '¿Cuál es el objetivo principal de la fase de Empatizar?',
    options: [
      'Crear prototipos rápidamente',
      'Comprender profundamente al usuario y sus necesidades',
      'Generar muchas ideas creativas',
      'Testear la solución final',
    ],
    correct: 1,
    explanation: 'La empatía busca comprender al usuario desde su perspectiva.',
  },
  {
    question: '¿Qué pregunta es característica de la fase de Definir?',
    options: [
      '¿Qué materiales necesitamos?',
      '¿Cómo podríamos...?',
      '¿Cuánto costará?',
      '¿Cuándo terminaremos?',
    ],
    correct: 1,
    explanation: 'La pregunta "¿Cómo podríamos...?" (HMW) es clave para definir el desafío.',
  },
  {
    question: 'En la fase de Ideación, ¿qué es más importante?',
    options: [
      'Calidad sobre cantidad',
      'Elegir la primera idea',
      'Cantidad sobre calidad',
      'Criticar todas las ideas',
    ],
    correct: 2,
    explanation: 'En ideación buscamos generar muchas ideas sin juzgar, luego seleccionamos.',
  },
  {
    question: '¿Qué tipo de prototipo es mejor para empezar?',
    options: [
      'Alta fidelidad y costoso',
      'Baja fidelidad y rápido',
      'Producto final',
      'Digital solamente',
    ],
    correct: 1,
    explanation: 'Los prototipos de baja fidelidad permiten iterar rápido y aprender más.',
  },
  {
    question: '¿Cuál es el propósito de Testear?',
    options: [
      'Demostrar que tenemos razón',
      'Vender el producto',
      'Aprender y mejorar la solución',
      'Terminar el proyecto',
    ],
    correct: 2,
    explanation: 'Testear nos permite aprender del usuario y mejorar nuestra solución.',
  },
];

export function InteractiveQuiz({ onClose }: InteractiveQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (index: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(index);
      setShowResult(true);
      if (index === quizQuestions[currentQuestion].correct) {
        setScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl"
      >
        <Card className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl">Quiz de Design Thinking</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {!quizCompleted ? (
            <>
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Pregunta {currentQuestion + 1} de {quizQuestions.length}</span>
                  <span>Puntuación: {score}</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl mb-6">
                    {quizQuestions[currentQuestion].question}
                  </h3>

                  <div className="space-y-3 mb-6">
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={selectedAnswer !== null}
                        className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                          selectedAnswer === null
                            ? 'border-gray-200 hover:border-purple-400 hover:bg-purple-50'
                            : selectedAnswer === index
                            ? index === quizQuestions[currentQuestion].correct
                              ? 'border-green-500 bg-green-50'
                              : 'border-red-500 bg-red-50'
                            : index === quizQuestions[currentQuestion].correct
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 opacity-50'
                        }`}
                        whileHover={selectedAnswer === null ? { scale: 1.02 } : {}}
                        whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                      >
                        <div className="flex items-center gap-3">
                          {showResult && (
                            <>
                              {index === quizQuestions[currentQuestion].correct ? (
                                <CheckCircle className="w-5 h-5 text-green-500" />
                              ) : selectedAnswer === index ? (
                                <XCircle className="w-5 h-5 text-red-500" />
                              ) : null}
                            </>
                          )}
                          <span>{option}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  {showResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-lg mb-6 ${
                        selectedAnswer === quizQuestions[currentQuestion].correct
                          ? 'bg-green-50 border-2 border-green-200'
                          : 'bg-blue-50 border-2 border-blue-200'
                      }`}
                    >
                      <p className="text-sm">
                        {quizQuestions[currentQuestion].explanation}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>

              {showResult && (
                <Button
                  onClick={handleNext}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  {currentQuestion < quizQuestions.length - 1 ? 'Siguiente' : 'Ver Resultados'}
                </Button>
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              >
                <Trophy className="w-20 h-20 mx-auto mb-6 text-yellow-500" />
              </motion.div>
              
              <h3 className="text-3xl mb-4">¡Quiz Completado!</h3>
              
              <p className="text-xl mb-2">
                Tu puntuación: {score} de {quizQuestions.length}
              </p>
              
              <p className="text-gray-600 mb-8">
                {score === quizQuestions.length
                  ? '¡Perfecto! Dominas Design Thinking 🎉'
                  : score >= quizQuestions.length * 0.7
                  ? '¡Muy bien! Vas por buen camino 👏'
                  : '¡Sigue aprendiendo! La práctica hace al maestro 💪'}
              </p>

              <div className="flex gap-4 justify-center">
                <Button
                  onClick={handleRestart}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reintentar
                </Button>
                <Button
                  onClick={onClose}
                  className="bg-gradient-to-r from-purple-600 to-pink-600"
                >
                  Cerrar
                </Button>
              </div>
            </motion.div>
          )}
        </Card>
      </motion.div>
    </motion.div>
  );
}
