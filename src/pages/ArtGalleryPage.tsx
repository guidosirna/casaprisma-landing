import React from 'react';
import { ArrowRight, Palette, Eye, Frame, Lightbulb, Users, MapPin } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ContactForm from '../components/ContactForm';

const ArtGalleryPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Espacio Expositivo Barcelona |Presentaciones y Exposiciones Gràcia | Casa Prisma"
        description="Alquiler de espacio expositivo para presentaciones de artistas, libros, exposiciones temporales y showcases en Gràcia, Barcelona. Loft de 175m² con paredes neutras, iluminación profesional y sistema de colgado. Ideal para vernissages, presentaciones y eventos artísticos."
        keywords="espacio expositivo barcelona, presentación artistas barcelona, exposiciones barcelona, alquiler sala arte, vernissage barcelona, presentación libro barcelona, artistas emergentes barcelona, exposición temporal barcelona, espacio expositivo gràcia, pop-up gallery barcelona, showcase barcelona"
        canonical="https://casaprisma.com/galeria-arte"
        ogImage="/scenes/galeria-exposicion.jpg"
      />

      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <img src="/scenes/galeria-exposicion.jpg" alt="Espacio expositivo en Casa Prisma Gràcia Barcelona |presentaciones de artistas, libros y exposiciones" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-prisma-navy/90 via-prisma-navy/40 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 lg:pb-24 pt-32">
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-6">Espacio expositivo</span>
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">Exposiciones y Presentaciones</h1>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-lg">Un loft único de 175m² para presentaciones de artistas, libros, exposiciones temporales y showcases creativos en el barrio más artístico de Barcelona.</p>
          <a href="#contact-form" className="group inline-flex items-center gap-3 bg-white text-prisma-navy px-8 py-4 rounded-full font-semibold text-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            Reservar <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="inline-block bg-prisma-navy/10 text-prisma-navy text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Espacio expositivo</span>
            <h2 className="text-display-lg text-prisma-charcoal max-w-xl">Tu espacio ideal</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { icon: Palette, title: 'Paredes Neutras', desc: 'Muros blancos perfectos para resaltar cualquier tipo de obra, desde pintura hasta instalaciones y proyecciones.', color: 'bg-prisma-navy' },
              { icon: Lightbulb, title: 'Iluminación Profesional', desc: 'Sistema LED regulable para destacar cada pieza o presentación con la intensidad perfecta.', color: 'bg-prisma-amber' },
              { icon: Frame, title: 'Sistema de Colgado', desc: 'Rieles profesionales para colgar obras de diferentes tamaños con total seguridad.', color: 'bg-prisma-navy' },
              { icon: Eye, title: 'Visibilidad Óptima', desc: 'Grandes ventanales que atraen la atención y proporcionan luz natural durante el día.', color: 'bg-prisma-olive' },
              { icon: Users, title: 'Capacidad Flexible', desc: 'Espacio para hasta 80 personas en inauguraciones, presentaciones y vernissages.', color: 'bg-prisma-teal' },
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
            <h2 className="text-display-lg text-prisma-charcoal">Tipos de eventos</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Presentaciones de Artistas', desc: 'Showcases y presentaciones de obra en un ambiente íntimo y profesional.', items: ['Inauguración con público', 'Iluminación dedicada', 'Promoción en redes', 'Catálogo digital'] },
              { title: 'Presentaciones de Libros', desc: 'Lanzamientos literarios en un espacio acogedor y con personalidad.', items: ['Formato conversación', 'Firma de ejemplares', 'Proyección y sonido', 'Catering opcional'] },
              { title: 'Exposiciones Temporales', desc: 'Muestras individuales o colectivas de duración flexible.', items: ['De 3 días a 4 semanas', 'Montaje profesional', 'Vernissage incluido', 'Networking artístico'] },
              { title: 'Showcases y Pop-Ups', desc: 'Eventos creativos efímeros con impacto visual.', items: ['Proyección HD', 'Arte interactivo', 'Instalaciones multimedia', 'Montaje express'] },
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
