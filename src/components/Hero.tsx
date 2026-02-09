import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    contactForm?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/1302974712.webp"
          alt="Lumen Loft Interior"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-green-900/30"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-green-400/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-12 h-12 bg-green-400/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 right-20 w-6 h-6 bg-white/20 rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight leading-none">
            CASA
            <span className="block text-green-400 italic font-light">Prisma</span>
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-green-400"></div>
            <Sparkles className="w-6 h-6 text-green-400" />
            <div className="w-12 h-px bg-green-400"></div>
          </div>
        </div>
        
        <p className="text-xl md:text-3xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
          Donde los <span className="text-green-400 font-medium">creativos</span> encuentran su espacio.
          <br />
          <span className="text-lg opacity-80">Cowork • Música • Arte • Eventos en Gràcia</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={scrollToContact}
            className="group relative overflow-hidden bg-green-500 text-black px-10 py-4 rounded-none font-bold text-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <span className="relative z-10">RESERVA TU ESPACIO</span>
            <div className="absolute inset-0 bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>
          
          <button
            onClick={scrollToAbout}
            className="border-2 border-white text-white px-8 py-4 rounded-none font-medium hover:bg-white hover:text-black transition-all duration-300"
          >
            Descubre más
          </button>
        </div>

        <div className="text-sm opacity-70">
          📍 Gràcia, Barcelona
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hover:text-green-400 transition-colors duration-300"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;