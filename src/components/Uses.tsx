import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Uses: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const useCases = [
    { title: 'Coworking', description: 'Espacio de trabajo compartido para freelancers, startups y equipos creativos.', image: '/shots/coworking.jpg', link: '/cowork' },
    { title: 'Fotografía y Filmaciones', description: 'Estudio con luz natural para sesiones fotográficas, rodajes y creación de contenido.', image: '/scenes/estudio-fotografia.jpg', link: '/produccion' },
    { title: 'Exposiciones', description: 'Presentaciones de artistas, libros y exposiciones temporales.', image: '/scenes/galeria-exposicion.jpg', link: '/galeria-arte' },
    { title: 'Eventos Privados', description: 'Marco exclusivo para cenas, conciertos íntimos y celebraciones.', image: '/scenes/evento-showroom.jpg', link: '/eventos' },
    { title: 'Estudio Musical', description: 'Grabación, producción y ensayos con equipamiento profesional.', image: '/shots/studio.jpg', link: '/estudio-musical' },
    { title: 'Workshops', description: 'Talleres creativos, masterclasses y sesiones formativas.', image: '/scenes/workshop-presentacion.jpg', link: '/workshops' },
  ];

  const CardContent = ({ item }: { item: typeof useCases[0] }) => (
    <>
      <img
        src={item.image}
        alt={`${item.title} en Casa Prisma Barcelona`}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
        <h3 className="font-display text-2xl lg:text-2xl font-bold text-white mb-1 lg:mb-2">
          {item.title}
        </h3>
        <p className="text-white/70 text-sm leading-relaxed mb-3 lg:mb-3">{item.description}</p>
        <span className="inline-flex items-center gap-2 text-prisma-teal text-sm font-semibold">
          Ver más <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </>
  );

  return (
    <section className="h-full bg-prisma-charcoal text-white overflow-hidden flex flex-col">
      {/* Title */}
      <div className="max-w-7xl mx-auto px-6 pt-20 lg:pt-24 pb-4 lg:pb-6 w-full shrink-0">
        <h2 className="reveal font-display text-[1.6rem] sm:text-5xl lg:text-display-lg font-bold tracking-tight max-w-xl leading-[1.1]">
          Un espacio, infinitas posibilidades
        </h2>
      </div>

      {/* Mobile: horizontal scroll */}
      <div
        ref={scrollRef}
        className="reveal reveal-delay-1 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide flex-1 min-h-0 lg:hidden"
        style={{ scrollPaddingInlineStart: '1.5rem' }}
      >
        <div className="shrink-0 w-2" aria-hidden="true" />
        {useCases.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="group snap-start shrink-0 w-[75vw] sm:w-[340px] rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 flex flex-col relative"
          >
            <div className="relative flex-1 overflow-hidden">
              <CardContent item={item} />
            </div>
          </Link>
        ))}
        <div className="shrink-0 w-4" aria-hidden="true" />
      </div>

      {/* Desktop: 3x2 grid */}
      <div className="reveal reveal-delay-1 hidden lg:grid grid-cols-3 gap-4 flex-1 min-h-0 max-w-7xl mx-auto w-full px-6 pb-8">
        {useCases.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="group relative rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
          >
            <CardContent item={item} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Uses;
