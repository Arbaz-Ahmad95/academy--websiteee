import React, { useState } from 'react';
import { Target, Shield, Monitor, Users, RefreshCw, GraduationCap, Lightbulb, Quote, Rocket as RocketLucide, UserCheck, User, Settings, TrendingUp, BadgeCheck, ArrowRight } from 'lucide-react';
import './SuccessStoriesPage.css';

const ShieldIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 2.5l7.5 3v5.2c0 5-3.2 8.4-7.5 10.3-4.3-1.9-7.5-5.3-7.5-10.3V5.5l7.5-3z" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RocketIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 2.5c2.2 1.6 3.8 4.4 3.8 8 0 2.4-.8 4.6-1.9 6.3l-1.9 1.7-1.9-1.7c-1.1-1.7-1.9-3.9-1.9-6.3 0-3.6 1.6-6.4 3.8-8z" strokeLinejoin="round" />
    <circle cx="12" cy="9.5" r="1.6" />
    <path d="M9 15.5l-2.5 1.5.6-3M15 15.5l2.5 1.5-.6-3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 20.5c0-1 .9-1.8 2-1.8s2 .8 2 1.8" strokeLinecap="round" />
  </svg>
);

const GrowthIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M3 20h18" strokeLinecap="round" />
    <rect x="5.5" y="13" width="3" height="7" />
    <rect x="10.5" y="9" width="3" height="11" />
    <rect x="15.5" y="5" width="3" height="15" />
    <path d="M5 8l4.5-4L13 7.5 19 3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 3h4v4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StarIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7L12 3z" strokeLinejoin="round" />
  </svg>
);

const ShieldChatIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.5l7.5 3v5.2c0 5-3.2 8.4-7.5 10.3-4.3-1.9-7.5-5.3-7.5-10.3V5.5l7.5-3z" />
    <path d="M8.7 9.8h6.6M8.7 12.4h4" />
  </svg>
);

const ShieldStarIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.5l7.5 3v5.2c0 5-3.2 8.4-7.5 10.3-4.3-1.9-7.5-5.3-7.5-10.3V5.5l7.5-3z" />
    <path d="M12 7.8l1.3 2.6 2.9.4-2.1 2 .5 2.9-2.6-1.4-2.6 1.4.5-2.9-2.1-2 2.9-.4L12 7.8z" strokeLinejoin="round" />
  </svg>
);

