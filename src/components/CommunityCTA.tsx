import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CommunityCTA: React.FC = () => {
  return (
    <section className="py-14 lg:py-20 bg-prisma-charcoal text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
          Buscamos creativos que quieran hacer cosas juntos
        </h2>
        <p className="text-base text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
          Compartir ideas, colaborar en proyectos, organizar eventos. Si trabajas en algo creativo en Barcelona, este es tu sitio.
        </p>

        <Link
          to="/community"
          className="group inline-flex items-center gap-3 bg-prisma-amber text-white px-8 py-4 rounded-full font-bold text-base hover:scale-[1.03] hover:shadow-xl transition-all duration-300"
        >
          Conoce la comunidad <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default CommunityCTA;
