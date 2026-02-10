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
    <section className="h-full bg-prisma-charcoal flex items-center" id="about">
      <div className="max-w-7xl mx-auto px-6 py-16 w-full">
        <h2 className="reveal text-display-lg text-white max-w-4xl">
          Un loft de 175m² que se adapta a tu visión creativa.
          <span className="text-prisma-teal"> Gràcia, Barcelona.</span>
        </h2>

        <div className="reveal reveal-delay-1 mt-12">
          <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed mb-10 max-w-3xl">
            <strong className="text-white font-bold">Casa Prisma</strong> es un espacio
            multifuncional diseñado para artistas, fotógrafos, cineastas, coworkers y creativos.
            Grandes ventanales con luz natural, equipamiento profesional y una estética que se
            adapta a cualquier proyecto.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {services.map(({ icon: Icon, label, color }) => (
              <div key={label} className={`inline-flex items-center gap-2 ${color} text-white px-5 py-2.5 rounded-full text-sm font-bold`}>
                <Icon className="w-4 h-4" />
                {label}
              </div>
            ))}
          </div>

          <div className="flex items-baseline gap-4">
            <span className="font-display text-6xl lg:text-8xl font-bold text-prisma-teal">175</span>
            <div>
              <p className="font-display text-2xl lg:text-3xl font-bold text-white">m²</p>
              <p className="text-gray-500 text-sm">de espacio creativo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
