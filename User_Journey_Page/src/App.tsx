import { HeroSection } from "./components/HeroSection";
import { ConceptCards } from "./components/ConceptCards";
import { InteractiveJourneyBuilder } from "./components/InteractiveJourneyBuilder";
import { ExamplesSection } from "./components/ExamplesSection";
import { QuizSection } from "./components/QuizSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <HeroSection />
      <ConceptCards />
      <InteractiveJourneyBuilder />
      <ExamplesSection />
      <QuizSection />
      <Footer />
    </div>
  );
}
