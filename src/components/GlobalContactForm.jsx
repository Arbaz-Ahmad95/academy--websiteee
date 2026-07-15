import { useState, useEffect, useRef } from 'react';
import { User, Mail, Globe, MapPin, Building, Briefcase, MessageSquare, ArrowRight, Loader2, CheckCircle } from 'lucide-react';

const countriesData = [
  { name: 'United States', code: '+1', flag: '🇺🇸', cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Other'] },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧', cities: ['London', 'Manchester', 'Birmingham', 'Leeds', 'Other'] },
  { name: 'Canada', code: '+1', flag: '🇨🇦', cities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Other'] },
  { name: 'Australia', code: '+61', flag: '🇦🇺', cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Other'] },
  { name: 'India', code: '+91', flag: '🇮🇳', cities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Other'] },
  { name: 'Germany', code: '+49', flag: '🇩🇪', cities: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg', 'Other'] },
  { name: 'France', code: '+33', flag: '🇫🇷', cities: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Other'] },
  { name: 'Japan', code: '+81', flag: '🇯🇵', cities: ['Tokyo', 'Osaka', 'Yokohama', 'Nagoya', 'Other'] },
  { name: 'Brazil', code: '+55', flag: '🇧🇷', cities: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Other'] },
  { name: 'Mexico', code: '+52', flag: '🇲🇽', cities: ['Mexico City', 'Guadalajara', 'Monterrey', 'Puebla', 'Other'] },
  { name: 'Singapore', code: '+65', flag: '🇸🇬', cities: ['Singapore', 'Other'] },
  { name: 'United Arab Emirates', code: '+971', flag: '🇦🇪', cities: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Other'] },
  { name: 'South Africa', code: '+27', flag: '🇿🇦', cities: ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Other'] },
  { name: 'Other', code: '', flag: '🌐', cities: [] }
];

const interestsData = [
  'SOC + DFIR Specialist',
  'AI Risk & Governance Program (AIGP)',
  'Certified AI Evaluation Professional (CAEP)',
  'AI Identity Access Management (IAM)',
  'AI Security Program',
  'Other'
];

export default function GlobalContactForm({ isEmbedded = false }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    customCountry: '',
    city: '',
    customCity: '',
    phonePrefix: '+1',
    phone: '',
    company: '',
    interest: '',
    customInterest: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);

  // Available cities for the selected country
  const [availableCities, setAvailableCities] = useState([]);
  
  // Scroll to form when submitted
  useEffect(() => {
    if (isSubmitted && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isSubmitted]);

  // Sync prefix and cities when country changes
  useEffect(() => {
    const selected = countriesData.find(c => c.name === formData.country);
    if (selected) {
      setAvailableCities(selected.cities || []);
      setFormData(prev => ({ 
        ...prev, 
        phonePrefix: selected.code || prev.phonePrefix,
        city: '',
        customCity: '',
        customCountry: ''
      }));
    }
  }, [formData.country]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.country) {
      newErrors.country = 'Please select a country';
    } else if (formData.country === 'Other' && !formData.customCountry.trim()) {
      newErrors.customCountry = 'Please enter your country';
    }

    if (formData.country && formData.country !== 'Other' && availableCities.length > 0) {
      if (!formData.city) {
        newErrors.city = 'Please select a city';
      } else if (formData.city === 'Other' && !formData.customCity.trim()) {
        newErrors.customCity = 'Please enter your city';
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.interest) {
      newErrors.interest = 'Please select a subject';
    } else if (formData.interest === 'Other' && !formData.customInterest.trim()) {
      newErrors.customInterest = 'Please enter your area of interest';
    }

    if (!formData.message.trim()) newErrors.message = 'Message is required';

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
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        customCountry: '',
        city: '',
        customCity: '',
        phonePrefix: '+1',
        phone: '',
        company: '',
        interest: '',
        customInterest: '',
        message: ''
      });
    }, 1200);
  };

  const formContent = (
    <div ref={formRef} className={isEmbedded ? "" : "contact-card"} style={isEmbedded ? { overflowX: 'hidden' } : { maxWidth: '800px', margin: '0 auto', overflowX: 'hidden' }}>
      {isSubmitted ? (
        <div className="success-message text-center">
          <div className="d-inline-flex align-items-center justify-content-center success-icon anim-bounce" style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(255, 102, 0, 0.1)', color: 'var(--orange)', marginBottom: 24 }}>
            <CheckCircle size={32} />
          </div>
          <h3 className="contact-title" style={{ color: '#fff' }}>Message Sent!</h3>
          <p className="contact-subtitle" style={{ maxWidth: 500, margin: '12px auto 32px' }}>
            Thank you for reaching out. Our team will get back to you shortly.
          </p>
          <button onClick={() => setIsSubmitted(false)} className="btn-orange">
            Send Another Message <ArrowRight size={16} />
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="needs-validation">
          {!isEmbedded && (
            <div className="text-center mb-3">
              <h2 className="contact-title">Enroll in a Course Today.</h2>
              <p className="contact-subtitle">Secure your spot in our upcoming cohort. Fill out the form below to get started.</p>
            </div>
          )}

              <div className="row g-2">
                {/* First Name */}
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label className="form-label">First Name <span>*</span></label>
                    <div className="input-container">
                      <User size={18} className="input-icon" />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
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
                      <User size={18} className="input-icon" />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
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
                    <label className="form-label">Email/WorkEmail <span>*</span></label>
                    <div className="input-container">
                      <Mail size={18} className="input-icon" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
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
                      <Globe size={18} className="input-icon" />
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className={`form-input form-select ${errors.country ? 'is-invalid' : ''}`}
                      >
                        <option value="" disabled hidden>Select your country</option>
                        {countriesData.map(c => (
                          <option key={c.name} value={c.name}>
                            {c.flag} {c.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.country && <span className="error-text">{errors.country}</span>}
                  </div>
                </div>

                {/* Custom Country (Conditional) */}
                {formData.country === 'Other' && (
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label className="form-label">Enter Country <span>*</span></label>
                      <div className="input-container">
                        <Globe size={18} className="input-icon" />
                        <input
                          type="text"
                          name="customCountry"
                          value={formData.customCountry}
                          onChange={handleChange}
                          placeholder="Your Country"
                          className={`form-input ${errors.customCountry ? 'is-invalid' : ''}`}
                        />
                      </div>
                      {errors.customCountry && <span className="error-text">{errors.customCountry}</span>}
                    </div>
                  </div>
                )}

                {/* City (Conditional based on country) */}
                {formData.country && formData.country !== 'Other' && availableCities.length > 0 && (
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label className="form-label">City <span>*</span></label>
                      <div className="input-container">
                        <MapPin size={18} className="input-icon" />
                        <select
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className={`form-input form-select ${errors.city ? 'is-invalid' : ''}`}
                        >
                          <option value="" disabled hidden>Select city</option>
                          {availableCities.map(city => (
                            <option key={city} value={city}>{city}</option>
                          ))}
                        </select>
                      </div>
                      {errors.city && <span className="error-text">{errors.city}</span>}
                    </div>
                  </div>
                )}

                {/* Custom City (Conditional based on city selection) */}
                {formData.country && formData.country !== 'Other' && formData.city === 'Other' && (
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label className="form-label">Enter City <span>*</span></label>
                      <div className="input-container">
                        <MapPin size={18} className="input-icon" />
                        <input
                          type="text"
                          name="customCity"
                          value={formData.customCity}
                          onChange={handleChange}
                          placeholder="Your City"
                          className={`form-input ${errors.customCity ? 'is-invalid' : ''}`}
                        />
                      </div>
                      {errors.customCity && <span className="error-text">{errors.customCity}</span>}
                    </div>
                  </div>
                )}

                {/* Phone Number */}
                <div className="col-12">
                  <div className="form-group">
                    <label className="form-label">Phone Number <span>*</span></label>
                    <div className="phone-input-group">
                      <select
                        name="phonePrefix"
                        value={formData.phonePrefix}
                        onChange={handleChange}
                        className="phone-prefix-select"
                        aria-label="Phone country code prefix"
                      >
                        {countriesData.filter(c => c.code).map(c => (
                          <option key={c.name} value={c.code}>
                            {c.flag} {c.code}
                          </option>
                        ))}
                      </select>
                      <div className="input-container flex-grow-1">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="1 (702) 123-4567"
                          className={`form-input no-icon ${errors.phone ? 'is-invalid' : ''}`}
                          style={{ paddingLeft: '16px' }}
                        />
                      </div>
                    </div>
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                  </div>
                </div>

                {/* Company / Organization */}
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label className="form-label">Company / Organization</label>
                    <div className="input-container">
                      <Building size={18} className="input-icon" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Enterprise Corp"
                        className="form-input"
                      />
                    </div>
                  </div>
                </div>

                {/* I'm interested in... */}
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label className="form-label">I'm interested in... <span>*</span></label>
                    <div className="input-container">
                      <Briefcase size={18} className="input-icon" />
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className={`form-input form-select ${errors.interest ? 'is-invalid' : ''}`}
                      >
                        <option value="" disabled hidden>Select subject</option>
                        {interestsData.map(i => (
                          <option key={i} value={i}>{i}</option>
                        ))}
                      </select>
                    </div>
                    {errors.interest && <span className="error-text">{errors.interest}</span>}
                  </div>
                </div>

                {/* Custom Interest Input (Conditional) */}
                <div className="col-12 col-md-6">
                  {formData.interest === 'Other' && (
                    <div className="form-group">
                      <label className="form-label">Please Specify <span>*</span></label>
                      <div className="input-container">
                        <Briefcase size={18} className="input-icon" />
                        <input
                          type="text"
                          name="customInterest"
                          value={formData.customInterest}
                          onChange={handleChange}
                          placeholder="Type your area of interest..."
                          className={`form-input ${errors.customInterest ? 'is-invalid' : ''}`}
                        />
                      </div>
                      {errors.customInterest && <span className="error-text">{errors.customInterest}</span>}
                    </div>
                  )}
                </div>

                {/* How can we help? */}
                <div className="col-12">
                  <div className="form-group">
                    <label className="form-label">How can we help? <span>*</span></label>
                    <div className="input-container" style={{ alignItems: 'flex-start' }}>
                      <MessageSquare size={18} className="input-icon" style={{ top: '16px' }} />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your security needs..."
                        rows={3}
                        className={`form-input ${errors.message ? 'is-invalid' : ''}`}
                        style={{ resize: 'vertical' }}
                      />
                    </div>
                    {errors.message && <span className="error-text">{errors.message}</span>}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center mt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-orange w-100 justify-content-center"
                  style={{ padding: '10px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px', border: '1.5px solid transparent', transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
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
                    <>
                      <Loader2 size={18} className="anim-spin me-2" />
                      Submitting...
                    </>
                  ) : (
                    'Enroll Now'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
  );

  if (isEmbedded) {
    return formContent;
  }

  return (
    <section className="contact-section" id="contact" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', overflowX: 'hidden' }}>
      <div className="container-xl">
        {formContent}
      </div>
    </section>
  );
}
