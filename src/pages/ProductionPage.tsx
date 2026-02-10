import React from 'react';
import { ArrowRight, Sun, Camera, Settings, Maximize, MapPin, UtensilsCrossed } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ContactForm from '../components/ContactForm';

const ProductionPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Estudio Fotografía y Filmaciones Barcelona — Alquiler Espacio | Casa Prisma"
        description="Alquiler de estudio fotográfico y espacio para filmaciones en Gràcia, Barcelona. Loft de 175m² con luz natural, equipamiento profesional y set versátil. Ideal para sesiones de fotos, rodajes, producción audiovisual y contenido digital."
        keywords="estudio fotografía barcelona, alquiler estudio fotográfico, espacio filmaciones barcelona, rodaje barcelona, producción audiovisual, set de rodaje barcelona, sesión fotos barcelona, filming location barcelona, photo studio barcelona"
        canonical="https://casaprisma.com/produccion"
        ogImage="/estudio-fotografia.jpg"
      />

      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <img src="/estudio-fotografia.jpg" alt="Estudio de fotografía y filmaciones en Gràcia Barcelona — espacio profesional para rodajes y sesiones de fotos" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-prisma-amber/90 via-prisma-amber/40 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 lg:pb-24 pt-32">
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-6">Producción</span>
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">Fotografía y Filmaciones</h1>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-lg">Estudio versátil de 175m² con luz natural y equipamiento profesional para tus producciones fotográficas y audiovisuales.</p>
          <a href="#contact-form" className="group inline-flex items-center gap-3 bg-white text-prisma-amber px-8 py-4 rounded-full font-semibold text-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            Reservar <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="inline-block bg-prisma-amber/10 text-prisma-amber text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Estudio completo</span>
            <h2 className="text-display-lg text-prisma-charcoal max-w-xl">Todo para tu producción</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { icon: Sun, title: 'Luz Natural', desc: 'Amplios ventanales que proporcionan luz natural suave durante todo el día, ideal para fotografía y video.', color: 'bg-prisma-amber' },
              { icon: Camera, title: 'Set Profesional', desc: 'Fondos intercambiables, paredes neutras y múltiples ambientes para cada proyecto.', color: 'bg-prisma-teal' },
              { icon: Settings, title: 'Equipamiento', desc: 'Iluminación LED profesional, softboxes, trípodes y todo lo necesario.', color: 'bg-prisma-navy' },
              { icon: Maximize, title: 'Espacio Versátil', desc: '175m² adaptables: desde retratos íntimos hasta rodajes con equipos grandes.', color: 'bg-prisma-olive' },
              { icon: MapPin, title: 'Localización', desc: 'En el corazón de Gràcia, con fácil acceso y zona de carga y descarga.', color: 'bg-prisma-teal' },
              { icon: UtensilsCrossed, title: 'Catering', desc: 'Cocina equipada para catering de producción y zona de descanso para el equipo.', color: 'bg-prisma-amber' },
            ].map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <div className={`w-12 h-12 ${b.color} rounded-full flex items-center justify-center mb-5`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-prisma-charcoal text-lg mb-2">{b.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="inline-block bg-prisma-amber/10 text-prisma-amber text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Tipos de producción</span>
            <h2 className="text-display-lg text-prisma-charcoal">Crea contenido que impacte</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Fotografía', items: ['Retratos y editoriales', 'Producto y e-commerce', 'Lookbooks de moda', 'Fotografía corporativa'], featured: false },
              { title: 'Video y Redes', items: ['Instagram Reels y TikTok', 'YouTube content', 'Videos corporativos', 'Contenido publicitario'], featured: true },
              { title: 'Cine y Arte', items: ['Videoclips musicales', 'Cortometrajes', 'Documentales', 'Arte digital y NFT'], featured: false },
            ].map((cat, i) => (
              <div key={i} className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative ${cat.featured ? 'ring-2 ring-prisma-amber' : ''}`}>
                {cat.featured && <span className="absolute -top-3 left-6 bg-prisma-amber text-white px-4 py-1 text-xs font-semibold rounded-full">Popular</span>}
                <h3 className="font-display font-bold text-prisma-charcoal text-xl mb-4">{cat.title}</h3>
                <ul className="space-y-3 text-gray-500 text-sm">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2"><span className="text-prisma-amber font-bold">✓</span> {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm accentColor="bg-prisma-amber" />
    </>
  );
};

export default ProductionPage;
