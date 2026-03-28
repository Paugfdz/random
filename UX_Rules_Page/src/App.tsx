import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, Rocket, BookOpen } from 'lucide-react';
import { UXRuleCard } from './components/UXRuleCard';
import { Input } from './components/ui/input';
import { Badge } from './components/ui/badge';
import { uxRules, categories } from './data/uxRules';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredRules = useMemo(() => {
    return uxRules.filter(rule => {
      const matchesSearch = rule.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          rule.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          rule.example.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todos' || rule.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Hero Section */}
      <div className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4 mb-8"
          >
            <div className="flex items-center justify-center gap-3">
              <div className="p-3 rounded-xl bg-gradient-to-r from-[#E0BBFF]/60 via-[#B24BF3]/60 to-[#8B2DD9]/60 backdrop-blur-sm border border-purple-400/40 shadow-lg shadow-purple-500/20">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-[32px] font-bold bg-gradient-to-r from-[#E0BBFF] via-[#B24BF3] to-[#8B2DD9] bg-clip-text text-transparent">Guía Completa de UX</h1>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explora las reglas fundamentales de experiencia de usuario para crear interfaces intuitivas, accesibles y efectivas
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto mb-6"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar reglas de UX..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 bg-background border-2"
              />
            </div>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2 justify-center"
          >
            {categories.map((category) => (
              <Badge
                key={category}
                variant="secondary"
                className={`cursor-pointer transition-all hover:scale-105 px-4 py-2 backdrop-blur-sm ${
                  category === 'Todos' 
                    ? selectedCategory === category
                      ? 'bg-gradient-to-r from-[#B3F0FF]/40 via-[#FFB3D9]/40 to-[#B3FFE5]/40 text-foreground border border-primary/50'
                      : 'bg-gradient-to-r from-[#B3F0FF]/20 via-[#FFB3D9]/20 to-[#B3FFE5]/20 text-muted-foreground border border-border/50'
                    : category === 'Usabilidad'
                    ? selectedCategory === category
                      ? 'bg-[#B3F0FF]/50 text-[#006B8F] border border-[#B3F0FF]'
                      : 'bg-[#B3F0FF]/30 text-[#006B8F] border border-[#B3F0FF]/50'
                    : category === 'Visual'
                    ? selectedCategory === category
                      ? 'bg-[#FFB3D9]/50 text-[#C00052] border border-[#FFB3D9]'
                      : 'bg-[#FFB3D9]/30 text-[#C00052] border border-[#FFB3D9]/50'
                    : category === 'Navegación'
                    ? selectedCategory === category
                      ? 'bg-[#FFF4B3]/50 text-[#B8A000] border border-[#FFF4B3]'
                      : 'bg-[#FFF4B3]/30 text-[#B8A000] border border-[#FFF4B3]/50'
                    : category === 'Accesibilidad'
                    ? selectedCategory === category
                      ? 'bg-[#B3FFE5]/50 text-[#00A86B] border border-[#B3FFE5]'
                      : 'bg-[#B3FFE5]/30 text-[#00A86B] border border-[#B3FFE5]/50'
                    : category === 'Interacción'
                    ? selectedCategory === category
                      ? 'bg-[#E0BBFF]/50 text-[#7B2BC2] border border-[#E0BBFF]'
                      : 'bg-[#E0BBFF]/30 text-[#7B2BC2] border border-[#E0BBFF]/50'
                    : category === 'Contenido'
                    ? selectedCategory === category
                      ? 'bg-[#FFD1D1]/50 text-[#C73535] border border-[#FFD1D1]'
                      : 'bg-[#FFD1D1]/30 text-[#C73535] border border-[#FFD1D1]/50'
                    : ''
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8 flex items-center justify-center gap-2 text-muted-foreground"
        >
          <BookOpen className="w-5 h-5" />
          <span>
            Mostrando {filteredRules.length} {filteredRules.length === 1 ? 'regla' : 'reglas'}
          </span>
        </motion.div>

        {/* Rules Grid */}
        {filteredRules.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRules.map((rule, index) => (
              <UXRuleCard
                key={rule.id}
                title={rule.title}
                description={rule.description}
                example={rule.example}
                category={rule.category}
                icon={rule.icon}
                index={index}
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="inline-block p-4 rounded-full bg-muted mb-4">
              <Search className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-muted-foreground">No se encontraron reglas</h3>
            <p className="text-muted-foreground mt-2">
              Intenta con otros términos de búsqueda o categoría
            </p>
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
          <p>
            {uxRules.length} reglas de UX para mejorar tus diseños 🦄
          </p>
        </div>
      </div>
    </div>
  );
}
