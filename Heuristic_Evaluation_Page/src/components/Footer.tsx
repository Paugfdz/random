import { Heart, BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Sobre las Heurísticas
            </h4>
            <p className="text-purple-100 text-sm">
              Las 10 heurísticas de usabilidad fueron desarrolladas por Jakob Nielsen en 1994 
              y siguen siendo fundamentales en el diseño de experiencias de usuario.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Recursos Adicionales</h4>
            <ul className="space-y-2 text-sm text-purple-100">
              <li>• Nielsen Norman Group</li>
              <li>• Interaction Design Foundation</li>
              <li>• UX Design Institute</li>
              <li>• Don't Make Me Think (libro)</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Aprende Más</h4>
            <p className="text-purple-100 text-sm">
              Las evaluaciones heurísticas son solo el comienzo. Explora también pruebas de usabilidad, 
              diseño centrado en el usuario, y accesibilidad web.
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="flex items-center justify-center gap-2 text-purple-100">
            Hecho con <Heart className="w-4 h-4 text-pink-300 fill-current" /> para mejorar el UX del mundo
          </p>
          <p className="text-sm text-purple-200 mt-2">
            © 2025 Evaluaciones Heurísticas Interactivas
          </p>
        </div>
      </div>
    </footer>
  );
}
