import { motion } from "motion/react";
import { User, Target, Route, Heart, AlertCircle, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const concepts = [
  {
    icon: User,
    title: "¿Qué es un User Journey?",
    description: "Es un mapa visual que representa la experiencia completa de un usuario al interactuar con tu producto o servicio, desde el primer contacto hasta alcanzar su objetivo.",
    color: "from-purple-500 to-purple-600",
    badge: "Básico",
  },
  {
    icon: Target,
    title: "Objetivos del Usuario",
    description: "Identifica qué quiere lograr tu usuario. Cada journey comienza con una meta clara: comprar, aprender, resolver un problema, etc.",
    color: "from-blue-500 to-blue-600",
    badge: "Importante",
  },
  {
    icon: Route,
    title: "Puntos de Contacto",
    description: "Son todos los momentos donde el usuario interactúa con tu producto: landing page, app, email, soporte, etc.",
    color: "from-pink-500 to-pink-600",
    badge: "Clave",
  },
  {
    icon: Heart,
    title: "Emociones",
    description: "Mapea cómo se siente el usuario en cada etapa. La experiencia emocional es tan importante como la funcional.",
    color: "from-red-500 to-red-600",
    badge: "Esencial",
  },
  {
    icon: AlertCircle,
    title: "Pain Points",
    description: "Identifica frustraciones, barreras y problemas que enfrenta el usuario en su camino. Estos son oportunidades de mejora.",
    color: "from-orange-500 to-orange-600",
    badge: "Crítico",
  },
  {
    icon: TrendingUp,
    title: "Oportunidades",
    description: "Descubre áreas donde puedes innovar y mejorar la experiencia para deleitar a tus usuarios.",
    color: "from-green-500 to-green-600",
    badge: "Acción",
  },
];

export function ConceptCards() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Conceptos Fundamentales
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Antes de crear tu primer user journey, familiarízate con estos conceptos esenciales
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {concepts.map((concept, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="h-full border-2 hover:border-purple-200 transition-all bg-white/80 backdrop-blur-sm overflow-hidden group">
              <div className={`h-1 bg-gradient-to-r ${concept.color}`} />
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${concept.color} group-hover:scale-110 transition-transform`}>
                    <concept.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary">{concept.badge}</Badge>
                </div>
                <CardTitle className="text-gray-800">{concept.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{concept.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
