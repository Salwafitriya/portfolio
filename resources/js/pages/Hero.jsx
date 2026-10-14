import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaFolder } from 'react-icons/fa';

/* ─── Atur konten hero di sini ─────────────────────────────── */
const CONFIG = {
  name: "Salwa Fitriya's",
  words: ['portfolio'],                 // 1 kata = diketik sekali; lebih dari 1 = bergantian
  tagline: 'SAP S/4HANA Materials Management (MM) · Data Analyst · Software Engineer',
  image: '/assets/foto/bg-porto-1.jpg',               // ganti dengan path foto Anda
  cvUrl: '/cv.pdf',                     // ganti dengan path/link CV
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Internships', href: '#internship' },
    { label: 'Activities', href: '#activities' },
    { label: 'Certifications', href: '#certification' },
    { label: 'Contact', href: '#contact' },
  ],
};

/* Efek mengetik sederhana */
function useTypewriter(words, { type = 110, erase = 60, hold = 1600 } = {}) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0]);
      return;
    }
    let w = 0;
    let i = 0;
    let deleting = false;
    let t;

    const tick = () => {
      const word = words[w];
      if (!deleting) {
        i += 1;
        setText(word.slice(0, i));
        if (i === word.length) {
          if (words.length === 1) return;
          deleting = true;
          t = setTimeout(tick, hold);
          return;
        }
        t = setTimeout(tick, type);
      } else {
        i -= 1;
        setText(word.slice(0, i));
        if (i === 0) {
          deleting = false;
          w = (w + 1) % words.length;
          t = setTimeout(tick, 300);
          return;
        }
        t = setTimeout(tick, erase);
      }
    };

    t = setTimeout(tick, 500);
    return () => clearTimeout(t);
  }, [words, type, erase, hold]);

  return text;
}

const FolderChip = ({ href, label, external }) => (
  <a
    href={href}
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#070D20]/75 backdrop-blur-md border border-white/20 text-white transition-all duration-200 hover:bg-[#FFE34F] hover:text-[#070D20] hover:border-[#FFE34F] hover:-translate-y-0.5 shadow-lg"
  >
    <FaFolder size={16} className="text-[#FFE34F] group-hover:text-[#070D20] transition-colors" />
    <span className="text-xs sm:text-sm font-medium tracking-wide">{label}</span>
  </a>
);

export default function Hero() {
  const typed = useTypewriter(CONFIG.words);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden text-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Foto latar + overlay agar teks selalu terbaca */}
      <img
        src={CONFIG.image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#070D20]/90 via-[#070D20]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#070D20]/50 via-transparent to-[#070D20]/70" />

      {/* Navigasi */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
        <ul className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#070D20]/80 backdrop-blur-md border border-white/15 shadow-xl">
          {CONFIG.nav.map((n) => (
            <li key={n.label}>
              <a
                href={n.href}
                className="block px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide text-white/80 hover:bg-white/15 hover:text-white transition-all duration-200"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Konten utama */}
      <div className="relative min-h-screen max-w-6xl mx-auto px-6 sm:px-10 lg:px-[94px] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-xs tracking-wider uppercase font-medium text-white/85 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FFE34F] animate-pulse"></span>
            Welcome to
          </div>

          <h1
            className="mt-2 font-semibold tracking-tight leading-[1.05]"
            style={{ fontSize: 'clamp(2.6rem, 7vw, 5.5rem)' }}
          >
            {CONFIG.name}
          </h1>

          {/* kata yang diketik */}
          <div className="mt-4">
            <span
              className="inline-flex items-center rounded-lg bg-[#FFE34F] px-4 py-1 text-[#070D20] font-editorial italic font-bold shadow-md"
              style={{ fontSize: 'clamp(2rem, 5.2vw, 4rem)', lineHeight: 1.15 }}
            >
              <span className="min-w-[0.5ch]">{typed}</span>
              <span className="ml-1 inline-block w-[3px] h-[0.85em] bg-[#070D20] animate-pulse" aria-hidden="true" />
            </span>
          </div>

          <p className="mt-6 text-base sm:text-lg font-light text-white/85 max-w-xl leading-relaxed">{CONFIG.tagline}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFE34F] text-[#070D20] text-sm font-semibold shadow-lg hover:shadow-xl hover:bg-white transition-all duration-200 hover:-translate-y-0.5"
            >
              Explore my works <FaArrowRight size={12} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-full border border-white/40 text-white text-sm font-semibold transition-all duration-200 hover:bg-white/15 hover:border-white"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Folder: Contact Me & CV */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute bottom-8 left-6 sm:left-auto sm:right-10 lg:right-[94px] flex flex-wrap gap-3 z-20"
      >
        <FolderChip href="#contact" label="Contact Me" />
        <FolderChip href={CONFIG.cvUrl} label="CV" external />
      </motion.div>
    </section>
  );
}
