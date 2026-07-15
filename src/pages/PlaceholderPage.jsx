import { Link } from 'react-router-dom';

export default function PlaceholderPage({ title }) {
  return (
    <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <div className="section-label mb-4">GlobalSOC Academy</div>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: '#fff', marginBottom: 16 }}>
          {title}
        </h1>
        <p style={{ fontSize: 16, color: 'var(--text-secondary)', marginBottom: 32 }}>
          This page is coming soon. Explore our courses in the meantime.
        </p>
        <Link to="/" className="btn-orange">← Back to Academy</Link>
      </div>
    </div>
  );
}
