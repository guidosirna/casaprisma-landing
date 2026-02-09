import React from 'react';
import { ArrowRight, Palette, Eye, Frame, Lightbulb, Users, Zap } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ContactForm from '../components/ContactForm';

const ArtGalleryPage: React.FC = () => {
  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    contactForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title="Galería Arte Barcelona - Casa Prisma Gràcia | Exhibiciones Temporales"
        description="Alquila galería de arte temporal en Gràcia, Barcelona. Loft de 175m² ideal para exhibiciones, vernissages, showcases artísticos y exposiciones temporales. Espacio único para artistas con iluminación profesional."
        keywords="galería arte Barcelona, exhibición arte Gràcia, vernissage Barcelona, showcase artístico Barcelona, espacio arte temporal Barcelona, galería temporal, exposición arte Barcelona, alquiler galería Barcelona, espacio exposición Barcelona, sala arte Barcelona, galería temporal Barcelona, art gallery Barcelona, art exhibition Barcelona, art space Barcelona, contemporary art Barcelona, art showcase Barcelona, artist exhibition Barcelona, pop-up gallery Barcelona, art venue Barcelona, creative exhibition Barcelona, cultural space Barcelona, art display Barcelona, gallery rental Barcelona, exhibition space Barcelona, art studio Barcelona, visual arts Barcelona"
        canonical="https://casaprisma.com/galeria-arte"
        ogImage="/1302974711.webp"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="/1302974711.webp"
            alt="Galería de arte temporal en Gràcia"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-teal-900/30"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight leading-none">
            GALERÍA
            <span className="block text-teal-400 italic font-light">Temporal</span>
          </h1>
          
          <p className="text-xl md:text-3xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            Exhibe tu <span className="text-teal-400 font-medium">arte</span> en el corazón de Gràcia
          </p>

          <button
            onClick={scrollToContact}
            className="bg-teal-500 text-white px-10 py-4 rounded-none font-bold text-lg hover:bg-teal-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            RESERVA TU EXHIBICIÓN
          </button>
        </div>
      </section>

      {/* Gallery Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              ESPACIO
              <span className="block text-teal-500 italic font-light">expositivo</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un espacio que se transforma en la galería perfecta para tu arte
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Palette className="w-12 h-12 text-teal-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Paredes Neutras</h3>
              <p className="text-gray-600">Muros blancos perfectos para resaltar cualquier tipo de obra artística.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Lightbulb className="w-12 h-12 text-teal-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Iluminación Profesional</h3>
              <p className="text-gray-600">Sistema de iluminación LED regulable para destacar cada pieza.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Frame className="w-12 h-12 text-teal-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Sistema de Colgado</h3>
              <p className="text-gray-600">Rieles profesionales para colgar obras de diferentes tamaños y pesos.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Eye className="w-12 h-12 text-teal-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Visibilidad Óptima</h3>
              <p className="text-gray-600">Grandes ventanales que atraen la atención desde la calle.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Users className="w-12 h-12 text-teal-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Capacidad Flexible</h3>
              <p className="text-gray-600">Espacio para hasta 80 personas en inauguraciones y vernissages.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Zap className="w-12 h-12 text-teal-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Ubicación Premium</h3>
              <p className="text-gray-600">En Gràcia, el barrio más artístico y cultural de Barcelona.</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 bg-teal-500 text-white px-10 py-4 rounded-none font-bold text-lg hover:bg-teal-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              PROGRAMA TU EXHIBICIÓN
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Exhibition Types */}
      <section className="py-24 bg-teal-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-12">TIPOS DE EXHIBICIONES</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-teal-800/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">EXPOSICIONES INDIVIDUALES</h3>
              <p className="mb-6">Muestra personal completa de un artista o colectivo.</p>
              <ul className="text-left space-y-2">
                <li>✓ Duración: 2-4 semanas</li>
                <li>✓ Inauguración incluida</li>
                <li>✓ Catálogo digital</li>
                <li>✓ Promoción en redes</li>
              </ul>
            </div>

            <div className="bg-teal-800/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">EXPOSICIONES COLECTIVAS</h3>
              <p className="mb-6">Muestra temática con varios artistas participantes.</p>
              <ul className="text-left space-y-2">
                <li>✓ Hasta 10 artistas</li>
                <li>✓ Tema unificador</li>
                <li>✓ Vernissage conjunto</li>
                <li>✓ Networking artístico</li>
              </ul>
            </div>

            <div className="bg-teal-800/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">POP-UP GALLERIES</h3>
              <p className="mb-6">Exhibiciones temporales de corta duración.</p>
              <ul className="text-left space-y-2">
                <li>✓ 3-7 días de duración</li>
                <li>✓ Montaje rápido</li>
                <li>✓ Ideal para eventos</li>
                <li>✓ Precios especiales</li>
              </ul>
            </div>

            <div className="bg-teal-800/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">SHOWCASES DIGITALES</h3>
              <p className="mb-6">Exhibición de arte digital y nuevos medios.</p>
              <ul className="text-left space-y-2">
                <li>✓ Proyección HD</li>
                <li>✓ Arte interactivo</li>
                <li>✓ Instalaciones multimedia</li>
                <li>✓ Tecnología integrada</li>
              </ul>
            </div>
          </div>

          <button
            onClick={scrollToContact}
            className="bg-white text-teal-900 px-10 py-4 rounded-none font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            PROPÓN TU PROYECTO ARTÍSTICO
          </button>
        </div>
      </section>

      {/* Artist Support */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-12 text-gray-900">APOYO AL ARTISTA</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">PROMOCIÓN</h3>
              <ul className="text-left space-y-2 mb-6">
                <li>✓ Redes sociales</li>
                <li>✓ Newsletter</li>
                <li>✓ Medios locales</li>
                <li>✓ Comunidad artística</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-teal-500">
              <div className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                INCLUIDO
              </div>
              <h3 className="text-2xl font-bold mb-4">SERVICIOS</h3>
              <ul className="text-left space-y-2 mb-6">
                <li>✓ Montaje profesional</li>
                <li>✓ Seguridad 24h</li>
                <li>✓ Seguro de obras</li>
                <li>✓ Limpieza diaria</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">NETWORKING</h3>
              <ul className="text-left space-y-2 mb-6">
                <li>✓ Coleccionistas</li>
                <li>✓ Críticos de arte</li>
                <li>✓ Otros artistas</li>
                <li>✓ Galeristas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
};

export default ArtGalleryPage;