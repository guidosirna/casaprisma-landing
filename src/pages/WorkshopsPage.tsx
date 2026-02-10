import React from 'react';
import { ArrowRight, Users, Lightbulb, Target, BookOpen, Coffee, Zap } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ContactForm from '../components/ContactForm';

const features = [
  { icon: Users, title: 'Grupos Íntimos', desc: 'Hasta 20 personas en formato círculo o 15 en dinámicas de taller para una experiencia cercana y personalizada.', color: 'bg-prisma-coral' },
  { icon: Target, title: 'Proyección HD', desc: 'Sistema de proyección profesional y pantalla de gran formato para presentaciones impactantes.', color: 'bg-prisma-amber' },
  { icon: Lightbulb, title: 'Iluminación Adaptable', desc: 'Control total de la iluminación para crear el ambiente perfecto según el tipo de actividad.', color: 'bg-prisma-navy' },
  { icon: BookOpen, title: 'Material Didáctico', desc: 'Pizarras, flipcharts y material básico para dinámicas de grupo y sesiones interactivas.', color: 'bg-prisma-olive' },
  { icon: Coffee, title: 'Coffee Break', desc: 'Zona de descanso con cocina equipada para pausas, networking y momentos de conexión.', color: 'bg-prisma-teal' },
  { icon: Zap, title: 'Tecnología Integrada', desc: 'WiFi de alta velocidad, enchufes en todas las zonas y conectividad completa para todos los asistentes.', color: 'bg-prisma-coral' },
];

const sessions = [
  { title: 'Masterclasses', desc: 'Sesiones íntimas con expertos en ambiente relajado.', items: ['Máximo 15 personas', 'Grabación opcional', 'Material de apoyo', 'Coffee break casero'], featured: false },
  { title: 'Workshops Creativos', desc: 'Talleres hands-on en ambiente hogareño y creativo.', items: ['Dinámicas participativas', 'Máximo 12 personas', 'Material incluido', 'Ambiente relajado'], featured: true },
  { title: 'Charlas Inspiracionales', desc: 'Charlas íntimas tipo living room talks con expertos.', items: ['Formato conversación', 'Q&A con audiencia', 'Máximo 20 personas', 'Ambiente de salón'], featured: false },
  { title: 'Retiros Creativos', desc: 'Sesiones intensivas para equipos creativos.', items: ['Ambiente hogareño', 'Team building creativo', 'Comida casera disponible', 'Máximo 15 personas'], featured: false },
];

const WorkshopsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Alquiler Sala Workshops Barcelona — Talleres Creativos Gràcia | Casa Prisma"
        description="Alquiler de sala para workshops y talleres creativos en Gràcia, Barcelona. Loft de 175m² con proyección HD, material didáctico y cocina equipada. Ideal para masterclasses, charlas, formaciones, retiros creativos y sesiones de grupo en un ambiente acogedor e inspirador."
        keywords="sala talleres barcelona, espacio workshops, alquiler sala formación, masterclass barcelona, taller creativo barcelona, alquiler sala workshop gràcia, espacio formación barcelona, sala conferencias barcelona, charla inspiracional barcelona, retiro creativo barcelona, workshop arte barcelona, taller artistas barcelona, sala cursos barcelona, espacio educativo gràcia, formación profesional barcelona, team building creativo, alquiler aula barcelona, taller diseño barcelona, workshop fotografía barcelona, sala seminarios barcelona"
        canonical="https://casaprisma.com/workshops"
        ogImage="/workshop-corporativo.jpg"
      />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <img src="/workshop-corporativo.jpg" alt="Workshop corporativo en Casa Prisma Gràcia Barcelona — sala para talleres y formaciones" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-prisma-coral/90 via-prisma-coral/40 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 lg:pb-24 pt-32">
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-6">Workshops y talleres</span>
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">Aprende Creando</h1>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-lg">Un loft íntimo de 175m² perfecto para masterclasses, talleres creativos y sesiones de formación en grupo reducido en Gràcia.</p>
          <a href="#contact-form" className="group inline-flex items-center gap-3 bg-white text-prisma-coral px-8 py-4 rounded-full font-semibold text-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            Reserva tu workshop <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="inline-block bg-prisma-coral/10 text-prisma-coral text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Espacio educativo</span>
            <h2 className="text-display-lg text-prisma-charcoal max-w-xl">Aprende en un entorno único</h2>
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

      {/* Sessions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="inline-block bg-prisma-coral/10 text-prisma-coral text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Formatos</span>
            <h2 className="text-display-lg text-prisma-charcoal">Tipos de sesiones</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {sessions.map((cat, i) => (
              <div key={i} className={`bg-white rounded-2xl p-8 ${cat.featured ? 'ring-2 ring-prisma-coral shadow-lg relative' : 'shadow-sm hover:shadow-md transition-shadow'}`}>
                {cat.featured && <span className="absolute -top-3 left-6 bg-prisma-coral text-white px-4 py-1 text-xs font-semibold rounded-full">Popular</span>}
                <h3 className="font-display font-bold text-prisma-charcoal text-lg mb-3">{cat.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{cat.desc}</p>
                <ul className="space-y-2 text-gray-500 text-sm">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2"><span className="text-prisma-coral font-bold">✓</span> {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm accentColor="bg-prisma-coral" />
    </>
  );
};

export default WorkshopsPage;
