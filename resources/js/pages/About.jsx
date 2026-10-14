import React, { useState, useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";
import { motion, useDragControls } from "framer-motion"; import RunningLogos from "../components/RunningLogos";

/* ─── Ikon SVG untuk Folder & Explore ─── */
const FolderIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FFE34F" strokeWidth="1" style={{ filter: 'drop-shadow(0px 3px 6px rgba(0,0,0,0.4))' }}>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" fill="#FFE34F" fillOpacity="0.85"></path>
  </svg>
);

const InternetExplorerIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.3))' }}>
    {/* Simple representation of a blue 'e' like Internet Explorer */}
    <circle cx="12" cy="12" r="10" fill="#3b82f6" />
    <path d="M7 12h10c0-4-3-6-5-6s-5 2-5 6z" fill="#ffffff" />
    <path d="M6 10a8 8 0 0 0 12 0" stroke="#fef08a" strokeWidth="1.5" fill="none" />
  </svg>
);

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  const dragControls = useDragControls();

  // Animasi melayang ringan untuk widget Notes
  const floatAnimation = {
    y: [0, -8, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setIsVisible(true); }),
      { threshold: 0.15 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => { if (aboutRef.current) observer.unobserve(aboutRef.current); };
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative flex flex-col font-sans min-h-screen bg-black"
    >
      {/* ── BACKGROUND IMAGE FULL (FOTO FESTIVAL INDONESIA) ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/foto/festival-indonesia.jpg')", // Ganti dengan path foto festival besar Anda
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay gradient gelap ke atas/bawah agar teks/folder tetap terbaca (opsional) */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* ── MAIN CONTENT AREA (Desktop Interface) ── */}
      <div className="relative z-10 flex-grow flex flex-col justify-between p-6 sm:p-10 w-full max-w-[1400px] mx-auto">

        {/* Area Atas - Kumpulan Folder / Thumbnail di sebelah kiri */}
        <div className="flex flex-col gap-6 w-[220px]">

          {/* Baris 1: Certification Dump & ACN */}
          <div className="flex gap-4 items-end">
            <a href="#certification" className="flex flex-col items-center gap-1 cursor-pointer hover:scale-105 transition-transform">
              <FolderIcon />
              <span className="text-white text-xs font-semibold drop-shadow-md text-center leading-tight">
                certification<br />dump
              </span>
            </a>

            <a href="#internship" className="flex flex-col items-center gap-1 cursor-pointer">
              <div className="relative w-[50px] h-[35px]">
                <motion.div
                  whileHover={{
                    scale: 2.5,
                    y: -15,
                    zIndex: 50,
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute inset-0 bg-gray-200 border border-white/50 rounded overflow-hidden shadow-md"
                >
                  <img
                    src="/assets/foto/ACN.jpeg"
                    alt="ACN"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              <span className="text-white text-xs font-semibold drop-shadow-md">
                Accenture.jpg
              </span>
            </a>
          </div>

          {/* Baris 2: IISMA & Explore */}
          <div className="flex gap-4 items-end">
            <a href="#activities" className="flex flex-col items-center gap-1 cursor-pointer ml-4">
              <div className="relative w-[50px] h-[35px]">
                <motion.div
                  whileHover={{
                    scale: 4,
                    y: -25,
                    zIndex: 50,
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute inset-0 bg-gray-200 border border-white/50 rounded overflow-hidden shadow-md"
                >
                  <img
                    src="/assets/foto/IISMA.jpg"
                    alt="IISMA"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              <span className="text-white text-xs font-semibold drop-shadow-md">
                IISMA.jpg
              </span>
            </a>

            {/* Tombol EXPLORE */}
            <a
              href="#projects"
              className="flex flex-col items-center gap-1 cursor-pointer hover:scale-110 transition-transform ml-2"
            >
              <img
                src="/assets/icon7.png" alt="Explore My Projects"
                className="w-[58px] h-[58px] object-contain"
              />

              <span className="text-white text-xs font-semibold drop-shadow-md">
                Explore My Works
              </span>
            </a>
          </div>

          {/* Baris 3: Internship dump & NGI */}
          <div className="flex gap-4 items-end mt-2">
            <a href="#internship" className="flex flex-col items-center gap-1 cursor-pointer hover:scale-105 transition-transform">
              <FolderIcon />
              <span className="text-white text-xs font-semibold drop-shadow-md text-center leading-tight">
                internship<br />dump
              </span>
            </a>
            <a href="#internship" className="flex flex-col items-center gap-1 cursor-pointer">
              <div className="relative w-[50px] h-[35px]">
                <motion.div
                  whileHover={{
                    scale: 4,
                    y: -25,
                    zIndex: 50,
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute inset-0 bg-gray-200 border border-white/50 rounded overflow-hidden shadow-md"
                >
                  <img
                    src="/assets/foto/NGI.jpeg"
                    alt="NGI"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              <span className="text-white text-xs font-semibold drop-shadow-md">
                NGI.jpg
              </span>
            </a>
          </div>

          {/* Baris 4: GDSC & Activity dump & SXC */}
          <div className="flex gap-4 items-end">
            <a href="#activities" className="flex flex-col items-center gap-1 cursor-pointer">
              <div className="relative w-[60px] h-[40px]">
                <motion.div
                  whileHover={{
                    scale: 4,
                    y: -25,
                    zIndex: 50,
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute inset-0 bg-gray-200 border border-white/50 rounded overflow-hidden shadow-md"
                >
                  <img
                    src="/assets/foto/GDSC.jpg"
                    alt="GDSC"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              <span className="text-white text-xs font-semibold drop-shadow-md">
                GDSC.jpg
              </span>
            </a>
            <a href="#activities" className="flex flex-col items-center gap-1 cursor-pointer hover:scale-105 transition-transform">
              <FolderIcon />
              <span className="text-white text-xs font-semibold drop-shadow-md text-center leading-tight">
                activity<br />dump
              </span>
            </a>
            <a href="#activities" className="flex flex-col items-center gap-1 cursor-pointer mt-[-20px]">
              <div className="relative w-[50px] h-[35px]">
                <motion.div
                  whileHover={{
                    scale: 4,
                    y: -25,
                    zIndex: 50,
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute inset-0 bg-gray-200 border border-white/50 rounded overflow-hidden shadow-md"
                >
                  <img
                    src="/assets/foto/SXC.jpg"
                    alt="SXCs"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              <span className="text-white text-xs font-semibold drop-shadow-md">
                SXCs.jpg
              </span>
            </a>
          </div>

        </div>

        {/* BIO CARD: Personal Diary */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          drag
          dragConstraints={{ left: -300, right: 50, top: 0, bottom: 300 }}
          className="absolute top-[8%] right-[2%] z-30 cursor-grab active:cursor-grabbing"
        >
          <div className="relative bg-[#F5F1E8] border border-[#E8E2D5] rounded-2xl shadow-2xl w-[320px] md:w-[420px] overflow-hidden rotate-[1deg]">

            {/* Diary Header */}
            <div className="flex items-center justify-between px-6 py-3.5 border-b border-[#E8E2D5] bg-[#FFFFFF]/70 backdrop-blur-sm">
              <div>
                <p className="font-mono-tag text-[10px] uppercase tracking-[0.2em] text-[#070D20]/60 font-bold">
                  To whoever is reading,
                </p>
                <p className="font-mono-tag text-[10px] text-[#070D20]/40 mt-0.5">
                  2026 · Semarang
                </p>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFE34F] border border-[#070D20]/20" />
            </div>

            {/* Diary Content */}
            <div className="p-6 md:p-8">

              {/* Greeting */}
              <div className="mb-5">
                <h2 className="font-editorial text-2xl md:text-3xl text-[#070D20] leading-tight">
                  Hi, <ReactTyped
                    strings={[
                      "welcome!",
                      "selamat datang!",
                      "sugeng rawuh!",
                      "ola!",
                      "bienvenue!",
                      "willkommen!",
                      "bem-vindo!",
                      "ようこそ!",
                      "환영합니다!",
                    ]}
                    className="italic text-[#070D20]"
                    typeSpeed={65}
                    backSpeed={35}
                    backDelay={1800}
                    loop
                    showCursor
                    cursorChar="✦"
                  />
                </h2>
              </div>

              {/* Introduction */}
              <div className="space-y-4">

                <p className="font-editorial text-sm md:text-base text-[#141B2D]/85 leading-relaxed">
                  I'm <strong className="font-bold text-[#070D20]">Salwa</strong>,
                  an Applied Bachelor graduate in Computer Engineering Technology from Politeknik Negeri Semarang (Awarded Best Graduate, Cum Laude, GPA 3.96/4.0).
                </p>

                <p className="font-editorial text-sm md:text-base text-[#141B2D]/85 leading-relaxed">
                  I uncover stories in
                  <span className="relative inline-block mx-1 px-1.5">
                    <span className="absolute inset-x-0 bottom-1 h-3 bg-[#FFE34F]/80 -rotate-1 rounded-sm"></span>
                    <strong className="relative text-[#070D20]">data</strong>
                  </span>
                  , engineer solutions in
                  <span className="relative inline-block mx-1 px-1.5">
                    <span className="absolute inset-x-0 bottom-1 h-3 bg-[#BFE8EC]/80 rotate-1 rounded-sm"></span>
                    <strong className="relative text-[#070D20]">SAP S/4HANA &amp; tech</strong>
                  </span>
                  , and build systems that streamline the
                  <span className="relative inline-block mx-1 px-1.5">
                    <span className="absolute inset-x-0 bottom-1 h-3 bg-[#F6BFD3]/70 -rotate-1 rounded-sm"></span>
                    <strong className="relative text-[#070D20]">business</strong>
                  </span>.
                </p>

              </div>

              {/* Little diary note */}
              <div className="mt-6 pl-4 border-l-2 border-[#FFE34F]">
                <p className="font-editorial italic text-xs md:text-sm text-[#141B2D]/75 leading-relaxed">
                  Former SAP MM Intern at Accenture (Project: Telkomsel), Full Stack Dev Intern at PT NGI, and IISMA Awardee at P.Porto, Portugal.
                </p>
              </div>

              {/* Explore */}
              <div className="mt-7 pt-5 border-t border-dashed border-[#E8E2D5]">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 font-mono-tag text-xs uppercase tracking-wider font-bold text-[#070D20] hover:text-[#070D20]/70 transition-colors group"
                >
                  Open my work
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>

            </div>
          </div>
        </motion.div>

      </div>

      {/* ── RUNNING LOGOS (Tetap dipertahankan di bawah) ──
      <div className="relative z-20 shrink-0 bg-white border-t border-gray-200 overflow-hidden py-3">
        <RunningLogos />
      </div> */}

    </section>
  );
};

export default About;