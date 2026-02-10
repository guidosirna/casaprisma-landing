import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="h-full relative overflow-hidden flex items-center">
      <img
        src="/galeria-arte.jpg"
        alt="Casa Prisma espacio creativo Barcelona"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-prisma-charcoal/80" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 lg:py-24 text-white w-full">
        <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-display-lg font-bold tracking-tight mb-6 lg:mb-8 max-w-3xl">
          Tu próximo proyecto merece un espacio excepcional
        </h2>
        <p className="reveal reveal-delay-1 text-lg lg:text-2xl text-white/70 font-light leading-relaxed mb-8 lg:mb-12 max-w-2xl">
          Reserva Casa Prisma para fotografía, filmaciones, eventos, coworking o cualquier proyecto creativo en Barcelona.
        </p>

        <button
          onClick={() => window.dispatchEvent(new CustomEvent('fullpage-goto', { detail: { slide: 7 } }))}
          className="reveal reveal-delay-2 group inline-flex items-center gap-3 lg:gap-4 bg-white text-prisma-charcoal px-8 py-4 lg:px-12 lg:py-6 rounded-full font-bold text-base lg:text-lg hover:scale-[1.03] transition-all duration-300"
        >
          Reservar ahora <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default CTASection;
