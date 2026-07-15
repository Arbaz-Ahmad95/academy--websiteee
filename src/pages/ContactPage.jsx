import { useState, useEffect, useRef } from 'react';

import {
  Mail, Phone, MapPin, Globe, User, Building,
  BookOpen, ArrowRight, Loader2, CheckCircle,
  MessageSquare, Shield, Clock, Users, ChevronRight,
  Briefcase, Lock, FlaskConical, Scale, ShieldCheck, Zap
} from 'lucide-react';

/* ── Scroll reveal helper ── */
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

/* ── Countries data ── */
const countriesData = [
  { code: 'AU', name: 'Australia',             flag: '🇦🇺', prefix: '+61',  cities: ['Melbourne', 'Sydney', 'Brisbane', 'Perth', 'Adelaide', 'Canberra'] },
  { code: 'US', name: 'United States',          flag: '🇺🇸', prefix: '+1',   cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'San Francisco', 'Atlanta'] },
  { code: 'IN', name: 'India',                  flag: '🇮🇳', prefix: '+91',  cities: ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune'] },
  { code: 'GB', name: 'United Kingdom',         flag: '🇬🇧', prefix: '+44',  cities: ['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow', 'Edinburgh'] },
  { code: 'CA', name: 'Canada',                 flag: '🇨🇦', prefix: '+1',   cities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa'] },
  { code: 'SG', name: 'Singapore',              flag: '🇸🇬', prefix: '+65',  cities: ['Singapore'] },
  { code: 'AE', name: 'United Arab Emirates',   flag: '🇦🇪', prefix: '+971', cities: ['Dubai', 'Abu Dhabi', 'Sharjah'] },
  { code: 'NZ', name: 'New Zealand',            flag: '🇳🇿', prefix: '+64',  cities: ['Auckland', 'Wellington', 'Christchurch'] },
  { code: 'DE', name: 'Germany',                flag: '🇩🇪', prefix: '+49',  cities: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'] },
  { code: 'FR', name: 'France',                 flag: '🇫🇷', prefix: '+33',  cities: ['Paris', 'Marseille', 'Lyon', 'Toulouse'] },
  { code: 'JP', name: 'Japan',                  flag: '🇯🇵', prefix: '+81',  cities: ['Tokyo', 'Osaka', 'Yokohama', 'Nagoya'] },
  { code: 'BR', name: 'Brazil',                 flag: '🇧🇷', prefix: '+55',  cities: ['São Paulo', 'Rio de Janeiro', 'Brasília'] },
  { code: 'MX', name: 'Mexico',                 flag: '🇲🇽', prefix: '+52',  cities: ['Mexico City', 'Guadalajara', 'Monterrey'] },
  { code: 'ZA', name: 'South Africa',           flag: '🇿🇦', prefix: '+27',  cities: ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria'] },
  { code: 'OTHER', name: 'Other Country',        flag: '🌐', prefix: '',     cities: [] },
];

const courses = [
  'SOC + DFIR Specialist',
  'AI Risk & Governance Program (AIGP)',
  'Certified AI Evaluation Professional (CAEP)',
  'AI Identity Access Management (IAM)',
  'AI Security Specialist',
  'Other',
];

/* ── Info cards ── */
const infoCards = [
  {
    Icon: MapPin,
    title: 'Headquarters',
    lines: ['1870 The Exchange SE, Ste 220 #764140', 'Atlanta GA 30339'],
    sub: 'Our global operations hub',
  },
  {
    Icon: Mail,
    title: 'Email',
    lines: ['info@globalsoc.ai'],
    sub: 'We reply within 24 hours',
  },
  {
    Icon: Phone,
    title: 'Phone',
    lines: ['+1 404 989 9733'],
    sub: 'Mon – Fri, 9 AM – 6 PM EST',
  },
  {
    Icon: Globe,
    title: 'Online Training',
    lines: ['100% Remote & Live'],
    sub: 'Train from anywhere in the world',
  },
];

/* ── Why enroll bullets ── */
const whyItems = [
  { Icon: Shield,      text: 'Train in a live, real 25-seat SOC environment' },
  { Icon: Users,       text: 'Mentored by active cybersecurity practitioners' },
  { Icon: Clock,       text: 'Flexible cohort schedules — start in as little as 2 weeks' },
  { Icon: Zap,         text: 'Job-ready skills with employer-recognised certifications' },
  { Icon: CheckCircle, text: '24/7 advisor support throughout your program' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    phonePrefix: '+61',
    phoneNumber: '',
    city: '',
    areaOfInterest: '',
    message: '',
  });

  const [errors, setErrors]           = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted]  = useState(false);
  const [availableCities, setAvailableCities] = useState([]);
  const formRef = useRef(null);

  /* scroll to form on submission */
  useEffect(() => {
    if (isSubmitted && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isSubmitted]);

  /* sync cities + prefix when country changes */
  useEffect(() => {
    const selected = countriesData.find(c => c.name === formData.country);
    if (selected) {
      setAvailableCities(selected.cities);
      if (selected.prefix) {
        setFormData(prev => ({ ...prev, phonePrefix: selected.prefix, city: '' }));
      } else {
        setFormData(prev => ({ ...prev, city: '' }));
      }
    } else {
      setAvailableCities([]);
      setFormData(prev => ({ ...prev, city: '' }));
    }
  }, [formData.country]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())   newErrors.firstName  = 'First name is required';
    if (!formData.lastName.trim())    newErrors.lastName   = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.country) newErrors.country = 'Please select a country';
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{5,15}$/.test(formData.phoneNumber.replace(/[\s\-()]/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }
    if (!formData.areaOfInterest) newErrors.areaOfInterest = 'Please select an area of interest';
    if (!formData.message.trim())  newErrors.message = 'Please tell us how we can help';
    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      const firstKey = Object.keys(newErrors)[0];
      const el = document.querySelector(`[name="${firstKey}"]`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.focus();
      }
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        firstName: '', lastName: '', email: '',
        country: '', phonePrefix: '+61', phoneNumber: '',
        city: '', areaOfInterest: '', message: '',
      });
    }, 1300);
  };

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ══════════ HERO SECTION ══════════ */}
      <section className="cp-hero">
        {/* decorative orbs */}
        <div className="cp-orb cp-orb-1" />
        <div className="cp-orb cp-orb-2" />

        <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
          <div className="cp-hero-inner">
            {/* left */}
            <div className="cp-hero-left">
              <div className="badge-pill mb-3" style={{ display: 'inline-flex' }}>
                <MessageSquare size={13} />
                Get in Touch
              </div>

              <h1 className="cp-hero-title">
                Start Your<br />
                <span className="text-gradient">Cybersecurity</span><br />
                Journey Today
              </h1>

              <p className="cp-hero-sub">
                Ready to launch your career in cybersecurity? Fill out the form and one of our expert advisors will reach out within 24 hours to discuss cohort schedules, curriculum, and your unique goals.
              </p>

              {/* Quick stat row */}
              <div className="cp-stat-row">
                {[
                  { num: '24h', label: 'Response time' },
                  { num: '2wk', label: 'Start date' },
                  { num: '100%', label: 'Live training' },
                ].map(s => (
                  <div key={s.num} className="cp-stat-item">
                    <span className="cp-stat-num">{s.num}</span>
                    <span className="cp-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Courses quick-pick */}
              <div className="cp-courses-row">
                {[
                  { Icon: Shield,      label: 'SOC + DFIR' },
                  { Icon: Scale,       label: 'AI Governance' },
                  { Icon: FlaskConical,label: 'CAEP' },
                  { Icon: Lock,        label: 'IAM' },
                  { Icon: ShieldCheck, label: 'AI Security' },
                ].map(c => (
                  <div key={c.label} className="cp-course-chip">
                    <c.Icon size={13} style={{ color: 'var(--orange)' }} />
                    {c.label}
                  </div>
                ))}
              </div>
            </div>

            {/* right — info cards */}
            <div className="cp-hero-right">
              {infoCards.map((card, i) => (
                <div key={i} className="cp-info-card">
                  <div className="cp-info-icon">
                    <card.Icon size={20} />
                  </div>
                  <div>
                    <div className="cp-info-title">{card.title}</div>
                    {card.lines.map((line, j) => (
                      <div key={j} className="cp-info-line">{line}</div>
                    ))}
                    <div className="cp-info-sub">{card.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* bottom fade border */}
        <div className="cp-hero-border" />
      </section>

      {/* ══════════ CONTACT FORM SECTION ══════════ */}
      <section className="cp-form-section" id="contact-form">
        <div className="container-xl">
          <div className="cp-form-layout">

            {/* ── Left: why enroll ── */}
            <RevealSection delay={0}>
              <div className="cp-why-col">
                <div className="section-label mb-3">Why Enroll</div>
                <h2 className="cp-why-title">
                  Everything you need to<br />
                  <span className="text-gradient">succeed in cybersecurity</span>
                </h2>
                <p className="cp-why-desc">
                  GlobalSOC Academy is the only training provider that gives you hands-on experience inside a real, live 25-seat Security Operations Center — not a simulation.
                </p>

                <div className="cp-why-list">
                  {whyItems.map((item, i) => (
                    <div key={i} className="cp-why-item">
                      <div className="cp-why-icon">
                        <item.Icon size={16} />
                      </div>
                      <span className="cp-why-text">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Testimonial quote */}
                <div className="cp-testimonial">
                  <div className="cp-testimonial-bar" />
                  <div>
                    <p className="cp-testimonial-text">
                      "GlobalSOC Academy transformed my career. Within 6 months of completing the SOC + DFIR program I landed a Tier-2 Analyst role at a Fortune 500 company."
                    </p>
                    <div className="cp-testimonial-author">
                      <div className="cp-author-avatar">J</div>
                      <div>
                        <div className="cp-author-name">James T.</div>
                        <div className="cp-author-role">SOC Analyst, Fortune 500 · Class of 2024</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>

            {/* ── Right: the form ── */}
            <RevealSection delay={120}>
              <div ref={formRef} className="contact-card cp-form-card">
                {isSubmitted ? (
                  <div className="success-message text-center">
                    <div
                      className="d-inline-flex align-items-center justify-content-center anim-bounce"
                      style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(255,102,0,0.1)', color: 'var(--orange)', marginBottom: 24 }}
                    >
                      <CheckCircle size={36} />
                    </div>
                    <h3 className="contact-title" style={{ color: '#fff' }}>Enrollment Request Submitted!</h3>
                    <p className="contact-subtitle" style={{ maxWidth: 480, margin: '12px auto 32px' }}>
                      Thank you for your interest. A GlobalSOC Academy advisor will get in touch within 24 hours to discuss cohort schedules and curriculum details.
                    </p>
                    <button onClick={() => setIsSubmitted(false)} className="btn-orange">
                      Send Another Message <ArrowRight size={16} />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                    <div className="text-center mb-4">
                      <h2 className="contact-title">Send Us a Message</h2>
                      <p className="contact-subtitle" style={{ marginBottom: 0 }}>
                        Fill out the form below and our team will get back to you shortly.
                      </p>
                    </div>

                    <div className="row g-3">
                      {/* First Name */}
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label className="form-label">First Name <span>*</span></label>
                          <div className="input-container">
                            <User size={17} className="input-icon" />
                            <input
                              type="text" name="firstName"
                              value={formData.firstName} onChange={handleChange}
                              placeholder="John"
                              className={`form-input ${errors.firstName ? 'is-invalid' : ''}`}
                            />
                          </div>
                          {errors.firstName && <span className="error-text">{errors.firstName}</span>}
                        </div>
                      </div>

                      {/* Last Name */}
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label className="form-label">Last Name <span>*</span></label>
                          <div className="input-container">
                            <User size={17} className="input-icon" />
                            <input
                              type="text" name="lastName"
                              value={formData.lastName} onChange={handleChange}
                              placeholder="Doe"
                              className={`form-input ${errors.lastName ? 'is-invalid' : ''}`}
                            />
                          </div>
                          {errors.lastName && <span className="error-text">{errors.lastName}</span>}
                        </div>
                      </div>

                      {/* Email */}
                      <div className="col-12">
                        <div className="form-group">
                          <label className="form-label">Email / Work Email <span>*</span></label>
                          <div className="input-container">
                            <Mail size={17} className="input-icon" />
                            <input
                              type="email" name="email"
                              value={formData.email} onChange={handleChange}
                              placeholder="john@company.com"
                              className={`form-input ${errors.email ? 'is-invalid' : ''}`}
                            />
                          </div>
                          {errors.email && <span className="error-text">{errors.email}</span>}
                        </div>
                      </div>

                      {/* Country */}
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label className="form-label">Country <span>*</span></label>
                          <div className="input-container">
                            <Globe size={17} className="input-icon" />
                            <select
                              name="country" value={formData.country} onChange={handleChange}
                              className={`form-input form-select ${errors.country ? 'is-invalid' : ''}`}
                            >
                              <option value="" disabled hidden>Select your country</option>
                              {countriesData.map(c => (
                                <option key={c.code} value={c.name}>{c.flag} {c.name}</option>
                              ))}
                            </select>
                          </div>
                          {errors.country && <span className="error-text">{errors.country}</span>}
                        </div>
                      </div>

                      {/* City */}
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label className="form-label">City</label>
                          <div className="input-container">
                            <MapPin size={17} className="input-icon" />
                            {(formData.country === 'Other Country' || availableCities.length === 0) ? (
                              <input
                                type="text" name="city"
                                value={formData.city} onChange={handleChange}
                                placeholder="Enter your city"
                                className="form-input"
                              />
                            ) : (
                              <select
                                name="city" value={formData.city} onChange={handleChange}
                                className="form-input form-select"
                              >
                                <option value="">Select a city</option>
                                {availableCities.map(city => (
                                  <option key={city} value={city}>{city}</option>
                                ))}
                              </select>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="col-12">
                        <div className="form-group">
                          <label className="form-label">Phone Number <span>*</span></label>
                          <div className="phone-input-group">
                            <select
                              name="phonePrefix" value={formData.phonePrefix} onChange={handleChange}
                              className="phone-prefix-select"
                              aria-label="Phone country code prefix"
                            >
                              {countriesData.filter(c => c.prefix).map(c => (
                                <option key={c.code} value={c.prefix}>{c.flag} {c.prefix}</option>
                              ))}
                            </select>
                            <div className="input-container flex-grow-1">
                              <input
                                type="tel" name="phoneNumber"
                                value={formData.phoneNumber} onChange={handleChange}
                                placeholder="1 (702) 123-4567"
                                className={`form-input no-icon ${errors.phoneNumber ? 'is-invalid' : ''}`}
                                style={{ paddingLeft: '16px' }}
                              />
                            </div>
                          </div>
                          {errors.phoneNumber && <span className="error-text">{errors.phoneNumber}</span>}
                        </div>
                      </div>

                      {/* Area of Interest */}
                      <div className="col-12">
                        <div className="form-group">
                          <label className="form-label">Area of Interest <span>*</span></label>
                          <div className="input-container">
                            <BookOpen size={17} className="input-icon" />
                            <select
                              name="areaOfInterest" value={formData.areaOfInterest} onChange={handleChange}
                              className={`form-input form-select ${errors.areaOfInterest ? 'is-invalid' : ''}`}
                            >
                              <option value="" disabled hidden>Select a course or subject</option>
                              {courses.map(course => (
                                <option key={course} value={course}>{course}</option>
                              ))}
                            </select>
                          </div>
                          {errors.areaOfInterest && <span className="error-text">{errors.areaOfInterest}</span>}
                        </div>
                      </div>

                      {/* Message */}
                      <div className="col-12">
                        <div className="form-group">
                          <label className="form-label">How can we help? <span>*</span></label>
                          <div className="input-container" style={{ alignItems: 'flex-start' }}>
                            <MessageSquare size={17} className="input-icon" style={{ top: '14px' }} />
                            <textarea
                              name="message" value={formData.message} onChange={handleChange}
                              placeholder="Tell us about your cybersecurity goals, experience level, or any questions…"
                              rows={4}
                              className={`form-input ${errors.message ? 'is-invalid' : ''}`}
                              style={{ resize: 'vertical' }}
                            />
                          </div>
                          {errors.message && <span className="error-text">{errors.message}</span>}
                        </div>
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="mt-4">
                      <button
                        type="submit" disabled={isSubmitting}
                        className="btn-orange w-100 justify-content-center"
                        style={{ padding: '14px', fontSize: '14px', letterSpacing: '0.8px', border: '1.5px solid transparent', transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                        onMouseEnter={e => {
                          if (!isSubmitting) {
                            e.currentTarget.style.background = 'rgba(255,102,0,0.12)';
                            e.currentTarget.style.border = '1.5px solid rgba(255,102,0,0.75)';
                            e.currentTarget.style.backdropFilter = 'blur(12px)';
                            e.currentTarget.style.WebkitBackdropFilter = 'blur(12px)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,102,0,0.28), inset 0 0 24px rgba(255,102,0,0.06)';
                            e.currentTarget.style.color = '#fff';
                          }
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
                        {isSubmitting ? (
                          <><Loader2 size={18} className="anim-spin me-2" /> Submitting…</>
                        ) : (
                          <>Submit Enrollment <ArrowRight size={16} /></>
                        )}
                      </button>
                      <p style={{ fontSize: 12, color: 'var(--text-muted)', textAlign: 'center', marginTop: 12 }}>
                        Confirmation &amp; cohort details within 24 hours. Start in as little as 2 weeks.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </RevealSection>

          </div>
        </div>
      </section>



      {/* ══════════ SCOPED STYLES ══════════ */}
      <style>{`
        /* ── Hero ── */
        .cp-hero {
          position: relative;
          min-height: 88vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 100px 0 80px;
          background:
            radial-gradient(ellipse at 10% 50%, rgba(255,102,0,0.10) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 20%, rgba(255,102,0,0.06) 0%, transparent 50%),
            var(--bg-primary);
        }
        .cp-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .cp-orb-1 {
          width: 480px; height: 480px;
          top: -120px; left: -80px;
          background: radial-gradient(circle, rgba(255,102,0,0.07) 0%, transparent 70%);
        }
        .cp-orb-2 {
          width: 360px; height: 360px;
          bottom: -60px; right: 10%;
          background: radial-gradient(circle, rgba(255,102,0,0.05) 0%, transparent 70%);
        }
        .cp-hero-border {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,102,0,0.3), transparent);
        }

        .cp-hero-inner {
          display: flex;
          align-items: flex-start;
          gap: 64px;
        }
        .cp-hero-left {
          flex: 1;
          max-width: 600px;
        }
        .cp-hero-right {
          width: 340px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .cp-hero-title {
          font-size: clamp(32px, 4.5vw, 60px);
          font-weight: 900;
          line-height: 1.08;
          letter-spacing: -2px;
          color: #fff;
          margin-bottom: 20px;
        }
        .cp-hero-sub {
          font-size: 16px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 520px;
        }

        /* stat row */
        .cp-stat-row {
          display: flex;
          gap: 32px;
          margin-bottom: 28px;
        }
        .cp-stat-item {
          display: flex;
          flex-direction: column;
        }
        .cp-stat-num {
          font-size: 28px;
          font-weight: 900;
          color: var(--orange);
          line-height: 1;
        }
        .cp-stat-label {
          font-size: 12px;
          color: var(--text-secondary);
          margin-top: 4px;
          letter-spacing: 0.5px;
        }

        /* course chips */
        .cp-courses-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .cp-course-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          color: rgba(255,255,255,0.7);
          transition: all 0.2s;
          cursor: default;
        }
        .cp-course-chip:hover {
          background: rgba(255,102,0,0.08);
          border-color: rgba(255,102,0,0.3);
          color: var(--orange);
        }

        /* info cards */
        .cp-info-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 18px 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px;
          transition: all 0.3s;
        }
        .cp-info-card:hover {
          background: rgba(255,102,0,0.05);
          border-color: rgba(255,102,0,0.2);
          transform: translateX(4px);
        }
        .cp-info-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(255,102,0,0.1);
          border: 1px solid rgba(255,102,0,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--orange);
          flex-shrink: 0;
        }
        .cp-info-title {
          font-size: 13px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 4px;
        }
        .cp-info-line {
          font-size: 13px;
          color: rgba(255,255,255,0.75);
          line-height: 1.5;
        }
        .cp-info-sub {
          font-size: 11px;
          color: var(--text-muted);
          margin-top: 4px;
        }

        /* ── Form section ── */
        .cp-form-section {
          padding: 88px 0;
          background: var(--bg-card);
          border-top: 1px solid var(--border-card);
          border-bottom: 1px solid var(--border-card);
        }
        .cp-form-layout {
          display: flex;
          gap: 72px;
          align-items: flex-start;
        }
        .cp-why-col {
          flex: 1;
          max-width: 440px;
          position: sticky;
          top: 100px;
        }
        .cp-form-card {
          flex: 1;
          max-width: 600px;
        }

        .cp-why-title {
          font-size: clamp(22px, 2.5vw, 32px);
          font-weight: 800;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 14px;
        }
        .cp-why-desc {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 28px;
        }

        .cp-why-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 32px;
        }
        .cp-why-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .cp-why-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(255,102,0,0.1);
          border: 1px solid rgba(255,102,0,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--orange);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .cp-why-text {
          font-size: 14px;
          color: rgba(255,255,255,0.8);
          line-height: 1.5;
        }

        /* testimonial */
        .cp-testimonial {
          display: flex;
          gap: 16px;
          padding: 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px;
        }
        .cp-testimonial-bar {
          width: 3px;
          border-radius: 2px;
          background: var(--orange);
          flex-shrink: 0;
          align-self: stretch;
        }
        .cp-testimonial-text {
          font-size: 13.5px;
          color: rgba(255,255,255,0.75);
          line-height: 1.65;
          font-style: italic;
          margin-bottom: 14px;
        }
        .cp-testimonial-author {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .cp-author-avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--orange);
          color: #fff;
          font-size: 14px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .cp-author-name {
          font-size: 13px;
          font-weight: 700;
          color: #fff;
        }
        .cp-author-role {
          font-size: 11px;
          color: var(--text-muted);
          margin-top: 2px;
        }

        /* ── Programs section ── */
        .cp-programs-section {
          padding: 88px 0;
          background: var(--bg-primary);
        }
        .cp-programs-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }
        .cp-program-card {
          padding: 24px 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px;
          transition: all 0.3s;
          height: 100%;
        }
        .cp-program-card:hover {
          background: rgba(255,102,0,0.05);
          border-color: rgba(255,102,0,0.25);
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(255,102,0,0.12);
        }
        .cp-prog-title {
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          line-height: 1.35;
          margin-bottom: 6px;
        }
        .cp-prog-sub {
          font-size: 12px;
          color: var(--text-muted);
          margin-bottom: 16px;
          line-height: 1.4;
        }
        .cp-prog-cta {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          font-weight: 700;
          color: var(--orange);
          letter-spacing: 0.3px;
          transition: gap 0.2s;
        }
        .cp-program-card:hover .cp-prog-cta { gap: 8px; }

        /* ── Responsive ── */
        @media (max-width: 1200px) {
          .cp-programs-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 991px) {
          .cp-hero-inner { flex-direction: column; gap: 40px; }
          .cp-hero-right { width: 100%; flex-direction: row; flex-wrap: wrap; }
          .cp-info-card { flex: 1 1 calc(50% - 7px); min-width: 200px; }
          .cp-form-layout { flex-direction: column; gap: 48px; }
          .cp-why-col { max-width: 100%; position: static; }
          .cp-form-card { max-width: 100%; }
          .cp-programs-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 767px) {
          .cp-hero { padding: 80px 0 60px; min-height: unset; }
          .cp-hero-title { letter-spacing: -1px; }
          .cp-stat-row { gap: 20px; }
          .cp-info-card { flex: 1 1 100%; }
          .cp-programs-grid { grid-template-columns: 1fr; }
          .cp-why-col { display: none !important; }
          .cp-form-card { max-width: 100% !important; width: 100% !important; }
          .cp-form-section { padding: 48px 0; }
        }
      `}</style>
    </div>
  );
}
