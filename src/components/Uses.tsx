import React, { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Uses: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  const useCases = [
    { title: 'Coworking', description: 'Espacio de trabajo compartido para freelancers, startups y equipos creativos.', image: '/1302974713.webp', color: 'bg-prisma-teal', link: '/cowork' },
    { title: 'Fotografía y Filmaciones', description: 'Estudio con luz natural para sesiones fotográficas, rodajes y creación de contenido.', image: '/estudio-fotografia.jpg', color: 'bg-prisma-amber', link: '/produccion' },
    { title: 'Galería de Arte', description: 'Espacio expositivo para artistas emergentes y establecidos.', image: '/galeria-exposicion.jpg', color: 'bg-prisma-navy', link: '/galeria-arte' },
    { title: 'Eventos Privados', description: 'Marco exclusivo para cenas, conciertos íntimos y celebraciones.', image: '/evento-showroom.jpg', color: 'bg-prisma-olive', link: '/eventos' },
    { title: 'Estudio Musical', description: 'Grabación, producción y ensayos con equipamiento profesional.', image: '/concierto-intimo.jpg', color: 'bg-prisma-purple', link: '/estudio-musical' },
    { title: 'Workshops', description: 'Talleres creativos, masterclasses y sesiones formativas.', image: '/workshop-presentacion.jpg', color: 'bg-prisma-coral', link: '/workshops' },
  ];

  return (
    <section className="h-full bg-prisma-charcoal text-white overflow-hidden flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 py-8 lg:py-16 w-full">
        <div className="flex items-end justify-between mb-6 lg:mb-14">
          <h2 className="reveal text-display-lg max-w-xl">
            Un espacio,<br />infinitas posibilidades
          </h2>
          <div className="hidden lg:flex gap-3">
            <button onClick={() => scroll('left')} className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={() => scroll('right')} className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="reveal reveal-delay-1 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-10 px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] scrollbar-hide"
      >
        {useCases.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="group snap-start shrink-0 w-[85vw] sm:w-[380px] rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={item.image}
                alt={`${item.title} en Casa Prisma Barcelona — alquiler espacio creativo`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
            <div className="bg-white/5 px-6 py-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-white/80">Ver más</span>
              <ArrowRight className="w-4 h-4 text-prisma-teal group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Uses;
