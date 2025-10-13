import { useState } from 'react';
import Hero from './components/Hero';
import HeuristicCards from './components/HeuristicCards';
import InteractiveQuiz from './components/InteractiveQuiz';
import PracticeSection from './components/PracticeSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<'learn' | 'quiz' | 'practice'>('learn');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <Hero />
      
      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-purple-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setActiveSection('learn')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeSection === 'learn'
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
              }`}
            >
              📚 Aprende las Heurísticas
            </button>
            <button
              onClick={() => setActiveSection('quiz')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeSection === 'quiz'
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
              }`}
            >
              🎮 Quiz Interactivo
            </button>
            <button
              onClick={() => setActiveSection('practice')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeSection === 'practice'
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
              }`}
            >
              🔍 Practica
            </button>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {activeSection === 'learn' && <HeuristicCards />}
        {activeSection === 'quiz' && <InteractiveQuiz />}
        {activeSection === 'practice' && <PracticeSection />}
      </div>

      <Footer />
    </div>
  );
}
