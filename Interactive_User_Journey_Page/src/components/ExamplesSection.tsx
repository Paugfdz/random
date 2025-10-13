import { motion } from "motion/react";
import { ShoppingCart, Smartphone, GraduationCap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const examples = [
  {
    id: "ecommerce",
    title: "E-commerce",
    icon: ShoppingCart,
    color: "from-blue-500 to-cyan-500",
    steps: [
      {
        phase: "Descubrimiento",
        touchpoint: "Anuncio en redes sociales",
        emotion: "happy",
        action: "Ve un producto interesante",
        painPoint: null,
      },
      {
        phase: "Consideración",
        touchpoint: "Landing page",
        emotion: "neutral",
        action: "Compara productos y precios",
        painPoint: "Demasiadas opciones",
      },
      {
        phase: "Decisión",
        touchpoint: "Carrito de compras",
        emotion: "sad",
        action: "Intenta finalizar compra",
        painPoint: "Costos de envío inesperados",
      },
      {
        phase: "Uso",
        touchpoint: "Email de confirmación",
        emotion: "happy",
        action: "Recibe confirmación y tracking",
        painPoint: null,
      },
      {
        phase: "Lealtad",
        touchpoint: "Programa de recompensas",
        emotion: "happy",
        action: "Recibe descuento para próxima compra",
        painPoint: null,
      },
    ],
  },
  {
    id: "app",
    title: "App Móvil",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    steps: [
      {
        phase: "Descubrimiento",
        touchpoint: "App Store",
        emotion: "neutral",
        action: "Busca una app de productividad",
        painPoint: null,
      },
      {
        phase: "Consideración",
        touchpoint: "Página de la app",
        emotion: "happy",
        action: "Lee reseñas positivas",
        painPoint: null,
      },
      {
        phase: "Decisión",
        touchpoint: "Onboarding",
        emotion: "sad",
        action: "Se registra",
        painPoint: "Proceso de registro muy largo",
      },
      {
        phase: "Uso",
        touchpoint: "Interfaz principal",
        emotion: "happy",
        action: "Crea su primera tarea",
        painPoint: null,
      },
      {
        phase: "Lealtad",
        touchpoint: "Notificaciones",
        emotion: "neutral",
        action: "Recibe recordatorios útiles",
        painPoint: "Demasiadas notificaciones",
      },
    ],
  },
  {
    id: "education",
    title: "Plataforma Educativa",
    icon: GraduationCap,
    color: "from-green-500 to-teal-500",
    steps: [
      {
        phase: "Descubrimiento",
        touchpoint: "Blog educativo",
        emotion: "happy",
        action: "Lee un artículo interesante",
        painPoint: null,
      },
      {
        phase: "Consideración",
        touchpoint: "Catálogo de cursos",
        emotion: "neutral",
        action: "Explora cursos disponibles",
        painPoint: null,
      },
      {
        phase: "Decisión",
        touchpoint: "Vista previa del curso",
        emotion: "happy",
        action: "Ve una clase gratis",
        painPoint: null,
      },
      {
        phase: "Uso",
        touchpoint: "Plataforma de aprendizaje",
        emotion: "sad",
        action: "Accede al contenido",
        painPoint: "Interfaz confusa",
      },
      {
        phase: "Lealtad",
        touchpoint: "Certificado",
        emotion: "happy",
        action: "Completa el curso",
        painPoint: null,
      },
    ],
  },
];

export function ExamplesSection() {
  const getEmotionEmoji = (emotion: string) => {
    switch (emotion) {
      case "happy":
        return "😊";
      case "sad":
        return "😞";
      default:
        return "😐";
    }
  };

  return (
    <section id="examples" className="px-6 py-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
          Ejemplos Reales
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explora user journeys de diferentes industrias y aprende de casos reales
        </p>
      </motion.div>

      <Tabs defaultValue="ecommerce" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/80 backdrop-blur-sm">
          {examples.map((example) => (
            <TabsTrigger
              key={example.id}
              value={example.id}
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
            >
              <example.icon className="w-4 h-4 mr-2" />
              {example.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {examples.map((example) => (
          <TabsContent key={example.id} value={example.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-2">
                <CardContent className="pt-6">
                  {/* Journey Path */}
                  <div className="relative">
                    {/* Connection Line */}
                    <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-purple-200 via-blue-200 to-pink-200" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                      {example.steps.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="relative"
                        >
                          {/* Step Card */}
                          <div
                            className={`p-4 rounded-xl bg-white border-2 ${
                              step.emotion === "happy"
                                ? "border-green-300"
                                : step.emotion === "sad"
                                ? "border-red-300"
                                : "border-yellow-300"
                            } hover:shadow-lg transition-shadow`}
                          >
                            {/* Step Number */}
                            <div
                              className={`w-8 h-8 rounded-full bg-gradient-to-r ${example.color} text-white flex items-center justify-center mb-3 mx-auto`}
                            >
                              {index + 1}
                            </div>

                            {/* Phase Badge */}
                            <Badge
                              variant="secondary"
                              className="mb-2 w-full justify-center text-xs"
                            >
                              {step.phase}
                            </Badge>

                            {/* Touchpoint */}
                            <h4 className="mb-2 text-center text-gray-800">
                              {step.touchpoint}
                            </h4>

                            {/* Action */}
                            <p className="text-sm text-gray-600 mb-2 text-center">
                              {step.action}
                            </p>

                            {/* Emotion */}
                            <div className="text-2xl text-center mb-2">
                              {getEmotionEmoji(step.emotion)}
                            </div>

                            {/* Pain Point */}
                            {step.painPoint && (
                              <div className="mt-2 p-2 bg-red-50 rounded-lg border border-red-200">
                                <p className="text-xs text-red-700 text-center">
                                  ⚠️ {step.painPoint}
                                </p>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Insights */}
                  <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
                    <h4 className="mb-2 text-purple-800">💡 Puntos Clave</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>
                        • Identifica los{" "}
                        <span className="text-red-600">pain points</span> para
                        mejorar la experiencia
                      </li>
                      <li>
                        • Mantén las emociones{" "}
                        <span className="text-green-600">positivas</span> en
                        momentos críticos
                      </li>
                      <li>
                        • Cada punto de contacto es una oportunidad para deleitar
                        al usuario
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
