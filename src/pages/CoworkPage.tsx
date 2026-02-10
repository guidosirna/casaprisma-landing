import React from 'react';
import { ArrowRight, Users, Wifi, Coffee, Sun, Zap, MapPin } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ContactForm from '../components/ContactForm';

const CoworkPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Coworking Creativo Barcelona — Alquiler Oficina Gràcia | Casa Prisma"
        description="Espacio de coworking creativo en Gràcia, Barcelona. Loft de 175m² con luz natural, WiFi de alta velocidad y cocina equipada. Alquiler flexible por día, semana o mes para freelancers, startups y equipos creativos."
        keywords="coworking barcelona, oficina compartida gràcia, espacio trabajo creativo, alquiler cowork barcelona, freelancer barcelona, startup office barcelona, cowork creativo barcelona, oficina flexible gràcia, hot desk barcelona, espacio coworking gràcia"
        canonical="https://casaprisma.com/cowork"
        ogImage="/1302974713.webp"
      />

      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <img src="/1302974713.webp" alt="Espacio de coworking creativo en Gràcia Barcelona — oficina compartida con luz natural" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-prisma-teal/90 via-prisma-teal/40 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 lg:pb-24 pt-32">
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-6">Coworking creativo</span>
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">Tu oficina en Gràcia</h1>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-lg">175m² de espacio compartido con luz natural y ambiente colaborativo en el barrio más creativo de Barcelona.</p>
          <a href="#contact-form" className="group inline-flex items-center gap-3 bg-white text-prisma-teal px-8 py-4 rounded-full font-semibold text-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            Reservar <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="inline-block bg-prisma-teal/10 text-prisma-teal text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Espacio de trabajo</span>
            <h2 className="text-display-lg text-prisma-charcoal max-w-xl">Un cowork diferente</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'Ambiente Colaborativo', desc: 'Espacio abierto que fomenta la creatividad y las conexiones entre profesionales creativos.', color: 'bg-prisma-teal' },
              { icon: Sun, title: 'Luz Natural', desc: 'Grandes ventanales que inundan el espacio de luz natural durante todo el día.', color: 'bg-prisma-amber' },
              { icon: Wifi, title: 'WiFi Alta Velocidad', desc: 'Conexión de fibra óptica para que tu trabajo fluya sin interrupciones.', color: 'bg-prisma-navy' },
              { icon: Coffee, title: 'Coffee Corner', desc: 'Cocina equipada y zona de descanso para recargar energías entre reuniones.', color: 'bg-prisma-olive' },
              { icon: Zap, title: 'Flexibilidad Total', desc: 'Adapta el espacio según tus necesidades: individual, equipo o eventos.', color: 'bg-prisma-teal' },
              { icon: MapPin, title: 'Ubicación Premium', desc: 'En Gràcia, el barrio más creativo y bien conectado de Barcelona.', color: 'bg-prisma-amber' },
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
            <span className="inline-block bg-prisma-teal/10 text-prisma-teal text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Tarifas</span>
            <h2 className="text-display-lg text-prisma-charcoal">Planes flexibles</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Día Completo', price: '60€', unit: '/día', note: 'Acceso puntual', items: ['Acceso 9:00 – 22:00', 'WiFi alta velocidad', 'Coffee corner', 'Espacio flexible'], featured: false },
              { name: 'Semanal', price: '250€', unit: '/semana', note: 'Ahorro de 25€/día', items: ['Acceso extendido 8:00–23:00', 'WiFi alta velocidad', 'Coffee corner', 'Espacio flexible', 'Llave personal'], featured: true },
              { name: 'Mensual', price: '800€', unit: '/mes', note: 'Ahorro de 33€/día', items: ['Acceso extendido 8:00–23:00', 'WiFi alta velocidad', 'Coffee corner', 'Espacio flexible', 'Llave personal', 'Almacenamiento personal'], featured: false },
            ].map((plan, i) => (
              <div key={i} className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative ${plan.featured ? 'ring-2 ring-prisma-teal' : ''}`}>
                {plan.featured && <span className="absolute -top-3 left-6 bg-prisma-teal text-white px-4 py-1 text-xs font-semibold rounded-full">Más popular</span>}
                <h3 className="font-display font-bold text-prisma-charcoal text-xl mb-4">{plan.name}</h3>
                <p className="text-4xl font-display font-bold text-prisma-teal mb-1">{plan.price}<span className="text-base font-normal text-gray-400">{plan.unit}</span></p>
                <p className="text-xs text-gray-400 mb-6">{plan.note}</p>
                <ul className="space-y-3 mb-8 text-gray-500 text-sm">
                  {plan.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2"><span className="text-prisma-teal font-bold">✓</span> {item}</li>
                  ))}
                </ul>
                <a href="#contact-form" className={`block w-full text-center py-3 rounded-full font-semibold text-sm transition-all duration-300 ${plan.featured ? 'bg-prisma-teal text-white hover:shadow-lg hover:scale-[1.02]' : 'bg-gray-50 text-prisma-teal hover:bg-prisma-teal hover:text-white'}`}>
                  Reservar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm accentColor="bg-prisma-teal" />
    </>
  );
};

export default CoworkPage;
