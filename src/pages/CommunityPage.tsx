import React from 'react';
import { useEffect } from 'react';

/* ── tiny WhatsApp icon (inline SVG) ──────────────────────────── */
const WhatsAppIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ── Friendly SVG Illustrations ───────────────────────────────── */

const IllustrationHero = () => (
  <svg viewBox="0 0 480 320" fill="none" className="w-full max-w-lg mx-auto">
    {/* warm background blob */}
    <ellipse cx="240" cy="170" rx="200" ry="140" fill="#FEF3E2" />
    {/* people gathering */}
    <circle cx="160" cy="180" r="28" fill="#1a9e8f" opacity="0.9" />
    <circle cx="160" cy="145" r="16" fill="#f5cba7" />
    <circle cx="240" cy="170" r="32" fill="#e8973e" opacity="0.9" />
    <circle cx="240" cy="130" r="18" fill="#f5cba7" />
    <circle cx="320" cy="185" r="26" fill="#2d3a6e" opacity="0.9" />
    <circle cx="320" cy="152" r="15" fill="#f5cba7" />
    {/* connecting lines */}
    <path d="M175 165 Q210 140 225 155" stroke="#8bb83a" strokeWidth="2.5" strokeDasharray="6 4" fill="none" />
    <path d="M255 155 Q290 135 305 168" stroke="#8bb83a" strokeWidth="2.5" strokeDasharray="6 4" fill="none" />
    {/* lightbulb */}
    <ellipse cx="240" cy="80" rx="18" ry="22" fill="#FFD93D" opacity="0.8" />
    <rect x="235" y="100" width="10" height="8" rx="2" fill="#e8973e" opacity="0.6" />
    <path d="M232 72 L228 62M248 72 L252 62M240 60 L240 50" stroke="#FFD93D" strokeWidth="2" strokeLinecap="round" />
    {/* sparkles */}
    <path d="M100 100 L104 90 L108 100 L104 110Z" fill="#e8973e" opacity="0.5" />
    <path d="M370 110 L373 102 L376 110 L373 118Z" fill="#1a9e8f" opacity="0.5" />
    <path d="M130 230 L133 223 L136 230 L133 237Z" fill="#2d3a6e" opacity="0.4" />
    <circle cx="380" cy="200" r="4" fill="#8bb83a" opacity="0.6" />
    <circle cx="95" cy="160" r="3" fill="#e8973e" opacity="0.6" />
  </svg>
);

const IllustrationConnect = () => (
  <svg viewBox="0 0 200 200" fill="none" className="w-40 h-40 mx-auto">
    {/* hub circle */}
    <circle cx="100" cy="100" r="30" fill="#1a9e8f" opacity="0.15" />
    <circle cx="100" cy="100" r="12" fill="#1a9e8f" />
    {/* satellite nodes */}
    <circle cx="50" cy="50" r="10" fill="#e8973e" />
    <circle cx="150" cy="50" r="10" fill="#2d3a6e" />
    <circle cx="50" cy="150" r="10" fill="#8bb83a" />
    <circle cx="150" cy="150" r="10" fill="#e06060" />
    {/* connecting lines */}
    <line x1="60" y1="58" x2="90" y2="92" stroke="#e8973e" strokeWidth="2" opacity="0.4" />
    <line x1="140" y1="58" x2="110" y2="92" stroke="#2d3a6e" strokeWidth="2" opacity="0.4" />
    <line x1="60" y1="142" x2="90" y2="108" stroke="#8bb83a" strokeWidth="2" opacity="0.4" />
    <line x1="140" y1="142" x2="110" y2="108" stroke="#e06060" strokeWidth="2" opacity="0.4" />
  </svg>
);

const IllustrationGrow = () => (
  <svg viewBox="0 0 200 200" fill="none" className="w-40 h-40 mx-auto">
    {/* pot */}
    <rect x="70" y="140" width="60" height="35" rx="8" fill="#e8973e" opacity="0.8" />
    <rect x="65" y="132" width="70" height="12" rx="4" fill="#e8973e" />
    {/* stem */}
    <path d="M100 132 C100 100 100 80 100 60" stroke="#8bb83a" strokeWidth="3" />
    {/* leaves */}
    <ellipse cx="82" cy="95" rx="18" ry="10" fill="#8bb83a" opacity="0.7" transform="rotate(-30 82 95)" />
    <ellipse cx="118" cy="80" rx="18" ry="10" fill="#1a9e8f" opacity="0.7" transform="rotate(30 118 80)" />
    {/* flower */}
    <circle cx="100" cy="50" r="14" fill="#FFD93D" opacity="0.8" />
    <circle cx="100" cy="50" r="7" fill="#e8973e" />
    {/* sparkles */}
    <circle cx="55" cy="60" r="3" fill="#1a9e8f" opacity="0.5" />
    <circle cx="145" cy="55" r="2.5" fill="#e8973e" opacity="0.5" />
    <path d="M140 110 L143 104 L146 110 L143 116Z" fill="#2d3a6e" opacity="0.3" />
  </svg>
);

