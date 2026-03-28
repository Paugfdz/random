import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight, Plus, Trash2, Smile, Frown, Meh } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

interface JourneyStep {
  id: number;
  phase: string;
  touchpoint: string;
  emotion: "happy" | "neutral" | "sad";
  action: string;
}

const phases = ["Descubrimiento", "Consideración", "Decisión", "Uso", "Lealtad"];

export function InteractiveJourneyBuilder() {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [journeySteps, setJourneySteps] = useState<JourneyStep[]>([]);
  const [newStep, setNewStep] = useState({
    touchpoint: "",
    emotion: "neutral" as "happy" | "neutral" | "sad",
    action: "",
  });

  const addStep = () => {
    if (newStep.touchpoint && newStep.action) {
      setJourneySteps([
        ...journeySteps,
        {
          id: Date.now(),
          phase: phases[currentPhase],
          touchpoint: newStep.touchpoint,
          emotion: newStep.emotion,
          action: newStep.action,
        },
      ]);
      setNewStep({ touchpoint: "", emotion: "neutral", action: "" });
      if (currentPhase < phases.length - 1) {
        setCurrentPhase(currentPhase + 1);
      }
    }
  };

  const removeStep = (id: number) => {
    setJourneySteps(journeySteps.filter((step) => step.id !== id));
  };

  const getEmotionIcon = (emotion: string) => {
    switch (emotion) {
      case "happy":
        return <Smile className="w-5 h-5 text-green-500" />;
      case "sad":
        return <Frown className="w-5 h-5 text-red-500" />;
      default:
        return <Meh className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getEmotionColor = (emotion: string) => {
    switch (emotion) {
      case "happy":
        return "bg-green-100 border-green-300";
      case "sad":
        return "bg-red-100 border-red-300";
      default:
        return "bg-yellow-100 border-yellow-300";
    }
  };

  return (
    <section id="builder" className="px-6 py-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Constructor Interactivo
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          ¡Crea tu primer user journey! Sigue las fases y añade puntos de contacto paso a paso
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Builder Panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">{currentPhase + 1}</span>
                <span>/</span>
                <span className="text-gray-400">{phases.length}</span>
                <Badge className="ml-auto bg-gradient-to-r from-purple-500 to-blue-500">
                  {phases[currentPhase]}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Phase Progress */}
              <div className="flex gap-2 mb-6">
                {phases.map((phase, index) => (
                  <button
                    key={phase}
                    onClick={() => setCurrentPhase(index)}
                    className={`flex-1 h-2 rounded-full transition-all ${
                      index === currentPhase
                        ? "bg-gradient-to-r from-purple-500 to-blue-500"
                        : index < currentPhase
                        ? "bg-green-400"
                        : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Punto de Contacto</label>
                <Input
                  placeholder="Ej: Landing page, Email, App móvil..."
                  value={newStep.touchpoint}
                  onChange={(e) =>
                    setNewStep({ ...newStep, touchpoint: e.target.value })
                  }
                  className="bg-white"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Acción del Usuario</label>
                <Input
                  placeholder="Ej: Busca información, Se registra..."
                  value={newStep.action}
                  onChange={(e) => setNewStep({ ...newStep, action: e.target.value })}
                  className="bg-white"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Emoción</label>
                <div className="flex gap-2">
                  {[
                    { value: "happy", icon: Smile, label: "Feliz", color: "bg-green-100 hover:bg-green-200 border-green-300" },
                    { value: "neutral", icon: Meh, label: "Neutral", color: "bg-yellow-100 hover:bg-yellow-200 border-yellow-300" },
                    { value: "sad", icon: Frown, label: "Frustrado", color: "bg-red-100 hover:bg-red-200 border-red-300" },
                  ].map((emotion) => (
                    <button
                      key={emotion.value}
                      onClick={() =>
                        setNewStep({
                          ...newStep,
                          emotion: emotion.value as "happy" | "neutral" | "sad",
                        })
                      }
                      className={`flex-1 p-3 rounded-lg border-2 transition-all ${emotion.color} ${
                        newStep.emotion === emotion.value
                          ? "ring-2 ring-purple-500 scale-105"
                          : ""
                      }`}
                    >
                      <emotion.icon className="w-6 h-6 mx-auto mb-1" />
                      <div className="text-sm">{emotion.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              <Button
                onClick={addStep}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                disabled={!newStep.touchpoint || !newStep.action}
              >
                <Plus className="w-5 h-5 mr-2" />
                Añadir Paso
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Journey Visualization */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-blue-200 h-full">
            <CardHeader>
              <CardTitle>Tu User Journey</CardTitle>
            </CardHeader>
            <CardContent>
              {journeySteps.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  <p>Añade pasos para ver tu journey aquí</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence>
                    {journeySteps.map((step, index) => (
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className={`p-4 rounded-lg border-2 ${getEmotionColor(
                          step.emotion
                        )} relative group`}
                      >
                        <button
                          onClick={() => removeStep(step.id)}
                          className="absolute top-2 right-2 p-1 rounded-full bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-100"
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </button>

                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white">
                              {index + 1}
                            </div>
                          </div>
                          <div className="flex-1">
                            <Badge variant="outline" className="mb-2">
                              {step.phase}
                            </Badge>
                            <div className="flex items-center gap-2 mb-1">
                              {getEmotionIcon(step.emotion)}
                              <span className="text-gray-800">{step.touchpoint}</span>
                            </div>
                            <p className="text-sm text-gray-600">{step.action}</p>
                          </div>
                        </div>

                        {index < journeySteps.length - 1 && (
                          <div className="flex justify-center mt-2">
                            <ArrowRight className="w-5 h-5 text-gray-400" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {journeySteps.length >= 3 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg text-center"
                    >
                      <Check className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <p className="text-green-700">
                        ¡Excelente! Has creado un user journey completo
                      </p>
                    </motion.div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
