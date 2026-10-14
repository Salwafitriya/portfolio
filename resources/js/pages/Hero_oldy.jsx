import React, { useState, useEffect } from 'react';

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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background image layers — crossfade via opacity transitions */}
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
      ))}

      {/* Warm pinkish/cream overlay matching the reference image tint */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(255, 238, 228, 0.58)',
          zIndex: 1,
        }}
      />

      {/* Hero Content — fixed center above rotating background */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: '700px',
          width: '100%',
          padding: '0 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* "Portfolio" small label */}
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '1.05rem',
            fontWeight: 600,
            letterSpacing: '0.06em',
            color: '#C0392B',
            margin: '0 0 10px 0',
          }}
        >
          Portfolio
        </p>

        {/* Main Name heading */}
        <h1
          style={{
            margin: '0 0 22px 0',
            lineHeight: 1.05,
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(3rem, 9vw, 5.5rem)',
              color: '#111111',
              letterSpacing: '-0.02em',
            }}
          >
            Salwa
          </span>
          <span
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontWeight: 400,
              fontSize: 'clamp(3.6rem, 10vw, 6.5rem)',
              background: 'linear-gradient(135deg, #E05C2A 0%, #C0392B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.15,
              paddingBottom: '4px',
            }}
          >
            Fitriya
          </span>
        </h1>

        {/* Dynamic & Engaging Description */}
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
            color: '#3F3F46',
            lineHeight: 1.75,
            maxWidth: '620px',
            margin: '0 0 40px 0',
            fontWeight: 400,
          }}
        >
          I bridge the gap between ideas and action — uncovering the story in{' '}
          <span
            style={{
              fontWeight: 600,
              color: '#18181B',
              borderBottom: '2px solid rgba(224, 92, 42, 0.4)',
              paddingBottom: '1px',
            }}
          >
            data
          </span>
          , shaping possibilities through{' '}
          <span
            style={{
              fontWeight: 600,
              color: '#18181B',
              borderBottom: '2px solid rgba(224, 92, 42, 0.4)',
              paddingBottom: '1px',
            }}
          >
            technology
          </span>
          , and creating solutions that drive the{' '}
          <span
            style={{
              fontWeight: 600,
              color: '#18181B',
              borderBottom: '2px solid rgba(224, 92, 42, 0.4)',
              paddingBottom: '1px',
            }}
          >
            business
          </span>
          .
        </p>

        {/* Nav-style buttons row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '36px',
            // flexWrap: 'wrap',
          }}
        >
          <NavLink href="#about">About</NavLink>

          <a
            href="#projects"
            id="hero-view-work-btn"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.95rem',
              fontWeight: 600,
              color: '#111111',
              textDecoration: 'none',
              // border: '2px solid #111111',
              // borderRadius: '999px',
              // padding: '10px 30px',
              // backgroundColor: 'rgba(255,255,255,0.78)',
              // backdropFilter: 'blur(6px)',
              // transition: 'all 0.25s ease',
              // display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#111111';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.78)';
              e.currentTarget.style.color = '#111111';
            }}
          >
            View My Work
          </a>

          <NavLink href="#contact">Contact</NavLink>
        </div>
      </div>
    </section>
  );
};

/* Inline helper to keep link styles DRY */
const NavLink = ({ href, children }) => (
  <a
    href={href}
    style={{
      fontFamily: "'Poppins', sans-serif",
      fontSize: '0.95rem',
      fontWeight: 500,
      color: '#2a2a2a',
      textDecoration: 'none',
      transition: 'color 0.2s',
    }}
    onMouseEnter={(e) => (e.currentTarget.style.color = '#C0392B')}
    onMouseLeave={(e) => (e.currentTarget.style.color = '#2a2a2a')}
  >
    {children}
  </a>
);

export default HeroSection;