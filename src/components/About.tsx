import React from 'react';
import { Palette, Music, Users, Camera } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gray-100 rounded-full translate-y-24 -translate-x-24"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                UN ESPACIO
                <span className="block text-green-500 italic font-light">diferente</span>
              </h2>
              
              <div className="w-20 h-1 bg-green-500 mb-8"></div>
            </div>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="font-medium">
                Casa Prisma no es solo un lugar de trabajo. Es un <span className="text-green-600 font-semibold">loft luminoso</span> 
                donde las ideas cobran vida y los proyectos se transforman en realidad.
              </p>
              
              <p>
                En el corazón vibrante de Gràcia, nuestro loft se adapta a tu visión: 
                desde sesiones de coworking hasta producciones musicales, exhibiciones de arte 
                y eventos únicos que marcan la diferencia.
              </p>
            </div>

            {/* Creative Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
                  <Palette className="w-8 h-8 text-green-600 group-hover:text-white" />
                </div>
                <p className="text-sm font-medium text-gray-600">Arte</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
                  <Music className="w-8 h-8 text-green-600 group-hover:text-white" />
                </div>
                <p className="text-sm font-medium text-gray-600">Música</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
                  <Users className="w-8 h-8 text-green-600 group-hover:text-white" />
                </div>
                <p className="text-sm font-medium text-gray-600">Cowork</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
                  <Camera className="w-8 h-8 text-green-600 group-hover:text-white" />
                </div>
                <p className="text-sm font-medium text-gray-600">Audiovisual</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <img
                src="/1302974676.webp"
                alt="Creative workspace with natural light"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover transform rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-green-500 text-white px-6 py-3 rounded-full font-bold text-sm shadow-xl transform rotate-12 hover:rotate-6 transition-transform duration-300">
                ¡DISPONIBLE!
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-8 -left-8 w-24 h-24 border-4 border-green-500 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;