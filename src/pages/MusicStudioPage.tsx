import React from 'react';
import { ArrowRight, Music, Mic, Headphones, Volume2, Radio, Zap } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ContactForm from '../components/ContactForm';

const MusicStudioPage: React.FC = () => {
  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    contactForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title="Estudio Musical Barcelona - Casa Prisma Gràcia | Grabación Profesional"
        description="Alquila estudio musical profesional en Gràcia, Barcelona. Loft de 175m² con equipamiento de sonido profesional, grabación multipista y producción musical. Sala de ensayo y estudio de grabación completo."
        keywords="estudio musical Barcelona, grabación Barcelona, producción musical Gràcia, estudio sonido Barcelona, alquiler estudio musical, sala ensayo Barcelona, estudio grabación Barcelona, producción musical Barcelona, alquiler sala ensayo, estudio sonido profesional, grabación profesional Barcelona, mixing mastering Barcelona, estudio podcast Barcelona, sala música Barcelona, alquiler estudio sonido, recording studio Barcelona, music production Barcelona, rehearsal room Barcelona, sound studio rental, audio recording Barcelona, music studio rental Barcelona, professional recording Barcelona, band rehearsal Barcelona, music production space"
        canonical="https://casaprisma.com/estudio-musical"
        ogImage="/1302974661.webp"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="/1302974661.webp"
            alt="Estudio musical profesional en Gràcia"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-purple-900/30"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight leading-none">
            ESTUDIO
            <span className="block text-purple-400 italic font-light">Musical</span>
          </h1>
          
          <p className="text-xl md:text-3xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            Graba tu próximo <span className="text-purple-400 font-medium">hit</span> en Gràcia
          </p>

          <button
            onClick={scrollToContact}
            className="bg-purple-500 text-white px-10 py-4 rounded-none font-bold text-lg hover:bg-purple-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            RESERVA TU SESIÓN
          </button>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              EQUIPAMIENTO
              <span className="block text-purple-500 italic font-light">profesional</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Equipamiento profesional para crear música de calidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Mic className="w-12 h-12 text-purple-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Microfonía Premium</h3>
              <p className="text-gray-600">Micrófonos de condensador y dinámicos para voces e instrumentos.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Headphones className="w-12 h-12 text-purple-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Monitoreo Profesional</h3>
              <p className="text-gray-600">Auriculares y monitores de estudio para mezcla y masterización.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Volume2 className="w-12 h-12 text-purple-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Sistema de Sonido</h3>
              <p className="text-gray-600">Amplificadores y altavoces de alta fidelidad para reproducción.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Radio className="w-12 h-12 text-purple-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Mesa de Mezclas</h3>
              <p className="text-gray-600">Consola digital con múltiples canales y efectos integrados.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Music className="w-12 h-12 text-purple-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Instrumentos</h3>
              <p className="text-gray-600">Piano digital, amplificadores de guitarra y percusión básica.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Zap className="w-12 h-12 text-purple-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Software DAW</h3>
              <p className="text-gray-600">Estaciones de trabajo digital para grabación y producción.</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 bg-purple-500 text-white px-10 py-4 rounded-none font-bold text-lg hover:bg-purple-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              RESERVA TU ESTUDIO AHORA
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-purple-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-12">SERVICIOS MUSICALES</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-purple-800/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">GRABACIÓN</h3>
              <p className="mb-6">Sesiones de grabación para solistas, bandas y proyectos musicales.</p>
              <ul className="text-left space-y-2">
                <li>✓ Grabación multipista</li>
                <li>✓ Voces e instrumentos</li>
                <li>✓ Técnico de sonido incluido</li>
                <li>✓ Archivos en alta calidad</li>
              </ul>
            </div>

            <div className="bg-purple-800/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">PRODUCCIÓN</h3>
              <p className="mb-6">Servicios completos de producción musical y post-producción.</p>
              <ul className="text-left space-y-2">
                <li>✓ Mezcla profesional</li>
                <li>✓ Masterización</li>
                <li>✓ Arreglos musicales</li>
                <li>✓ Asesoramiento creativo</li>
              </ul>
            </div>

            <div className="bg-purple-800/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">ENSAYOS</h3>
              <p className="mb-6">Espacio acondicionado para ensayos de bandas y músicos.</p>
              <ul className="text-left space-y-2">
                <li>✓ Amplificadores disponibles</li>
                <li>✓ Batería básica</li>
                <li>✓ Sistema de monitoreo</li>
                <li>✓ Horarios flexibles</li>
              </ul>
            </div>

            <div className="bg-purple-800/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">PODCASTS</h3>
              <p className="mb-6">Grabación profesional de podcasts y contenido de audio.</p>
              <ul className="text-left space-y-2">
                <li>✓ Micrófonos de calidad</li>
                <li>✓ Tratamiento acústico</li>
                <li>✓ Edición incluida</li>
                <li>✓ Formatos de distribución</li>
              </ul>
            </div>
          </div>

          <button
            onClick={scrollToContact}
            className="bg-white text-purple-900 px-10 py-4 rounded-none font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            CONSULTA DISPONIBILIDAD
          </button>
        </div>
      </section>

      <ContactForm />
    </>
  );
};

export default MusicStudioPage;