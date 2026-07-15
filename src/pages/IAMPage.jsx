import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import GlobalContactForm from '../components/GlobalContactForm';
import {
  Lock, Key, UserX, User, ArrowUp, Ticket, Fingerprint, ShieldAlert, Shield,
  Users, Cloud, Database, Server, Network, Monitor,
  Briefcase, Globe, Award, ArrowRight, CheckCircle, XCircle,
  Home, ChevronRight as Breadcrumb, AlertTriangle, Settings2,
  GraduationCap, FlaskConical, FileText,
  Link2, ShieldCheck, Target, BarChart3, FileBadge, TrendingUp,
} from 'lucide-react';


function RevealSection({ children, delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0'; el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; } }, { threshold: 0.08 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref}>{children}</div>;
}

const stats = [
  { Icon: AlertTriangle, value: '24,530', label: 'Identity Attacks Daily',  color: '#ff4444', anim: 'anim-shake' },
  { Icon: Key,           value: '16,742', label: 'Credential Breaches',     color: 'var(--orange)', anim: 'anim-pulse' },
  { Icon: ArrowUp,       value: '3,691',  label: 'Privilege Escalations',   color: '#ff8800', anim: 'anim-bounce' },
  { Icon: Briefcase,     value: '12,540', label: 'IAM Jobs Available',      color: '#4CAF50', anim: 'anim-float' },
];

const modules = [
  { num:'01', Icon: Lock,       title:'Foundations of IAM',                            desc:'From IAM fundamentals to Zero Trust and identity security operations.',        bullets:['IAM concepts & architecture','Directory services','Identity lifecycle management','Identity governance basics'] },
  { num:'02', Icon: Key,        title:'Authentication, Authorization & Credential Security', desc:'Authentication methods & authorization frameworks.',                   bullets:['Multi-factor authentication','OAuth2, OIDC, SAML','Credential vaulting','Password policies & hygiene'] },
  { num:'03', Icon: ShieldAlert,title:'Authorization, PAM, MFA & Privileged Security', desc:'PAM, MFA and privileged access security.',                                     bullets:['Privileged Access Management','CyberArk & BeyondTrust','Just-in-time access','Session recording & monitoring'] },
  { num:'04', Icon: Network,    title:'Zero Trust Architecture',                        desc:'Zero Trust principles, platforms & governance.',                               bullets:['Zero Trust framework','Identity-centric security','Micro-segmentation','NIST Zero Trust guidelines'] },
  { num:'05', Icon: AlertTriangle, title:'IAM Threat Landscape & Operations',           desc:'Advanced IAM threats and operational security.',                               bullets:['Identity-based attacks','Credential stuffing defense','Kerberoasting mitigation','UEBA & anomaly detection'] },
  { num:'06', Icon: Award,      title:'Exam Preparation & Practical Application',       desc:'Full-length practice, labs and certification strategy.',                       bullets:['Comprehensive lab scenarios','Certification exam prep','Portfolio project','Career path planning'] },
];

const technologies = [
  { category: 'Identity Platforms',       Icon: Users,    tools: ['Microsoft Active Directory','Azure AD / Entra ID','Okta','LDAP','SAML'] },
  { category: 'Federation & Standards',   Icon: Network,  tools: ['SAML','OAuth2','OIDC','SCIM'] },
  { category: 'Privileged Access Mgmt',   Icon: Key,      tools: ['CyberArk','BeyondTrust','HashiCorp Vault','Delinea'] },
  { category: 'Security Operations',      Icon: Monitor,  tools: ['SIEM','UEBA','MITRE ATT&CK','AWS IAM'] },
  { category: 'Cloud & Directory Services', Icon: Cloud,  tools: ['AWS IAM','Azure AD','GCP IAM','Google Cloud Directory'] },
];

const threats = [
  { Icon: Key,         label: 'CREDENTIAL STUFFING',         desc: 'Automated attacks using breached credentials.', anim: 'anim-shake' },
  { Icon: ArrowUp,     label: 'PRIVILEGE ESCALATION',        desc: 'Attackers gaining higher access than authorised.', anim: 'anim-bounce' },
  { Icon: Ticket,      label: 'GOLDEN TICKET ATTACK',        desc: 'Forging Kerberos tickets for persistent access.', anim: 'anim-pulse' },
  { Icon: Fingerprint, label: 'PASS-THE-HASH / KERBEROASTING', desc: 'Credential hash exploitation techniques.', anim: 'anim-glow' },
  { Icon: ShieldAlert, label: 'MFA BYPASS',                  desc: 'Techniques used to circumvent multi-factor auth.', anim: 'anim-shake' },
  { Icon: UserX,       label: 'INSIDER THREATS',             desc: 'Malicious or negligent insiders abusing access.', anim: 'anim-pulse' },
];

const careers = ['IAM Engineer','Identity Engineer','Identity Governance Analyst','PAM Engineer','Access Management Specialist','Zero Trust Consultant','IAM Architect'];

const audience = [
  { Icon: Server,  label: 'System Administrators',    desc: 'Manage enterprise directories and user access.' },
  { Icon: Lock,    label: 'Cybersecurity Professionals', desc: 'Strengthen your identity security expertise.' },
  { Icon: Briefcase,label:'GRC & Compliance Teams',   desc: 'Govern identity with compliance frameworks.' },
  { Icon: Cloud,   label: 'Cloud & DevOps Engineers', desc: 'Secure identities in cloud-native environments.' },
];

const liveItems = [
  { Icon: Users,     label: 'Real Users' },
  { Icon: Fingerprint,label:'Real Identities' },
  { Icon: Key,       label: 'Real Access Policies' },
  { Icon: Settings2, label: 'Real Governance Workflows' },
  { Icon: AlertTriangle,label:'Real Security Incidents' },
  { Icon: Database,  label: 'Real IAM Lab Environment' },
];

const ThreatImage = ({ src, alt }) => {
  const [hasError, setHasError] = useState(false);
  if (hasError) {
    return <div style={{ height: 120, width: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }} />;
  }
  return <img src={src} alt={alt} onError={() => setHasError(true)} />;
};

export default function IAMPage() {
  const [hoveredModule, setHoveredModule] = useState(null);
  return (
    <div>
      <svg style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        <defs>
          <filter id="iam-remove-white" colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -1 -1 -1 0 3" result="colored"/>
            <feComponentTransfer in="colored">
              <feFuncA type="linear" slope="10" intercept="-1"/>
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>
      {/* ── HERO ── */}
      <section className="iam-hero-section">
        {/* Background Image Container */}
        <div className="iam-hero-bg-container">
          <img
            src="/assets/Images/iam-hero.png"
            alt="IAM Specialist"
            className="iam-hero-bg-img"
          />
          <div className="iam-hero-bg-blend" />
        </div>

        <div className="iam-hero-content-wrap">
          {/* LEFT — content */}
          <div className="iam-hero-text-col">
            {/* Faint Background SVG Illustration */}
            <div style={{ position: 'absolute', top: '12%', left: '-50px', width: '480px', height: '480px', opacity: 0.14, pointerEvents: 'none', zIndex: 0 }}>
              <svg viewBox="0 0 200 200" width="100%" height="100%">
                {/* Concentric dashed circles */}
                <circle cx="100" cy="100" r="85" stroke="#1e88e5" strokeWidth="1" strokeDasharray="3 6" fill="none" />
                <circle cx="100" cy="100" r="70" stroke="#1e88e5" strokeWidth="0.8" strokeDasharray="5 5" fill="none" />
                <circle cx="100" cy="100" r="55" stroke="#1e88e5" strokeWidth="0.6" strokeDasharray="2 4" fill="none" />
                <circle cx="100" cy="100" r="40" stroke="#1e88e5" strokeWidth="1.2" fill="none" />
                
                {/* User profile silhouette in the center */}
                <circle cx="100" cy="92" r="10" stroke="#1e88e5" strokeWidth="1.5" fill="none" />
                <path d="M78 122c0-10 10-16 22-16s22 6 22 16" stroke="#1e88e5" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                
                {/* Subtle radar line or scanning effect */}
                <line x1="100" y1="100" x2="160" y2="40" stroke="#1e88e5" strokeWidth="1" opacity="0.5" />
                <circle cx="160" cy="40" r="2.5" fill="#1e88e5" />
                
                {/* Tech dots */}
                <circle cx="50" cy="60" r="2" fill="#1e88e5" />
                <circle cx="150" cy="140" r="1.5" fill="#1e88e5" />
                <circle cx="60" cy="130" r="2" fill="#1e88e5" />
              </svg>
            </div>

            {/* Top badge */}
            <div className="iam-hero-line" style={{ animationDelay: '0ms', marginBottom: 24 }}>
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
                IAM PROFESSIONAL CERTIFICATION PROGRAM
              </span>
            </div>

            {/* Main heading */}
            <h1 style={{ fontWeight: 900, lineHeight: 1.05, marginBottom: 18, textTransform: 'uppercase', display: 'flex', flexWrap: 'wrap', gap: '0 16px' }}>
              <span className="iam-hero-line" style={{ animationDelay: '160ms', fontSize: 'clamp(36px, 5.5vw, 76px)', color: '#fff' }}>IAM</span>
              <span className="iam-hero-line" style={{ animationDelay: '280ms', fontSize: 'clamp(36px, 5.5vw, 76px)', color: 'var(--orange)' }}>SPECIALIST</span>
            </h1>

            {/* Stacked taglines */}
            <div className="iam-hero-line" style={{ animationDelay: '380ms', marginBottom: 20 }}>
              {['SECURE IDENTITIES.', 'CONTROL ACCESS.', 'ENABLE TRUST.'].map(line => (
                <p key={line} style={{ fontSize: 'clamp(14px, 1.7vw, 21px)', fontWeight: 800, color: '#fff', lineHeight: 1.35, margin: 0 }}>{line}</p>
              ))}
            </div>

            {/* Description */}
            <p className="iam-hero-line" style={{ animationDelay: '530ms', fontSize: 15, color: 'rgba(255,255,255,0.85)', lineHeight: 1.78, marginBottom: 30, maxWidth: 510 }}>
              Master <span style={{ color: 'var(--orange)', fontWeight: 700 }}>Identity &amp; Access Management</span>, Zero Trust, Privileged Access Management, Authentication Security and Identity Governance.
            </p>

            {/* CTA button */}
            <div className="iam-hero-line" style={{ animationDelay: '640ms' }}>
              <a href="#register" style={{
                display: 'inline-flex', alignItems: 'center', gap: 9,
                background: 'var(--orange)',
                color: '#fff',
                fontWeight: 800,
                fontSize: 13,
                padding: '13px 24px',
                borderRadius: 6,
                textDecoration: 'none',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                border: '1.5px solid transparent',
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
                e.currentTarget.style.background = 'var(--orange)';
                e.currentTarget.style.border = '1.5px solid transparent';
                e.currentTarget.style.backdropFilter = 'none';
                e.currentTarget.style.WebkitBackdropFilter = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.color = '#fff';
              }}
              >
                <User size={15} /> REGISTER INTEREST <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIVE ENVIRONMENT STRIP ── */}
      <section style={{ background: '#080b15', borderTop: '1px solid rgba(255,102,0,0.22)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="iam-env-strip-inner">

          {/* Left: heading only (no icon) */}
          <div className="iam-env-strip-left">
            <p style={{ fontSize: 16, fontWeight: 900, color: '#fff', textTransform: 'uppercase', lineHeight: 1.3, letterSpacing: '0.5px', margin: 0 }}>
              TRAIN INSIDE A<br />
              <span style={{ color: 'var(--orange)' }}>LIVE IAM</span><br />
              ENVIRONMENT
            </p>
          </div>

          {/* Middle: 5 labelled icons — all orange */}
          <div className="iam-env-strip-middle">
            {[
              {
                label: 'REAL USERS',
                icon: (
                  <svg width="36" height="36" viewBox="0 0 26 26" fill="none">
                    <circle cx="13" cy="9" r="4" stroke="#ff6600" strokeWidth="1.5"/>
                    <path d="M5 23c0-4.5 3.5-7 8-7s8 2.5 8 7" stroke="#ff6600" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="5.5" cy="11.5" r="2.8" stroke="#ff6600" strokeWidth="1.3"/>
                    <path d="M1 22c0-3 2-4.5 4.5-4.5" stroke="#ff6600" strokeWidth="1.3" strokeLinecap="round"/>
                    <circle cx="20.5" cy="11.5" r="2.8" stroke="#ff6600" strokeWidth="1.3"/>
                    <path d="M25 22c0-3-2-4.5-4.5-4.5" stroke="#ff6600" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                label: 'REAL\nIDENTITIES',
                icon: (
                  <svg width="36" height="36" viewBox="0 0 26 26" fill="none">
                    <rect x="3" y="6" width="20" height="14" rx="2" stroke="#ff6600" strokeWidth="1.5"/>
                    <circle cx="9" cy="13" r="3" stroke="#ff6600" strokeWidth="1.3"/>
                    <line x1="14" y1="10" x2="21" y2="10" stroke="#ff6600" strokeWidth="1.3" strokeLinecap="round"/>
                    <line x1="14" y1="13" x2="21" y2="13" stroke="#ff6600" strokeWidth="1.3" strokeLinecap="round"/>
                    <line x1="14" y1="16" x2="18" y2="16" stroke="#ff6600" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                label: 'REAL ACCESS\nREQUESTS',
                icon: (
                  <svg width="36" height="36" viewBox="0 0 26 26" fill="none">
                    <rect x="4" y="3" width="18" height="20" rx="2" stroke="#ff6600" strokeWidth="1.5"/>
                    <line x1="8" y1="9" x2="18" y2="9" stroke="#ff6600" strokeWidth="1.3" strokeLinecap="round"/>
                    <line x1="8" y1="13" x2="18" y2="13" stroke="#ff6600" strokeWidth="1.3" strokeLinecap="round"/>
                    <path d="M8 18 L10 20 L14 16" stroke="#ff6600" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                label: 'REAL GOVERNANCE\nWORKFLOWS',
                icon: (
                  <svg width="36" height="36" viewBox="0 0 26 26" fill="none">
                    <path d="M13 3L4 7v8c0 5 3.5 9.5 9 11 5.5-1.5 9-6 9-11V7Z" stroke="#ff6600" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M9 13 L11.5 15.5 L17 10" stroke="#ff6600" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                label: 'REAL SECURITY\nDECISIONS',
                icon: (
                  <svg width="36" height="36" viewBox="0 0 26 26" fill="none">
                    <circle cx="13" cy="13" r="10" stroke="#ff6600" strokeWidth="1.5"/>
                    <circle cx="13" cy="13" r="6" stroke="#ff6600" strokeWidth="1.3"/>
                    <circle cx="13" cy="13" r="2.5" fill="#ff6600"/>
                    <line x1="13" y1="2" x2="13" y2="5" stroke="#ff6600" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="13" y1="21" x2="13" y2="24" stroke="#ff6600" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="2" y1="13" x2="5" y2="13" stroke="#ff6600" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="21" y1="13" x2="24" y2="13" stroke="#ff6600" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
              },
            ].map(({ icon, label }, i) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 9, padding: '0 16px', borderRight: i < 4 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                {icon}
                <p style={{ fontSize: 10.5, fontWeight: 800, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.9px', textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.35, margin: 0, whiteSpace: 'pre-line' }}>{label}</p>
              </div>
            ))}
          </div>

          {/* Right: NOT A CLASSROOM */}
          <div className="iam-env-strip-right">
            <p style={{ fontSize: 16, fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.3, letterSpacing: '0.5px', margin: 0 }}>
              <span style={{ color: 'var(--orange)' }}>NOT</span> <span style={{ color: '#fff' }}>A CLASSROOM.</span><br />
              <span style={{ color: 'var(--orange)' }}>NOT</span> <span style={{ color: '#fff' }}>A SIMULATION.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── PERIMETER + EXPERIENCE SECTION ── */}
      <section style={{ background: '#07090f', borderTop: '1px solid rgba(255,255,255,0.06)' }}>

        {/* Top two-column row */}
        <div className="iam-perimeter-row" style={{ padding: '28px 40px 0 90px', display: 'flex' }}>

          {/* LEFT – Identity is the new security perimeter */}
          <div className="iam-perimeter-left" style={{ flex: '0 0 46%', paddingRight: 40, borderRight: '1px solid rgba(255,255,255,0.08)', paddingBottom: 24 }}>
            <h2 style={{ fontSize: 'clamp(15px, 1.8vw, 20px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.25, marginBottom: 22 }}>
              <span style={{ color: '#fff' }}>IDENTITY IS THE NEW</span><br />
              <span style={{ color: 'var(--orange)' }}>SECURITY PERIMETER</span>
            </h2>
            <div className="iam-perimeter-icons" style={{ display: 'flex', gap: 0 }}>
              {[
                {
                  label: 'STOLEN\nCREDENTIALS',
                  icon: (
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                      {/* Diagonal key */}
                      <circle cx="11" cy="11" r="6.5" stroke="#ff6600" strokeWidth="1.6" fill="none"/>
                      <circle cx="11" cy="11" r="3" stroke="#ff6600" strokeWidth="1.3" fill="none"/>
                      <line x1="15.5" y1="15.5" x2="28" y2="28" stroke="#ff6600" strokeWidth="1.6" strokeLinecap="round"/>
                      <line x1="23" y1="23" x2="23" y2="27" stroke="#ff6600" strokeWidth="1.5" strokeLinecap="round"/>
                      <line x1="26" y1="26" x2="26" y2="30" stroke="#ff6600" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                },
                {
                  label: 'PRIVILEGE\nESCALATION',
                  icon: (
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                      {/* Bar chart with upward arrow */}
                      <rect x="4" y="20" width="5" height="10" rx="1" stroke="#ff6600" strokeWidth="1.5" fill="none"/>
                      <rect x="11" y="14" width="5" height="16" rx="1" stroke="#ff6600" strokeWidth="1.5" fill="none"/>
                      <rect x="18" y="8" width="5" height="22" rx="1" stroke="#ff6600" strokeWidth="1.5" fill="none"/>
                      <path d="M26 14 L29 8 L32 14" stroke="#ff6600" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <line x1="29" y1="8" x2="29" y2="22" stroke="#ff6600" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                },
                {
                  label: 'UNAUTHORIZED\nACCESS',
                  icon: (
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                      {/* Door with arrow entering */}
                      <rect x="8" y="4" width="16" height="26" rx="1.5" stroke="#ff6600" strokeWidth="1.5" fill="none"/>
                      <circle cx="20" cy="17" r="1.5" fill="#ff6600"/>
                      <line x1="1" y1="17" x2="10" y2="17" stroke="#ff6600" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M6 13 L10 17 L6 21" stroke="#ff6600" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  ),
                },
                {
                  label: 'INSIDER\nTHREATS',
                  icon: (
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                      {/* Person with hood/hat */}
                      <circle cx="17" cy="10" r="5.5" stroke="#ff6600" strokeWidth="1.5" fill="none"/>
                      {/* Hood arc over head */}
                      <path d="M9 10 Q17 2 25 10" stroke="#ff6600" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                      <path d="M7 30c0-6 4-10 10-10s10 4 10 10" stroke="#ff6600" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                      {/* Warning triangle */}
                      <path d="M24 20 L28 27 L20 27 Z" stroke="#ff6600" strokeWidth="1.3" strokeLinejoin="round" fill="none"/>
                      <line x1="24" y1="22.5" x2="24" y2="25" stroke="#ff6600" strokeWidth="1.2" strokeLinecap="round"/>
                      <circle cx="24" cy="26.2" r="0.6" fill="#ff6600"/>
                    </svg>
                  ),
                },
                {
                  label: 'IDENTITY\nABUSE',
                  icon: (
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                      {/* ID Badge / card */}
                      <rect x="5" y="6" width="24" height="22" rx="2" stroke="#ff6600" strokeWidth="1.5" fill="none"/>
                      {/* Photo circle on left */}
                      <circle cx="13" cy="15" r="4" stroke="#ff6600" strokeWidth="1.3" fill="none"/>
                      {/* Lines on right */}
                      <line x1="19" y1="12" x2="26" y2="12" stroke="#ff6600" strokeWidth="1.3" strokeLinecap="round"/>
                      <line x1="19" y1="15.5" x2="26" y2="15.5" stroke="#ff6600" strokeWidth="1.3" strokeLinecap="round"/>
                      <line x1="19" y1="19" x2="23" y2="19" stroke="#ff6600" strokeWidth="1.3" strokeLinecap="round"/>
                      {/* Bottom strip */}
                      <rect x="5" y="22" width="24" height="6" rx="2" fill="rgba(255,102,0,0.12)" stroke="#ff6600" strokeWidth="1"/>
                    </svg>
                  ),
                },
              ].map(({ icon, label }) => (
                <div key={label} className="iam-perimeter-item" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                  {icon}
                  <p style={{ fontSize: 9, fontWeight: 800, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.8px', textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.35, margin: 0, whiteSpace: 'pre-line' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – What You'll Experience */}
          <div className="iam-perimeter-right" style={{ flex: 1, paddingLeft: 40, paddingBottom: 24 }}>
            <h2 style={{ fontSize: 'clamp(15px, 1.8vw, 20px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.25, marginBottom: 22 }}>
              <span style={{ color: '#fff' }}>WHAT </span>
              <span style={{ color: 'var(--orange)' }}>YOU'LL</span>
              <span style={{ color: '#fff' }}> EXPERIENCE</span>
            </h2>
            <div className="iam-experience-icons" style={{ display: 'flex', gap: 0 }}>
              {[
                {
                  label: 'AUTHENTICATION',
                  icon: (
                    <svg width="52" height="52" viewBox="0 0 36 36" fill="none">
                      <path d="M18 3L5 9v10c0 7 5.5 13 13 15 7.5-2 13-8 13-15V9Z" stroke="#1e88e5" strokeWidth="1.6" strokeLinejoin="round" fill="rgba(30,136,229,0.1)"/>
                      <path d="M12 18 L15.5 21.5 L24 13" stroke="#1e88e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                },
                {
                  label: 'PRIVILEGED\nACCESS',
                  icon: (
                    <svg width="52" height="52" viewBox="0 0 36 36" fill="none">
                      <rect x="9" y="16" width="18" height="14" rx="2.5" stroke="#1e88e5" strokeWidth="1.6" fill="rgba(30,136,229,0.1)"/>
                      <path d="M13 16v-5a5 5 0 0110 0v5" stroke="#1e88e5" strokeWidth="1.6" strokeLinecap="round"/>
                      <circle cx="18" cy="23" r="2.5" fill="#1e88e5"/>
                      <line x1="18" y1="25.5" x2="18" y2="28" stroke="#1e88e5" strokeWidth="1.6" strokeLinecap="round"/>
                    </svg>
                  ),
                },
                {
                  label: 'IDENTITY\nGOVERNANCE',
                  icon: (
                    <svg width="52" height="52" viewBox="0 0 36 36" fill="none">
                      <circle cx="18" cy="12" r="5" stroke="#1e88e5" strokeWidth="1.6" fill="none"/>
                      <path d="M8 30c0-5.5 4.5-9 10-9s10 3.5 10 9" stroke="#1e88e5" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
                      <circle cx="8" cy="15" r="3.5" stroke="#1e88e5" strokeWidth="1.4" fill="none"/>
                      <path d="M3 29c0-3.5 2.2-5.5 5-5.5" stroke="#1e88e5" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
                      <circle cx="28" cy="15" r="3.5" stroke="#1e88e5" strokeWidth="1.4" fill="none"/>
                      <path d="M33 29c0-3.5-2.2-5.5-5-5.5" stroke="#1e88e5" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
                    </svg>
                  ),
                },
                {
                  label: 'ZERO TRUST',
                  icon: (
                    <svg width="52" height="52" viewBox="0 0 36 36" fill="none">
                      <path d="M18 3L5 9v10c0 7 5.5 13 13 15 7.5-2 13-8 13-15V9Z" stroke="#1e88e5" strokeWidth="1.6" strokeLinejoin="round" fill="rgba(30,136,229,0.08)"/>
                    </svg>
                  ),
                },
                {
                  label: 'COMPLIANCE\n& AUDIT',
                  icon: (
                    <svg width="52" height="52" viewBox="0 0 36 36" fill="none">
                      <rect x="9" y="4" width="18" height="28" rx="2" stroke="#1e88e5" strokeWidth="1.6" fill="rgba(30,136,229,0.08)"/>
                      <path d="M13 12 L15 14 L19 10" stroke="#1e88e5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13 18 L15 20 L19 16" stroke="#1e88e5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13 24 L15 26 L19 22" stroke="#1e88e5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="21" y1="12" x2="25" y2="12" stroke="#1e88e5" strokeWidth="1.3" strokeLinecap="round"/>
                      <line x1="21" y1="18" x2="25" y2="18" stroke="#1e88e5" strokeWidth="1.3" strokeLinecap="round"/>
                      <line x1="21" y1="24" x2="25" y2="24" stroke="#1e88e5" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                  ),
                },
                {
                  label: 'IDENTITY THREAT\nDETECTION',
                  icon: (
                    <svg width="52" height="52" viewBox="0 0 36 36" fill="none">
                      <circle cx="18" cy="18" r="13" stroke="#1e88e5" strokeWidth="1.6" fill="rgba(30,136,229,0.08)"/>
                      <circle cx="18" cy="18" r="8" stroke="#1e88e5" strokeWidth="1.3" fill="none"/>
                      <circle cx="18" cy="18" r="3" fill="#1e88e5"/>
                      <line x1="18" y1="4" x2="18" y2="8" stroke="#1e88e5" strokeWidth="1.5" strokeLinecap="round"/>
                      <line x1="18" y1="28" x2="18" y2="32" stroke="#1e88e5" strokeWidth="1.5" strokeLinecap="round"/>
                      <line x1="4" y1="18" x2="8" y2="18" stroke="#1e88e5" strokeWidth="1.5" strokeLinecap="round"/>
                      <line x1="28" y1="18" x2="32" y2="18" stroke="#1e88e5" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                },
              ].map(({ icon, label }) => (
                <div key={label} className="iam-experience-item" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                  {/* Outer blue circle */}
                  <div style={{ width: 58, height: 58, borderRadius: '50%', border: '1.2px solid rgba(30,136,229,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {/* Inner blue circle */}
                    <div style={{ width: 48, height: 48, borderRadius: '50%', border: '1.6px solid rgba(30,136,229,0.7)', background: 'rgba(10,20,50,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {icon}
                    </div>
                  </div>
                  <p style={{ fontSize: 9, fontWeight: 800, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.8px', textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.35, margin: 0, whiteSpace: 'pre-line' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar – 5 stats */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', background: '#060810' }}>
          <div className="iam-bottom-bar">
            
            {/* Left section (matches LEFT column's width, padding-right, border-right) */}
            <div className="iam-bottom-bar-left">
              {/* Slot 0 (Stolen Credentials) — empty spacer */}
              <div className="iam-bottom-bar-spacer" style={{ flex: 1 }} />
              
              {/* Slot 1 (Privilege Escalation) — 40-HOUR */}
              <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 6, border: '1.5px solid rgba(255,102,0,0.5)', background: 'rgba(255,102,0,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
                      <polygon points="12,2 22,7 12,12 2,7" stroke="#ff6600" strokeWidth="1.4" strokeLinejoin="round" fill="none"/>
                      <path d="M6 9.5v5c0 2.5 2.5 4.5 6 4.5s6-2 6-4.5v-5" stroke="#ff6600" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
                      <line x1="22" y1="7" x2="22" y2="13" stroke="#ff6600" strokeWidth="1.3" strokeLinecap="round"/>
                      <circle cx="22" cy="14" r="1.2" fill="#ff6600"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 900, color: '#fff', letterSpacing: '0.5px', textTransform: 'uppercase', lineHeight: 1.2, margin: 0 }}>40-HOUR</p>
                    <p style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.42)', letterSpacing: '0.5px', textTransform: 'uppercase', lineHeight: 1.2, margin: 0 }}>EXPERT TRAINING</p>
                  </div>
                </div>
              </div>
              
              {/* Slot 2 (Unauthorized Access) — empty spacer */}
              <div className="iam-bottom-bar-spacer" style={{ flex: 1 }} />
              
              {/* Slot 3 (Insider Threats) — HANDS-ON */}
              <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 6, border: '1.5px solid rgba(255,102,0,0.5)', background: 'rgba(255,102,0,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
                      <path d="M8 2 L8 9 L3 18 C2.2 19.5 3.3 21.5 5 21.5 H17 C18.7 21.5 19.8 19.5 19 18 L14 9 L14 2 Z" stroke="#ff6600" strokeWidth="1.4" strokeLinejoin="round" fill="none"/>
                      <line x1="7" y1="4" x2="15" y2="4" stroke="#ff6600" strokeWidth="1.3" strokeLinecap="round"/>
                      <path d="M5 16 Q11 14 17 16" stroke="#ff6600" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
                      <circle cx="9" cy="18" r="1" fill="#ff6600"/>
                      <circle cx="13" cy="17.5" r="0.8" fill="#ff6600"/>
                      <circle cx="11" cy="19.5" r="0.7" fill="#ff6600"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 900, color: '#fff', letterSpacing: '0.5px', textTransform: 'uppercase', lineHeight: 1.2, margin: 0 }}>HANDS-ON</p>
                    <p style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.42)', letterSpacing: '0.5px', textTransform: 'uppercase', lineHeight: 1.2, margin: 0 }}>LABS</p>
                  </div>
                </div>
              </div>
              
              {/* Slot 4 (Identity Abuse) — empty spacer */}
              <div className="iam-bottom-bar-spacer" style={{ flex: 1 }} />
            </div>
            
            {/* Right section (matches RIGHT column's width, padding-left) */}
            <div className="iam-bottom-bar-right">
              {/* Slot 0 (Authentication) — EXAM PREP */}
              <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 6, border: '1.5px solid rgba(255,102,0,0.5)', background: 'rgba(255,102,0,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
                      <rect x="2" y="1" width="14" height="18" rx="1.5" stroke="#ff6600" strokeWidth="1.4" fill="none"/>
                      <line x1="5" y1="6" x2="13" y2="6" stroke="#ff6600" strokeWidth="1.2" strokeLinecap="round"/>
                      <line x1="5" y1="9" x2="13" y2="9" stroke="#ff6600" strokeWidth="1.2" strokeLinecap="round"/>
                      <line x1="5" y1="12" x2="10" y2="12" stroke="#ff6600" strokeWidth="1.2" strokeLinecap="round"/>
                      <path d="M13 16 L19 10 L21 12 L15 18 Z" stroke="#ff6600" strokeWidth="1.3" strokeLinejoin="round" fill="none"/>
                      <path d="M13 16 L12 20 L16 19 Z" stroke="#ff6600" strokeWidth="1.2" strokeLinejoin="round" fill="none"/>
                      <line x1="19" y1="10" x2="21" y2="8" stroke="#ff6600" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 900, color: '#fff', letterSpacing: '0.5px', textTransform: 'uppercase', lineHeight: 1.2, margin: 0 }}>EXAM PREP</p>
                    <p style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.42)', letterSpacing: '0.5px', textTransform: 'uppercase', lineHeight: 1.2, margin: 0 }}>COACHING</p>
                  </div>
                </div>
              </div>
              
              {/* Slot 1 (Privileged Access) — empty spacer */}
              <div className="iam-bottom-bar-spacer" style={{ flex: 1 }} />
              
              {/* Slot 2 (Identity Governance) — 1-YEAR COMMUNITY */}
              <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 6, border: '1.5px solid rgba(255,102,0,0.5)', background: 'rgba(255,102,0,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="26" height="22" viewBox="0 0 26 22" fill="none">
                      <circle cx="8" cy="6" r="4" stroke="#ff6600" strokeWidth="1.4" fill="none"/>
                      <path d="M1 21c0-4 3-6.5 7-6.5s7 2.5 7 6.5" stroke="#ff6600" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
                      <circle cx="18" cy="6" r="4" stroke="#ff6600" strokeWidth="1.4" fill="none"/>
                      <path d="M11 21c0-4 3-6.5 7-6.5s7 2.5 7 6.5" stroke="#ff6600" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 900, color: '#fff', letterSpacing: '0.5px', textTransform: 'uppercase', lineHeight: 1.2, margin: 0 }}>1-YEAR COMMUNITY</p>
                    <p style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.42)', letterSpacing: '0.5px', textTransform: 'uppercase', lineHeight: 1.2, margin: 0 }}>MEMBERSHIP</p>
                  </div>
                </div>
              </div>
              
              {/* Slot 3 (Zero Trust) — empty spacer */}
              <div className="iam-bottom-bar-spacer" style={{ flex: 1 }} />
              
              {/* Slot 4 (Compliance & Audit) — JOB-READY */}
              <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 6, border: '1.5px solid rgba(255,102,0,0.5)', background: 'rgba(255,102,0,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
                      <rect x="2" y="8" width="20" height="13" rx="2" stroke="#ff6600" strokeWidth="1.4" fill="none"/>
                      <path d="M8 8 V5 a4 4 0 0 1 8 0 V8" stroke="#ff6600" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
                      <line x1="2" y1="14.5" x2="22" y2="14.5" stroke="#ff6600" strokeWidth="1.3"/>
                      <rect x="9.5" y="12.5" width="5" height="4" rx="1" stroke="#ff6600" strokeWidth="1.2" fill="rgba(255,102,0,0.15)"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 900, color: '#fff', letterSpacing: '0.5px', textTransform: 'uppercase', lineHeight: 1.2, margin: 0 }}>JOB-READY</p>
                    <p style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.42)', letterSpacing: '0.5px', textTransform: 'uppercase', lineHeight: 1.2, margin: 0 }}>SKILLS</p>
                  </div>
                </div>
              </div>
              
              {/* Slot 5 (Identity Threat Detection) — empty spacer */}
              <div className="iam-bottom-bar-spacer" style={{ flex: 1 }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 6 MODULES PROGRESSIVE MASTERY ── */}
      <section style={{ background: '#060810', borderTop: '1px solid rgba(255,255,255,0.06)' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', padding: '40px 40px 28px' }}>
          <h2 style={{ fontSize: 'clamp(26px, 3.8vw, 52px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.0, marginBottom: 12 }}>
            <span style={{ color: '#fff' }}>6 MODULES. </span>
            <span style={{ color: 'var(--orange)' }}>PROGRESSIVE MASTERY.</span>
          </h2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.48)', lineHeight: 1.6, margin: 0 }}>
            From IAM fundamentals to Zero Trust and identity security operations.
          </p>
        </div>

        {/* 6 Cards grid */}
        <div className="iam-modules-grid">
          {[
            {
              num: '01',
              title: ['FOUNDATIONS OF', 'IDENTITY & ACCESS', 'MANAGEMENT'],
              bullets: ['IAM concepts & architecture', 'Directory services (AD, LDAP)', 'Identity lifecycle management', 'Federation (SAML, OAuth, OIDC)'],
              week: 1,
              icon: <img src="/assets/Images/iam-module-01-icon.png" alt="Module 01" style={{ width: 175, height: 175, objectFit: 'contain', transform: 'scale(1.5)', transformOrigin: 'center' }} />,
            },
            {
              num: '02',
              title: ['AUTHENTICATION,', 'MFA & CREDENTIAL', 'SECURITY'],
              bullets: ['Authentication methods & factors', 'MFA (TOTP, FIDO2, WebAuthn)', 'Passwords & passkeys', 'Credential attacks & defenses'],
              week: 2,
              icon: <img src="/assets/Images/iam-module-02-icon.png" alt="Module 02" style={{ width: 175, height: 175, objectFit: 'contain', transform: 'scale(1.5)', transformOrigin: 'center' }} />,
            },
            {
              num: '03',
              title: ['AUTHORIZATION,', 'RBAC, ABAC &', 'PRIVILEGED ACCESS'],
              bullets: ['RBAC, ABAC & policy models', 'PAM solutions & JIT access', 'Least privilege & access reviews', 'Access governance operations'],
              week: 3,
              icon: <img src="/assets/Images/iam-module-03-icon.png" alt="Module 03" style={{ width: 175, height: 175, objectFit: 'contain', transform: 'scale(1.5)', transformOrigin: 'center' }} />,
            },
            {
              num: '04',
              title: ['ZERO TRUST', '& IDENTITY', 'GOVERNANCE'],
              bullets: ['NIST SP 800-207 Zero Trust', 'IGA platforms & workflows', 'SoD controls & certifications', 'Compliance (GDPR, HIPAA, SOX)'],
              week: 4,
              icon: <img src="/assets/Images/iam-module-04-icon.png" alt="Module 04" style={{ width: 175, height: 175, objectFit: 'contain', transform: 'scale(1.5)', transformOrigin: 'center' }} />,
            },
            {
              num: '05',
              title: ['IAM THREAT LANDSCAPE', '& SECURITY', 'OPERATIONS'],
              bullets: ['Identity attacks (MITRE ATT&CK)', 'SSO & federation vulnerabilities', 'SIEM integration & monitoring', 'Incident response & threat hunting'],
              week: 5,
              icon: <img src="/assets/Images/iam-module-05-icon.png" alt="Module 05" style={{ width: 175, height: 175, objectFit: 'contain', transform: 'scale(1.5)', transformOrigin: 'center' }} />,
            },
            {
              num: '06',
              title: ['EXAM PREPARATION', '& PRACTICAL', 'APPLICATION'],
              bullets: ['Full-length practice exams', 'Domain reviews & key concepts', 'Capstone labs & scenarios', 'Real-world industry use cases'],
              week: 6,
              icon: <img src="/assets/Images/iam-module-06-icon.png" alt="Module 06" style={{ width: 175, height: 175, objectFit: 'contain', transform: 'scale(1.5)', transformOrigin: 'center' }} />,
            },
          ].map((mod, i) => (
            <div 
              key={mod.num}
              onMouseEnter={() => setHoveredModule(mod.num)}
              onMouseLeave={() => setHoveredModule(null)}
              style={{
                background: '#080a11',
                border: '1px solid rgba(255,255,255,0.07)',
                borderBottom: `2.5px solid var(--orange)`,
                borderRadius: 12,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.25s ease',
                transform: hoveredModule === mod.num ? 'translateY(-4px)' : 'translateY(0)',
                borderColor: hoveredModule === mod.num ? 'rgba(255,102,0,0.45)' : 'rgba(255,255,255,0.07)',
                boxShadow: hoveredModule === mod.num ? '0 12px 24px rgba(255,102,0,0.1)' : 'none',
              }}
            >
              <div style={{ padding: '16px 14px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>

                {/* Number (large orange) + Title inline */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 22, fontWeight: 900, color: 'var(--orange)', lineHeight: 1.0, flexShrink: 0, letterSpacing: '-0.5px' }}>
                    {mod.num}
                  </span>
                  <p style={{ fontSize: 9.5, fontWeight: 900, color: '#fff', textTransform: 'uppercase', lineHeight: 1.35, letterSpacing: '0.4px', margin: 0 }}>
                    {mod.title.map((line) => (
                      <span key={line} style={{ display: 'block' }}>{line}</span>
                    ))}
                  </p>
                </div>

                {/* Icon — centered */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0, marginTop: -12, marginBottom: -16 }}>
                  {mod.icon}
                </div>

                {/* Bullets */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 10px', flex: 1 }}>
                  {mod.bullets.map(b => (
                    <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: 6 }}>
                      <span style={{ color: 'var(--orange)', fontSize: 11, lineHeight: 1.4, flexShrink: 0, marginTop: 1 }}>•</span>
                      <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)', lineHeight: 1.45 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom: clock icon + hours + week — no tinted bg */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.01)' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                <span style={{ fontSize: 9.5, fontWeight: 800, color: 'var(--orange)', letterSpacing: '1px', textTransform: 'uppercase' }}>6 HOURS</span>
                <span style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.22)' }}>•</span>
                <span style={{ fontSize: 9.5, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>WEEK {mod.week}</span>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ── TECHNOLOGIES & PLATFORMS ── */}
      <section style={{ background: '#07090f', borderTop: '1px solid rgba(255,255,255,0.06)' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', padding: '36px 40px 26px' }}>
          <div style={{ marginBottom: 14 }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,102,0,0.18)', border: '1px solid rgba(255,102,0,0.45)', borderRadius: 4, padding: '4px 13px', fontSize: 10, fontWeight: 800, color: '#ff8c42', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              TOOLS & PLATFORMS
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 34px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: 10 }}>
            <span style={{ color: '#fff' }}>TECHNOLOGIES & PLATFORMS </span>
            <span style={{ color: 'var(--orange)' }}>YOU'LL MASTER</span>
          </h2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: 0 }}>
            Work with industry-leading identity and security technologies used by modern enterprises.
          </p>
        </div>

        {/* 5-column technology grid */}
        <div className="iam-tech-grid">

          {/* Col 1: Identity Platforms */}
          <div className="iam-tech-card">
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', gap: 12 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7 }}>
                  <User size={14} style={{ color: '#38bdf8' }} strokeWidth={2} />
                  <span style={{ fontSize: 12, fontWeight: 800, color: '#38bdf8', letterSpacing: '1px', textTransform: 'uppercase' }}>IDENTITY PLATFORMS</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, alignItems: 'center' }}>
                  {[
                    { src: '/assets/Images/icon-entra-id.png',         label: 'Microsoft\nEntra ID', height: 40 },
                    { src: '/assets/Images/icon-active-directory.png', label: 'Active\nDirectory', height: 38 },
                    { src: '/assets/Images/icon-ldap.png',             label: 'LDAP', height: 38 },
                  ].map(({ src, label, height }, idx) => (
                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, minWidth: 0 }}>
                      <img src={src} alt={label.replace('\n', ' ')} style={{ height, maxWidth: '100%', objectFit: 'contain', flexShrink: 0 }} />
                      <span style={{ fontSize: 9, fontWeight: 500, color: 'rgba(255,255,255,0.75)', textAlign: 'center', lineHeight: 1.2, whiteSpace: 'pre-line' }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.38)', lineHeight: 1.55, margin: 0, textAlign: 'center' }}>Manage identities across users, groups, and devices.</p>
            </div>
          </div>

          {/* Col 2: Federation & Standards */}
          <div className="iam-tech-card">
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', gap: 12 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7 }}>
                  <Link2 size={12} style={{ color: '#38bdf8' }} strokeWidth={2} />
                  <span style={{ fontSize: 9, fontWeight: 800, color: '#38bdf8', letterSpacing: '1px', textTransform: 'uppercase' }}>FEDERATION & STANDARDS</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, alignItems: 'center' }}>
                    {[
                      { src: '/assets/Images/icon-saml.png',    label: 'SAML 2.0', height: 40 },
                      { src: '/assets/Images/icon-oauth.png',   label: 'OAuth 2.0', height: 40 },
                      { src: '/assets/Images/icon-openid.png',  label: 'OpenID\nConnect', height: 40 },
                    ].map(({ src, label, height }) => (
                      <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, minWidth: 0 }}>
                        <img src={src} alt={label.replace('\n', ' ')} style={{ height, maxWidth: '100%', objectFit: 'contain', flexShrink: 0 }} />
                        <span style={{ fontSize: 9, fontWeight: 500, color: 'rgba(255,255,255,0.75)', textAlign: 'center', lineHeight: 1.2, whiteSpace: 'pre-line' }}>{label}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', overflow: 'visible' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, overflow: 'visible' }}>
                      <img src="/assets/Images/icon-scim.svg" alt="SCIM" style={{ height: 36, width: 120, objectFit: 'contain', flexShrink: 0, overflow: 'visible', display: 'block' }} />
                      <span style={{ fontSize: 9, fontWeight: 500, color: 'rgba(255,255,255,0.75)', textAlign: 'center', lineHeight: 1.2 }}>SCIM</span>
                    </div>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.38)', lineHeight: 1.55, margin: 0, textAlign: 'center' }}>Enable secure access and federation across systems and applications.</p>
            </div>
          </div>

          {/* Col 3: Privileged Access Management */}
          <div className="iam-tech-card">
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', gap: 12 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7 }}>
                <Lock size={12} style={{ color: '#38bdf8' }} strokeWidth={2} />
                <span style={{ fontSize: 9, fontWeight: 800, color: '#38bdf8', letterSpacing: '1px', textTransform: 'uppercase' }}>PRIVILEGED ACCESS MANAGEMENT</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, alignItems: 'center' }}>
                {[
                  { src: '/assets/Images/icon-cyberark.png',    label: 'CYBERARK' },
                  { src: '/assets/Images/icon-beyondtrust.png', label: 'BeyondTrust' },
                  { src: '/assets/Images/icon-delinea.png',     label: 'Delinea' },
                ].map(({ src, label }, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, minWidth: 0 }}>
                    <img src={src} alt={label || 'Delinea'} style={{ height: 64, maxWidth: '100%', objectFit: 'contain', flexShrink: 0 }} />
                    <span style={{ fontSize: 9, fontWeight: 500, color: 'rgba(255,255,255,0.75)', textAlign: 'center', lineHeight: 1.2, whiteSpace: 'pre-line' }}>{label}</span>
                  </div>
                ))}
              </div>
              </div>
              <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.38)', lineHeight: 1.55, margin: 0, textAlign: 'center' }}>Secure, monitor and govern privileged access at scale.</p>
            </div>
          </div>

          {/* Col 4: Security & Operations */}
          <div className="iam-tech-card">
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', gap: 12 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7 }}>
                  <ShieldCheck size={12} style={{ color: '#38bdf8' }} strokeWidth={2} />
                  <span style={{ fontSize: 9, fontWeight: 800, color: '#38bdf8', letterSpacing: '1px', textTransform: 'uppercase' }}>SECURITY & OPERATIONS</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, alignItems: 'center' }}>
                  {[
                    { Icon: BarChart3,   label: 'SIEM\nIntegration' },
                    { Icon: User,        label: 'UEBA' },
                    { Icon: Target,      label: 'MITRE\nATT&CK' },
                  ].map(({ Icon, label }, idx) => (
                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, minWidth: 0 }}>
                      <Icon size={36} style={{ color: 'rgba(255,255,255,0.85)' }} strokeWidth={1.5} />
                      <span style={{ fontSize: 9, fontWeight: 500, color: 'rgba(255,255,255,0.75)', textAlign: 'center', lineHeight: 1.2, whiteSpace: 'pre-line' }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.38)', lineHeight: 1.55, margin: 0, textAlign: 'center' }}>Detect, analyse and respond to identity-based threats.</p>
            </div>
          </div>

          {/* Col 5: Cloud & Directory Services */}
          <div className="iam-tech-card">
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', gap: 12 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7 }}>
                  <Cloud size={12} style={{ color: '#38bdf8' }} strokeWidth={2} />
                  <span style={{ fontSize: 9, fontWeight: 800, color: '#38bdf8', letterSpacing: '1px', textTransform: 'uppercase' }}>CLOUD & DIRECTORY SERVICES</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, alignItems: 'center' }}>
                  {[
                    { src: '/assets/Images/icon-aws.png',          label: '', labelColor: '',                                    w: 130, h: 130, margin: '-40px -35px', fit: 'contain' },
                    { src: '/assets/Images/icon-azure.png',        label: 'Azure', labelColor: '#38bdf8',                        w: 70,  h: 70,  margin: '0',           fit: 'fill' },
                    { src: '/assets/Images/icon-google-cloud.png', label: 'Google\nCloud', labelColor: 'rgba(255,255,255,0.75)', w: 70,  h: 70,  margin: '0',           fit: 'fill' },
                  ].map(({ src, label, labelColor, w, h, margin, fit }, idx) => (
                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 0, minWidth: 0 }}>
                      <img src={src} alt={label || 'AWS'} style={{ width: w, height: h, objectFit: fit, flexShrink: 0, margin }} />
                      {label && <span style={{ fontSize: 9, fontWeight: 500, color: labelColor || 'rgba(255,255,255,0.75)', textAlign: 'center', lineHeight: 1.2, whiteSpace: 'pre-line', marginTop: 3 }}>{label}</span>}
                    </div>
                  ))}
                </div>
              </div>
              <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.38)', lineHeight: 1.55, margin: 0, textAlign: 'center' }}>Integrate identity across cloud, hybrid and on-prem environments.</p>
            </div>
          </div>

        </div>

        {/* Bottom 5 feature cards */}
        <div className="iam-feature-wrap" style={{ padding: '0 90px 40px 90px', background: '#07090f' }}>
          <div className="iam-feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', background: '#080d19', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 12, overflow: 'hidden' }}>
            {[
              { Icon: ShieldCheck,  title: 'Industry-Standard Frameworks',  desc: 'NIST SP 800-63, ISO 27001,\nNIST SP 800-207, MITRE ATT&CK' },
              { Icon: Target,       title: 'Hands-On Lab Experience',        desc: 'Practice with real-world\ntools and scenarios' },
              { Icon: Users,        title: 'Job-Ready Skills',               desc: 'Build capabilities that\nemployers demand' },
              { Icon: FileBadge,    title: 'Certification Aligned',          desc: 'Prepare for leading IAM\nindustry certifications' },
              { Icon: TrendingUp,   title: 'Real-World Application',         desc: 'Use cases from finance,\nhealthcare, cloud & beyond' },
            ].map(({ Icon, title, desc }, i) => (
              <div key={title} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '24px 20px', borderRight: i < 4 ? '1px solid rgba(255,255,255,0.08)' : 'none', minWidth: 0 }}>
                <Icon size={32} style={{ color: 'var(--orange)', flexShrink: 0 }} strokeWidth={1.5} />
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontSize: 11, fontWeight: 800, color: '#fff', lineHeight: 1.3, marginBottom: 4 }}>{title}</p>
                  <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5, margin: 0, whiteSpace: 'pre-line' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* ── REAL-WORLD IDENTITY THREATS ── */}
        <section className="iam-threats-section" style={{ background: 'linear-gradient(180deg, #07091a 0%, #060c1a 60%, #07091a 100%)', borderTop: '2px solid rgba(255,102,0,0.3)', padding: '60px 90px 80px 90px' }}>

        {/* Badge + Heading */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <span style={{ display: 'inline-block', background: 'rgba(255,102,0,0.15)', border: '1px solid rgba(255,102,0,0.45)', borderRadius: 4, padding: '4px 14px', fontSize: 10, fontWeight: 800, color: '#ff8c42', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 14 }}>
            REAL-WORLD IDENTITY THREATS
          </span>
          <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 34px)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.4px', lineHeight: 1.1, margin: 0 }}>
            <span style={{ color: '#fff' }}>REAL THREATS. REAL ATTACKS. </span>
            <span style={{ color: 'var(--orange)' }}>REAL IMPACT.</span>
          </h2>
        </div>

        {/* 6 Threat Cards */}
        <div className="iam-threat-grid">
          {[
            {
              label: 'CREDENTIAL\nSTUFFING',
              theme: 'red',
              imgSrc: '/assets/Images/threat-credential-stuffing.png',
            },
            {
              label: 'PRIVILEGE\nESCALATION',
              theme: 'orange',
              imgSrc: '/assets/Images/threat-privilege-escalation.png',
            },
            {
              label: 'GOLDEN\nTICKET ATTACK',
              theme: 'gold',
              imgSrc: '/assets/Images/threat-golden-ticket.png',
            },
            {
              label: 'PASS-THE-HASH /\nKERBEROASTING',
              theme: 'purple',
              imgSrc: '/assets/Images/threat-pass-the-hash.png',
            },
            {
              label: 'MFA\nBYPASS',
              theme: 'blue',
              imgSrc: '/assets/Images/threat-mfa-bypass.png',
            },
            {
              label: 'INSIDER\nTHREATS',
              theme: 'green',
              imgSrc: '/assets/Images/threat-insider-threats.png',
            },
          ].map(({ label, theme, imgSrc }) => (
            <div key={label} className={`iam-threat-card threat-card-${theme}`}>
              <ThreatImage src={imgSrc} alt={label.replace('\n', ' ')} />
              <span>{label}</span>
              <div className="divider" />
            </div>
          )
        )
      }
        </div>
      </section>

      {/* ── CAREER OPPORTUNITIES + WHO IS THIS PROGRAM FOR ── */}
      <section style={{ background: '#07091a', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="iam-career-designed-row" style={{ display: 'flex', width: '100%' }}>

          {/* LEFT: Career Opportunities */}
          <div className="iam-career-col" style={{ flex: '0 0 58%', padding: '44px 40px 44px 48px', borderRight: '1px solid rgba(255,255,255,0.09)' }}>
            <div style={{ marginBottom: 14, textAlign: 'center' }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,102,0,0.15)', border: '1px solid rgba(255,102,0,0.45)', borderRadius: 4, padding: '4px 14px', fontSize: 10, fontWeight: 800, color: '#ff8c42', letterSpacing: '2px', textTransform: 'uppercase' }}>
                YOUR FUTURE IN IAM
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 40px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: 28, textAlign: 'center' }}>
              <span style={{ color: '#fff' }}>CAREER </span>
              <span style={{ color: 'var(--orange)' }}>OPPORTUNITIES</span>
            </h2>
            <div className="iam-career-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
              {[
                {
                  label: 'IAM\nENGINEER',
                  color: '#3b82f6',
                  icon: (
                    <svg width="62" height="62" viewBox="0 0 44 44" fill="none">
                      <path d="M22 6L8 12v12c0 8 5.5 14 14 16 8.5-2 14-8 14-16V12z" stroke="#3b82f6" strokeWidth="2" strokeLinejoin="round"/>
                      <circle cx="22" cy="19" r="4.2" stroke="#3b82f6" strokeWidth="2"/>
                      <path d="M14.5 29c0-4.2 3.3-6.5 7.5-6.5s7.5 2.3 7.5 6.5" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ),
                },
                {
                  label: 'IDENTITY\nENGINEER',
                  color: '#22c55e',
                  icon: (
                    <svg width="62" height="62" viewBox="0 0 44 44" fill="none">
                      <rect x="11" y="6" width="22" height="32" rx="4" stroke="#22c55e" strokeWidth="2"/>
                      <circle cx="22" cy="9.5" r="1.6" fill="#22c55e"/>
                      <circle cx="22" cy="18.5" r="4" stroke="#22c55e" strokeWidth="1.8"/>
                      <path d="M15 30.5c0-3.6 3-5.5 7-5.5s7 1.9 7 5.5" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  ),
                },
                {
                  label: 'IDENTITY\nGOVERNANCE\nANALYST',
                  color: '#a855f7',
                  icon: (
                    <svg width="62" height="62" viewBox="0 0 44 44" fill="none">
                      <rect x="12" y="8" width="20" height="28" rx="2.5" stroke="#a855f7" strokeWidth="2"/>
                      <path d="M17 6h10a2 2 0 01-2 4h-6a2 2 0 01-2-4z" stroke="#a855f7" strokeWidth="1.8"/>
                      <path d="M16 21l2 2 4-4" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 28l2 2 4-4" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                },
                {
                  label: 'PAM\nENGINEER',
                  color: '#f97316',
                  icon: (
                    <svg width="62" height="62" viewBox="0 0 44 44" fill="none">
                      <rect x="12" y="20" width="20" height="16" rx="3" stroke="#f97316" strokeWidth="2"/>
                      <path d="M16 20v-6a6 6 0 0112 0v6" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="22" cy="27" r="2.2" fill="#f97316"/>
                      <line x1="22" y1="29" x2="22" y2="32" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ),
                },
                {
                  label: 'ZERO TRUST\nCONSULTANT',
                  color: '#14b8a6',
                  icon: (
                    <svg width="62" height="62" viewBox="0 0 44 44" fill="none">
                      <path d="M22 6L8 12v11c0 8 5.5 14 14 16 8.5-2 14-8 14-16V12z" stroke="#14b8a6" strokeWidth="2" strokeLinejoin="round"/>
                      <path d="M15.5 22l4.5 4.5 9-9" stroke="#14b8a6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                },
                {
                  label: 'ACCESS\nMANAGEMENT\nSPECIALIST',
                  color: '#eab308',
                  icon: (
                    <svg width="62" height="62" viewBox="0 0 44 44" fill="none">
                      <circle cx="22" cy="13" r="5" stroke="#eab308" strokeWidth="1.8"/>
                      <path d="M12 34c0-6 4.5-9 10-9s10 3 10 9" stroke="#eab308" strokeWidth="1.8" strokeLinecap="round"/>
                      <circle cx="9" cy="17" r="3.6" stroke="#eab308" strokeWidth="1.6" opacity="0.75"/>
                      <path d="M2 33c0-4.6 3-7 7-7" stroke="#eab308" strokeWidth="1.6" strokeLinecap="round" opacity="0.75"/>
                      <circle cx="35" cy="17" r="3.6" stroke="#eab308" strokeWidth="1.6" opacity="0.75"/>
                      <path d="M42 33c0-4.6-3-7-7-7" stroke="#eab308" strokeWidth="1.6" strokeLinecap="round" opacity="0.75"/>
                    </svg>
                  ),
                },
                {
                  label: 'IAM\nARCHITECT',
                  color: '#3b82f6',
                  icon: (
                    <svg width="62" height="62" viewBox="0 0 44 44" fill="none">
                      <rect x="7" y="24" width="10" height="14" rx="1.5" stroke="#3b82f6" strokeWidth="1.8"/>
                      <rect x="17" y="16" width="10" height="22" rx="1.5" stroke="#3b82f6" strokeWidth="1.8"/>
                      <rect x="27" y="8" width="10" height="30" rx="1.5" stroke="#3b82f6" strokeWidth="1.8"/>
                      <line x1="10" y1="29" x2="14" y2="29" stroke="#3b82f6" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
                      <line x1="20" y1="21" x2="24" y2="21" stroke="#3b82f6" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
                      <line x1="30" y1="13" x2="34" y2="13" stroke="#3b82f6" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
                    </svg>
                  ),
                },
              ].map(({ label, color, icon }) => (
                <div key={label} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  padding: '6px 4px 0',
                  gap: 14,
                }}>
                  <div style={{ width: 62, height: 62, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, filter: `drop-shadow(0 0 7px ${color}90)` }}>
                    {icon}
                  </div>
                  <p style={{ fontSize: 9, fontWeight: 900, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.6px', textAlign: 'center', lineHeight: 1.45, margin: 0, whiteSpace: 'pre-line' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Who Is This Program For */}
          <div className="iam-designed-col" style={{ flex: 1, padding: '44px 48px 44px 40px', background: '#080b18' }}>
            <div style={{ marginBottom: 14, textAlign: 'center' }}>
              <span style={{ display: 'inline-block', background: 'rgba(56,189,248,0.12)', border: '1px solid rgba(56,189,248,0.4)', borderRadius: 4, padding: '4px 14px', fontSize: 10, fontWeight: 800, color: '#38bdf8', letterSpacing: '2px', textTransform: 'uppercase' }}>
                DESIGNED FOR
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(20px, 2.4vw, 36px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: 28, textAlign: 'center' }}>
              <span style={{ color: '#fff' }}>WHO IS THIS </span>
              <span style={{ color: '#38bdf8' }}>PROGRAM FOR?</span>
            </h2>
            <div className="iam-designed-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
              {[
                {
                  label: 'SYSTEM\nADMINISTRATORS',
                  desc: 'Manage identities, access and infrastructure.',
                  color: '#3b82f6',
                  icon: (
                    <svg width="52" height="52" viewBox="0 0 36 36" fill="none">
                      <rect x="3" y="5" width="30" height="20" rx="2.5" stroke="#3b82f6" strokeWidth="1.4"/>
                      <line x1="13" y1="25" x2="13" y2="31" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round"/>
                      <line x1="23" y1="25" x2="23" y2="31" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round"/>
                      <line x1="9" y1="31" x2="27" y2="31" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round"/>
                      <circle cx="18" cy="15" r="4" stroke="#3b82f6" strokeWidth="1.2"/>
                      <path d="M12 22c0-3.3 2.7-5 6-5s6 1.7 6 5" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  ),
                },
                {
                  label: 'CYBERSECURITY\nPROFESSIONALS',
                  desc: 'Strengthen security with identity-centric strategies.',
                  color: '#22c55e',
                  icon: (
                    <svg width="52" height="52" viewBox="0 0 36 36" fill="none">
                      <path d="M18 3L4 9v12c0 8 6 13 14 15 8-2 14-7 14-15V9z" fill="rgba(34,197,94,0.08)" stroke="#22c55e" strokeWidth="1.4" strokeLinejoin="round"/>
                      <rect x="13" y="16" width="10" height="9" rx="1.5" stroke="#22c55e" strokeWidth="1.2"/>
                      <path d="M15 16v-2.5a3 3 0 016 0V16" stroke="#22c55e" strokeWidth="1.2" strokeLinecap="round"/>
                      <circle cx="18" cy="20.5" r="1.5" fill="#22c55e"/>
                    </svg>
                  ),
                },
                {
                  label: 'GRC &\nCOMPLIANCE TEAMS',
                  desc: 'Ensure access governance and regulatory alignment.',
                  color: '#a855f7',
                  icon: (
                    <svg width="52" height="52" viewBox="0 0 36 36" fill="none">
                      <rect x="8" y="4" width="20" height="28" rx="2.5" stroke="#a855f7" strokeWidth="1.4"/>
                      <path d="M14 4h2a2 2 0 004 0h2" stroke="#a855f7" strokeWidth="1.2" strokeLinecap="round"/>
                      <line x1="12" y1="13" x2="24" y2="13" stroke="#a855f7" strokeWidth="1.2" strokeLinecap="round"/>
                      <path d="M12 18l2.5 2.5 5-5" stroke="#a855f7" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 24l2.5 2.5 5-5" stroke="#a855f7" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                },
                {
                  label: 'CLOUD &\nDEVOPS ENGINEERS',
                  desc: 'Secure identities across cloud and hybrid environments.',
                  color: '#f97316',
                  icon: (
                    <svg width="52" height="52" viewBox="0 0 36 36" fill="none">
                      <path d="M8 24a6 6 0 010-12 6 6 0 0110.5-2A7 7 0 0128 24H8z" fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth="1.4" strokeLinejoin="round"/>
                      <path d="M13 15.5l-3 3 3 3" stroke="#f97316" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19.5 15.5l3 3-3 3" stroke="#f97316" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="17.5" y1="14.5" x2="15.5" y2="20.5" stroke="#f97316" strokeWidth="1.1" strokeLinecap="round"/>
                    </svg>
                  ),
                },
              ].map(({ label, desc, color, icon }) => (
                <div key={label} style={{
                  background: '#0a0c18',
                  border: `1px solid ${color}30`,
                  borderRadius: 10,
                  padding: '18px 12px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: 4,
                }}>
                  <div style={{ width: 64, height: 64, borderRadius: 10, background: `${color}12`, border: `1px solid ${color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginBottom: 6 }}>
                    {icon}
                  </div>
                  <p style={{ fontSize: 10, fontWeight: 900, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.6px', lineHeight: 1.4, margin: 0, whiteSpace: 'pre-line' }}>{label}</p>
                  <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)', lineHeight: 1.55, margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ background: 'linear-gradient(90deg, #05080f 0%, #070d1e 40%, #060c1a 100%)', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden' }}>
        <div className="iam-cta-row" style={{ display: 'flex', alignItems: 'stretch', minHeight: 130 }}>

          {/* Left: Shield image placeholder */}
          <div className="iam-cta-image-col" style={{ flex: 1, minWidth: 90, background: 'linear-gradient(135deg, rgba(0,60,180,0.18) 0%, rgba(0,100,255,0.08) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Glow ring */}
            <div style={{ position: 'absolute', width: 140, height: 140, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
            {/* Placeholder for user's shield image */}
            <img src="/assets/Images/iam-cta-shield.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'relative', zIndex: 1 }} onError={e => { e.target.style.display = 'none'; }} />
          </div>

          {/* Center: Heading + 4 Feature Icons, pushed together toward the right */}
          <div className="iam-cta-center-wrap" style={{ flexShrink: 0, display: 'flex', alignItems: 'stretch', justifyContent: 'flex-end', minWidth: 0 }}>

          {/* Center-left: Badge + Heading */}
          <div className="iam-cta-heading-col" style={{ padding: '22px 28px 22px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '1px solid rgba(255,255,255,0.07)', flexShrink: 0 }}>
            <p style={{ fontSize: 9.5, fontWeight: 800, color: '#ff8c42', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 10 }}>
              THE FUTURE IS IDENTITY-FIRST
            </p>
            <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 40px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.2, margin: 0 }}>
              <span style={{ color: '#fff' }}>SECURE </span><span style={{ color: 'var(--orange)' }}>IDENTITIES.</span><br />
              <span style={{ color: '#fff' }}>CONTROL </span><span style={{ color: '#3b82f6' }}>ACCESS.</span><br />
              <span style={{ color: '#fff' }}>ENABLE </span><span style={{ color: '#22c55e' }}>TRUST.</span>
            </h2>
          </div>

          {/* Center-right: 4 Feature Icons */}
          <div className="iam-cta-icons-col" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 16px', borderRight: '1px solid rgba(255,255,255,0.07)', flexShrink: 0 }}>
            {[
              {
                label: 'LIVE INSTRUCTOR\nLED TRAINING',
                color: '#3b82f6',
                icon: (
                  <svg width="46" height="46" viewBox="0 0 32 32" fill="none">
                    <rect x="2" y="3" width="28" height="19" rx="2" stroke="#3b82f6" strokeWidth="1.4"/>
                    <line x1="11" y1="26" x2="21" y2="26" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round"/>
                    <line x1="16" y1="22" x2="16" y2="26" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round"/>
                    <circle cx="16" cy="10" r="3" stroke="#3b82f6" strokeWidth="1.3"/>
                    <path d="M10 18c0-3.3 2.7-5 6-5s6 1.7 6 5" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                label: 'LIVE DATA &\nREAL ENVIRONMENT',
                color: '#22c55e',
                icon: (
                  <svg width="46" height="46" viewBox="0 0 32 32" fill="none">
                    <ellipse cx="16" cy="7" rx="9" ry="4" stroke="#22c55e" strokeWidth="1.3"/>
                    <path d="M7 7v8c0 2.2 4 4 9 4s9-1.8 9-4V7" stroke="#22c55e" strokeWidth="1.3"/>
                    <path d="M7 15v8c0 2.2 4 4 9 4s9-1.8 9-4v-8" stroke="#22c55e" strokeWidth="1.3"/>
                    <path d="M7 11c0 2.2 4 4 9 4s9-1.8 9-4" stroke="#22c55e" strokeWidth="1" strokeDasharray="2 1.5"/>
                    <path d="M7 19c0 2.2 4 4 9 4s9-1.8 9-4" stroke="#22c55e" strokeWidth="1" strokeDasharray="2 1.5"/>
                  </svg>
                ),
              },
              {
                label: 'HANDS-ON\nLABS',
                color: '#a855f7',
                icon: (
                  <svg width="46" height="46" viewBox="0 0 32 32" fill="none">
                    <path d="M11 4v10l-6 12h18L17 14V4" stroke="#a855f7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="11" y1="4" x2="17" y2="4" stroke="#a855f7" strokeWidth="1.3" strokeLinecap="round"/>
                    <path d="M9 22h12" stroke="#a855f7" strokeWidth="1.2" strokeLinecap="round"/>
                    <circle cx="16" cy="19" r="2" fill="rgba(168,85,247,0.3)" stroke="#a855f7" strokeWidth="1"/>
                  </svg>
                ),
              },
              {
                label: 'INDUSTRY-RECOGNISED\nEXPERTISE',
                color: '#f97316',
                icon: (
                  <svg width="46" height="46" viewBox="0 0 32 32" fill="none">
                    <rect x="4" y="4" width="24" height="18" rx="2" stroke="#f97316" strokeWidth="1.3"/>
                    <line x1="4" y1="10" x2="28" y2="10" stroke="#f97316" strokeWidth="1" strokeDasharray="2 2"/>
                    <circle cx="16" cy="21" r="7" fill="#07091a" stroke="#f97316" strokeWidth="1.3"/>
                    <path d="M13 21l2 2 4-4" stroke="#f97316" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 28l4-2 4 2" stroke="#f97316" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
            ].map(({ label, color, icon }, i) => (
              <div key={label} className="iam-cta-icon-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '0 10px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                <div style={{ width: 62, height: 62, display: 'flex', alignItems: 'center', justifyContent: 'center', filter: `drop-shadow(0 0 8px ${color}90)` }}>
                  {icon}
                </div>
                <p style={{ fontSize: 8.5, fontWeight: 800, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.7px', textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.4, margin: 0, whiteSpace: 'pre-line' }}>{label}</p>
              </div>
            ))}
          </div>

          </div>

          {/* Right: CTA Button + Tagline */}
          <div className="iam-cta-button-col" style={{ padding: '22px 36px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, flexShrink: 0 }}>
            <a href="#register" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'var(--orange)',
              color: '#fff',
              fontWeight: 900,
              fontSize: 13,
              padding: '13px 26px',
              borderRadius: 6,
              textDecoration: 'none',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}>
              REGISTER INTEREST <ArrowRight size={14} />
            </a>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', textAlign: 'center', lineHeight: 1.55, margin: 0 }}>
              Take control of identity.<br />Build a <span style={{ color: 'var(--orange)' }}>secure</span> future.
            </p>
          </div>

        </div>
      </section>

      <style>{`
        @keyframes iamHeroLineIn {
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
        .iam-hero-line {
          display: inline-block;
          opacity: 0;
          animation: iamHeroLineIn 0.72s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* IAM Custom Hero Layout */
        .iam-hero-section {
          position: relative;
          overflow: hidden;
          background: #000;
          margin-top: -70px;
          padding-top: 70px;
          min-height: 100vh;
          display: flex;
          align-items: stretch;
        }
        .iam-hero-bg-container {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 62%;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
        }
        .iam-hero-bg-img {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: left center;
          display: block;
        }
        .iam-hero-bg-blend {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, #000 0%, rgba(0,0,0,0.4) 6%, transparent 20%);
        }
        .iam-hero-content-wrap {
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          align-items: stretch;
          min-height: calc(100vh - 70px);
        }
        .iam-hero-text-col {
          flex: 0 0 45%;
          max-width: 650px;
          background: transparent;
          padding: 40px 20px 40px 90px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* Environment Strip Layout */
        .iam-env-strip-inner {
          width: 100%;
          padding: 20px 40px 20px 90px;
          display: flex;
          align-items: center;
          min-height: 110px;
        }
        .iam-env-strip-left {
          display: flex;
          align-items: center;
          padding-right: 36px;
          border-right: 1px solid rgba(255,255,255,0.09);
          flex-shrink: 0;
        }
        .iam-env-strip-middle {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 0 20px;
        }
        .iam-env-strip-right {
          padding-left: 36px;
          border-left: 1px solid rgba(255,255,255,0.09);
          flex-shrink: 0;
        }

        /* Modules Grid Layout */
        .iam-modules-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          border-top: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 24px 40px 24px 90px;
          gap: 14px;
          background: #060810;
        }

        /* Bottom Bar Layout */
        .iam-bottom-bar {
          padding: 0 40px 0 90px;
          display: flex;
          align-items: stretch;
          min-height: 76px;
        }
        .iam-bottom-bar-left {
          flex: 0 0 46%;
          padding-right: 40px;
          border-right: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
        }
        .iam-bottom-bar-right {
          flex: 1;
          padding-left: 40px;
          display: flex;
          align-items: center;
        }

        /* Tech Grid Layout */
        .iam-tech-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          padding: 0 90px 40px 90px;
          background: #07090f;
        }
        .iam-tech-card {
          background: linear-gradient(145deg, #080d19 0%, #0c1426 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          min-height: 250px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
        .iam-tech-card:hover {
          border-color: rgba(56, 189, 248, 0.25);
          box-shadow: 0 8px 30px rgba(56, 189, 248, 0.08);
          transform: translateY(-2px);
        }

        /* Threat Cards */
        .iam-threat-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
        }
        .iam-threat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding: 24px 16px 20px 16px;
          border-radius: 12px;
          transition: all 0.3s ease;
          min-height: 250px;
          overflow: hidden;
        }
        .iam-threat-card img {
          height: 120px;
          width: 120px;
          object-fit: contain;
          transform: scale(1.45);
          margin-top: 10px;
          margin-bottom: 20px;
          transition: transform 0.3s ease;
          max-width: none !important;
        }
        .iam-threat-card:hover img {
          transform: scale(1.55);
        }
        .iam-threat-card span {
          font-size: 14px;
          font-weight: 800;
          color: #fff;
          text-align: center;
          line-height: 1.35;
          white-space: pre-line;
          text-transform: uppercase;
          position: relative;
          z-index: 2;
        }
        .iam-threat-card .divider {
          width: 24px;
          height: 2px;
          margin-top: 8px;
          position: relative;
          z-index: 2;
        }

        /* Red Card */
        .threat-card-red {
          background: rgba(239, 68, 68, 0.03);
          border: 1px solid rgba(239, 68, 68, 0.15);
        }
        .threat-card-red:hover {
          border-color: rgba(239, 68, 68, 0.35);
          box-shadow: 0 8px 30px rgba(239, 68, 68, 0.08);
          transform: translateY(-3px);
        }
        .threat-card-red .divider {
          background: #ef4444;
        }

        /* Orange Card */
        .threat-card-orange {
          background: rgba(249, 115, 22, 0.03);
          border: 1px solid rgba(249, 115, 22, 0.15);
        }
        .threat-card-orange:hover {
          border-color: rgba(249, 115, 22, 0.35);
          box-shadow: 0 8px 30px rgba(249, 115, 22, 0.08);
          transform: translateY(-3px);
        }
        .threat-card-orange .divider {
          background: #f97316;
        }

        /* Gold Card */
        .threat-card-gold {
          background: rgba(245, 158, 11, 0.03);
          border: 1px solid rgba(245, 158, 11, 0.15);
        }
        .threat-card-gold:hover {
          border-color: rgba(245, 158, 11, 0.35);
          box-shadow: 0 8px 30px rgba(245, 158, 11, 0.08);
          transform: translateY(-3px);
        }
        .threat-card-gold .divider {
          background: #f59e0b;
        }

        /* Purple Card */
        .threat-card-purple {
          background: rgba(168, 85, 247, 0.03);
          border: 1px solid rgba(168, 85, 247, 0.15);
        }
        .threat-card-purple:hover {
          border-color: rgba(168, 85, 247, 0.35);
          box-shadow: 0 8px 30px rgba(168, 85, 247, 0.08);
          transform: translateY(-3px);
        }
        .threat-card-purple .divider {
          background: #a855f7;
        }

        /* Blue Card */
        .threat-card-blue {
          background: rgba(56, 189, 248, 0.03);
          border: 1px solid rgba(56, 189, 248, 0.15);
        }
        .threat-card-blue:hover {
          border-color: rgba(56, 189, 248, 0.35);
          box-shadow: 0 8px 30px rgba(56, 189, 248, 0.08);
          transform: translateY(-3px);
        }
        .threat-card-blue .divider {
          background: #38bdf8;
        }

        /* Green Card */
        .threat-card-green {
          background: rgba(34, 197, 94, 0.03);
          border: 1px solid rgba(34, 197, 94, 0.15);
        }
        .threat-card-green:hover {
          border-color: rgba(34, 197, 94, 0.35);
          box-shadow: 0 8px 30px rgba(34, 197, 94, 0.08);
          transform: translateY(-3px);
        }
        .threat-card-green .divider {
          background: #22c55e;
        }

        /* ── Tablet (≤ 1023px) ── */
        @media (max-width: 1023px) {
          .iam-hero-section {
            margin-top: 0;
            padding-top: 0;
            flex-direction: column;
            min-height: auto;
          }
          .iam-hero-content-wrap {
            flex-direction: column;
            min-height: auto;
          }
          .iam-hero-text-col {
            flex: none;
            width: 100%;
            max-width: 100%;
            padding: 40px 40px 30px 40px;
          }
          .iam-hero-bg-container {
            position: relative;
            width: 100%;
            height: 380px;
            order: 2;
          }
          .iam-hero-content-wrap {
            order: 1;
          }
          .iam-hero-bg-img {
            object-position: center center;
          }
          .iam-hero-bg-blend {
            background: linear-gradient(to bottom, #000 0%, transparent 15%, transparent 85%, #000 100%);
          }
          .iam-env-strip-inner {
            flex-direction: column;
            gap: 20px;
            padding: 30px 40px;
            text-align: center;
          }
          .iam-env-strip-left {
            border-right: none;
            padding-right: 0;
            justify-content: center;
          }
          .iam-env-strip-middle {
            flex-wrap: wrap;
            gap: 16px 24px;
            justify-content: center;
            padding: 0;
          }
          .iam-env-strip-right {
            border-left: none;
            padding-left: 0;
          }
          .iam-bottom-bar {
            flex-direction: column;
            padding: 24px 40px;
            min-height: auto;
            gap: 20px;
          }
          .iam-bottom-bar-left, .iam-bottom-bar-right {
            flex: none;
            width: 100%;
            padding: 0;
            border-right: none;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 16px 20px;
          }
          .iam-bottom-bar-spacer {
            display: none !important;
          }
          .iam-modules-grid {
            grid-template-columns: repeat(2, 1fr);
            padding: 24px 40px;
            gap: 20px;
          }
          .iam-tech-grid {
            grid-template-columns: repeat(2, 1fr);
            padding: 0 40px 40px 40px;
            gap: 16px;
          }
          .iam-career-designed-row {
            flex-direction: column !important;
          }
          .iam-career-col {
            flex: none !important;
            width: 100% !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.09) !important;
          }
          .iam-designed-col {
            flex: none !important;
            width: 100% !important;
          }
          .iam-career-grid {
            grid-template-columns: repeat(4, 1fr) !important;
            row-gap: 20px !important;
          }
          .iam-designed-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .iam-cta-row {
            flex-direction: column !important;
            min-height: auto !important;
          }
          .iam-cta-image-col {
            width: 100% !important;
            height: 180px !important;
            flex: none !important;
          }
          .iam-cta-center-wrap {
            flex-direction: column !important;
            width: 100% !important;
          }
          .iam-cta-heading-col {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.07) !important;
            align-items: center !important;
            text-align: center !important;
            width: 100% !important;
            padding: 24px 24px !important;
          }
          .iam-cta-icons-col {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.07) !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            width: 100% !important;
            padding: 20px 16px !important;
          }
          .iam-cta-icon-item {
            border-right: none !important;
          }
          .iam-cta-button-col {
            width: 100% !important;
          }
          .iam-perimeter-row {
            flex-direction: column !important;
            padding: 28px 40px 0 40px !important;
          }
          .iam-perimeter-left {
            flex: none !important;
            width: 100% !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.08) !important;
            padding-right: 0 !important;
          }
          .iam-perimeter-right {
            padding-left: 0 !important;
            padding-top: 24px !important;
          }
        }

        /* ── Mobile (≤ 767px) ── */
        @media (max-width: 767px) {
          .iam-hero-text-col {
            padding: 30px 20px 20px 20px;
          }
          .iam-hero-bg-container {
            height: 260px;
          }
          .iam-env-strip-inner {
            padding: 24px 20px;
          }
          .iam-env-strip-middle {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 12px !important;
            justify-items: center !important;
            width: 100% !important;
          }
          .iam-env-strip-middle > div {
            border-right: none !important;
            padding: 16px 10px !important;
            background: rgba(255,255,255,0.03) !important;
            border: 1px solid rgba(255,255,255,0.08) !important;
            border-radius: 10px !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          .iam-env-strip-middle > div:last-child {
            grid-column: 1 / -1 !important;
            width: calc(50% - 6px) !important;
            margin: 0 auto !important;
          }
          .iam-bottom-bar {
            padding: 20px;
          }
          .iam-bottom-bar-left, .iam-bottom-bar-right {
            gap: 12px 10px;
          }
          .iam-modules-grid {
            grid-template-columns: 1fr;
            padding: 20px;
            gap: 16px;
          }
          .iam-tech-grid {
            grid-template-columns: 1fr;
            padding: 0 20px 30px 20px;
            gap: 14px;
          }
          .iam-career-col, .iam-designed-col {
            padding: 30px 20px !important;
          }
          .iam-career-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 16px !important;
          }
          .iam-designed-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
          .iam-cta-heading-col {
            padding: 20px !important;
          }
          .iam-cta-heading-col h2 {
            font-size: 22px !important;
          }
          .iam-cta-icons-col {
            gap: 16px 10px !important;
            padding: 20px 12px !important;
          }
          .iam-cta-icon-item {
            padding: 0 6px !important;
          }
          .iam-cta-button-col {
            padding: 20px !important;
          }
          .iam-perimeter-row {
            padding: 24px 20px 0 20px !important;
          }
          .iam-perimeter-icons, .iam-experience-icons {
            flex-wrap: wrap !important;
            gap: 20px 8px !important;
          }
          .iam-perimeter-item, .iam-experience-item {
            flex: 0 0 30% !important;
          }

          /* Feature 5-card grid */
          .iam-feature-wrap { padding: 0 20px 24px 20px !important; }
          .iam-feature-grid { grid-template-columns: repeat(2, 1fr) !important; }

          /* Threats section */
          .iam-threats-section { padding: 40px 20px 48px 20px !important; }
          .iam-threat-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 12px !important; }
          .iam-threat-card { min-height: 180px !important; }
          .iam-threat-card img { height: 80px !important; width: 80px !important; }
          .iam-threat-card span { font-size: 11px !important; }
        }

        @media (max-width: 480px) {
          .iam-feature-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .iam-threat-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; }
          .iam-threat-card { min-height: 160px !important; }
          .iam-threat-card img { height: 70px !important; width: 70px !important; }
        }
        `}</style>
      {/* ── CONTACT FORM ── */}
      <section className="iam-section-pad" style={{ background: 'var(--bg-card)', padding: '88px 0', overflowX: 'hidden' }} id="register">
        <div className="container-xl">
          <RevealSection>
            <div className="row g-5 align-items-center justify-content-center">
              <div className="col-12 col-lg-5 contact-info-col">
                <div className="section-label mb-3">Register Your Interest</div>
                <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 46px)', fontWeight: 900, marginBottom: 16, color: '#fff' }}>
                  Start Your IAM <span style={{ color: 'var(--orange)' }}>Career Today.</span>
                </h2>
                <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 28 }}>
                  Seats are limited. Submit your interest and our team will reach out with cohort dates and full program details.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    { Icon: Shield,    text: 'Hands-On IAM Training' },
                    { Icon: Lock,      text: 'Enterprise Identity Solutions' },
                    { Icon: Award,     text: 'IAM Certification' },
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
