import { motion } from 'motion/react';
import { Lightbulb, Users, Rocket, Target, Zap, Heart } from 'lucide-react';

export function ContextSection() {
  const benefits = [
    {
      icon: Users,
      title: "Centrado en el usuario",
      description: "Pone las necesidades de las personas en el centro del proceso de innovación"
    },
    {
      icon: Lightbulb,
      title: "Creatividad sin límites",
      description: "Fomenta el pensamiento divergente y la generación de ideas innovadoras"
    },
    {
      icon: Rocket,
      title: "Prototipado rápido",
      description: "Permite validar ideas rápidamente antes de invertir grandes recursos"
    },
    {
      icon: Target,
      title: "Soluciones efectivas",
      description: "Aborda problemas complejos con soluciones probadas y centradas en el usuario"
    }
  ];

  const useCases = [
    { emoji: "🎨", text: "Diseño de productos y servicios" },
    { emoji: "💼", text: "Innovación empresarial" },
    { emoji: "🏥", text: "Mejora de experiencias" },
    { emoji: "🎓", text: "Educación y aprendizaje" },
    { emoji: "🌍", text: "Solución de problemas sociales" },
    { emoji: "💡", text: "Desarrollo de startups" }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-transparent to-orange-100/50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full mb-6">
            <Zap className="w-5 h-5" />
            <span>¿Qué es Design Thinking?</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            Una metodología que transforma ideas en realidad
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Design Thinking es un enfoque de innovación centrado en las personas que combina 
            creatividad, colaboración y pensamiento analítico para resolver problemas complejos 
            y crear soluciones que realmente importan.
          </p>
        </motion.div>

        {/* What is it - detailed explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12 border border-purple-100"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl">La Esencia del Design Thinking</h3>
              </div>
              <p className="text-gray-700 mb-4">
                No es solo un proceso, es una <strong>mentalidad</strong> que te permite abordar 
                desafíos desde una perspectiva humana y empática. Se trata de entender profundamente 
                a las personas, cuestionar suposiciones y redefinir problemas para descubrir estrategias 
                y soluciones alternativas.
              </p>
              <p className="text-gray-700">
                A diferencia de los enfoques tradicionales, Design Thinking es <strong>iterativo</strong>, 
                lo que significa que puedes volver atrás, ajustar y mejorar constantemente hasta encontrar 
                la solución perfecta.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "5", label: "Fases iterativas", color: "from-purple-500 to-pink-500" },
                { number: "∞", label: "Posibilidades creativas", color: "from-pink-500 to-orange-500" },
                { number: "100%", label: "Centrado en personas", color: "from-orange-500 to-red-500" },
                { number: "🚀", label: "Acción rápida", color: "from-purple-600 to-blue-500" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-white text-center`}
                >
                  <div className="text-3xl mb-2">{stat.number}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Benefits section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-3xl text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            ¿Por qué usar Design Thinking?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-purple-300 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-purple-600" />
                </div>
                <h4 className="mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Use cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <h3 className="text-3xl text-center mb-3">¿Para qué se utiliza?</h3>
          <p className="text-center text-white/90 mb-8 max-w-2xl mx-auto">
            Design Thinking es una herramienta versátil que se aplica en múltiples industrias y contextos
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
              >
                <span className="text-2xl">{useCase.emoji}</span>
                <span>{useCase.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
