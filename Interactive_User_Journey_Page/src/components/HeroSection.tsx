import { motion } from "motion/react";
import { Map, Compass, Lightbulb } from "lucide-react";
import { Button } from "./ui/button";

export function HeroSection() {
  const scrollToBuilder = () => {
    document.getElementById("builder")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-32">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-lg"
          >
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700">Aprende de forma interactiva</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mb-4 text-[40px]"
          >
            User Journeys
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent"
          >
            Domina el Arte de los User Journeys
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-8 text-gray-700 max-w-2xl mx-auto"
          >
            Descubre cómo crear experiencias de usuario excepcionales mediante el mapeo de viajes del usuario. 
            Aprende paso a paso con ejemplos interactivos y divertidos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              onClick={scrollToBuilder}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all"
            >
              <Compass className="w-5 h-5 mr-2" />
              Comenzar a Aprender
            </Button>
            <Button
              onClick={() => document.getElementById("examples")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              variant="outline"
              className="bg-white/80 backdrop-blur-sm hover:bg-white"
            >
              <Map className="w-5 h-5 mr-2" />
              Ver Ejemplos
            </Button>
          </motion.div>
        </motion.div>

        {/* Animated icons */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Map, title: "Visualiza", delay: 0.6 },
            { icon: Compass, title: "Explora", delay: 0.7 },
            { icon: Lightbulb, title: "Crea", delay: 0.8 },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay, duration: 0.6 }}
              className="flex flex-col items-center gap-3 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <span className="text-gray-800">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
