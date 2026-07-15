import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const promises = [
  { iconPath: '/assets/icons/rocket.png', title: 'Future-Ready Careers', desc: 'Launch into in-demand AI & cybersecurity roles.' },
  { iconPath: '/assets/icons/salary.png', title: 'High Salary Potential', desc: 'Unlock high paying opportunities globally.' },
  { iconPath: '/assets/icons/shield-check.png', title: 'Future-Proof Your Career', desc: 'Build skills that stay relevant in the AI era.' },
  { iconPath: '/assets/icons/globe.png', title: 'Learn. Apply. Lead.', desc: 'Practical learning that creates real impact.' },
];

const stats = [
  { iconPath: '/assets/icons/experience.png', value: '25+', label: 'YEARS OF INDUSTRY EXPERIENCE', desc: 'Deep expertise in Cybersecurity, AI & Enterprise Security.' },
  { iconPath: '/assets/icons/careers.png', value: '20,000+', label: 'CAREERS TRANSFORMED', desc: 'Professionals upskilled and placed globally.' },
  { iconPath: '/assets/icons/globe.png', value: '10+', label: 'COUNTRIES IMPACTED', desc: 'Global reach. One mission.' },
];

export default function HeroSection() {
  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      background: '#04070c',
      padding: '24px 0 32px',
      minHeight: '85vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>

      {/* ── Content wrapper ── */}
      <div className="hero-inner" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 90px',
        position: 'relative',
        zIndex: 1,
      }}>

        {/* ── LEFT: Heading + content ── */}
        <div className="hero-left" style={{ flex: '0 0 45%', maxWidth: 650, minWidth: 0, position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

          <h1 style={{
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '-0.5px',
            color: '#fff',
            marginBottom: 12,
            display: 'flex',
            flexDirection: 'column',
          }}>
            <span className="hero-line" style={{ animationDelay: '0ms', fontSize: 'clamp(32px, 3.5vw, 48px)', lineHeight: 1.1 }}>LAND IN YOUR</span>
            <span className="hero-line hero-line-orange" style={{ animationDelay: '130ms', fontSize: 'clamp(48px, 5.5vw, 76px)', lineHeight: 0.95, display: 'inline-block' }}>HIGH PAYING</span>
            <span className="hero-line hero-nowrap" style={{ animationDelay: '260ms', fontSize: 'clamp(28px, 3vw, 42px)', lineHeight: 1.05 }}>AI &amp; CYBERSECURITY JOB</span>
            <span className="hero-line" style={{ animationDelay: '390ms', fontSize: 'clamp(36px, 4vw, 54px)', lineHeight: 1.05 }}>IN NEXT <span style={{ color: 'var(--orange)' }}>6 MONTHS</span></span>
          </h1>

          <p className="hero-line" style={{ animationDelay: '590ms', fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: 4, display: 'block' }}>
            Enterprise-Focused Training. Real-World Skills. Industry Exposure.
          </p>
          <p className="hero-line" style={{ animationDelay: '640ms', fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: 20, display: 'block' }}>
            We don't just teach. We{' '}
            <span style={{ color: 'var(--orange)', fontWeight: 700 }}>transform careers.</span>
          </p>

          {/* CTA */}
          <div className="hero-line" style={{ animationDelay: '770ms' }}>
            <Link
              to="/soc-dfir"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '12px 28px',
                background: 'var(--orange)',
                color: '#fff',
                fontWeight: 800,
                fontSize: 15,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                borderRadius: 6,
                textDecoration: 'none',
                flexShrink: 0,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#ff8c00';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(255,102,0,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--orange)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              EXPLORE COURSES <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* ── MIDDLE: SOC operator image ── */}
        {/* The image takes up the space between left and right, fading on left to blend seamlessly */}
        <div className="hero-middle" style={{
          position: 'absolute',
          left: '35%',
          right: '360px', /* slightly reduced gap */
          top: -10,
          bottom: -10,
          zIndex: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img
            src="/assets/Images/soc-operator.jpg"
            alt="SOC Analyst monitoring global threat map"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'left center',
              display: 'block',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 100%)',
              maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 100%)'
            }}
          />
        </div>

        {/* ── RIGHT: Promise panel ── */}
        <div className="hero-right" style={{ flex: '0 0 380px', width: 380, minWidth: 380, position: 'relative', zIndex: 2 }}>
          <div style={{
            border: '1px solid rgba(255,102,0,0.55)',
            borderRadius: 12,
            padding: '10px 24px',
            background: '#04070c', // Solid background as per reference, not blurred over image
            boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
          }}>
            {promises.map(({ iconPath, title, desc }, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
                padding: '16px 0',
                borderBottom: i < promises.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              }}>
                <img src={iconPath} alt={title} style={{ width: 72, height: 72, objectFit: 'contain', flexShrink: 0, marginTop: 0 }} />
                <div>
                  <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 4, lineHeight: 1.25 }}>{title}</p>
                  <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.6)', lineHeight: 1.45 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── BOTTOM: Stats bar ── */}
      <div className="hero-stats-wrap" style={{ padding: '0 90px', marginTop: 28, position: 'relative', zIndex: 2 }}>
        <div className="hero-stats-bar" style={{
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 12,
          background: '#0a0d14', // Slightly lighter than background to stand out
          display: 'flex',
        }}>
          {stats.map(({ iconPath, value, label, desc }, i) => (
            <div key={i} className="hero-stat-item" style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 24,
              padding: '24px 32px',
              minWidth: 0,
              borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
            }}>
              <img src={iconPath} alt={label} className="hero-stat-icon" style={{ width: 110, height: 110, objectFit: 'contain', flexShrink: 0 }} />
              <div style={{ minWidth: 0 }}>
                <p style={{ fontSize: 40, fontWeight: 900, color: '#fff', lineHeight: 1 }}>
                  {value}
                </p>
                <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginTop: 8, marginBottom: 4 }}>
                  {label}
                </p>
                <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.6)', lineHeight: 1.45 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Styles ── */}
      <style>{`
        @keyframes heroLineIn {
          from { opacity: 0; transform: translateY(36px); filter: blur(6px); }
          to   { opacity: 1; transform: translateY(0);    filter: blur(0px); }
        }
        .hero-line {
          display: inline-block;
          opacity: 0;
          animation: heroLineIn 0.72s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .hero-line-orange { color: var(--orange); }
        .hero-nowrap { white-space: nowrap; }

        /* ── Medium Desktop (1024px–1280px) ── */
        @media (max-width: 1280px) {
          .hero-inner {
            padding: 0 40px !important;
          }
          .hero-stats-wrap {
            padding: 0 40px !important;
          }
          .hero-middle {
            left: 42% !important;
            opacity: 0.35;
          }
          .hero-stat-item {
            padding: 16px 20px !important;
            gap: 16px !important;
          }
          .hero-stat-icon {
            width: 80px !important;
            height: 80px !important;
          }
        }

        /* ── Tablet (768px–1023px) ── */
        @media (min-width: 768px) and (max-width: 1023px) {
          .hero-middle {
            position: static !important;
            width: 100% !important;
            max-height: 320px !important;
            margin: 32px 0 !important;
            mask-image: none !important;
            -webkit-mask-image: none !important;
          }
          .hero-inner {
            flex-direction: column !important;
            align-items: stretch !important;
            padding: 0 40px !important;
          }
          .hero-left {
            flex: none !important;
            width: 100% !important;
            max-width: none !important;
          }
          .hero-right {
            flex: none !important;
            width: 100% !important;
            min-width: 0 !important;
          }
          .hero-stats-wrap {
            padding: 0 40px !important;
          }
          .hero-stat-item {
            padding: 20px !important;
            gap: 20px !important;
          }
          .hero-stat-icon {
            width: 70px !important;
            height: 70px !important;
          }
        }

        /* ── Mobile (<768px) ── */
        @media (max-width: 767px) {
          .hero-middle {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100% !important;
            height: 100% !important;
            max-height: none !important;
            margin: 0 !important;
            z-index: 0 !important;
            opacity: 0.35 !important;
            pointer-events: none !important;
            mask-image: none !important;
            -webkit-mask-image: none !important;
          }
          .hero-inner {
            flex-direction: column !important;
            align-items: stretch !important;
            padding: 0 20px !important;
            gap: 0 !important;
          }
          .hero-left {
            flex: none !important;
            width: 100% !important;
            max-width: none !important;
            min-height: calc(100vh - 70px) !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
          }
          .hero-right {
            flex: none !important;
            width: 100% !important;
            min-width: 0 !important;
          }
          .hero-nowrap {
            white-space: normal !important;
          }
          .hero-stats-wrap {
            padding: 0 20px !important;
            margin-top: 32px !important;
          }
          .hero-stats-bar {
            flex-direction: column !important;
          }
          .hero-stat-item {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding: 24px 20px !important;
            gap: 16px !important;
          }
          .hero-stat-item:last-child {
            border-bottom: none;
          }
          .hero-stat-icon {
            width: 60px !important;
            height: 60px !important;
          }
        }
      `}</style>
    </section>
  );
}

