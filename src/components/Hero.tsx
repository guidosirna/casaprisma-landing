import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-full flex items-end overflow-hidden">
      <img
        src="/space/1302974661.webp"
        alt="Loft creativo de 175m² para alquiler en Gràcia, Barcelona"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-24 lg:pb-20 pt-32">
        <div className="animate-fade-up">
          <h1 className="text-display-xl text-white mb-8">
            Casa<br />Prisma
          </h1>

          <div className="max-w-xl mb-8">
            <p className="text-2xl lg:text-3xl text-white/90 font-light leading-snug mb-2">
              175m² de loft versátil en Gràcia, Barcelona.
            </p>
            <p className="text-lg text-white/50 font-light">
              Coworking · Fotografía · Filmaciones · Eventos · Arte
            </p>
          </div>

          <button
            onClick={() => window.dispatchEvent(new CustomEvent('fullpage-goto', { detail: { slide: 1 } }))}
            className="group inline-flex items-center gap-3 bg-white text-prisma-charcoal px-10 py-5 rounded-full font-bold text-lg hover:scale-[1.03] transition-all duration-300"
          >
            Saber más <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
