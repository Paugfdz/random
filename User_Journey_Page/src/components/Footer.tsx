import { Heart, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-purple-200 bg-white/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="mb-4 text-gray-800">Sobre esta plataforma</h4>
            <p className="text-gray-600">
              Una experiencia interactiva y divertida para aprender a crear User
              Journeys efectivos que mejoren la experiencia de tus usuarios.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-gray-800">Recursos</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  User Journey
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  Design Thinking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  Leyes de Ux
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-gray-800">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 hover:from-purple-200 hover:to-blue-200 transition-all"
              >
                <Instagram className="w-5 h-5 text-purple-600" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-purple-200 text-center">
          <p className="text-gray-600 flex items-center justify-center gap-2">
            Hecho con <Heart className="w-4 h-4 text-red-500 fill-red-500" />{" "}
            para diseñadores y creadores
          </p>

        </div>
      </div>
    </footer>
  );
}
