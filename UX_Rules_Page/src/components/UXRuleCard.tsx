import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface UXRuleCardProps {
  title: string;
  description: string;
  example: string;
  category: string;
  icon: LucideIcon;
  index: number;
}

const getCategoryColor = (category: string) => {
  const colors = {
    'Usabilidad': {
      bg: 'bg-[#00D4FF]',
      text: 'text-white'
    },
    'Visual': {
      bg: 'bg-[#FF006B]',
      text: 'text-white'
    },
    'Navegación': {
      bg: 'bg-[#FFD700]',
      text: 'text-gray-900'
    },
    'Accesibilidad': {
      bg: 'bg-[#00E5A0]',
      text: 'text-gray-900'
    },
    'Interacción': {
      bg: 'bg-[#B24BF3]',
      text: 'text-white'
    },
    'Contenido': {
      bg: 'bg-[#FF6B6B]',
      text: 'text-white'
    }
  };
  
  return colors[category as keyof typeof colors] || { bg: 'bg-primary/5', text: 'text-primary' };
};

const getCategoryBadgeStyle = (category: string) => {
  const styles = {
    'Usabilidad': 'bg-[#B3F0FF]/30 text-[#006B8F] border border-[#B3F0FF]/50',
    'Visual': 'bg-[#FFB3D9]/30 text-[#C00052] border border-[#FFB3D9]/50',
    'Navegación': 'bg-[#FFF4B3]/30 text-[#B8A000] border border-[#FFF4B3]/50',
    'Accesibilidad': 'bg-[#B3FFE5]/30 text-[#00A86B] border border-[#B3FFE5]/50',
    'Interacción': 'bg-[#E0BBFF]/30 text-[#7B2BC2] border border-[#E0BBFF]/50',
    'Contenido': 'bg-[#FFD1D1]/30 text-[#C73535] border border-[#FFD1D1]/50'
  };
  
  return styles[category as keyof typeof styles] || 'bg-secondary/30 text-secondary-foreground border border-secondary/50';
};

export function UXRuleCard({ title, description, example, category, icon: Icon, index }: UXRuleCardProps) {
  const { bg, text } = getCategoryColor(category);
  const badgeStyle = getCategoryBadgeStyle(category);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <div className={`p-3 rounded-lg ${bg} shadow-md`}>
              <Icon className={`w-6 h-6 ${text}`} />
            </div>
            <Badge variant="secondary" className={`shrink-0 backdrop-blur-sm ${badgeStyle}`}>{category}</Badge>
          </div>
          <CardTitle className="mt-4">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-muted-foreground">
              <span className="text-foreground">Ejemplo:</span> {example}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
