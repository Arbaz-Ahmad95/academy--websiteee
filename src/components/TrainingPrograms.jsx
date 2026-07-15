import { Link } from 'react-router-dom';

export default function TrainingPrograms() {
  const headingFont = "'Oswald', sans-serif-condensed, sans-serif";

  const courses = [
    {
      title: 'AI GOVERNANCE',
      title2: 'PROFESSIONAL',
      desc: 'Lead responsible AI adoption with governance, risk management & compliance frameworks.',
      color: '#ff6a00',
      shadowColor: 'rgba(255, 106, 0, 0.15)',
      borderColor: 'rgba(255, 106, 0, 0.3)',
      path: '/modules/ai-risk-governance',
      icon: (
        <img src="/assets/icons/aigp.png" alt="AIGP" style={{ width: '140px', height: '140px', objectFit: 'contain' }} />
      )
    },
    {
      title: 'SOC + DFIR',
      title2: 'PROFESSIONAL',
      desc: 'Detect, respond & investigate cyber threats. Master SOC operations & Digital Forensics & Incident Response.',
      color: '#007fff',
      shadowColor: 'rgba(0, 127, 255, 0.15)',
      borderColor: 'rgba(0, 127, 255, 0.3)',
      path: '/soc-dfir',
      icon: (
        <img src="/assets/icons/soc-dfir.png" alt="SOC+DFIR" style={{ width: '140px', height: '140px', objectFit: 'contain' }} />
      )
    },
    {
      title: 'AI SECURITY',
      title2: 'PROFESSIONAL',
      desc: 'Secure AI systems, LLMs & applications. Understand AI threats, attack surfaces & protection strategies.',
      color: '#ff4500',
      shadowColor: 'rgba(255, 69, 0, 0.15)',
      borderColor: 'rgba(255, 69, 0, 0.3)',
      path: '/ai-security',
      icon: (
        <img src="/assets/icons/ai-security.png" alt="AI Security" style={{ width: '140px', height: '140px', objectFit: 'contain' }} />
      )
    },
    {
      title: 'AI EVALUATION',
      title2: 'PROFESSIONAL',
      desc: 'Evaluate AI models for fairness, safety, reliability & performance. Build trust in AI-driven decisions.',
      color: '#a020f0',
      shadowColor: 'rgba(160, 32, 240, 0.15)',
      borderColor: 'rgba(160, 32, 240, 0.3)',
      path: '/caep',
      icon: (
        <img src="/assets/icons/caep.png" alt="CAEP" style={{ width: '140px', height: '140px', objectFit: 'contain' }} />
      )
    },
    {
      title: 'AI IDENTITY & ACCESS',
      title2: 'MANAGEMENT PROFESSIONAL',
      desc: 'Secure digital identities & access in AI-driven environments. Master IAM for modern enterprises.',
      color: '#00cc66',
      shadowColor: 'rgba(0, 204, 102, 0.15)',
      borderColor: 'rgba(0, 204, 102, 0.3)',
      path: '/iam',
      icon: (
        <img src="/assets/icons/iam.png" alt="IAM" style={{ width: '140px', height: '140px', objectFit: 'contain' }} />
      )
    }
  ];

  return (
    <section 
      style={{ 
        background: '#050505', 
        color: '#fff', 
        padding: '50px 0', 
        fontFamily: "'Inter', sans-serif" 
      }}
      className="courses-section"
    >
      <div className="courses-container">
        {/* ── TOP BANNER ── */}
        <div 
          className="comfort-banner"
          style={{
            background: 'linear-gradient(90deg, #09090b 0%, #121217 100%)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '0 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px',
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
            boxSizing: 'border-box',
            overflow: 'hidden',
            marginBottom: '50px'
          }}
        >
          {/* Left illustration */}
          <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }} className="banner-icon-left">
            <img src="/assets/icons/desk.png" alt="Work from home" style={{ width: '170px', height: '170px', objectFit: 'contain', marginTop: '-30px', marginBottom: '-10px' }} />
          </div>

          {/* Center text */}
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <p 
              style={{ 
                margin: 0, 
                fontSize: 'clamp(18px, 2.2vw, 26px)', 
                fontWeight: 800, 
                letterSpacing: '0.8px', 
                color: '#fff',
                textTransform: 'uppercase',
                lineHeight: 1.4
              }}
            >
              LEARN FROM THE COMFORT OF YOUR HOME.<br />
              <span style={{ color: '#ff6a00' }}>AT YOUR DESK.</span> NO TRAVEL. NO DISTRACTIONS. JUST RESULTS.
            </p>
          </div>

          {/* Right illustration */}
          <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }} className="banner-icon-right">
            <img src="/assets/icons/couch.png" alt="Couch" style={{ width: '174px', height: '174px', objectFit: 'contain', marginTop: '-30px', marginBottom: '-10px' }} />
          </div>
        </div>

        {/* ── SECTION TITLE ── */}
        <div style={{ textAlign: 'center', marginBottom: '35px' }}>
          <h2 
            style={{
              fontFamily: headingFont,
              fontSize: 'clamp(20px, 2.5vw, 30px)',
              fontWeight: 700,
              letterSpacing: '0.8px',
              textTransform: 'uppercase',
              color: '#fff',
              margin: 0
            }}
          >
            HYPER-NICHE, HIGH IMPACT COURSES
          </h2>
          <div style={{ width: '40px', height: '2px', background: '#ff6a00', margin: '8px auto 0' }} />
        </div>

        {/* ── COURSES GRID ── */}
        <div className="courses-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>
          {courses.map((course) => (
            <div 
              key={course.title}
              className="course-card"
              style={{
                flex: '1 1 18%',
                minWidth: '240px',
                background: '#0a0a0d',
                border: `1px solid ${course.borderColor}`,
                borderRadius: '16px',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                boxShadow: `0 0 20px ${course.shadowColor}`
              }}
            >
              {/* Icon Container */}
              <div style={{ marginBottom: '-28px', marginTop: '-24px' }}>
                {course.icon}
              </div>

              {/* Title & Desc */}
              <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', width: '100%' }}>
                <h3 
                  className="course-card-title"
                  style={{
                    fontFamily: headingFont,
                    fontWeight: 700,
                    color: '#fff',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    margin: '0 0 4px 0'
                  }}
                >
                  {course.title}<br />
                  <span style={{ color: course.color }}>{course.title2}</span>
                </h3>
                <p className="course-card-desc" style={{ color: 'rgba(255, 255, 255, 0.5)', lineHeight: 1.5, margin: '8px 0 16px 0' }}>
                  {course.desc}
                </p>
              </div>

              {/* Action Button */}
              <Link 
                to={course.path}
                className="course-card-btn"
                style={{
                  background: 'transparent',
                  border: `1.5px solid ${course.color}`,
                  color: course.color,
                  fontWeight: 700,
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s ease',
                  width: '100%',
                  boxSizing: 'border-box'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = course.color;
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.boxShadow = `0 4px 12px ${course.shadowColor}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = course.color;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Explore Syllabus
              </Link>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .courses-container {
          padding: 0 90px;
        }
        .course-card-title { font-size: 18px; }
        .course-card-desc { font-size: 13.5px; }
        .course-card-btn { padding: 10px 16px; font-size: 13px; border-radius: 4px; }
        
        @media (min-width: 1201px) {
          .course-card {
            min-height: 440px !important;
            padding: 30px 24px !important;
          }
          .course-card-title { font-size: 24px !important; margin-bottom: 8px !important; }
          .course-card-desc { font-size: 16px !important; line-height: 1.6 !important; margin-bottom: 24px !important; }
          .course-card-btn { padding: 14px 20px !important; font-size: 15px !important; border-radius: 6px !important; }
        }

        .course-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 106, 0, 0.4);
        }
        @media (max-width: 1200px) {
          .courses-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 1023px) {
          .courses-container {
            padding: 0 40px !important;
          }
          .comfort-banner {
            flex-direction: column !important;
            height: auto !important;
            padding: 24px 20px !important;
            gap: 20px !important;
          }
          .banner-icon-left, .banner-icon-right {
            margin: 0 !important;
          }
          .banner-icon-left img, .banner-icon-right img {
            margin: 0 !important;
            height: 100px !important;
            width: 100px !important;
          }
          .courses-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 767px) {
          .courses-container {
            padding: 0 20px !important;
          }
          .courses-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
