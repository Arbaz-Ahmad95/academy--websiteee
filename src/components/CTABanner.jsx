import { Link } from 'react-router-dom';
import { Target, Monitor, Users, FileText, Infinity as InfinityIcon, Briefcase, ArrowRight } from 'lucide-react';

const features = [
  { Icon: Target, lines: ['Job-Ready Skills', 'In High Demand'] },
  { Icon: Monitor, lines: ['Flexible Learning', 'Online & Offline'] },
  { Icon: Users, lines: ['1:1 Mentorship', 'From Experts'] },
  { Icon: FileText, lines: ['Resume & Interview', 'Preparation'] },
  { Icon: InfinityIcon, lines: ['Lifetime Access', 'To Resources'] },
  { Icon: Briefcase, lines: ['Placement Support', '& Career Guidance'] },
];

export default function CTABanner() {
  return (
    <section className="cta2-section" style={{ background: '#050505', padding: '0 0 60px', fontFamily: "'Inter', sans-serif" }}>
      <div className="cta2-container">
        <div className="cta2-card" style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          <img
            src="/assets/Images/cta-globe.png"
            alt=""
            className="cta2-globe"
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              width: 'auto',
              maxWidth: '35%',
              objectFit: 'cover',
              pointerEvents: 'none',
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(5,5,5,0.1) 0%, rgba(5,5,5,0.85) 25%, #050505 35%)',
          }} />

          <div className="cta2-content" style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            padding: '36px 40px 36px 280px',
          }}>
            {/* Top Row: Text and Button */}
            <div className="cta2-top-row">
              <div style={{ flex: '1 1 auto', minWidth: 0 }}>
                <p style={{ margin: 0, fontSize: 'clamp(18px, 2vw, 24px)', fontFamily: "'Inter', sans-serif", fontWeight: 800, color: '#fff', letterSpacing: '0.5px', lineHeight: 1.3 }}>
                  THE FUTURE IS AI. THE RISK IS REAL. THE OPPORTUNITY IS NOW.
                </p>
                <p style={{ margin: '4px 0 0', fontSize: 'clamp(18px, 2vw, 24px)', fontFamily: "'Inter', sans-serif", fontWeight: 800, color: '#ff6a00', letterSpacing: '0.5px', lineHeight: 1.3 }}>
                  BUILD THE SKILLS. GET HIRED. TRANSFORM YOUR LIFE.
                </p>
              </div>
              
              <Link
                to="/contact"
                className="cta2-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#ff6a00',
                  color: '#fff',
                  padding: '14px 28px',
                  borderRadius: '6px',
                  fontSize: '15px',
                  fontWeight: 700,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  flexShrink: 0,
                  transition: 'all 0.2s ease',
                  marginTop: '4px'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#e05d00'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#ff6a00'; }}
              >
                TALK TO AN ADVISOR <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
            </div>

            {/* Bottom Row: All 6 Features */}
            <div className="cta2-features">
              {features.map(({ Icon, lines }, i) => (
                <div key={i} className="cta2-feature-item" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  paddingRight: i < features.length - 1 ? '16px' : '0',
                  borderRight: i < features.length - 1 ? '1px solid rgba(255, 255, 255, 0.15)' : 'none',
                }}>
                  <Icon size={26} strokeWidth={1.5} style={{ color: '#ff6a00', flexShrink: 0 }} />
                  <span style={{ fontSize: '12px', fontWeight: 500, color: '#bbb', lineHeight: 1.4 }}>
                    {lines[0]}<br />{lines[1]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cta2-container {
          padding: 0 90px;
        }
        .cta2-top-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
        }
        .cta2-features {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: nowrap;
        }

        @media (max-width: 1100px) {
          .cta2-content {
            padding-left: 180px !important;
          }
        }
        @media (max-width: 1023px) {
          .cta2-container {
            padding: 0 40px !important;
          }
        }
        @media (max-width: 991px) {
          .cta2-content {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 24px 24px 24px 180px !important;
          }
          .cta2-top-row {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            width: 100% !important;
            gap: 16px !important;
          }
          .cta2-btn {
            align-self: center !important;
            margin-top: 0 !important;
          }
          .cta2-features {
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: 16px !important;
            width: 100% !important;
          }
          .cta2-feature-item {
            flex: 1 1 28% !important;
            border-right: none !important;
            padding: 4px 0 !important;
          }
        }
        @media (max-width: 767px) {
          .cta2-container {
            padding: 0 20px !important;
          }
          .cta2-globe {
            display: none;
          }
          .cta2-content {
            padding: 24px 20px !important;
          }
          .cta2-feature-item {
            flex: 1 1 42% !important;
            border-right: none !important;
            padding: 8px 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
