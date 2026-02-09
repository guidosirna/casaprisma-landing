import React from 'react';
import { Home } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <>
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-left mb-8">
          <div className="max-w-md">
            <a href="/" className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
              <Home className="w-8 h-8 text-green-400" />
              <h3 className="text-2xl font-bold">CASA PRISMA</h3>
            </a>
            <p className="text-gray-400 leading-relaxed text-base">
              Tu loft creativo y galería temporal en el corazón de Gràcia. 
              Donde las ideas cobran vida y los proyectos se transforman en realidad.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-left">
          <p className="text-gray-400 text-sm">
            © 2025 <span className="text-green-400 font-bold">CASA PRISMA</span>. 
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
      {/* Sponsors Section */}
      <div className="bg-white py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center">
            <img 
              src="/LOGOS_noticia-REACT_v2-02-1920x533.png" 
              alt="Logos patrocinio municipal" 
              className="w-full max-w-4xl h-auto"
            />
          </div>
        </div>
      </div>

    </>
  );
};

export default Footer;