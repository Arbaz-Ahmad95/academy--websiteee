import { Link } from 'react-router-dom';

export default function WhyChooseUs() {
  const headingFont = "'Oswald', sans-serif-condensed, sans-serif";

  return (
    <section 
      style={{ 
        background: '#050505', 
        color: '#fff', 
        height: 'auto',
        padding: '60px 0', 
        fontFamily: "'Inter', sans-serif",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxSizing: 'border-box',
        overflow: 'visible'
      }}
      className="why-choose-us-section"
    >
      {/* Dynamic Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700;900&display=swap');
      `}</style>

      <div className="container-xl" style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', height: 'auto', gap: '32px', justifyContent: 'flex-start' }}>
        
        {/* ── TOP HEADING ── */}
        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
          <h2 
            style={{
              fontFamily: headingFont,
              fontSize: 'clamp(26px, 2.8vw, 36px)',
              fontWeight: 700,
              letterSpacing: '0.8px',
              textTransform: 'uppercase',
              color: '#fff',
              margin: 0
            }}
          >
            WHY DO THOUSANDS CHOOSE <span style={{ color: '#ff6a00' }}>GLOBALSOC</span>?
          </h2>
        </div>

        {/* ── TOP FEATURES ROW ── */}
        <div 
          className="why-row" 
          style={{ 
            display: 'flex', 
            width: '100%', 
            alignItems: 'center', 
            marginBottom: '10px',
            gap: '10px'
          }}
        >
          {/* Feature 1 */}
          <div className="why-col" style={{ flex: 1, padding: '0 10px', display: 'flex', alignItems: 'center', gap: 14, justifyContent: 'center' }}>
            <img src="/assets/icons/why-target-icon.png" alt="Target" className="why-icon" style={{ width: 120, height: 120, objectFit: 'contain', flexShrink: 0, margin: '-25px' }} />
            <p style={{ fontSize: '15px', fontWeight: 500, color: '#fff', margin: 0, lineHeight: 1.4 }}>
              We focus on what<br />employers want.
            </p>
          </div>

          <div className="why-divider" style={{ width: '1px', height: '36px', background: 'rgba(255, 106, 0, 0.25)' }} />

          {/* Item 2 */}
          <div className="why-col" style={{ flex: 1, padding: '0 10px', display: 'flex', alignItems: 'center', gap: 14, justifyContent: 'center' }}>
            <img src="/assets/icons/why-shield-icon.png" alt="Shield" className="why-icon" style={{ width: 120, height: 120, objectFit: 'contain', flexShrink: 0, margin: '-25px' }} />
            <p style={{ fontSize: '15px', fontWeight: 500, color: '#fff', margin: 0, lineHeight: 1.4 }}>
              We train in <span style={{ color: '#ff6a00', fontWeight: 700 }}>live environments</span><br />with <span style={{ color: '#ff6a00', fontWeight: 700 }}>live data</span>.
            </p>
          </div>

          <div className="why-divider" style={{ width: '1px', height: '36px', background: 'rgba(255, 106, 0, 0.25)' }} />

          {/* Item 3 */}
          <div className="why-col" style={{ flex: 1, padding: '0 10px', display: 'flex', alignItems: 'center', gap: 14, justifyContent: 'center' }}>
            <img src="/assets/icons/why-rocket-icon.png" alt="Rocket" className="why-icon" style={{ width: 120, height: 120, objectFit: 'contain', flexShrink: 0, margin: '-25px' }} />
            <p style={{ fontSize: '15px', fontWeight: 500, color: '#fff', margin: 0, lineHeight: 1.4 }}>
              We transform learners<br />into high-performing professionals.
            </p>
          </div>
        </div>

        {/* ── COMPARISON SECTION ── */}
        <div style={{ position: 'relative', display: 'flex', gap: '32px', maxWidth: '1160px', width: '100%', margin: '0 auto', flex: '1 1 auto', minHeight: 0 }} className="comparison-wrap">
          
          {/* LEFT CARD: TRADITIONAL CYBER TRAINING */}
          <div 
            className="comparison-card traditional-card"
            style={{ 
              flex: 1, 
              background: 'linear-gradient(135deg, #090303 0%, #050505 100%)', 
              border: '1.5px solid #ff3434', 
              borderRadius: '26px', 
              padding: '28px 24px',
              boxShadow: '0 0 20px rgba(255, 52, 52, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
          >
            {/* Header */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', justifyContent: 'center' }}>
                <div style={{
                  width: '28px', height: '28px',
                  background: '#ff3434',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontWeight: 900, fontSize: '14px', flexShrink: 0
                }}>
                  ✕
                </div>
                <h3 style={{ fontFamily: headingFont, fontSize: '18px', fontWeight: 700, color: '#ff3434', textTransform: 'uppercase', margin: 0, letterSpacing: '0.4px' }}>
                  TRADITIONAL CYBER TRAINING
                </h3>
              </div>

              <div style={{ borderBottom: '1px solid rgba(255, 52, 52, 0.15)', marginBottom: '8px' }} />

              {/* List Rows */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  { icon: '/assets/icons/theory.png', title: 'Too much theory', desc: 'Information without real understanding.' },
                  { icon: '/assets/icons/labs.png', title: 'Simulated labs & data', desc: 'Not real. Not complete. Not the reality.' },
                  { icon: '/assets/icons/videos.png', title: 'Pre-recorded videos', desc: 'Passive learning. Zero interaction.' },
                  { icon: '/assets/icons/guidance.png', title: 'No real guidance', desc: 'No mentorship. No direction.' },
                  { icon: '/assets/icons/exposure.png', title: 'No real-world exposure', desc: "You don't see. You don't experience." },
                  { icon: '/assets/icons/certificates.png', title: 'Certificates, not skills', desc: 'Paper in hand. But unfit for the job.' }
                ].map((item, idx, arr) => (
                  <div key={idx}>
                    <div className="compare-row" style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '6px 0' }}>
                      <img src={item.icon} alt={item.title} className="compare-icon" style={{ width: '60px', height: '60px', objectFit: 'contain', flexShrink: 0 }} />
                      <div>
                        <h4 className="compare-title" style={{ fontFamily: headingFont, fontSize: '15px', fontWeight: 600, color: '#fff', margin: '0 0 2px 0', letterSpacing: '0.2px' }}>{item.title}</h4>
                        <p className="compare-desc" style={{ fontSize: '12px', color: '#bfbfbf', margin: 0 }}>{item.desc}</p>
                      </div>
                    </div>
                    {idx < arr.length - 1 && <div style={{ borderBottom: '1px solid rgba(255, 52, 52, 0.08)' }} />}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Result Box */}
            <div
              className="result-box"
              style={{
                marginTop: '20px',
                background: 'rgba(255, 52, 52, 0.03)',
                border: '1.5px solid #ff3434',
                borderRadius: '16px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '125px',
                boxSizing: 'border-box'
              }}
            >
              <img src="/assets/icons/reality-user.png" alt="Reality User" className="result-icon" style={{ position: 'absolute', bottom: -5, left: 10, width: '100px', height: '100px', objectFit: 'contain' }} />
              <div className="result-text" style={{ paddingLeft: '115px' }}>
                <span style={{
                  background: '#ff3434',
                  color: '#fff',
                  fontSize: '10px',
                  fontWeight: 900,
                  padding: '3px 10px',
                  borderRadius: '12px',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  marginBottom: '6px'
                }}>
                  THE REALITY?
                </span>
                <h4 style={{ fontFamily: headingFont, fontSize: '17px', fontWeight: 700, color: '#ff3434', margin: '0 0 4px 0', letterSpacing: '0.4px' }}>
                  UNFIT FOR JOBS.
                </h4>
                <p style={{ fontSize: '11px', color: '#fff', fontWeight: 600, margin: 0, lineHeight: 1.35, textTransform: 'uppercase' }}>
                  LACK OF PRACTICAL SKILLS.<br />
                  NO CONFIDENCE.<br />
                  NOT READY FOR REAL ATTACKS.
                </p>
              </div>
            </div>
          </div>

          {/* ── CENTER CIRCLE "VS" ── */}
          <div 
            className="vs-circle"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '64px',
              height: '64px',
              background: '#050505',
              border: '2px solid #ff6a00',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              boxShadow: '0 0 15px rgba(255, 106, 0, 0.3)'
            }}
          >
            <span style={{ fontSize: '20px', fontWeight: 900, color: '#fff', fontStyle: 'italic' }}>VS</span>
          </div>

          {/* RIGHT CARD: THE GLOBALSOC DIFFERENCE */}
          <div 
            className="comparison-card globalsoc-card"
            style={{ 
              flex: 1, 
              background: 'linear-gradient(135deg, #030803 0%, #050505 100%)', 
              border: '1.5px solid #74d62f', 
              borderRadius: '26px', 
              padding: '28px 24px',
              boxShadow: '0 0 20px rgba(116, 214, 47, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
          >
            {/* Header */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', justifyContent: 'center' }}>
                <div style={{
                  width: '28px', height: '28px',
                  background: '#74d62f',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#050505', fontWeight: 900, fontSize: '14px', flexShrink: 0
                }}>
                  ✓
                </div>
                <h3 style={{ fontFamily: headingFont, fontSize: '18px', fontWeight: 700, color: '#74d62f', textTransform: 'uppercase', margin: 0, letterSpacing: '0.4px' }}>
                  THE GLOBALSOC DIFFERENCE
                </h3>
              </div>

              <div style={{ borderBottom: '1px solid rgba(116, 214, 47, 0.15)', marginBottom: '8px' }} />

              {/* List Rows */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  { icon: '/assets/icons/live-soc.png', title: 'LIVE SOC ENVIRONMENT', desc: 'Train in a real Security Operations Centre.' },
                  { icon: '/assets/icons/real-data.png', title: 'REAL DATA. REAL THREATS.', desc: 'Work on real attacks with enterprise tools.' },
                  { icon: '/assets/icons/mentorship.png', title: 'EXPERT MENTORSHIP', desc: 'Learn from industry professionals.' },
                  { icon: '/assets/icons/hands-on.png', title: 'HANDS-ON. PRACTICAL. INTENSIVE.', desc: '80% hands-on, real-world scenarios.' },
                  { icon: '/assets/icons/hands-on.png', title: 'JOB-FOCUSED TRAINING', desc: 'Skills that companies actually need.' } // Usually 5 items here in reference
                ].map((item, idx, arr) => (
                  <div key={idx}>
                    <div className="compare-row" style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '14px 0' }}>
                      <img src={item.icon} alt={item.title} className="compare-icon" style={{ width: '60px', height: '60px', objectFit: 'contain', flexShrink: 0 }} />
                      <div>
                        <h4 className="compare-title" style={{ fontFamily: headingFont, fontSize: '15px', fontWeight: 600, color: '#fff', margin: '0 0 2px 0', letterSpacing: '0.2px' }}>{item.title}</h4>
                        <p className="compare-desc" style={{ fontSize: '12px', color: '#bfbfbf', margin: 0 }}>{item.desc}</p>
                      </div>
                    </div>
                    {idx < arr.length - 1 && <div style={{ borderBottom: '1px solid rgba(116, 214, 47, 0.08)' }} />}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Result Box */}
            <div
              className="result-box"
              style={{
                marginTop: '20px',
                background: 'rgba(116, 214, 47, 0.03)',
                border: '1.5px solid #74d62f',
                borderRadius: '16px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '125px',
                boxSizing: 'border-box'
              }}
            >
              <img src="/assets/icons/result-user.png" alt="Result User" className="result-icon" style={{ position: 'absolute', bottom: -5, left: 10, width: '100px', height: '100px', objectFit: 'contain' }} />
              <div className="result-text" style={{ paddingLeft: '115px' }}>
                <span style={{
                  background: '#74d62f',
                  color: '#050505',
                  fontSize: '10px',
                  fontWeight: 900,
                  padding: '3px 10px',
                  borderRadius: '12px',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  marginBottom: '6px'
                }}>
                  THE RESULT?
                </span>
                <h4 style={{ fontFamily: headingFont, fontSize: '17px', fontWeight: 700, color: '#74d62f', margin: '0 0 4px 0', letterSpacing: '0.4px' }}>
                  JOB READY.
                </h4>
                <p style={{ fontSize: '11px', color: '#fff', fontWeight: 600, margin: 0, lineHeight: 1.35, textTransform: 'uppercase' }}>
                  PRACTICAL SKILLS.<br />
                  REAL CONFIDENCE.<br />
                  PREPARED FOR REAL-WORLD ROLES.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ── Styles ── */}
      <style>{`
        .why-choose-us-section {
          padding: 60px 90px !important;
        }
        .traditional-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(255, 52, 52, 0.1) !important;
        }
        .globalsoc-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(116, 214, 47, 0.1) !important;
        }

        @media (max-width: 1023px) {
          .why-choose-us-section {
            height: auto !important;
            padding: 40px 40px !important;
          }
          .comparison-wrap {
            flex-direction: column !important;
            gap: 40px !important;
            height: auto !important;
          }
          .vs-circle {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            transform: none !important;
            margin: -16px auto !important;
          }
          .why-row {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 15px;
          }
          .why-col {
            justify-content: flex-start !important;
            width: 100% !important;
            padding: 0 !important;
          }
          .why-divider {
            display: none !important;
          }
          .result-box {
            align-items: flex-start !important;
            min-height: 0 !important;
            gap: 14px !important;
          }
          .result-icon {
            position: static !important;
            width: 64px !important;
            height: 64px !important;
            flex-shrink: 0 !important;
            margin-top: 4px !important;
          }
          .result-text {
            padding-left: 0 !important;
          }
        }

        @media (max-width: 767px) {
          .why-choose-us-section {
            padding: 40px 20px !important;
          }
          .comparison-card {
            padding: 20px 18px !important;
            border-radius: 18px !important;
          }
          .compare-row {
            padding: 6px 0 !important;
            gap: 12px !important;
          }
          .compare-icon {
            width: 34px !important;
            height: 34px !important;
          }
          .compare-title {
            font-size: 13.5px !important;
          }
          .compare-desc {
            font-size: 11px !important;
          }
        }
      `}</style>
    </section>
  );
}
