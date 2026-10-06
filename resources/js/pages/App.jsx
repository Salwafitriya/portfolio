import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeroSection from './Hero';
import About from './About';
import Project from './Project';
import Certificate from './Certificate';
import Contact from './Contact';
import ProjectDetail from './ProjectDetail';

/* ─── Main portfolio page (all sections) ─── */
function PortfolioPage() {
  return (
    <div
      className="bg-[#fafafa] font-sans antialiased text-slate-900 selection:bg-indigo-500 selection:text-white"
      style={{
        height: '100vh', // Wajib fix 100vh agar menjadi area scroll tersendiri
        overflowY: 'scroll', // Mengaktifkan scroll di dalam div ini
        scrollSnapType: 'y mandatory', // Memaksa efek snap vertikal
        scrollBehavior: 'smooth', // Efek transisi mulus saat klik link/navbar
      }}
    >
      <HeroSection />
      <About />
      <Project />
      <Certificate />
      <Contact />
    </div>
  );
}

/* ─── Router root ─── */
function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      {/* Catch-all — redirect unknown paths back to home */}
      <Route path="*" element={<PortfolioPage />} />
    </Routes>
  );
}

export default App;