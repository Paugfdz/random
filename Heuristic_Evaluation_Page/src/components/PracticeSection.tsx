import { useState } from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const scenarios = [
  {
    id: 1,
    title: 'Formulario de Registro',
    image: '📝',
    description: 'Un usuario intenta registrarse pero el botón "Registrarse" no hace nada cuando falta el email.',
    problems: [
      {
        text: 'No hay feedback visual cuando falta información',
        heuristic: 'Visibilidad del estado del sistema',
        severity: 'Alto'
      },
      {
        text: 'No hay prevención de errores (el botón debería estar deshabilitado)',
        heuristic: 'Prevención de errores',
        severity: 'Alto'
      }
    ]
  },
  {
    id: 2,
    title: 'Proceso de Pago',
    image: '💳',
    description: 'El usuario llega a la página de confirmación de pago pero no hay forma de volver atrás y editar la dirección.',
    problems: [
      {
        text: 'Falta de control para deshacer o modificar',
        heuristic: 'Control y libertad del usuario',
        severity: 'Crítico'
      },
      {
        text: 'No hay botón de "Editar" o "Volver"',
        heuristic: 'Prevención de errores',
        severity: 'Alto'
      }
    ]
  },
  {
    id: 3,
    title: 'Dashboard Empresarial',
    image: '📊',
    description: 'Una aplicación empresarial muestra 15 gráficos diferentes en la misma pantalla, todos con colores brillantes.',
    problems: [
      {
        text: 'Demasiada información simultánea',
        heuristic: 'Diseño estético y minimalista',
        severity: 'Medio'
      },
      {
        text: 'Dificulta reconocer qué es importante',
        heuristic: 'Reconocer antes que recordar',
        severity: 'Medio'
      }
    ]
  },
  {
    id: 4,
    title: 'App de Correo',
    image: '✉️',
    description: 'Aparece un mensaje: "ERROR 500: Internal Server Exception at line 245". El usuario no sabe qué hacer.',
    problems: [
      {
        text: 'Mensaje técnico sin contexto para el usuario',
        heuristic: 'Ayuda a reconocer y recuperarse de errores',
        severity: 'Crítico'
      },
      {
        text: 'No usa lenguaje del usuario',
        heuristic: 'Relación entre el sistema y el mundo real',
        severity: 'Alto'
      }
    ]
  }
];

export default function PracticeSection() {
  const [selectedScenario, setSelectedScenario] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  const scenario = scenarios[selectedScenario];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Practica Identificando Problemas
        </h2>
        <p className="text-gray-600">
          Analiza estos escenarios reales y descubre qué heurísticas se están violando
        </p>
      </motion.div>

      <div className="flex gap-3 mb-8 overflow-x-auto pb-4">
        {scenarios.map((s, index) => (
          <button
            key={s.id}
            onClick={() => {
              setSelectedScenario(index);
              setShowSolution(false);
            }}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
              selectedScenario === index
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-purple-300'
            }`}
          >
            {s.image} Caso {index + 1}
          </button>
        ))}
      </div>

      <Card className="p-8 mb-6">
        <div className="text-6xl text-center mb-6">{scenario.image}</div>
        <h3 className="text-2xl mb-4 text-center">{scenario.title}</h3>
        
        <div className="bg-gray-50 p-6 rounded-xl mb-6">
          <p className="text-gray-700">{scenario.description}</p>
        </div>

        <div className="flex items-center gap-3 mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <Lightbulb className="w-6 h-6 text-yellow-600 flex-shrink-0" />
          <p className="text-sm text-yellow-800">
            <strong>Ejercicio:</strong> Antes de ver la solución, intenta identificar qué heurísticas se rompen y por qué.
          </p>
        </div>

        {!showSolution ? (
          <Button
            onClick={() => setShowSolution(true)}
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500"
          >
            Ver Solución y Análisis
          </Button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h4 className="flex items-center gap-2 text-lg">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              Problemas de Usabilidad Identificados:
            </h4>
            
            {scenario.problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-red-50 border border-red-200 rounded-lg"
              >
                <div className="flex items-start gap-3 mb-2">
                  <span className={`px-2 py-1 rounded text-xs ${
                    problem.severity === 'Crítico'
                      ? 'bg-red-600 text-white'
                      : problem.severity === 'Alto'
                      ? 'bg-orange-500 text-white'
                      : 'bg-yellow-500 text-white'
                  }`}>
                    {problem.severity}
                  </span>
                  <div className="flex-1">
                    <p className="text-red-800 mb-1">{problem.text}</p>
                    <p className="text-sm text-red-600">
                      <strong>Heurística que se rompe:</strong> {problem.heuristic}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="pt-4 flex gap-3">
              <Button
                onClick={() => setShowSolution(false)}
                variant="outline"
                className="flex-1"
              >
                Ocultar Solución
              </Button>
              <Button
                onClick={() => {
                  const nextIndex = (selectedScenario + 1) % scenarios.length;
                  setSelectedScenario(nextIndex);
                  setShowSolution(false);
                }}
                className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500"
              >
                Siguiente Caso
              </Button>
            </div>
          </motion.div>
        )}
      </Card>

      <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
        <div className="flex items-start gap-4">
          <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="mb-2">Consejo de Experto</h4>
            <p className="text-sm text-gray-700">
              Al hacer evaluaciones heurísticas, documenta cada problema con: (1) Descripción del problema, 
              (2) Heurística que se rompe, (3) Severidad, y (4) Recomendación de solución. Esto ayudará a priorizar 
              las mejoras.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
