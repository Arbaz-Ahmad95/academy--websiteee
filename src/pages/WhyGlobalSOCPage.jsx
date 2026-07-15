import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Shield, Cpu, Users, Globe, Zap, Database, ShieldCheck,
  Target, Rocket, Monitor, Settings, TrendingUp,
  Calendar, Code2, ShieldOff, Crosshair
} from 'lucide-react';

function RevealSection({ children, delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    }, { threshold: 0.08 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref}>{children}</div>;
}

const combineItems = [
  { icon: Shield, text: 'Live human expertise' },
  { icon: Cpu, text: 'AI-driven automation' },
  { icon: Users, text: 'Real-world operational experience' },
  { icon: Globe, text: 'Local presence with global capability' },
  { icon: Zap, text: 'And a forward-looking vision built for the future of cybersecurity' }
];

const ecosystemItems = [
  '24/7 Managed Security Operations Centre (SOC)',
  'AI-Powered Threat Detection & Response',
  'Offensive & Defensive Cybersecurity Services',
  'OT / Industrial Cybersecurity',
  'AI Governance, Risk & Compliance',
  'Digital Forensics & Incident Response',
  'Cyber Insurance Readiness Services',
  'Cybersecurity Academy & Workforce Development'
];

const differentCards = [
  {
    Icon: Shield,
    title: '24/7 Live Security Operations Centre',
    desc: 'Real analysts. Real monitoring. Real-time response.'
  },
  {
    Icon: Cpu,
    title: 'AI-Powered Security Operations',
    desc: 'Advanced AI automation helps reduce noise, accelerate detection, and improve response efficiency.'
  },
  {
    Icon: Database,
    title: 'Full-Spectrum Cybersecurity Services',
    desc: 'From assessments and governance to managed defence and digital forensics — all under one ecosystem.'
  },
  {
    Icon: Zap,
    title: 'Agentic AI Security Leadership',
    desc: 'Helping organisations securely adopt and govern AI systems and AI-driven workflows.'
  },
  {
    Icon: Globe,
    title: 'OT + IT Cybersecurity Expertise',
    desc: 'Protecting both enterprise IT systems and operational technology environments.'
  },
  {
    Icon: ShieldCheck,
    title: 'Cyber Insurance Readiness',
    desc: 'Helping organisations improve insurability, reduce cyber risk exposure, and strengthen resilience.'
  },
  {
    Icon: Globe,
    title: 'Global Reach. Local Presence.',
    desc: 'A scalable model combining global expertise with local delivery and trusted relationships.'
  },
  {
    Icon: Users,
    title: 'Practitioner-Led Ecosystem',
    desc: 'Built by professionals with real-world cybersecurity, operations, governance, and incident response experience.'
  }
];

const heroFeatures = [
  { Icon: null, img: '/assets/icons/real-environment-icon.png', title: 'REAL ENVIRONMENT', sub: 'Not Simulations' },
  { Icon: null, img: '/assets/icons/real-threats-icon.png',     title: 'REAL THREATS',     sub: 'Not Theory' },
  { Icon: null, img: '/assets/icons/real-impact-icon.png',      title: 'REAL IMPACT',      sub: 'Not Assignments' },
  { Icon: Rocket, title: 'REAL CAREERS',     sub: 'Not Promises' },
];

const features03 = [
  { iconPath: '/assets/icons/real-world-exposure.png',     title: 'REAL-WORLD\nEXPOSURE',           desc: 'Not simulation.\nReal incidents.' },
  { iconPath: '/assets/icons/ai-cybersecurity-focused.png', title: 'AI + CYBERSECURITY\nFOCUSED',    desc: 'Future-ready skills\nthat matter.' },
  { iconPath: '/assets/icons/enterprise-standards.png',    title: 'ENTERPRISE\nSTANDARDS',          desc: 'Learn the way\nenterprises work.' },
  { iconPath: '/assets/icons/practical-hands-on.png',      title: 'PRACTICAL, HANDS-ON,\nIMMERSIVE.', desc: 'Solve. Investigate.\nRespond.' },
  { iconPath: '/assets/icons/career-outcomes.png',         title: 'CAREER OUTCOMES\nTHAT LAST',     desc: "We don't stop at\ncertification." },
];

