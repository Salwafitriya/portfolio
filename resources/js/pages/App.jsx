// PORTFOLIO/resources/js/components/App.jsx
import React from 'react';
import Navbar from './Navbar';
import HeroSection from './Hero';
import About from './About';
import Skills from './skills';
import Project from './Project';
// import Organization from './Organization';
import Certificate from './Certificate';
import Contact from './Contact';

import { AuroraBackground } from '../components/AuroraBackground'; // pastikan path-nya sesuai

function App() {
  return (
    <>
      {/* Aurora Background global */}
      <div className="fixed inset-0 -z-10">
        <AuroraBackground showRadialGradient />
      </div>

      {/* Konten halaman */}
      <div className="relative font-sans antialiased">
        <Navbar />
        <HeroSection />
        <About />
        <Skills />
        <Project />
        <Certificate />
        {/* <Organization /> */}
        <Contact/>
      </div>
    </>
  );
}

export default App;
