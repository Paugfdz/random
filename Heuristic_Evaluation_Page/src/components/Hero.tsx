import { motion } from 'motion/react';
import { Lightbulb, Brain, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
          >
            <Lightbulb className="w-5 h-5" />
            <span>Aprende de forma interactiva</span>
          </motion.div>

          <h1 className="text-6xl mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Evaluaciones Heurísticas
          </h1>
          
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Descubre los 10 principios de usabilidad de Jakob Nielsen de una manera 
            divertida e interactiva. ¡Conviértete en un experto en UX!
          </p>

          <div className="flex gap-6 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-6 py-4 bg-white/20 backdrop-blur-sm rounded-2xl"
            >
              <Brain className="w-8 h-8 text-yellow-300" />
              <div className="text-left">
                <div className="text-sm text-purple-200">Aprende</div>
                <div>10 Heurísticas</div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-6 py-4 bg-white/20 backdrop-blur-sm rounded-2xl"
            >
              <Zap className="w-8 h-8 text-yellow-300" />
              <div className="text-left">
                <div className="text-sm text-purple-200">Practica</div>
                <div>Interactivamente</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="rgb(250, 245, 255)"
          />
        </svg>
      </div>
    </div>
  );
}