const IllustrationCreate = () => (
  <svg viewBox="0 0 200 200" fill="none" className="w-40 h-40 mx-auto">
    {/* canvas/easel */}
    <rect x="50" y="40" width="100" height="80" rx="6" fill="white" stroke="#2d3a6e" strokeWidth="2" />
    {/* abstract art on canvas */}
    <circle cx="85" cy="70" r="15" fill="#1a9e8f" opacity="0.6" />
    <circle cx="115" cy="80" r="12" fill="#e8973e" opacity="0.6" />
    <rect x="70" y="88" width="30" height="20" rx="4" fill="#2d3a6e" opacity="0.4" />
    {/* easel legs */}
    <line x1="70" y1="120" x2="55" y2="170" stroke="#2a2a2a" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="130" y1="120" x2="145" y2="170" stroke="#2a2a2a" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="100" y1="120" x2="100" y2="165" stroke="#2a2a2a" strokeWidth="2.5" strokeLinecap="round" />
    {/* paint brush */}
    <rect x="155" y="55" width="4" height="30" rx="2" fill="#e8973e" transform="rotate(15 155 55)" />
    <ellipse cx="155" cy="52" rx="5" ry="8" fill="#8bb83a" transform="rotate(15 155 52)" />
  </svg>
);

const IllustrationCollaborate = () => (
  <svg viewBox="0 0 200 200" fill="none" className="w-40 h-40 mx-auto">
    {/* chat bubbles */}
    <rect x="30" y="50" width="80" height="50" rx="12" fill="#1a9e8f" opacity="0.85" />
    <polygon points="50,100 60,100 45,118" fill="#1a9e8f" opacity="0.85" />
    <rect x="42" y="65" width="40" height="4" rx="2" fill="white" opacity="0.7" />
    <rect x="42" y="75" width="55" height="4" rx="2" fill="white" opacity="0.7" />
    <rect x="42" y="85" width="30" height="4" rx="2" fill="white" opacity="0.7" />

    <rect x="90" y="90" width="80" height="50" rx="12" fill="#e8973e" opacity="0.85" />
    <polygon points="150,140 140,140 155,158" fill="#e8973e" opacity="0.85" />
    <rect x="102" y="105" width="45" height="4" rx="2" fill="white" opacity="0.7" />
    <rect x="102" y="115" width="55" height="4" rx="2" fill="white" opacity="0.7" />
    <rect x="102" y="125" width="35" height="4" rx="2" fill="white" opacity="0.7" />

    {/* hearts / connection */}
    <path d="M90 40 C90 32 80 28 76 36 C72 28 62 32 62 40 C62 52 76 60 76 60 C76 60 90 52 90 40Z" fill="#e06060" opacity="0.4" />
  </svg>
);

/* ── Main Page Component ──────────────────────────────────────── */

const CommunityPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Casa Prisma Community — Entrepreneurs & Creatives in Barcelona';
  }, []);

  const whatsappLink = 'https://chat.whatsapp.com/IaqQUxN9K41G5XtMfUOeIB?mode=gi_t';

  const perks = [
    {
      icon: <IllustrationConnect />,
      title: 'Connect',
      desc: 'Meet entrepreneurs, artists, photographers, and creators who are building something meaningful in Barcelona.',
    },
    {
      icon: <IllustrationGrow />,
      title: 'Grow',
      desc: 'Share resources, get feedback, find collaborators. Your next big idea might come from a conversation here.',
    },
    {
      icon: <IllustrationCreate />,
      title: 'Create',
      desc: 'Access a beautiful space for workshops, pop-ups, exhibitions, and coworking sessions.',
    },
    {
      icon: <IllustrationCollaborate />,
      title: 'Collaborate',
      desc: 'From joint ventures to casual brainstorms — the best things happen when creative minds collide.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FEFCF9] text-[#2a2a2a] font-sans overflow-x-hidden">

      {/* ─── Floating WhatsApp Button ─────────────────────────── */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white pl-5 pr-6 py-3.5 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2.5"
      >
        <WhatsAppIcon className="w-5 h-5" />
        Join the Community
      </a>

      {/* ─── Nav (minimal) ────────────────────────────────────── */}
      <nav className="w-full py-5 px-6 flex items-center justify-between max-w-5xl mx-auto">
        <a href="/" className="flex items-center gap-2 group">
          <img src="/logo-casaprisma.png" alt="Casa Prisma" className="h-9 w-auto" />
        </a>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#2a2a2a] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#444] transition-colors"
        >
          Join now
        </a>
      </nav>

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="pt-10 pb-16 px-6 max-w-4xl mx-auto text-center">
        <div className="inline-block bg-[#e8973e]/10 text-[#e8973e] text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full mb-8">
          Casa Prisma Community
        </div>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[0.95] mb-6">
          Where ideas meet<br />
          <span className="bg-gradient-to-r from-[#e8973e] to-[#d4832a] bg-clip-text text-transparent">
            the people who build them
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-[#666] max-w-2xl mx-auto mb-10 leading-relaxed">
          A community of entrepreneurs, creatives, and makers in Barcelona.
          We share ideas, opportunities, and a beautiful space to make things happen.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-full font-semibold text-base shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Join the WhatsApp Community
        </a>
        <p className="text-sm text-[#999] mt-4">Free to join</p>
        <div className="mt-12">
          <IllustrationHero />
        </div>
      </section>

      {/* ─── Perks Grid ───────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4 tracking-tight">
            More than a group chat
          </h2>
          <p className="text-center text-[#888] text-lg mb-14 max-w-xl mx-auto">
            It's a launchpad for your next chapter in Barcelona.
          </p>
          <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="bg-[#FEFCF9] rounded-3xl p-8 text-center hover:shadow-md transition-shadow duration-300"
              >
                {perk.icon}
                <h3 className="font-display text-xl font-bold mt-4 mb-2">{perk.title}</h3>
                <p className="text-[#777] leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What You'll Find ─────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-14 tracking-tight">
            What happens inside
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { emoji: '🎨', label: 'Art exhibitions & pop-ups' },
              { emoji: '💡', label: 'Startup brainstorm sessions' },
              { emoji: '📸', label: 'Photography meetups' },
              { emoji: '🎵', label: 'Live music & jam sessions' },
              { emoji: '🧑‍💻', label: 'Coworking days' },
              { emoji: '🌮', label: 'Social dinners & afterworks' },
              { emoji: '📣', label: 'Skill-sharing workshops' },
              { emoji: '🤝', label: 'Collaboration matchmaking' },
              { emoji: '🚀', label: 'Launch parties & demos' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-sm"
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="font-medium text-[#444]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA (orange background) ────────────────────── */}
      <section className="py-24 px-6 text-center bg-[#e8973e]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight text-white">
            Your next collaboration<br />starts with a{' '}
            <span className="text-[#2a2a2a]">click</span>
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
            Join entrepreneurs and creatives building the Barcelona they want to live in.
            No spam, no noise — just real connections.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white hover:bg-gray-50 text-[#2a2a2a] px-10 py-5 rounded-full font-bold text-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
            Join the WhatsApp Community
          </a>
        </div>
      </section>

      {/* ─── Minimal Footer ───────────────────────────────────── */}
      <footer className="py-10 px-6 text-center border-t border-[#eee]">
        <a href="/" className="inline-flex items-center gap-2 mb-3">
          <img src="/logo-casaprisma.png" alt="Casa Prisma" className="h-7 w-auto opacity-70" />
        </a>
        <p className="text-xs text-[#bbb]">
          Casa Prisma — Creative space in Barcelona
        </p>
        <div className="flex items-center justify-center gap-4 mt-3">
          <a
            href="https://www.instagram.com/casaprismabcn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#bbb] hover:text-[#888] transition-colors text-xs underline underline-offset-2"
          >
            Instagram
          </a>
          <a
            href="/"
            className="text-[#bbb] hover:text-[#888] transition-colors text-xs underline underline-offset-2"
          >
            Our space
          </a>
        </div>
      </footer>
    </div>
  );
};

export default CommunityPage;
