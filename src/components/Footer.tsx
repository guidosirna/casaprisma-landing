import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-prisma-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-12 mb-12">
          <div className="shrink-0">
            <img src="/casaprisma-logo-dark.png" alt="Casa Prisma" className="h-10 w-auto" />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            Loft creativo de 175m² en Gràcia, Barcelona. Espacio de alquiler para coworking,
            fotografía, filmaciones, arte y eventos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <p className="text-sm font-medium text-white mb-4">Servicios</p>
            <nav className="space-y-2">
              {[
                { to: '/cowork', label: 'Coworking en Barcelona' },
                { to: '/produccion', label: 'Estudio de fotografía' },
                { to: '/galeria-arte', label: 'Exposiciones' },
                { to: '/eventos', label: 'Eventos privados' },
                { to: '/estudio-musical', label: 'Estudio musical' },
                { to: '/workshops', label: 'Workshops y talleres' },
              ].map(item => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block text-gray-400 hover:text-prisma-teal transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-sm font-medium text-white mb-4">Comunidad</p>
            <nav className="space-y-2">
              <Link
                to="/community"
                className="block text-gray-400 hover:text-prisma-amber transition-colors text-sm"
              >
                Casa Prisma Community
              </Link>
              <a
                href="https://www.instagram.com/casaprismabcn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors text-sm"
              >
                <Instagram className="w-4 h-4" />
                @casaprismabcn
              </a>
            </nav>
          </div>
          <div>
            <p className="text-sm font-medium text-white mb-4">Contacto</p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Gràcia, Barcelona</p>
              <p>Lunes a Domingo: 08:00 – 23:00</p>
              <a href="#contact-form" className="block text-prisma-teal hover:text-prisma-teal/80 transition-colors">
                Formulario de contacto →
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-white mb-4">Espacio</p>
            <div className="flex flex-wrap gap-2">
              {['175m²', 'Luz natural', 'WiFi', 'Cocina', 'Sonido pro'].map(tag => (
                <span key={tag} className="text-xs bg-white/10 text-gray-300 px-3 py-1.5 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Casa Prisma&reg;. Todos los derechos reservados. Alquiler de espacio creativo en Barcelona.
          </p>
          <p className="text-gray-600 text-[10px] mt-2">
            Casa Prisma es una marca registrada. Queda prohibida su reproducción total o parcial sin autorización.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
