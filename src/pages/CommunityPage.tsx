import React from 'react';
import { useEffect } from 'react';

/* Inline WhatsApp icon */
const WhatsAppIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const CommunityPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Casa Prisma Community | Creatives in Barcelona';
  }, []);

  const whatsappLink = 'https://chat.whatsapp.com/IaqQUxN9K41G5XtMfUOeIB?mode=gi_t';

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#2a2a2a] font-sans overflow-x-hidden">

      {/* Floating WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white pl-5 pr-6 py-3.5 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2.5"
      >
        <WhatsAppIcon className="w-5 h-5" />
        Join now
      </a>

      {/* Nav */}
      <nav className="w-full py-5 px-6 flex items-center justify-between max-w-5xl mx-auto">
        <a href="/" className="flex items-center gap-2">
          <img src="/casaprisma-logo-light.png" alt="Casa Prisma" className="h-9 w-auto" />
        </a>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#e8973e] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#d4832a] transition-colors"
        >
          Join now
        </a>
      </nav>

      {/* Hero — illustrative, large doodles as main visual */}
      <section className="relative px-6 pt-8 pb-20 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text side */}
          <div>
            <div className="inline-block bg-[#e8973e]/10 text-[#e8973e] text-xs font-bold tracking-wide uppercase px-4 py-1.5 rounded-full mb-6">
              Casa Prisma Community
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1] mb-6">
              Where ideas<br />
              meet the people<br />
              <span className="text-[#e8973e]">who build them</span>
            </h1>
            <p className="text-lg text-[#777] max-w-md mb-8 leading-relaxed">
              Entrepreneurs, creatives, and makers in Barcelona.
              We share ideas, opportunities, and a beautiful space to make things happen.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#e8973e] hover:bg-[#d4832a] text-white px-8 py-4 rounded-full font-bold text-base shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Join the Community
            </a>
            <p className="text-xs text-[#bbb] mt-3">Free to join · No spam</p>
          </div>

          {/* Illustration side — large doodle composition */}
          <div className="relative h-[340px] sm:h-[400px] lg:h-[480px]">
            <img
              src="/doodles/dancing.svg"
              alt=""
              className="absolute top-0 left-[10%] w-[55%] opacity-90"
            />
            <img
              src="/doodles/levitate.svg"
              alt=""
              className="absolute bottom-0 right-[5%] w-[45%] opacity-80"
            />
            <img
              src="/doodles/coffee.svg"
              alt=""
              className="absolute bottom-[15%] left-0 w-[35%] opacity-60"
            />
            {/* Hand-drawn circle accent */}
            <svg className="absolute top-[15%] right-[15%] w-20 h-20 text-[#e8973e]/30" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" />
            </svg>
            {/* Scribble line */}
            <svg className="absolute bottom-[40%] left-[30%] w-32 text-[#e8973e]/20" viewBox="0 0 120 20" fill="none">
              <path d="M0 10 Q15 2 30 12 Q45 22 60 8 Q75 -2 90 14 Q105 22 120 10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </section>

      {/* Orange divider strip with doodle */}
      <section className="bg-[#e8973e] py-12 px-6 relative overflow-hidden">
        <img
          src="/doodles/groovy.svg"
          alt=""
          className="absolute right-6 lg:right-20 top-1/2 -translate-y-1/2 w-28 lg:w-40 opacity-20 pointer-events-none"
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-white text-xl sm:text-2xl lg:text-3xl font-display font-bold text-center leading-snug">
            A space where creative minds collide,<br className="hidden sm:block" />
            ideas grow, and things actually get done.
          </p>
        </div>
      </section>

      {/* Perks — illustrative cards with large doodles */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {[
              { doodle: '/doodles/loving.svg', title: 'Connect', desc: 'Meet entrepreneurs, artists, photographers, and creators building something meaningful in Barcelona.' },
              { doodle: '/doodles/plant.svg', title: 'Grow', desc: 'Share resources, get feedback, find collaborators. Your next big idea might come from a conversation here.' },
              { doodle: '/doodles/selfie.svg', title: 'Create', desc: 'Access a beautiful space for workshops, pop-ups, exhibitions, and coworking sessions.' },
              { doodle: '/doodles/moshing.svg', title: 'Collaborate', desc: 'From joint ventures to casual brainstorms, the best things happen when creative minds collide.' },
            ].map((perk) => (
              <div key={perk.title} className="flex items-start gap-6">
                <img src={perk.doodle} alt="" className="w-28 sm:w-32 shrink-0 opacity-80" />
                <div className="pt-2">
                  <h3 className="font-display text-2xl font-bold mb-2">{perk.title}</h3>
                  <p className="text-[#888] leading-relaxed text-sm">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What happens — scattered layout with doodle accents */}
      <section className="py-20 px-6 bg-white relative">
        <img
          src="/doodles/swinging.svg"
          alt=""
          className="absolute top-8 right-4 lg:right-16 w-24 lg:w-36 opacity-10 rotate-12 pointer-events-none"
        />
        <img
          src="/doodles/floating.svg"
          alt=""
          className="absolute bottom-8 left-4 lg:left-16 w-20 lg:w-28 opacity-10 -rotate-6 pointer-events-none"
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4 tracking-tight">
            What happens inside
          </h2>
          <p className="text-center text-[#aaa] mb-12 text-sm">Some of the things our community does together</p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Art exhibitions',
              'Pop-up events',
              'Brainstorm sessions',
              'Photography meetups',
              'Live music nights',
              'Coworking days',
              'Social dinners',
              'Workshops',
              'Collaboration matchmaking',
              'Launch parties',
              'Afterworks',
              'Jam sessions',
            ].map((item) => (
              <span
                key={item}
                className="bg-[#FFF8F0] border-2 border-dashed border-[#e8973e]/25 rounded-full px-5 py-2.5 text-sm font-medium text-[#555] hover:bg-[#e8973e]/10 hover:border-[#e8973e]/40 transition-colors cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Large illustration section */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-8">
          <div className="flex-1 flex justify-center">
            <img src="/doodles/sitting-reading.svg" alt="" className="w-48 sm:w-64 lg:w-80 opacity-80" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4 leading-tight">
              Not just another community.<br />
              <span className="text-[#e8973e]">A creative home.</span>
            </h3>
            <p className="text-[#888] leading-relaxed mb-6 max-w-md">
              175m2 of natural light, professional equipment, and good energy in the heart of Gracia.
              This is where Barcelona's creatives come to make things happen.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#2a2a2a] hover:bg-[#444] text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Join now
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA — dark with large doodle */}
      <section className="py-24 px-6 text-center bg-[#2a2a2a] relative overflow-hidden">
        <img
          src="/doodles/rolling.svg"
          alt=""
          className="absolute bottom-0 left-0 w-44 lg:w-64 opacity-[0.07] pointer-events-none"
        />
        <img
          src="/doodles/jumping.svg"
          alt=""
          className="absolute top-4 right-4 w-32 lg:w-48 opacity-[0.07] -rotate-12 pointer-events-none"
        />
        <img
          src="/doodles/ice-cream.svg"
          alt=""
          className="absolute top-1/2 left-8 -translate-y-1/2 w-20 lg:w-32 opacity-[0.05] pointer-events-none hidden lg:block"
        />

        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight text-white">
            Your next collaboration<br />starts with a{' '}
            <span className="text-[#e8973e]">click</span>
          </h2>
          <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto leading-relaxed">
            Join creatives building the Barcelona they want to live in.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#e8973e] hover:bg-[#d4832a] text-white px-10 py-5 rounded-full font-bold text-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Join the Community
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 text-center bg-[#2a2a2a] border-t border-white/10">
        <a href="/" className="inline-flex items-center gap-2 mb-3">
          <img src="/casaprisma-logo-dark.png" alt="Casa Prisma" className="h-7 w-auto opacity-50" />
        </a>
        <p className="text-xs text-white/30">
          Casa Prisma · Creative space in Barcelona
        </p>
        <div className="flex items-center justify-center gap-4 mt-3">
          <a
            href="https://www.instagram.com/casaprismabcn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white/60 transition-colors text-xs underline underline-offset-2"
          >
            Instagram
          </a>
          <a
            href="/"
            className="text-white/30 hover:text-white/60 transition-colors text-xs underline underline-offset-2"
          >
            Our space
          </a>
        </div>
      </footer>
    </div>
  );
};

export default CommunityPage;
