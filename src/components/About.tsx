import React from 'react';
import { Camera, Music, Users, Palette, Clapperboard, PartyPopper } from 'lucide-react';

const About: React.FC = () => {
  const services = [
    { icon: Users, label: 'Coworking', color: 'bg-prisma-teal' },
    { icon: Camera, label: 'Fotografía', color: 'bg-prisma-amber' },
    { icon: Palette, label: 'Arte', color: 'bg-prisma-navy' },
    { icon: Music, label: 'Música', color: 'bg-prisma-olive' },
    { icon: Clapperboard, label: 'Filmaciones', color: 'bg-prisma-purple' },
    { icon: PartyPopper, label: 'Eventos', color: 'bg-prisma-coral' },
  ];

  return (
    <section className="h-full bg-prisma-charcoal flex flex-col justify-center" id="about">
      <div className="max-w-7xl mx-auto px-6 py-10 lg:py-16 w-full">
        <h2 className="reveal text-display-md lg:text-display-lg text-white max-w-4xl">
          Un loft que se adapta a tu visión creativa.
          <span className="text-prisma-teal"> Gràcia, Barcelona.</span>
        </h2>

        <div className="reveal reveal-delay-1 mt-6 lg:mt-12">
          <p className="text-base lg:text-2xl text-gray-400 leading-relaxed mb-6 lg:mb-10 max-w-3xl">
            <strong className="text-white font-bold">Casa Prisma</strong> es un espacio
            multifuncional diseñado para artistas, fotógrafos, cineastas, coworkers y creativos.
            Grandes ventanales con luz natural, equipamiento profesional y una estética que se
            adapta a cualquier proyecto.
          </p>

          <div className="flex flex-wrap gap-2 lg:gap-3 mb-6 lg:mb-10">
            {services.map(({ icon: Icon, label, color }) => (
              <div key={label} className={`inline-flex items-center gap-1.5 lg:gap-2 ${color} text-white px-3 lg:px-5 py-2 lg:py-2.5 rounded-full text-xs lg:text-sm font-bold`}>
                <Icon className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                {label}
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-sm lg:text-base">
            <span className="text-prisma-teal font-bold">175m²</span> de espacio creativo en el corazón de Gràcia
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
