import React from 'react';
import { ArrowRight } from 'lucide-react';

const Uses: React.FC = () => {
  const useCases = [
    {
      title: 'Cowork Creativo',
      subtitle: 'Tu oficina inspiradora',
      description: 'Ambiente único para equipos creativos, freelancers y startups que buscan algo más que una oficina convencional',
      image: '/1302974713.webp',
      tags: ['Freelancers', 'Creativos', 'Íntimo'],
      color: 'from-blue-500 to-purple-600',
      link: '/cowork'
    },
    {
      title: 'Estudio Musical',
      subtitle: 'Graba tu próximo hit',
      description: 'Equipamiento profesional para grabaciones, sesiones y producciones musicales de alta calidad',
      image: '/1302974661.webp',
      tags: ['Grabación', 'Producción', 'Ensayos'],
      color: 'from-purple-500 to-pink-600',
      link: '/estudio-musical'
    },
    {
      title: 'Galería Temporal',
      subtitle: 'Exhibe tu arte',
      description: 'Espacio perfecto para exposiciones, vernissages y showcases artísticos en el corazón de Gràcia',
      image: '/1302974711.webp',
      tags: ['Exposiciones', 'Vernissages', 'Arte'],
      color: 'from-green-500 to-teal-600',
      link: '/galeria-arte'
    },
    {
      title: 'Eventos Boutique',
      subtitle: 'Celebraciones únicas',
      description: 'Marco exclusivo para dinners privados, conciertos íntimos, celebraciones y eventos memorables',
      image: '/1302974712.webp',
      tags: ['Dinners', 'Conciertos', 'Íntimo'],
      color: 'from-orange-500 to-red-600',
      link: '/eventos'
    },
    {
      title: 'Workshops',
      subtitle: 'Sesiones creativas',
      description: 'Ambiente hogareño para talleres íntimos, masterclasses y charlas inspiracionales en grupo reducido',
      image: '/1302974676.webp',
      tags: ['Talleres', 'Íntimo', 'Creativo'],
      color: 'from-teal-500 to-blue-600',
      link: '/workshops'
    },
    {
      title: 'Producciones',
      subtitle: 'Crea contenido',
      description: 'Escenario perfecto para shootings, producciones audiovisuales y contenido para redes sociales',
      image: '/1302974713.webp',
      tags: ['Shooting', 'Video', 'Contenido'],
      color: 'from-pink-500 to-purple-600',
      link: '/produccion'
    }
  ];

  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    contactForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-10 w-64 h-64 border border-green-500 rounded-full"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            INFINITAS
            <span className="block text-green-400 italic font-light">posibilidades</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Un espacio que se reinventa según tus necesidades creativas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gray-900 hover:bg-gray-800 transition-all duration-500 transform hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${useCase.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                
                {/* Tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {useCase.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-black/50 text-white text-xs font-medium rounded-full backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">
                    {useCase.title}
                  </h3>
                  <p className="text-green-400 font-medium text-sm">
                    {useCase.subtitle}
                  </p>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-4">
                  {useCase.description}
                </p>

                <div className="flex gap-3">
                  <a
                    href={useCase.link}
                    className="inline-flex items-center gap-2 text-green-400 font-medium hover:text-green-300 transition-colors duration-300 group/btn"
                  >
                    Ver más
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2 text-white font-medium hover:text-green-400 transition-colors duration-300 group/btn"
                  >
                    Reservar
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-3 bg-green-500 text-black px-10 py-4 rounded-none font-bold text-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            RESERVA TU FECHA AHORA
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Uses;