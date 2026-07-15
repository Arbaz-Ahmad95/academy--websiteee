import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import GlobalContactForm from '../components/GlobalContactForm';
import { ArrowRight, BookOpen, CheckCircle, Flag, FileText, Globe, ShieldAlert, Target, Shield, AlertTriangle, Users, Clock, ShieldCheck, Settings2, Lock, Briefcase, Award } from 'lucide-react';

function RevealSection({ children, delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return <div ref={ref}>{children}</div>;
}

const journeySteps = [
  {
    title: 'Assess',
    desc: 'Inventory all AI systems. Score each by risk tier. Identify critical gaps.',
  },
  {
    title: 'Design',
    desc: 'Build a governance framework tailored to your industry and regulatory context.',
  },
  {
    title: 'Deploy',
    desc: 'Embed controls, tooling, and automated policy enforcement into your AI pipelines.',
  },
  {
    title: 'Monitor',
    desc: 'Continuous oversight with alerts, dashboards, and quarterly risk reviews.',
  },
];

const capabilities = [
  {
    title: 'AI Risk Identification',
    desc: 'Automated scanning of AI systems to surface hidden risks — from model bias to data poisoning vulnerabilities across your entire AI portfolio.',
  },
  {
    title: 'Policy Automation',
    desc: 'Turn regulatory requirements into enforceable machine-readable policies. Automate compliance checks with every model update or deployment.',
  },
  {
    title: 'Continuous Monitoring',
    desc: 'Real-time dashboards tracking model drift, fairness metrics, performance degradation, and data quality across production AI systems.',
  },
  {
    title: 'Regulatory Mapping',
    desc: 'Align your AI governance posture to NIST AI RMF, EU AI Act, ISO/IEC 42001, GDPR, and sector-specific frameworks simultaneously.',
  },
  {
    title: 'Incident Response Integration',
    desc: 'Bi-directional link with your SOC and DFIR teams to escalate AI-specific incidents with pre-built playbooks and chain-of-custody protocols.',
  },
  {
    title: 'Board-Level Reporting',
    desc: 'Auto-generated executive risk reports in plain language — providing board-level visibility into your AI risk posture without technical jargon.',
  },
];

export default function AIGPPage() {
  const [hoveredGovCard, setHoveredGovCard] = useState(null);
  const [hoveredFramework, setHoveredFramework] = useState(null);
  const [hoveredScenario, setHoveredScenario] = useState(null);
  const [hoveredAudience, setHoveredAudience] = useState(null);
  const [hoveredModule, setHoveredModule] = useState(null);

  const govHeadingRef = useRef(null);
  const [govHeadingVisible, setGovHeadingVisible] = useState(false);
  const frameworkRef = useRef(null);
  const [frameworkVisible, setFrameworkVisible] = useState(false);
  const moduleRef = useRef(null);
  const [moduleVisible, setModuleVisible] = useState(false);
  const scenarioRef = useRef(null);
  const [scenarioVisible, setScenarioVisible] = useState(false);
  const audienceRef = useRef(null);
  const [audienceVisible, setAudienceVisible] = useState(false);

  useEffect(() => {
    const entries = [
      [govHeadingRef, setGovHeadingVisible],
      [frameworkRef, setFrameworkVisible],
      [moduleRef, setModuleVisible],
      [scenarioRef, setScenarioVisible],
      [audienceRef, setAudienceVisible],
    ];
    const observers = entries.map(([ref, setter]) => {
      const el = ref.current; if (!el) return null;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { setter(true); obs.disconnect(); } },
        { threshold: 0.25 }
      );
      obs.observe(el); return obs;
    });
    return () => observers.forEach(o => o && o.disconnect());
  }, []);

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#060810' }}>
        <div className="aigp-hero-inner">

          {/* LEFT — content */}
          <div className="aigp-hero-left">

            {/* Top badge */}
            <div className="aigp-hero-line" style={{ animationDelay: '0ms', marginBottom: 12 }}>
              <span style={{
                display: 'inline-block',
                background: 'rgba(255,102,0,0.18)',
                border: '1px solid rgba(255,102,0,0.5)',
                borderRadius: 4,
                padding: '5px 14px',
                fontSize: 11,
                fontWeight: 800,
                color: '#ff8c42',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
              }}>
                AIGP PROFESSIONAL CERTIFICATE PROGRAM 2026
              </span>
            </div>

            {/* Main heading */}
            <h1 className="aigp-hero-title" style={{ fontWeight: 900, lineHeight: 0.95, marginBottom: 10, color: '#fff', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
              <span className="aigp-hero-line" style={{ animationDelay: '80ms', display: 'block', fontSize: 'clamp(28px, 4.2vw, 56px)' }}>AI GOVERNANCE &amp;</span>
              <span className="aigp-hero-line" style={{ animationDelay: '200ms', display: 'block', fontSize: 'clamp(28px, 4.2vw, 56px)', color: 'var(--orange)' }}>RISK SPECIALIST</span>
            </h1>

            {/* Tagline row */}
            <div className="aigp-hero-line" style={{ animationDelay: '320ms', display: 'flex', alignItems: 'center', gap: 28, marginBottom: 12, flexWrap: 'nowrap', whiteSpace: 'nowrap' }}>
              {[
                {
                  imgSrc: '/assets/Images/govern-ai-icon.png',
                  text: 'Govern AI.'
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff5500" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14a2 2 0 0 0 1.73 3h16a2 2 0 0 0 1.73-3Z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <circle cx="12" cy="17" r="1.2" fill="#ff5500" />
                    </svg>
                  ),
                  text: 'Manage Risk.'
                },
                {
                  imgSrc: '/assets/Images/build-trust-icon.png',
                  text: 'Build Trust.'
                },
              ].map(({ icon, imgSrc, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  {imgSrc
                    ? <img src={imgSrc} alt={text} style={{ width: 34, height: 34, objectFit: 'contain', flexShrink: 0 }} />
                    : icon}
                  <span style={{ fontSize: 18, fontWeight: 800, color: '#fff', letterSpacing: '-0.3px' }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="aigp-hero-line" style={{ animationDelay: '420ms', fontSize: 15, color: 'rgba(255,255,255,0.68)', lineHeight: 1.78, marginBottom: 16, maxWidth: 530 }}>
              Lead responsible AI adoption using globally recognized governance, risk and compliance frameworks.
            </p>

            {/* Divider */}
            <div className="aigp-hero-line" style={{ animationDelay: '500ms', height: 1, background: 'rgba(255,255,255,0.09)', marginBottom: 20, width: '88%' }} />

            {/* ── DESKTOP cert badges: horizontal row ── */}
            <div className="aigp-hero-line aigp-cert-badges aigp-cert-desktop" style={{ animationDelay: '560ms', display: 'flex', flexWrap: 'nowrap', gap: 20, marginBottom: 20, alignItems: 'center', whiteSpace: 'nowrap' }}>
              {[
                { imgSrc: '/assets/Images/badge-iapp-aigp.png', label: 'IAPP AIGP', sub: 'Certification' },
                { divider: true },
                { imgSrc: '/assets/Images/badge-iso-42001.png', label: 'ISO 42001', sub: 'AI Management' },
                { divider: true },
                { imgSrc: '/assets/Images/badge-nist-ai-rmf.png', label: 'NIST AI RMF', sub: 'Framework' },
                { divider: true },
                { imgSrc: '/assets/Images/badge-nist-trustworthy-ai.png', label: 'NIST Trustworthy', sub: 'AI' },
                { divider: true },
                { imgSrc: '/assets/Images/badge-ai-security-frameworks.png', label: 'AI Security', sub: 'Frameworks' },
              ].map((item, idx) => {
                if (item.divider) {
                  return <div key={`div-${idx}`} className="aigp-cert-divider" style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.18)', margin: '0 4px', flexShrink: 0 }} />;
                }
                return (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
                    <img src={item.imgSrc} alt={item.label} style={{ width: 32, height: 32, objectFit: 'contain', flexShrink: 0 }} />
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 800, color: '#fff', lineHeight: 1.2, margin: 0 }}>{item.label}</p>
                      <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', lineHeight: 1.2, margin: 0 }}>{item.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── MOBILE cert badges: 2-col — left (IAPP, AI Sec) | right (ISO, NIST RMF, NIST Trust) ── */}
            <div className="aigp-hero-line aigp-cert-badges aigp-cert-mobile" style={{ animationDelay: '560ms', display: 'none', gap: 24, marginBottom: 20, alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { imgSrc: '/assets/Images/badge-iapp-aigp.png', label: 'IAPP AIGP', sub: 'Certification' },
                  { imgSrc: '/assets/Images/badge-ai-security-frameworks.png', label: 'AI Security', sub: 'Frameworks' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <img src={item.imgSrc} alt={item.label} style={{ width: 32, height: 32, objectFit: 'contain', flexShrink: 0 }} />
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 800, color: '#fff', lineHeight: 1.2, margin: 0 }}>{item.label}</p>
                      <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', lineHeight: 1.2, margin: 0 }}>{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ width: 1, background: 'rgba(255,255,255,0.18)', alignSelf: 'stretch' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { imgSrc: '/assets/Images/badge-iso-42001.png', label: 'ISO 42001', sub: 'AI Management' },
                  { imgSrc: '/assets/Images/badge-nist-ai-rmf.png', label: 'NIST AI RMF', sub: 'Framework' },
                  { imgSrc: '/assets/Images/badge-nist-trustworthy-ai.png', label: 'NIST Trustworthy', sub: 'AI' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <img src={item.imgSrc} alt={item.label} style={{ width: 32, height: 32, objectFit: 'contain', flexShrink: 0 }} />
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 800, color: '#fff', lineHeight: 1.2, margin: 0 }}>{item.label}</p>
                      <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', lineHeight: 1.2, margin: 0 }}>{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── DESKTOP CTA: button + stats in one row ── */}
            <div className="aigp-hero-line aigp-cta-row aigp-cta-desktop" style={{ animationDelay: '640ms', display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'nowrap' }}>
              <a href="#register" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: 'linear-gradient(135deg, #ff6600 0%, #ff4500 100%)',
                color: '#fff', fontWeight: 800, fontSize: 14, padding: '14px 24px',
                borderRadius: 6, textDecoration: 'none', letterSpacing: '0.5px',
                textTransform: 'uppercase', flexShrink: 0, whiteSpace: 'nowrap',
                border: '1.5px solid transparent',
                boxShadow: '0 4px 12px rgba(255,102,0,0.25)',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,102,0,0.12)';
                e.currentTarget.style.border = '1.5px solid rgba(255,102,0,0.75)';
                e.currentTarget.style.backdropFilter = 'blur(12px)';
                e.currentTarget.style.WebkitBackdropFilter = 'blur(12px)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,102,0,0.28), inset 0 0 24px rgba(255,102,0,0.06)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #ff6600 0%, #ff4500 100%)';
                e.currentTarget.style.border = '1.5px solid transparent';
                e.currentTarget.style.backdropFilter = 'none';
                e.currentTarget.style.WebkitBackdropFilter = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(255,102,0,0.25)';
                e.currentTarget.style.color = '#fff';
              }}
              >
                REGISTER INTEREST <ArrowRight size={16} />
              </a>
              <div className="aigp-cta-divider" style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.22)', flexShrink: 0 }} />
              {[
                {
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff5500" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
                  top: '40 Hours', bot: 'Expert Training'
                },
                { divider: true },
                {
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff5500" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M17 21v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2" /><circle cx="9.5" cy="7" r="3.5" /><path d="M23 21v-2a3 3 0 0 0-3-3M19 3.5a3.5 3.5 0 0 1 0 7" /></svg>,
                  top: 'Instructor Led', bot: 'Live & Online'
                },
                { divider: true },
                {
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff5500" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
                  top: 'Global', bot: 'Recognition'
                },
              ].map((item, idx) => {
                if (item.divider) return <div key={`d-${idx}`} className="aigp-cta-divider" style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.22)', flexShrink: 0 }} />;
                return (
                  <div key={item.top} style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
                    {item.icon}
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 800, color: '#fff', lineHeight: 1.2, margin: 0, whiteSpace: 'nowrap' }}>{item.top}</p>
                      <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', lineHeight: 1.2, margin: 0, whiteSpace: 'nowrap' }}>{item.bot}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── MOBILE CTA: button on top, stats (Instructor Led | Global | 40 Hours) below ── */}
            <div className="aigp-hero-line aigp-cta-row aigp-cta-mobile" style={{ animationDelay: '640ms', display: 'none', flexDirection: 'column', gap: 16 }}>
              <div>
                <a href="#register" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: 'linear-gradient(135deg, #ff6600 0%, #ff4500 100%)',
                  color: '#fff', fontWeight: 800, fontSize: 14, padding: '14px 24px',
                  borderRadius: 6, textDecoration: 'none', letterSpacing: '0.5px',
                  textTransform: 'uppercase', whiteSpace: 'nowrap',
                  border: '1.5px solid transparent',
                  boxShadow: '0 4px 12px rgba(255,102,0,0.25)',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,102,0,0.12)';
                  e.currentTarget.style.border = '1.5px solid rgba(255,102,0,0.75)';
                  e.currentTarget.style.backdropFilter = 'blur(12px)';
                  e.currentTarget.style.WebkitBackdropFilter = 'blur(12px)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,102,0,0.28), inset 0 0 24px rgba(255,102,0,0.06)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #ff6600 0%, #ff4500 100%)';
                  e.currentTarget.style.border = '1.5px solid transparent';
                  e.currentTarget.style.backdropFilter = 'none';
                  e.currentTarget.style.WebkitBackdropFilter = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(255,102,0,0.25)';
                  e.currentTarget.style.color = '#fff';
                }}
                >
                  REGISTER INTEREST <ArrowRight size={16} />
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'nowrap' }}>
                {[
                  {
                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff5500" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M17 21v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2" /><circle cx="9.5" cy="7" r="3.5" /><path d="M23 21v-2a3 3 0 0 0-3-3M19 3.5a3.5 3.5 0 0 1 0 7" /></svg>,
                    top: 'Instructor Led', bot: 'Live & Online'
                  },
                  { divider: true },
                  {
                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff5500" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
                    top: 'Global', bot: 'Recognition'
                  },
                  { divider: true },
                  {
                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff5500" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
                    top: '40 Hours', bot: 'Expert Training'
                  },
                ].map((item, idx) => {
                  if (item.divider) return <div key={`dm-${idx}`} style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.22)', flexShrink: 0 }} />;
                  return (
                    <div key={item.top} style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                      {item.icon}
                      <div>
                        <p style={{ fontSize: 12, fontWeight: 800, color: '#fff', lineHeight: 1.2, margin: 0, whiteSpace: 'nowrap' }}>{item.top}</p>
                        <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)', lineHeight: 1.2, margin: 0, whiteSpace: 'nowrap' }}>{item.bot}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Background Image Container */}
        <div className="aigp-hero-bg-container">
          <img
            src="/assets/Images/aigp-hero.png"
            alt="AI Governance & Risk Specialist Background"
            className="aigp-hero-bg-img"
          />
          <div className="aigp-hero-bg-overlay" />
        </div>
      </section>

      {/* ── AI GOVERNANCE PROBLEM SECTION ── */}
      <section className="aigp-section-gov" style={{ background: '#07090f', padding: '72px 0 0', borderTop: '2px solid rgba(255,102,0,0.3)' }}>
        <div className="aigp-inner-pad" style={{ maxWidth: 1500, margin: '0 auto', padding: '0 40px' }}>

          {/* Top divider label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22, justifyContent: 'center' }}>
            <div style={{ height: 1, background: 'rgba(255,255,255,0.15)', width: 140 }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.45)', letterSpacing: '2.5px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
              AI IS MOVING FASTER THAN GOVERNANCE
            </span>
            <div style={{ height: 1, background: 'rgba(255,255,255,0.15)', width: 140 }} />
          </div>

          {/* Heading */}
          <div ref={govHeadingRef} style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={{
              fontSize: 'clamp(28px, 3.4vw, 46px)', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', lineHeight: 1.15, marginBottom: 4, letterSpacing: '-0.5px',
              opacity: govHeadingVisible ? 1 : 0, transform: govHeadingVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.6s ease 0ms, transform 0.6s ease 0ms',
            }}>
              EVERY ORGANIZATION IS ADOPTING AI.
            </div>
            <div style={{
              fontSize: 'clamp(28px, 3.4vw, 46px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.15, letterSpacing: '-0.5px',
              opacity: govHeadingVisible ? 1 : 0, transform: govHeadingVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.6s ease 140ms, transform 0.6s ease 140ms',
            }}>
              <span style={{ color: '#ff6600' }}>FEW KNOW HOW TO GOVERN IT.</span>
            </div>
          </div>

          {/* 6 Individual Cards */}
          <div className="aigp-grid-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 8 }}>
            {[
              {
                color: '#ff5500',
                title: 'AI RISK',
                desc: 'Identify, assess and manage AI risks across the lifecycle.',
                imgSrc: '/assets/Images/ai-risk-icon.png',
              },
              {
                color: '#00d2ff',
                title: 'AI GOVERNANCE',
                desc: 'Establish policies, standards and accountability.',
                imgSrc: '/assets/Images/ai-governance-icon.png',
              },
              {
                color: '#8855ff',
                title: 'AI SECURITY',
                desc: 'Protect models, data and systems from emerging threats.',
                imgSrc: '/assets/Images/aigp-ai-security-icon.png',
              },
              {
                color: '#00c853',
                title: 'COMPLIANCE',
                desc: 'Align with global laws, standards and industry regulations.',
                imgSrc: '/assets/Images/compliance-icon.png',
              },
              {
                color: '#ffaa00',
                title: 'RESPONSIBLE AI',
                desc: 'Build fair, transparent and trustworthy AI systems.',
                imgSrc: '/assets/Images/responsible-ai-icon.png',
              },
              {
                color: '#2299ff',
                title: 'GLOBAL REGULATIONS',
                desc: 'Stay ahead of evolving AI policies and regulatory changes.',
                imgSrc: '/assets/Images/global-regulations-icon.png',
              },
            ].map((card) => (
              <div
                key={card.title}
                onMouseEnter={() => setHoveredGovCard(card.title)}
                onMouseLeave={() => setHoveredGovCard(null)}
                style={{
                  position: 'relative', overflow: 'hidden',
                  background: hoveredGovCard === card.title ? `${card.color}0d` : '#0d0f16',
                  border: hoveredGovCard === card.title ? `1.2px solid ${card.color}` : `1.2px solid ${card.color}35`,
                  borderRadius: 10, padding: '24px 16px 20px',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                  transform: hoveredGovCard === card.title ? 'translateY(-6px) scale(1.02)' : 'translateY(0) scale(1)',
                  boxShadow: hoveredGovCard === card.title ? `0 16px 40px ${card.color}28` : `inset 0 0 10px ${card.color}05`,
                  transition: 'all 0.26s cubic-bezier(0.22, 1, 0.36, 1)', cursor: 'default',
                }}
              >
                {hoveredGovCard === card.title && (
                  <div style={{ position: 'absolute', left: 0, right: 0, height: 2, background: `linear-gradient(to right, transparent, ${card.color}, transparent)`, top: '-2px', zIndex: 3, animation: 'aigpScanLine 1.1s ease forwards' }} />
                )}
                <div style={{ marginBottom: 18, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: 84, paddingTop: 4 }}>
                  <img src={card.imgSrc} alt={card.title} style={{ width: 84, height: 84, objectFit: 'contain', flexShrink: 0 }} />
                </div>
                <p style={{ fontSize: 13, fontWeight: 900, color: '#fff', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: 10, marginTop: 0 }}>{card.title}</p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="aigp-prob-bar-outer" style={{ marginTop: 24, padding: '0 40px' }}>
          <div className="aigp-inner-pad" style={{ maxWidth: 1500, margin: '0 auto' }}>
            <div className="aigp-prob-bar" style={{ 
              display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', minHeight: 76,
              background: '#0a0c11', border: '1px solid rgba(255,102,0,0.25)', borderRadius: 10, overflow: 'hidden'
            }}>

              {/* Left — Unlike Traditional (orange tint bg) */}
              <div className="aigp-prob-bar-left" style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '14px 32px',
                borderRight: '1px solid rgba(255,102,0,0.2)',
                background: 'rgba(255,80,0,0.08)',
              }}>
              <svg width="48" height="48" viewBox="0 0 34 34" fill="none">
                <circle cx="9" cy="14" r="3.5" stroke="#ff6600" strokeWidth="1.6" fill="rgba(255,102,0,0.1)" />
                <path d="M3 26c0-3 2-5 6-5" stroke="#ff6600" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="25" cy="14" r="3.5" stroke="#ff6600" strokeWidth="1.6" fill="rgba(255,102,0,0.1)" />
                <path d="M31 26c0-3-2-5-6-5" stroke="#ff6600" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="17" cy="11" r="4.5" stroke="#ff6600" strokeWidth="1.8" fill="rgba(255,102,0,0.2)" />
                <path d="M9 25c0-4 3.5-7 8-7s8 3 8 7" stroke="#ff6600" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <div>
                <p style={{ fontSize: 14, fontWeight: 900, color: '#ff6600', letterSpacing: '1px', textTransform: 'uppercase', lineHeight: 1.4, margin: 0 }}>UNLIKE TRADITIONAL</p>
                <p style={{ fontSize: 14, fontWeight: 900, color: '#ff6600', letterSpacing: '1px', textTransform: 'uppercase', lineHeight: 1.4, margin: 0 }}>GOVERNANCE PROGRAMS</p>
              </div>
            </div>

            {/* Center */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '14px 32px', borderRight: '1px solid rgba(255,255,255,0.07)' }}>
              <p style={{ fontSize: 16, fontWeight: 900, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.4px', lineHeight: 1.4, margin: 0 }}>
                LEARN AI GOVERNANCE THROUGH
              </p>
              <p style={{ fontSize: 16, fontWeight: 900, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.4px', lineHeight: 1.4, margin: 0 }}>
                REAL BUSINESS SCENARIOS
              </p>
            </div>

            {/* Right */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, padding: '14px 32px' }}>
              {[
                { label: 'Real Policies', imgSrc: '/assets/Images/real-policies-icon.png' },
                { label: 'Real Risks', icon: (
                  <svg width="28" height="28" viewBox="0 0 20 20" fill="none">
                    <path d="M10 3L17 15H3L10 3Z" stroke="#ff6600" strokeWidth="1.5" strokeLinejoin="round" />
                    <line x1="10" y1="7" x2="10" y2="11" stroke="#ff6600" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="10" cy="13.2" r="0.8" fill="#ff6600" />
                  </svg>
                )},
                { label: 'Real Decisions', imgSrc: '/assets/Images/real-decisions-icon.png' },
              ].map(({ label, icon, imgSrc }, i) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  {i > 0 && <div className="aigp-prob-item-div" style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.1)', margin: '0 12px' }} />}
                  {imgSrc
                    ? <img src={imgSrc} alt={label} style={{ width: 28, height: 28, objectFit: 'contain', flexShrink: 0 }} />
                    : icon}
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', whiteSpace: 'nowrap' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* ── FRAMEWORKS SECTION ── */}
      <section className="aigp-section-fw" style={{ background: '#07090f', padding: '72px 0 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="aigp-inner-pad" style={{ maxWidth: 1500, margin: '0 auto', padding: '0 40px' }}>

          {/* Heading */}
          <div ref={frameworkRef} style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={{
              fontSize: 'clamp(28px, 3.4vw, 46px)', fontWeight: 900, color: '#fff', textTransform: 'uppercase', lineHeight: 1.15, letterSpacing: '-0.5px', marginBottom: 10,
              opacity: frameworkVisible ? 1 : 0, transform: frameworkVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.6s ease 0ms, transform 0.6s ease 0ms',
            }}>
              THE <span style={{ color: '#ff6600' }}>FRAMEWORKS</span> THAT SHAPE AI
            </div>
            <p style={{
              fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6,
              opacity: frameworkVisible ? 1 : 0, transform: frameworkVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.6s ease 140ms, transform 0.6s ease 140ms',
            }}>
              Learn directly from the world's leading AI governance and risk frameworks.
            </p>
          </div>

          {/* 6 Framework Cards */}
          <div className="aigp-grid-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12 }}>
            {[
              {
                logoPath: '/assets/Images/iapp-logo.png',
                title: 'IAPP AIGP',
                titleColor: '#fff',
                desc: 'The global standard for AI governance professionals.',
                borderColor: 'rgba(76,175,80,0.2)',
                highlightColor: '#4caf50',
                logoHeight: '88px',
              },
              {
                logoPath: '/assets/Images/iso-logo.png',
                title: 'ISO 42001',
                titleColor: '#fff',
                desc: 'AI Management System for responsible AI.',
                borderColor: 'rgba(33,150,243,0.2)',
                highlightColor: '#2196f3',
                logoHeight: '76px',
              },
              {
                logoPath: '/assets/Images/nist-ai-rmf-logo.png',
                title: 'AI RMF',
                titleColor: '#fff',
                desc: 'NIST AI Risk Management Framework.',
                borderColor: 'rgba(156,39,176,0.2)',
                highlightColor: '#9c27b0',
                logoHeight: '92px',
              },
              {
                logoSvg: (
                  <svg width="64" height="64" viewBox="0 0 44 44" fill="none">
                    <path 
                      d="M22 4L6 11v12c0 9 7 17 16 19 9-2 16-10 16-19V11L22 4Z" 
                      fill="rgba(0,188,212,0.06)" 
                      stroke="#00bcd4" 
                      strokeWidth="1.8" 
                      strokeLinejoin="round"
                    />
                    <path 
                      d="M15 22l5 5 9-9" 
                      stroke="#00bcd4" 
                      strokeWidth="2.8" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                title: 'NIST TRUSTWORTHY AI',
                titleColor: '#fff',
                desc: 'Principles for building trustworthy and reliable AI.',
                borderColor: 'rgba(0,188,212,0.2)',
                highlightColor: '#00bcd4',
              },
              {
                logoPath: '/assets/Images/nist-ai-100-logo.png',
                title: 'AI 100-2e2025',
                titleColor: '#ff6600',
                desc: 'Adversarial Machine Learning: Taxonomy and Mitigations.',
                borderColor: 'rgba(255,102,0,0.2)',
                highlightColor: '#ff6600',
                logoHeight: '92px',
              },
              {
                logoSvg: (
                  <svg width="64" height="64" viewBox="0 0 44 44" fill="none">
                    <path 
                      d="M22 4L6 11v12c0 9 7 17 16 19 9-2 16-10 16-19V11L22 4Z" 
                      fill="rgba(66,133,244,0.06)" 
                      stroke="#4285f4" 
                      strokeWidth="1.8" 
                      strokeLinejoin="round"
                    />
                    <rect x="16" y="18" width="12" height="10" rx="2" stroke="#4285f4" strokeWidth="1.8" fill="none"/>
                    <path d="M18 18v-3a4 4 0 018 0v3" stroke="#4285f4" strokeWidth="1.8" strokeLinecap="round"/>
                    <circle cx="22" cy="23" r="1.5" fill="#4285f4"/>
                  </svg>
                ),
                title: 'NIST IR 8596 CYBER AI PROFILE',
                titleColor: '#fff',
                desc: 'Applying cybersecurity best practices to AI systems.',
                borderColor: 'rgba(33,150,243,0.2)',
                highlightColor: '#2196f3',
              },
            ].map((card) => (
              <div
                key={card.title}
                onMouseEnter={() => setHoveredFramework(card.title)}
                onMouseLeave={() => setHoveredFramework(null)}
                style={{
                  position: 'relative', overflow: 'hidden',
                  background: '#0d0f16',
                  border: `1px solid ${hoveredFramework === card.title ? 'rgba(255,255,255,0.35)' : card.borderColor}`,
                  borderRadius: 10, padding: '22px 16px 28px',
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  transform: hoveredFramework === card.title ? 'translateY(-6px) scale(1.02)' : 'translateY(0) scale(1)',
                  boxShadow: hoveredFramework === card.title ? '0 16px 40px rgba(255,255,255,0.06)' : 'none',
                  transition: 'all 0.26s cubic-bezier(0.22, 1, 0.36, 1)', cursor: 'default',
                }}
              >
                {hoveredFramework === card.title && (
                  <div style={{ position: 'absolute', left: 0, right: 0, height: 2, background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent)', top: '-2px', zIndex: 3, animation: 'aigpScanLine 1.1s ease forwards' }} />
                )}
                <div style={{ marginBottom: 14, minHeight: 104, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                  {card.logoSvg ? (
                    card.logoSvg
                  ) : (
                    <img
                      src={card.logoPath}
                      alt={card.title}
                      style={{
                        maxHeight: card.logoHeight || '48px',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        display: 'block'
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  )}
                </div>
                <p style={{ fontSize: 13, fontWeight: 900, color: card.titleColor, letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: 10, lineHeight: 1.3, textAlign: 'center', width: '100%' }}>{card.title}</p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, textAlign: 'center', width: '100%' }}>{card.desc}</p>

                {/* Bottom highlight line */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 24,
                  height: 3,
                  background: card.highlightColor,
                  borderRadius: '3px 3px 0 0',
                }} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ background: '#07090f', borderTop: '1px solid rgba(255,102,0,0.25)' }}>
          <div className="aigp-fw-bottom-bar" style={{ maxWidth: 1500, margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', minHeight: 72 }}>

            {/* Left — shield + text */}
            <div className="aigp-fw-bottom-left" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <svg width="38" height="44" viewBox="0 0 28 32" fill="none" overflow="visible" style={{ flexShrink: 0 }}>
                <path d="M14 2L3 7v8c0 6.5 4.8 12.5 11 14.5 6.2-2 11-8 11-14.5V7L14 2Z" fill="rgba(255,102,0,0.15)" stroke="#ff6600" strokeWidth="1.6" strokeLinejoin="round"/>
                <path d="M9 14l3.5 3.5 6.5-6.5" stroke="#ff6600" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="aigp-fw-bottom-text" style={{ fontSize: 16, fontWeight: 800, color: '#fff', letterSpacing: '1.5px', textTransform: 'uppercase', margin: 0, whiteSpace: 'nowrap' }}>
                STANDARDS-BASED.&nbsp;&nbsp;PRACTICAL.&nbsp;&nbsp;GLOBALLY RECOGNIZED.
              </p>
            </div>

            {/* Divider */}
            <div className="aigp-fw-bottom-divider" style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.12)', flexShrink: 0, margin: '0 24px' }} />

            {/* Right */}
            <p className="aigp-fw-bottom-sub" style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', margin: 0 }}>
              Build expertise that organizations trust.
            </p>
          </div>
        </div>
      </section>

      {/* ── PART 1: 6 MODULES PROGRESSIVE MASTERY ── */}
      <section className="aigp-section-pad aigp-section-modules" style={{ background: '#060810', padding: '52px 0 48px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="aigp-modules-inner aigp-inner-pad" style={{ maxWidth: 1500, margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', gap: 52 }}>

          {/* Left heading */}
          <div ref={moduleRef} className="aigp-modules-heading" style={{ flexShrink: 0, minWidth: 185 }}>
            <div style={{
              fontSize: 'clamp(28px, 3.4vw, 46px)', fontWeight: 900, color: '#fff', textTransform: 'uppercase', lineHeight: 1.0,
              opacity: moduleVisible ? 1 : 0, transform: moduleVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.6s ease 0ms, transform 0.6s ease 0ms',
            }}>6 MODULES.</div>
            <div style={{
              fontSize: 'clamp(28px, 3.4vw, 46px)', fontWeight: 900, color: '#ff6600', textTransform: 'uppercase', lineHeight: 1.0,
              opacity: moduleVisible ? 1 : 0, transform: moduleVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.6s ease 120ms, transform 0.6s ease 120ms',
            }}>PROGRESSIVE</div>
            <div style={{
              fontSize: 'clamp(28px, 3.4vw, 46px)', fontWeight: 900, color: '#ff6600', textTransform: 'uppercase', lineHeight: 1.0, marginBottom: 14,
              opacity: moduleVisible ? 1 : 0, transform: moduleVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.6s ease 240ms, transform 0.6s ease 240ms',
            }}>MASTERY.</div>
            <div style={{ width: 54, height: 3, background: '#ff6600', borderRadius: 2 }} />
          </div>

          {/* Right: Timeline */}
          <div style={{ flex: 1, position: 'relative' }}>
            <div className="aigp-modules-connector" style={{ position: 'absolute', top: 52, left: '8%', right: '8%', borderTop: '1.5px dashed rgba(255,255,255,0.15)', zIndex: 0 }} />
            <div className="aigp-modules-steps aigp-grid-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12 }}>
              {[
                { num: '01', c: '#2196f3', lines: ['Foundational', 'Concepts of AI'],                    iconPath: '/assets/Images/aigp-module-01-icon.png' },
                { num: '02', c: '#00bcd4', lines: ['AI Risks, Harms &', 'Ethical Considerations'],       iconPath: '/assets/Images/aigp-module-02-icon.png' },
                { num: '03', c: '#9c27b0', lines: ['AI Risk Management', 'Frameworks'],                  iconPath: '/assets/Images/aigp-module-03-icon.png' },
                { num: '04', c: '#ff6600', lines: ['AI Governance,', 'Policy & Regulatory', 'Landscape'],iconPath: '/assets/Images/aigp-module-04-icon.png' },
                { num: '05', c: '#4caf50', lines: ['AI Security &', 'Cyber AI Profile'],                 iconPath: '/assets/Images/aigp-module-05-icon.png' },
                { num: '06', c: '#ffb300', lines: ['Exam Preparation &', 'Practical Application'],       iconPath: '/assets/Images/aigp-module-06-icon.png' },
              ].map((step, index) => (
                <div
                  key={step.num}
                  onMouseEnter={() => setHoveredModule(step.num)}
                  onMouseLeave={() => setHoveredModule(null)}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                    position: 'relative', zIndex: 1, cursor: 'default',
                    opacity: moduleVisible ? 1 : 0,
                    transform: moduleVisible ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.85)',
                    transition: `opacity 0.55s cubic-bezier(0.22,1,0.36,1) ${300 + index * 120}ms, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${300 + index * 120}ms`,
                  }}
                >
                  <div style={{ position: 'relative', marginBottom: 16 }}>
                    <div style={{
                      width: 104, height: 104, borderRadius: '50%',
                      background: hoveredModule === step.num ? '#0e111a' : '#060810',
                      border: `1.5px solid ${step.c}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      overflow: 'hidden',
                      transform: hoveredModule === step.num ? 'scale(1.08)' : 'scale(1)',
                      boxShadow: hoveredModule === step.num ? `0 0 20px ${step.c}44` : 'none',
                      transition: 'all 0.26s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}>
                      <img src={step.iconPath} alt={step.lines[0]} style={{ width: 82, height: 82, objectFit: 'contain' }} />
                    </div>
                    {/* Boundary connection dots */}
                    {index > 0 && (
                      <div style={{
                        position: 'absolute',
                        left: -3,
                        top: 52,
                        transform: 'translateY(-50%)',
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        background: step.c,
                        boxShadow: `0 0 6px ${step.c}`,
                        zIndex: 2,
                        pointerEvents: 'none'
                      }} />
                    )}
                    {index < 5 && (
                      <div style={{
                        position: 'absolute',
                        right: -3,
                        top: 52,
                        transform: 'translateY(-50%)',
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        background: step.c,
                        boxShadow: `0 0 6px ${step.c}`,
                        zIndex: 2,
                        pointerEvents: 'none'
                      }} />
                    )}
                    {/* Centered circular badge for step number */}
                    <div style={{ 
                      position: 'absolute', 
                      top: -12, 
                      left: '50%', 
                      transform: 'translateX(-50%)', 
                      background: step.c, 
                      borderRadius: '50%', 
                      width: 24, 
                      height: 24, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: 11, 
                      fontWeight: 900, 
                      color: '#fff', 
                      letterSpacing: '-0.2px', 
                      whiteSpace: 'nowrap' 
                    }}>{step.num}</div>
                  </div>
                  {/* Label with forced multi-line breaks */}
                  <p style={{ 
                    fontSize: 13, 
                    fontWeight: 700, 
                    color: hoveredModule === step.num ? '#fff' : 'rgba(255,255,255,0.65)', 
                    lineHeight: 1.45, 
                    transition: 'color 0.26s ease' 
                  }}>
                    {step.lines.map((line) => (
                      <span key={line} style={{ display: 'block' }}>{line}</span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PART 2: LEARN THROUGH REAL-WORLD SCENARIOS ── */}
      <section className="aigp-section-scenarios" style={{ background: '#07090f', padding: '40px 0 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="aigp-inner-pad" style={{ maxWidth: 1500, margin: '0 auto', padding: '0 40px' }}>

          {/* Heading with orange rules and dots */}
          <div ref={scenarioRef} className="aigp-scenario-heading" style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28, justifyContent: 'center',
            opacity: scenarioVisible ? 1 : 0, transform: scenarioVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease 0ms, transform 0.6s ease 0ms',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', flex: 1, gap: 8 }}>
              <div style={{ height: 1.5, background: 'linear-gradient(90deg, transparent, #ff6600)', flex: 1 }} />
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#ff6600' }} />
            </div>
            <span className="aigp-scenario-title" style={{ fontSize: 'clamp(14px, 1.8vw, 22px)', fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center', whiteSpace: 'nowrap' }}>
              LEARN THROUGH <span style={{ color: '#ff6600' }}>REAL-WORLD AI GOVERNANCE SCENARIOS</span>
            </span>
            <div style={{ display: 'flex', alignItems: 'center', flex: 1, gap: 8 }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#ff6600' }} />
              <div style={{ height: 1.5, background: 'linear-gradient(90deg, #ff6600, transparent)', flex: 1 }} />
            </div>
          </div>

          {/* 6 Scenario Cards */}
          <div className="aigp-grid-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12, marginBottom: 2 }}>
            {[
              { 
                c: '#3b82f6', 
                title: ['EU AI ACT', 'COMPLIANCE'],
                icon: (
                  <svg width="64" height="64" viewBox="0 0 48 48" fill="none">
                    {/* Document */}
                    <path 
                      d="M16 10 H28 L34 16 V38 C34 39.5, 32.5 41, 31 41 H16 C14.5 41, 13 39.5, 13 38 V13 C13 11.5, 14.5 10, 16 10 Z" 
                      stroke="#3b82f6" 
                      strokeWidth="1.6" 
                      fill="none" 
                    />
                    <path d="M28 10 V16 H34" stroke="#3b82f6" strokeWidth="1.6" fill="none" />
                    {/* Document text lines */}
                    <line x1="18" y1="21" x2="26" y2="21" stroke="#3b82f6" strokeWidth="1.6" strokeLinecap="round" />
                    <line x1="18" y1="26" x2="29" y2="26" stroke="#3b82f6" strokeWidth="1.6" strokeLinecap="round" />
                    <line x1="18" y1="31" x2="24" y2="31" stroke="#3b82f6" strokeWidth="1.6" strokeLinecap="round" />
                    {/* Checkmark circle at bottom-right */}
                    <circle cx="30" cy="35" r="4.5" stroke="#3b82f6" strokeWidth="1.6" fill="#0d0f16" />
                    <path d="M28 35 L29.5 36.5 L32 33.5" stroke="#3b82f6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Circular ring of stars */}
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => {
                      const angle = (i * 30 - 90) * Math.PI / 180;
                      const cx = 23.5 + 16 * Math.cos(angle);
                      const cy = 25.5 + 16 * Math.sin(angle);
                      const isLeft = i >= 3 && i <= 9; // Left-half are yellow/orange, right-half are blue
                      const color = isLeft ? '#ffb300' : '#3b82f6';
                      return (
                        <polygon 
                          key={i} 
                          points={`${cx},${cy-2.5} ${cx+0.8},${cy-0.8} ${cx+2.5},${cy-0.8} ${cx+1.1},${cy+0.3} ${cx+1.6},${cy+2} ${cx},${cy+1} ${cx-1.6},${cy+2} ${cx-1.1},${cy+0.3} ${cx-2.5},${cy-0.8} ${cx-0.8},${cy-0.8}`} 
                          fill={color} 
                        />
                      );
                    })}
                  </svg>
                )
              },
              { 
                c: '#00bcd4', // Teal/Cyan matching image
                title: ['AI RISK', 'ASSESSMENT'],
                icon: (
                  <svg width="64" height="64" viewBox="0 0 48 48" fill="none">
                    <circle cx="21" cy="21" r="10" stroke="#00bcd4" strokeWidth="1.6" fill="none" />
                    <line x1="28" y1="28" x2="37" y2="37" stroke="#00bcd4" strokeWidth="2.2" strokeLinecap="round" />
                    <polygon points="21,14.5 16.5,23.5 25.5,23.5" stroke="#00bcd4" strokeWidth="1.3" fill="none" strokeLinejoin="round" />
                    <line x1="21" y1="17.5" x2="21" y2="20" stroke="#00bcd4" strokeWidth="1.4" strokeLinecap="round" />
                    <circle cx="21" cy="22" r="0.7" fill="#00bcd4" />
                  </svg>
                )
              },
              { 
                c: '#9c27b0', // Purple matching image
                title: ['AI POLICY', 'CREATION'],
                icon: (
                  <svg width="64" height="64" viewBox="0 0 48 48" fill="none">
                    <path 
                      d="M16 10 H28 L34 16 V38 C34 39.5, 32.5 41, 31 41 H16 C14.5 41, 13 39.5, 13 38 V13 C13 11.5, 14.5 10, 16 10 Z" 
                      stroke="#9c27b0" 
                      strokeWidth="1.6" 
                      fill="none" 
                    />
                    <path d="M28 10 V16 H34" stroke="#9c27b0" strokeWidth="1.6" fill="none" />
                    <line x1="18" y1="21" x2="26" y2="21" stroke="#9c27b0" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="18" y1="26" x2="29" y2="26" stroke="#9c27b0" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="18" y1="31" x2="23" y2="31" stroke="#9c27b0" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Pencil */}
                    <path d="M26 36.5 L35.5 27 L37 28.5 L27.5 38 Z" stroke="#9c27b0" strokeWidth="1.4" fill="#0d0f16" />
                    <path d="M26 36.5 L25 39 L27.5 38 Z" stroke="#9c27b0" strokeWidth="1.4" fill="#9c27b0" />
                  </svg>
                )
              },
              { 
                c: '#ff6600', // Orange matching image
                title: ['AI INCIDENT', 'RESPONSE'],
                icon: (
                  <svg width="64" height="64" viewBox="0 0 48 48" fill="none">
                    <path 
                      d="M24 6 L8 13 V25 C8 34, 15.5 40.5 24 42 C32.5 40.5 40 34 40 25 V13 Z" 
                      stroke="#ff6600" 
                      strokeWidth="1.8" 
                      fill="rgba(255,102,0,0.06)" 
                      strokeLinejoin="round" 
                    />
                    <line x1="24" y1="16" x2="24" y2="27" stroke="#ff6600" strokeWidth="2.8" strokeLinecap="round" />
                    <circle cx="24" cy="32.5" r="1.8" fill="#ff6600" />
                  </svg>
                )
              },
              { 
                c: '#4caf50', // Green matching image
                title: ['AI SECURITY', 'GOVERNANCE'],
                icon: (
                  <svg width="64" height="64" viewBox="0 0 48 48" fill="none">
                    <path 
                      d="M24 6 L8 13 V25 C8 34, 15.5 40.5 24 42 C32.5 40.5 40 34 40 25 V13 Z" 
                      stroke="#4caf50" 
                      strokeWidth="1.8" 
                      fill="rgba(76,175,80,0.06)" 
                      strokeLinejoin="round" 
                    />
                    {/* Circuit Brain inside shield */}
                    <line x1="24" y1="14" x2="24" y2="34" stroke="#4caf50" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M24 16.5 C20 16.5, 17 18, 17 21 C17 22.5, 18 23.5, 18.5 24 C17 25, 16.5 26.5, 17.5 28.5 C18.5 30.5, 21.5 30.5, 24 30.5" stroke="#4caf50" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M24 20 C21.5 20, 20 21, 20 22.2" stroke="#4caf50" strokeWidth="1.4" strokeLinecap="round" />
                    <path d="M24 27.5 C21.5 27.5, 20 26.5, 20 25.3" stroke="#4caf50" strokeWidth="1.4" strokeLinecap="round" />
                    
                    <path d="M24 19 H28.5 L31 16.5" stroke="#4caf50" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="32" cy="15.5" r="1.1" fill="#4caf50" />
                    <path d="M24 24 H32" stroke="#4caf50" strokeWidth="1.6" strokeLinecap="round" />
                    <circle cx="33.5" cy="24" r="1.1" fill="#4caf50" />
                    <path d="M24 29 H28.5 L31 31.5" stroke="#4caf50" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="32" cy="32.5" r="1.1" fill="#4caf50" />
                  </svg>
                )
              },
              { 
                c: '#ffb300', // Gold/Yellow matching image
                title: ['BOARD LEVEL', 'AI STRATEGY'],
                icon: (
                  <svg width="64" height="64" viewBox="0 0 48 48" fill="none">
                    {/* Center Person */}
                    <circle cx="24" cy="17" r="4.5" stroke="#ffb300" strokeWidth="1.8" fill="none" />
                    <path d="M15 32 C15 27.5, 19 24.5, 24 24.5 S33 27.5, 33 32" stroke="#ffb300" strokeWidth="1.8" strokeLinecap="round" />
                    {/* Left Person */}
                    <circle cx="15" cy="22" r="3.2" stroke="#ffb300" strokeWidth="1.6" fill="none" />
                    <path d="M9.5 32.5 C9.5 29.5, 12 27.5, 15 27.5 C16 27.5, 17 27.8, 17.7 28.3" stroke="#ffb300" strokeWidth="1.6" strokeLinecap="round" />
                    {/* Right Person */}
                    <circle cx="33" cy="22" r="3.2" stroke="#ffb300" strokeWidth="1.6" fill="none" />
                    <path d="M30.3 28.3 C31 27.8, 32 27.5, 33 27.5 C36 27.5, 38.5 29.5, 38.5 32.5" stroke="#ffb300" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                )
              },
            ].map((card) => (
              <div
                key={card.title.join(' ')}
                onMouseEnter={() => setHoveredScenario(card.title.join(' '))}
                onMouseLeave={() => setHoveredScenario(null)}
                style={{
                  position: 'relative', overflow: 'hidden',
                  background: hoveredScenario === card.title.join(' ') ? `${card.c}0f` : '#080a0f',
                  border: `1.5px solid ${hoveredScenario === card.title.join(' ') ? card.c : 'rgba(255,255,255,0.06)'}`,
                  borderRadius: 10, padding: '24px 16px 20px',
                  minHeight: 140,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
                  transform: hoveredScenario === card.title.join(' ') ? 'translateY(-6px) scale(1.03)' : 'translateY(0) scale(1)',
                  boxShadow: hoveredScenario === card.title.join(' ') ? `0 12px 30px ${card.c}22` : 'none',
                  transition: 'all 0.26s cubic-bezier(0.22, 1, 0.36, 1)', cursor: 'default',
                }}
              >
                {hoveredScenario === card.title.join(' ') && (
                  <div style={{ position: 'absolute', left: 0, right: 0, height: 2, background: `linear-gradient(to right, transparent, ${card.c}, transparent)`, top: '-2px', zIndex: 3, animation: 'aigpScanLine 1.1s ease forwards' }} />
                )}
                <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{card.icon}</div>
                <p style={{ fontSize: 13, fontWeight: 800, color: '#fff', letterSpacing: '0.5px', textTransform: 'uppercase', lineHeight: 1.45 }}>
                  {card.title.map((line) => (
                    <span key={line} style={{ display: 'block' }}>{line}</span>
                  ))}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom: Real Case Studies row */}
          <div className="aigp-grid-4 aigp-case-bar" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', background: '#0a0c11', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 2 }}>
            {[
              { 
                label: 'REAL CASE STUDIES', 
                icon: (
                  <svg width="28" height="28" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" stroke="#ff6600" strokeWidth="1.5" />
                    <circle cx="10" cy="10" r="5" stroke="#ff6600" strokeWidth="1.5" />
                    <circle cx="10" cy="10" r="2" fill="#ff6600" />
                    <path d="M17 3 L13.5 6.5" stroke="#ff6600" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )
              },
              { 
                label: 'REAL POLICIES', 
                icon: (
                  <svg width="28" height="28" viewBox="0 0 20 20" fill="none">
                    <rect x="4" y="3" width="12" height="14" rx="1.5" stroke="#ff6600" strokeWidth="1.5" />
                    <line x1="7" y1="7" x2="13" y2="7" stroke="#ff6600" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="7" y1="10" x2="13" y2="10" stroke="#ff6600" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="7" y1="13" x2="11" y2="13" stroke="#ff6600" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )
              },
              { 
                label: 'REAL RISKS', 
                icon: (
                  <svg width="28" height="28" viewBox="0 0 20 20" fill="none">
                    <polygon points="10,3 3,16 17,16" stroke="#ff6600" strokeWidth="1.5" strokeLinejoin="round" />
                    <line x1="10" y1="7" x2="10" y2="12" stroke="#ff6600" strokeWidth="1.8" strokeLinecap="round" />
                    <circle cx="10" cy="14" r="0.9" fill="#ff6600" />
                  </svg>
                )
              },
              { 
                label: 'REAL DECISIONS', 
                icon: (
                  <svg width="28" height="28" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" stroke="#ff6600" strokeWidth="1.5" />
                    <path d="M7 10 L9 12 L13.5 7.5" stroke="#ff6600" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              },
            ].map(({ label, icon }, i) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '20px 0', borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                {icon}
                <span style={{ fontSize: 13, fontWeight: 800, color: '#fff', letterSpacing: '0.8px', textTransform: 'uppercase' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PART 3: DESIGNED FOR FUTURE AI LEADERS ── */}
      <section className="aigp-section-audience" style={{ background: '#07090f', padding: '36px 0 40px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="aigp-inner-pad" style={{ maxWidth: 1500, margin: '0 auto', padding: '0 40px' }}>

          {/* Centered heading with blue rules and dots */}
          <div ref={audienceRef} className="aigp-audience-heading" style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28, justifyContent: 'center',
            opacity: audienceVisible ? 1 : 0, transform: audienceVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease 0ms, transform 0.6s ease 0ms',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', flex: 1, gap: 8 }}>
              <div style={{ height: 1.5, background: 'linear-gradient(90deg, transparent, #2196f3)', flex: 1 }} />
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#2196f3' }} />
            </div>
            <span style={{ fontSize: 'clamp(14px, 1.8vw, 22px)', fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '1.5px', textAlign: 'center', whiteSpace: 'nowrap' }}>
              DESIGNED FOR FUTURE AI LEADERS
            </span>
            <div style={{ display: 'flex', alignItems: 'center', flex: 1, gap: 8 }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#2196f3' }} />
              <div style={{ height: 1.5, background: 'linear-gradient(90deg, #2196f3, transparent)', flex: 1 }} />
            </div>
          </div>

          {/* 4 Audience Cards */}
          <div className="aigp-grid-4 aigp-audience-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {[
              { 
                c: '#3b82f6', 
                rgb: '59,130,246', 
                title: ['SENIOR', 'PROFESSIONALS'],
                icon: (
                  <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="11" r="5" stroke="#3b82f6" strokeWidth="1.6" />
                    <path d="M7 25c0-4.5 4-7.5 9-7.5s9 3 9 7.5" stroke="#3b82f6" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                )
              },
              { 
                c: '#00bcd4', 
                rgb: '0,188,212', 
                title: ['CYBERSECURITY &', 'PRIVACY', 'PROFESSIONALS'],
                icon: (
                  <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
                    <path d="M16 6 L7 10.5 V18.5 C7 24.5, 12 28.5, 16 30 C20 28.5, 25 24.5, 25 18.5 V10.5 Z" stroke="#00bcd4" strokeWidth="1.4" strokeLinejoin="round" />
                    <circle cx="16" cy="14" r="2.5" stroke="#00bcd4" strokeWidth="1.4" />
                    <path d="M11 22c0-2.5 2.2-4 5-4s5 1.5 5 4" stroke="#00bcd4" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                )
              },
              { 
                c: '#9c27b0', 
                rgb: '156,39,176', 
                title: ['COMPLIANCE & RISK', 'PROFESSIONALS'],
                icon: (
                  <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
                    <rect x="9" y="8" width="14" height="18" rx="1.5" stroke="#9c27b0" strokeWidth="1.4" fill="none" />
                    <path d="M13.5 8 V6.5 C13.5 5.8, 18.5 5.8, 18.5 6.5 V8" stroke="#9c27b0" strokeWidth="1.4" strokeLinecap="round" />
                    <path d="M11 13 L12.5 14.5 L15.5 11.5" stroke="#9c27b0" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="17.5" y1="13" x2="21.5" y2="13" stroke="#9c27b0" strokeWidth="1.4" strokeLinecap="round" />
                    <path d="M11 18 L12.5 19.5 L15.5 16.5" stroke="#9c27b0" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="17.5" y1="18" x2="21.5" y2="18" stroke="#9c27b0" strokeWidth="1.4" strokeLinecap="round" />
                    <path d="M11 23 L12.5 24.5 L15.5 21.5" stroke="#9c27b0" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="17.5" y1="23" x2="21.5" y2="23" stroke="#9c27b0" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                )
              },
              { 
                c: '#ff6600', 
                rgb: '255,102,0', 
                title: ['MID-CAREER', 'PROFESSIONALS'],
                icon: (
                  <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
                    <rect x="8" y="12" width="16" height="12" rx="2" stroke="#ff6600" strokeWidth="1.4" fill="none" />
                    <path d="M12 12 V9.5 C12 8.5, 20 8.5, 20 9.5 V12" stroke="#ff6600" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="8" y1="17.5" x2="24" y2="17.5" stroke="#ff6600" strokeWidth="1.4" />
                    <rect x="14.5" y="16" width="3" height="3" rx="0.5" stroke="#ff6600" strokeWidth="1.4" fill="#0d0f16" />
                  </svg>
                )
              },
            ].map((card) => (
              <div
                key={card.title.join(' ')}
                onMouseEnter={() => setHoveredAudience(card.title.join(' '))}
                onMouseLeave={() => setHoveredAudience(null)}
                className="aigp-audience-card"
                style={{
                  background: '#070a0f',
                  border: `1.5px solid ${hoveredAudience === card.title.join(' ') ? card.c : 'rgba(255,255,255,0.06)'}`,
                  borderRadius: 10, padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 16,
                  transform: hoveredAudience === card.title.join(' ') ? 'translateY(-5px) scale(1.02)' : 'translateY(0) scale(1)',
                  boxShadow: hoveredAudience === card.title.join(' ') ? `0 12px 30px rgba(${card.rgb},0.15)` : 'none',
                  transition: 'all 0.26s cubic-bezier(0.22, 1, 0.36, 1)', cursor: 'default',
                }}
              >
                <div className="aigp-audience-icon" style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: `rgba(${card.rgb},${hoveredAudience === card.title.join(' ') ? '0.14' : '0.04'})`,
                  border: `1.5px solid ${card.c}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  filter: hoveredAudience === card.title.join(' ') ? `drop-shadow(0 0 8px ${card.c}88)` : 'none',
                  transition: 'all 0.26s ease',
                }}>
                  {card.icon}
                </div>
                <p style={{ fontSize: 13, fontWeight: 800, color: '#fff', textTransform: 'uppercase', lineHeight: 1.45, letterSpacing: '0.4px', textAlign: 'left' }}>
                  {card.title.map((line) => (
                    <span key={line} style={{ display: 'block' }}>{line}</span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PART 4: CTA BANNER ── */}
      <section className="aigp-section-ctabanner" style={{ 
        position: 'relative',
        background: '#040712', 
        backgroundImage: 'radial-gradient(circle at 12% 50%, rgba(30, 144, 255, 0.18), transparent 45%), radial-gradient(circle at 88% 50%, rgba(30, 144, 255, 0.18), transparent 45%), linear-gradient(90deg, #040712 0%, #060914 100%)',
        padding: '36px 0', 
        overflow: 'hidden'
      }}>
        {/* Horizontal top glowing neon line only */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          height: 1.5, 
          background: 'linear-gradient(90deg, transparent, #2196f3 15%, #2196f3 85%, transparent)', 
          boxShadow: '0 0 6px #2196f3',
          opacity: 0.9, 
          zIndex: 2 
        }} />

        {/* Full-width subtle pin-point star dots */}
        <svg style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} viewBox="0 0 1200 100" preserveAspectRatio="none">
          {/* Left side — sparse tiny dots */}
          <circle cx="25"  cy="45" r="0.5" fill="#4fc3f7" opacity="0.7" />
          <circle cx="60"  cy="18" r="0.4" fill="#4fc3f7" opacity="0.5" />
          <circle cx="105" cy="70" r="0.6" fill="#4fc3f7" opacity="0.8" />
          <circle cx="150" cy="30" r="0.4" fill="#4fc3f7" opacity="0.5" />
          <circle cx="195" cy="80" r="0.5" fill="#4fc3f7" opacity="0.6" />
          <circle cx="240" cy="35" r="0.6" fill="#4fc3f7" opacity="0.7" />
          <circle cx="285" cy="12" r="0.4" fill="#4fc3f7" opacity="0.5" />
          <circle cx="330" cy="58" r="0.5" fill="#4fc3f7" opacity="0.6" />
          <circle cx="45"  cy="85" r="0.4" fill="#4fc3f7" opacity="0.4" />
          <circle cx="170" cy="8"  r="0.4" fill="#4fc3f7" opacity="0.4" />
          <circle cx="270" cy="90" r="0.4" fill="#4fc3f7" opacity="0.4" />
          <circle cx="375" cy="22" r="0.5" fill="#4fc3f7" opacity="0.5" />

          {/* Right side — sparse tiny dots */}
          <circle cx="845"  cy="60" r="0.5" fill="#4fc3f7" opacity="0.6" />
          <circle cx="885"  cy="15" r="0.6" fill="#4fc3f7" opacity="0.8" />
          <circle cx="930"  cy="75" r="0.4" fill="#4fc3f7" opacity="0.5" />
          <circle cx="975"  cy="25" r="0.5" fill="#4fc3f7" opacity="0.6" />
          <circle cx="1020" cy="65" r="0.6" fill="#4fc3f7" opacity="0.7" />
          <circle cx="1065" cy="18" r="0.4" fill="#4fc3f7" opacity="0.5" />
          <circle cx="1110" cy="70" r="0.5" fill="#4fc3f7" opacity="0.6" />
          <circle cx="1155" cy="35" r="0.6" fill="#4fc3f7" opacity="0.7" />
          <circle cx="865"  cy="88" r="0.4" fill="#4fc3f7" opacity="0.4" />
          <circle cx="1000" cy="8"  r="0.4" fill="#4fc3f7" opacity="0.4" />
          <circle cx="1135" cy="90" r="0.4" fill="#4fc3f7" opacity="0.4" />
          <circle cx="910"  cy="42" r="0.4" fill="#4fc3f7" opacity="0.5" />
        </svg>

        <div className="aigp-inner-pad aigp-cta-banner" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', gap: 28, position: 'relative', zIndex: 1 }}>

          {/* Shield */}
          <div className="aigp-cta-shield" style={{ flexShrink: 0 }}>
            <svg width="68" height="78" viewBox="0 0 72 82" fill="none">
              <path d="M36 4L6 18v24c0 19 13 35 30 40 17-5 30-21 30-40V18L36 4Z" fill="rgba(30,136,229,0.06)" stroke="#1e88e5" strokeWidth="2.2" strokeLinejoin="round"/>
              <path d="M22 41l11 11 20-20" stroke="#ff6600" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Text */}
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.3, marginBottom: 8, letterSpacing: '0.5px' }}>
              <span style={{ color: '#fff' }}>THE FUTURE OF AI DEPENDS ON </span>
              <span style={{ color: '#ff6600' }}>GOVERNANCE.</span>
            </div>
            <div className="aigp-cta-tagline" style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.5px' }}>
                Govern AI. <span style={{ color: '#ff6600', margin: '0 8px' }}>♦</span> Manage Risk. <span style={{ color: '#ff6600', margin: '0 8px' }}>♦</span> Build Trust.
              </span>
            </div>
          </div>

          {/* Button */}
          <a href="#register" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: '#ff6600',
            color: '#fff',
            fontWeight: 900,
            fontSize: 14,
            padding: '14px 28px',
            borderRadius: 8,
            textDecoration: 'none',
            textTransform: 'uppercase',
            flexShrink: 0,
            whiteSpace: 'nowrap',
            letterSpacing: '0.5px',
            border: '1.5px solid transparent',
            boxShadow: '0 4px 14px rgba(255,102,0,0.35)',
            position: 'relative',
            zIndex: 3,
            transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
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
            e.currentTarget.style.background = '#ff6600';
            e.currentTarget.style.border = '1.5px solid transparent';
            e.currentTarget.style.backdropFilter = 'none';
            e.currentTarget.style.WebkitBackdropFilter = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 14px rgba(255,102,0,0.35)';
            e.currentTarget.style.color = '#fff';
          }}
          >
            REGISTER INTEREST <ArrowRight size={18} />
          </a>
        </div>
      </section>



      <style>{`
        @keyframes aigpHeroLineIn {
          from { opacity: 0; transform: translateY(36px); filter: blur(6px); }
          to   { opacity: 1; transform: translateY(0);    filter: blur(0px); }
        }
        .aigp-hero-inner {
          display: flex;
          align-items: stretch;
          min-height: 100vh;
          height: auto;
          background: transparent;
          position: relative;
          margin-top: -70px;
          padding-top: 80px;
          z-index: 2;
        }
        .aigp-hero-left {
          flex: 0 0 42%;
          max-width: 700px;
          background: transparent;
          padding: 30px 20px 30px 70px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          z-index: 2;
        }
        .aigp-hero-bg-container {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          width: 60%;
          z-index: 1;
          overflow: hidden;
        }
        .aigp-hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
        }
        .aigp-hero-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, #060810 0%, rgba(6,8,16,0.6) 15%, transparent 35%);
        }

        .aigp-hero-line {
          display: inline-block;
          opacity: 0;
          animation: aigpHeroLineIn 0.72s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes aigpScanLine {
          0%   { top: -2px; opacity: 1; }
          100% { top: 102%; opacity: 0; }
        }

        /* AIGP Responsive */

        /* ── Tablet (≤ 1023px) ── */
        @media (max-width: 1023px) {
          .aigp-hero-inner { flex-direction: column !important; height: auto !important; min-height: auto !important; margin-top: 0 !important; padding-top: 0 !important; }
          .aigp-hero-left  { flex: none !important; width: 100% !important; padding: 48px 32px 38px 40px !important; background: #060810 !important; }
          .aigp-hero-bg-container { position: relative !important; width: 100% !important; height: 320px !important; display: block !important; }
          .aigp-hero-bg-img { object-position: center center !important; }
          .aigp-hero-bg-overlay { background: linear-gradient(to bottom, #060810 0%, rgba(6,8,16,0.1) 30%, transparent 100%) !important; }
          .aigp-inner-pad  { padding-left: 24px !important; padding-right: 24px !important; }

          .aigp-grid-6     { grid-template-columns: repeat(3, 1fr) !important; }
          .aigp-grid-4     { grid-template-columns: repeat(2, 1fr) !important; }
          .aigp-grid-3     { grid-template-columns: repeat(2, 1fr) !important; }
          .aigp-audience-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .aigp-case-bar   { grid-template-columns: repeat(2, 1fr) !important; }

          .aigp-section-pad { padding: 48px 0 !important; }
          .aigp-section-gov     { padding: 40px 0 0 !important; }
          .aigp-section-fw      { padding: 40px 0 0 !important; }
          .aigp-section-scenarios { padding: 32px 0 0 !important; }
          .aigp-section-audience  { padding: 28px 0 !important; }
          .aigp-section-ctabanner { padding: 28px 0 !important; }

          .aigp-prob-bar-outer  { padding-left: 24px !important; padding-right: 24px !important; }
          .aigp-prob-bar        { display: flex !important; flex-direction: column !important; min-height: auto !important; }
          .aigp-prob-bar-left   { margin-left: 0 !important; padding: 14px 20px !important; border-right: none !important; border-bottom: 1px solid rgba(255,102,0,0.2) !important; }
          .aigp-prob-bar > div:nth-child(2) { padding: 14px 20px !important; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.07) !important; }
          .aigp-prob-bar > div:nth-child(3) { padding: 14px 20px !important; flex-direction: column !important; align-items: flex-start !important; justify-content: flex-start !important; gap: 10px !important; }
          .aigp-prob-item-div { display: none !important; }

          .aigp-fw-bar-outer    { padding-left: 24px !important; padding-right: 24px !important; }
          .aigp-fw-bar          { flex-wrap: wrap !important; gap: 10px !important; min-height: auto !important; padding: 12px 0 !important; }
          .aigp-fw-bar-divider  { display: none !important; }
          .aigp-fw-bottom-bar   { flex-direction: column !important; align-items: flex-start !important; gap: 10px !important; padding: 16px 24px !important; min-height: auto !important; }
          .aigp-fw-bottom-text  { white-space: normal !important; font-size: 13px !important; letter-spacing: 1px !important; }
          .aigp-fw-bottom-divider { display: none !important; }
          .aigp-fw-bottom-sub   { font-size: 13px !important; }

          .aigp-modules-inner      { flex-direction: column !important; gap: 24px !important; align-items: center !important; }
          .aigp-modules-heading    { min-width: 0 !important; width: 100% !important; text-align: center !important; }
          .aigp-modules-heading > div:last-of-type { margin-left: auto !important; margin-right: auto !important; }
          .aigp-modules-connector  { display: none !important; }
          .aigp-modules-steps      { flex-wrap: wrap !important; }

          .aigp-cta-banner      { flex-wrap: wrap !important; gap: 16px !important; }
          .aigp-cert-badges     { flex-wrap: wrap !important; }
          .aigp-cert-divider    { display: none !important; }
          .aigp-scenario-heading { flex-wrap: wrap !important; gap: 8px !important; }
          .aigp-audience-heading { flex-wrap: wrap !important; gap: 8px !important; }
          .aigp-heading-rule    { display: none !important; }
        }

        /* ── Mobile (≤ 767px) ── */
        @media (max-width: 767px) {
          .aigp-hero-inner { flex-direction: column !important; }
          .aigp-hero-left  { flex: none !important; width: 100% !important; padding: 40px 16px 32px 16px !important; background: #060810 !important; }
          .aigp-hero-bg-container { position: relative !important; width: 100% !important; height: 220px !important; display: block !important; }
          .aigp-hero-bg-img { object-position: center center !important; }

          .aigp-inner-pad  { padding-left: 16px !important; padding-right: 16px !important; }

          .aigp-grid-6     { grid-template-columns: repeat(2, 1fr) !important; }
          .aigp-grid-4     { grid-template-columns: repeat(2, 1fr) !important; }
          .aigp-grid-3     { grid-template-columns: 1fr !important; }
          .aigp-audience-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .aigp-case-bar   { grid-template-columns: repeat(2, 1fr) !important; }
          .aigp-case-bar > div { justify-content: flex-start !important; padding: 14px 16px !important; }

          .aigp-section-pad { padding: 36px 0 !important; }
          .aigp-section-gov     { padding: 32px 0 0 !important; }
          .aigp-section-fw      { padding: 32px 0 0 !important; }
          .aigp-section-scenarios { padding: 24px 0 0 !important; }
          .aigp-section-audience  { padding: 24px 0 !important; }
          .aigp-section-ctabanner { padding: 24px 0 !important; }
          .aigp-section-modules   { padding: 32px 0 28px !important; }

          .aigp-prob-bar-outer  { padding-left: 16px !important; padding-right: 16px !important; }
          .aigp-prob-bar        { display: flex !important; flex-direction: column !important; min-height: auto !important; }
          .aigp-prob-bar-left   { margin-left: 0 !important; padding: 12px 16px !important; border-right: none !important; border-bottom: 1px solid rgba(255,102,0,0.2) !important; }
          .aigp-prob-bar > div:nth-child(2) { padding: 12px 16px !important; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.07) !important; }
          .aigp-prob-bar > div:nth-child(2) p { font-size: 14px !important; }
          .aigp-prob-bar > div:nth-child(3) { padding: 12px 16px !important; flex-direction: column !important; align-items: flex-start !important; justify-content: flex-start !important; gap: 8px !important; }
          .aigp-prob-item-div { display: none !important; }

          .aigp-fw-bar-outer    { padding-left: 16px !important; padding-right: 16px !important; }
          .aigp-fw-bar          { flex-direction: column !important; gap: 8px !important; padding: 12px 0 !important; min-height: auto !important; }
          .aigp-fw-bar-divider  { display: none !important; }
          .aigp-fw-bottom-bar   { flex-direction: column !important; align-items: flex-start !important; gap: 8px !important; padding: 14px 16px !important; min-height: auto !important; }
          .aigp-fw-bottom-left  { align-items: flex-start !important; width: 100% !important; }
          .aigp-fw-bottom-text  { white-space: normal !important; font-size: 12px !important; letter-spacing: 0.8px !important; }
          .aigp-fw-bottom-divider { display: none !important; }
          .aigp-fw-bottom-sub   { font-size: 12px !important; }

          .aigp-modules-inner      { flex-direction: column !important; gap: 20px !important; align-items: center !important; }
          .aigp-modules-heading    { min-width: 0 !important; width: 100% !important; text-align: center !important; }
          .aigp-modules-heading > div:last-of-type { margin-left: auto !important; margin-right: auto !important; }
          .aigp-modules-connector  { display: none !important; }
          .aigp-modules-steps      { flex-wrap: wrap !important; justify-content: center !important; }

          .aigp-cta-banner      { flex-direction: column !important; align-items: center !important; text-align: center !important; gap: 16px !important; }
          .aigp-cta-shield      { display: none !important; }
          .aigp-cta-divider     { display: none !important; }
          .aigp-cta-tagline     { justify-content: center !important; }

          .aigp-cert-desktop    { display: none !important; }
          .aigp-cert-mobile     { display: flex !important; }
          .aigp-cta-desktop     { display: none !important; }
          .aigp-cta-mobile      { display: flex !important; }

          .aigp-scenario-heading { flex-wrap: wrap !important; gap: 6px !important; }
          .aigp-audience-heading { flex-wrap: wrap !important; gap: 6px !important; }
          .aigp-heading-rule    { display: none !important; }
          .aigp-scenario-title  { white-space: normal !important; font-size: 16px !important; }
          .aigp-audience-card   { padding: 14px 12px !important; gap: 10px !important; flex-direction: column !important; align-items: center !important; text-align: center !important; }
          .aigp-audience-icon   { width: 48px !important; height: 48px !important; }
          .aigp-audience-card p { text-align: center !important; }
        }

        /* ── Small mobile (≤ 480px) ── */
        @media (max-width: 480px) {
          .aigp-hero-right  { height: 180px !important; }
          .aigp-grid-6      { grid-template-columns: repeat(2, 1fr) !important; }
          .aigp-case-bar    { grid-template-columns: repeat(2, 1fr) !important; }
          .aigp-case-bar > div { justify-content: flex-start !important; padding: 12px 14px !important; }
          .aigp-audience-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
      {/* ── CONTACT FORM ── */}
      <section className="aigp-section-pad" style={{ background: 'var(--bg-card)', padding: '88px 0' }} id="register">
        <div className="container-xl">
          <RevealSection>
            <div className="row g-5 align-items-center justify-content-center">
              <div className="col-12 col-lg-5 contact-info-col">
                <div className="section-label mb-3">Register Your Interest</div>
                <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 46px)', fontWeight: 900, marginBottom: 16, color: '#fff' }}>
                  Start Your AIGP <span style={{ color: 'var(--orange)' }}>Career Today.</span>
                </h2>
                <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 28 }}>
                  Seats are limited. Submit your interest and our team will reach out with cohort dates and full program details.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    { Icon: Shield,    text: 'Hands-On AI Governance Training' },
                    { Icon: Target,    text: 'Real-World Scenarios' },
                    { Icon: Award,     text: 'Industry Recognised Certifications' },
                    { Icon: Briefcase, text: 'Job-Ready Skills & Career Support' },
                  ].map(({ Icon, text }) => (
                    <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div className="icon-wrap icon-sm" style={{ flexShrink: 0 }}><Icon size={15} strokeWidth={1.8} /></div>
                      <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '36px 32px' }}>
                  <GlobalContactForm isEmbedded={true} />
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
