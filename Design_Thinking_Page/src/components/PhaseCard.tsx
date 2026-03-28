import { motion } from 'motion/react';
import { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { CheckCircle2, Lightbulb, Target } from 'lucide-react';

interface Phase {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  icon: string;
  activities: string[];
  tips: string[];
}

interface PhaseCardProps {
  phase: Phase;
}

export function PhaseCard({ phase }: PhaseCardProps) {
  const [hoveredActivity, setHoveredActivity] = useState<number | null>(null);

  return (
    <Card className="overflow-hidden border-none shadow-2xl">
      <div className={`bg-gradient-to-r ${phase.color} p-8 text-white`}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="text-6xl mb-4"
        >
          {phase.icon}
        </motion.div>
        <h2 className="text-4xl mb-2">{phase.title}</h2>
        <p className="text-xl opacity-90">{phase.subtitle}</p>
      </div>

      <div className="p-8">
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          {phase.description}
        </p>

        <Tabs defaultValue="activities" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="activities" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Actividades
            </TabsTrigger>
            <TabsTrigger value="tips" className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              Consejos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="activities" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {phase.activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onHoverStart={() => setHoveredActivity(index)}
                  onHoverEnd={() => setHoveredActivity(null)}
                >
                  <Card
                    className={`p-4 transition-all duration-300 cursor-pointer ${
                      hoveredActivity === index
                        ? `bg-gradient-to-r ${phase.color} text-white shadow-lg scale-105`
                        : 'bg-white hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          hoveredActivity === index ? 'text-white' : 'text-green-500'
                        }`}
                      />
                      <span>{activity}</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tips" className="mt-6">
            <div className="space-y-3">
              {phase.tips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg"
                >
                  <Badge
                    className={`bg-gradient-to-r ${phase.color} text-white border-none flex-shrink-0`}
                  >
                    {index + 1}
                  </Badge>
                  <p className="text-gray-700">{tip}</p>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  );
}
