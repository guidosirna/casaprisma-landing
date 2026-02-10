import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Laia Puig',
      role: 'Artista Visual',
      content: 'Casa Prisma va ser l\'espai perfecte per la meva exposició. Els 175m² amb llum natural van crear l\'ambient ideal per mostrar la meva obra.',
      color: 'bg-prisma-navy',
    },
    {
      name: 'Marc Solé',
      role: 'Director Creativo',
      content: 'Versátil, elegante y muy bien ubicado en Gràcia. Ideal para nuestros workshops creativos y sesiones fotográficas.',
      color: 'bg-prisma-amber',
    },
    {
      name: 'Anna Ferrer',
      role: 'Productora Musical',
      content: 'El equipamiento de sonido es excepcional. Grabamos nuestro EP en un ambiente que inspiró nuestra creatividad.',
      color: 'bg-prisma-teal',
    },
  ];

  return (
    <section className="h-full bg-white flex flex-col">
      <div className="max-w-7xl mx-auto px-6 pt-14 lg:pt-32 pb-6 lg:pb-12 w-full flex flex-col flex-1 justify-center">
        <div className="mb-4 lg:mb-10">
          <p className="reveal font-display text-xl lg:text-4xl xl:text-5xl text-prisma-charcoal max-w-5xl leading-snug lg:leading-tight font-bold">
            &ldquo;{testimonials[0].content}&rdquo;
          </p>
          <div className="reveal reveal-delay-1 flex items-center gap-3 mt-4 lg:mt-6">
            <div className={`w-9 h-9 lg:w-12 lg:h-12 rounded-full ${testimonials[0].color} flex items-center justify-center text-white font-bold text-sm lg:text-lg`}>
              {testimonials[0].name.charAt(0)}
            </div>
            <div>
              <p className="font-display font-bold text-prisma-charcoal text-sm lg:text-lg">{testimonials[0].name}</p>
              <p className="text-gray-400 text-xs lg:text-sm">{testimonials[0].role}</p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gray-200 mb-4 lg:mb-10" />

        <div className="grid md:grid-cols-2 gap-5 lg:gap-20">
          {testimonials.slice(1).map((t, index) => (
            <div key={index} className={`reveal reveal-delay-${index + 2}`}>
              <p className="font-display text-base lg:text-2xl text-prisma-charcoal font-medium leading-snug mb-3 lg:mb-6">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 lg:w-10 lg:h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-prisma-charcoal text-sm lg:text-base">{t.name}</p>
                  <p className="text-gray-400 text-xs lg:text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
