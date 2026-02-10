import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';

const ContactFooterSlide: React.FC = () => {
  return (
    <div className="min-h-full">
      {/* Top padding so content doesn't sit under the fixed header */}
      <div className="pt-4 lg:pt-4">
        <ContactForm />
      </div>

      {/* Compact footer inside the slide */}
      <footer className="bg-prisma-charcoal text-white py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start gap-10 mb-10">
            <img src="/logo-casaprisma-white.png" alt="Casa Prisma" className="h-8 w-auto shrink-0" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Loft creativo de 175m² en Gràcia, Barcelona. Espacio de alquiler para coworking,
              fotografía, filmaciones, arte y eventos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div>
              <p className="text-sm font-medium text-white mb-3">Servicios</p>
              <nav className="space-y-1.5">
                {[
                  { to: '/cowork', label: 'Coworking en Barcelona' },
                  { to: '/produccion', label: 'Estudio de fotografía' },
                  { to: '/galeria-arte', label: 'Galería de arte' },
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
              <p className="text-sm font-medium text-white mb-3">Contacto</p>
              <div className="space-y-1.5 text-sm text-gray-400">
                <p>Gràcia, Barcelona</p>
                <p>Lunes a Domingo: 08:00 – 23:00</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-white mb-3">Espacio</p>
              <div className="flex flex-wrap gap-2">
                {['175m²', 'Luz natural', 'WiFi', 'Cocina', 'Sonido pro'].map(tag => (
                  <span key={tag} className="text-xs bg-white/10 text-gray-300 px-3 py-1.5 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} Casa Prisma&reg;. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactFooterSlide;
