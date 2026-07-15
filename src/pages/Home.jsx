import HeroSection from '../components/HeroSection';
import WhyChooseUs from '../components/WhyChooseUs';
import TrainingPrograms from '../components/TrainingPrograms';
import CTABanner from '../components/CTABanner';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <TrainingPrograms />
      <CTABanner />

      <style>{`
        @media (max-width: 767px) {
          .home-section-pad { padding: 44px 0 !important; }
          .diff-table td, .diff-table th { font-size: 12px !important; padding: 8px !important; }
          .cta-section { padding: 44px 0 !important; }
        }
        @media (max-width: 1023px) {
          .home-section-pad { padding: 60px 0 !important; }
        }
      `}</style>
    </div>
  );
}
