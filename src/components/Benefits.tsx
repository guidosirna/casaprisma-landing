import React from 'react';
import { MapPin, Sun, Volume2, Layers, Coffee, Wifi } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    { icon: MapPin, title: 'Gràcia, Barcelona', description: 'Ubicación privilegiada en el barrio más creativo de Barcelona.', color: 'bg-prisma-teal' },
    { icon: Sun, title: 'Luz natural', description: 'Ventanales amplios que inundan los 175m² de luz natural.', color: 'bg-prisma-amber' },
    { icon: Volume2, title: 'Equipamiento pro', description: 'Sonido profesional e iluminación técnica de alta calidad.', color: 'bg-prisma-navy' },
    { icon: Layers, title: 'Espacio flexible', description: 'Se transforma según tu proyecto: estudio, galería, cowork o eventos.', color: 'bg-prisma-olive' },
    { icon: Coffee, title: 'Coffee corner', description: 'Cocina equipada y zona de descanso para largas jornadas.', color: 'bg-prisma-amber' },
    { icon: Wifi, title: 'WiFi alta velocidad', description: 'Fibra óptica para videollamadas y trabajo remoto sin cortes.', color: 'bg-prisma-teal' },
  ];

  return (
    <section className="h-full bg-gray-50 flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24 w-full">
        <h2 className="reveal text-display-lg text-prisma-charcoal mb-8 lg:mb-16 max-w-2xl">
          Por qué elegir Casa Prisma
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 lg:gap-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`reveal reveal-delay-${Math.min(index + 1, 4)} group`}
              >
                <div className={`w-10 h-10 lg:w-14 lg:h-14 ${benefit.color} rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 lg:mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-prisma-charcoal text-base lg:text-xl mb-1 lg:mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm lg:text-base leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
