import React from 'react';
import { ArrowRight, Users, Lightbulb, Target, BookOpen, Coffee, Zap } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ContactForm from '../components/ContactForm';

const WorkshopsPage: React.FC = () => {
  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    contactForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title="Workshops Barcelona - Casa Prisma Gràcia | Alquiler Sala Formación"
        description="Alquila sala para workshops y formación en Gràcia, Barcelona. Loft de 175m² ideal para masterclasses, charlas, eventos educativos y sesiones de formación. Ambiente inspirador con tecnología integrada."
        keywords="workshop Barcelona, sala formación Gràcia, masterclass Barcelona, charla Barcelona, evento educativo Barcelona, alquiler sala workshop, sala formación Barcelona, alquiler aula Barcelona, espacio formación Barcelona, sala conferencias Barcelona, alquiler sala charlas, workshop space Barcelona, training room Barcelona, seminar room Barcelona, educational space Barcelona, learning space Barcelona, presentation room Barcelona, conference room Barcelona, meeting space Barcelona, corporate training Barcelona, professional development Barcelona, skill workshop Barcelona, creative workshop Barcelona, business workshop Barcelona"
        canonical="https://casaprisma.com/workshops"
        ogImage="/1302974676.webp"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="/1302974676.webp"
            alt="Sala para workshops y formación en Gràcia"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-blue-900/30"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight leading-none">
            WORKSHOPS
            <span className="block text-blue-400 italic font-light">& Formación</span>
          </h1>
          
          <p className="text-xl md:text-3xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            Un loft íntimo y acogedor, perfecto para sesiones creativas en grupo reducido
          </p>

          <button
            onClick={scrollToContact}
            className="bg-blue-500 text-white px-10 py-4 rounded-none font-bold text-lg hover:bg-blue-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            RESERVA TU WORKSHOP
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              ESPACIO
              <span className="block text-blue-500 italic font-light">educativo</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ambiente acogedor diseñado para el aprendizaje y la conexión
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Users className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Grupos Íntimos</h3>
              <p className="text-gray-600">Hasta 20 personas en formato círculo o 15 en dinámicas de taller.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Target className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Proyección HD</h3>
              <p className="text-gray-600">Sistema de proyección profesional y pantalla de gran formato.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Lightbulb className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Iluminación Adaptable</h3>
              <p className="text-gray-600">Control total de la iluminación para crear el ambiente perfecto.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <BookOpen className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Material Didáctico</h3>
              <p className="text-gray-600">Pizarras, flipcharts y material básico para dinámicas de grupo.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Coffee className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Coffee Break</h3>
              <p className="text-gray-600">Zona de descanso con cocina equipada para pausas y networking.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Zap className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Tecnología Integrada</h3>
              <p className="text-gray-600">WiFi de alta velocidad, enchufes y conectividad para todos.</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 bg-blue-500 text-white px-10 py-4 rounded-none font-bold text-lg hover:bg-blue-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              RESERVA TU FORMACIÓN AHORA
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Workshop Types */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-12">TIPOS DE EVENTOS</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-blue-800/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">MASTERCLASSES</h3>
              <p className="mb-6">Sesiones íntimas con expertos en ambiente relajado.</p>
              <ul className="text-left space-y-2">
                <li>✓ Máximo 15 personas</li>
                <li>✓ Grabación opcional</li>
                <li>✓ Material de apoyo</li>
                <li>✓ Coffee break casero</li>
              </ul>
            </div>

            <div className="bg-blue-800/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">WORKSHOPS CREATIVOS</h3>
              <p className="mb-6">Talleres hands-on en ambiente hogareño y creativo.</p>
              <ul className="text-left space-y-2">
                <li>✓ Dinámicas participativas</li>
                <li>✓ Máximo 12 personas</li>
                <li>✓ Material incluido</li>
                <li>✓ Ambiente relajado</li>
              </ul>
            </div>

            <div className="bg-blue-800/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">CHARLAS INSPIRACIONALES</h3>
              <p className="mb-6">Charlas íntimas tipo 'living room talks' con expertos.</p>
              <ul className="text-left space-y-2">
                <li>✓ Formato conversación</li>
                <li>✓ Q&A con audiencia</li>
                <li>✓ Máximo 20 personas</li>
                <li>✓ Ambiente de salón</li>
              </ul>
            </div>

            <div className="bg-blue-800/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">RETIROS CREATIVOS</h3>
              <p className="mb-6">Sesiones intensivas para equipos creativos en ambiente relajado.</p>
              <ul className="text-left space-y-2">
                <li>✓ Ambiente hogareño</li>
                <li>✓ Team building creativo</li>
                <li>✓ Comida casera disponible</li>
                <li>✓ Máximo 15 personas</li>
              </ul>
            </div>
          </div>

          <button
            onClick={scrollToContact}
            className="bg-white text-blue-900 px-10 py-4 rounded-none font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            ORGANIZA TU SESIÓN CREATIVA
          </button>
        </div>
      </section>

      <ContactForm />
    </>
  );
};

export default WorkshopsPage;