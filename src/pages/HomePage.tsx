import React from 'react';
import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import About from '../components/About';
import Benefits from '../components/Benefits';
import Uses from '../components/Uses';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';

const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Casa Prisma - Loft Creativo en Gràcia, Barcelona | Alquiler Espacio"
        description="Alquila Casa Prisma, loft creativo de 175m² en Gràcia, Barcelona. Ideal para cowork, producción musical, workshops, eventos privados y exhibiciones de arte. Reserva ahora."
        keywords="alquiler espacio creativo Barcelona, cowork Gràcia, estudio musical Barcelona, eventos privados Barcelona, loft Barcelona, espacio arte Barcelona, workshop Barcelona, producción audiovisual Barcelona"
        canonical="https://casaprisma.com"
      />
      
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="benefits">
        <Benefits />
      </div>
      <div id="uses">
        <Uses />
      </div>
      <Testimonials />
      <CTASection />
      <ContactForm />
    </>
  );
};

export default HomePage;