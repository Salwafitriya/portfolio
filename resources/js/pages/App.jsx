import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HeroSection from './Hero';
import About from './About';
import Project from './Project';
// import Certificate from './Certificate';
import Contact from './Contact';
import ProjectDetail from './ProjectDetail';
import Activity from './Activity';
import Internship from './Internship';
import Certification from './Certification';


/* ─── Main portfolio page (all sections) ─── */
function PortfolioPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.replace('#', ''));
      // Berikan timeout agar elemen DOM sudah ter-render sepenuhnya
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 150);
    }
  }, [location]);

  return (
    <div
      className="bg-[#F5F1E8] font-sans antialiased text-[#141B2D] selection:bg-[#FFE34F] selection:text-[#070D20]"
      style={{
        height: '100vh',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth',
      }}
    >
      <HeroSection />
      <About />
      <Project />
      <Internship />
      <Certification />
      <Activity />
      <Contact />
    </div>
  );
}

/* ─── Router root ─── */
function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/internship" element={<Internship />} />
      <Route path="/activities" element={<Activity />} />
      <Route path="/certifications" element={<Certification />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      {/* Catch-all — redirect unknown paths back to home */}
      <Route path="*" element={<PortfolioPage />} />
    </Routes>
  );
}

export default App;
