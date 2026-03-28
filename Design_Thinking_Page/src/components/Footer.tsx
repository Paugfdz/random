import { Heart, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-12 px-4 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4">Sobre Design Thinking</h3>
            <p className="text-purple-200">
              Una metodología centrada en las personas para resolver problemas
              complejos de manera creativa e innovadora.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl mb-4">Recursos</h3>
            <ul className="space-y-2 text-purple-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  User Journey
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Evaluaciones Heuristicas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Leyes de UX
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="flex items-center justify-center gap-2 text-purple-200">
            Hecho con <Heart className="w-4 h-4 text-pink-400" fill="currentColor" /> para innovadores
          </p>
        </div>
      </div>
    </footer>
  );
}
