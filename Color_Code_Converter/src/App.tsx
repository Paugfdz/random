import { ColorPicker } from "./components/ColorPicker";
import { FloralBackground } from "./components/FloralBackground";

export default function App() {
  return (
    <div className="min-h-screen bg-background py-8 relative overflow-hidden">
      <FloralBackground />
      <ColorPicker />
    </div>
  );
}
