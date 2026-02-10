import React from 'react';
import { ArrowRight, Palette, Eye, Frame, Lightbulb, Users, MapPin } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ContactForm from '../components/ContactForm';

const ArtGalleryPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Galería de Arte Barcelona — Alquiler Espacio Exposiciones Gràcia | Casa Prisma"
        description="Alquiler de galería de arte y espacio para exposiciones temporales en Gràcia, Barcelona. Loft de 175m² con paredes neutras, iluminación profesional y sistema de colgado. Ideal para vernissages, artistas emergentes y showcases artísticos."
        keywords="galería arte barcelona, espacio exposiciones barcelona, alquiler sala arte, vernissage barcelona, artistas emergentes barcelona, exposición temporal barcelona, galería temporal gràcia, pop-up gallery barcelona, arte contemporáneo barcelona"
        canonical="https://casaprisma.com/galeria-arte"
        ogImage="/galeria-exposicion.jpg"
      />

      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <img src="/galeria-exposicion.jpg" alt="Exposición de arte en Casa Prisma Gràcia Barcelona — galería para vernissages y artistas emergentes" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-prisma-navy/90 via-prisma-navy/40 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 lg:pb-24 pt-32">
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-6">Espacio expositivo</span>
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">Galería de Arte</h1>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-lg">Exhibe tu obra en un loft único de 175m² con iluminación profesional y paredes neutras en el barrio más artístico de Barcelona.</p>
          <a href="#contact-form" className="group inline-flex items-center gap-3 bg-white text-prisma-navy px-8 py-4 rounded-full font-semibold text-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            Reservar <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="inline-block bg-prisma-navy/10 text-prisma-navy text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Espacio expositivo</span>
            <h2 className="text-display-lg text-prisma-charcoal max-w-xl">Tu galería ideal</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { icon: Palette, title: 'Paredes Neutras', desc: 'Muros blancos perfectos para resaltar cualquier tipo de obra artística, desde pintura hasta instalaciones.', color: 'bg-prisma-navy' },
              { icon: Lightbulb, title: 'Iluminación Profesional', desc: 'Sistema LED regulable para destacar cada pieza con la intensidad perfecta.', color: 'bg-prisma-amber' },
              { icon: Frame, title: 'Sistema de Colgado', desc: 'Rieles profesionales para colgar obras de diferentes tamaños con seguridad.', color: 'bg-prisma-navy' },
              { icon: Eye, title: 'Visibilidad Óptima', desc: 'Grandes ventanales que atraen la atención y proporcionan luz natural.', color: 'bg-prisma-olive' },
              { icon: Users, title: 'Capacidad Flexible', desc: 'Espacio para hasta 80 personas en inauguraciones y vernissages.', color: 'bg-prisma-teal' },
              { icon: MapPin, title: 'Ubicación Artística', desc: 'En Gràcia, rodeado de galerías y espacios creativos de Barcelona.', color: 'bg-prisma-amber' },
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
            <span className="inline-block bg-prisma-navy/10 text-prisma-navy text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Formatos</span>
            <h2 className="text-display-lg text-prisma-charcoal">Tipos de exposiciones</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Exposiciones Individuales', desc: 'Muestra personal completa de un artista o colectivo.', items: ['Duración: 2-4 semanas', 'Inauguración incluida', 'Catálogo digital', 'Promoción en redes'] },
              { title: 'Exposiciones Colectivas', desc: 'Muestra temática con varios artistas participantes.', items: ['Hasta 10 artistas', 'Tema unificador', 'Vernissage conjunto', 'Networking artístico'] },
              { title: 'Pop-Up Galleries', desc: 'Exhibiciones temporales de corta duración.', items: ['3-7 días de duración', 'Montaje rápido', 'Ideal para eventos', 'Precios especiales'] },
              { title: 'Showcases Digitales', desc: 'Exhibición de arte digital y nuevos medios.', items: ['Proyección HD', 'Arte interactivo', 'Instalaciones multimedia', 'Tecnología integrada'] },
            ].map((cat, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-display font-bold text-prisma-charcoal text-lg mb-3">{cat.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{cat.desc}</p>
                <ul className="space-y-2 text-gray-500 text-sm">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2"><span className="text-prisma-navy font-bold">✓</span> {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm accentColor="bg-prisma-navy" />
    </>
  );
};

export default ArtGalleryPage;
