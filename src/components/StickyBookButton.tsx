import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const StickyBookButton: React.FC = () => {
  const location = useLocation();

  const handleClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      // If already on the contact slide, scroll to top of the slide (where the form is)
      const contactSlide = document.querySelector('[data-slide="7"]') as HTMLElement | null;
      if (contactSlide && contactSlide.classList.contains('overflow-y-auto')) {
        contactSlide.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.dispatchEvent(new CustomEvent('fullpage-goto', { detail: { slide: 7 } }));
      }
    }
  };

  return (
    <a
      href="#contact-form"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white pl-5 pr-6 py-3.5 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2.5"
    >
      <MessageCircle className="w-5 h-5" />
      Contáctanos
    </a>
  );
};

export default StickyBookButton;
