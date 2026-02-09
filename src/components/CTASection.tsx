import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    contactForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-green-500 via-green-600 to-teal-600 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/10 rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <div className="mb-8">
          <Zap className="w-16 h-16 mx-auto mb-6 text-yellow-300 animate-pulse" />
          
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            ¿LISTO PARA
            <span className="block italic font-light">crear algo</span>
            <span className="block text-yellow-300">EXTRAORDINARIO?</span>
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
          Tu próximo proyecto merece un espacio excepcional. Reserva Casa Prisma y transforma 
          tu visión creativa en una realidad que inspire y conecte.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button
            onClick={scrollToContact}
            className="group relative overflow-hidden bg-black text-white px-12 py-5 rounded-none font-bold text-xl hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-3">
              RESERVA AHORA
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
          
          <a
            href="mailto:hola@casaprisma.com"
            className="border-3 border-white text-white px-10 py-5 rounded-none font-bold text-xl hover:bg-white hover:text-green-600 transition-all duration-300"
          >
            HABLA CON NOSOTROS
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <div className="text-3xl font-black mb-2">Versátil</div>
            <div className="text-sm opacity-80">Espacio adaptable</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <div className="text-3xl font-black mb-2">Flexible</div>
            <div className="text-sm opacity-80">Horarios adaptables</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <div className="text-3xl font-black mb-2">Gràcia</div>
            <div className="text-sm opacity-80">Ubicación premium</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;