import React from 'react';
import { ArrowRight, Users, Wifi, Coffee, Sun, Zap } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ContactForm from '../components/ContactForm';

const CoworkPage: React.FC = () => {
  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    contactForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title="Cowork Creativo Barcelona - Casa Prisma Gràcia | Alquiler Oficina"
        description="Alquila espacio de cowork creativo en Gràcia, Barcelona. Loft de 175m² con luz natural, WiFi de alta velocidad, cocina equipada y ambiente inspirador para freelancers, startups y equipos creativos. Oficina compartida flexible."
        keywords="cowork Barcelona, coworking Barcelona, oficina compartida Barcelona, espacio trabajo Barcelona, coworking Gràcia, oficina freelancer Barcelona, espacio creativo Barcelona, alquiler oficina Barcelona, oficina temporal Barcelona, espacio profesional Barcelona, sala reuniones Barcelona, oficina creativa Gràcia, cowork creativo Barcelona, espacio trabajo creativo, oficina flexible Barcelona, alquiler espacio trabajo, coworking space Barcelona, shared office Barcelona, creative office Barcelona, freelancer office Barcelona, startup office Barcelona, hot desk Barcelona, dedicated desk Barcelona, private office Barcelona, meeting room Barcelona, business center Barcelona, workspace Barcelona"
        canonical="https://casaprisma.com/cowork"
        ogImage="/1302974713.webp"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="/1302974713.webp"
            alt="Espacio de cowork creativo en Gràcia"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-green-900/30"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight leading-none">
            COWORK
            <span className="block text-green-400 italic font-light">Creativo</span>
          </h1>
          
          <p className="text-xl md:text-3xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            Tu oficina inspiradora en el corazón de <span className="text-green-400 font-medium">Gràcia</span>
          </p>

          <button
            onClick={scrollToContact}
            className="bg-green-500 text-black px-10 py-4 rounded-none font-bold text-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            RESERVA TU ESPACIO DE TRABAJO
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              COWORK
              <span className="block text-green-500 italic font-light">diferente</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un espacio diseñado para potenciar tu creatividad y productividad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Users className="w-12 h-12 text-green-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Ambiente Colaborativo</h3>
              <p className="text-gray-600">Espacio abierto que fomenta la creatividad y las conexiones entre profesionales.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Sun className="w-12 h-12 text-green-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Luz Natural</h3>
              <p className="text-gray-600">Grandes ventanales que inundan el espacio de luz natural durante todo el día.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Wifi className="w-12 h-12 text-green-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">WiFi de Alta Velocidad</h3>
              <p className="text-gray-600">Conexión de fibra óptica para que tu trabajo fluya sin interrupciones.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Coffee className="w-12 h-12 text-green-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Coffee Corner</h3>
              <p className="text-gray-600">Cocina equipada y zona de descanso para recargar energías.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Zap className="w-12 h-12 text-green-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Flexibilidad Total</h3>
              <p className="text-gray-600">Adapta el espacio según tus necesidades: individual, equipo o eventos.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Users className="w-12 h-12 text-green-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Comunidad Creativa</h3>
              <p className="text-gray-600">Conecta con otros creativos, freelancers y emprendedores de Barcelona.</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 bg-green-500 text-black px-10 py-4 rounded-none font-bold text-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              RESERVA TU COWORK AHORA
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-12">TARIFAS FLEXIBLES</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">DÍA COMPLETO</h3>
              <p className="text-4xl font-black text-green-500 mb-6">€60<span className="text-lg text-gray-500">/día</span></p>
              <ul className="text-left space-y-2 mb-8">
                <li>✓ Acceso 9:00 - 22:00</li>
                <li>✓ WiFi alta velocidad</li>
                <li>✓ Coffee corner</li>
                <li>✓ Espacio flexible</li>
              </ul>
              <button onClick={scrollToContact} className="w-full bg-green-500 text-black py-3 font-bold hover:bg-green-400 transition-colors">
                RESERVAR
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-500">
              <div className="bg-green-500 text-black px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                MÁS POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4">SEMANAL</h3>
              <p className="text-4xl font-black text-green-500 mb-2">€250<span className="text-lg text-gray-500">/semana</span></p>
              <p className="text-sm text-gray-500 mb-6">€35/día (ahorro de €25/día)</p>
              <ul className="text-left space-y-2 mb-8">
                <li>✓ Acceso extendido 8:00-23:00</li>
                <li>✓ WiFi alta velocidad</li>
                <li>✓ Coffee corner</li>
                <li>✓ Espacio flexible</li>
                <li>✓ Llave personal</li>
              </ul>
              <button onClick={scrollToContact} className="w-full bg-green-500 text-black py-3 font-bold hover:bg-green-400 transition-colors">
                RESERVAR
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">MENSUAL</h3>
              <p className="text-4xl font-black text-green-500 mb-2">€800<span className="text-lg text-gray-500">/mes</span></p>
              <p className="text-sm text-gray-500 mb-6">€27/día (ahorro de €33/día)</p>
              <ul className="text-left space-y-2 mb-8">
                <li>✓ Acceso extendido 8:00-23:00</li>
                <li>✓ WiFi alta velocidad</li>
                <li>✓ Coffee corner</li>
                <li>✓ Espacio flexible</li>
                <li>✓ Llave personal</li>
                <li>✓ Almacenamiento personal</li>
              </ul>
              <button onClick={scrollToContact} className="w-full bg-green-500 text-black py-3 font-bold hover:bg-green-400 transition-colors">
                RESERVAR
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
};

export default CoworkPage;