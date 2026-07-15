import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SuccessStoriesPage from './pages/SuccessStoriesPage';

import PlaceholderPage from './pages/PlaceholderPage';

import Home from './pages/Home';
import SOCDFIRPage from './pages/SOCDFIRPage';
import AIGPPage from './pages/AIGPPage';
import CAEPPage from './pages/CAEPPage';
import IAMPage from './pages/IAMPage';

import WhyGlobalSOCPage from './pages/WhyGlobalSOCPage';
import ContactPage from './pages/ContactPage';

function ScrollToHashAndTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}

function AppContent() {
  const location = useLocation();
  return (
    <>
      <ScrollToHashAndTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/soc-dfir" element={<SOCDFIRPage />} />
          <Route path="/modules/ai-risk-governance" element={<AIGPPage />} />
          <Route path="/caep" element={<CAEPPage />} />
          <Route path="/iam" element={<IAMPage />} />
          <Route path="/ai-security" element={<PlaceholderPage title="AI Security Specialist" />} />
          <Route path="/career-paths" element={<PlaceholderPage title="Career Paths" />} />
          <Route path="/why-globalsoc" element={<WhyGlobalSOCPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resources" element={<PlaceholderPage title="Resources" />} />
          <Route path="/about" element={<PlaceholderPage title="About Us" />} />
          <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
        </Routes>

      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
