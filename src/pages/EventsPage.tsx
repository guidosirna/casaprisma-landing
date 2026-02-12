import React from 'react';
import { ArrowRight, Heart, Sparkles, Users, UtensilsCrossed, Music, Lightbulb } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ContactForm from '../components/ContactForm';

const features = [
  { icon: Heart, title: 'Cenas Privadas', desc: 'Cenas íntimas para hasta 40 invitados en un ambiente exclusivo y acogedor con decoración personalizada.', color: 'bg-prisma-olive' },
  { icon: Sparkles, title: 'Celebraciones Especiales', desc: 'Cumpleaños, aniversarios y fiestas en un loft único lleno de personalidad y encanto.', color: 'bg-prisma-amber' },
  { icon: Users, title: 'Eventos Corporativos', desc: 'Presentaciones de marca, lanzamientos de producto y networking en un ambiente inspirador.', color: 'bg-prisma-navy' },
  { icon: UtensilsCrossed, title: 'Catering Incluido', desc: 'Menús personalizados, servicio de camareros, barra libre opcional y cocina casera de calidad.', color: 'bg-prisma-olive' },
  { icon: Music, title: 'Música y Ambiente', desc: 'Sistema de sonido profesional, iluminación ambiental y posibilidad de conciertos íntimos en vivo.', color: 'bg-prisma-teal' },
  { icon: Lightbulb, title: 'Decoración Personalizada', desc: 'Ambientación temática a medida con flores, iluminación, centros de mesa y elementos decorativos.', color: 'bg-prisma-amber' },
];

const services = [
  { title: 'Catering y Bar', desc: 'Servicio completo de comida y bebidas para tu evento.', items: ['Menús personalizados', 'Servicio de camareros', 'Barra libre opcional', 'Comida casera y saludable'] },
  { title: 'Decoración', desc: 'Ambientación personalizada según tu visión.', items: ['Diseño temático', 'Iluminación ambiental', 'Flores y centros de mesa', 'Elementos decorativos'] },
  { title: 'Audiovisual', desc: 'Tecnología para presentaciones y entretenimiento.', items: ['Sistema de sonido', 'Proyección HD', 'Iluminación profesional', 'Micrófonos inalámbricos'] },
  { title: 'Coordinación', desc: 'Gestión completa de principio a fin.', items: ['Planificación detallada', 'Coordinación proveedores', 'Supervisión del evento', 'Limpieza post-evento'] },
];

const EventsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Alquiler Espacio Eventos Privados Barcelona |Loft Gràcia | Casa Prisma"
        description="Alquiler de loft para eventos privados en Gràcia, Barcelona. Espacio de 175m² ideal para cenas privadas, presentaciones de marca, celebraciones exclusivas, fiestas y eventos corporativos. Venue único con catering, decoración y coordinación incluidos."
        keywords="alquiler sala eventos barcelona, espacio eventos privados, venue barcelona, loft eventos gràcia, cena privada barcelona, presentación marca barcelona, alquiler espacio celebraciones, fiesta privada barcelona, evento corporativo gràcia, dinner party barcelona, alquiler loft eventos, venue exclusivo barcelona, sala celebraciones gràcia, evento boutique barcelona, cumpleaños barcelona loft, networking event barcelona, team building barcelona, cocktail party barcelona, lanzamiento producto barcelona, espacio fiestas barcelona"
        canonical="https://casaprisma.com/eventos"
        ogImage="/scenes/evento-moda.jpg"
      />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <img src="/scenes/evento-moda.jpg" alt="Evento privado en Casa Prisma Gràcia Barcelona |loft para presentaciones y celebraciones exclusivas" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-prisma-olive/90 via-prisma-olive/40 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 lg:pb-24 pt-32">
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-6">Eventos privados</span>
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">Celebraciones Únicas</h1>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-lg">Un loft único de 175m² para tus celebraciones más especiales. Cenas privadas, presentaciones de marca y eventos exclusivos en Gràcia.</p>
          <a href="#contact-form" className="group inline-flex items-center gap-3 bg-white text-prisma-olive px-8 py-4 rounded-full font-semibold text-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            Planifica tu evento <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="inline-block bg-prisma-olive/10 text-prisma-olive text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Tu evento ideal</span>
            <h2 className="text-display-lg text-prisma-charcoal max-w-xl">Celebraciones memorables</h2>
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
            <span className="inline-block bg-prisma-olive/10 text-prisma-olive text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Servicios</span>
            <h2 className="text-display-lg text-prisma-charcoal">Todo incluido</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((cat, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-display font-bold text-prisma-charcoal text-lg mb-3">{cat.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{cat.desc}</p>
                <ul className="space-y-2 text-gray-500 text-sm">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2"><span className="text-prisma-olive font-bold">✓</span> {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm accentColor="bg-prisma-olive" />
    </>
  );
};

export default EventsPage;
