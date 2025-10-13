import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Eye, 
  MessageSquare, 
  LogOut, 
  AlertCircle, 
  Ban, 
  RotateCcw,
  Lightbulb,
  FileText,
  LifeBuoy,
  ShieldAlert
} from 'lucide-react';
import { Card } from './ui/card';

const heuristics = [
  {
    id: 1,
    title: 'Visibilidad del estado del sistema',
    icon: Eye,
    color: 'from-blue-500 to-cyan-500',
    description: 'El sistema debe mantener siempre informado al usuario sobre lo que está pasando.',
    example: '✅ Barra de progreso al subir un archivo',
    badExample: '❌ Botón que no responde al hacer clic',
    tip: 'Proporciona feedback visual inmediato para cada acción del usuario.',
  },
  {
    id: 2,
    title: 'Relación entre el sistema y el mundo real',
    icon: MessageSquare,
    color: 'from-purple-500 to-pink-500',
    description: 'Usa el lenguaje y conceptos familiares para el usuario, no términos técnicos.',
    example: '✅ "Papelera" en lugar de "Directorio de eliminación"',
    badExample: '❌ Mensajes con códigos de error técnicos',
    tip: 'Habla el idioma del usuario, no el del sistema.',
  },
  {
    id: 3,
    title: 'Control y libertad del usuario',
    icon: LogOut,
    color: 'from-green-500 to-emerald-500',
    description: 'Los usuarios deben poder deshacer y rehacer acciones fácilmente.',
    example: '✅ Botón de "Deshacer" siempre visible',
    badExample: '❌ Confirmación irreversible sin advertencia',
    tip: 'Proporciona "salidas de emergencia" claras.',
  },
  {
    id: 4,
    title: 'Consistencia y estándares',
    icon: FileText,
    color: 'from-orange-500 to-red-500',
    description: 'Sigue convenciones y patrones establecidos. Las mismas palabras y acciones deben significar lo mismo.',
    example: '✅ Logo en la esquina superior izquierda lleva al inicio',
    badExample: '❌ Misma acción en diferentes páginas funciona diferente',
    tip: 'No hagas pensar al usuario si algo funciona diferente.',
  },
  {
    id: 5,
    title: 'Prevención de errores',
    icon: ShieldAlert,
    color: 'from-yellow-500 to-amber-500',
    description: 'Diseña para evitar que ocurran problemas en primer lugar.',
    example: '✅ Deshabilitar el botón "Enviar" si faltan campos',
    badExample: '❌ Permitir enviar formularios vacíos',
    tip: 'Mejor prevenir que mostrar mensajes de error.',
  },
  {
    id: 6,
    title: 'Reconocer antes que recordar',
    icon: Eye,
    color: 'from-indigo-500 to-purple-500',
    description: 'Minimiza la carga de memoria mostrando opciones visibles.',
    example: '✅ Autocompletar con sugerencias',
    badExample: '❌ Requirir recordar códigos exactos',
    tip: 'Haz visibles objetos, acciones y opciones.',
  },
  {
    id: 7,
    title: 'Flexibilidad y eficiencia de uso',
    icon: Lightbulb,
    color: 'from-teal-500 to-cyan-500',
    description: 'Proporciona atajos para usuarios expertos sin confundir a principiantes.',
    example: '✅ Atajos de teclado opcionales',
    badExample: '❌ Solo una forma lenta de hacer las cosas',
    tip: 'Acelera la interacción para usuarios frecuentes.',
  },
  {
    id: 8,
    title: 'Diseño estético y minimalista',
    icon: Lightbulb,
    color: 'from-pink-500 to-rose-500',
    description: 'No incluyas información irrelevante o poco necesaria.',
    example: '✅ Interfaz limpia y enfocada',
    badExample: '❌ Pantalla saturada de opciones innecesarias',
    tip: 'Cada elemento extra compite por la atención del usuario.',
  },
  {
    id: 9,
    title: 'Ayuda a reconocer y recuperarse de errores',
    icon: AlertCircle,
    color: 'from-red-500 to-pink-500',
    description: 'Los mensajes de error deben ser claros y sugerir soluciones.',
    example: '✅ "Contraseña incorrecta. ¿Olvidaste tu contraseña?"',
    badExample: '❌ "Error 401: Unauthorized"',
    tip: 'Mensajes en lenguaje simple con soluciones constructivas.',
  },
  {
    id: 10,
    title: 'Ayuda y documentación',
    icon: LifeBuoy,
    color: 'from-blue-500 to-indigo-500',
    description: 'Aunque lo ideal es no necesitarla, proporciona ayuda accesible.',
    example: '✅ FAQ contextual y buscable',
    badExample: '❌ Manual PDF de 200 páginas',
    tip: 'La ayuda debe ser fácil de buscar y centrada en tareas.',
  },
];

export default function HeuristicCards() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Las 10 Heurísticas de Nielsen
        </h2>
        <p className="text-gray-600">
          Haz clic en cada tarjeta para explorar en detalle
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {heuristics.map((heuristic, index) => {
          const Icon = heuristic.icon;
          const isSelected = selectedCard === heuristic.id;

          return (
            <motion.div
              key={heuristic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card
                className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                  isSelected ? 'border-purple-500 shadow-2xl' : 'border-transparent'
                }`}
                onClick={() => setSelectedCard(isSelected ? null : heuristic.id)}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${heuristic.color} text-white flex-shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="text-sm text-purple-600 mb-1">Heurística #{heuristic.id}</div>
                        <h3 className="text-xl">{heuristic.title}</h3>
                      </div>
                      <motion.div
                        animate={{ rotate: isSelected ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-purple-500"
                      >
                        {isSelected ? '−' : '+'}
                      </motion.div>
                    </div>
                    <p className="text-gray-600 mb-4">{heuristic.description}</p>

                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-3 pt-4 border-t border-gray-200"
                        >
                          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                            <p className="text-sm text-green-800">{heuristic.example}</p>
                          </div>
                          <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                            <p className="text-sm text-red-800">{heuristic.badExample}</p>
                          </div>
                          <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                            <p className="text-sm text-purple-800">
                              💡 <strong>Tip:</strong> {heuristic.tip}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
