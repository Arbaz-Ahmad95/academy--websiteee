import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import GlobalContactForm from '../components/GlobalContactForm';
import {
  Eye, Search, Zap, Microscope, Monitor, Target, Settings2, Siren,
  Briefcase, Globe, Users, FlaskConical, Award, BookOpen,
  Shield, AlertTriangle, Activity, ArrowRight, ChevronRight,
  CheckCircle, XCircle, Home, ChevronRight as Breadcrumb, Lock, Calendar, Trophy,
  ShieldBan, Fingerprint, LineChart, Wrench, ShieldCheck
} from 'lucide-react';

function RevealSection({ children, delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; } },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref}>{children}</div>;
}

const heroTags = [
  {
    Icon: ({ size = 32, color = 'var(--orange)', ...props }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M 12 2 L 3 5 V 11 C 3 17 7 21.5 12 23 C 17 21.5 21 17 21 11 V 5 L 12 2 Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" fill="rgba(255,102,0,0.08)" />
        <path d="M 12 7 L 7 9 V 12.5 C 7 16 9.5 19 12 20 C 14.5 19 17 16 17 12.5 V 9 L 12 7 Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="9" y1="16" x2="15" y2="10.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'DETECT',
    sub: 'Threats early and accurately'
  },
  {
    Icon: ({ size = 32, color = 'var(--orange)', ...props }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="10" cy="10" r="6" stroke={color} strokeWidth="1.8" />
        <path d="M 6.8 10 A 3.2 3.2 0 0 1 10 6.8" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
        <line x1="14.5" y1="14.5" x2="20" y2="20" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
    label: 'INVESTIGATE',
    sub: 'Incidents with confidence'
  },
  {
    Icon: ({ size = 32, color = 'var(--orange)', ...props }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="12" cy="12" r="7" stroke={color} strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.5" stroke={color} strokeWidth="1.8" />
        <path d="M 12 10 L 13.8 12 L 12 14 L 10.2 12 Z" fill={color} />
        <line x1="12" y1="2.5" x2="12" y2="8.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <line x1="12" y1="15.5" x2="12" y2="21.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <line x1="2.5" y1="12" x2="8.5" y2="12" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <line x1="15.5" y1="12" x2="21.5" y2="12" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    label: 'RESPOND',
    sub: 'Fast, effective and decisive'
  },
  { Icon: Fingerprint, label: 'FORENSIC', sub: 'Analyze evidence and uncover truth' },
];

const experiences = [
  { Icon: Monitor,   label: 'Threat Monitoring',   desc: 'Monitor real security events and alerts across systems.', anim: 'anim-pulse' },
  { Icon: Search,    label: 'Threat Investigation', desc: 'Investigate incidents from initial alert to root cause.', anim: 'anim-float' },
  { Icon: Target,    label: 'Threat Hunting',       desc: 'Proactively search for adversaries and anomalies.', anim: 'anim-glow' },
  { Icon: Settings2, label: 'Security Operations',  desc: 'Run the same operations as real SOC professionals.', anim: 'anim-spin' },
];

const BenefitIcons = {
  jobReady: () => (
    <svg width="64" height="50" viewBox="0 0 46 36" fill="var(--orange)" xmlns="http://www.w3.org/2000/svg">
      {/* LEFT person body — drawn first (behind) */}
      <path d="M1 36C1 27.16 5.03 22 10 22C15 22 19 27.16 19 36Z" />
      {/* LEFT person head */}
      <circle cx="10" cy="11" r="5.5" />

      {/* RIGHT person body — drawn second (behind) */}
      <path d="M45 36C45 27.16 40.97 22 36 22C31 22 27 27.16 27 36Z" />
      {/* RIGHT person head */}
      <circle cx="36" cy="11" r="5.5" />

      {/* CENTER person body — drawn last (on top, covers inner edges of side bodies) */}
      <path d="M10 36C10 27.16 15.82 21 23 21C30.18 21 36 27.16 36 36Z" />
      {/* CENTER person head — largest, on top */}
      <circle cx="23" cy="9" r="7" />
    </svg>
  ),
  realWorld: () => (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield */}
      <path d="M22 4L6 10v12c0 9 7.2 16.5 16 19 8.8-2.5 16-10 16-19V10L22 4z"
        stroke="var(--orange)" strokeWidth="2" strokeLinejoin="round" fill="rgba(255,102,0,0.1)" />
      {/* Checkmark */}
      <polyline points="14,22 20,28 30,17" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  mentors: () => (
    <svg width="64" height="64" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head — orange circle outline */}
      <circle cx="22" cy="11" r="8.5" stroke="var(--orange)" strokeWidth="2.5" fill="none" />
      {/* Body — U-shape: starts left shoulder, sweeps DOWN, ends right shoulder */}
      {/* sweep=1 = clockwise = arc goes downward = ∪ shape */}
      <path
        d="M 10 25 A 12 12 0 0 1 34 25"
        stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" fill="none"
      />
    </svg>
  ),
  practical: () => (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer circle */}
      <circle cx="22" cy="22" r="18" stroke="var(--orange)" strokeWidth="1.8" fill="rgba(255,102,0,0.06)" />
      {/* Middle ring */}
      <circle cx="22" cy="22" r="11" stroke="var(--orange)" strokeWidth="1.6" fill="rgba(255,102,0,0.06)" />
      {/* Inner dot */}
      <circle cx="22" cy="22" r="4" stroke="var(--orange)" strokeWidth="1.8" fill="rgba(255,102,0,0.25)" />
      {/* Arrow coming from outside */}
      <line x1="36" y1="8" x2="26" y2="18" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" />
      <polyline points="30,8 36,8 36,14" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  certification: () => (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer badge / gear-like octagon */}
      <path d="M22 4l4.5 3.5 5.5-.5 2 5 4.5 3-1 5.5 2.5 5-4 3.5.5 5.5-5.5 1.5-3 4.5-5.5-1-5 2.5-5-2.5-5.5 1-3-4.5-5.5-1.5.5-5.5-4-3.5 2.5-5-1-5.5 4.5-3 2-5 5.5.5L22 4z"
        stroke="var(--orange)" strokeWidth="1.7" fill="rgba(255,102,0,0.09)" />
      {/* Star inside */}
      <polygon points="22,13 24.2,19.2 31,19.2 25.6,23 27.8,29.2 22,25.4 16.2,29.2 18.4,23 13,19.2 19.8,19.2"
        stroke="var(--orange)" strokeWidth="1.4" fill="rgba(255,102,0,0.2)" />
    </svg>
  ),
};

const benefits = [
  { Icon: BenefitIcons.jobReady,       label: 'JOB-READY SKILLS',    desc: 'Become a SOC Analyst, Incident Responder or DFIR Specialist.' },
  { imgSrc: '/assets/Images/real-world-training-icon.png',    label: 'REAL-WORLD TRAINING',  desc: 'Learn with real tools, real data and real security incidents.' },
  { imgSrc: '/assets/Images/expert-mentors-icon.png',         label: 'EXPERT MENTORS',       desc: 'Learn from active SOC professionals and incident responders.' },
  { imgSrc: '/assets/Images/practical-approach-icon.png',     label: 'PRACTICAL APPROACH',   desc: 'Hands-on labs, case studies and scenario-based learning.' },
  { imgSrc: '/assets/Images/certification-paths-icon.png',    label: 'CERTIFICATION PATHS',  desc: 'Prepare for CySA+, CEH, GCFE, GCIH & CHFI certifications.' },
];

const modules = [
  { num: '01', iconPath: '/assets/Images/module-01-icon.png', img: '/assets/Images/soc-dashboard.png',  title: 'SOC Fundamentals & Threat Landscape',                week: 'Week 1', desc: 'Build the foundation of SOC operations, understand threat landscape and intelligence.',               bullets: ['SOC roles, processes & architecture','SIEM fundamentals & log management','Threat intelligence lifecycle','MITRE ATT&CK framework','Alert triage & escalation'] },
  { num: '02', iconPath: '/assets/Images/module-02-icon.png', img: null,                                  title: 'Network Security Monitoring & Traffic Analysis',      week: 'Week 2', desc: 'Monitor networks, analyze traffic and detect malicious activity in real time.',                       bullets: ['Network protocols & packet analysis','IDS/IPS monitoring & tuning','Firewall, proxy & VPN log analysis','Anomaly detection techniques','MITRE ATT&CK mapping'] },
  { num: '03', iconPath: '/assets/Images/module-03-icon.png', img: null,                                  title: 'Endpoint Detection & Threat Hunting',                 week: 'Week 3', desc: 'Detect, hunt and analyze threats on endpoints using industry-leading tools.',                       bullets: ['EDR platforms & telemetry analysis','Malware analysis (static & dynamic)','Memory forensics with Volatility','YARA rules & IOC identification','Proactive threat hunting'] },
  { num: '04', iconPath: '/assets/Images/module-04-icon.png', img: null,                                  title: 'Digital Forensics & Analysis',                        week: 'Week 4', desc: 'Conduct forensically sound investigations and analyze digital evidence.',                          bullets: ['Forensic process & methodology','Disk imaging & file system analysis','Memory forensics & artifact analysis','Timeline analysis & log correlation','Chain of custody & reporting'] },
  { num: '05', iconPath: '/assets/Images/module-05-icon.png', img: null,                                  title: 'Incident Response & Recovery',                        week: 'Week 5', desc: 'Master the full incident response lifecycle using the NIST framework.',                          bullets: ['NIST SP 800-61 incident lifecycle','Containment, eradication & recovery','Ransomware & BEC response','Cloud incident response','Post-incident reporting & lessons learned'] },
  { num: '06', iconPath: '/assets/Images/module-06-icon.png', img: null,                                  title: 'Capstone, Case Studies & Certification Preparation',  week: 'Week 6', desc: 'Apply your skills in real-world scenarios and prepare for leading certifications.',               bullets: ['End-to-end capstone investigation','Real-world case studies & analysis','Report writing & presentation','Cert mapping: CySA+, CEH, GCFE, GCIH & CHFI'] },
];

const industries = [
  { iconPath: '/assets/Images/icon-nist.png',       label: 'NIST',       sub: 'Cybersecurity Framework' },
  { iconPath: '/assets/Images/icon-mitre.png',      label: 'MITRE',      sub: 'ATT&CK™' },
  { iconPath: '/assets/Images/icon-nist.png',       label: 'NIST',       sub: 'SP 800-61 Incident Response' },
  { iconPath: '/assets/Images/icon-nist.png',       label: 'NIST',       sub: 'SP 800-86 Forensics Guide' },
  { iconPath: '/assets/Images/icon-ec-council.png', label: 'EC-COUNCIL', sub: 'Methodologies' },
  { iconPath: '/assets/Images/icon-sans.png',       label: 'SANS',       sub: 'Methodologies' },
];


const alerts = [
  { label: 'Multiple failed logins', time: '10:23 AM', type: 'CRITICAL' },
  { label: 'Malware detected', time: '10:31 AM', type: 'HIGH' },
  { label: 'Suspicious PowerShell activity', time: '10:33 AM', type: 'HIGH' },
  { label: 'Data exfiltration detected', time: '10:37 AM', type: 'CRITICAL' },
];

const incidentsList = [
  { sev:'HIGH',   sevColor:'#ff4444', name:'Brute Force Attack',    src:'185.199.108.23', time:'10:24:15' },
  { sev:'HIGH',   sevColor:'#ff4444', name:'Suspicious PowerShell', src:'10.0.0.45',      time:'10:21:07' },
  { sev:'MEDIUM', sevColor:'#ff8800', name:'Impossible Travel',     src:'172.16.5.10',    time:'10:17:32' },
  { sev:'MEDIUM', sevColor:'#ff8800', name:'Privilege Escalation',  src:'192.168.1.77',   time:'10:16:09' },
  { sev:'LOW',    sevColor:'#ffcc00', name:'Malware Detected',      src:'10.0.0.58',      time:'10:12:50' },
];

const recentAlertsList = [
  { time:'2026-06-08 10:24:15', sev:'HIGH',   msg:'Brute Force Attack Detected from 185.199.108.23' },
  { time:'2026-06-08 10:22:07', sev:'HIGH',   msg:'Suspicious PowerShell Execution on WIN-DC-02' },
  { time:'2026-06-08 10:17:21', sev:'MEDIUM', msg:'Impossible Travel Detected for user: jsmith' },
  { time:'2026-06-08 10:14:09', sev:'MEDIUM', msg:'Privilege Escalation Attempt on Server:192.168.1.77' },
  { time:'2026-06-08 10:12:50', sev:'LOW',    msg:'Malware Detected: Trojan.GenericKD.603761' },
];

const attackSourcesList = [
  { ip:'185.199.108.23', count:1245, pct:100 },
  { ip:'103.21.244.0',   count:865,  pct:69  },
  { ip:'172.16.5.10',    count:452,  pct:36  },
  { ip:'192.168.1.77',   count:221,  pct:18  },
  { ip:'10.0.0.45',      count:189,  pct:15  },
];

const whatYouExperience = [
  { Icon: LineChart,            title:'Threat Monitoring',      desc:'Monitor real security events and alerts across networks, endpoints, cloud and applications.' },
  { Icon: Search,               title:'Incident Investigation', desc:'Investigate incidents from initial alert to root cause and timeline reconstruction.' },
  { Icon: Fingerprint,          title:'Digital Forensics',      desc:'Analyze systems, evidence and attack artefacts using industry-grade forensics tools.' },
  { Icon: Target,               title:'Threat Hunting',         desc:'Hunt for hidden threats and attacker behavior using MITRE ATT&CK frameworks.' },
  { Icon: Users,                title:'Security Operations',    desc:'Understand how a real SOC operates, collaborates and responds to security incidents.' },
];

export default function SOCDFIRPage() {
  const attackRef = useRef(null);
  const [attackAnimated, setAttackAnimated] = useState(false);
  const [activeDiffTab, setActiveDiffTab] = useState('gs');

  useEffect(() => {
    const el = attackRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAttackAnimated(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const headingRef = useRef(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeadingVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const diffRef = useRef(null);
  const [diffVisible, setDiffVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const el = diffRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setDiffVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#000' }}>

        {/* ── Two-column: left dark | right image ── */}
        <div className="soc-hero-inner" style={{ display: 'flex', alignItems: 'stretch', minHeight: 520 }}>

          {/* LEFT — solid dark bg, text */}
          <div className="soc-hero-left" style={{ flex: '0 0 52%', background: '#000', padding: '40px 40px 40px 90px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 2 }}>

            {/* Breadcrumb */}
            <nav className="soc-hero-line" style={{ animationDelay: '0ms', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--text-muted)' }}>
              <Link to="/" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}><Home size={12} />Home</Link>
              <Breadcrumb size={12} /><span>Courses</span>
              <Breadcrumb size={12} /><span style={{ color: 'var(--orange)' }}>SOC + DFIR Specialist</span>
            </nav>

            {/* Badge */}
            <div className="soc-hero-line" style={{ animationDelay: '80ms', marginBottom: 18 }}>
              <div className="badge-pill"><Shield size={13} /> Professional Certificate Program</div>
            </div>

            {/* Heading */}
            <h1 style={{ fontSize: 'clamp(48px, 6.5vw, 86px)', fontWeight: 900, lineHeight: 0.95, marginBottom: 14, color: '#fff', textTransform: 'uppercase' }}>
              <span className="soc-hero-line" style={{ animationDelay: '160ms' }}>SOC + DFIR</span><br />
              <span className="soc-hero-line" style={{ animationDelay: '280ms', color: 'var(--orange)' }}>SPECIALIST</span>
            </h1>

            {/* Tagline */}
            <h2 style={{ fontSize: 'clamp(16px, 1.9vw, 24px)', fontWeight: 800, color: '#fff', marginBottom: 2, lineHeight: 1.35 }}>
              <span className="soc-hero-line" style={{ animationDelay: '380ms' }}>TRAIN INSIDE A <span style={{ color: 'var(--orange)' }}>LIVE SOC.</span></span>
            </h2>
            <h3 style={{ fontSize: 'clamp(14px, 1.6vw, 20px)', fontWeight: 700, color: '#fff', marginBottom: 16, lineHeight: 1.35 }}>
              <span className="soc-hero-line" style={{ animationDelay: '460ms' }}>
                <span style={{ color: 'var(--orange)' }}>NOT</span> A CLASSROOM. <span style={{ color: 'var(--orange)' }}>NOT</span> A SIMULATION.
              </span>
            </h3>

            {/* Divider */}
            <div className="soc-hero-line" style={{ animationDelay: '530ms', height: 1, background: 'rgba(255,255,255,0.15)', marginBottom: 16, width: '90%' }} />

            {/* Description */}
            <p className="soc-hero-line" style={{ animationDelay: '590ms', fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: 24, maxWidth: 460 }}>
              Master Security Operations, Threat Detection, Incident Response and Digital Forensics inside a real Security Operations Centre used by professionals every day.
            </p>

            {/* Feature tags — 4-col desktop, 2×2 mobile */}
            <div className="soc-hero-tags" style={{ animationDelay: '660ms' }}>
              {heroTags.map((t, idx) => (
                <div key={t.label} className="soc-hero-tag-item">
                  {/* Icon left, label+subtext right */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 2 }}>
                      <t.Icon size={28} strokeWidth={1.5} color="var(--orange)" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      <p style={{ fontSize: 11, fontWeight: 800, color: 'var(--orange)', letterSpacing: '0.8px', margin: 0 }}>{t.label}</p>
                      <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.65)', lineHeight: 1.4, margin: 0 }}>{t.sub}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — image only */}
          <div className="soc-hero-right" style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
            <img
              src="/assets/Images/soc-dashboard.png"
              alt="Live SOC"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block' }}
            />
            {/* Blend edge with left dark column */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #000 0%, rgba(0,0,0,0.3) 15%, transparent 35%)' }} />

             {/* BUILT ON INDUSTRY STANDARDS — bottom of right column */}
            <div className="soc-industry-panel" style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3,
              background: 'rgba(0,0,0,0.82)', backdropFilter: 'blur(8px)',
              borderTop: '1px solid rgba(255,102,0,0.35)',
              padding: '10px 16px',
            }}>
              <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: '2px', color: 'var(--orange)', textTransform: 'uppercase', marginBottom: 4 }}>
                BUILT ON INDUSTRY STANDARDS
              </p>

              {/* THREE GROUPS divided by vertical lines */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: 0,
              }}>
                {/* GROUP 1: NIST & MITRE */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                    <img src="/assets/Images/icon-nist.png" alt="NIST"
                      style={{ width: 'auto', height: 76, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                    <p style={{ fontSize: 8, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.6px', textTransform: 'uppercase', textAlign: 'center', margin: 0, lineHeight: 1.35, marginTop: -16 }}>
                      Cybersecurity<br/>Framework
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                    <img src="/assets/Images/icon-mitre.png" alt="MITRE"
                      style={{ width: 'auto', height: 64, objectFit: 'contain', filter: 'brightness(0) invert(1)', marginTop: 6 }} />
                    <p style={{ fontSize: 8, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.6px', textTransform: 'uppercase', textAlign: 'center', margin: 0, lineHeight: 1.35, marginTop: -16 }}>
                      ATT&amp;CK™
                    </p>
                  </div>
                </div>

                {/* DIVIDER */}
                <div style={{ width: 1, height: 50, background: 'rgba(255,255,255,0.15)' }} />

                {/* GROUP 2: NIST 800-61 & NIST 800-86 */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                    <img src="/assets/Images/icon-nist.png" alt="NIST"
                      style={{ width: 'auto', height: 76, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                    <p style={{ fontSize: 8, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.6px', textTransform: 'uppercase', textAlign: 'center', margin: 0, lineHeight: 1.35, marginTop: -16 }}>
                      SP 800-61<br/>Incident Response
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                    <img src="/assets/Images/icon-nist.png" alt="NIST"
                      style={{ width: 'auto', height: 76, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                    <p style={{ fontSize: 8, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.6px', textTransform: 'uppercase', textAlign: 'center', margin: 0, lineHeight: 1.35, marginTop: -16 }}>
                      SP 800-86<br/>Forensics Guide
                    </p>
                  </div>
                </div>

                {/* DIVIDER */}
                <div style={{ width: 1, height: 50, background: 'rgba(255,255,255,0.15)' }} />

                {/* GROUP 3: EC-COUNCIL & SANS */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, justifyContent: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0 }}>
                    <img src="/assets/Images/icon-ec-council.png" alt="EC-COUNCIL"
                      style={{ width: 'auto', height: 76, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                    <img src="/assets/Images/icon-sans.png" alt="SANS"
                      style={{ width: 'auto', height: 76, objectFit: 'contain', filter: 'brightness(0) invert(1)', marginLeft: -52 }} />
                  </div>
                  <p style={{ fontSize: 8, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.6px', textTransform: 'uppercase', textAlign: 'center', margin: 0, lineHeight: 1.35, marginTop: -16, width: '100%' }}>
                    Methodologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BENEFITS BAR ── */}
        <div style={{ borderTop: '1px solid rgba(255,102,0,0.18)', background: '#0d0d0d' }}>
          <div className="soc-benefits-bar" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', padding: '0 40px 0 90px' }}>
            {benefits.map((b, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '16px 14px',
                borderRight: i < benefits.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}>
                {/* SVG Icon or custom logo image — no extra wrapper padding */}
                {b.imgSrc
                  ? <img src={b.imgSrc} alt={b.label} style={{ width: 44, height: 44, objectFit: 'contain', flexShrink: 0 }} />
                  : <b.Icon />}
                {/* Text */}
                <div>
                  <p style={{ fontSize: 11, fontWeight: 800, color: '#fff', marginBottom: 3, letterSpacing: '0.5px', textTransform: 'uppercase', lineHeight: 1.2 }}>{b.label}</p>
                  <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.52)', lineHeight: 1.45, margin: 0 }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REAL EXPERIENCE ── */}
      <section className="soc-section-experience" style={{ background: '#05080f', borderTop: '2px solid rgba(255,102,0,0.35)', padding: '18px 40px 0' }}>

        {/* Centered Header */}
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: 14 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7, border: '1px solid rgba(255,255,255,0.25)', borderRadius: 999, padding: '4px 14px', marginBottom: 8,
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? 'translateY(0)' : 'translateY(28px)',
            filter: headingVisible ? 'blur(0px)' : 'blur(4px)',
            transition: 'opacity 0.65s ease 0ms, transform 0.65s ease 0ms, filter 0.65s ease 0ms',
          }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--orange)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Experience the Real SOC</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 3.4vw, 46px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: 2,
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? 'translateY(0)' : 'translateY(32px)',
            filter: headingVisible ? 'blur(0px)' : 'blur(5px)',
            transition: 'opacity 0.7s ease 120ms, transform 0.7s ease 120ms, filter 0.7s ease 120ms',
          }}>
            You're Not Learning About Attacks.
          </h2>
          <h2 className="text-orange" style={{
            fontSize: 'clamp(34px, 4.6vw, 60px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 12,
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? 'translateY(0)' : 'translateY(32px)',
            filter: headingVisible ? 'blur(0px)' : 'blur(5px)',
            transition: 'opacity 0.7s ease 260ms, transform 0.7s ease 260ms, filter 0.7s ease 260ms',
          }}>
            You're Working Where They Happen.
          </h2>
          <p style={{
            fontSize: 15, color: 'rgba(255,255,255,0.5)', maxWidth: 620, margin: '0 auto', lineHeight: 1.65,
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? 'translateY(0)' : 'translateY(24px)',
            filter: headingVisible ? 'blur(0px)' : 'blur(4px)',
            transition: 'opacity 0.65s ease 400ms, transform 0.65s ease 400ms, filter 0.65s ease 400ms',
          }}>
            Unlike traditional training providers that rely on simulations and sample datasets,
            GlobalSOC gives you exposure to real-world security operations,
            investigations and incident response workflows used by security professionals every day.
          </p>
        </div>

        <div className="soc-real-exp-layout" style={{ display: 'flex', gap: 28, alignItems: 'flex-start', position: 'relative' }}>

          {/* LEFT — SOC Dashboard */}
          <div className="soc-dashboard-panel" style={{ flex: '0 0 56%', background: '#0a0a14', border: '1px solid rgba(255,102,0,0.12)', borderRadius: 14, overflow: 'hidden' }}>

            {/* Header */}
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#ff4444' }} className="anim-pulse" />
              <span style={{ fontSize: 10, color: '#ffffff', letterSpacing: '2px', fontFamily: 'monospace' }}>LIVE THREAT MAP</span>
              <span style={{ marginLeft: 'auto', fontSize: 9, color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace' }}>GlobalSOC Operations Centre</span>
            </div>

            {/* World Map + Active Incidents */}
            <div className="soc-map-incidents" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              {/* World Map */}
              <div style={{ height: 130, background: '#060a10', position: 'relative', overflow: 'hidden', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                <img
                  src="/assets/Images/threat-map.png"
                  alt="Global Threat Map"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                />
                <div style={{ position:'absolute',bottom:6,left:10,fontSize:8,color:'rgba(255,255,255,0.2)',letterSpacing:'1px',fontFamily:'monospace' }}>GLOBAL THREAT MAP — LIVE</div>
              </div>

              {/* Active Incidents */}
              <div style={{ padding: '12px 14px' }}>
                <p style={{ fontSize: 9, color: '#ffffff', letterSpacing: '1.5px', marginBottom: 8, fontFamily:'monospace' }}>ACTIVE INCIDENTS</p>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      {['SECURITY','INCIDENT NAME','SOURCE','TIME'].map(h => (
                        <th key={h} style={{ fontSize:8,color:'rgba(255,255,255,0.25)',fontWeight:600,padding:'3px 4px',textAlign:'left',letterSpacing:'0.5px' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {incidentsList.map((inc,i) => (
                      <tr key={i} style={{ borderBottom:'1px solid rgba(255,255,255,0.03)' }}>
                        <td style={{ padding:'5px 4px' }}>
                          <span style={{ fontSize:8,fontWeight:700,color:inc.sevColor,background:`${inc.sevColor}22`,padding:'2px 5px',borderRadius:3,fontFamily:'monospace' }}>{inc.sev}</span>
                        </td>
                        <td style={{ fontSize:9,color:'rgba(255,255,255,0.65)',padding:'5px 4px',fontFamily:'monospace' }}>{inc.name}</td>
                        <td style={{ fontSize:8,color:'rgba(255,255,255,0.35)',padding:'5px 4px',fontFamily:'monospace' }}>{inc.src}</td>
                        <td style={{ fontSize:8,color:'rgba(255,255,255,0.3)',padding:'5px 4px',fontFamily:'monospace' }}>{inc.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Threat Activity | Alert Breakdown | Top Attack Sources */}
            <div className="soc-threat-row" style={{ display:'grid', gridTemplateColumns:'1fr 0.75fr 1fr', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
              {/* Threat Activity */}
              <div style={{ padding:'6px 10px', borderRight:'1px solid rgba(255,255,255,0.05)', overflow:'hidden' }}>
                <p style={{ fontSize:9, color:'#ffffff', letterSpacing:'1.5px', marginBottom:4, fontFamily:'monospace' }}>THREAT ACTIVITY (24H)</p>
                <img src="/assets/Images/threat-activity-chart.png" alt="Threat Activity" style={{ width:'100%', height:'60px', objectFit:'fill', display:'block', borderRadius:3 }} />
              </div>

              {/* Alert Breakdown */}
              <div style={{ padding:'6px 10px', borderRight:'1px solid rgba(255,255,255,0.05)' }}>
                <p style={{ fontSize:9,color:'#ffffff',letterSpacing:'1.5px',marginBottom:4,fontFamily:'monospace' }}>ALERT BREAKDOWN</p>
                <div style={{ display:'flex',alignItems:'center',gap:8 }}>
                  <div style={{ width:52,height:52,borderRadius:'50%',background:'conic-gradient(#ff4444 0% 28%,#ff8800 28% 69%,#ffcc00 69% 90%,#4caf50 90% 100%)',flexShrink:0,position:'relative' }}>
                    <div style={{ position:'absolute',inset:8,borderRadius:'50%',background:'#0a0a14',display:'flex',alignItems:'center',justifyContent:'center' }}>
                      <span style={{ fontSize:7,fontWeight:700,color:'#fff',fontFamily:'monospace' }}>2,784</span>
                    </div>
                  </div>
                  <div style={{ fontSize:8,display:'flex',flexDirection:'column',gap:3 }}>
                    {[{c:'#ff4444',l:'High',p:'28%'},{c:'#ff8800',l:'Medium',p:'41%'},{c:'#ffcc00',l:'Low',p:'21%'},{c:'#4caf50',l:'Info',p:'10%'}].map(x=>(
                      <div key={x.l} style={{ display:'flex',alignItems:'center',gap:4 }}>
                        <div style={{ width:5,height:5,borderRadius:'50%',background:x.c }} />
                        <span style={{ color:'rgba(255,255,255,0.45)',fontFamily:'monospace' }}>{x.l}</span>
                        <span style={{ color:'rgba(255,255,255,0.25)',marginLeft:4,fontFamily:'monospace' }}>{x.p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Top Attack Sources */}
              <div ref={attackRef} style={{ padding:'6px 10px' }}>
                <p style={{ fontSize:9,color:'#ffffff',letterSpacing:'1.5px',marginBottom:4,fontFamily:'monospace' }}>TOP ATTACK SOURCES</p>
                {attackSourcesList.map((s,i)=>(
                  <div key={i} style={{ marginBottom:3 }}>
                    <div style={{ display:'flex',justifyContent:'space-between',fontSize:8,color:'rgba(255,255,255,0.4)',marginBottom:2,fontFamily:'monospace' }}>
                      <span>{s.ip}</span><span style={{ color:'rgba(255,255,255,0.25)' }}>{s.count}</span>
                    </div>
                    <div style={{ height:3,background:'rgba(255,255,255,0.06)',borderRadius:2,overflow:'hidden' }}>
                      <div style={{
                        height:'100%',
                        width: attackAnimated ? `${s.pct}%` : '0%',
                        background:'#2196f3',
                        borderRadius:2,
                        transition: `width 1.1s cubic-bezier(0.22,1,0.36,1) ${i * 140}ms`,
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Alerts */}
            <div style={{ padding:'5px 12px 8px' }}>
              <p style={{ fontSize:9,color:'rgba(255,255,255,0.2)',letterSpacing:'1.5px',marginBottom:4,fontFamily:'monospace' }}>RECENT ALERT</p>
              {recentAlertsList.map((a,i)=>(
                <div key={i} style={{ fontSize:9,marginBottom:2,lineHeight:1.4,display:'flex',gap:8,fontFamily:'monospace' }}>
                  <span style={{ color:'rgba(255,255,255,0.2)',flexShrink:0 }}>{a.time}</span>
                  <span style={{ color:a.sev==='HIGH'?'#ff4444':a.sev==='MEDIUM'?'#ff8800':'#ffcc00',flexShrink:0,fontWeight:700 }}>[{a.sev}]</span>
                  <span style={{ color:'rgba(255,255,255,0.55)' }}>{a.msg}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — What You'll Experience */}
          <div className="soc-experience-panel" style={{ flex: 1, paddingTop: 8 }}>
            <h2 style={{ fontSize:'clamp(18px,2.2vw,26px)',fontWeight:900,color:'#fff',marginBottom:12,lineHeight:1.2 }}>
              What You'll Experience
            </h2>
            {whatYouExperience.map((e,i)=>(
              <div key={i} style={{ display:'flex',gap:16,marginBottom:18 }}>
                {e.Icon && (
                  <div style={{ 
                    flexShrink:0, 
                    width: 44, 
                    height: 44, 
                    borderRadius: '50%', 
                    border: '1px solid rgba(255, 102, 0, 0.4)', 
                    background: 'rgba(10, 15, 25, 0.8)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    boxShadow: '0 0 15px rgba(255, 102, 0, 0.05)'
                  }}>
                    {e.title === 'Threat Monitoring' ? (
                      <div style={{ position: 'relative', width: 20, height: 20 }}>
                        <Monitor size={20} color="#7ba4cc" strokeWidth={1.5} style={{ position: 'absolute', top: 0, left: 0 }} />
                        <LineChart size={10} color="#7ba4cc" strokeWidth={2} style={{ position: 'absolute', top: 4, left: 5 }} />
                      </div>
                    ) : (
                      <e.Icon size={20} color="#7ba4cc" strokeWidth={1.5} />
                    )}
                  </div>
                )}
                <div style={{ paddingTop: 2 }}>
                  <p style={{ fontSize:15,fontWeight:700,color:'var(--orange)',marginBottom:4 }}>{e.title}</p>
                  <p style={{ fontSize:13,color:'rgba(255,255,255,0.6)',lineHeight:1.5 }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Experience Features Bar (Threats, Tools, Decisions) */}
        <div className="soc-real-exp-bar" style={{
          marginTop: 32,
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.07)',
          borderRadius: 12,
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20,
          width: '100%'
        }}>
          {/* Column 1: Real Threats */}
          <div className="soc-real-exp-col" style={{ display: 'flex', gap: 16, alignItems: 'center', flex: 1 }}>
            <img 
              src="/assets/Images/real-threats-icon.png" 
              alt="Real Threats" 
              style={{ 
                width: 64, 
                height: 64, 
                objectFit: 'contain', 
                flexShrink: 0,
                filter: 'invert(1) hue-rotate(180deg)',
                mixBlendMode: 'screen'
              }} 
            />
            <div>
              <p style={{ fontSize: 14, fontWeight: 800, color: '#fff', marginBottom: 2 }}>Real Threats.</p>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.4, margin: 0 }}>Work on live attacks happening now.</p>
            </div>
          </div>

          {/* Divider */}
          <div className="soc-real-exp-divider" style={{ width: 1, height: 44, background: 'rgba(255,255,255,0.08)', flexShrink: 0 }} />

          {/* Column 2: Real Tools */}
          <div className="soc-real-exp-col" style={{ display: 'flex', gap: 16, alignItems: 'center', flex: 1, paddingLeft: 12 }}>
            <img 
              src="/assets/Images/real-tools-icon.png" 
              alt="Real Tools" 
              style={{ 
                width: 64, 
                height: 64, 
                objectFit: 'contain', 
                flexShrink: 0,
                filter: 'invert(1) hue-rotate(180deg)',
                mixBlendMode: 'screen'
              }} 
            />
            <div>
              <p style={{ fontSize: 14, fontWeight: 800, color: '#fff', marginBottom: 2 }}>Real Tools.</p>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.4, margin: 0 }}>Use industry-leading security platforms and technologies.</p>
            </div>
          </div>

          {/* Divider */}
          <div className="soc-real-exp-divider" style={{ width: 1, height: 44, background: 'rgba(255,255,255,0.08)', flexShrink: 0 }} />

          {/* Column 3: Real Decisions */}
          <div className="soc-real-exp-col" style={{ display: 'flex', gap: 16, alignItems: 'center', flex: 1, paddingLeft: 12 }}>
            <div style={{ width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Users size={48} color="#ff6600" strokeWidth={2} />
            </div>
            <div>
              <p style={{ fontSize: 14, fontWeight: 800, color: '#fff', marginBottom: 2 }}>Real Decisions.</p>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.4, margin: 0 }}>Make the same decisions SOC analysts make every day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES DIFFERENT ── */}
      <section className="soc-section-diff" style={{ background: '#0f0f18', padding: '52px 40px' }}>
        <div className="soc-diff-layout" style={{ display:'flex',gap:32,alignItems:'flex-start' }}>

          {/* Left — comparison table */}
          <div className="soc-diff-left" style={{ flex:'0 0 56%' }}>
            <h2 style={{ fontSize:'clamp(28px,3.4vw,46px)',fontWeight:900,color:'#fff',marginBottom:28 }}>
              What Makes GlobalSOC <span style={{ color:'var(--orange)' }}>Different?</span>
            </h2>
            <div style={{ borderRadius:12,overflow:'hidden',border:'1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr' }}>
                <div 
                  onClick={() => setActiveDiffTab('trad')}
                  style={{ 
                    background: activeDiffTab === 'trad' ? 'var(--orange)' : 'rgba(255,255,255,0.04)',
                    color: activeDiffTab === 'trad' ? '#fff' : 'rgba(255,255,255,0.4)',
                    padding:'10px 20px',
                    borderRight:'1px solid rgba(255,255,255,0.08)',
                    cursor: 'pointer',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (activeDiffTab !== 'trad') e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    if (activeDiffTab !== 'trad') e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  }}
                >
                  <p style={{ fontSize:11,fontWeight:700,letterSpacing:'1.5px',textTransform:'uppercase',margin:0 }}>TRADITIONAL TRAINING</p>
                </div>
                <div 
                  onClick={() => setActiveDiffTab('gs')}
                  style={{ 
                    background: activeDiffTab === 'gs' ? 'var(--orange)' : 'rgba(255,255,255,0.04)',
                    color: activeDiffTab === 'gs' ? '#fff' : 'rgba(255,255,255,0.4)',
                    padding:'10px 20px',
                    cursor: 'pointer',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (activeDiffTab !== 'gs') e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    if (activeDiffTab !== 'gs') e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  }}
                >
                  <p style={{ fontSize:11,fontWeight:700,letterSpacing:'1.5px',textTransform:'uppercase',margin:0 }}>GLOBALSOC</p>
                </div>
              </div>
              <div ref={diffRef}>
              {[
                ['Simulated attacks',      'Real-world scenarios'],
                ['Sample datasets',        'Operational security data'],
                ['Theory-first',           'Experience-first'],
                ['Certification focused',  'Job-readiness focused'],
                ['Learning about SOC',     'Working inside SOC workflows'],
              ].map(([trad,gs],i)=>{
                const isTradActive = activeDiffTab === 'trad';
                const isGsActive = activeDiffTab === 'gs';
                return (
                  <div key={i} style={{
                    display:'grid', gridTemplateColumns:'1fr 1fr', borderTop:'1px solid rgba(255,255,255,0.05)',
                    opacity: diffVisible ? 1 : 0,
                    transform: diffVisible ? 'translateX(0)' : 'translateX(-24px)',
                    transition: `opacity 0.6s ease ${i * 140}ms, transform 0.6s ease ${i * 140}ms`,
                  }}>
                    <div style={{ 
                      padding:'12px 20px',
                      display:'flex',
                      alignItems:'center',
                      gap:10,
                      borderRight:'1px solid rgba(255,255,255,0.05)',
                      background: isTradActive ? 'rgba(255,255,255,0.02)' : 'transparent',
                      transition: 'all 0.3s ease',
                    }}>
                      <XCircle size={16} style={{ 
                        color: isTradActive ? '#ff4444' : 'rgba(255,255,255,0.15)', 
                        flexShrink:0,
                        transition: 'all 0.3s ease',
                      }} />
                      <span style={{ 
                        fontSize:13,
                        color: isTradActive ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)',
                        fontWeight: isTradActive ? 600 : 400,
                        transition: 'all 0.3s ease',
                      }}>{trad}</span>
                    </div>
                    <div style={{ 
                      padding:'12px 20px',
                      display:'flex',
                      alignItems:'center',
                      gap:10,
                      background: isGsActive ? 'rgba(255,102,0,0.02)' : 'transparent',
                      transition: 'all 0.3s ease',
                    }}>
                      <CheckCircle size={16} style={{
                        color: isGsActive ? 'var(--orange)' : 'rgba(255,255,255,0.15)', 
                        flexShrink:0,
                        transform: diffVisible ? 'scale(1)' : 'scale(0)',
                        transition: `transform 0.4s cubic-bezier(0.34,1.56,0.64,1) ${i * 140 + 200}ms, color 0.3s ease`,
                      }} />
                      <span style={{ 
                        fontSize:13,
                        color: isGsActive ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)',
                        fontWeight: isGsActive ? 600 : 400,
                        transition: 'all 0.3s ease',
                      }}>{gs}</span>
                    </div>
                  </div>
                );
              })}
              </div>
            </div>
          </div>

          {/* Right — Certification quote */}
          <div style={{ flex:1, position:'relative', overflow:'hidden', border:'1px solid rgba(255,102,0,0.2)', borderRadius:16, padding:'36px 32px', display:'flex', flexDirection:'column', justifyContent:'center', minHeight:340 }}>

            {/* Blurred bg image */}
            <div style={{
              position:'absolute', inset:0,
              backgroundImage:"url('/assets/Images/soc-dashboard.png')",
              backgroundSize:'cover', backgroundPosition:'center',
              filter:'blur(4px) brightness(0.12)',
              transform:'scale(1.06)',
            }} />

            {/* Orange gradient overlay */}
            <div style={{
              position:'absolute', inset:0,
              background:'linear-gradient(135deg, rgba(255,102,0,0.12) 0%, rgba(0,0,0,0.55) 100%)',
            }} />

            {/* Content */}
            <div style={{ position:'relative', zIndex:2 }}>
              <div className="soc-cert-header-row" style={{ display:'flex', alignItems:'center', gap:20, marginBottom:20 }}>
                <div className="soc-cert-icon" style={{ width:200,height:200,flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center' }}>
                  <img src="/assets/Images/cert-experience-icon.png" alt="Certification" style={{ width:'100%',height:'100%',objectFit:'contain' }} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <p className="soc-cert-text" style={{ fontSize:'clamp(20px,2.2vw,28px)',fontWeight:900,color:'#fff',lineHeight:1.2,marginBottom:10 }}>
                    Certification Proves Knowledge.
                  </p>
                  <p className="soc-cert-text" style={{ fontSize:'clamp(20px,2.2vw,28px)',fontWeight:900,color:'var(--orange)',lineHeight:1.2 }}>
                    Experience Proves Capability.
                  </p>
                </div>
              </div>
              <p style={{ fontSize:14,color:'rgba(255,255,255,0.6)',lineHeight:1.65 }}>
                We don't just prepare you for exams.<br />We prepare you for the real world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODULES ── */}
      <section className="soc-section-modules" style={{ background: 'linear-gradient(180deg, #060812 0%, #090b12 100%)', padding: '48px 40px 36px', borderTop: '2px solid rgba(255,102,0,0.35)' }}>
        {/* Header — same badge/heading style as Experience section */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, border: '1px solid rgba(255,255,255,0.25)', borderRadius: 999, padding: '4px 14px', marginBottom: 10 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--orange)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>The Complete Learning Journey</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 46px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: 10 }}>
            6 Modules. <span className="text-orange">Progressive Mastery.</span>
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', maxWidth: 560, margin: '0 auto', lineHeight: 1.65 }}>
            From SOC fundamentals to advanced digital forensics — built on industry frameworks and real-world scenarios.
          </p>
        </div>

        {/* Module Cards — 3×2 grid */}
        <div className="soc-module-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }}>
          {modules.map((mod, i) => {
            const accentGradients = [
              'linear-gradient(135deg, #c62828 0%, #450000 100%)',
              'linear-gradient(135deg, #1565c0 0%, #0a1f4e 100%)',
              'linear-gradient(135deg, #d84315 0%, #3e1500 100%)',
              'linear-gradient(135deg, #6a1b9a 0%, #200030 100%)',
              'linear-gradient(135deg, #00695c 0%, #001f1a 100%)',
              'linear-gradient(135deg, #c77800 0%, #3e2200 100%)',
            ];
            return (
              <div
                key={mod.num}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  position: 'relative', overflow: 'hidden',
                  background: hoveredCard === i ? '#0e1422' : '#0b0f1a',
                  border: `1px solid ${hoveredCard === i ? 'rgba(255,102,0,0.65)' : 'rgba(255,102,0,0.2)'}`,
                  borderRadius: 12,
                  transform: hoveredCard === i ? 'translateY(-6px) scale(1.01)' : 'translateY(0) scale(1)',
                  boxShadow: hoveredCard === i ? '0 16px 40px rgba(255,102,0,0.18), 0 0 0 1px rgba(255,102,0,0.1)' : 'none',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  minHeight: 330,
                }}
              >
                {/* Scan line on hover */}
                {hoveredCard === i && (
                  <div style={{
                    position: 'absolute', left: 0, right: 0, height: 2, zIndex: 10,
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,102,0,0.8) 50%, transparent 100%)',
                    animation: 'modScanLine 1.1s ease forwards',
                    pointerEvents: 'none',
                  }} />
                )}

                {/* Left side content wrapper (58% width) */}
                <div style={{
                  width: '58%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  zIndex: 2,
                  boxSizing: 'border-box'
                }}>
                  {/* Content */}
                  <div style={{ padding: '14px 0 0 14px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
                      <div style={{
                        width: 48,
                        height: 48,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      }}>
                        {mod.num === '03' ? (
                          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                            {/* Outer circle badge outline in orange */}
                            <circle cx="24" cy="24" r="18" stroke="var(--orange)" strokeWidth="1.8" fill="rgba(255,102,0,0.04)" />
                            {/* Magnifying glass circle in orange */}
                            <circle cx="21" cy="21" r="7" stroke="var(--orange)" strokeWidth="1.8" fill="none" />
                            {/* Reflection line inside magnifying glass */}
                            <path d="M17.5 19.5 A 4.5 4.5 0 0 1 20.5 17.5" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                            {/* Handle of magnifying glass in orange */}
                            <line x1="26.5" y1="26.5" x2="32.5" y2="32.5" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" />
                          </svg>
                                                ) : (
                          <img 
                            src={mod.iconPath} 
                            alt={mod.title} 
                            style={{ 
                              width: 48, 
                              height: 48, 
                              objectFit: 'contain', 
                              transform: `scale(${
                                mod.num === '01' ? 1.2 :
                                mod.num === '04' ? 1.7 :
                                mod.num === '05' ? 1.2 :
                                mod.num === '06' ? 1.2 :
                                1.7
                              })`,
                              ...((mod.num === '01' || mod.num === '05' || mod.num === '06') ? {
                                filter: 'invert(1) hue-rotate(180deg)',
                                mixBlendMode: 'screen'
                              } : {})
                            }} 
                          />
                        )}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 1 }}>
                        <span style={{ fontSize: 9, fontWeight: 800, color: 'var(--orange)', letterSpacing: '1px', textTransform: 'uppercase' }}>MODULE {mod.num}</span>
                        <h3 style={{ fontSize: 'clamp(13px, 1.3vw, 15px)', fontWeight: 800, color: '#fff', lineHeight: 1.25, margin: 0 }}>
                          {mod.num === '01' ? (
                            <>SOC Fundamentals &<br />Threat Landscape</>
                          ) : mod.num === '03' ? (
                            <>Endpoint Detection &<br />Threat Hunting</>
                          ) : mod.num === '05' ? (
                            <>Incident Response &<br />Recovery</>
                          ) : mod.num === '06' ? (
                            <>Capstone, Case Studies &<br />Certification Preparation</>
                          ) : mod.title}
                        </h3>
                      </div>
                    </div>
                    <p style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.65)', lineHeight: 1.45, marginBottom: 8, paddingRight: 6 }}>
                      {mod.num === '06' ? (
                        <>Apply your skills in real-world scenarios<br />and prepare for leading certifications.</>
                      ) : mod.desc}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 0 }}>
                      {mod.bullets.map(b => (
                        <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 6 }}>
                          <CheckCircle size={12} style={{ color: 'var(--orange)', flexShrink: 0, marginTop: 1 }} />
                          <span style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.8)', lineHeight: 1.4 }}>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '10px 14px 0', paddingTop: 10, paddingBottom: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--orange)' }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.5px' }}>6 HOURS</span>
                      </div>
                      <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: 12 }}>|</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <span style={{ fontSize: 10, fontWeight: 800, color: '#fff', letterSpacing: '0.5px' }}>{mod.week.toUpperCase()}</span>
                        {mod.num === '06' && (
                          <div style={{ fontSize: 10, fontWeight: 800, color: 'var(--orange)', letterSpacing: '1px', marginTop: 2, textTransform: 'uppercase' }}>CAPSTONE WEEK</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side container (42% width) */}
                <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '42%', overflow: 'hidden', zIndex: 1 }}>
                  {mod.img ? (
                    <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${mod.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  ) : mod.num === '02' ? (
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'rgba(0,10,28,0.6)' }}>
                      {/* Network topology panel */}
                      <div style={{ flex: '0 0 56%', borderBottom: '1px solid rgba(0,100,200,0.3)', overflow: 'hidden' }}>
                        <div style={{ padding: '3px 8px 2px', fontSize: 6, color: 'rgba(0,180,255,0.65)', letterSpacing: '1px', fontFamily: 'monospace', borderBottom: '1px solid rgba(0,100,200,0.2)' }}>NETWORK TOPOLOGY</div>
                        <svg width="100%" viewBox="0 0 160 72" fill="none" style={{ display: 'block' }}>
                          <line x1="80" y1="36" x2="34" y2="17" stroke="rgba(0,180,255,0.35)" strokeWidth="1"/>
                          <line x1="80" y1="36" x2="126" y2="17" stroke="rgba(0,180,255,0.35)" strokeWidth="1"/>
                          <line x1="80" y1="36" x2="24" y2="52" stroke="rgba(0,180,255,0.35)" strokeWidth="1"/>
                          <line x1="80" y1="36" x2="136" y2="52" stroke="rgba(0,180,255,0.35)" strokeWidth="1"/>
                          <line x1="80" y1="36" x2="58" y2="62" stroke="rgba(0,180,255,0.35)" strokeWidth="1"/>
                          <line x1="80" y1="36" x2="102" y2="62" stroke="rgba(0,180,255,0.35)" strokeWidth="1"/>
                          <line x1="34" y1="17" x2="126" y2="17" stroke="rgba(0,180,255,0.14)" strokeWidth="0.7"/>
                          <line x1="24" y1="52" x2="58" y2="62" stroke="rgba(0,180,255,0.14)" strokeWidth="0.7"/>
                          <line x1="136" y1="52" x2="102" y2="62" stroke="rgba(0,180,255,0.14)" strokeWidth="0.7"/>
                          <line x1="14" y1="27" x2="34" y2="17" stroke="rgba(0,180,255,0.18)" strokeWidth="0.5"/>
                          <line x1="148" y1="29" x2="126" y2="17" stroke="rgba(0,180,255,0.18)" strokeWidth="0.5"/>
                          <circle cx="80" cy="36" r="8" fill="rgba(0,90,230,0.55)" stroke="rgba(0,180,255,0.95)" strokeWidth="1.2"/>
                          <circle cx="80" cy="36" r="13" stroke="rgba(0,180,255,0.18)" strokeWidth="1" fill="none"/>
                          <circle cx="34" cy="17" r="5" fill="rgba(0,55,180,0.6)" stroke="rgba(0,180,255,0.75)" strokeWidth="1"/>
                          <circle cx="126" cy="17" r="5" fill="rgba(0,55,180,0.6)" stroke="rgba(0,180,255,0.75)" strokeWidth="1"/>
                          <circle cx="24" cy="52" r="4" fill="rgba(0,55,180,0.5)" stroke="rgba(0,180,255,0.6)" strokeWidth="1"/>
                          <circle cx="136" cy="52" r="4" fill="rgba(0,55,180,0.5)" stroke="rgba(0,180,255,0.6)" strokeWidth="1"/>
                          <circle cx="58" cy="62" r="3.5" fill="rgba(0,55,180,0.5)" stroke="rgba(0,180,255,0.55)" strokeWidth="1"/>
                          <circle cx="102" cy="62" r="3.5" fill="rgba(0,55,180,0.5)" stroke="rgba(0,180,255,0.55)" strokeWidth="1"/>
                          <circle cx="14" cy="27" r="2.5" fill="none" stroke="rgba(0,180,255,0.32)" strokeWidth="0.7"/>
                          <circle cx="148" cy="29" r="2.5" fill="none" stroke="rgba(0,180,255,0.32)" strokeWidth="0.7"/>
                        </svg>
                      </div>
                      {/* Freq bar chart panel */}
                      <div style={{ flex: 1, overflow: 'hidden', background: 'rgba(10,4,2,0.5)' }}>
                        <div style={{ padding: '3px 8px 2px', fontSize: 6, color: 'rgba(255,120,0,0.65)', letterSpacing: '1px', fontFamily: 'monospace', borderBottom: '1px solid rgba(255,60,0,0.2)' }}>WAVE FREQ MEASURE</div>
                        <svg width="100%" viewBox="0 0 160 44" style={{ display: 'block' }}>
                          <text x="1" y="9"  fontSize="4.5" fill="rgba(255,255,255,0.28)" fontFamily="monospace">40</text>
                          <text x="1" y="21" fontSize="4.5" fill="rgba(255,255,255,0.28)" fontFamily="monospace">20</text>
                          <text x="1" y="33" fontSize="4.5" fill="rgba(255,255,255,0.28)" fontFamily="monospace">10</text>
                          <line x1="12" y1="8"  x2="158" y2="8"  stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
                          <line x1="12" y1="20" x2="158" y2="20" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
                          <line x1="12" y1="32" x2="158" y2="32" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
                          {[14,24,9,28,18,32,13,35,22,30,12,27,20,37,23,15,31,9,26,20,30,12,24,33,20,15,26,36,22,11,16,28,22,32,19,11].map((h, idx) => (
                            <rect key={idx} x={12 + idx * 4} y={40 - h} width="3" height={h} fill="rgba(210,35,18,0.88)" rx="0.4"/>
                          ))}
                          <line x1="12" y1="40" x2="156" y2="40" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5"/>
                        </svg>
                      </div>
                    </div>
                  ) : mod.num === '03' ? (
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#05070f', fontSize: 7, fontFamily: 'monospace' }}>
                      {/* Boxed Alert Panel matching screenshot */}
                      <div style={{ border: '1px solid #7f1d1d', borderRadius: 5, overflow: 'hidden', background: '#05070f', margin: '8px 8px 4px 8px', flexShrink: 0 }}>
                        <div style={{ background: '#7f1d1d', padding: '4px 6px', display: 'flex', alignItems: 'center', gap: 5 }}>
                          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#ff3333', boxShadow: '0 0 5px #ff3333' }} />
                          <span style={{ fontSize: 7.5, fontWeight: 700, color: '#fff', letterSpacing: '0.8px' }}>ALERT DETECTED</span>
                        </div>
                        <div style={{ padding: '5px 6px' }}>
                          <div style={{ color: 'rgba(255,255,255,0.95)', fontSize: 7.5, fontWeight: 700, marginBottom: 1 }}>Suspicious Behavior</div>
                          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 6.8, marginBottom: 3 }}>Process Injection</div>
                          <div style={{ fontSize: 6.8 }}>Severity: <span style={{ color: '#ef4444', fontWeight: 700 }}>High</span></div>
                        </div>
                      </div>
                      
                      {/* Monospace process details card */}
                      <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 4, padding: '5px 6px', margin: '0 8px', flexShrink: 0 }}>
                        {[
                          ['Process:', 'rundll32.exe'],
                          ['PID:', '4524'],
                          ['User:', 'jsmith'],
                          ['MITRE:', 'ATT&CK T1055'],
                          ['Status:', 'Investigation active']
                        ].map(([k,v]) => (
                          <div key={k} style={{ display: 'flex', gap: 4, marginBottom: 2 }}>
                            <span style={{ color: 'rgba(255,255,255,0.3)', minWidth: 38 }}>{k}</span>
                            <span style={{ color: k === 'Status:' ? '#ff7700' : 'rgba(255,255,255,0.85)' }}>{v}</span>
                          </div>
                        ))}
                      </div>

                      {/* Small red waveform line chart */}
                      <div style={{ padding: '0 8px', flexShrink: 0, marginTop: 3 }}>
                        <svg height="18" width="100%" viewBox="0 0 100 18" style={{ display: 'block' }}>
                          <path d="M0 13 L8 11 L16 15 L24 6 L32 10 L40 2 L48 13 L56 1 L64 8 L72 14 L80 7 L88 12 L96 15 L100 9" fill="none" stroke="#ef4444" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>

                      {/* Large Concentric locks target centered at the bottom */}
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, paddingBottom: 6, paddingTop: 2 }}>
                        <div style={{ position: 'relative', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {/* Concentric rings detailed SVG */}
                          <svg viewBox="0 0 44 44" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                            {/* Outer dotted ring */}
                            <circle cx="22" cy="22" r="19" stroke="rgba(239,68,68,0.18)" strokeWidth="0.8" strokeDasharray="2 2" />
                            {/* Mid dashed ring */}
                            <circle cx="22" cy="22" r="15" stroke="rgba(239,68,68,0.4)" strokeWidth="0.8" strokeDasharray="4 2" />
                            {/* Inner ring */}
                            <circle cx="22" cy="22" r="10" stroke="rgba(239,68,68,0.65)" strokeWidth="1" />
                            {/* Crosshairs */}
                            <line x1="22" y1="2" x2="22" y2="5" stroke="#ef4444" strokeWidth="0.8" />
                            <line x1="22" y1="39" x2="22" y2="42" stroke="#ef4444" strokeWidth="0.8" />
                            <line x1="2" y1="22" x2="5" y2="22" stroke="#ef4444" strokeWidth="0.8" />
                            <line x1="39" y1="22" x2="42" y2="22" stroke="#ef4444" strokeWidth="0.8" />
                          </svg>
                          {/* DITTO Lock Icon centered */}
                          <Lock size={9} style={{ color: '#ef4444', zIndex: 2 }} />
                        </div>
                      </div>
                    </div>
                  ) : mod.num === '04' ? (
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'rgba(0,4,14,0.85)', fontSize: 7, fontFamily: 'monospace', color: 'rgba(255,255,255,0.5)' }}>
                      <div style={{ flex: '0 0 53%', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '7px 8px 5px', overflow: 'hidden' }}>
                        <div style={{ color: '#ff9900', marginBottom: 3 }}>📁 Case-2026-05-08</div>
                        <div style={{ marginLeft: 8, color: '#ffaa55', marginBottom: 3 }}>📁 Evidence</div>
                        {['📄 Disk Image (E01)','📄 System.evtx','📄 Security.evtx','📄 Application.evtx','🗜 USB_Artifact.zip','💾 Memory.dmp'].map(f => (
                          <div key={f} style={{ marginLeft: 16, marginBottom: 2, fontSize: 6.5 }}>{f}</div>
                        ))}
                      </div>
                      <div style={{ flex: 1, padding: '6px 8px', overflow: 'hidden' }}>
                        <div style={{ color: '#ff9900', marginBottom: 3, letterSpacing: '0.5px' }}>Timeline</div>
                        <div style={{ color: 'rgba(255,255,255,0.28)', marginBottom: 5, fontSize: 6 }}>2026-05-08</div>
                        {[{t:'10:24:15',w:80,c:'#ff6600'},{t:'10:25:31',w:52,c:'#ff4400'},{t:'10:26:42',w:35,c:'#1a6bff'},{t:'10:27:10',w:62,c:'#cc2200'}].map(({t,w,c}) => (
                          <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 5 }}>
                            <span style={{ color: 'rgba(255,255,255,0.38)', minWidth: 34, fontSize: 6 }}>{t}</span>
                            <div style={{ height: 6, width: w, background: c, borderRadius: 2, opacity: 0.85 }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : mod.num === '05' ? (
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,5,18,0.55)' }}>
                      <svg viewBox="12 12 136 136" width="92%" style={{ maxHeight: '88%' }}>
                        <path d="M 30 51 A 58 58 0 0 1 80 22 L 80 56 A 24 24 0 0 0 59 68 Z" fill="#1a2b5e"/>
                        <path d="M 80 22 A 58 58 0 0 1 130 51 L 101 68 A 24 24 0 0 0 80 56 Z" fill="#0d3a7a"/>
                        <path d="M 130 51 A 58 58 0 0 1 130 109 L 101 92 A 24 24 0 0 0 101 68 Z" fill="#b85200"/>
                        <path d="M 130 109 A 58 58 0 0 1 80 138 L 80 104 A 24 24 0 0 0 101 92 Z" fill="#194040"/>
                        <path d="M 80 138 A 58 58 0 0 1 30 109 L 59 92 A 24 24 0 0 0 80 104 Z" fill="#0a4a2e"/>
                        <path d="M 30 109 A 58 58 0 0 1 30 51 L 59 68 A 24 24 0 0 0 59 92 Z" fill="#ae5f00"/>
                        <line x1="80" y1="80" x2="30"  y2="51"  stroke="rgba(0,5,20,0.95)" strokeWidth="2"/>
                        <line x1="80" y1="80" x2="80"  y2="22"  stroke="rgba(0,5,20,0.95)" strokeWidth="2"/>
                        <line x1="80" y1="80" x2="130" y2="51"  stroke="rgba(0,5,20,0.95)" strokeWidth="2"/>
                        <line x1="80" y1="80" x2="130" y2="109" stroke="rgba(0,5,20,0.95)" strokeWidth="2"/>
                        <line x1="80" y1="80" x2="80"  y2="138" stroke="rgba(0,5,20,0.95)" strokeWidth="2"/>
                        <line x1="80" y1="80" x2="30"  y2="109" stroke="rgba(0,5,20,0.95)" strokeWidth="2"/>
                        <circle cx="80" cy="80" r="58" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5"/>
                        <circle cx="80" cy="80" r="24" fill="#060e20"/>
                        <circle cx="80" cy="80" r="24" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                        <text x="80" y="78" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="white" fontFamily="sans-serif">NIST</text>
                        <text x="80" y="87" textAnchor="middle" fontSize="5" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">SP 800-61</text>
                        <text x="60"  y="46"  textAnchor="middle" fontSize="10" fontWeight="700" fill="white" fontFamily="sans-serif">1</text>
                        <text x="101" y="46"  textAnchor="middle" fontSize="10" fontWeight="700" fill="white" fontFamily="sans-serif">2</text>
                        <text x="122" y="82"  textAnchor="middle" fontSize="10" fontWeight="700" fill="white" fontFamily="sans-serif">3</text>
                        <text x="101" y="118" textAnchor="middle" fontSize="10" fontWeight="700" fill="white" fontFamily="sans-serif">4</text>
                        <text x="60"  y="118" textAnchor="middle" fontSize="10" fontWeight="700" fill="white" fontFamily="sans-serif">5</text>
                        <text x="38"  y="82"  textAnchor="middle" fontSize="10" fontWeight="700" fill="white" fontFamily="sans-serif">6</text>
                        <text x="60"  y="55"  textAnchor="middle" fontSize="5.5" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">Preparation</text>
                        <text x="101" y="55"  textAnchor="middle" fontSize="5.5" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">Identification</text>
                        <text x="122" y="90"  textAnchor="middle" fontSize="5.5" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">Conta-</text>
                        <text x="122" y="96"  textAnchor="middle" fontSize="5.5" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">inment</text>
                        <text x="101" y="127" textAnchor="middle" fontSize="5.5" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">Eradication</text>
                        <text x="60"  y="127" textAnchor="middle" fontSize="5.5" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">Recovery</text>
                        <text x="38"  y="90"  textAnchor="middle" fontSize="5.5" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">Lessons</text>
                        <text x="38"  y="96"  textAnchor="middle" fontSize="5.5" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">Learned</text>
                      </svg>
                    </div>
                  ) : mod.num === '06' ? (
                    <div style={{
                      position: 'absolute', left: 0, right: 0, top: 0, bottom: 20, overflow: 'hidden',
                      backgroundImage: "url('/assets/extracted/SOC_DFIR/image3.png')",
                      backgroundSize: '700% auto',
                      backgroundPosition: '100% 79%',
                      backgroundRepeat: 'no-repeat',
                      filter: 'brightness(1.45) contrast(1.1) saturate(1.15)',
                    }} />
                  ) : (
                    <div style={{ position: 'absolute', inset: 0, background: accentGradients[i], opacity: 0.28 }} />
                  )}

                  {/* Seam fade to blend transition at the border */}
                  <div style={{
                    position: 'absolute', left: 0, top: 0, bottom: 0, width: 24,
                    background: `linear-gradient(to right, ${hoveredCard === i ? '#0e1422' : '#0b0f1a'}, transparent)`
                  }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div className="soc-bottom-bar-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr 1fr', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, overflow: 'hidden' }}>
          {/* Built for Real-World Impact */}
          <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '18px 20px', borderRight: '1px solid rgba(255,255,255,0.07)' }}>
            <div style={{ width: 38, height: 38, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/assets/Images/real-world-impact-icon.png" alt="Real World Impact" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 800, color: '#fff', marginBottom: 4 }}>Built for Real-World Impact</p>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>Every module is led by SOC and DFIR professionals with years of field experience.</p>
            </div>
          </div>
          {/* Frameworks You Will Master */}
          <div style={{ padding: '8px 24px', borderRight: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ fontSize: 10, fontWeight: 700, color: '#fff', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 8, textAlign: 'center' }}>
              Frameworks You Will Master
            </p>
            
            {/* The single wrapper box enclosing all logos */}
            <div className="soc-frameworks-box" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: '10px 16px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 6,
            }}>
              {/* GROUP 1: NIST & MITRE */}
              <div className="soc-fw-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                <img src="/assets/Images/icon-nist.png" alt="NIST"
                  style={{ width: 'auto', height: 60, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                <p style={{ fontSize: 7, fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.4px', textTransform: 'uppercase', textAlign: 'center', margin: 0, lineHeight: 1.2, marginTop: -9 }}>
                  Cybersecurity<br/>Framework
                </p>
              </div>

              <div className="soc-fw-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                <img src="/assets/Images/icon-mitre.png" alt="MITRE"
                  style={{ width: 'auto', height: 48, objectFit: 'contain', filter: 'brightness(0) invert(1)', marginTop: 6 }} />
                <p style={{ fontSize: 7, fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.4px', textTransform: 'uppercase', textAlign: 'center', margin: 0, lineHeight: 1.2, marginTop: -6 }}>
                  ATT&amp;CK™
                </p>
              </div>

              {/* DIVIDER */}
              <div className="soc-fw-divider" style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.1)' }} />

              <div className="soc-fw-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                <img src="/assets/Images/icon-nist.png" alt="NIST"
                  style={{ width: 'auto', height: 60, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                <p style={{ fontSize: 7, fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.4px', textTransform: 'uppercase', textAlign: 'center', margin: 0, lineHeight: 1.2, marginTop: -9 }}>
                  SP 800-61<br/>Incident Response
                </p>
              </div>

              <div className="soc-fw-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                <img src="/assets/Images/icon-nist.png" alt="NIST"
                  style={{ width: 'auto', height: 60, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                <p style={{ fontSize: 7, fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.4px', textTransform: 'uppercase', textAlign: 'center', margin: 0, lineHeight: 1.2, marginTop: -9 }}>
                  SP 800-86<br/>Forensics Guide
                </p>
              </div>

              {/* DIVIDER */}
              <div className="soc-fw-divider" style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.1)' }} />

              {/* GROUP 3: EC-COUNCIL & SANS */}
              <div className="soc-fw-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0 }}>
                  <img src="/assets/Images/icon-ec-council.png" alt="EC-COUNCIL"
                    style={{ width: 'auto', height: 60, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                  <img src="/assets/Images/icon-sans.png" alt="SANS" className="soc-sans-icon"
                    style={{ width: 'auto', height: 60, objectFit: 'contain', filter: 'brightness(0) invert(1)', marginLeft: -40 }} />
                </div>
                <p style={{ fontSize: 7, fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.4px', textTransform: 'uppercase', textAlign: 'center', margin: 0, lineHeight: 1.2, marginTop: -9, width: '100%' }}>
                  EC-Council &amp; SANS
                </p>
              </div>
            </div>
          </div>
          {/* Live Weekend Sessions */}
          <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '18px 20px' }}>
            <div style={{ width: 38, height: 38, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/assets/Images/live-sessions-icon.png" alt="Live Sessions" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 800, color: '#fff', marginBottom: 4 }}>Live Weekend Sessions</p>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>Learn in a real SOC with real analysts. Next cohort details shared after registration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section className="soc-section-pad" style={{ background: 'var(--bg-card)', padding: '88px 0', overflowX: 'hidden' }} id="register">
        <div className="container-xl">
          <RevealSection>
            <div className="row g-5 align-items-center justify-content-center">
              <div className="col-12 col-lg-5 contact-info-col">
                <div className="section-label mb-3">Register Your Interest</div>
                <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 46px)', fontWeight: 900, marginBottom: 16, color: '#fff' }}>
                  Start Your SOC &amp; DFIR <span style={{ color: 'var(--orange)' }}>Career Today.</span>
                </h2>
                <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 28 }}>
                  Seats are limited. Submit your interest and our team will reach out with cohort dates and full program details.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    { Icon: Shield,    text: 'Live SOC Training Environment' },
                    { Icon: Activity,  text: 'Real Threats & Incidents' },
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

      <style>{`
        @keyframes modScanLine {
          0%   { top: -2px; opacity: 1; }
          100% { top: 102%; opacity: 0; }
        }

        @keyframes socHeroLineIn {
          from {
            opacity: 0;
            transform: translateY(36px);
            filter: blur(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0px);
          }
        }
        .soc-hero-line {
          display: inline-block;
          opacity: 0;
          animation: socHeroLineIn 0.72s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* SOC+DFIR Responsive */

        /* ── Tablet (≤ 1023px) ── */
        @media (max-width: 1023px) {
          .soc-hero-inner { flex-direction: column !important; min-height: auto !important; }
          .soc-hero-left  { flex: none !important; width: 100% !important; padding: 50px 32px 40px 40px !important; }
          .soc-hero-right { flex: none !important; width: 100% !important; height: 300px !important; }

          .soc-benefits-bar  { grid-template-columns: repeat(3, 1fr) !important; padding: 0 24px !important; }
          .soc-benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }

          .soc-section-experience { padding: 20px 28px 0 !important; }
          .soc-real-exp-layout    { flex-direction: column !important; gap: 18px !important; }
          .soc-dashboard-panel    { flex: none !important; width: 100% !important; }
          .soc-experience-panel   { padding-top: 0 !important; }
          .soc-lock-icon          { display: none !important; }
          .soc-real-cards-grid    { grid-template-columns: repeat(3, 1fr) !important; }

          .soc-real-exp-bar     { flex-wrap: wrap !important; justify-content: flex-start !important; }
          .soc-real-exp-col     { flex: 0 0 100% !important; padding-left: 0 !important; justify-content: flex-start !important; }
          .soc-real-exp-divider { display: none !important; }

          .soc-section-diff { padding: 40px 28px !important; }
          .soc-diff-layout  { flex-direction: column !important; gap: 24px !important; }
          .soc-diff-left    { flex: none !important; width: 100% !important; }
          .soc-cert-icon    { width: 120px !important; height: 120px !important; }

          .soc-section-modules { padding: 40px 28px 28px !important; }
          .soc-module-grid     { grid-template-columns: repeat(2, 1fr) !important; }
          .soc-bottom-bar-grid { grid-template-columns: 1fr !important; }

          .soc-section-pad { padding: 60px 0 !important; }
        }

        /* ── Mobile (≤ 767px) ── */
        @media (max-width: 767px) {
          .soc-hero-inner { flex-direction: column !important; }
          .soc-hero-left  { flex: none !important; width: 100% !important; padding: 44px 18px 32px 18px !important; }
          .soc-hero-right { flex: none !important; width: 100% !important; height: 220px !important; }
          .soc-hero-tags  { flex-wrap: wrap !important; gap: 10px !important; }
          .soc-hero-tags > div { border-right: none !important; padding-right: 0 !important; }

          .soc-benefits-bar  { grid-template-columns: repeat(2, 1fr) !important; padding: 0 14px !important; }
          .soc-benefits-grid { grid-template-columns: 1fr !important; }

          .soc-section-experience { padding: 16px 14px 0 !important; }
          .soc-real-exp-layout    { flex-direction: column !important; gap: 14px !important; }
          .soc-dashboard-panel    { flex: none !important; width: 100% !important; }
          .soc-map-incidents      { grid-template-columns: 1fr !important; }
          .soc-threat-row         { grid-template-columns: 1fr 1fr !important; }
          .soc-experience-panel   { padding-top: 4px !important; }
          .soc-lock-icon          { display: none !important; }
          .soc-real-cards-grid    { grid-template-columns: 1fr !important; }

          .soc-real-exp-bar     { flex-wrap: wrap !important; justify-content: flex-start !important; padding: 16px 14px !important; gap: 14px !important; }
          .soc-real-exp-col     { flex: 0 0 100% !important; padding-left: 0 !important; justify-content: flex-start !important; text-align: left !important; }
          .soc-real-exp-divider { display: none !important; }

          .soc-section-diff { padding: 32px 14px !important; }
          .soc-diff-layout  { flex-direction: column !important; gap: 20px !important; }
          .soc-diff-left    { flex: none !important; width: 100% !important; }
          .soc-cert-header-row { flex-direction: column !important; align-items: flex-start !important; gap: 12px !important; }
          .soc-cert-icon    { width: 90px !important; height: 90px !important; }
          .soc-cert-text    { font-size: 19px !important; }

          .soc-section-modules { padding: 32px 14px 20px !important; }
          .soc-module-grid     { grid-template-columns: 1fr !important; }
          .soc-bottom-bar-grid { grid-template-columns: 1fr !important; }

          .soc-section-pad { padding: 44px 0 !important; }
          .soc-stats-row   { flex-wrap: wrap !important; gap: 16px !important; }
        }

        /* ── Small mobile (≤ 480px) ── */
        @media (max-width: 480px) {
          .soc-hero-right      { height: 180px !important; }
          .soc-industry-panel  { display: none !important; }
          .soc-benefits-bar    { grid-template-columns: repeat(2, 1fr) !important; }
          .soc-threat-row      { grid-template-columns: 1fr !important; }
          .soc-real-cards-grid { grid-template-columns: 1fr !important; }
        }

        /* ── Contact section mobile padding ── */
        @media (max-width: 767px) {
          .soc-section-pad { padding: 48px 0 !important; }
        }

        /* ── Frameworks box — mobile 3-col wrap ── */
        @media (max-width: 767px) {
          .soc-frameworks-box {
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: 14px 10px !important;
            padding: 14px 12px !important;
          }
          .soc-fw-divider { display: none !important; }
          .soc-fw-item {
            flex: 0 0 calc(33% - 8px) !important;
            min-width: 80px !important;
          }
          .soc-fw-item img {
            height: 44px !important;
            margin-top: 0 !important;
          }
          .soc-fw-item p {
            font-size: 8px !important;
            margin-top: 4px !important;
          }
          .soc-sans-icon { margin-left: -10px !important; }
        }
      `}</style>
    </div>
  );
}
