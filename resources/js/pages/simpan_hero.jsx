import React, { useState, useEffect } from 'react';

// URL Icon CDN Lucide React (Lucide Icons via SVG inline)
const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const FolderIcon = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#72b8f8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.1))' }}>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" fill="#90caf9" fillOpacity="0.85"></path>
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e5a100" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const bgImages = [
  '/assets/bg-main/1.png',
  '/assets/bg-main/2.png',
  '/assets/bg-main/3.png',
  '/assets/bg-main/4.png',
  '/assets/bg-main/5.png',
];

const HeroSection = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif",
        padding: '40px 24px',
        boxSizing: 'border-box',
      }}
    >
      {/* 1. Background image layers with crossfade transition
      {bgImages.map((src, i) => (
        <div
          key={src}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            opacity: i === currentBg ? 1 : 0,
            transition: 'opacity 1.4s ease-in-out',
            zIndex: 0,
          }}
        />
      ))} */}

      {/* Light Sky/Cloud Overlay matching the image background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle, rgba(235, 243, 250, 0.65) 0%, rgba(200, 220, 240, 0.75) 100%)',
          backdropFilter: 'blur(4px)',
          zIndex: 1,
        }}
      />

      {/* Main Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr auto',
          gap: '32px',
          alignItems: 'center',
        }}
      >
        {/* LEFT COLUMN: Text Heading & Bio */}
        <div style={{ paddingRight: '12px' }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 500,
              color: '#000000',
              margin: '0 0 24px 0',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            Hello, it’s me{' '}
            <span
              style={{
                fontFamily: "'Georgia', serif",
                fontStyle: 'italic',
                fontWeight: 600,
                backgroundColor: '#fde047',
                padding: '2px 14px',
                borderRadius: '4px',
                display: 'inline-block',
              }}
            >
              Salwa
            </span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              color: '#1c1c1e',
              lineHeight: 1.6,
              margin: '0 0 36px 0',
              maxWidth: '480px',
            }}
          >
            I bridge the gap between ideas and action, uncover the story in{' '}
            <strong style={{ fontWeight: 700 }}>data</strong>, shape possibilities through{' '}
            <strong style={{ fontWeight: 700 }}>technology</strong>, and create solutions that serve the{' '}
            <strong style={{ fontWeight: 700 }}>business</strong>.
          </p>

          <a
            href="#projects"
            style={{
              fontSize: '1.2rem',
              fontWeight: 500,
              color: '#000000',
              textDecoration: 'underline',
              textUnderlineOffset: '6px',
              textDecorationThickness: '2px',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Explore my works!
          </a>
        </div>

        {/* MIDDLE COLUMN: Frame Image Window + Notes Widget */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          {/* Main Photo Window Frame */}
          <div
            style={{
              width: '100%',
              maxWidth: '420px',
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              borderRadius: '12px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              overflow: 'hidden',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
            }}
          >
            {/* macOS Window Top Bar */}
            <div
              style={{
                padding: '10px 16px',
                borderBottom: '1px solid rgba(0,0,0,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'rgba(240, 240, 240, 0.6)',
              }}
            >
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#3a3a3c' }}>
                salwafitriya.png
              </span>
            </div>

            {/* Photo Inside Frame */}
            <div style={{ height: '380px', width: '100%', overflow: 'hidden' }}>
              <img
                src="/assets/foto/salwa-foto.jpeg" /* GANTI DENGAN JALUR FOTO ANDA */
                alt="Salwa Fitriya"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </div>
          </div>

          {/* Overlapping macOS Notes Widget */}
          <div
            style={{
              position: 'absolute',
              bottom: '-120px',
              right: '-70px',
              width: '260px',
              backgroundColor: '#fffdf0',
              borderRadius: '14px',
              padding: '16px',
              boxShadow: '0 15px 30px rgba(0,0,0,0.12)',
              border: '1px solid rgba(230, 220, 180, 0.5)',
              zIndex: 3,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '12px',
                fontSize: '0.8rem',
                color: '#e5a100',
                fontWeight: 600,
              }}
            >
              <span>&lt; Notes</span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <ExternalLinkIcon />
              </div>
            </div>

            {/* Yellow Highlight Title */}
            <div
              style={{
                backgroundColor: '#fef08a',
                padding: '2px 8px',
                borderRadius: '4px',
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#1c1c1e',
                display: 'inline-block',
                marginBottom: '12px',
              }}
            >
              About me
            </div>

            {/* Checklist Items */}
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#3a3a3c' }}>
                <CheckIcon /> Fullstack Developer
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#3a3a3c' }}>
                <CheckIcon /> UI/UX Enthusiast
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#3a3a3c' }}>
                <CheckIcon /> based in Semarang
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Desktop Folder Icons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '28px',
            alignItems: 'center',
            paddingLeft: '20px',
          }}
        >
          {/* Contact Me Folder */}
          <a
            href="mailto:salwafitriyatunnisa@gmail.com"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textDecoration: 'none',
              gap: '6px',
              cursor: 'pointer',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <FolderIcon />
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#1c1c1e',
                backgroundColor: 'rgba(255,255,255,0.7)',
                padding: '2px 8px',
                borderRadius: '4px',
                backdropFilter: 'blur(4px)',
              }}
            >
              Contact Me
            </span>
          </a>

          {/* CV Folder */}
          <a
            href="https://drive.google.com/open?id=1R9cmAISXVpNy_t1S11kluDVJ-46-H30i"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textDecoration: 'none',
              gap: '6px',
              cursor: 'pointer',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <FolderIcon />
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#1c1c1e',
                backgroundColor: 'rgba(255,255,255,0.7)',
                padding: '2px 8px',
                borderRadius: '4px',
                backdropFilter: 'blur(4px)',
              }}
            >
              CV
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;