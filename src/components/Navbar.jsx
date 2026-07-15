import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Shield, Lock, Scale, FlaskConical, ShieldCheck, Menu, X, ArrowRight } from 'lucide-react';

const courses = [
  { label: 'SOC + DFIR Specialist',              path: '/soc-dfir',    Icon: Shield },
  { label: 'Certified AI Evaluation Professional', path: '/caep',       Icon: FlaskConical },
  { label: 'AI Governance & Risk Specialist',    path: '/modules/ai-risk-governance',         Icon: Scale },
  { label: 'IAM Specialist',                     path: '/iam',          Icon: Lock },
  { label: 'AI Security Specialist',             path: '/ai-security',  Icon: ShieldCheck },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); setCoursesOpen(false); }, [location]);

  return (
    <nav className="gs-navbar" style={{ boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.5)' : 'none' }}>
      <div className="gs-navbar-wrap" style={{ padding: '0 90px', width: '100%' }}>
        <div className="d-flex align-items-center justify-content-between" style={{ height: 70 }}>

          {/* ── Logo ── */}
          <Link to="/" style={{ textDecoration: 'none', lineHeight: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <img src="/assets/Images/gs4.png" alt="GlobalSOC Academy" style={{ height: 30, width: 'auto', display: 'block' }} />
              <span style={{ fontSize: 10, fontWeight: 800, color: 'var(--orange)', letterSpacing: '5px', textTransform: 'uppercase', marginTop: 4, paddingLeft: 2 }}>
                A C A D E M Y
              </span>
            </div>
          </Link>

          {/* ── Desktop links ── */}
          <div className="d-none d-lg-flex align-items-center" style={{ gap: 0 }}>

            {/* Home */}
            <Link to="/" style={{ fontSize: 18, fontWeight: 500, color: 'rgba(255,255,255,0.8)', padding: '10px 20px', transition: 'color 0.2s', textDecoration: 'none', whiteSpace: 'nowrap' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
            >Home</Link>

            {/* Courses dropdown */}
            <div className="position-relative"
              onMouseEnter={() => setCoursesOpen(true)}
              onMouseLeave={() => setCoursesOpen(false)}
            >
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.8)', fontSize: 18, fontWeight: 500, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.2s', whiteSpace: 'nowrap' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
              >
                Courses
                <ChevronDown size={18} style={{ transition: 'transform 0.2s', transform: coursesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </button>

              {coursesOpen && (
                <div className="dropdown-menu show position-absolute" style={{ top: '100%', left: 0 }}>
                  {courses.map(c => (
                    <Link key={c.path} to={c.path} className="dropdown-item d-flex align-items-center gap-2">
                      <div className="icon-wrap" style={{ width: 28, height: 28, borderRadius: 6, flexShrink: 0 }}>
                        <c.Icon size={18} strokeWidth={1.8} />
                      </div>
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {[
              { label: 'Why Global SOC',   path: '/why-globalsoc' },
              { label: 'Success Stories',  path: '/success-stories' },
              { label: 'Resources',        path: '/resources' },
              { label: 'About Us',         path: '/about' },
            ].map(item => (
              <Link key={item.label} to={item.path} style={{ fontSize: 18, fontWeight: 500, color: 'rgba(255,255,255,0.8)', padding: '10px 20px', cursor: 'pointer', transition: 'color 0.2s', textDecoration: 'none', whiteSpace: 'nowrap' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
              >{item.label}</Link>
            ))}
          </div>

          {/* ── CTA ── */}
          <div className="gs-navbar-cta d-none d-lg-block" style={{ marginRight: 0 }}>
            <Link
              to="/contact"
              style={{
                background: 'transparent',
                border: '1.5px solid var(--orange)',
                color: 'var(--orange)',
                padding: '12px 28px',
                fontSize: 16,
                fontWeight: 600,
                borderRadius: '4px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,102,0,0.1)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(255,102,0,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Talk to an Advisor
            </Link>
          </div>

          {/* ── Mobile hamburger ── */}
          <button className="d-lg-none" onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: menuOpen ? 'var(--orange)' : '#fff' }}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ── Mobile menu ── */}
        {menuOpen && (
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingBottom: 20 }}>
            <div style={{ padding: '8px 0' }}>
              <button onClick={() => setCoursesOpen(!coursesOpen)}
                style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.8)', fontSize: 14, fontWeight: 500, padding: '12px 0', cursor: 'pointer', width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
              >
                Courses
                <ChevronDown size={14} style={{ transform: coursesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>
              {coursesOpen && (
                <div style={{ paddingLeft: 16, marginTop: 8, marginBottom: 8 }}>
                  {courses.map(c => (
                    <Link key={c.path} to={c.path} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', color: 'rgba(255,255,255,0.6)', fontSize: 13, borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <div className="icon-wrap" style={{ width: 26, height: 26, borderRadius: 6, flexShrink: 0 }}>
                        <c.Icon size={13} strokeWidth={1.8} />
                      </div>
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
              {[
                { label: 'Home',            path: '/' },
                { label: 'Why GlobalSOC',   path: '/why-globalsoc' },
                { label: 'Success Stories', path: '/success-stories' },
                { label: 'Resources',       path: '/resources' },
                { label: 'About Us',        path: '/about' },
              ].map(item => (
                <Link key={item.label} to={item.path} style={{ display: 'block', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.8)', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                >{item.label}</Link>
              ))}
              <div style={{ paddingTop: 16 }}>
                <Link
                  to="/contact"
                  className="btn-orange"
                  style={{ width: '100%', justifyContent: 'center', border: '1.5px solid transparent', transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,102,0,0.12)';
                    e.currentTarget.style.border = '1.5px solid rgba(255,102,0,0.75)';
                    e.currentTarget.style.backdropFilter = 'blur(12px)';
                    e.currentTarget.style.WebkitBackdropFilter = 'blur(12px)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,102,0,0.28), inset 0 0 24px rgba(255,102,0,0.06)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'var(--orange)';
                    e.currentTarget.style.border = '1.5px solid transparent';
                    e.currentTarget.style.backdropFilter = 'none';
                    e.currentTarget.style.WebkitBackdropFilter = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.color = '#fff';
                  }}
                >
                  Enroll Now <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .gs-navbar-wrap { padding-left: 40px !important; padding-right: 24px !important; }
          .gs-navbar-cta { margin-right: 16px !important; }
        }
        @media (max-width: 767px) {
          .gs-navbar-wrap { padding-left: 20px !important; padding-right: 16px !important; }
          .gs-navbar-cta { margin-right: 8px !important; }
        }
      `}</style>
    </nav>
  );
}
