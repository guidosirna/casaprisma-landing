import React from 'react';
import { ArrowRight, Music, Mic, Headphones, Volume2, Radio, Zap } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ContactForm from '../components/ContactForm';

const features = [
  { icon: Mic, title: 'Microfonía Premium', desc: 'Micrófonos de condensador y dinámicos de alta gama para capturar voces e instrumentos con claridad.', color: 'bg-prisma-purple' },
  { icon: Headphones, title: 'Monitoreo Profesional', desc: 'Auriculares y monitores de estudio de referencia para mezcla y masterización precisa.', color: 'bg-prisma-amber' },
  { icon: Volume2, title: 'Sistema de Sonido', desc: 'Amplificadores y altavoces de alta fidelidad para reproducción y ensayos con sonido envolvente.', color: 'bg-prisma-navy' },
  { icon: Radio, title: 'Mesa de Mezclas', desc: 'Consola digital con múltiples canales, efectos integrados y conectividad completa.', color: 'bg-prisma-olive' },
  { icon: Music, title: 'Instrumentos', desc: 'Piano digital, amplificadores de guitarra y percusión básica disponibles para tus sesiones.', color: 'bg-prisma-teal' },
  { icon: Zap, title: 'Software DAW', desc: 'Estaciones de trabajo digital con software profesional para grabación, edición y producción.', color: 'bg-prisma-purple' },
];

const services = [
  { title: 'Grabación', desc: 'Sesiones de grabación para solistas, bandas y proyectos musicales.', items: ['Grabación multipista', 'Voces e instrumentos', 'Técnico de sonido incluido', 'Archivos en alta calidad'] },
  { title: 'Producción', desc: 'Servicios completos de producción musical y post-producción.', items: ['Mezcla profesional', 'Masterización', 'Arreglos musicales', 'Asesoramiento creativo'] },
  { title: 'Ensayos', desc: 'Espacio acondicionado para ensayos de bandas y músicos.', items: ['Amplificadores disponibles', 'Batería básica', 'Sistema de monitoreo', 'Horarios flexibles'] },
  { title: 'Podcasts', desc: 'Grabación profesional de podcasts y contenido de audio.', items: ['Micrófonos de calidad', 'Tratamiento acústico', 'Edición incluida', 'Formatos de distribución'] },
];

const MusicStudioPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Estudio Musical Barcelona — Grabación y Producción Gràcia | Casa Prisma"
        description="Alquiler de estudio musical profesional en Gràcia, Barcelona. Espacio de 175m² con equipamiento de sonido profesional, grabación multipista y producción musical. Sala de ensayo, estudio de grabación y producción completo para músicos, bandas y productores."
        keywords="estudio grabación barcelona, producción musical barcelona, sala ensayo barcelona, estudio sonido gràcia, alquiler estudio musical, grabación profesional barcelona, mezcla mastering barcelona, estudio música gràcia, sala música barcelona, recording studio barcelona, music production barcelona, alquiler sala ensayo barcelona, estudio podcast barcelona, grabación multipista barcelona, productor musical barcelona, estudio audio profesional, sala grabación gràcia, estudio sonido barcelona, músicos barcelona estudio, banda ensayo barcelona"
        canonical="https://casaprisma.com/estudio-musical"
        ogImage="/concierto-intimo.jpg"
      />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <img src="/concierto-intimo.jpg" alt="Concierto íntimo en Casa Prisma Gràcia Barcelona — sala para música en vivo y grabación" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-prisma-purple/90 via-prisma-purple/40 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 lg:pb-24 pt-32">
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-6">Estudio musical</span>
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">Graba y Produce</h1>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-lg">Estudio profesional de 175m² con equipamiento de alta calidad para grabación, producción y ensayos en el corazón de Gràcia.</p>
          <a href="#contact-form" className="group inline-flex items-center gap-3 bg-white text-prisma-purple px-8 py-4 rounded-full font-semibold text-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            Reserva tu sesión <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="inline-block bg-prisma-purple/10 text-prisma-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Equipamiento profesional</span>
            <h2 className="text-display-lg text-prisma-charcoal max-w-xl">Tu estudio completo</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <div className={`w-12 h-12 ${f.color} rounded-full flex items-center justify-center mb-5`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-prisma-charcoal text-lg mb-2">{f.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="inline-block bg-prisma-purple/10 text-prisma-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Servicios musicales</span>
            <h2 className="text-display-lg text-prisma-charcoal">Crea tu música</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((cat, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-display font-bold text-prisma-charcoal text-lg mb-3">{cat.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{cat.desc}</p>
                <ul className="space-y-2 text-gray-500 text-sm">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2"><span className="text-prisma-purple font-bold">✓</span> {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm accentColor="bg-prisma-purple" />
    </>
  );
};

export default MusicStudioPage;
