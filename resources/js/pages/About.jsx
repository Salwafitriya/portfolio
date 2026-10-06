import React, { useState, useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";
import { motion, useDragControls } from "framer-motion"; import RunningLogos from "../components/RunningLogos";

/* ─── Ikon SVG untuk Folder & Explore ─── */
const FolderIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#72b8f8" strokeWidth="1" style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.3))' }}>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" fill="#90caf9"></path>
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
        <div className="flex flex-col gap-6 w-[200px]">

          {/* Baris 1 */}
          <div className="flex gap-4 items-end">
            <div className="flex flex-col items-center gap-1 cursor-pointer hover:scale-105 transition-transform">
              <FolderIcon />
              <span className="text-white text-xs font-semibold drop-shadow-md text-center leading-tight">
                certification<br />dump
              </span>
            </div>

            <div className="flex flex-col items-center gap-1 cursor-pointer">
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
                ACN.jpg
              </span>
            </div>
          </div>

          {/* Baris 2 */}
          <div className="flex gap-4 items-end">
            <div className="flex flex-col items-center gap-1 cursor-pointer ml-4">
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
            </div>

            {/* Tombol EXPLORE
            <a href="#projects" className="flex flex-col items-center gap-1 cursor-pointer hover:scale-110 transition-transform ml-2">
              <InternetExplorerIcon />
              <span className="text-white text-xs font-semibold drop-shadow-md">Explore My Works</span>
            </a> */}
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

          {/* Baris 3 */}
          <div className="flex gap-4 items-end mt-4">
            <div className="flex flex-col items-center gap-1 cursor-pointer hover:scale-105 transition-transform">
              <FolderIcon />
              <span className="text-white text-xs font-semibold drop-shadow-md text-center leading-tight">
                competition<br />dump
              </span>
            </div>
            <div className="flex flex-col items-center gap-1 cursor-pointer">
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
            </div>
          </div>

          {/* Baris 4 */}
          <div className="flex gap-4 items-end">
            <div className="flex flex-col items-center gap-1 cursor-pointer">
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
            </div>
            <div className="flex flex-col items-center gap-1 cursor-pointer hover:scale-105 transition-transform">
              <FolderIcon />
              <span className="text-white text-xs font-semibold drop-shadow-md text-center leading-tight">
                activity dump
              </span>
            </div>
            <div className="flex flex-col items-center gap-1 cursor-pointer mt-[-20px]">
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
            </div>
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
          <div className="relative bg-[#fffdf5] border border-[#eadfca] rounded-lg shadow-2xl w-[320px] md:w-[420px] overflow-hidden rotate-[1deg]">

            {/* Diary Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-[#eadfca]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#a8997d] font-semibold">
                  To whoever is reading,
                </p>
                <p className="text-[10px] text-[#b5a890] mt-0.5">
                  2026 · Semarang
                </p>
              </div>

              <span className="text-lg text-[#d8a85c] rotate-[-8deg]">
                ✦
              </span>
            </div>

            {/* Diary Content */}
            <div className="p-6 md:p-8">

              {/* Greeting */}
              <div className="mb-5">
                <h2 className="font-serif text-2xl md:text-3xl text-[#29251f] leading-tight">
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
                    className="italic" style={{ color: "#cc3a74ff" }}
                    typeSpeed={65}
                    backSpeed={35}
                    backDelay={1800}
                    loop
                    showCursor
                    cursorChar="♡"
                  />
                  <span className="text-[#d89b3d]"> </span>
                </h2>
              </div>

              {/* Introduction */}
              <div className="space-y-4">

                <p className="font-serif text-sm md:text-base text-[#514a40] leading-relaxed">
                  I'm <strong className="font-semibold text-[#29251f]">Salwa</strong>,
                  a curious mind who enjoys turning ideas into something real.
                </p>

                <p className="font-serif text-sm md:text-base text-[#514a40] leading-relaxed">
                  I uncover stories in
                  <span className="relative inline-block mx-1 px-1">
                    <span className="absolute inset-x-0 bottom-1 h-3 bg-[#f6df75]/70 -rotate-1"></span>
                    <strong className="relative text-[#29251f]">data</strong>
                  </span>
                  , explore possibilities through
                  <span className="relative inline-block mx-1 px-1">
                    <span className="absolute inset-x-0 bottom-1 h-3 bg-[#b9e4b0]/70 rotate-1"></span>
                    <strong className="relative text-[#29251f]">technology</strong>
                  </span>
                  , and build solutions that make sense for the
                  <span className="relative inline-block mx-1 px-1">
                    <span className="absolute inset-x-0 bottom-1 h-3 bg-[#f5c6c6]/70 -rotate-1"></span>
                    <strong className="relative text-[#29251f]">business</strong>
                  </span>.
                </p>

              </div>

              {/* Little diary note */}
              <div className="mt-6 pl-4 border-l-2 border-[#e8c76a]">
                <p className="font-serif italic text-sm text-[#786d5d] leading-relaxed">
                  Thank you for stopping by. Here are some things I've made, learned, and loved along the way.                </p>
              </div>

              {/* Explore */}
              <div className="mt-7 pt-5 border-t border-dashed border-[#ded3bd]">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 font-serif text-sm font-semibold text-[#8c6b2f] hover:text-[#5f481e] transition-colors group"
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