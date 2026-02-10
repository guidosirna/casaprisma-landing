import React, { useEffect, useState } from 'react';
import SEOHead from '../components/SEOHead';
import FullpageSlides from '../components/FullpageSlides';
import Hero from '../components/Hero';
import About from '../components/About';
import SpaceGallery from '../components/SpaceGallery';
import Benefits from '../components/Benefits';
import Uses from '../components/Uses';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import ContactFooterSlide from '../components/ContactFooterSlide';

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Reveal animations per slide
  useEffect(() => {
    const timer = setTimeout(() => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((el) => {
        const slide = el.closest('.h-screen');
        if (!slide) return;
        const slideIndex = Array.from(slide.parentElement?.children || []).indexOf(slide);
        if (slideIndex === currentSlide) {
          el.classList.add('visible');
        }
      });
    }, 200);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <>
      <SEOHead
        title="Casa Prisma — Alquiler Loft Creativo en Gràcia, Barcelona | Coworking, Fotografía, Arte, Eventos"
        description="Alquila Casa Prisma: loft creativo de 175m² en Gràcia, Barcelona. Espacio para coworking, sesiones fotográficas, filmaciones, exposiciones de arte y eventos privados. Luz natural, equipamiento profesional. Reserva ahora."
        keywords="alquiler espacio creativo Barcelona, coworking Gràcia Barcelona, estudio fotografía Barcelona, alquiler loft Barcelona, espacio eventos Barcelona, galería arte Barcelona, filmaciones Barcelona, producción audiovisual Barcelona, sala coworking Barcelona, espacio artistas Barcelona, alquiler sala eventos Barcelona, estudio fotográfico Barcelona, rodaje Barcelona, workshop Barcelona, espacio flexible Barcelona, oficina creativa Barcelona, alquiler por horas Barcelona, espacio multifuncional Gràcia"
        canonical="https://casaprisma.com"
      />
      <FullpageSlides onSlideChange={setCurrentSlide}>
        <Hero />
        <About />
        <SpaceGallery />
        <Benefits />
        <Uses />
        <Testimonials />
        <CTASection />
        <ContactFooterSlide />
      </FullpageSlides>
    </>
  );
};

export default HomePage;
