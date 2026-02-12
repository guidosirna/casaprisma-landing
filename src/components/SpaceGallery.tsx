import React from 'react';

const SpaceGallery: React.FC = () => {
  const images = [
    { src: '/space/1302974712.webp', label: 'Loft principal' },
    { src: '/space/1302974676.webp', label: 'Luz natural' },
    { src: '/space/1302974713.webp', label: 'Cocina equipada' },
    { src: '/space/1302974661.webp', label: 'Espacio versátil' },
    { src: '/space/1302974711.webp', label: 'Terraza verde' },
  ];

  return (
    <section className="h-full bg-white flex flex-col">
      <div className="pt-20 lg:pt-20 pb-2 lg:pb-4 px-6 shrink-0">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="reveal text-display-md lg:text-display-lg text-prisma-charcoal">El Espacio</h2>
        </div>
      </div>

      <div className="flex-1 px-3 pb-3 min-h-0">
        <div className="max-w-[1600px] mx-auto h-full">
          <div className="hidden lg:grid grid-cols-3 gap-3 h-full">
            <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl reveal">
              <img
                src={images[0].src}
                alt={`${images[0].label} |Casa Prisma loft creativo Barcelona`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {images.slice(1).map((img, i) => (
              <div key={i} className={`relative group overflow-hidden rounded-2xl reveal reveal-delay-${Math.min(i + 1, 4)}`}>
                <img
                  src={img.src}
                  alt={`${img.label} |Casa Prisma espacio creativo Gràcia`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>

          <div className="lg:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory pb-4 -mx-3 px-3 scrollbar-hide h-full">
            {images.map((img, i) => (
              <div key={i} className="snap-center shrink-0 w-[85vw] h-full relative overflow-hidden rounded-2xl">
                <img
                  src={img.src}
                  alt={`${img.label} |Casa Prisma Barcelona`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceGallery;
