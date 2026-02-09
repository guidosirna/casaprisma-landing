import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className={`flex items-center gap-3 font-bold text-2xl transition-colors duration-300 ${
              isScrolled ? 'text-white' : 'text-white'
            }`}
          >
            <Zap className="w-8 h-8 text-green-400" />
            CASA PRISMA
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className={`font-bold transition-colors duration-300 hover:text-green-400 ${
                isScrolled ? 'text-white' : 'text-white'
              }`}>
                SERVICIOS
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-md rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-4">
                  <Link
                    to="/cowork"
                    onClick={() => window.location.href = '/cowork'}
                    className="block px-6 py-3 text-white hover:text-green-400 hover:bg-gray-800/50 transition-colors duration-200 font-medium"
                  >
                    Cowork Creativo
                  </Link>
                  <Link
                    to="/estudio-musical"
                    onClick={() => window.location.href = '/estudio-musical'}
                    className="block px-6 py-3 text-white hover:text-green-400 hover:bg-gray-800/50 transition-colors duration-200 font-medium"
                  >
                    Estudio Musical
                  </Link>
                  <Link
                    to="/galeria-arte"
                    onClick={() => window.location.href = '/galeria-arte'}
                    className="block px-6 py-3 text-white hover:text-green-400 hover:bg-gray-800/50 transition-colors duration-200 font-medium"
                  >
                    Galería de Arte
                  </Link>
                  <Link
                    to="/workshops"
                    onClick={() => window.location.href = '/workshops'}
                    className="block px-6 py-3 text-white hover:text-green-400 hover:bg-gray-800/50 transition-colors duration-200 font-medium"
                  >
                    Workshops
                  </Link>
                  <Link
                    to="/eventos"
                    onClick={() => window.location.href = '/eventos'}
                    className="block px-6 py-3 text-white hover:text-green-400 hover:bg-gray-800/50 transition-colors duration-200 font-medium"
                  >
                    Eventos Boutique
                  </Link>
                  <Link
                    to="/produccion"
                    onClick={() => window.location.href = '/produccion'}
                    className="block px-6 py-3 text-white hover:text-green-400 hover:bg-gray-800/50 transition-colors duration-200 font-medium"
                  >
                    Producción Audiovisual
                  </Link>
                </div>
              </div>
            </div>
            <Link
              to="/#about"
              className={`font-bold transition-colors duration-300 hover:text-green-400 ${
                isScrolled ? 'text-white' : 'text-white'
              }`}
            >
              ESPACIO
            </Link>
            <Link
              to="/#contact-form"
              className="bg-green-500 text-black px-8 py-3 rounded-none font-black hover:bg-green-400 transition-all duration-300 transform hover:scale-105"
            >
              RESERVAR
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-white' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 shadow-2xl">
            <nav className="py-6 space-y-4">
              <div className="px-4 py-2">
                <h3 className="text-green-400 font-bold text-sm uppercase tracking-wide mb-3">Servicios</h3>
                <div className="space-y-2 ml-4">
                  <Link
                    to="/cowork"
                    onClick={() => window.location.href = '/cowork'}
                    className="block text-white hover:text-green-400 transition-colors duration-200 font-medium"
                  >
                    Cowork Creativo
                  </Link>
                  <Link
                    to="/estudio-musical"
                    onClick={() => window.location.href = '/estudio-musical'}
                    className="block text-white hover:text-green-400 transition-colors duration-200 font-medium"
                  >
                    Estudio Musical
                  </Link>
                  <Link
                    to="/galeria-arte"
                    onClick={() => window.location.href = '/galeria-arte'}
                    className="block text-white hover:text-green-400 transition-colors duration-200 font-medium"
                  >
                    Galería de Arte
                  </Link>
                  <Link
                    to="/workshops"
                    onClick={() => window.location.href = '/workshops'}
                    className="block text-white hover:text-green-400 transition-colors duration-200 font-medium"
                  >
                    Workshops
                  </Link>
                  <Link
                    to="/eventos"
                    onClick={() => window.location.href = '/eventos'}
                    className="block text-white hover:text-green-400 transition-colors duration-200 font-medium"
                  >
                    Eventos Boutique
                  </Link>
                  <Link
                    to="/produccion"
                    onClick={() => window.location.href = '/produccion'}
                    className="block text-white hover:text-green-400 transition-colors duration-200 font-medium"
                  >
                    Producción Audiovisual
                  </Link>
                </div>
              </div>
              <Link
                to="/#about"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-white hover:text-green-400 hover:bg-gray-800/50 transition-colors duration-200 font-bold"
              >
                ESPACIO
              </Link>
              <Link
                to="/#contact-form"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-3 bg-green-500 text-black hover:bg-green-400 transition-colors duration-200 mx-4 rounded-none font-black"
              >
                RESERVAR
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;