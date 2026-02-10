import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const StickyBookButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setIsVisible(window.pageYOffset > 400);
    window.addEventListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  return (
    <a
      href="#contact-form"
      className={`fixed bottom-6 right-6 z-50 bg-gradient-to-r from-prisma-teal to-prisma-navy text-white px-8 py-4 rounded-full font-display font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
    >
      <Sparkles className="w-4 h-4" />
      Reservar
    </a>
  );
};

export default StickyBookButton;
