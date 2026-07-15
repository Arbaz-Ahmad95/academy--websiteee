import { Link } from 'react-router-dom';
import { Shield, Lock, Scale, FlaskConical, ShieldCheck, Globe, GraduationCap, Star, FileText } from 'lucide-react';

const courses = [
  { label: 'SOC + DFIR Specialist',               path: '/soc-dfir',   Icon: Shield },
  { label: 'IAM Specialist',                      path: '/iam',         Icon: Lock },
  { label: 'AI Governance & Risk Specialist',     path: '/modules/ai-risk-governance',        Icon: Scale },
  { label: 'Certified AI Evaluation Professional', path: '/caep',       Icon: FlaskConical },
  { label: 'AI Security Specialist',              path: '/ai-security', Icon: ShieldCheck },
];

const complianceBadges = [
  { label: 'ISO 27001 Aligned',  Icon: Lock },
  { label: 'NIST AI RMF',        Icon: FileText },
  { label: 'EU AI Act Ready',    Icon: ShieldCheck },
  { label: 'Global Recognition', Icon: Globe },
  { label: '4.9/5 Rating',       Icon: Star },
];

export default function Footer() {
  return (
    <footer className="gs-footer" style={{ background: '#050a14', borderTop: '1px solid var(--border-card)' }}>
      <div className="gs-footer-wrap">
        
        {/* ─── Footer Top (Columns) ─── */}
        <div className="gs-footer-grid">
          
          {/* Column 1: Academy Brand */}
          <div className="gs-footer-col gs-footer-col-brand">
            <Link to="/" style={{ textDecoration: 'none', lineHeight: 1, display: 'inline-block' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <img src="/assets/Images/gs4.png" alt="GlobalSOC Academy" style={{ height: 30, width: 'auto', display: 'block' }} />
                <span style={{ fontSize: 9, fontWeight: 800, color: 'var(--orange)', letterSpacing: '5px', textTransform: 'uppercase', marginTop: 4, paddingLeft: 2 }}>
                  A C A D E M Y
                </span>
              </div>
            </Link>
            <p className="gs-footer-desc" style={{ maxWidth: 260 }}>
              Master in-demand AI & Cybersecurity skills through expert-led, hands-on training inside a real Security Operations Centre.
            </p>
            <Link to="/" className="footer-pill-btn">
              <GraduationCap size={14} className="icon-orange" />
              <span>academy.globalsoc.ai</span>
            </Link>
          </div>

          {/* Column 2: Program */}
          <div className="gs-footer-col">
            <h6 className="gs-footer-title">Program</h6>
            <ul className="gs-footer-links">
              {courses.map(c => (
                <li key={c.path}>
                  <Link to={c.path} className="gs-footer-link">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="gs-footer-col">
            <h6 className="gs-footer-title">Quick Links</h6>
            <ul className="gs-footer-links">
              {[
                { label: 'Career Pathways',  path: '/career-pathways' },
                { label: 'Real SOC',         path: '/real-soc' },
                { label: 'Mentors',          path: '/mentors' },
                { label: 'Success Stories',  path: '/success-stories' },
                { label: 'Resources',        path: '/resources' },
                { label: 'About Us',         path: '/about' },
              ].map(link => (
                <li key={link.label}>
                  {link.path.startsWith('#') ? (
                    <a href={link.path} className="gs-footer-link">
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.path} className="gs-footer-link">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: GlobalSOC Main Site */}
          <div className="gs-footer-col gs-footer-col-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 800, color: '#fff', letterSpacing: '1px', textTransform: 'uppercase', height: 28 }}>
              <span className="icon-orange" style={{ fontSize: 14 }}>❖</span>
              <span>GLOBAL<span style={{ color: 'var(--orange)' }}>SOC</span></span>
            </div>
            <p className="gs-footer-desc">
              Enterprise-grade AI security, managed Security Operations Center (SOC) services, and comprehensive cyber threat intelligence solutions.
            </p>
            <a href="https://globalsoc.ai" target="_blank" rel="noopener noreferrer" className="footer-pill-btn">
              <Globe size={14} className="icon-orange" />
              <span>globalsoc.ai</span>
            </a>
          </div>

        </div>

        {/* ─── Glow Line Separator ─── */}
        <div className="glow-line" style={{ margin: '40px 0 24px 0', height: '1px', background: 'linear-gradient(90deg, rgba(255,102,0,0) 0%, rgba(255,102,0,0.15) 50%, rgba(255,102,0,0) 100%)' }} />

        {/* ─── Footer Bottom (Copyright & Badges) ─── */}
        <div className="gs-footer-bottom">
          <div className="gs-footer-copyright">
            © {new Date().getFullYear()} GlobalSOC. All rights reserved.
          </div>
          <div className="gs-footer-badges">
            {complianceBadges.map(badge => (
              <div key={badge.label} className="gs-footer-badge">
                <badge.Icon size={12} strokeWidth={1.8} className="icon-orange-badge" />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .gs-footer-wrap {
          padding: 64px 90px 40px 90px;
          width: 100%;
        }

        .gs-footer-grid {
          display: grid;
          grid-template-columns: 2fr 1.2fr 1.2fr 2fr;
          column-gap: 60px;
          row-gap: 48px;
        }

        .gs-footer-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .gs-footer-col-brand {
          gap: 20px;
        }

        .gs-footer-title {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 4px;
        }

        .gs-footer-desc {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.65;
          margin: 0;
        }

        .gs-footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .gs-footer-link {
          font-size: 13px;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .gs-footer-link:hover {
          color: var(--orange);
        }

        .footer-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(255, 102, 0, 0.04);
          border: 1px solid rgba(255, 102, 0, 0.2);
          border-radius: 8px;
          color: rgba(255,255,255,0.9);
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          width: fit-content;
        }

        .footer-pill-btn:hover {
          background: rgba(255, 102, 0, 0.1);
          border-color: var(--orange);
          color: #fff;
          box-shadow: 0 0 15px rgba(255, 102, 0, 0.25);
          transform: translateY(-1px);
        }

        .icon-orange {
          color: var(--orange);
        }

        .icon-orange-subtle {
          color: rgba(255, 102, 0, 0.7);
          flex-shrink: 0;
        }

        .icon-orange-badge {
          color: rgba(255, 255, 255, 0.5);
          flex-shrink: 0;
          transition: color 0.2s ease;
        }

        .gs-footer-badge:hover .icon-orange-badge {
          color: var(--orange);
        }

        .gs-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        .gs-footer-copyright {
          font-size: 13px;
          color: var(--text-muted);
        }

        .gs-footer-badges {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .gs-footer-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 30px;
          font-size: 11.5px;
          color: rgba(255, 255, 255, 0.6);
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .gs-footer-badge:hover {
          border-color: rgba(255, 102, 0, 0.35);
          background: rgba(255, 102, 0, 0.05);
          color: #fff;
        }

        /* ─── Media Queries for Padding & Grid ─── */
        @media (max-width: 1023px) {
          .gs-footer-wrap {
            padding-left: 40px !important;
            padding-right: 40px !important;
          }
          .gs-footer-grid {
            grid-template-columns: 1fr 1fr;
            column-gap: 48px;
            row-gap: 40px;
          }
        }

        @media (max-width: 767px) {
          .gs-footer-wrap {
            padding-left: 20px !important;
            padding-right: 16px !important;
          }
          .gs-footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .gs-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .gs-footer-badges {
            gap: 8px;
          }
          .gs-footer-badge {
            padding: 5px 10px;
            font-size: 11px;
          }
        }
      `}</style>
    </footer>
  );
}
