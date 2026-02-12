import React from 'react';
import { MapPin, Sun, Volume2, Layers, Coffee, Wifi } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    { icon: MapPin, title: 'Gràcia, Barcelona', description: 'Ubicación privilegiada en el barrio más creativo y bien conectado de Barcelona, rodeado de galerías y espacios culturales.', color: 'bg-prisma-teal' },
    { icon: Sun, title: 'Luz natural', description: 'Ventanales amplios que inundan el espacio de luz natural durante todo el día, ideal para fotografía y bienestar.', color: 'bg-prisma-amber' },
    { icon: Volume2, title: 'Equipamiento pro', description: 'Sonido profesional, iluminación técnica regulable y proyección HD para cualquier tipo de producción.', color: 'bg-prisma-navy' },
    { icon: Layers, title: 'Espacio flexible', description: 'Se transforma según tu proyecto: estudio fotográfico, espacio expositivo, coworking o venue para eventos.', color: 'bg-prisma-olive' },
    { icon: Coffee, title: 'Coffee corner', description: 'Cocina totalmente equipada y zona de descanso para largas jornadas creativas o catering de eventos.', color: 'bg-prisma-amber' },
    { icon: Wifi, title: 'WiFi alta velocidad', description: 'Fibra óptica simétrica para videollamadas, streaming y trabajo remoto sin interrupciones.', color: 'bg-prisma-teal' },
  ];

  return (
    <section className="h-full bg-gray-50 flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-8 lg:py-24 w-full">
        <h2 className="reveal font-display text-4xl sm:text-5xl lg:text-display-lg font-bold tracking-tight text-prisma-charcoal mb-6 lg:mb-16 max-w-2xl">
          Por qué elegir Casa Prisma
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5 lg:gap-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`reveal reveal-delay-${Math.min(index + 1, 4)} group`}
              >
                <div className={`w-9 h-9 lg:w-14 lg:h-14 ${benefit.color} rounded-xl lg:rounded-2xl flex items-center justify-center mb-2 lg:mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-prisma-charcoal text-sm lg:text-xl mb-1 lg:mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-xs lg:text-base leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
