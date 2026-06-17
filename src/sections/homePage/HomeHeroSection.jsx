import React from 'react';

const HomeHeroSection = () => {
  const tickerItems = [
    "Engineered for hyper-growth",
    "Custom digital platforms",
    "Data-driven execution",
    "Enterprise web infrastructure",
    "Performance marketing",
    "Conversion optimization",
  ];

  const doubled = [...tickerItems, ...tickerItems];

  return (
    <section style={{ fontFamily: "'Inter', sans-serif", background: '#FFFEF9', color: '#1C1F26', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600&display=swap');

        .hero-grid-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .hero-spot {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: rgba(0, 180, 175, 0.07);
          top: -160px;
          right: -120px;
          pointer-events: none;
        }
        .hero-spot-sm {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: rgba(0, 180, 175, 0.04);
          bottom: -60px;
          left: -60px;
          pointer-events: none;
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #1C1F26;
          color: #F7F5F1;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 500;
          padding: 14px 28px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          text-decoration: none;
        }
        .hero-btn-primary:hover { background: #2D3240; transform: translateY(-1px); }
        .hero-btn-primary:active { transform: scale(0.98); }
        .hero-btn-primary:hover .hero-arrow { transform: translateX(3px); }

        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          color: #6B7280;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 500;
          padding: 14px 4px;
          border: none;
          cursor: pointer;
          transition: color 0.2s;
          text-decoration: none;
        }
        .hero-btn-secondary:hover { color: #1C1F26; }
        .hero-btn-secondary:hover .hero-arrow { transform: translateX(3px); }

        .hero-arrow {
          width: 14px;
          height: 14px;
          stroke: currentColor;
          stroke-width: 2;
          fill: none;
          transition: transform 0.2s;
        }

        @keyframes hero-ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .hero-ticker-track {
          display: flex;
          align-items: center;
          white-space: nowrap;
          animation: hero-ticker 32s linear infinite;
        }
      `}</style>

      {/* Hero */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '100px 24px 80px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div className="hero-grid-bg">
          <div className="hero-spot" />
          <div className="hero-spot-sm" />
        </div>

        {/* Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'white', border: '1px solid rgba(28,31,38,0.1)', borderRadius: 999, padding: '6px 14px 6px 10px', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 36, position: 'relative' }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#00B4AF', flexShrink: 0 }} />
          Digital Growth Agency
        </div>

        {/* Headline */}
        <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontWeight: 400, fontSize: 'clamp(44px, 7vw, 80px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: '#1C1F26', maxWidth: 760, position: 'relative', margin: 0 }}>
          Marketing that moves<br />
          at the speed of{' '}
          <em style={{ fontStyle: 'italic', color: '#00B4AF' }}>your ambition</em>
        </h1>

        {/* Subline */}
        <p style={{ marginTop: 24, fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: 1.7, color: '#6B7280', maxWidth: 480, position: 'relative' }}>
          Strategy, technology, and execution — built into one platform that scales with your business.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 48, position: 'relative', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#" className="hero-btn-primary">
            Let's talk growth
            <svg className="hero-arrow" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#" className="hero-btn-secondary">
            See our work
            <svg className="hero-arrow" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Ticker */}
      <div style={{ width: '100%', borderTop: '1px solid rgba(28,31,38,0.09)', background: '#FFFEF9', height: 52, display: 'flex', alignItems: 'center', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>

        {/* Label */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, background: '#FFFEF9', zIndex: 10, padding: '0 24px 0 20px', display: 'flex', alignItems: 'center', borderRight: '1px solid rgba(28,31,38,0.09)', boxShadow: '8px 0 20px rgba(255,254,249,0.95)', fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9CA3AF', gap: 8, whiteSpace: 'nowrap' }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#00B4AF', flexShrink: 0 }} />
          What we do
        </div>

        {/* Scrolling strip */}
        <div style={{ paddingLeft: 160, overflow: 'hidden', width: '100%' }}>
          <div className="hero-ticker-track">
            {doubled.map((text, idx) => (
              <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: 16, padding: '0 40px', fontSize: 12.5, fontWeight: 500, color: '#6B7280', letterSpacing: '0.02em' }}>
                {text}
                <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#D1D5DB', flexShrink: 0 }} />
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default HomeHeroSection;