import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import GlobalContactForm from '../components/GlobalContactForm';
import {
  Target, Scale, Shield, Activity, Settings2, CheckSquare,
  Cpu, Database, BarChart3, Bot, MessageSquare,
  ArrowRight, CheckCircle, Home, ChevronRight as Breadcrumb,
  Users, Briefcase, Award, FlaskConical, TestTube, Lock,
  ClipboardCheck, TrendingUp, ShieldCheck, AppWindow, Infinity as InfinityIcon, Trophy,
  Brain, Code2, AlertTriangle, UserCheck, Search, GraduationCap, Boxes,
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



const benefits = [
  { Icon: Briefcase,    label: 'Job-Ready Skills',    desc: 'Become an AI Evaluation Engineer, Quality Analyst or Safety Specialist.' },
  { Icon: Database,     label: 'Real-World Training', desc: 'Learn with real models, real data and real evaluation pipelines.' },
  { Icon: Users,        label: 'Expert Mentors',      desc: 'Learn from active AI engineers and evaluation professionals.' },
  { Icon: FlaskConical, label: 'Practical Approach',  desc: 'Hands-on labs, case studies and scenario-based learning.' },
  { Icon: Award,        label: 'Certification Paths', desc: 'Earn the Certified AI Evaluation Professional (CAEP) credential.' },
];

const MonitorChart = ({ size = 24, strokeWidth = 2, style = {}, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={style.color || 'currentColor'}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="14" x="2" y="3" rx="2" />
    <path d="M6 12l5-5 3 3 4-4" />
    <path d="M14 6h4v4" />
    <circle cx="6" cy="12" r="1" fill={style.color || 'currentColor'} />
    <circle cx="11" cy="7" r="1" fill={style.color || 'currentColor'} />
    <circle cx="14" cy="10" r="1" fill={style.color || 'currentColor'} />
    <circle cx="18" cy="6" r="1" fill={style.color || 'currentColor'} />
    <line x1="12" x2="12" y1="17" y2="21" />
    <line x1="8" x2="16" y1="21" y2="21" />
  </svg>
);

const ShieldCheckCircle = ({ size = 24, strokeWidth = 2, style = {}, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={style.color || 'currentColor'}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
    <circle cx="12" cy="12.5" r="3.5" />
    <path d="m9.5 12 1.5 1.5 3.5-3.5" />
  </svg>
);

const PerformanceChart = ({ size = 24, strokeWidth = 2, style = {}, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={style.color || 'currentColor'}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="6" y="18" width="2" height="3" rx="0.5" />
    <rect x="10" y="13" width="2" height="8" rx="0.5" />
    <rect x="14" y="15" width="2" height="6" rx="0.5" />
    <rect x="18" y="10" width="2" height="11" rx="0.5" />
    <path d="M7 12l4-5 4 3 4-5" />
    <circle cx="7" cy="12" r="1" fill={style.color || 'currentColor'} />
    <circle cx="11" cy="7" r="1" fill={style.color || 'currentColor'} />
    <circle cx="15" cy="10" r="1" fill={style.color || 'currentColor'} />
    <circle cx="19" cy="5" r="1" fill={style.color || 'currentColor'} />
    <path d="M7 4v4" />
    <path d="M5.5 6.5L7 8l1.5-1.5" />
  </svg>
);

const RealModels = ({ size = 24, strokeWidth = 2, style = {}, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={style.color || 'currentColor'}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M6 20v-2a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2" />
    <circle cx="12" cy="7" r="3.5" />
    <path d="M2 20v-1a4 4 0 0 1 4-4h2" />
    <circle cx="6.5" cy="10" r="2.5" />
    <path d="M16 15h2a4 4 0 0 1 4 4v1" />
    <circle cx="17.5" cy="10" r="2.5" />
  </svg>
);

const TrendingBarChart = ({ size = 24, strokeWidth = 2, style = {}, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={style.color || 'currentColor'}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="6" y="16" width="2" height="5" rx="0.5" />
    <rect x="11" y="12" width="2" height="9" rx="0.5" />
    <rect x="16" y="8" width="2" height="13" rx="0.5" />
    <path d="M5 13l6-5 7-4" />
    <path d="M14 4h4v4" />
  </svg>
);

const ClipboardAssurance = ({ size = 24, strokeWidth = 2, style = {}, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={style.color || 'currentColor'}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="M7.5 9.5l1 1 2-2" />
    <line x1="13" y1="9" x2="17" y2="9" />
    <line x1="13" y1="11" x2="17" y2="11" />
    <line x1="13" y1="14" x2="17" y2="14" />
    <line x1="13" y1="16" x2="17" y2="16" />
    <path d="M7.5 19.5l1 1 2-2" />
    <line x1="13" y1="19" x2="17" y2="19" />
    <line x1="13" y1="21" x2="17" y2="21" />
  </svg>
);

const ModernEvalTarget = ({ size = 24, strokeWidth = 2, style = {}, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={style.color || 'currentColor'}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4.5" />
    <line x1="12" y1="2" x2="12" y2="5" />
    <line x1="12" y1="19" x2="12" y2="22" />
    <line x1="2" y1="12" x2="5" y2="12" />
    <line x1="19" y1="12" x2="22" y2="12" />
    <circle cx="12" cy="12" r="1.2" fill={style.color || 'currentColor'} />
    <line x1="12" y1="12" x2="16.5" y2="7.5" />
  </svg>
);

const AgentBot = ({ size = 24, strokeWidth = 2, style = {}, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={style.color || 'currentColor'}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 5V2" />
    <rect x="7" y="5" width="10" height="7" rx="2" />
    <circle cx="10" cy="8.5" r="1.2" fill={style.color || 'currentColor'} stroke="none" />
    <circle cx="14" cy="8.5" r="1.2" fill={style.color || 'currentColor'} stroke="none" />
    <path d="M12 12v2" />
    <rect x="6" y="14" width="12" height="6" rx="1.5" />
    <path d="M6 15.5a1.5 1.5 0 0 0-2 1.5v0a1.5 1.5 0 0 0 2 1.5" />
    <path d="M18 15.5a1.5 1.5 0 0 1 2 1.5v0a1.5 1.5 0 0 1-2 1.5" />
  </svg>
);

const DoubleInfinity = ({ size = 24, strokeWidth = 2, style = {}, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={style.color || 'currentColor'}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 12c-1.8-2.4-3.7-3.5-5.5-3.5a3.5 3.5 0 1 0 0 7c1.8 0 3.7-1.1 5.5-3.5Zm0 0c1.8 2.4 3.7 3.5 5.5 3.5a3.5 3.5 0 1 0 0-7c-1.8 0-3.7 1.1-5.5 3.5Z" />
    <path d="M12 12c-1-1.3-3-2-5-2a2 2 0 1 0 0 4c2 0 4-0.7 5-2Zm0 0c1 1.3 3 2 5 2a2 2 0 1 0 0-4c-2 0-4-0.7-5-2Z" />
  </svg>
);

const BrainCheck = ({ size = 24, strokeWidth = 2, style = {}, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={style.color || 'currentColor'}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 18V5" />
    <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" />
    <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" />
    <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" />
    <path d="M18 18a4 4 0 0 0 2-7.464" />
    <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" />
    <path d="M6 18a4 4 0 0 1-2-7.464" />
    <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />
    <circle cx="18" cy="18" r="4" fill="#050810" stroke={style.color || 'currentColor'} strokeWidth={strokeWidth} />
    <path d="M16 18l1.5 1.5 2.5-2.5" stroke={style.color || 'currentColor'} strokeWidth={strokeWidth} />
  </svg>
);

const RAGEvalIcon = ({ size = 24, strokeWidth = 2, style = {}, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={style.color || 'currentColor'}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <ellipse cx="11" cy="13" rx="4.5" ry="1.8" />
    <path d="M6.5 13v4c0 1 2 1.8 4.5 1.8s4.5-.8 4.5-1.8v-4" />
    <path d="M6.5 17v4c0 1 2 1.8 4.5 1.8s4.5-.8 4.5-1.8v-4" />
    <circle cx="11" cy="9.5" r="5" />
    <line x1="14.5" y1="13" x2="20.5" y2="19" />
    <path d="M13.8 14.2l1.4-1.4" />
  </svg>
);

const AgentBotReliability = ({ size = 24, strokeWidth = 2, style = {}, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={style.color || 'currentColor'}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 5V2" />
    <rect x="7" y="5" width="10" height="7" rx="2" />
    <circle cx="10" cy="8.5" r="1.2" fill={style.color || 'currentColor'} stroke="none" />
    <circle cx="14" cy="8.5" r="1.2" fill={style.color || 'currentColor'} stroke="none" />
    <path d="M12 12v2" />
    <rect x="6" y="14" width="12" height="6" rx="1.5" />
    <path d="M6 15.5a1.5 1.5 0 0 0-2 1.5v0a1.5 1.5 0 0 0 2 1.5" />
    <path d="M18 15.5a1.5 1.5 0 0 1 2 1.5v0a1.5 1.5 0 0 1-2 1.5" />
    <circle cx="17.5" cy="17.5" r="1.2" />
    <line x1="17.5" y1="15.5" x2="17.5" y2="16.3" />
    <line x1="17.5" y1="18.7" x2="17.5" y2="19.5" />
    <line x1="15.5" y1="17.5" x2="16.3" y2="17.5" />
    <line x1="18.7" y1="17.5" x2="19.5" y2="17.5" />
    <line x1="16.1" y1="16.1" x2="16.7" y2="16.7" />
    <line x1="18.3" y1="18.3" x2="18.9" y2="18.9" />
    <line x1="16.1" y1="18.9" x2="16.7" y2="18.3" />
    <line x1="18.3" y1="16.7" x2="18.9" y2="16.1" />
  </svg>
);

const DoubleShieldCheck = ({ size = 24, strokeWidth = 2, style = {}, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={style.color || 'currentColor'}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 19s5.5-3 5.5-7.5V7.5l-5.5-2-5.5 2v4c0 4.5 5.5 7.5 5.5 7.5z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const AxisLineChart = ({ size = 24, strokeWidth = 2, style = {}, ...props }) => {
  const mainColor = style.color || 'currentColor';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={mainColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <g stroke={mainColor} strokeWidth={1.2} strokeOpacity={0.35}>
        <line x1="5" y1="3" x2="5" y2="21" />
        <line x1="5" y1="21" x2="22" y2="21" />
        <line x1="3" y1="7" x2="5" y2="7" />
        <line x1="3" y1="12" x2="5" y2="12" />
        <line x1="3" y1="17" x2="5" y2="17" />
        <line x1="10" y1="21" x2="10" y2="23" />
        <line x1="16" y1="21" x2="16" y2="23" />
      </g>
      <path d="M6 17l4-4 3 3 3-5.5 3 4 2.5-8.5" stroke={mainColor} strokeWidth={strokeWidth} strokeOpacity={1} />
      <circle cx="16" cy="10.5" r="1.2" fill={mainColor} stroke="none" />
      <circle cx="21.5" cy="6" r="1.2" fill={mainColor} stroke="none" />
    </svg>
  );
};

const UserCoderIcon = ({ size = 24, strokeWidth = 2, style = {}, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={style.color || 'currentColor'}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="7" r="3.5" />
    <path d="M8.8 8.2h6.4" />
    <path d="M12 10.5v4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
    <path d="M7 20L8.5 13.5h7L17 20Z" fill="#050810" stroke={style.color || 'currentColor'} strokeWidth={strokeWidth} />
    <path d="M5 20h14l-1.5 2h-11Z" />
    <path d="m10.5 16-1.2 1 1.2 1m3-2 1.2 1-1.2 1" />
    <line x1="12.5" y1="15.5" x2="11.5" y2="18.5" />
  </svg>
);

const RosetteAwardCheck = ({ size = 24, strokeWidth = 2, style = {}, ...props }) => {
  const mainColor = style.color || 'currentColor';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={mainColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8.5 13.5l-1.5 8 3-2 2.5 2" />
      <path d="M15.5 13.5l1.5 8-3-2-2.5 2" />
      <g transform="translate(12, 8.5) scale(0.75) translate(-12, -12)">
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
        <path d="m9 12 2 2 4-4" />
      </g>
    </svg>
  );
};

const BugSearch = ({ size = 24, strokeWidth = 2, style = {}, ...props }) => {
  const mainColor = style.color || 'currentColor';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={mainColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="11" cy="11" r="6" />
      <line x1="15.2" y1="15.2" x2="21" y2="21" />
      <g transform="translate(11, 11) scale(0.38) translate(-12, -12)">
        <path d="M12 20v-9" />
        <path d="M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z" />
        <path d="M14.12 3.88 16 2" />
        <path d="M21 21a4 4 0 0 0-3.81-4" />
        <path d="M21 5a4 4 0 0 1-3.55 3.97" />
        <path d="M22 13h-4" />
        <path d="M3 21a4 4 0 0 1 3.81-4" />
        <path d="M3 5a4 4 0 0 0 3.55 3.97" />
        <path d="M6 13H2" />
        <path d="m8 2 1.88 1.88" />
        <path d="M9 7.13V6a3 3 0 1 1 6 0v1.13" />
      </g>
    </svg>
  );
};

const FileShieldCheck = ({ size = 24, strokeWidth = 2, style = {}, ...props }) => {
  const mainColor = style.color || 'currentColor';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={mainColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7L15 2Z" />
      <path d="M15 2v5h5" />
      <line x1="8" y1="9" x2="14" y2="9" />
      <line x1="8" y1="13" x2="14" y2="13" />
      <line x1="8" y1="17" x2="12" y2="17" />
      <path d="M17.5 21s3.5-1.8 3.5-4.5v-3l-3.5-1.5-3.5 1.5v3c0 2.7 3.5 4.5 3.5 4.5z" fill="#050810" stroke={mainColor} strokeWidth={strokeWidth} />
      <path d="m15.5 16.5 1.2 1.2 2.3-2.3" stroke={mainColor} strokeWidth={strokeWidth} />
    </svg>
  );
};

const ShieldUser = ({ size = 24, strokeWidth = 2, style = {}, ...props }) => {
  const mainColor = style.color || 'currentColor';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={mainColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <circle cx="12" cy="9.5" r="2.5" />
      <path d="M7.5 18a4.5 3 0 0 1 9 0Z" />
    </svg>
  );
};

const TargetUser = ({ size = 24, strokeWidth = 2, style = {}, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={style.color || 'currentColor'}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="8" />
    <line x1="12" y1="2" x2="12" y2="4" />
    <line x1="12" y1="20" x2="12" y2="22" />
    <line x1="2" y1="12" x2="4" y2="12" />
    <line x1="20" y1="12" x2="22" y2="12" />
    <circle cx="12" cy="10.5" r="2" />
    <path d="M9 15.5a3 3 0 0 1 6 0" />
  </svg>
);

const ClipboardListCheck = ({ size = 24, strokeWidth = 2, style = {}, ...props }) => {
  const mainColor = style.color || 'currentColor';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={mainColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m7.5 11 1 1 2-2" />
      <line x1="12.5" y1="11" x2="16" y2="11" />
      <path d="m7.5 16 1 1 2-2" />
      <line x1="12.5" y1="16" x2="16" y2="16" />
    </svg>
  );
};

const BeakerFlask = ({ size = 24, strokeWidth = 2, style = {}, ...props }) => {
  const mainColor = style.color || 'currentColor';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={mainColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2z" />
      <path d="M8.5 2h7" />
      <path d="M12 4.5v3" />
      <path d="M7.8 14.5c1.5-1 3 0.5 4.2 0s2.7-1 4.2 0" />
      <path d="M12 14.5v3.5" />
      <circle cx="12" cy="18" r="1.2" fill="none" />
    </svg>
  );
};

const FileAwardRosette = ({ size = 24, strokeWidth = 2, style = {}, ...props }) => {
  const mainColor = style.color || 'currentColor';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={mainColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="4" y="3" width="14" height="17" rx="2" />
      <line x1="7" y1="7" x2="15" y2="7" />
      <line x1="7" y1="10" x2="15" y2="10" />
      <line x1="7" y1="13" x2="13" y2="13" />
      <line x1="7" y1="16" x2="11" y2="16" />
      <g transform="translate(16.5, 15.5) scale(0.65) translate(-12, -12)">
        <path d="M12 2.69l.73 1.34a2 2 0 0 0 1.63 1.05l1.51.13a2 2 0 0 1 1.1 3.42l-1.12 1.03a2 2 0 0 0-.57 1.76l.33 1.5a2 2 0 0 1-2.9 2.1l-1.31-.79a2 2 0 0 0-1.9 0l-1.31.79a2 2 0 0 1-2.9-2.1l.33-1.5a2 2 0 0 0-.57-1.76L3.93 8.63a2 2 0 0 1 1.1-3.42l1.51-.13a2 2 0 0 0 1.63-1.05L9 2.69a2 2 0 0 1 3 0z" fill="#040712" />
        <path d="m8.2 13.5-1.7 8.5 5.5-3 5.5 3-1.7-8.5" />
        <path d="m9 8 2 2 4-4" />
      </g>
    </svg>
  );
};

const TrendingBarArrow = ({ size = 24, strokeWidth = 2, style = {}, ...props }) => {
  const mainColor = style.color || 'currentColor';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={mainColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="4" y="18" width="3.5" height="3" rx="0.5" />
      <rect x="9.5" y="12" width="3.5" height="9" rx="0.5" />
      <rect x="15" y="7" width="3.5" height="14" rx="0.5" />
      <path d="M4 15.5l5-4.5 5.5-1 5.5-6.5" />
      <path d="M16 3.5h4v4" />
    </svg>
  );
};

const UserGroupIcon = ({ size = 24, strokeWidth = 2, style = {}, ...props }) => {
  const mainColor = style.color || 'currentColor';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={mainColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="7.5" cy="10" r="2.2" />
      <path d="M2.5 20a5 5 0 0 1 10 0" />
      <circle cx="16.5" cy="10" r="2.2" />
      <path d="M11.5 20a5 5 0 0 1 10 0" />
      <path d="M6 20a6 6 0 0 1 12 0" fill="#040712" stroke={mainColor} strokeWidth={strokeWidth} />
      <circle cx="12" cy="7.5" r="3" fill="#040712" stroke={mainColor} strokeWidth={strokeWidth} />
    </svg>
  );
};

const skills = [
  { Icon: Target,      label: 'ACCURACY\nTESTING',      color: '#3b82f6' },
  { Icon: Scale,       label: 'BIAS\nDETECTION',        color: '#d946ef' },
  { Icon: ShieldCheckCircle, label: 'SAFETY\nVALIDATION',  color: '#06b6d4' },
  { Icon: PerformanceChart, label: 'PERFORMANCE\nEVALUATION', color: '#f97316' },
  { Icon: MonitorChart, label: 'PRODUCTION\nMONITORING', color: '#eab308' },
  { Icon: ClipboardAssurance, label: 'COMPLIANCE\nASSURANCE',  color: '#22c55e' },
];

const realPromise = [
  { Icon: Boxes,              label: 'REAL MODELS',     color: '#38bdf8', desc: 'Work with leading open & foundation models' },
  { Icon: Database,           label: 'REAL DATASETS',   color: '#d946ef', desc: 'Evaluate with industry benchmark & custom datasets' },
  { Icon: TrendingBarChart,   label: 'REAL BENCHMARKS', color: '#f97316', desc: 'Use trusted benchmarks like HELM, GAIA, SWE-Bench & more' },
  { Icon: ClipboardListCheck, label: 'REAL RESULTS',    color: '#22c55e', desc: 'Analyze, interpret and communicate with confidence' },
];


const whoFor = [
  { Icon: BeakerFlask,         color: '#8b5cf6', title: 'QA\nENGINEERS',          desc: 'Move beyond traditional testing. Validate AI outputs, behavior and performance.',                              img: '/assets/Images/caep-who-qa.png' },
  { Icon: Code2,               color: '#06b6d4', title: 'SOFTWARE\nDEVELOPERS',   desc: 'Build better AI systems with evaluation-driven development and quality assurance.',                           img: '/assets/Images/caep-who-dev.png' },
  { Icon: GraduationCap,       color: '#a3e635', title: 'FRESHERS',               desc: 'Start your career in the fastest-growing AI quality and assurance domain.',                                   img: '/assets/Images/caep-who-fresh.png' },
  { Icon: ClipboardListCheck,  color: '#f97316', title: 'TEST\nENGINEERS',        desc: 'Advance your career by mastering modern AI evaluation methods and tools.',                                    img: '/assets/Images/caep-who-test.png' },
];

const evalActions = [
  { Icon: BrainCheck,          color: '#8b5cf6', title: 'HALLUCINATION\nTESTING',          desc: 'Detect factual errors and unsupported outputs.' },
  { Icon: Scale,               color: '#3b82f6', title: 'BIAS & FAIRNESS\nASSESSMENT',     desc: 'Identify bias and ensure fair, inclusive AI systems.' },
  { Icon: RAGEvalIcon,         color: '#a3e635', title: 'RAG\nEVALUATION',                 desc: 'Evaluate retrieval quality, context relevance and answer accuracy.' },
  { Icon: AgentBotReliability, color: '#f97316', title: 'AGENT RELIABILITY\nTESTING',      desc: 'Validate agent behaviors, tool use and task success rates.' },
  { Icon: DoubleShieldCheck,   color: '#ef4444', title: 'SAFETY &\nGUARDRAIL VALIDATION',  desc: 'Test content safety, toxicity, jailbreaks and policy compliance.' },
  { Icon: AxisLineChart,       color: '#3b82f6', title: 'PRODUCTION\nMONITORING',          desc: 'Continuously monitor AI performance drift and system health.' },
];

const careers = [
  { Icon: UserCoderIcon,      color: '#a855f7', title: 'AI EVALUATION\nENGINEER',         demand: 4 },
  { Icon: RosetteAwardCheck,  color: '#0ea5e9', title: 'AI QUALITY\nENGINEER',            demand: 3 },
  { Icon: ShieldCheck,        color: '#22c55e', title: 'AI RELIABILITY\nENGINEER',        demand: 3 },
  { Icon: BugSearch,          color: '#f97316', title: 'AI TESTING\nSPECIALIST',          demand: 4 },
  { Icon: AlertTriangle,      color: '#ef4444', title: 'AI RISK & SAFETY\nANALYST',       demand: 4 },
  { Icon: FileShieldCheck,    color: '#3b82f6', title: 'AI GOVERNANCE\nANALYST',          demand: 3 },
  { Icon: ShieldUser,         color: '#f59e0b', title: 'AI ASSURANCE\nSPECIALIST',        demand: 3 },
  { Icon: TargetUser,         color: '#a855f7', title: 'AI TRUST\nENGINEER',              demand: 4 },
];

const modules = [
  { num: '01', color: '#3b82f6', Icon: Brain,             title: 'AI Foundations for Evaluators',     week: 'Week 1',  desc: 'Core concepts, models & evaluation mindset' },
  { num: '02', color: '#8b5cf6', Icon: TrendingBarChart,  title: 'The Science of Evaluation',         week: 'Week 2',  desc: 'Metrics, statistics & evaluation principles' },
  { num: '03', color: '#f97316', Icon: ShieldCheck,       title: 'Prompt, Output & Safety Testing',   week: 'Week 3',  desc: 'Test prompts, outputs & safety guardrails' },
  { num: '04', color: '#14b8a6', Icon: ModernEvalTarget,  title: 'Modern Evaluation Methods',         week: 'Week 4',  desc: 'Advanced techniques & best practices' },
  { num: '05', color: '#3b82f6', Icon: Database,          title: 'RAG Evaluation Engineering',        week: 'Week 5',  desc: 'Evaluate retrieval systems effectively' },
  { num: '06', color: '#8b5cf6', Icon: AgentBot,          title: 'Agentic AI & MCP Evaluation',       week: 'Week 6',  desc: 'Evaluate agents, tools & MCP protocols' },
  { num: '07', color: '#f97316', Icon: AppWindow,         title: 'Playwright & UI Evaluation',        week: 'Week 7',  desc: 'Test AI-powered interfaces & UX' },
  { num: '08', color: '#14b8a6', Icon: Database,          title: 'Benchmark Dataset Engineering',     week: 'Week 8',  desc: 'Create, curate & manage high-quality datasets' },
  { num: '09', color: '#3b82f6', Icon: DoubleInfinity,      title: 'Eval Pipelines & CI/CD for AI',     week: 'Week 8+', desc: 'Automate evaluation in CI/CD pipelines' },
  { num: '10', color: '#8b5cf6', Icon: Trophy,            title: 'Production Eval Ops & Capstone',    week: 'Week 8+', desc: 'Production operations & final capstone project' },
];

export default function CAEPPage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredEval, setHoveredEval] = useState(null);
  const [hoveredCareer, setHoveredCareer] = useState(null);
  const [hoveredWhoFor, setHoveredWhoFor] = useState(null);

  const modHeadingRef = useRef(null);
  const [modHeadingVisible, setModHeadingVisible] = useState(false);
  useEffect(() => {
    const el = modHeadingRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setModHeadingVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* ── HERO ── */}
      {/* Section bg matches image's dark-blue ambient so left+right blend seamlessly */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#03080f' }}>
        <div className="caep-hero-inner" style={{ display: 'flex', alignItems: 'stretch', minHeight: 540 }}>

          {/* LEFT — text, transparent so section bg shows through */}
          <div className="caep-hero-left" style={{ flex: '0 0 46%', padding: '40px 40px 40px 90px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 2 }}>

            {/* Breadcrumb */}
            <nav className="caep-hero-line" style={{ animationDelay: '0ms', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--text-muted)' }}>
              <Link to="/" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}><Home size={12} />Home</Link>
              <Breadcrumb size={12} /><span>Courses</span>
              <Breadcrumb size={12} /><span style={{ color: 'var(--orange)' }}>Certified AI Evaluation Professional</span>
            </nav>

            {/* Badge */}
            <div className="caep-hero-line" style={{ animationDelay: '80ms', marginBottom: 18 }}>
              <div className="badge-pill">2026 CERTIFICATION PROGRAM</div>
            </div>

            {/* Heading */}
            <h1 style={{ fontSize: 'clamp(40px, 5.5vw, 76px)', fontWeight: 900, lineHeight: 0.95, marginBottom: 14, color: '#fff', textTransform: 'uppercase' }}>
              <span className="caep-hero-line" style={{ animationDelay: '160ms' }}>CERTIFIED</span><br />
              <span className="caep-hero-line" style={{ animationDelay: '280ms', color: 'var(--orange)', whiteSpace: 'nowrap' }}>AI EVALUATION</span><br />
              <span className="caep-hero-line" style={{ animationDelay: '380ms' }}>PROFESSIONAL</span>
            </h1>

            {/* Taglines */}
            <h2 style={{ fontSize: 'clamp(18px, 2.2vw, 28px)', fontWeight: 800, color: '#fff', marginBottom: 4, lineHeight: 1.35 }}>
              <span className="caep-hero-line" style={{ animationDelay: '460ms' }}>Trust AI Before You <span style={{ color: '#fff' }}>Deploy It.</span></span>
            </h2>
            <h3 style={{ fontSize: 'clamp(15px, 1.8vw, 22px)', fontWeight: 700, color: '#fff', marginBottom: 8, lineHeight: 1.35 }}>
              <span className="caep-hero-line" style={{ animationDelay: '540ms', color: 'var(--orange)' }}>TEST. VALIDATE. MEASURE. IMPROVE.</span>
            </h3>

            {/* Description */}
            <p className="caep-hero-line" style={{ animationDelay: '600ms', fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: 24, maxWidth: 460 }}>
              Learn how to evaluate AI systems for quality, safety, reliability, fairness, compliance and production readiness.
            </p>

            {/* CTA */}
            <div className="caep-hero-line" style={{ animationDelay: '720ms' }}>
              <a href="#register" className="btn-orange" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1.5px solid transparent', transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
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
                <Users size={14} /> REGISTER INTEREST <ArrowRight size={15} />
              </a>
            </div>


          </div>

          {/* RIGHT — image, right side only */}
          <div className="caep-hero-right" style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
            <img
              src="/assets/Images/caep-hero.png"
              alt="AI Evaluation Professional"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block' }}
              onError={e => { e.target.style.display = 'none'; }}
            />
            {/* Gradient start color matches section bg (#03080f) — no visible cut */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #03080f 0%, rgba(3,8,15,0.6) 18%, transparent 42%)' }} />
          </div>

        </div>
      </section>

      {/* ── WHY AI EVALUATION MATTERS ── */}
      <section className="caep-section-why" style={{ background: '#080e1c', borderTop: '2px solid rgba(255,102,0,0.35)', padding: '0' }}>
        <div className="caep-why-inner" style={{ display: 'flex', alignItems: 'stretch', minHeight: 110 }}>

          {/* Left — label + heading */}
          <div className="caep-why-left" style={{ flex: '0 0 28%', padding: '24px 32px 24px 90px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', borderRight: '1px solid rgba(255,255,255,0.07)' }}>
            <div style={{ padding: '4px 10px', border: '1px solid rgba(255,102,0,0.3)', borderRadius: 20, marginBottom: 12, background: 'rgba(255,102,0,0.05)' }}>
              <span style={{ fontSize: 9.5, fontWeight: 800, color: 'var(--orange)', letterSpacing: '2px', textTransform: 'uppercase' }}>
                WHY AI EVALUATION MATTERS
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 900, color: '#fff', lineHeight: 1.15, margin: 0, textAlign: 'left' }}>
              AI IS EVERYWHERE.<br />
              <span style={{ color: 'var(--orange)' }}>FEW KNOW HOW<br />TO EVALUATE IT.</span>
            </h2>
          </div>

          {/* Right — 6 icons single horizontal row */}
          <div className="caep-skills-row" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 0, padding: 0 }}>
            {skills.map(({ Icon, label, color }, i) => (
              <div key={label} className="caep-skills-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '16px 28px', borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.04)', flexShrink: 0 }}>
                <Icon size={42} style={{ color }} strokeWidth={1.4} />
                <p style={{ fontSize: 10, fontWeight: 800, color: '#fff', letterSpacing: '0.8px', textAlign: 'center', textTransform: 'uppercase', lineHeight: 1.45, whiteSpace: 'pre-line', margin: 0 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PROMISE TO YOU ── */}
      <section className="caep-section-promise" style={{ background: '#060c18', borderTop: '2px solid rgba(255,102,0,0.35)', padding: 0, overflow: 'hidden' }}>
        <div className="caep-promise-inner" style={{ display: 'flex', alignItems: 'stretch', minHeight: 210 }}>

          {/* LEFT — heading */}
          <div className="caep-promise-left" style={{ flex: '0 0 28%', padding: '28px 32px 28px 90px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
            <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 10, textAlign: 'left' }}>OUR PROMISE TO YOU</p>
            <h2 style={{ fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 900, color: '#fff', lineHeight: 1.15, margin: 0, textAlign: 'left' }}>
              <span style={{ whiteSpace: 'nowrap' }}>TRAIN INSIDE A</span><br />
              <span style={{ color: '#4fc3f7', whiteSpace: 'nowrap' }}>REAL AI EVALUATION</span><br />
              ENVIRONMENT
            </h2>
          </div>

          {/* CENTER — 4 icons + tagline */}
          <div className="caep-promise-center" style={{ flex: 1, padding: '0', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, borderRight: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="caep-promise-icons-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
              {realPromise.map(({ Icon, label, color }, i) => (
                <div key={label} className="caep-promise-icons-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '16px 28px', borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.04)', flexShrink: 0 }}>
                  <Icon size={42} style={{ color }} strokeWidth={1.4} />
                  <p style={{ fontSize: 10, fontWeight: 800, color: '#fff', letterSpacing: '0.8px', textAlign: 'center', textTransform: 'uppercase', lineHeight: 1.45, whiteSpace: 'pre-line', margin: 0 }}>{label}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 13, fontWeight: 800, color: '#4fc3f7', letterSpacing: '1.5px', textAlign: 'left', paddingLeft: 28, textTransform: 'uppercase', margin: 0 }}>
              NOT A CLASSROOM. NOT A SIMULATION.
            </p>
          </div>

          {/* RIGHT — image */}
          <div className="caep-promise-right" style={{ flex: 1, position: 'relative', overflow: 'hidden', background: '#030608' }}>
            <img
              src="/assets/Images/caep-promise.png"
              alt="AI Evaluation Environment"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              onError={e => { e.target.style.display = 'none'; }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #060c18 0%, rgba(6,12,24,0.3) 30%, transparent 60%)' }} />
          </div>
        </div>
      </section>

      {/* ── MODULES ── */}
      <section className="caep-section-modules" style={{ background: '#060a14', borderTop: '2px solid rgba(255,102,0,0.35)', padding: '48px 40px 44px' }}>
        {/* Header — scroll-animated */}
        <div ref={modHeadingRef} style={{ textAlign: 'center', marginBottom: 36 }}>
          <p style={{
            fontSize: 12, fontWeight: 700, color: 'var(--orange)', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: 10,
            opacity: modHeadingVisible ? 1 : 0,
            transform: modHeadingVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease 0ms, transform 0.6s ease 0ms',
          }}>CURRICULUM OVERVIEW</p>
          <h2 className="caep-section-heading" style={{
            fontSize: 'clamp(28px, 3.4vw, 46px)', fontWeight: 900, color: '#fff', marginBottom: 12, lineHeight: 1.1,
            opacity: modHeadingVisible ? 1 : 0,
            transform: modHeadingVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease 120ms, transform 0.6s ease 120ms',
          }}>
            10 MODULES. <span style={{ color: 'var(--orange)' }}>ONE DISCIPLINE.</span>
          </h2>
        </div>

        {/* Body: image=2fr + 5×1fr grid — image spans col 1 both rows; 10 cards fill cols 2-6 */}
        <div className="caep-modules-body" style={{ display: 'grid', gridTemplateColumns: '2.3fr repeat(5, 1fr)', gap: 12, alignItems: 'stretch' }}>

          {/* Col 1, rows 1+2 — lifecycle image */}
          <div className="caep-modules-left" style={{ gridRow: 'span 2', position: 'relative', borderRadius: 14, overflow: 'hidden', background: '#030608', border: '1px solid rgba(255,255,255,0.07)', height: '100%' }}>
            <img
              src="/assets/Images/caep-lifecycle.png"
              alt="AI Evaluation Lifecycle"
              style={{ width: '100%', height: '100%', objectFit: 'fill', display: 'block' }}
              onError={e => { e.target.style.display = 'none'; }}
            />
          </div>

          {/* Cols 2-6, rows 1+2 — 10 module cards (5 per row) */}
          {modules.map((mod) => (
            <div
              key={mod.num}
              onMouseEnter={() => setHoveredCard(mod.num)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                position: 'relative',
                overflow: 'hidden',
                background: '#0b0f1c',
                border: `1px solid ${hoveredCard === mod.num ? mod.color : mod.color + '40'}`,
                borderRadius: 10,
                padding: '16px 14px',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 190,
                transform: hoveredCard === mod.num ? 'translateY(-7px) scale(1.02)' : 'translateY(0) scale(1)',
                boxShadow: hoveredCard === mod.num ? `0 20px 50px ${mod.color}30, 0 0 0 1px ${mod.color}50` : 'none',
                transition: 'all 0.28s cubic-bezier(0.22, 1, 0.36, 1)',
                cursor: 'default',
              }}
            >
              {/* Scan line on hover */}
              {hoveredCard === mod.num && (
                <div style={{
                  position: 'absolute', left: 0, right: 0, height: 2,
                  background: `linear-gradient(to right, transparent, ${mod.color}, transparent)`,
                  top: '-2px', zIndex: 3,
                  animation: 'caepScanLine 1.1s ease forwards',
                }} />
              )}
              <span style={{ fontSize: 13, fontWeight: 900, color: mod.color, marginBottom: 12, display: 'block', letterSpacing: '0.5px' }}>{mod.num}</span>
              <div style={{ marginBottom: 10 }}>
                <mod.Icon
                  size={34}
                  style={{
                    color: mod.color,
                    filter: hoveredCard === mod.num ? `drop-shadow(0 0 6px ${mod.color})` : 'none',
                    transition: 'filter 0.28s ease',
                  }}
                  strokeWidth={1.4}
                />
              </div>
              <h4 style={{ fontSize: 11.5, fontWeight: 800, color: '#fff', marginBottom: 6, lineHeight: 1.35, flex: 1, textTransform: 'uppercase' }}>{mod.title}</h4>
              <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5, marginBottom: 10 }}>{mod.desc}</p>
              <span style={{ fontSize: 10, fontWeight: 800, color: 'var(--orange)', letterSpacing: '1px', textTransform: 'uppercase' }}>{mod.week}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── EVALUATE REAL AI SYSTEMS ── */}
      <section className="caep-section-eval" style={{ background: '#050810', borderTop: '2px solid rgba(255,102,0,0.35)', overflow: 'hidden' }}>



        {/* Three columns: left image | center icons | right image */}
        <div className="caep-eval-body" style={{ display: 'flex', alignItems: 'stretch', minHeight: 280 }}>

          {/* Left — team image */}
          <div className="caep-eval-left" style={{ flex: '0 0 30%', position: 'relative', overflow: 'hidden', background: '#030608' }}>
            <img
              src="/assets/Images/caep-team.png"
              alt="AI Evaluation Team"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              onError={e => { e.target.style.display = 'none'; }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 65%, #050810 100%)' }} />
          </div>

          {/* Center — 4 icons + bottom tagline bar, all between the two images */}
          <div className="caep-eval-center" style={{ flex: 1, padding: '40px 12px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#050810' }}>
            
            {/* Header moved inside center column */}
            <div className="caep-eval-header" style={{ textAlign: 'center', marginBottom: 32 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'center', marginBottom: 12 }}>
                <div style={{ height: 1, width: 40, background: 'rgba(255,255,255,0.15)' }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.45)', letterSpacing: '2.5px', textTransform: 'uppercase' }}>OUR PROMISE</span>
                <div style={{ height: 1, width: 40, background: 'rgba(255,255,255,0.15)' }} />
              </div>
              <h2 className="caep-section-heading" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, margin: 0 }}>
                EVALUATE REAL AI SYSTEMS.<br />
                <span style={{ color: '#38bdf8' }}>GET REAL-WORLD READY.</span>
              </h2>
            </div>

            <div className="caep-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, marginBottom: 24 }}>
              {realPromise.map(({ Icon, label, color, desc }, i) => (
                <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, padding: '0 12px', borderRight: i < 3 ? '1px dashed rgba(255,255,255,0.15)' : 'none' }}>
                  <Icon size={46} style={{ color }} strokeWidth={1.4} />
                  <p style={{ fontSize: 11, fontWeight: 800, color: '#fff', letterSpacing: '0.8px', textAlign: 'center', textTransform: 'uppercase', lineHeight: 1.45, whiteSpace: 'pre-line', margin: 0 }}>{label}</p>
                  <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', textAlign: 'center', lineHeight: 1.5, margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
            {/* Tagline strip — inside the center column, between the two images */}
            <div className="caep-tagline-strip" style={{ background: '#071126', border: '1px solid rgba(56, 189, 248, 0.25)', borderRadius: 8, padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <ShieldCheck size={28} fill="#38bdf8" color="#071126" strokeWidth={1.5} />
                <span style={{ fontSize: 11.5, fontWeight: 800, color: '#fff', letterSpacing: '1.2px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>NOT A CLASSROOM. NOT A SIMULATION.</span>
              </div>
              <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.15)' }} />
              <span style={{ fontSize: 11.5, fontWeight: 800, color: '#38bdf8', letterSpacing: '1.2px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>REAL TOOLS. REAL DATA. REAL EVALUATIONS.</span>
            </div>
          </div>

          {/* Right — globe/viz image */}
          <div className="caep-eval-right" style={{ flex: '0 0 30%', position: 'relative', overflow: 'hidden', background: '#030608' }}>
            <img
              src="/assets/Images/caep-globe.png"
              alt="AI Evaluation Visualization"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              onError={e => { e.target.style.display = 'none'; }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, transparent 55%, #050810 100%)' }} />
            {/* TEST / EVALUATE / IMPROVE labels */}
            <div style={{ position: 'absolute', top: '50%', right: 24, transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: 18 }}>
              {['TEST', 'EVALUATE', 'IMPROVE'].map((lbl, i) => (
                <div key={lbl} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: ['#6366f1','#4fc3f7','#14b8a6'][i] }} />
                  <span style={{ fontSize: 11, fontWeight: 800, color: '#fff', letterSpacing: '1.5px' }}>{lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* ── AI EVALUATION IN ACTION + CAREER OPPORTUNITIES ── */}
      <section className="caep-section-action" style={{ background: '#060a14', borderTop: '2px solid rgba(255,102,0,0.35)', padding: '36px 36px 40px' }}>

        {/* Row 1 — headings only */}
        <div className="caep-action-headings" style={{ display: 'flex', gap: 0, marginBottom: 24 }}>
          <div style={{ flex: 1, paddingRight: 32, textAlign: 'center' }}>
            <h2 className="caep-section-heading" style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 900, color: '#fff', letterSpacing: '0.5px', marginBottom: 4, lineHeight: 1.1 }}>AI EVALUATION IN ACTION</h2>
            <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--orange)', margin: 0 }}>Real evaluations. Real impact.</p>
          </div>
          <div style={{ width: 1, flexShrink: 0 }} /> {/* Empty divider for spacing */}
          <div style={{ flex: 1, paddingLeft: 32, textAlign: 'center' }}>
            <h2 className="caep-section-heading" style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 900, color: '#fff', letterSpacing: '0.5px', marginBottom: 4, lineHeight: 1.1 }}>
              CAREER <span style={{ color: 'var(--orange)' }}>OPPORTUNITIES</span>
            </h2>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: 0 }}>High-growth roles. High-impact future.</p>
          </div>
        </div>

        {/* Row 2 — card grids side by side, same height via stretch */}
        <div className="caep-action-body" style={{ display: 'flex', gap: 0, alignItems: 'stretch' }}>

          {/* Left: 6 eval cards — single row that stretches to match right */}
          <div className="caep-eval-cards caep-grid-6" style={{ flex: 1, paddingRight: 32, display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gridAutoRows: '1fr', gap: 8 }}>
            {evalActions.map(({ Icon, color, title, desc }) => (
              <div
                key={title}
                onMouseEnter={() => setHoveredEval(title)}
                onMouseLeave={() => setHoveredEval(null)}
                style={{
                  position: 'relative', overflow: 'hidden',
                  background: hoveredEval === title ? `${color}0d` : '#0b0f1c',
                  border: `1px solid ${hoveredEval === title ? color : color + '45'}`,
                  borderRadius: 8, padding: '18px 12px', display: 'flex', flexDirection: 'column',
                  alignItems: 'center', textAlign: 'center',
                  transform: hoveredEval === title ? 'translateY(-6px) scale(1.02)' : 'translateY(0) scale(1)',
                  boxShadow: hoveredEval === title ? `0 16px 40px ${color}25` : 'none',
                  transition: 'all 0.26s cubic-bezier(0.22, 1, 0.36, 1)',
                  cursor: 'default',
                }}
              >
                {hoveredEval === title && (
                  <div style={{
                    position: 'absolute', left: 0, right: 0, height: 2,
                    background: `linear-gradient(to right, transparent, ${color}, transparent)`,
                    top: '-2px', zIndex: 3,
                    animation: 'caepScanLine 1.1s ease forwards',
                  }} />
                )}
                <Icon
                  size={42}
                  style={{
                    color, marginBottom: 14, flexShrink: 0,
                    filter: hoveredEval === title ? `drop-shadow(0 0 7px ${color})` : 'none',
                    transition: 'filter 0.26s ease',
                  }}
                  strokeWidth={1.4}
                />
                <h4 style={{ fontSize: 12, fontWeight: 800, color: '#fff', textTransform: 'uppercase', lineHeight: 1.4, whiteSpace: 'pre-line', margin: '0 0 10px' }}>{title}</h4>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, margin: 0, flex: 1 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Vertical divider */}
          <div style={{ width: 1, background: 'rgba(255,255,255,0.08)', flexShrink: 0 }} />

          {/* Right: 8 career cards 4×2 */}
          <div className="caep-career-cards caep-grid-4" style={{ flex: 1, paddingLeft: 32, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
            {careers.map(({ Icon, color, title, demand }) => (
              <div
                key={title}
                onMouseEnter={() => setHoveredCareer(title)}
                onMouseLeave={() => setHoveredCareer(null)}
                style={{
                  position: 'relative', overflow: 'hidden',
                  background: hoveredCareer === title ? `${color}0d` : '#0b0f1c',
                  border: `1px solid ${hoveredCareer === title ? color : color + '40'}`,
                  borderRadius: 8, padding: '16px 10px', textAlign: 'center',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  transform: hoveredCareer === title ? 'translateY(-6px) scale(1.03)' : 'translateY(0) scale(1)',
                  boxShadow: hoveredCareer === title ? `0 16px 40px ${color}28` : 'none',
                  transition: 'all 0.26s cubic-bezier(0.22, 1, 0.36, 1)',
                  cursor: 'default',
                }}
              >
                {hoveredCareer === title && (
                  <div style={{
                    position: 'absolute', left: 0, right: 0, height: 2,
                    background: `linear-gradient(to right, transparent, ${color}, transparent)`,
                    top: '-2px', zIndex: 3,
                    animation: 'caepScanLine 1.1s ease forwards',
                  }} />
                )}
                <Icon
                  size={42}
                  style={{
                    color, marginBottom: 14, flexShrink: 0,
                    filter: hoveredCareer === title ? `drop-shadow(0 0 7px ${color})` : 'none',
                    transition: 'filter 0.26s ease',
                  }}
                  strokeWidth={1.4}
                />
                <h4 style={{ fontSize: 11, fontWeight: 800, color: '#fff', textTransform: 'uppercase', lineHeight: 1.35, marginBottom: 8, whiteSpace: 'pre-line' }}>{title}</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center' }}>
                  <span style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.5)' }}>High Demand</span>
                  <div style={{ display: 'flex', gap: 3 }}>
                    {[0,1,2,3].map(i => (
                      <div key={i} style={{ width: 6, height: 12, borderRadius: 3, background: i < demand ? color : 'rgba(255,255,255,0.12)' }} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── WHO IS THIS PROGRAM FOR? + CTA BANNER ── */}
      <section className="caep-section-who" style={{ background: '#05080f', borderTop: '2px solid rgba(255,102,0,0.35)', padding: '32px 32px 0' }}>

        {/* ── Heading: orange lines + diamond ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 20 }}>
          <div style={{ flex: 1, height: 1.5, background: 'var(--orange)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '0 16px' }}>
            <div style={{ width: 8, height: 8, background: 'var(--orange)', transform: 'rotate(45deg)', flexShrink: 0 }} />
            <span className="caep-who-heading-text" style={{ fontSize: 'clamp(18px, 2.2vw, 24px)', fontWeight: 900, color: '#fff', letterSpacing: '2.5px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>WHO IS THIS PROGRAM FOR?</span>
            <div style={{ width: 8, height: 8, background: 'var(--orange)', transform: 'rotate(45deg)', flexShrink: 0 }} />
          </div>
          <div style={{ flex: 1, height: 1.5, background: 'var(--orange)' }} />
        </div>

        {/* ── 4 Cards with full colored border ── */}
        <div className="caep-who-grid caep-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 0 }}>
          {whoFor.map(({ Icon, color, title, desc, img }) => (
            <div
              key={title}
              onMouseEnter={() => setHoveredWhoFor(title)}
              onMouseLeave={() => setHoveredWhoFor(null)}
              style={{
                position: 'relative', overflow: 'hidden', minHeight: 220,
                border: `1.5px solid ${hoveredWhoFor === title ? color : color + 'bb'}`,
                borderRadius: 8,
                transform: hoveredWhoFor === title ? 'translateY(-7px) scale(1.02)' : 'translateY(0) scale(1)',
                boxShadow: hoveredWhoFor === title ? `0 20px 50px ${color}35` : 'none',
                transition: 'all 0.28s cubic-bezier(0.22, 1, 0.36, 1)',
                cursor: 'default',
              }}
            >
              {/* Scan line */}
              {hoveredWhoFor === title && (
                <div style={{
                  position: 'absolute', left: 0, right: 0, height: 2,
                  background: `linear-gradient(to right, transparent, ${color}, transparent)`,
                  top: '-2px', zIndex: 4,
                  animation: 'caepScanLine 1.1s ease forwards',
                }} />
              )}
              {/* BG image */}
              <img
                src={img}
                alt={title}
                style={{
                  position: 'absolute', inset: 0, width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'right top', display: 'block',
                  transform: hoveredWhoFor === title ? 'scale(1.06)' : 'scale(1)',
                  transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
                onError={e => { e.target.style.display = 'none'; }}
              />
              {/* Dark overlay — lightens on hover so image shows more */}
              <div style={{
                position: 'absolute', inset: 0,
                background: hoveredWhoFor === title
                  ? 'linear-gradient(110deg, rgba(3,5,12,0.70) 0%, rgba(3,5,12,0.30) 50%, rgba(3,5,12,0.08) 100%)'
                  : 'linear-gradient(110deg, rgba(3,5,12,0.85) 0%, rgba(3,5,12,0.50) 50%, rgba(3,5,12,0.15) 100%)',
                transition: 'background 0.3s ease',
              }} />
              {/* Content */}
              <div style={{ position: 'relative', zIndex: 2, padding: '18px 16px' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: hoveredWhoFor === title ? `${color}35` : `${color}20`,
                  border: `1.5px solid ${color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12,
                  transition: 'background 0.28s ease',
                }}>
                  <Icon
                    size={22}
                    style={{
                      color,
                      filter: hoveredWhoFor === title ? `drop-shadow(0 0 6px ${color})` : 'none',
                      transition: 'filter 0.28s ease',
                    }}
                    strokeWidth={1.6}
                  />
                </div>
                <h4 style={{ fontSize: 15, fontWeight: 900, color: '#fff', textTransform: 'uppercase', lineHeight: 1.2, marginBottom: 8, whiteSpace: 'pre-line' }}>{title}</h4>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, margin: 0, maxWidth: '50%' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA Banner ── */}
        <div className="caep-cta-banner" style={{
          display: 'flex',
          alignItems: 'stretch',
          background: '#040712',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 12,
          marginTop: 32,
          marginLeft: -32,
          marginRight: -32,
          overflow: 'hidden'
        }}>
          {/* Left Wrapper — AI visual + Shield Icon */}
          <div className="caep-cta-left-wrapper" style={{ flex: '0 0 28%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', position: 'relative' }}>
            {/* Left — AI visual */}
            <div className="caep-cta-left" style={{ width: '60%', height: '100%', position: 'relative', overflow: 'hidden' }}>
              <img
                src="/assets/Images/caep-ai-trust.png"
                alt="AI Trust"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                onError={e => { e.target.style.display = 'none'; }}
              />
            </div>
            {/* Shield Icon */}
            <div className="caep-cta-shield" style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: 12 }}>
              <svg width="68" height="78" viewBox="0 0 72 82" fill="none">
                <path d="M36 4L6 18v24c0 19 13 35 30 40 17-5 30-21 30-40V18L36 4Z" fill="rgba(0,229,255,0.05)" stroke="#00e5ff" strokeWidth="2.2" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 8px rgba(0,229,255,0.5))' }}/>
                <path d="M22 41l11 11 20-20" stroke="#00e5ff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 8px rgba(0,229,255,0.7))' }}/>
              </svg>
            </div>
          </div>

          {/* Center — heading + subtitle + button */}
          <div className="caep-cta-center" style={{
            flex: 1,
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            borderRight: '1px solid rgba(255,255,255,0.06)'
          }}>
            <h2 className="caep-section-heading" style={{ fontSize: 'clamp(20px, 2.2vw, 28px)', fontWeight: 900, color: '#fff', lineHeight: 1.25, marginBottom: 8, textTransform: 'uppercase' }}>
              THE FUTURE OF AI DEPENDS ON <span style={{ color: 'var(--orange)' }}>TRUST.</span>
            </h2>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginBottom: 18, lineHeight: 1.65, margin: '0 0 18px 0' }}>
              Become the professional who validates, tests and assures<br />AI systems before they reach the real world.
            </p>
            <a href="#register" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--orange)', color: '#fff', fontWeight: 800, fontSize: 13, padding: '11px 22px', borderRadius: 6, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.5px', border: '1.5px solid transparent', transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
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
              <Users size={15} /> REGISTER INTEREST <ArrowRight size={14} />
            </a>
          </div>

          {/* Right — 4 feature icons */}
          <div className="caep-cta-right" style={{ flex: '0 0 28%', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', alignContent: 'center', padding: '20px 12px', gap: 4 }}>
            {[
              { Icon: UserGroupIcon,    color: '#3b82f6', label: 'EXPERT-LED\nTRAINING' },
              { Icon: BeakerFlask,      color: '#22c55e', label: 'HANDS-ON\nLABS' },
              { Icon: FileAwardRosette, color: '#a855f7', label: 'INDUSTRY\nRECOGNIZED\nCERTIFICATION' },
              { Icon: TrendingBarArrow, color: '#f97316', label: 'CAREER\nTRANSFORMATION' },
            ].map(({ Icon, color, label }) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, textAlign: 'center' }}>
                <Icon size={44} style={{ color }} strokeWidth={1.2} />
                <p style={{ fontSize: 8.5, fontWeight: 800, color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase', lineHeight: 1.45, whiteSpace: 'pre-line', margin: 0, letterSpacing: '0.3px' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom banner block */}
        <div style={{
          marginTop: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          padding: '8px 24px',
          background: '#040712',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 8,
          maxWidth: 640,
          margin: '20px auto 0 auto',
          fontSize: 'clamp(13px, 1.6vw, 17px)'
        }}>
          <span style={{ color: '#3b82f6', opacity: 0.8, letterSpacing: -2 }}>•──►</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 900, letterSpacing: '0.5px' }}>
            <span style={{ color: '#3b82f6' }}>REAL AI.</span>
            <span style={{ color: '#22c55e' }}>•</span>
            <span style={{ color: '#22c55e' }}>REAL EVALUATION.</span>
            <span style={{ color: '#f97316' }}>•</span>
            <span style={{ color: '#f97316' }}>REAL IMPACT.</span>
          </div>
          <span style={{ color: '#3b82f6', opacity: 0.8, letterSpacing: -2 }}>◄──•</span>
        </div>
      </section>

      <style>{`
        @keyframes caepHeroLineIn {
          from { opacity: 0; transform: translateY(36px); filter: blur(6px); }
          to   { opacity: 1; transform: translateY(0);    filter: blur(0px); }
        }
        .caep-hero-line {
          display: inline-block;
          opacity: 0;
          animation: caepHeroLineIn 0.72s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes caepScanLine {
          0%   { top: -2px; opacity: 1; }
          100% { top: 102%; opacity: 0; }
        }

        /* ── CAEP Responsive ── */

        /* ── TABLET (≤1023px) ── */
        @media (max-width: 1023px) {
          /* Hero */
          .caep-hero-inner { flex-direction: column !important; min-height: auto !important; }
          .caep-hero-left  { flex: none !important; width: 100% !important; padding: 50px 40px 40px 40px !important; }
          .caep-hero-right { flex: none !important; width: 100% !important; height: 320px !important; }
          .caep-hero-tags  { flex-wrap: wrap !important; gap: 14px !important; }

          /* Why section */
          .caep-why-inner  { flex-direction: column !important; }
          .caep-why-left   { flex: none !important; width: 100% !important; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.07) !important; padding: 24px 28px !important; align-items: center !important; text-align: center !important; }
          .caep-why-left h2 { text-align: center !important; }
          .caep-skills-row { display: grid !important; grid-template-columns: repeat(3, 1fr) !important; padding: 12px 16px !important; gap: 4px !important; }
          .caep-skills-item { padding: 12px 8px !important; border-left: none !important; border-top: 1px solid rgba(255,255,255,0.04) !important; flex-shrink: unset !important; }

          /* Promise section */
          .caep-promise-inner  { flex-direction: column !important; }
          .caep-promise-left   { flex: none !important; width: 100% !important; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06) !important; padding: 24px 28px !important; align-items: center !important; text-align: center !important; }
          .caep-promise-left h2 { text-align: center !important; }
          .caep-promise-left p  { text-align: center !important; }
          .caep-promise-center { flex: none !important; width: 100% !important; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06) !important; padding: 16px 16px !important; }
          .caep-promise-right  { flex: none !important; width: 100% !important; min-height: 200px !important; }
          .caep-promise-icons-row { display: grid !important; grid-template-columns: repeat(2, 1fr) !important; gap: 4px !important; }
          .caep-promise-icons-item { padding: 12px 8px !important; border-left: none !important; border-top: 1px solid rgba(255,255,255,0.04) !important; flex-shrink: unset !important; }
          .caep-promise-center > p { text-align: center !important; padding-left: 8px !important; }

          /* Modules */
          .caep-modules-body { grid-template-columns: repeat(3, 1fr) !important; gap: 10px !important; }
          .caep-modules-left { grid-row: auto !important; grid-column: 1 / -1 !important; min-height: 200px !important; }

          /* Eval section */
          .caep-eval-body   { flex-direction: column !important; }
          .caep-eval-left   { flex: none !important; width: 100% !important; min-height: 200px !important; }
          .caep-eval-center { flex: none !important; width: 100% !important; }
          .caep-eval-right  { flex: none !important; width: 100% !important; min-height: 200px !important; }
          .caep-tagline-strip { flex-direction: column !important; align-items: flex-start !important; gap: 6px !important; }

          /* Action section */
          .caep-section-action  { padding: 28px 24px 32px !important; }
          .caep-action-headings { flex-direction: column !important; gap: 16px !important; }
          .caep-action-headings > div { padding-left: 0 !important; padding-right: 0 !important; }
          .caep-action-divider  { display: none !important; }
          .caep-action-body     { flex-direction: column !important; gap: 20px !important; }
          .caep-eval-cards      { padding-right: 0 !important; }
          .caep-career-cards    { padding-left: 0 !important; }

          /* Who / CTA */
          .caep-section-who { padding: 28px 24px 0 !important; }
          .caep-who-grid    { grid-template-columns: 1fr !important; }
          .caep-cta-banner  { flex-direction: column !important; margin-left: 0 !important; margin-right: 0 !important; }
          .caep-cta-left-wrapper { flex: none !important; width: 100% !important; min-height: 120px !important; }
          .caep-cta-left    { width: 100% !important; height: 100% !important; }
          .caep-cta-shield  { display: none !important; }
          .caep-cta-center  { padding: 22px 24px !important; }
          .caep-cta-right   { flex: none !important; width: 100% !important; grid-template-columns: repeat(4, 1fr) !important; padding: 16px 24px !important; }

          /* Shared grids */
          .caep-grid-6 { grid-template-columns: repeat(3, 1fr) !important; }
          .caep-grid-5 { grid-template-columns: repeat(3, 1fr) !important; }
          .caep-grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
          .caep-grid-3 { grid-template-columns: repeat(2, 1fr) !important; }
          .caep-section-pad { padding: 60px 0 !important; }
        }

        /* ── MOBILE (≤767px) ── */
        @media (max-width: 767px) {
          /* Consistent section heading size across all non-hero sections */
          .caep-section-heading { font-size: 22px !important; }

          /* Hero */
          .caep-hero-inner { flex-direction: column !important; }
          .caep-hero-inner { min-height: auto !important; }
          .caep-hero-left  { flex: none !important; width: 100% !important; padding: 64px 18px 20px !important; justify-content: flex-start !important; }
          .caep-hero-left h1 { font-size: 36px !important; margin-bottom: 8px !important; }
          .caep-hero-left h2 { font-size: 17px !important; margin-bottom: 2px !important; }
          .caep-hero-left h3 { font-size: 13px !important; margin-bottom: 6px !important; }
          .caep-hero-left p  { font-size: 13px !important; margin-bottom: 14px !important; line-height: 1.6 !important; }
          .caep-hero-right { flex: 0 0 220px !important; height: 220px !important; }
          .caep-hero-right { flex: none !important; width: 100% !important; height: 220px !important; }
          .caep-hero-tags  { flex-wrap: wrap !important; gap: 12px !important; }

          /* Why section */
          .caep-why-inner  { flex-direction: column !important; }
          .caep-why-left   { flex: none !important; width: 100% !important; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.07) !important; padding: 20px 18px !important; align-items: center !important; text-align: center !important; }
          .caep-why-left h2 { text-align: center !important; }
          .caep-skills-row { display: grid !important; grid-template-columns: repeat(3, 1fr) !important; padding: 10px 14px !important; gap: 4px !important; }
          .caep-skills-item { padding: 10px 8px !important; border-left: none !important; border-top: 1px solid rgba(255,255,255,0.04) !important; flex-shrink: unset !important; }

          /* Promise section */
          .caep-promise-inner  { flex-direction: column !important; }
          .caep-promise-left   { flex: none !important; width: 100% !important; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06) !important; padding: 20px 18px !important; align-items: center !important; text-align: center !important; }
          .caep-promise-left h2 { text-align: center !important; }
          .caep-promise-left p  { text-align: center !important; }
          .caep-promise-center { flex: none !important; width: 100% !important; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06) !important; padding: 14px 14px !important; }
          .caep-promise-right  { flex: none !important; width: 100% !important; min-height: 180px !important; }
          .caep-promise-icons-row { display: grid !important; grid-template-columns: repeat(2, 1fr) !important; gap: 4px !important; }
          .caep-promise-icons-item { padding: 10px 8px !important; border-left: none !important; border-top: 1px solid rgba(255,255,255,0.04) !important; flex-shrink: unset !important; }
          .caep-promise-center > p { text-align: center !important; padding-left: 8px !important; }
          .caep-who-heading-text { white-space: normal !important; letter-spacing: 1px !important; font-size: 15px !important; text-align: center !important; }

          /* Modules */
          .caep-section-modules { padding: 32px 18px 28px !important; }
          .caep-modules-body    { grid-template-columns: repeat(2, 1fr) !important; gap: 8px !important; }
          .caep-modules-left    { grid-row: auto !important; grid-column: 1 / -1 !important; min-height: 180px !important; border-radius: 10px !important; }

          /* Eval section */
          .caep-eval-header { padding: 28px 18px 20px !important; }
          .caep-eval-body   { flex-direction: column !important; }
          .caep-eval-left   { flex: none !important; width: 100% !important; min-height: 180px !important; }
          .caep-eval-center { flex: none !important; width: 100% !important; padding: 20px 14px 0 !important; }
          .caep-eval-right  { flex: none !important; width: 100% !important; min-height: 180px !important; }
          .caep-tagline-strip { flex-direction: column !important; align-items: flex-start !important; gap: 6px !important; }

          /* Action section */
          .caep-section-action  { padding: 24px 18px 28px !important; }
          .caep-action-headings { flex-direction: column !important; gap: 14px !important; }
          .caep-action-headings > div { padding-left: 0 !important; padding-right: 0 !important; }
          .caep-action-divider  { display: none !important; }
          .caep-action-body     { flex-direction: column !important; gap: 16px !important; }
          .caep-eval-cards      { padding-right: 0 !important; grid-template-columns: repeat(2, 1fr) !important; }
          .caep-career-cards    { padding-left: 0 !important; grid-template-columns: repeat(2, 1fr) !important; }

          /* Who / CTA */
          .caep-section-who { padding: 24px 18px 0 !important; }
          .caep-who-grid    { grid-template-columns: 1fr !important; }
          .caep-cta-banner  { flex-direction: column !important; margin-left: 0 !important; margin-right: 0 !important; }
          .caep-cta-left-wrapper { display: none !important; }
          .caep-cta-center  { padding: 20px 18px !important; border-left: none !important; border-right: none !important; }
          .caep-cta-right   { flex: none !important; width: 100% !important; grid-template-columns: repeat(2, 1fr) !important; padding: 16px 18px !important; }

          /* Shared grids */
          .caep-grid-6 { grid-template-columns: repeat(2, 1fr) !important; }
          .caep-grid-5 { grid-template-columns: repeat(2, 1fr) !important; }
          .caep-grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
          .caep-grid-3 { grid-template-columns: 1fr !important; }
          .caep-section-pad { padding: 44px 0 !important; }
        }

        /* ── SMALL MOBILE (≤480px) ── */
        @media (max-width: 480px) {
          .caep-hero-left   { padding: 36px 14px 28px !important; }
          .caep-hero-right  { height: 190px !important; }
          .caep-why-left    { padding: 18px 14px !important; }
          .caep-section-modules { padding: 26px 14px 22px !important; }
          .caep-eval-header { padding: 22px 14px 16px !important; }
          .caep-section-action { padding: 20px 14px 22px !important; }
          .caep-section-who  { padding: 20px 14px 0 !important; }
          .caep-who-grid     { grid-template-columns: 1fr !important; }
          .caep-cta-center   { padding: 18px 14px !important; }
          .caep-cta-right    { grid-template-columns: repeat(2, 1fr) !important; padding: 14px !important; }

          /* All grids → small screens */
          .caep-grid-6 { grid-template-columns: 1fr !important; }
          .caep-grid-5 { grid-template-columns: 1fr !important; }
          .caep-grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
          .caep-eval-cards   { grid-template-columns: repeat(2, 1fr) !important; }
          .caep-career-cards { grid-template-columns: repeat(2, 1fr) !important; }
          .caep-who-grid.caep-grid-4 { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── CONTACT FORM ── */}
      <section className="caep-section-pad" style={{ background: 'var(--bg-card)', padding: '88px 0', overflowX: 'hidden' }} id="register">
        <div className="container-xl">
          <RevealSection>
            <div className="row g-5 align-items-center justify-content-center">
              <div className="col-12 col-lg-5 contact-info-col">
                <div className="section-label mb-3">Register Your Interest</div>
                <h2 className="caep-section-heading" style={{ fontSize: 'clamp(28px, 3.4vw, 46px)', fontWeight: 900, marginBottom: 16, color: '#fff' }}>
                  Start Your AI Evaluation<br /><span style={{ color: 'var(--orange)' }}>Career Today.</span>
                </h2>
                <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 28 }}>
                  Seats are limited. Submit your interest and our team will reach out with cohort dates and full program details.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    { Icon: Target,      text: 'Hands-On AI Evaluation Training' },
                    { Icon: Shield,      text: 'Safety & Alignment Testing' },
                    { Icon: Award,       text: 'CAEP Certification Upon Completion' },
                    { Icon: Briefcase,   text: 'Job-Ready Skills & Career Support' },
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
