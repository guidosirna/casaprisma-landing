import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  accentColor?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ accentColor }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    requestedDate: '',
    eventType: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const accentBg = accentColor || 'bg-prisma-teal';

  const eventTypes = [
    'Coworking / Trabajo creativo',
    'Sesión fotográfica',
    'Filmación / Producción audiovisual',
    'Exposición de arte / Galería',
    'Evento privado / Celebración',
    'Workshop / Taller',
    'Producción musical',
    'Presentación / Showcase',
    'Otro',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const form = e.target as HTMLFormElement;
      const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });

      if (!response.ok) throw new Error('Network error');

      setIsSubmitted(true);
      setFormData({ name: '', email: '', requestedDate: '', eventType: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      setError('Error al enviar. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <section id="contact-form" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="bg-white rounded-3xl p-16 shadow-md">
            <CheckCircle className="w-16 h-16 text-prisma-teal mx-auto mb-6" />
            <h3 className="font-display text-3xl font-bold text-prisma-charcoal mb-3">Solicitud enviada</h3>
            <p className="text-gray-400">Te contactaremos pronto para confirmar tu reserva.</p>
          </div>
        </div>
      </section>
    );
  }

  const inputClass = "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-prisma-charcoal focus:ring-2 focus:ring-prisma-teal/30 focus:border-prisma-teal transition-all text-base outline-none";

  return (
    <section id="contact-form" className="py-10 lg:py-16 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Mobile compact header */}
        <div className="lg:hidden mb-6">
          <span className="inline-block bg-prisma-teal/10 text-prisma-teal text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            Contacto
          </span>
          <h2 className="text-display-md text-prisma-charcoal">Reserva tu espacio</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-start">
          {/* Left: info — hidden on mobile */}
          <div className="hidden lg:block lg:col-span-2">
            <span className="inline-block bg-prisma-teal/10 text-prisma-teal text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Contacto
            </span>
            <h2 className="text-display-lg text-prisma-charcoal mb-6">
              Reserva tu espacio
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Cuéntanos sobre tu proyecto y te ayudaremos a hacerlo realidad en Casa Prisma.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-500">
                <span className="w-8 h-8 bg-prisma-teal/10 rounded-full flex items-center justify-center text-xs">📍</span>
                Gràcia, Barcelona
              </div>
              <div className="flex items-center gap-3 text-gray-500">
                <span className="w-8 h-8 bg-prisma-teal/10 rounded-full flex items-center justify-center text-xs">🕐</span>
                Lunes a Domingo: 08:00 – 23:00
              </div>
            </div>

            <img
              src="/LOGOS_noticia-REACT_v2-02-1920x533.png"
              alt="Cofinançat per la Unió Europea — Next Generation Catalunya — Generalitat de Catalunya"
              className="mt-10 w-full max-w-xs h-auto opacity-40"
            />
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="bg-white rounded-2xl p-8 lg:p-10 shadow-md space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  No llenar: <input name="bot-field" />
                </label>
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-prisma-charcoal mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-prisma-charcoal mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="requestedDate" className="block text-sm font-medium text-prisma-charcoal mb-2">
                    Fecha *
                  </label>
                  <input
                    type="date"
                    id="requestedDate"
                    name="requestedDate"
                    required
                    value={formData.requestedDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-prisma-charcoal mb-2">
                    Tipo de proyecto *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Seleccionar</option>
                    {eventTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-prisma-charcoal mb-2">
                  Cuéntanos tu visión
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                  placeholder="Describe tu proyecto, número de personas, necesidades especiales..."
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center justify-center gap-3 ${accentBg} text-white px-10 py-5 rounded-full font-bold text-base hover:shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-50`}
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
                </button>
              </div>

              {error && (
                <p className="text-red-500 text-sm mt-4">{error}</p>
              )}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
