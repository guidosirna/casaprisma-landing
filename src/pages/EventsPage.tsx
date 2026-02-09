import React from 'react';
import { ArrowRight, Heart, Sparkles, Users, Camera, Music, Zap } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ContactForm from '../components/ContactForm';

const EventsPage: React.FC = () => {
  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    contactForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title="Eventos Privados Barcelona - Casa Prisma Gràcia | Celebraciones Únicas"
        description="Alquila espacio para eventos privados en Gràcia, Barcelona. Loft de 175m² ideal para dinners privados, celebraciones íntimas, eventos corporativos y fiestas exclusivas. Catering y servicios incluidos."
        keywords="eventos privados Barcelona, dinner privado Gràcia, celebraciones Barcelona, eventos corporativos Barcelona, espacio eventos Barcelona, alquiler sala eventos, fiestas privadas Barcelona, eventos boutique Barcelona, celebraciones íntimas Barcelona, dinner party Barcelona, evento corporativo Gràcia, alquiler espacio celebraciones, private events Barcelona, exclusive venue Barcelona, intimate celebrations Barcelona, corporate events Barcelona, private dining Barcelona, birthday party venue Barcelona, anniversary celebration Barcelona, product launch Barcelona, networking event Barcelona, company party Barcelona, team building Barcelona, cocktail party Barcelona, reception venue Barcelona"
        canonical="https://casaprisma.com/eventos"
        ogImage="/1302974712.webp"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="/1302974712.webp"
            alt="Eventos privados y celebraciones en Gràcia"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-pink-900/30"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight leading-none">
            EVENTOS
            <span className="block text-pink-400 italic font-light">Boutique</span>
          </h1>
          
          <p className="text-xl md:text-3xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            Celebraciones <span className="text-pink-400 font-medium">únicas</span> en el corazón de Gràcia
          </p>

          <button
            onClick={scrollToContact}
            className="bg-pink-500 text-white px-10 py-4 rounded-none font-bold text-lg hover:bg-pink-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            PLANIFICA TU EVENTO
          </button>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              CELEBRACIONES
              <span className="block text-pink-500 italic font-light">memorables</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              El marco perfecto para tus momentos más especiales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Heart className="w-12 h-12 text-pink-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Dinners Privados</h3>
              <p className="text-gray-600">Cenas íntimas para hasta 40 invitados en un ambiente exclusivo.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Sparkles className="w-12 h-12 text-pink-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Cumpleaños Especiales</h3>
              <p className="text-gray-600">Celebra tu día especial en un loft único y lleno de personalidad.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Users className="w-12 h-12 text-pink-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Reuniones Creativas</h3>
              <p className="text-gray-600">Presentaciones íntimas, lanzamientos y networking en ambiente hogareño.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Camera className="w-12 h-12 text-pink-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Sesiones de Fotos</h3>
              <p className="text-gray-600">Backdrop perfecto para shootings profesionales y contenido creativo.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Music className="w-12 h-12 text-pink-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Conciertos Íntimos</h3>
              <p className="text-gray-600">Actuaciones acústicas para hasta 40 personas en un ambiente único.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <Zap className="w-12 h-12 text-pink-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Eventos Temáticos</h3>
              <p className="text-gray-600">Fiestas personalizadas con decoración y ambientación única.</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 bg-pink-500 text-white px-10 py-4 rounded-none font-bold text-lg hover:bg-pink-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              RESERVA TU CELEBRACIÓN
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-pink-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-12">SERVICIOS INCLUIDOS</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-pink-800/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">CATERING & BAR</h3>
              <p className="mb-6">Servicio completo de comida y bebidas para tu evento.</p>
              <ul className="text-left space-y-2">
                <li>✓ Menús personalizados</li>
                <li>✓ Servicio de camareros</li>
                <li>✓ Barra libre opcional</li>
                <li>✓ Comida casera y saludable</li>
              </ul>
            </div>

            <div className="bg-pink-800/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">DECORACIÓN</h3>
              <p className="mb-6">Ambientación personalizada según tu visión.</p>
              <ul className="text-left space-y-2">
                <li>✓ Diseño temático</li>
                <li>✓ Iluminación ambiental</li>
                <li>✓ Flores y centros de mesa</li>
                <li>✓ Elementos decorativos</li>
              </ul>
            </div>

            <div className="bg-pink-800/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">AUDIOVISUAL</h3>
              <p className="mb-6">Tecnología para presentaciones y entretenimiento.</p>
              <ul className="text-left space-y-2">
                <li>✓ Sistema de sonido</li>
                <li>✓ Proyección HD</li>
                <li>✓ Iluminación profesional</li>
                <li>✓ Micrófonos inalámbricos</li>
              </ul>
            </div>

            <div className="bg-pink-800/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">COORDINACIÓN</h3>
              <p className="mb-6">Gestión completa para que solo te preocupes de disfrutar.</p>
              <ul className="text-left space-y-2">
                <li>✓ Planificación detallada</li>
                <li>✓ Coordinación de proveedores</li>
                <li>✓ Supervisión del evento</li>
                <li>✓ Limpieza post-evento</li>
              </ul>
            </div>
          </div>

          <button
            onClick={scrollToContact}
            className="bg-white text-pink-900 px-10 py-4 rounded-none font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            SOLICITA PRESUPUESTO PERSONALIZADO
          </button>
        </div>
      </section>

      <ContactForm />
    </>
  );
};

export default EventsPage;