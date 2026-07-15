import { useState, useEffect } from 'react';
import { User, Mail, Globe, MapPin, BookOpen, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';

const countriesData = [
  { code: 'AU', name: 'Australia', flag: '🇦🇺', prefix: '+61', cities: ['Melbourne', 'Sydney', 'Brisbane', 'Perth', 'Adelaide', 'Canberra'] },
  { code: 'US', name: 'United States', flag: '🇺🇸', prefix: '+1', cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'San Francisco', 'Atlanta'] },
  { code: 'IN', name: 'India', flag: '🇮🇳', prefix: '+91', cities: ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune'] },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', prefix: '+44', cities: ['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow', 'Edinburgh'] },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', prefix: '+1', cities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa'] },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬', prefix: '+65', cities: ['Singapore'] },
  { code: 'AE', name: 'United Arab Emirates', flag: '🇦🇪', prefix: '+971', cities: ['Dubai', 'Abu Dhabi', 'Sharjah'] },
  { code: 'NZ', name: 'New Zealand', flag: '🇳🇿', prefix: '+64', cities: ['Auckland', 'Wellington', 'Christchurch'] },
  { code: 'OTHER', name: 'Other Country', flag: '🌐', prefix: '', cities: [] }
];

const courses = [
  'AI Risk & Governance Program (AIGP)',
  'SOC + DFIR Specialist',
  'AI Identity Access Management (IAM)',
  'AI Security Program',
  'Certified AI Evaluation Professional (CAEP)'
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    phonePrefix: '+61',
    phoneNumber: '',
    city: '',
    areaOfInterest: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [availableCities, setAvailableCities] = useState([]);

  // Sync cities list and phone prefix when country changes
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

    if (!formData.country) newErrors.country = 'Please select a country';
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{5,15}$/.test(formData.phoneNumber.replace(/[\s-()]/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    if (!formData.areaOfInterest) newErrors.areaOfInterest = 'Please select an area of interest';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

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
        phonePrefix: '+61',
        phoneNumber: '',
        city: '',
        areaOfInterest: ''
      });
    }, 1200);
  };

  return (
    <section className="contact-section" id="register">
      <div className="container-xl">
        <div className="contact-card">
          {isSubmitted ? (
            <div className="success-message text-center">
              <div className="d-inline-flex align-items-center justify-content-center success-icon anim-bounce" style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(255, 102, 0, 0.1)', color: 'var(--orange)', marginBottom: 24 }}>
                <CheckCircle size={32} />
              </div>
              <h3 className="contact-title" style={{ color: '#fff' }}>Enrollment Request Submitted!</h3>
              <p className="contact-subtitle" style={{ maxWidth: 500, margin: '12px auto 32px' }}>
                Thank you for your interest. A GlobalSOC Academy advisor will get in touch with you within 24 hours to discuss cohort schedules and curriculum details.
              </p>
              <button onClick={() => setIsSubmitted(false)} className="btn-orange">
                Send Another Message <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="needs-validation">
              <div className="text-center mb-5">
                <h2 className="contact-title">Send us a message</h2>
                <p className="contact-subtitle">Fill out the form below and our team will get back to you shortly.</p>
              </div>

              <div className="row g-4">
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
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label className="form-label">Email <span>*</span></label>
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
                          <option key={c.code} value={c.name}>
                            {c.flag} {c.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.country && <span className="error-text">{errors.country}</span>}
                  </div>
                </div>

                {/* Phone Number */}
                <div className="col-12 col-md-6">
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
                        {countriesData.filter(c => c.prefix).map(c => (
                          <option key={c.code} value={c.prefix}>
                            {c.flag} {c.prefix}
                          </option>
                        ))}
                      </select>
                      <div className="input-container flex-grow-1">
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          placeholder="+61"
                          className={`form-input no-icon ${errors.phoneNumber ? 'is-invalid' : ''}`}
                          style={{ paddingLeft: '16px' }}
                        />
                      </div>
                    </div>
                    {errors.phoneNumber && <span className="error-text">{errors.phoneNumber}</span>}
                  </div>
                </div>

                {/* City */}
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label className="form-label">City</label>
                    <div className="input-container">
                      <MapPin size={18} className="input-icon" />
                      {formData.country === 'Other Country' || availableCities.length === 0 ? (
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Select or enter your city"
                          className="form-input"
                        />
                      ) : (
                        <select
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
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

                {/* Area of Interest */}
                <div className="col-12">
                  <div className="form-group">
                    <label className="form-label">Area of Interest <span>*</span></label>
                    <div className="input-container">
                      <BookOpen size={18} className="input-icon" />
                      <select
                        name="areaOfInterest"
                        value={formData.areaOfInterest}
                        onChange={handleChange}
                        className={`form-input form-select ${errors.areaOfInterest ? 'is-invalid' : ''}`}
                      >
                        <option value="" disabled hidden>Select subject</option>
                        {courses.map(course => (
                          <option key={course} value={course}>{course}</option>
                        ))}
                      </select>
                    </div>
                    {errors.areaOfInterest && <span className="error-text">{errors.areaOfInterest}</span>}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center mt-5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-orange w-100 justify-content-center"
                  style={{ padding: '16px', border: '1.5px solid transparent', transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
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
                    'Submit Enrollment'
                  )}
                </button>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 16 }}>
                  Confirmation & cohort details within 24 hours. Start in 2 weeks.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
