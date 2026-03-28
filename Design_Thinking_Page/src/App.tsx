import { useState } from 'react';
import { Hero } from './components/Hero';
import { ContextSection } from './components/ContextSection';
import { PhaseExplorer } from './components/PhaseExplorer';
import { InteractiveQuiz } from './components/InteractiveQuiz';
import { ProgressTracker } from './components/ProgressTracker';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPhase, setCurrentPhase] = useState<number>(0);
  const [completedPhases, setCompletedPhases] = useState<number[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);

  const handlePhaseComplete = (phaseIndex: number) => {
    if (!completedPhases.includes(phaseIndex)) {
      setCompletedPhases([...completedPhases, phaseIndex]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <Hero onStartLearning={() => setCurrentPhase(0)} />
      
      <ContextSection />
      
      <ProgressTracker 
        currentPhase={currentPhase}
        completedPhases={completedPhases}
        onPhaseClick={setCurrentPhase}
      />
      
      <PhaseExplorer 
        currentPhase={currentPhase}
        onPhaseChange={setCurrentPhase}
        onPhaseComplete={handlePhaseComplete}
        completedPhases={completedPhases}
        onStartQuiz={() => setShowQuiz(true)}
      />
      
      {showQuiz && (
        <InteractiveQuiz onClose={() => setShowQuiz(false)} />
      )}
      
      <Footer />
    </div>
  );
}
