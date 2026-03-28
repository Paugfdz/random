import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, XCircle, Trophy, RotateCcw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const quizQuestions = [
  {
    question: "¿Qué es un User Journey?",
    options: [
      "Un mapa de navegación del sitio web",
      "Un documento técnico de arquitectura",
      "Un mapa visual de la experiencia completa del usuario",
      "Una lista de funcionalidades del producto",
    ],
    correctAnswer: 2,
    explanation:
      "Un User Journey es un mapa visual que representa toda la experiencia del usuario al interactuar con tu producto o servicio.",
  },
  {
    question: "¿Cuál es el primer paso para crear un User Journey?",
    options: [
      "Diseñar la interfaz",
      "Identificar el objetivo del usuario",
      "Crear wireframes",
      "Escribir código",
    ],
    correctAnswer: 1,
    explanation:
      "Antes de mapear el journey, necesitas entender qué quiere lograr tu usuario.",
  },
  {
    question: "¿Qué son los 'Pain Points'?",
    options: [
      "Puntos de contacto con el usuario",
      "Frustraciones y problemas del usuario",
      "Objetivos del negocio",
      "Métricas de rendimiento",
    ],
    correctAnswer: 1,
    explanation:
      "Los Pain Points son las frustraciones, barreras y problemas que enfrenta el usuario en su camino.",
  },
  {
    question: "¿Por qué es importante mapear las emociones en un User Journey?",
    options: [
      "Para hacer el documento más bonito",
      "Es un requisito obligatorio",
      "La experiencia emocional impacta en la satisfacción y lealtad",
      "Para llenar espacio en el mapa",
    ],
    correctAnswer: 2,
    explanation:
      "Las emociones del usuario son tan importantes como la funcionalidad, ya que impactan directamente en su satisfacción y probabilidad de volver.",
  },
];

export function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    if (answerIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const currentQ = quizQuestions[currentQuestion];

  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          Pon a Prueba tus Conocimientos
        </h2>
        <p className="text-gray-600">
          Completa este quiz rápido para verificar lo que has aprendido
        </p>
      </motion.div>

      <Card className="bg-white/80 backdrop-blur-sm border-2 border-orange-200 overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-orange-500 to-red-500" />

        {!quizCompleted ? (
          <>
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="secondary">
                  Pregunta {currentQuestion + 1} de {quizQuestions.length}
                </Badge>
                <Badge className="bg-gradient-to-r from-purple-500 to-blue-500">
                  Puntos: {score}
                </Badge>
              </div>
              <CardTitle className="text-gray-800">{currentQ.question}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-3"
                >
                  {currentQ.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrect = index === currentQ.correctAnswer;
                    const showCorrect = showResult && isCorrect;
                    const showIncorrect = showResult && isSelected && !isCorrect;

                    return (
                      <motion.button
                        key={index}
                        onClick={() => !showResult && handleAnswer(index)}
                        disabled={showResult}
                        whileHover={!showResult ? { scale: 1.02 } : {}}
                        whileTap={!showResult ? { scale: 0.98 } : {}}
                        className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                          showCorrect
                            ? "bg-green-100 border-green-500"
                            : showIncorrect
                            ? "bg-red-100 border-red-500"
                            : isSelected
                            ? "border-purple-500 bg-purple-50"
                            : "border-gray-200 hover:border-purple-300 bg-white"
                        } ${showResult ? "cursor-not-allowed" : "cursor-pointer"}`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-gray-800">{option}</span>
                          {showCorrect && (
                            <CheckCircle2 className="w-6 h-6 text-green-500" />
                          )}
                          {showIncorrect && (
                            <XCircle className="w-6 h-6 text-red-500" />
                          )}
                        </div>
                      </motion.button>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-lg ${
                      selectedAnswer === currentQ.correctAnswer
                        ? "bg-green-50 border-2 border-green-200"
                        : "bg-blue-50 border-2 border-blue-200"
                    }`}
                  >
                    <p
                      className={
                        selectedAnswer === currentQ.correctAnswer
                          ? "text-green-800"
                          : "text-blue-800"
                      }
                    >
                      {selectedAnswer === currentQ.correctAnswer
                        ? "✅ ¡Correcto!"
                        : "💡 Explicación:"}{" "}
                      {currentQ.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {showResult && (
                <Button
                  onClick={nextQuestion}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                >
                  {currentQuestion < quizQuestions.length - 1
                    ? "Siguiente Pregunta"
                    : "Ver Resultados"}
                </Button>
              )}
            </CardContent>
          </>
        ) : (
          <CardContent className="py-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-12 h-12 text-white" />
              </div>

              <h3 className="mb-4 text-gray-800">¡Quiz Completado!</h3>

              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full">
                  <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                    {score}
                  </span>
                  <span className="text-gray-600">/ {quizQuestions.length}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-8">
                {score === quizQuestions.length
                  ? "¡Perfecto! Dominas los conceptos de User Journey 🎉"
                  : score >= quizQuestions.length / 2
                  ? "¡Buen trabajo! Vas por buen camino 👏"
                  : "Sigue practicando, ¡tú puedes! 💪"}
              </p>

              <Button
                onClick={restartQuiz}
                variant="outline"
                className="bg-white hover:bg-gray-50"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reintentar Quiz
              </Button>
            </motion.div>
          </CardContent>
        )}
      </Card>
    </section>
  );
}