const SkillIcon = ({ size = 26, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="M21 21l-4.3-4.3" />
    <path d="M7.5 11l1.5-2 1.5 3 1.5-2.5 1.5 1.5" />
  </svg>
);

const ExposureIcon = ({ size = 26, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2.5l8 4.6v9.8l-8 4.6-8-4.6V7.1l8-4.6z" />
  </svg>
);

const SupportIcon = ({ size = 26, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="M21 21l-4.3-4.3" />
    <circle cx="10.5" cy="8.7" r="1.6" />
    <path d="M7.7 13.3c0-1.5 1.3-2.4 2.8-2.4s2.8.9 2.8 2.4" />
  </svg>
);

const ResultsIcon = ({ size = 26, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 20h18" />
    <rect x="5.5" y="14" width="3" height="6" />
    <rect x="10.5" y="10" width="3" height="10" />
    <rect x="15.5" y="6" width="3" height="14" />
    <path d="M5 9l4.5-4L13 8.5 19 4" />
    <path d="M15 4h4v4" />
  </svg>
);

const TargetArrowIcon = ({ size = 56, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="11" cy="13" r="8" />
    <circle cx="11" cy="13" r="4.8" />
    <circle cx="11" cy="13" r="1.5" fill="currentColor" stroke="none" />
    <path d="M15 9l6-6M21 3h-4.5M21 3v4.5" />
  </svg>
);

const vtFilters = [
  { key: 'All Stories', label: 'All Stories', Icon: Shield },
  { key: 'Career Changers', label: 'Career Changers', Icon: RefreshCw },
  { key: 'Fresh Graduates', label: 'Fresh Graduates', Icon: GraduationCap },
  { key: 'Working Professionals', label: 'Working Professionals', Icon: Monitor },
  { key: 'Non-Technical Learners', label: 'Non-Technical Learners', Icon: Users },
];

const testimonials = [
  {
    id: 1,
    category: 'Career Changers',
    variant: 'orange',
    quote: "I was from a completely non-IT background. I never imagined I could break into cybersecurity. The hands-on labs and real-world exposure changed everything.",
    role: 'Career Changer',
    now: 'SOC Analyst',
    Icon: Shield,
  },
  {
    id: 2,
    category: 'Working Professionals',
    variant: 'blue',
    quote: "The live SOC environment gave me the confidence I never got in any classroom training. I finally feel job-ready!",
    role: 'IT Professional',
    now: 'Security Engineer',
    Icon: Monitor,
  },
  {
    id: 3,
    category: 'Career Changers',
    variant: 'orange',
    quote: "The mentors here don't just teach – they guide, challenge, and push you to think like a real analyst.",
    role: 'Career Changer',
    now: 'Threat Analyst',
    Icon: Users,
  },
  {
    id: 4,
    category: 'Working Professionals',
    variant: 'blue',
    quote: "I loved how the content is always updated. What I learned yesterday was already reflected in today's new labs!",
    role: 'Working Professional',
    now: 'Security Consultant',
    Icon: RefreshCw,
  },
  {
    id: 5,
    category: 'Fresh Graduates',
    variant: 'orange',
    quote: "They teach what actually happens out there – not what's in a book. That's what makes all the difference.",
    role: 'Fresh Graduate',
    now: 'SOC Analyst',
    Icon: GraduationCap,
  },
  {
    id: 6,
    category: 'Non-Technical Learners',
    variant: 'blue',
    quote: "I was overwhelmed by the domain. But the structured path and real use cases made it click.",
    role: 'Non-Technical Learner',
    now: 'Associate Analyst',
    Icon: Lightbulb,
  },
];

const whyChooseItems = [
  {
    iconPath: '/assets/icons/live-env-icon.png',
    title: 'LIVE ENVIRONMENT,\nNOT SIMULATIONS.',
    desc: 'Train inside a real Security Operations Center.',
  },
  {
    iconPath: '/assets/icons/real-threats-icon.png',
    title: 'REAL THREATS,\nNOT THEORY.',
    desc: 'Work with live threat intelligence and real-world data.',
  },
  {
    iconPath: '/assets/icons/real-impact-icon.png',
    title: 'REAL IMPACT,\nNOT ASSIGNMENTS.',
    desc: 'Solve real incidents and see the impact of your analyses.',
  },
  {
    iconPath: '/assets/icons/real-careers-icon.png',
    title: 'REAL CAREERS,\nNOT PROMISES.',
    desc: "From day one to your next role – we're with you all the way.",
  },
  {
    iconPath: '/assets/icons/updated-content.png',
    title: 'CONTINUOUSLY\nUPDATED CONTENT.',
    desc: 'We update our labs, tools & content almost every day.',
  },
  {
    iconPath: '/assets/icons/mentorship-icon.png',
    title: 'ONGOING CAREER\nMENTORSHIP.',
    desc: 'Mentorship, guidance and support beyond the classroom.',
  },
];

const journeySteps = [
  { label: 'They Started', color: 'orange', Icon: User, desc: 'With curiosity, zero or minimal experience.' },
  { label: 'They Learned', color: 'blue', Icon: GraduationCap, desc: 'Through real-world labs, live projects & expert mentorship.' },
  { label: 'They Practiced', color: 'orange', Icon: Settings, desc: 'In our Live SOC environment with real threats.' },
  { label: 'They Transformed', color: 'blue', Icon: TrendingUp, desc: 'Into confident professionals solving real problems.' },
  { label: 'They Succeeded', color: 'orange', Icon: BadgeCheck, desc: 'New roles. Better careers. Bigger impact.' },
];

const RealSkillsIcon = ({ size = 26, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="8" strokeDasharray="4 2" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="1" />
    <path d="M21 3l-8 8" />
    <path d="M21 3v6" />
    <path d="M21 3h-6" />
  </svg>
);

const RealExposureIcon = ({ size = 26, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
    <path d="M8 9l1 1" />
    <path d="M16 9l-1 1" />
    <path d="M4 12h2" />
    <path d="M18 12h2" />
  </svg>
);

const RealSupportIcon = ({ size = 26, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" strokeDasharray="2 2" />
    <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    <path d="M8 16c0-2 2-3 4-3s4 1 4 3" />
    <path d="M22 12h-2" />
    <path d="M4 12H2" />
    <path d="M12 2v2" />
    <path d="M12 22v-2" />
  </svg>
);

const RealResultsIcon = ({ size = 26, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 21h18" />
    <path d="M5 21v-6" />
    <path d="M11 21v-10" />
    <path d="M17 21v-14" />
    <path d="M4 10l6-6 4 4 7-7" />
    <path d="M21 1h-6" />
    <path d="M21 1v6" />
  </svg>
);

const LargeTargetIcon = ({ size = 110, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="60" cy="60" r="48" strokeDasharray="4 6" opacity="0.3" />
    <circle cx="60" cy="60" r="34" />
    <circle cx="60" cy="60" r="20" />
    <path d="M60 4v12" opacity="0.4" />
    <path d="M60 116v-12" opacity="0.4" />
    <path d="M4 60h12" opacity="0.4" />
    <path d="M116 60h-12" opacity="0.4" />
    <path d="M100 20L60 60" strokeWidth="2.5" />
    <path d="M100 20l-12 2" strokeWidth="2" />
    <path d="M100 20l-2 12" strokeWidth="2" />
    <path d="M88 22l6 6" strokeWidth="1.5" />
    <path d="M98 32l-6-6" strokeWidth="1.5" />
  </svg>
);

const QuoteOrangeIcon = ({ size = 28, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#ff7a00" className={className}>
    <path d="M9 13.5c0 2.8-2.2 5.2-5.3 6.5L2 18c2-.8 3.5-2.2 3.5-4.5H2v-8h7v8zm10.5 0c0 2.8-2.2 5.2-5.3 6.5l-1.7-2c2-.8 3.5-2.2 3.5-4.5H12.5v-8h7v8z"/>
  </svg>
);

const ctaFeatures = [
  { Icon: RealSkillsIcon, title: 'Real Skills', desc: 'Not just theory.\nSkills that matter.' },
  { Icon: RealExposureIcon, title: 'Real Exposure', desc: 'Live tools. Live threats.\nReal environment.' },
  { Icon: RealSupportIcon, title: 'Real Support', desc: 'Mentors. Community.\nCareer guidance.' },
  { Icon: RealResultsIcon, title: 'Real Results', desc: 'Job-ready skills.\nCareer transformation.' },
];

const ctaTags = [
  { Icon: Target, label: 'Learn.' },
  { Icon: Settings, label: 'Practice.' },
  { Icon: Shield, label: 'Protect.' },
  { Icon: TrendingUp, label: 'Lead.' },
];


const SpeechBubbleBackground = ({ variant }) => {
  const [size, setSize] = useState({ w: 0, h: 0 });
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      window.requestAnimationFrame(() => {
        if (!containerRef.current) return;
        setSize({
          w: entries[0].contentRect.width,
          h: entries[0].contentRect.height
        });
      });
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const { w, h } = size;
  
  if (w === 0 || h === 0) {
    return <div ref={containerRef} style={{ position: 'absolute', inset: 0, zIndex: 0 }} />;
  }

  const pad = 1;
  const wSafe = w - pad;
  const r = 18; 
  const th = 18; 
  const bottomY = h - th - pad;
  const tailBottom = h - pad;
  
  const tailCenterX = w * 0.78;
  const tStartX = Math.max(r, Math.min(tailCenterX - 14, w - r - 28));
  const tTipX = tStartX + 18;
  const tEndX = tStartX + 28;

  const path = `
    M ${pad} ${r + pad}
    A ${r} ${r} 0 0 1 ${r + pad} ${pad}
    L ${wSafe - r} ${pad}
    A ${r} ${r} 0 0 1 ${wSafe} ${r + pad}
    L ${wSafe} ${bottomY - r}
    A ${r} ${r} 0 0 1 ${wSafe - r} ${bottomY}
    L ${tEndX} ${bottomY}
    C ${tEndX - 2} ${bottomY + 6}, ${tTipX + 4} ${tailBottom}, ${tTipX} ${tailBottom}
    C ${tTipX - 8} ${tailBottom}, ${tStartX + 8} ${bottomY + 4}, ${tStartX} ${bottomY}
    L ${r + pad} ${bottomY}
    A ${r} ${r} 0 0 1 ${pad} ${bottomY - r}
    Z
  `;

  const color = variant === 'orange' ? '#FF7A00' : '#009DFF';

  return (
    <div ref={containerRef} style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className={`bubble-svg-${variant}`}>
        <path 
          d={path} 
          fill="#0C111A" 
          stroke={color} 
          strokeWidth="2" 
        />
      </svg>
    </div>
  );
};

export default function SuccessStoriesPage() {
  const [vtFilter, setVtFilter] = useState('All Stories');

  const filteredTestimonials = testimonials.filter(
    (t) => vtFilter === 'All Stories' || t.category === vtFilter
  );

  return (
    <div className="ss-page">

      {/* ══════════════════════════════════════════════════════════════
          SECTION 1 – HERO
      ══════════════════════════════════════════════════════════════ */}
      <section className="ss-hero">
        <div className="ss-hero__bg" />
        <div className="ss-hero__grid">
          <div className="ss-hero__left">
            <h1 className="ss-hero__heading">
              SUCCESS <span className="text-orange">STORIES</span>
            </h1>
            <h2 className="ss-hero__subheading">
              Real People. Real Journeys.<br />
              Real Transformation.
            </h2>
            <p className="ss-hero__paragraph">
              From career changers to freshers, IT professionals to non-technical learners – see how our learners are building future-ready careers in cybersecurity &amp; AI.
            </p>

            <div className="ss-hero__stats">
              
              <div className="ss-hero__stat">
                <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 12 }}>
                  <div style={{ flexShrink: 0, marginLeft: -16 }}>
                    <img src="/assets/icons/learners-transformed.png" alt="" style={{ width: 72, height: 72, objectFit: 'contain', objectPosition: 'left center' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="ss-hero__stat-num" style={{ marginBottom: 4, lineHeight: 1, letterSpacing: '-0.5px' }}>5000+</div>
                    <div style={{ width: '100%', height: 2, backgroundColor: '#ff6a00' }} />
                  </div>
                </div>
                <div className="ss-hero__stat-label" style={{ fontSize: '14px' }}>Learners<br />Transformed</div>
              </div>

              <div className="ss-hero__stat-divider" />
              
              <div className="ss-hero__stat">
                <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 12 }}>
                  <div style={{ flexShrink: 0, marginLeft: -16 }}>
                    <img src="/assets/icons/countries-reached.png" alt="" style={{ width: 72, height: 72, objectFit: 'contain', objectPosition: 'left center' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="ss-hero__stat-num" style={{ marginBottom: 4, lineHeight: 1, letterSpacing: '-0.5px' }}>80+</div>
                    <div style={{ width: '100%', height: 2, backgroundColor: '#ff6a00' }} />
                  </div>
                </div>
                <div className="ss-hero__stat-label" style={{ fontSize: '14px' }}>Countries<br />Reached</div>
              </div>

              <div className="ss-hero__stat-divider" />
              
              <div className="ss-hero__stat">
                <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 12 }}>
                  <div style={{ flexShrink: 0, marginLeft: -16 }}>
                    <img src="/assets/icons/career-progression.png" alt="" style={{ width: 72, height: 72, objectFit: 'contain', objectPosition: 'left center' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="ss-hero__stat-num" style={{ marginBottom: 4, lineHeight: 1, letterSpacing: '-0.5px' }}>95%</div>
                    <div style={{ width: '100%', height: 2, backgroundColor: '#ff6a00' }} />
                  </div>
                </div>
                <div className="ss-hero__stat-label" style={{ fontSize: '14px' }}>Career<br />Progression</div>
              </div>

              <div className="ss-hero__stat-divider" />
              
              <div className="ss-hero__stat">
                <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 12 }}>
                  <div style={{ flexShrink: 0, marginLeft: -16 }}>
                    <img src="/assets/icons/learner-satisfaction.png" alt="" style={{ width: 72, height: 72, objectFit: 'contain', objectPosition: 'left center' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="ss-hero__stat-num" style={{ marginBottom: 4, lineHeight: 1, letterSpacing: '-0.5px' }}>4.9/5</div>
                    <div style={{ width: '100%', height: 2, backgroundColor: '#ff6a00' }} />
                  </div>
                </div>
                <div className="ss-hero__stat-label" style={{ fontSize: '14px' }}>Learner<br />Satisfaction</div>
              </div>

            </div>
          </div>

          <div className="ss-hero__right">
            <img
              className="success-stories-image"
              src="/assets/Images/success-stories-image.png"
              alt="Success Stories"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION – VOICES OF TRANSFORMATION
      ══════════════════════════════════════════════════════════════ */}
      <section className="vt-section">
        <div className="vt-container">
          <div className="vt-heading-row">
            <span className="vt-line" />
            <h2 className="vt-heading">
              VOICES OF <span className="text-orange">TRANSFORMATION</span>
            </h2>
            <span className="vt-line" />
          </div>
          <p className="vt-subheading">Real feedback from real learners on real experiences.</p>

          <div className="vt-filters">
            {vtFilters.map((f) => (
              <button
                key={f.key}
                className={`vt-filter-btn ${vtFilter === f.key ? 'is-active' : ''}`}
                onClick={() => setVtFilter(f.key)}
              >
                <f.Icon size={18} />
                {f.label}
              </button>
            ))}
          </div>

          <div className="vt-grid">
            {filteredTestimonials.map((t) => (
              <div key={t.id} className={`vt-card vt-card--${t.variant}`}>
                <div className="vt-bubble">
                  <SpeechBubbleBackground variant={t.variant} />
                  <div className="vt-quote-wrapper">
                    <Quote size={34} strokeWidth={3} fill="currentColor" />
                  </div>
                  <p className="vt-bubble-text">{t.quote}</p>
                </div>
                <div className="vt-bottom">
                  <div className="vt-role">
                    <div className="vt-role-title">{t.role}</div>
                    <div className="vt-role-now">Now: {t.now}</div>
                  </div>
                </div>
                <div className="vt-badge">
                  <t.Icon size={24} strokeWidth={2.5} color="#FFFFFF" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION – WHY LEARNERS CHOOSE GLOBAL SOC + JOURNEYS THAT INSPIRE
      ══════════════════════════════════════════════════════════════ */}
      <section className="wc-section">
        <div className="wc-container">
          <div className="vt-heading-row">
            <span className="vt-line" />
            <h2 className="vt-heading">
              WHY LEARNERS CHOOSE <span className="text-orange">GLOBAL SOC</span>
            </h2>
            <span className="vt-line" />
          </div>

          <div className="wc-box">
            {whyChooseItems.map((item, i) => (
              <div className="wc-item" key={i}>
                <img src={item.iconPath} className="wc-icon" alt="" />
                <div className="wc-title">
                  {item.title.split('\n').map((line, li) => (
                    <React.Fragment key={li}>
                      {line}
                      {li < item.title.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
                <p className="wc-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="jt-box">
            <div className="vt-heading-row">
              <span className="vt-line" />
              <h2 className="vt-heading">
                JOURNEYS <span className="text-orange">THAT INSPIRE</span>
              </h2>
              <span className="vt-line" />
            </div>

            <div className="jt-timeline">
              {journeySteps.map((s, i) => (
                <React.Fragment key={i}>
                  <div className="jt-step">
                    <div className={`jt-circle jt-circle--${s.color}`}>
                      <s.Icon size={26} />
                    </div>
                    <div className={`jt-label jt-label--${s.color}`}>{s.label}</div>
                    <p className="jt-desc">{s.desc}</p>
                  </div>
                  {i < journeySteps.length - 1 && <span className="jt-dot" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION – YOUR STORY CAN BE NEXT (CTA)
      ══════════════════════════════════════════════════════════════ */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-box">
            <div className="cta-left">
              <h2 className="cta-heading" style={{ fontSize: '38px', fontWeight: '800', letterSpacing: '-0.5px', marginBottom: '12px' }}>
                YOUR STORY CAN BE <span className="text-orange">NEXT</span>
              </h2>
              <p className="cta-sub" style={{ fontSize: '16px', color: '#c7d0da', marginBottom: '36px', lineHeight: '1.6' }}>
                You don't need to be an expert to start.<br />
                You just need the right place to begin.
              </p>
              <div className="cta-features">
                {ctaFeatures.map((f, i) => (
                  <div className="cta-feature" key={i}>
                    <f.Icon size={36} className="cta-feature-icon" />
                    <div>
                      <div className="cta-feature-title">{f.title}</div>
                      <div className="cta-feature-desc">
                        {f.desc.split('\n').map((line, li) => (
                          <React.Fragment key={li}>
                            {line}
                            {li < f.desc.split('\n').length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="cta-right">
              <img src="/assets/icons/cta-target-icon.png" className="cta-target-icon" alt="Target" style={{ width: 280, height: 280, objectFit: 'contain', marginTop: '-50px', marginBottom: '-80px' }} />
              <p className="cta-right-text" style={{ fontSize: '15px', color: '#c7d0da', marginBottom: '2px', fontWeight: '500' }}>
                Take the first step today.
              </p>
              <p className="cta-right-text" style={{ fontSize: '17px', color: '#ffffff', marginBottom: '24px', fontWeight: '700' }}>
                The future is waiting.
              </p>
              <button 
                className="btn-orange" 
                style={{ border: '1.5px solid transparent', transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
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
                Talk to an Advisor <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="cta-quote-row">
            <div className="cta-quote">
              <QuoteOrangeIcon size={34} style={{ marginTop: '2px' }} />
              <div className="cta-quote-text">
                It's not about where you start. It's about where you're going.<br />
                We just help you get there faster, smarter, and stronger.
              </div>
              <QuoteOrangeIcon size={34} style={{ alignSelf: 'flex-end', marginBottom: '2px' }} />
            </div>
            
            <div className="cta-quote-divider" />
            
            <div className="cta-tags">
              {ctaTags.map((t, i) => (
                <span className="cta-tag" key={i}>
                  <t.Icon size={18} strokeWidth={1.5} />
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
