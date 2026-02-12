import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CommunityCTA: React.FC = () => {
  return (
    <section className="py-14 lg:py-20 bg-[#e8973e] text-white relative overflow-hidden">
      {/* Doodle backgrounds */}
      <img src="/doodles/groovy.svg" alt="" className="absolute top-0 right-0 w-48 lg:w-72 opacity-[0.12] pointer-events-none select-none" />
      <img src="/doodles/moshing.svg" alt="" className="absolute bottom-0 left-0 w-40 lg:w-64 opacity-[0.10] pointer-events-none select-none -rotate-12" />
      <img src="/doodles/dancing.svg" alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 opacity-[0.06] pointer-events-none select-none hidden lg:block" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
          Buscamos creativos que quieran crear en comunidad
        </h2>
        <p className="text-base text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
          Compartir ideas, colaborar en proyectos, organizar eventos. Si trabajas en algo creativo en Barcelona, este es tu sitio.
        </p>

        <Link
          to="/community"
          className="group inline-flex items-center gap-3 bg-white text-[#e8973e] px-8 py-4 rounded-full font-bold text-base hover:scale-[1.03] hover:shadow-xl transition-all duration-300"
        >
          Conoce la comunidad <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default CommunityCTA;