const expFeatureCards = [
  { Icon: Monitor,  title: 'LIVE SOC ENVIRONMENT',                        desc: 'Work inside a real Security Operations Center.' },
  { Icon: Database, title: 'LIVE DATA. REAL THREATS.',                    desc: 'Analyze real attack patterns, alerts, & incidents.' },
  { Icon: Settings, title: 'ENTERPRISE-GRADE TOOLS',                      desc: 'Access the same tools used by top security teams.' },
  { Icon: Users,    title: 'INDUSTRY PRACTITIONERS',                      desc: 'Learn directly from experts who defend every day.' },
  { Icon: Cpu,      title: 'HYPER-NICHE, IN-DEMAND SKILLS',              desc: 'AI-powered security, threat hunting, cloud security, DFIR & more.' },
  { Icon: Rocket,   title: 'CAREER SUPPORT THAT CONTINUES AFTER TRAINING', desc: 'We invest in your growth until you succeed.' },
];

export default function WhyGlobalSOCPage() {
  const navigate = useNavigate();
  return (
    <div>
      {/* ── HERO ── */}
      <section className="wgs-hero-section" style={{
        background: '#050505',
        height: '82vh',
        display: 'flex',
        alignItems: 'stretch',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* LEFT COLUMN */}
        <div className="wgs-hero-left" style={{
          flex: '0 0 42%',
          padding: '40px 36px 20px 90px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 2,
        }}>
          {/* Subtle orange glow blob */}
          <div style={{
            position: 'absolute', left: -80, top: '28%',
            width: 320, height: 320, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,122,0,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}/>

          <div className="wgs-hero-text-wrap">
            {/* Label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{ width: 22, height: 1.5, background: '#FF7A00', display: 'inline-block', flexShrink: 0 }}/>
              <span style={{ fontSize: 10.5, fontWeight: 800, letterSpacing: '2.5px', color: '#FF7A00', textTransform: 'uppercase' }}>
                WHY GLOBAL SOC
              </span>
            </div>

            {/* Heading */}
            <h1 style={{
              fontSize: 'clamp(26px, 3vw, 46px)',
              fontWeight: 900,
              lineHeight: 1.04,
              textTransform: 'uppercase',
              letterSpacing: '-0.5px',
              marginBottom: 14,
              color: '#fff',
            }}>
              NOT JUST TRAINING.<br/>
              <span style={{ color: '#FF7A00' }}>REAL CYBER DEFENSE</span><br/>
              EXPERIENCE.
            </h1>

            {/* Paragraph */}
            <p style={{
              fontSize: 13,
              color: 'rgba(255,255,255,0.48)',
              lineHeight: 1.65,
              marginBottom: 24,
              maxWidth: 370,
            }}>
              Global SOC is not an academy.<br/>
              It's a real-world Security Operations Environment<br/>
              built for the future of AI and Cybersecurity.
            </p>
          </div>

          <div className="wgs-hero-features-wrap">
            {/* Feature items row */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0 }}>
            {heroFeatures.map((item, i) => (
              <div key={item.title} style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 8px',
                borderRight: i < heroFeatures.length - 1 ? '1px solid rgba(255,255,255,0.09)' : 'none',
              }}>
                {item.Icon && (
                  <div style={{
                    width: 52, height: 52,
                    border: '1.5px solid rgba(255,122,0,0.5)',
                    borderRadius: 11,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 8,
                    color: '#FF7A00',
                    background: 'rgba(255,122,0,0.05)',
                  }}>
                    <item.Icon size={22} strokeWidth={1.5}/>
                  </div>
                )}
                {!item.Icon && item.img && (
                  <img src={item.img} alt={item.title} style={{ width: 52, height: 52, objectFit: 'contain', marginBottom: 8 }} />
                )}
                <span style={{
                  fontSize: 8.5, fontWeight: 800, color: '#fff',
                  textTransform: 'uppercase', letterSpacing: '0.5px',
                  display: 'block', marginBottom: 2, lineHeight: 1.3,
                }}>{item.title}</span>
                <span style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.35)' }}>{item.sub}</span>
              </div>
            ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — image */}
        <div className="wgs-hero-right" style={{
          flex: '0 0 58%',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <img
            src="/assets/Images/why-globalsoc-hero.png"
            alt="GlobalSOC Security Operations Centre"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center',
              display: 'block',
            }}
          />

          {/* ── QUOTE CARD ── */}
          <div style={{
            position: 'absolute',
            bottom: 30,
            right: 40,
            width: 310,
            background: 'rgba(6,6,18,0.9)',
            border: '1.5px solid rgba(255,122,0,0.45)',
            borderRadius: 12,
            padding: '16px 20px',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,122,0,0.08)',
          }}>
            <div style={{
              fontSize: 32, color: '#FF7A00', lineHeight: 0.9,
              marginBottom: 6, fontFamily: 'Georgia, serif', fontWeight: 700,
            }}>"</div>
            <p style={{ fontSize: 13, color: '#fff', lineHeight: 1.6, margin: 0 }}>
              We don't prepare you for exams.<br/>
              We prepare you for the{' '}
              <span style={{ color: '#FF7A00', fontWeight: 700 }}>real world.</span>
            </p>
          </div>
        </div>

        {/* Responsive styles */}
        <style>{`
          @media (max-width: 1100px) {
            .wgs-hero-left { padding-left: 48px !important; }
          }
          @media (max-width: 991px) {
            section.wgs-hero-section {
              height: auto !important;
              min-height: 100vh !important;
              flex-direction: column !important;
            }
            .wgs-hero-left {
              flex: none !important; width: 100% !important;
              padding: 100px 32px 48px 32px !important;
            }
            .wgs-hero-right {
              flex: none !important; width: 100% !important;
              height: 420px !important;
            }
          }
          @media (max-width: 767px) {
            section.wgs-hero-section {
              height: calc(100vh - 70px) !important;
              min-height: calc(100vh - 70px) !important;
              max-height: calc(100vh - 70px) !important;
              overflow: hidden !important;
            }
            .wgs-hero-left {
              padding: 30px 20px 16px 20px !important;
              height: calc(100vh - 70px) !important;
              max-height: calc(100vh - 70px) !important;
              display: flex !important;
              flex-direction: column !important;
              justify-content: center !important;
              gap: 20px !important;
              overflow: hidden !important;
            }
            .wgs-hero-left h1 {
              font-size: clamp(34px, 8vw, 46px) !important;
              margin-bottom: 6px !important;
            }
            .wgs-hero-text-wrap {
              min-height: auto !important;
              display: block !important;
            }
            .wgs-hero-text-wrap p {
              margin-bottom: 10px !important;
            }
            .wgs-hero-features-wrap {
              padding: 0 !important;
              width: 100% !important;
            }
            .wgs-hero-right {
              position: absolute !important;
              top: 0 !important;
              left: 0 !important;
              right: 0 !important;
              bottom: 0 !important;
              width: 100% !important;
              height: 100% !important;
              z-index: 0 !important;
              opacity: 0.18 !important;
              pointer-events: none !important;
            }
            .wgs-hero-right > div {
              display: none !important;
            }
          }
        `}</style>
      </section>

      {/* ── 01: EXPERIENCE THAT DOESN'T EXIST ELSEWHERE ── */}
      <section style={{ background: '#050505', borderTop: '1px solid rgba(255,255,255,0.04)', position: 'relative', overflow: 'hidden', minHeight: 390 }}>

        {/* Image — absolutely behind, right side */}
        <div className="exp-bg-image" style={{
          position: 'absolute', right: 0, top: 0, bottom: 0,
          width: '44%', zIndex: 1, pointerEvents: 'none',
        }}>
          <img
            src="/assets/Images/experience-section.png"
            alt="Cybersecurity Shield Illustration"
            style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center right', display: 'block' }}
          />
        </div>

        {/* Content — in front, extends 70% so right cards overlap image */}
        <div className="exp-left" style={{
          position: 'relative', zIndex: 2,
          width: '70%',
          padding: '48px 0 48px 80px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          minHeight: 390,
        }}>

          {/* Section number */}
          <div style={{ fontSize: 13, fontWeight: 900, color: '#FF7A00', letterSpacing: '1px', marginBottom: 8, fontFamily: 'monospace' }}>
            01
          </div>

          {/* Heading */}
          <h2 className="section-num-heading" style={{
            fontSize: 'clamp(18px, 1.55vw, 22px)',
            fontWeight: 900, color: '#fff',
            textTransform: 'uppercase',
            lineHeight: 1.15, letterSpacing: '-0.2px',
            marginBottom: 10,
          }}>
            EXPERIENCE THAT<br/>DOESN'T EXIST ELSEWHERE
          </h2>

          {/* Subtext */}
          <p style={{ fontSize: 13, color: '#A0A0A0', lineHeight: 1.6, marginBottom: 20 }}>
            At Global SOC, you don't just learn about cybersecurity.<br/>
            You live it. Breathe it. Defend with it.
          </p>

          {/* 3×2 Feature Card Grid */}
          <div className="exp-card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
            {expFeatureCards.map((card, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(12,12,18,0.88)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  borderRadius: 8,
                  padding: '14px 13px',
                  display: 'flex', flexDirection: 'column', gap: 8,
                  backdropFilter: 'blur(6px)',
                  WebkitBackdropFilter: 'blur(6px)',
                  transition: 'box-shadow 0.22s, border-color 0.22s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 0 22px rgba(255,122,0,0.10)';
                  e.currentTarget.style.borderColor = 'rgba(255,122,0,0.25)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)';
                }}
              >
                <div style={{ color: '#FF7A00' }}>
                  <card.Icon size={24} strokeWidth={1.5} />
                </div>
                <div style={{
                  fontSize: 9, fontWeight: 800, color: '#fff',
                  textTransform: 'uppercase', letterSpacing: '0.4px', lineHeight: 1.3,
                }}>
                  {card.title}
                </div>
                <div style={{ fontSize: 11, color: '#A0A0A0', lineHeight: 1.5 }}>
                  {card.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 991px) {
            .exp-left { width: 100% !important; padding: 40px 32px 32px !important; }
            .exp-bg-image { display: none !important; }
          }
          @media (max-width: 767px) {
            .exp-left { padding: 36px 20px 28px !important; }
            .exp-card-grid { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 576px) {
            .exp-card-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── 02: WHY GLOBAL SOC IS DIFFERENT ── */}
      <section className="why-diff-section" style={{ background: '#050505', borderTop: '1px solid rgba(255,255,255,0.04)', padding: '52px 80px' }}>
        <div className="diff-section" style={{ display: 'flex', alignItems: 'center', gap: 48, width: '100%' }}>

          {/* LEFT — number + heading + para */}
          <div style={{ flex: '0 0 230px', minWidth: 0 }}>
            <div style={{ fontSize: 22, fontWeight: 900, color: '#FF7A00', marginBottom: 10, fontFamily: 'monospace', lineHeight: 1 }}>02</div>
            <h2 className="section-num-heading" style={{ fontSize: 'clamp(18px, 1.55vw, 22px)', fontWeight: 900, color: '#fff', textTransform: 'uppercase', lineHeight: 1.15, letterSpacing: '-0.2px', marginBottom: 14 }}>
              WHY GLOBAL SOC IS DIFFERENT
            </h2>
            <p style={{ fontSize: 12.5, color: '#A0A0A0', lineHeight: 1.7, margin: 0 }}>
              Most platforms teach.<br/>
              We immerse. Most platforms<br/>
              show slides. We show you<br/>
              the battlefield.
            </p>
          </div>

          {/* RIGHT — comparison table: two separate panels with gap */}
          <div className="diff-table-wrap" style={{ flex: 1, position: 'relative', display: 'flex', gap: 10 }}>

            {/* LEFT panel — Most Training Platforms */}
            <div style={{
              flex: 1, borderRadius: 8, overflow: 'hidden',
              background: '#12121c',
              border: '1px solid rgba(255,255,255,0.10)',
            }}>
              {/* Header — grey text on dark bg */}
              <div style={{
                padding: '12px 16px',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                textAlign: 'center',
                fontSize: 10, fontWeight: 700, color: '#8a8a9e',
                letterSpacing: '1.5px', textTransform: 'uppercase',
                background: '#1c1c2a',
              }}>
                MOST TRAINING PLATFORMS
              </div>
              {/* Items */}
              <div>
                {[
                  'Pre-recorded videos',
                  'Simulated labs',
                  'Outdated content',
                  'Limited tool exposure',
                  'One-time course',
                  'No real career support',
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '9px 16px',
                    borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  }}>
                    {/* ⊗ — grey outline circle + grey X */}
                    <div style={{
                      width: 18, height: 18, borderRadius: '50%',
                      border: '1.8px solid #6b6b80',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <svg width="8" height="8" viewBox="0 0 8 8">
                        <line x1="2" y1="2" x2="6" y2="6" stroke="#6b6b80" strokeWidth="1.6" strokeLinecap="round"/>
                        <line x1="6" y1="2" x2="2" y2="6" stroke="#6b6b80" strokeWidth="1.6" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.65)', lineHeight: 1.3 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* VS badge — absolute center between two panels */}
            <div className="diff-vs-badge" style={{
              position: 'absolute', left: '50%', top: '50%',
              transform: 'translate(-50%, -50%)',
              width: 44, height: 44, borderRadius: '50%',
              background: '#FF7A00',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 11, fontWeight: 900, color: '#000',
              letterSpacing: '0.5px', zIndex: 10,
              boxShadow: '0 0 0 4px #050505, 0 4px 20px rgba(255,122,0,0.55)',
            }}>
              VS
            </div>

            {/* RIGHT panel — Global SOC */}
            <div style={{
              flex: 1, borderRadius: 8, overflow: 'hidden',
              background: '#111008',
              border: '2px solid #FF7A00',
            }}>
              {/* Header — solid orange bg, bold white text */}
              <div style={{
                padding: '12px 16px',
                textAlign: 'center',
                fontSize: 10, fontWeight: 800, color: '#fff',
                letterSpacing: '1.5px', textTransform: 'uppercase',
                background: '#FF7A00',
              }}>
                GLOBAL SOC
              </div>
              {/* Items */}
              <div>
                {[
                  'Live SOC environment',
                  'Real threats, real data',
                  'Continuously updated content',
                  'Enterprise-grade tools',
                  'Continuous learning journey',
                  'Ongoing career mentorship',
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '9px 16px',
                    borderBottom: i < 5 ? '1px solid rgba(255,122,0,0.10)' : 'none',
                  }}>
                    {/* ✓ orange filled circle, white tick */}
                    <div style={{
                      width: 18, height: 18, borderRadius: '50%',
                      background: '#FF7A00',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <svg width="9" height="7" viewBox="0 0 9 7">
                        <polyline points="1,3.5 3.5,6 8,1" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: 12.5, color: '#fff', lineHeight: 1.3 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .why-diff-section {
            padding: 52px 80px !important;
          }
          @media (max-width: 991px) {
            .why-diff-section {
              padding: 40px 40px !important;
            }
            .diff-section {
              flex-direction: column !important;
              gap: 32px !important;
            }
            .diff-section > div:first-child {
              flex: none !important;
              width: 100% !important;
              text-align: left !important;
            }
          }
          @media (max-width: 767px) {
            .why-diff-section {
              padding: 40px 20px !important;
            }
            .diff-table-wrap {
              flex-direction: column !important;
              gap: 32px !important;
            }
            .diff-vs-badge {
              position: relative !important;
              top: auto !important;
              left: auto !important;
              transform: none !important;
              margin: -16px auto !important;
            }
          }
        `}</style>
      </section>

      {/* ── 03: WHAT MAKES GLOBAL SOC RARE & POWERFUL ── */}
      <section className="sec03-section" style={{ background: '#050505', borderTop: '1px solid rgba(255,255,255,0.04)', padding: '34px 80px' }}>
        <div className="sec03-wrap" style={{ display: 'flex', alignItems: 'stretch', width: '100%' }}>

          {/* LEFT — number + heading + para */}
          <div className="sec03-left" style={{
            flex: '0 0 340px',
            padding: '10px 24px 10px 0',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            borderRight: '1px solid rgba(255,255,255,0.06)',
          }}>
            <div style={{ fontSize: '32px', fontWeight: 900, color: '#FF7A00', fontFamily: 'monospace', lineHeight: 1, marginBottom: 8 }}>03</div>
            <h2 className="section-num-heading" style={{
              fontSize: 'clamp(20px, 1.8vw, 26px)',
              fontWeight: 900, color: '#fff',
              textTransform: 'uppercase',
              lineHeight: 1.15, letterSpacing: '-0.2px', marginBottom: 10,
            }}>
              WHAT MAKES GLOBAL SOC<br/>RARE &amp; POWERFUL
            </h2>
            <p style={{ fontSize: '13px', color: '#A0A0A0', lineHeight: 1.6, margin: 0 }}>
              You won't find all of this together anywhere else.
            </p>
          </div>

          {/* RIGHT — 5 icon columns with vertical dividers */}
          <div className="sec03-right" style={{ flex: 1, display: 'flex' }}>
            {features03.map((item, i) => (
              <div key={i} style={{
                flex: 1,
                padding: '24px 12px',
                borderRight: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'
              }}>
                {/* Icon */}
                <div style={{ marginBottom: '8px' }}>
                  <img src={item.iconPath} alt="" style={{ width: '160px', height: '160px', objectFit: 'contain' }} />
                </div>
                {/* Title */}
                <div style={{
                  fontSize: '14px', fontWeight: 800, color: '#fff',
                  textTransform: 'uppercase', letterSpacing: '0.4px',
                  lineHeight: 1.3, marginBottom: 8,
                  whiteSpace: 'pre-line',
                }}>
                  {item.title}
                </div>
                {/* Description */}
                <div style={{ fontSize: '12px', color: '#A0A0A0', lineHeight: 1.55, whiteSpace: 'pre-line' }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .sec03-section {
            padding: 34px 80px !important;
          }
          @media (max-width: 991px) {
            .sec03-section {
              padding: 34px 40px !important;
            }
            .sec03-wrap {
              flex-direction: column !important;
            }
            .sec03-left {
              flex: none !important;
              width: 100% !important;
              border-right: none !important;
              border-bottom: none !important;
              padding: 24px 0 0 0 !important;
              text-align: left !important;
            }
            .sec03-right {
              flex-wrap: wrap !important;
              justify-content: center !important;
              gap: 16px !important;
              padding-top: 8px !important;
            }
            .sec03-right > div {
              flex: 1 1 30% !important;
              border-right: none !important;
            }
          }
          @media (max-width: 767px) {
            .sec03-section {
              padding: 34px 20px !important;
            }
            .sec03-right > div {
              flex: 1 1 45% !important;
            }
          }
          @media (max-width: 767px) {
            .section-num-heading {
              font-size: 24px !important;
            }
          }
        `}</style>
      </section>

      {/* ── 04: ALWAYS CURRENT. ALWAYS RELEVANT. ── */}
      <section className="sec04-section" style={{ background: '#000000', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="sec04-grid">

          {/* ── LEFT ── */}
          <div className="sec04-left" style={{ flex: '0 0 340px', padding: '10px 0 10px 0' }}>
            <div style={{ fontSize: '32px', fontWeight: 900, color: '#FF7A00', lineHeight: 1, marginBottom: 8, fontFamily: 'monospace' }}>04</div>
            <h2 style={{
              fontSize: 'clamp(20px, 1.8vw, 26px)',
              fontWeight: 900, color: '#fff',
              textTransform: 'uppercase',
              lineHeight: 1.15, letterSpacing: '-0.2px',
              marginBottom: 10,
              whiteSpace: 'nowrap'
            }}>
              ALWAYS CURRENT.<br/>ALWAYS RELEVANT.
            </h2>
            <p style={{ fontSize: '13px', color: '#A0A0A0', lineHeight: 1.6, margin: '0 0 16px' }}>
              Cyber threats evolve every day.<br/>So do we.
            </p>
            <p style={{ fontSize: '13px', color: '#A0A0A0', lineHeight: 1.6, margin: 0 }}>
              We update our content, tools,<br/>
              and labs almost every day to<br/>
              ensure what you learn today<br/>
              is what works in the real world.
            </p>
          </div>

          {/* ── CENTER — image ── */}
          <div className="sec04-center" style={{ flex: '0 0 460px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="/assets/Images/always-current-image.png"
              alt="Always Current"
              style={{ width: '460px', height: '460px', objectFit: 'contain', display: 'block', transform: 'translateX(40px)' }}
            />
          </div>

          {/* ── RIGHT — 4 feature rows ── */}
          <div className="sec04-right" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '10px 60px 10px 140px' }}>
            {[
              {
                iconPath: '/assets/icons/updated-every-day.png',
                title: 'UPDATED ALMOST EVERY DAY',
                desc: 'New threats. New techniques. New content.\nAlways up to date.',
              },
              {
                iconPath: '/assets/icons/relevant-today.png',
                title: 'RELEVANT TODAY. CRITICAL TOMORROW.',
                desc: "What you learn is based on what's happening now—\nnot yesterday.",
              },
              {
                iconPath: '/assets/icons/real-attacks.png',
                title: 'REAL ATTACKS. REAL LEARNINGS.',
                desc: 'We update based on live threats, CVEs, tools,\nand adversary behavior.',
              },
              {
                iconPath: '/assets/icons/stay-ahead.png',
                title: 'STAY AHEAD, ALWAYS.',
                desc: 'We keep you ahead of cybercriminals—and\nthe competition.',
              },
            ].map((item, i, arr) => (
              <div key={i} style={{
                display: 'flex', gap: 16, alignItems: 'center',
                paddingBottom: i < arr.length - 1 ? 16 : 0,
                marginBottom: i < arr.length - 1 ? 16 : 0,
                borderBottom: i < arr.length - 1 ? '1px dashed rgba(255,255,255,0.15)' : 'none',
              }}>
                {/* Icon */}
                <div style={{ flexShrink: 0 }}>
                  <img src={item.iconPath} alt="" style={{ width: 96, height: 96, objectFit: 'contain' }} />
                </div>
                {/* Text */}
                <div>
                  <div style={{
                    fontSize: '15px',
                    fontWeight: 800, color: '#fff',
                    textTransform: 'uppercase',
                    lineHeight: 1.3, letterSpacing: '0.4px',
                    marginBottom: 6, whiteSpace: 'pre-line',
                  }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '13px', color: '#A0A0A0', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .sec04-section {
            padding: 60px 80px !important;
          }
          .sec04-grid {
            display: grid;
            grid-template-columns: 1.1fr 1.8fr 2.1fr;
            align-items: center;
            gap: 20px;
            width: 100%;
          }
          .sec04-center img {
            width: 100% !important;
            max-width: 520px;
            height: auto !important;
            object-fit: contain;
            display: block;
            margin: 0 auto;
          }
          @media (max-width: 1200px) {
            .sec04-section {
              padding: 40px 40px !important;
            }
            .sec04-grid {
              grid-template-columns: 1fr 1fr;
              gap: 32px;
            }
            .sec04-center {
              display: none !important;
            }
            .sec04-left {
              padding: 0 !important;
            }
            .sec04-right {
              padding: 0 !important;
            }
          }
          @media (max-width: 991px) {
            .sec04-grid {
              grid-template-columns: 1fr !important;
              gap: 40px;
            }
            .sec04-left {
              text-align: left !important;
            }
            .sec04-left h2 {
              white-space: normal !important;
            }
          }
          @media (max-width: 767px) {
            .sec04-section {
              padding: 40px 20px !important;
            }
          }
        `}</style>
      </section>

      {/* ── CTA: THIS ISN'T JUST TRAINING ── */}
      <section style={{
        background: '#07090E',
        borderTop: '1px solid #2A2A2A',
        borderBottom: '1px solid #2A2A2A',
      }}>

        {/* ── TOP: CTA row + image contained here only ── */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: 242 }}>

          {/* Subtle dot texture */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            pointerEvents: 'none',
            zIndex: 0,
          }} />

          {/* Image — right 38%, only inside CTA row */}
          <div className="wgs-cta-img-wrap" style={{
            position: 'absolute', top: 0, right: 0,
            width: '38%', height: '100%',
            zIndex: 1, pointerEvents: 'none',
          }}>
            {/* Left edge fade — hides divider line */}
            <div style={{
              position: 'absolute', top: 0, left: 0,
              width: '35%', height: '100%', zIndex: 3,
              background: 'linear-gradient(to right, #07090E 0%, transparent 100%)',
            }} />
            {/* Orange glow */}
            <div style={{
              position: 'absolute', inset: 0, zIndex: 2,
              background: 'radial-gradient(ellipse at 80% 50%, rgba(255,106,0,0.35) 0%, rgba(255,106,0,0.08) 50%, transparent 75%)',
            }} />
            <img
              src="/assets/Images/cta-hero-image.png"
              alt="CTA Hero"
              style={{
                position: 'absolute', top: 0, left: 0,
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center top',
                display: 'block', zIndex: 1,
              }}
            />
          </div>

          {/* Content row — strictly aligns with section above */}
          <div className="wgs-cta-wrap" style={{
            width: '100%', padding: '0 80px',
            display: 'flex', alignItems: 'center',
            minHeight: 242, position: 'relative', zIndex: 2,
          }}>
            <div className="wgs-cta-inner" style={{
              flex: 1,
              display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '80px',
            }}>

              {/* Heading */}
              <div className="wgs-cta-heading" style={{ flex: '0 0 auto' }}>
                <h2 style={{
                  fontSize: 'clamp(28px, 3vw, 42px)',
                  fontWeight: 900, lineHeight: 1.1,
                  letterSpacing: '-0.5px', margin: 0,
                }}>
                  <span style={{ color: '#FFFFFF', display: 'block', whiteSpace: 'nowrap' }}>THIS ISN'T JUST TRAINING.</span>
                  <span style={{ color: '#FF6A00', display: 'block', whiteSpace: 'nowrap' }}>THIS IS TRANSFORMATION.</span>
                </h2>
                <p style={{
                  fontSize: '16px', fontWeight: 500, color: '#E5E5E5',
                  margin: '16px 0 0', lineHeight: 1.4, whiteSpace: 'nowrap',
                }}>
                  Your future in AI &amp; Cybersecurity starts here.
                </p>
              </div>

              {/* Form */}
              <div className="wgs-cta-form" style={{ flex: '0 0 440px' }}>
                <p style={{ fontSize: '15px', color: '#E5E5E5', lineHeight: 1.5, margin: '0 0 16px' }}>
                  Take the first step towards a future<br />built on skills that matter.
                </p>
                <div className="wgs-cta-input-row" style={{ 
                  display: 'flex', alignItems: 'center', marginBottom: 12,
                  background: '#111111', border: '1px solid #333333', borderRadius: '8px',
                  padding: '5px', overflow: 'hidden'
                }}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    style={{
                      flex: 1, minWidth: 0, height: 44,
                      background: 'transparent', border: 'none',
                      color: '#fff', fontSize: '15px',
                      padding: '0 16px', outline: 'none', fontFamily: 'inherit',
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => navigate('/contact')}
                    style={{
                      height: 44, padding: '0 24px',
                      background: '#FF6A00', border: 'none', borderRadius: '6px',
                      color: '#fff', fontWeight: 800, fontSize: '15px',
                      cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0,
                      transition: 'background 0.2s', fontFamily: 'inherit',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#FF8C00'}
                    onMouseLeave={e => e.currentTarget.style.background = '#FF6A00'}
                  >
                    Talk to an Advisor →
                  </button>
                </div>
                <p style={{ fontSize: '13px', color: '#A9A9A9', margin: 0 }}>
                  Personalized guidance. Real opportunities. Your future.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ── Bottom Features Bar — completely separate, no image ── */}
        <div style={{
          borderTop: '1px solid #2A2A2A', minHeight: 78,
          background: '#07090E', display: 'flex', alignItems: 'center', padding: '16px 0'
        }}>
          <div className="wgs-bottom-wrap" style={{
            maxWidth: 1440, margin: '0 auto', padding: '0 80px',
            display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'space-between',
          }}>
            {[
              { Icon: ShieldOff,   label: 'NO SIMULATIONS',      sub: 'ONLY REALITY' },
              { Icon: Crosshair,   label: 'NO OUTDATED CONTENT',  sub: 'ONLY WHAT WORKS' },
              { Icon: ShieldCheck, label: 'NO EMPTY PROMISES',    sub: 'ONLY REAL OUTCOMES' },
              { Icon: Target,      label: 'NO ONE-SIZE-FITS-ALL', sub: 'ONLY YOU-FOCUSED LEARNING' },
            ].map((feat, i) => (
              <div key={i} style={{
                flex: 1, display: 'flex', alignItems: 'center',
                gap: 16, paddingLeft: i > 0 ? '32px' : '0', paddingRight: i < 3 ? '32px' : '0',
                borderLeft: i > 0 ? '1px solid #2A2A2A' : 'none',
                height: '100%',
              }}>
                <feat.Icon size={32} color="#FF6A00" strokeWidth={1.5} style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', lineHeight: 1.25, textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                    {feat.label}
                  </div>
                  <div style={{ fontSize: 13, color: '#BFBFBF', lineHeight: 1.25, textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                    {feat.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          input[type="email"]::placeholder { color: #555; }
          
          @media (max-width: 1200px) {
            .wgs-cta-wrap {
              padding: 40px 40px !important;
            }
            .wgs-cta-inner {
              gap: 40px !important;
            }
            .wgs-bottom-wrap {
              padding: 0 40px !important;
            }
          }
          @media (max-width: 991px) {
            .wgs-cta-img-wrap {
              width: 100% !important;
              height: 100% !important;
              opacity: 0.12 !important;
            }
            .wgs-cta-img-wrap > div:first-child {
              display: none !important;
            }
            .wgs-cta-inner {
              flex-direction: column !important;
              text-align: center !important;
              gap: 32px !important;
            }
            .wgs-cta-heading h2 span, .wgs-cta-heading p {
              white-space: normal !important;
            }
            .wgs-cta-form {
              flex: none !important;
              width: 100% !important;
              max-width: 440px;
            }
            .wgs-bottom-wrap {
              flex-direction: column !important;
              align-items: stretch !important;
              gap: 0 !important;
            }
            .wgs-bottom-wrap > div {
              flex: none !important;
              width: 100% !important;
              border-left: none !important;
              padding: 16px 0 !important;
              border-bottom: 1px solid rgba(255,255,255,0.06) !important;
            }
            .wgs-bottom-wrap > div:last-child {
              border-bottom: none !important;
            }
          }
          @media (max-width: 767px) {
            .wgs-cta-wrap {
              padding: 40px 20px !important;
            }
            .wgs-bottom-wrap {
              padding: 0 20px !important;
            }
            .wgs-cta-form {
              max-width: 100% !important;
            }
            .wgs-cta-input-row {
              flex-direction: column !important;
              background: transparent !important;
              border: none !important;
              gap: 12px !important;
              padding: 0 !important;
              align-items: stretch !important;
            }
            .wgs-cta-input-row input {
              background: #111111 !important;
              border: 1px solid #333333 !important;
              border-radius: 8px !important;
              width: 100% !important;
              max-width: none !important;
              height: 50px !important;
              box-sizing: border-box !important;
              text-align: center !important;
            }
            .wgs-cta-input-row button {
              width: 100% !important;
              max-width: none !important;
              height: 50px !important;
              box-sizing: border-box !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              border-radius: 8px !important;
            }
          }
        `}</style>
      </section>

    </div>
  );
}
