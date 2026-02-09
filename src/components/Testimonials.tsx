import React from 'react';
import { Star } from 'lucide-react';
import type { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Marina Rodríguez',
      role: 'Artista Visual',
      content: 'Espacio Lumen fue perfecto para mi exhibición. Los 175m² con luz natural y diseño minimalista crearon el ambiente ideal para mostrar mi obra.',
      avatar: '/1302974661.webp'
    },
    {
      name: 'Carlos Mendoza',
      role: 'Director Creativo',
      content: 'Versátil, elegante y muy bien ubicado en Gràcia. Ideal para nuestros workshops creativos. El equipo quedó encantado con las facilidades.',
      avatar: '/1302974711.webp'
    },
    {
      name: 'Elena Vásquez',
      role: 'Productora Musical',
      content: 'El estudio de sonido es excepcional. Grabamos nuestro EP en un ambiente que realmente inspiró nuestra creatividad. Volveremos sin duda.',
      avatar: '/1302974676.webp'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600">
            Experiencias reales de creativos como tú
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-green-500 text-green-500" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;