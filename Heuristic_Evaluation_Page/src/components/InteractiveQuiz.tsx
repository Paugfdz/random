import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, XCircle, ArrowRight, Trophy, RotateCcw } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const quizQuestions = [
  {
    question: '¿Qué heurística se viola cuando un botón no muestra ningún feedback al hacer clic?',
    options: [
      'Visibilidad del estado del sistema',
      'Consistencia y estándares',
      'Diseño estético y minimalista',
      'Flexibilidad y eficiencia'
    ],
    correct: 0,
    explanation: '¡Correcto! La "Visibilidad del estado del sistema" requiere que el usuario siempre sepa qué está pasando. Un botón sin feedback viola este principio.',
  },
  {
    question: 'Un formulario que permite enviar datos vacíos viola principalmente:',
    options: [
      'Ayuda y documentación',
      'Prevención de errores',
      'Control y libertad del usuario',
      'Reconocer antes que recordar'
    ],
    correct: 1,
    explanation: '¡Exacto! "Prevención de errores" se trata de diseñar para que los errores no ocurran. Validar campos antes de enviar previene errores.',
  },
  {
    question: 'Si un sitio web usa "Trash" en una página y "Delete permanently" en otra para la misma acción, viola:',
    options: [
      'Diseño estético y minimalista',
      'Consistencia y estándares',
      'Relación entre el sistema y el mundo real',
      'Ayuda a reconocer errores'
    ],
    correct: 1,
    explanation: '¡Perfecto! "Consistencia y estándares" requiere que las mismas acciones usen las mismas palabras e íconos en todo el sistema.',
  },
  {
    question: '¿Cuál es un buen ejemplo de "Reconocer antes que recordar"?',
    options: [
      'Pedir al usuario que escriba el código exacto de un producto',
      'Mostrar una lista desplegable con opciones',
      'Usar términos técnicos precisos',
      'Ocultar opciones avanzadas'
    ],
    correct: 1,
    explanation: '¡Correcto! Mostrar opciones visibles (reconocer) es más fácil que pedirle al usuario que las recuerde de memoria.',
  },
  {
    question: 'Un mensaje de error que dice "ERR_402: Invalid input" viola:',
    options: [
      'Flexibilidad y eficiencia',
      'Diseño estético y minimalista',
      'Ayuda a reconocer y recuperarse de errores',
      'Visibilidad del estado del sistema'
    ],
    correct: 2,
    explanation: '¡Muy bien! Los mensajes de error deben ser claros, en lenguaje simple, y sugerir cómo solucionar el problema.',
  },
];

export default function InteractiveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(quizQuestions.length).fill(false));

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);
    const isCorrect = index === quizQuestions[currentQuestion].correct;
    
    if (isCorrect && !answeredQuestions[currentQuestion]) {
      setScore(score + 1);
    }
    
    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestion] = true;
    setAnsweredQuestions(newAnswered);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(new Array(quizQuestions.length).fill(false));
  };

  const question = quizQuestions[currentQuestion];
  const isCorrect = selectedAnswer === question.correct;

  if (showResult) {
    const percentage = (score / quizQuestions.length) * 100;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto"
      >
        <Card className="p-12 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Trophy className="w-24 h-24 mx-auto mb-6 text-yellow-500" />
          </motion.div>
          <h2 className="text-4xl mb-4">¡Quiz Completado!</h2>
          <p className="text-xl text-gray-600 mb-8">
            Tu puntuación: {score} de {quizQuestions.length} ({percentage.toFixed(0)}%)
          </p>
          
          <div className="mb-8">
            {percentage === 100 && (
              <p className="text-lg text-green-600">
                🎉 ¡Perfecto! Eres un experto en evaluaciones heurísticas.
              </p>
            )}
            {percentage >= 60 && percentage < 100 && (
              <p className="text-lg text-blue-600">
                👏 ¡Buen trabajo! Tienes un buen entendimiento de las heurísticas.
              </p>
            )}
            {percentage < 60 && (
              <p className="text-lg text-orange-600">
                📚 Sigue practicando. Revisa las heurísticas y vuelve a intentarlo.
              </p>
            )}
          </div>

          <Button
            onClick={resetQuiz}
            className="bg-gradient-to-r from-purple-500 to-blue-500"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Intentar de nuevo
          </Button>
        </Card>
      </motion.div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-600">
            Pregunta {currentQuestion + 1} de {quizQuestions.length}
          </span>
          <span className="text-sm">
            Puntuación: {score}/{quizQuestions.length}
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
          />
        </div>
      </motion.div>

      <Card className="p-8 mb-6">
        <h3 className="text-2xl mb-8">{question.question}</h3>

        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrectOption = index === question.correct;
            const showCorrect = selectedAnswer !== null && isCorrectOption;
            const showIncorrect = isSelected && !isCorrectOption;

            return (
              <motion.button
                key={index}
                whileHover={{ scale: selectedAnswer === null ? 1.02 : 1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
                className={`w-full p-4 rounded-xl text-left transition-all duration-300 flex items-center justify-between ${
                  showCorrect
                    ? 'bg-green-100 border-2 border-green-500'
                    : showIncorrect
                    ? 'bg-red-100 border-2 border-red-500'
                    : isSelected
                    ? 'bg-purple-100 border-2 border-purple-500'
                    : 'bg-gray-50 border-2 border-gray-200 hover:border-purple-300'
                }`}
              >
                <span>{option}</span>
                {showCorrect && <CheckCircle className="w-6 h-6 text-green-600" />}
                {showIncorrect && <XCircle className="w-6 h-6 text-red-600" />}
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence>
          {selectedAnswer !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6"
            >
              <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
                <p className={isCorrect ? 'text-green-800' : 'text-red-800'}>
                  {question.explanation}
                </p>
              </div>

              <Button
                onClick={nextQuestion}
                className="w-full mt-4 bg-gradient-to-r from-purple-500 to-blue-500"
              >
                {currentQuestion < quizQuestions.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </div>
  );
}
