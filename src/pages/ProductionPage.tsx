import React from 'react';
import { ArrowRight, Camera, Video, Mic, Lightbulb, Monitor, Zap } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ContactForm from '../components/ContactForm';

const ProductionPage: React.FC = () => {
  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    contactForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title="Producción Audiovisual Barcelona - Casa Prisma Gràcia | Estudio Grabación"
        description="Alquila estudio para producción audiovisual en Gràcia, Barcelona. Loft de 175m² ideal para shootings fotográficos, grabación de video, podcasts, contenido digital y producciones comerciales. Equipamiento profesional incluido."
        keywords="producción audiovisual Barcelona, estudio grabación Barcelona, shooting Barcelona, video Barcelona, podcast Barcelona, contenido digital Barcelona, estudio fotografía Barcelona, producción video Barcelona, alquiler estudio audiovisual, filming location Barcelona, photo studio Barcelona, video production Barcelona, content creation Barcelona, commercial production Barcelona, advertising production Barcelona, social media content Barcelona, youtube studio Barcelona, streaming studio Barcelona, photography studio Barcelona, video studio Barcelona, production space Barcelona, creative production Barcelona, media production Barcelona, digital content Barcelona"
        canonical="https://casaprisma.com/produccion"
        ogImage="/1302974713.webp"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="/1302974713.webp"
            alt="Estudio de producción audiovisual en Gràcia"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-orange-900/30"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight leading-none">
            PRODUCCIÓN
            <span className="block text-orange-400 italic font-light">Audiovisual</span>
          </h1>
          
          <p className="text-xl md:text-3xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            Crea <span className="text-orange-400 font-medium">contenido</span> que impacte
          </p>

          <button
            onClick={scrollToContact}
            className="bg-orange-500 text-white px-10 py-4 rounded-none font-bold text-lg hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            RESERVA TU PRODUCCIÓN
          </button>
        </div>
      </section>

      {/* Production Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              ESTUDIO
              <span className="block text-orange-500 italic font-light">completo</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Todo lo que necesitas para crear contenido profesional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Camera className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Fotografía Profesional</h3>
              <p className="text-gray-600">Sesiones de fotos para productos, retratos y contenido comercial.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Video className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Grabación de Video</h3>
              <p className="text-gray-600">Producción de videos corporativos, musicales y contenido digital.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Mic className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Podcasts & Audio</h3>
              <p className="text-gray-600">Grabación profesional de podcasts y contenido de audio.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Lightbulb className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Iluminación Pro</h3>
              <p className="text-gray-600">Sistema completo de iluminación LED y equipos de estudio.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Monitor className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Streaming & Live</h3>
              <p className="text-gray-600">Configuración para transmisiones en vivo y eventos virtuales.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Zap className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Post-Producción</h3>
              <p className="text-gray-600">Edición, color grading y finalización de proyectos.</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 bg-orange-500 text-white px-10 py-4 rounded-none font-bold text-lg hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              INICIA TU PROYECTO
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Equipment Details */}
      <section className="py-24 bg-orange-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-12">EQUIPAMIENTO DISPONIBLE</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-orange-800/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">CÁMARAS & LENTES</h3>
              <p className="mb-6">Equipos de grabación de alta calidad para cualquier proyecto.</p>
              <ul className="text-left space-y-2">
                <li>✓ Cámaras 4K profesionales</li>
                <li>✓ Lentes intercambiables</li>
                <li>✓ Estabilizadores gimbal</li>
                <li>✓ Trípodes y soportes</li>
              </ul>
            </div>

            <div className="bg-orange-800/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">AUDIO PROFESIONAL</h3>
              <p className="mb-6">Captura de sonido cristalino para todos tus proyectos.</p>
              <ul className="text-left space-y-2">
                <li>✓ Micrófonos direccionales</li>
                <li>✓ Sistemas inalámbricos</li>
                <li>✓ Grabadoras multipista</li>
                <li>✓ Monitoreo en tiempo real</li>
              </ul>
            </div>

            <div className="bg-orange-800/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">ILUMINACIÓN</h3>
              <p className="mb-6">Control total sobre la iluminación de tus producciones.</p>
              <ul className="text-left space-y-2">
                <li>✓ Paneles LED regulables</li>
                <li>✓ Softboxes y difusores</li>
                <li>✓ Luces de colores RGB</li>
                <li>✓ Sistemas de control remoto</li>
              </ul>
            </div>

            <div className="bg-orange-800/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">POST-PRODUCCIÓN</h3>
              <p className="mb-6">Estación de trabajo completa para edición y finalización.</p>
              <ul className="text-left space-y-2">
                <li>✓ Software profesional</li>
                <li>✓ Monitores calibrados</li>
                <li>✓ Almacenamiento rápido</li>
                <li>✓ Renderizado acelerado</li>
              </ul>
            </div>
          </div>

          <button
            onClick={scrollToContact}
            className="bg-white text-orange-900 px-10 py-4 rounded-none font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            CONSULTA DISPONIBILIDAD DE EQUIPO
          </button>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-12 text-gray-900">TIPOS DE CONTENIDO</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">COMERCIAL</h3>
              <ul className="text-left space-y-2 mb-6">
                <li>✓ Videos corporativos</li>
                <li>✓ Publicidad</li>
                <li>✓ Testimoniales</li>
                <li>✓ Presentaciones</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-orange-500">
              <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4">REDES SOCIALES</h3>
              <ul className="text-left space-y-2 mb-6">
                <li>✓ Instagram Reels</li>
                <li>✓ TikTok videos</li>
                <li>✓ YouTube content</li>
                <li>✓ Stories & posts</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">ARTÍSTICO</h3>
              <ul className="text-left space-y-2 mb-6">
                <li>✓ Videoclips</li>
                <li>✓ Documentales</li>
                <li>✓ Cortometrajes</li>
                <li>✓ Arte digital</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
};

export default ProductionPage;