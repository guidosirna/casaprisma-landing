import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

const StickyBookButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    contactForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToContact}
      className={`fixed bottom-8 right-8 z-50 inline-flex items-center gap-3 bg-green-500 text-black px-6 py-4 rounded-none font-black shadow-2xl hover:bg-green-400 transition-all duration-300 transform hover:scale-110 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      <Zap className="w-6 h-6" />
      <span className="hidden sm:inline">RESERVAR</span>
    </button>
  );
};

export default StickyBookButton;