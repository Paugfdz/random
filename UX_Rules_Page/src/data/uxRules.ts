import { 
  Eye, 
  MousePointer, 
  Zap, 
  Shield, 
  Users, 
  Palette, 
  Grid, 
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Smartphone,
  Layers,
  RotateCcw,
  MessageSquare,
  Search,
  Settings,
  Target,
  TrendingUp,
  Lightbulb,
  Lock
} from 'lucide-react';

export interface UXRule {
  id: number;
  title: string;
  description: string;
  example: string;
  category: string;
  icon: any;
}

export const categories = [
  'Todos',
  'Usabilidad',
  'Visual',
  'Navegación',
  'Accesibilidad',
  'Interacción',
  'Contenido'
];

export const uxRules: UXRule[] = [
  // Usabilidad
  {
    id: 1,
    title: "Ley de Fitts",
    description: "El tiempo para alcanzar un objetivo depende de la distancia y el tamaño del objetivo. Los elementos más grandes y cercanos son más fáciles de usar.",
    example: "Botones de acción primaria más grandes que los secundarios.",
    category: "Usabilidad",
    icon: MousePointer
  },
  {
    id: 2,
    title: "Ley de Hick",
    description: "El tiempo de decisión aumenta con el número y complejidad de opciones. Simplifica las decisiones reduciendo opciones.",
    example: "Menús de navegación con máximo 7 elementos principales.",
    category: "Usabilidad",
    icon: Zap
  },
  {
    id: 3,
    title: "Regla de Jakob",
    description: "Los usuarios pasan la mayor parte del tiempo en otros sitios, por lo que prefieren que tu sitio funcione de la misma manera.",
    example: "Logo en la esquina superior izquierda que lleva a inicio.",
    category: "Usabilidad",
    icon: Users
  },
  {
    id: 4,
    title: "Principio de Proximidad",
    description: "Los elementos relacionados deben estar cerca unos de otros. La distancia implica relación o separación.",
    example: "Etiquetas de formulario cerca de sus campos correspondientes.",
    category: "Visual",
    icon: Grid
  },
  {
    id: 5,
    title: "Regla de los 3 Clics",
    description: "Los usuarios deben poder encontrar cualquier información en máximo 3 clics desde la página de inicio.",
    example: "Navegación clara con breadcrumbs y menús bien organizados.",
    category: "Navegación",
    icon: ArrowRight
  },
  {
    id: 6,
    title: "Feedback Visual",
    description: "Cada acción del usuario debe tener una respuesta visual inmediata que confirme la acción.",
    example: "Botones que cambian de color al hacer hover o click.",
    category: "Interacción",
    icon: CheckCircle
  },
  {
    id: 7,
    title: "Principio de Consistencia",
    description: "Mantén elementos similares con el mismo aspecto y comportamiento en toda la aplicación.",
    example: "Mismo estilo de botones primarios en todas las páginas.",
    category: "Visual",
    icon: Layers
  },
  {
    id: 8,
    title: "Prevención de Errores",
    description: "Es mejor prevenir errores que tener buenos mensajes de error. Diseña para evitar que ocurran.",
    example: "Deshabilitar botón de envío hasta que el formulario sea válido.",
    category: "Usabilidad",
    icon: Shield
  },
  {
    id: 9,
    title: "Affordance",
    description: "El diseño debe sugerir cómo debe usarse un elemento. Los usuarios deben entender la función sin explicación.",
    example: "Botones que parecen clickeables con sombras y bordes.",
    category: "Visual",
    icon: Eye
  },
  {
    id: 10,
    title: "Jerarquía Visual",
    description: "Organiza elementos para guiar la atención del usuario hacia lo más importante primero.",
    example: "Títulos más grandes y botones CTA con colores destacados.",
    category: "Visual",
    icon: TrendingUp
  },
  {
    id: 11,
    title: "Ley de Miller",
    description: "La memoria de trabajo puede retener 7±2 elementos. Agrupa información en chunks más pequeños.",
    example: "Números de teléfono agrupados: (555) 123-4567.",
    category: "Contenido",
    icon: Lightbulb
  },
  {
    id: 12,
    title: "Principio de Reconocimiento",
    description: "Es más fácil reconocer algo que recordarlo. Usa elementos visuales y opciones en lugar de campos vacíos.",
    example: "Menús desplegables en lugar de campos de texto libre.",
    category: "Usabilidad",
    icon: Search
  },
  {
    id: 13,
    title: "Mobile First",
    description: "Diseña primero para dispositivos móviles y luego escala para pantallas más grandes.",
    example: "Menús hamburguesa que se expanden en desktop.",
    category: "Navegación",
    icon: Smartphone
  },
  {
    id: 14,
    title: "Contraste de Color",
    description: "Asegura suficiente contraste entre texto y fondo (mínimo 4.5:1) para legibilidad.",
    example: "Texto negro sobre fondo blanco o viceversa.",
    category: "Accesibilidad",
    icon: Palette
  },
  {
    id: 15,
    title: "Recuperación de Errores",
    description: "Permite a los usuarios deshacer acciones fácilmente. Ofrece salidas claras de estados de error.",
    example: "Botón de 'Deshacer' después de eliminar un elemento.",
    category: "Interacción",
    icon: RotateCcw
  },
  {
    id: 16,
    title: "Mensajes Claros",
    description: "Usa lenguaje simple, claro y orientado al usuario. Evita la jerga técnica.",
    example: "Error: 'Por favor ingresa tu email' en lugar de 'Input vacío'.",
    category: "Contenido",
    icon: MessageSquare
  },
  {
    id: 17,
    title: "Estados del Sistema",
    description: "Mantén a los usuarios informados sobre lo que está pasando con feedback apropiado en tiempo razonable.",
    example: "Spinners de carga, barras de progreso, notificaciones.",
    category: "Interacción",
    icon: Settings
  },
  {
    id: 18,
    title: "Navegación Accesible",
    description: "Asegura que la navegación funcione con teclado y lectores de pantalla.",
    example: "Orden tab lógico y estados de focus visibles.",
    category: "Accesibilidad",
    icon: Target
  },
  {
    id: 19,
    title: "Carga Progresiva",
    description: "Muestra contenido importante primero. Carga elementos secundarios después.",
    example: "Mostrar texto antes que imágenes pesadas.",
    category: "Interacción",
    icon: Zap
  },
  {
    id: 20,
    title: "Privacidad y Seguridad",
    description: "Sé transparente sobre el uso de datos y protege la información del usuario.",
    example: "Indicadores de conexión segura y políticas claras.",
    category: "Accesibilidad",
    icon: Lock
  },
  {
    id: 21,
    title: "Espaciado Efectivo",
    description: "El espacio en blanco mejora la legibilidad y reduce la carga cognitiva.",
    example: "Márgenes generosos entre secciones de contenido.",
    category: "Visual",
    icon: Grid
  },
  {
    id: 22,
    title: "Call to Action Claro",
    description: "Los botones de acción deben destacar y comunicar claramente qué sucederá.",
    example: "Botón 'Comenzar Prueba Gratuita' en lugar de 'Enviar'.",
    category: "Contenido",
    icon: Target
  },
  {
    id: 23,
    title: "Estados de Interacción",
    description: "Muestra diferentes estados: default, hover, active, disabled, focus.",
    example: "Botón con color más oscuro en hover y sombra en active.",
    category: "Interacción",
    icon: MousePointer
  },
  {
    id: 24,
    title: "Tooltips Informativos",
    description: "Proporciona ayuda contextual sin saturar la interfaz con texto.",
    example: "Iconos de ayuda con tooltips en formularios complejos.",
    category: "Usabilidad",
    icon: AlertCircle
  }
];
