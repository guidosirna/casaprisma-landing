import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEspacioClick = () => {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      window.dispatchEvent(new CustomEvent('fullpage-goto', { detail: { slide: 1 } }));
    } else {
      navigate('/#about');
    }
  };

  const handleReservarClick = (e: React.MouseEvent) => {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('fullpage-goto', { detail: { slide: 7 } }));
    }
    // On other pages, the #contact-form anchor scrolls to the form naturally
  };

  const navItems = [
    { to: '/cowork', label: 'Coworking' },
    { to: '/produccion', label: 'Fotografía' },
    { to: '/galeria-arte', label: 'Galería' },
    { to: '/eventos', label: 'Eventos' },
    { to: '/estudio-musical', label: 'Estudio Musical' },
    { to: '/workshops', label: 'Workshops' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('fullpage-goto', { detail: { slide: 0 } }));
              }
            }}
            className="flex items-center gap-3"
          >
            <img src="/logo-casaprisma.png" alt="Casa Prisma" className="h-9 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <div className="relative group">
              <button className="text-sm font-medium text-prisma-charcoal hover:text-prisma-teal transition-colors">
                Servicios
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-52 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 overflow-hidden">
                <div className="py-1">
                  {navItems.map(item => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-5 py-2.5 text-sm text-prisma-charcoal hover:text-prisma-teal hover:bg-gray-50 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={handleEspacioClick}
              className="text-sm font-medium text-prisma-charcoal hover:text-prisma-teal transition-colors"
            >
              Espacio
            </button>
            <Link
              to="/community"
              className="text-sm font-medium text-prisma-amber hover:text-prisma-amber-dark transition-colors"
            >
              Community
            </Link>
            <a
              href="#contact-form"
              onClick={handleReservarClick}
              className="inline-flex items-center gap-2 bg-prisma-teal text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-prisma-teal-dark transition-colors"
            >
              Reservar <ArrowRight className="w-4 h-4" />
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-prisma-charcoal"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-white z-50">
            <nav className="flex flex-col items-start p-8 space-y-5">
              {navItems.map(item => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-display text-2xl font-bold text-prisma-charcoal hover:text-prisma-teal transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={handleEspacioClick}
                className="font-display text-2xl font-bold text-prisma-charcoal hover:text-prisma-teal transition-colors"
              >
                Espacio
              </button>
              <Link
                to="/community"
                onClick={() => setIsMenuOpen(false)}
                className="font-display text-2xl font-bold text-prisma-amber hover:text-prisma-amber-dark transition-colors"
              >
                Community
              </Link>
              <div className="pt-6 w-full border-t border-gray-100">
                <a
                  href="#contact-form"
                  onClick={handleReservarClick}
                  className="inline-flex items-center gap-3 bg-prisma-teal text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-prisma-teal-dark transition-colors"
                >
                  Reservar espacio <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
