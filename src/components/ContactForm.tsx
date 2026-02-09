import React, { useState } from 'react';
import { Send, CheckCircle, Sparkles } from 'lucide-react';
import type { ContactFormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    requestedDate: '',
    eventType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const eventTypes = [
    'Cowork / Trabajo creativo',
    'Producción musical',
    'Producción audiovisual',
    'Workshop / Charla',
    'Evento privado',
    'Dinner / Celebración',
    'Presentación / Showcase',
    'Exhibición de arte',
    'Galería temporal',
    'Otro'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { error } = await supabase
        .from('contact_requests')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            requested_date: formData.requestedDate,
            event_type: formData.eventType,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        requestedDate: '',
        eventType: '',
        message: ''
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo o contáctanos directamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section id="contact-form" className="py-24 bg-black text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-gray-900 p-16 rounded-3xl shadow-2xl border border-green-500/20">
            <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-8 animate-pulse" />
            <h3 className="text-4xl font-black text-white mb-6">
              ¡SOLICITUD ENVIADA!
            </h3>
            <p className="text-xl text-gray-300">
              Nos pondremos en contacto contigo pronto para confirmar tu reserva y hacer realidad tu proyecto.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-green-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-green-400" />
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            RESERVA TU
            <span className="block text-green-400 italic font-light">loft</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Cuéntanos sobre tu proyecto y te ayudaremos a hacerlo realidad en Espacio Lumen
          </p>
        </div>

        <div className="bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-800">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-green-400 mb-3 uppercase tracking-wide">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-black border-2 border-gray-700 rounded-none text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 font-medium"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-green-400 mb-3 uppercase tracking-wide">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-black border-2 border-gray-700 rounded-none text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 font-medium"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="requestedDate" className="block text-sm font-bold text-green-400 mb-3 uppercase tracking-wide">
                  Fecha solicitada *
                </label>
                <input
                  type="date"
                  id="requestedDate"
                  name="requestedDate"
                  required
                  value={formData.requestedDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-6 py-4 bg-black border-2 border-gray-700 rounded-none text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 font-medium"
                />
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm font-bold text-green-400 mb-3 uppercase tracking-wide">
                  Tipo de proyecto *
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  required
                  value={formData.eventType}
                  href="mailto:hola@casaprisma.com"
                  className="w-full px-6 py-4 bg-black border-2 border-gray-700 rounded-none text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 font-medium"
                >
                  <option value="">Selecciona tu proyecto</option>
                  {eventTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-green-400 mb-3 uppercase tracking-wide">
                Cuéntanos tu visión
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-black border-2 border-gray-700 rounded-none text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 resize-none font-medium"
                placeholder="Describe tu proyecto, número de personas, necesidades especiales, equipamiento requerido..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 inline-flex items-center justify-center gap-4 bg-green-500 text-black px-10 py-5 rounded-none font-black text-xl hover:bg-green-400 transition-all duration-300 transform hover:scale-105 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <Send className="w-6 h-6" />
                {isSubmitting ? 'ENVIANDO...' : 'RESERVA AHORA'}
              </button>
              
              <a
                href="mailto:hola@lumenloft.com"
                className="flex-1 sm:flex-none inline-flex items-center justify-center px-10 py-5 border-2 border-green-500 text-green-400 rounded-none font-black text-xl hover:bg-green-500 hover:text-black transition-all duration-300"
              >
                CONTACTO DIRECTO
              </a>
            </div>

            {error && (
              <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-400 text-center">{error}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;