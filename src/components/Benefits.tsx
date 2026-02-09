import React from 'react';
import { MapPin, Sun, Volume2, Layers, Coffee, Sparkles } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: MapPin,
      title: 'Gràcia Nova',
      description: 'En el corazón bohemio de Barcelona, con metro y conexiones perfectas',
      color: 'bg-red-500'
    },
    {
      icon: Sun,
      title: 'Luz Natural',
      description: 'Grandes ventanales que inundan el espacio de inspiración todo el día',
      color: 'bg-yellow-500'
    },
    {
      icon: Volume2,
      title: 'Sonido Pro',
      description: 'Equipamiento profesional para grabaciones y producciones audiovisuales',
      color: 'bg-purple-500'
    },
    {
      icon: Layers,
      title: 'Totalmente Flexible',
      description: 'Se transforma según tu proyecto: cowork, galería, estudio o evento',
      color: 'bg-blue-500'
    },
    {
      icon: Coffee,
      title: 'Coffee Corner',
      description: 'Cocina equipada y zona de descanso para que te sientas como en casa',
      color: 'bg-orange-500'
    },
    {
      icon: Sparkles,
      title: 'Vibe Creativo',
      description: 'Diseñado para inspirar, colaborar y crear conexiones auténticas',
      color: 'bg-green-500'
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-gray-400 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gray-400 rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 border-2 border-gray-400 rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            ¿POR QUÉ
            <span className="block text-green-500 italic font-light">Casa Prisma?</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Un espacio donde cada detalle está pensado para potenciar tu creatividad y hacer realidad tus proyectos más ambiciosos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden"
              >
                {/* Background Color Splash */}
                <div className={`absolute top-0 right-0 w-20 h-20 ${benefit.color} rounded-full transform translate-x-8 -translate-y-8 opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-500 rounded-2xl transition-all duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;