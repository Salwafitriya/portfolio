import React, { useState, useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
// import RunningLogos from "../components/RunningLogos";

/* ─── Ikon SVG untuk Folder & Explore ─── */
const FolderIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FFE34F"
    strokeWidth="1"
    style={{ filter: "drop-shadow(0px 3px 6px rgba(0,0,0,0.4))" }}
  >
    <path
      d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
      fill="#FFE34F"
      fillOpacity="0.85"
    ></path>
  </svg>
);

/* ─── Thumbnail foto dengan efek zoom saat hover (hanya terasa di desktop) ─── */
const PhotoFile = ({ href, src, alt, label, w = 50, h = 35, scale = 4, y = -25, className = "" }) => (
  <a href={href} className={`flex flex-col items-center gap-1 cursor-pointer ${className}`}>
    <div className="relative" style={{ width: w, height: h }}>
      <motion.div
        whileHover={{ scale, y, zIndex: 50 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="absolute inset-0 bg-gray-200 border border-white/50 rounded overflow-hidden shadow-md"
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </motion.div>
    </div>
    <span className="text-white text-xs font-semibold drop-shadow-md">{label}</span>
  </a>
);

const FolderFile = ({ href, line1, line2 }) => (
  <a
    href={href}
    className="flex flex-col items-center gap-1 cursor-pointer hover:scale-105 transition-transform"
  >
    <FolderIcon />
    <span className="text-white text-xs font-semibold drop-shadow-md text-center leading-tight">
      {line1}
      <br />
      {line2}
    </span>
  </a>
);

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  // Deteksi desktop (>= 768px, sama dengan breakpoint `md:` Tailwind)
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 768 : true
  );

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setIsVisible(true);
        }),
      { threshold: 0.15 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
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
          backgroundImage: "url('/assets/foto/festival-indonesia.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* ── MAIN CONTENT AREA ──
          Mobile  : susunan vertikal (folder → card), halaman bisa di-scroll normal
          Desktop : folder di kiri, card melayang di kanan (absolute + drag) */}
      <div
        className="relative z-10 flex-grow flex flex-col gap-8 w-full max-w-[1400px] mx-auto
                   px-5 pt-24 pb-12
                   sm:px-8
                   md:p-10 md:justify-between"
      >
        {/* ── Area Folder / Thumbnail ── */}
        <div className="flex flex-col gap-4 md:gap-6 w-full max-w-[260px] mx-auto md:mx-0 md:w-[220px]">
          {/* Baris 1: Certification dump & Accenture */}
          <div className="flex gap-4 items-end">
            <FolderFile href="#certification" line1="certification" line2="dump" />
            <PhotoFile
              href="#internship"
              src="/assets/foto/ACN.jpeg"
              alt="ACN"
              label="Accenture.jpg"
              scale={2.5}
              y={-15}
            />
          </div>

          {/* Baris 2: IISMA & Explore */}
          <div className="flex gap-4 items-end">
            <PhotoFile
              href="#activities"
              src="/assets/foto/IISMA.jpg"
              alt="IISMA"
              label="IISMA.jpg"
              className="ml-4"
            />

            <a
              href="#projects"
              className="flex flex-col items-center gap-1 cursor-pointer hover:scale-110 transition-transform ml-2"
            >
              <img
                src="/assets/icon7.png"
                alt="Explore My Projects"
                className="w-[58px] h-[58px] object-contain"
              />
              <span className="text-white text-xs font-semibold drop-shadow-md">
                Explore My Works
              </span>
            </a>
          </div>

          {/* Baris 3: Internship dump & NGI */}
          <div className="flex gap-4 items-end mt-2">
            <FolderFile href="#internship" line1="Experiences" line2="dump" />
            <PhotoFile
              href="#internship"
              src="/assets/foto/NGI.jpeg"
              alt="NGI"
              label="NGI.jpg"
            />
          </div>

          {/* Baris 4: GDSC & Activity dump & SXC */}
          <div className="flex gap-4 items-end">
            <PhotoFile
              href="#activities"
              src="/assets/foto/GDSC.jpg"
              alt="GDSC"
              label="GDSC.jpg"
              w={60}
              h={40}
            />
            <FolderFile href="#activities" line1="activity" line2="dump" />
            <PhotoFile
              href="#activities"
              src="/assets/foto/SXC.jpg"
              alt="SXCs"
              label="SXCs.jpg"
              className="mt-[-20px]"
            />
          </div>
        </div>

        {/* ── BIO CARD: Personal Diary ──
            Mobile  : relative (ikut alur halaman, di bawah folder), drag mati
            Desktop : absolute di kanan atas, bisa di-drag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          drag={isDesktop}
          dragConstraints={{ left: -300, right: 50, top: 0, bottom: 300 }}
          className="relative z-30 w-full flex justify-center
                     md:absolute md:top-[8%] md:right-[2%] md:w-auto md:justify-start
                     md:cursor-grab md:active:cursor-grabbing"
        >
          <div
            className="relative bg-[#F5F1E8] border border-[#E8E2D5] rounded-2xl shadow-2xl
                       w-full max-w-[380px] md:w-[420px] md:max-w-none
                       overflow-hidden md:rotate-[1deg]"
          >
            {/* Diary Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-[#E8E2D5] bg-[#FFFFFF]/70 backdrop-blur-sm">
              <div>
                <p className="font-mono-tag text-[10px] text-[#070D20]/40 mt-0.5">
                  2026 · Semarang
                </p>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFE34F] border border-[#070D20]/20" />
            </div>

            {/* Diary Content */}
            <div className="p-5 sm:p-6 md:p-8">
              {/* Greeting */}
              <div className="mb-5">
                <h2 className="font-editorial text-2xl md:text-3xl text-[#070D20] leading-tight">
                  Hi,{" "}
                  <ReactTyped
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
              <div className="space-y-3">
                <p className="font-editorial text-sm md:text-base text-[#141B2D]/85 leading-relaxed">
                  I'm <strong className="font-bold text-[#070D20]">Salwa</strong>, a
                  Computer Engineering Technology graduate who enjoys connecting
                  technology with business needs.
                </p>

                <p className="font-editorial text-sm md:text-base text-[#141B2D]/85 leading-relaxed">
                  From uncovering insights in
                  <span className="relative inline-block mx-1 px-1.5">
                    <span className="absolute inset-x-0 bottom-1 h-3 bg-[#FFE34F]/80 -rotate-1 rounded-sm"></span>
                    <strong className="relative text-[#070D20]">data</strong>
                  </span>
                  to building
                  <span className="relative inline-block mx-1 px-1.5">
                    <span className="absolute inset-x-0 bottom-1 h-3 bg-[#BFE8EC]/80 rotate-1 rounded-sm"></span>
                    <strong className="relative text-[#070D20]">digital systems</strong>
                  </span>
                  , I bring together engineering skills and business understanding to
                  turn problems into practical solutions.
                </p>
              </div>

              {/* Little Diary Note */}
              <div className="mt-6 pl-4 border-l-2 border-[#FFE34F]">
                <p className="font-editorial italic text-sm md:text-base text-[#141B2D]/85 leading-relaxed">
                  Engineering mindset. Business perspective. Data-driven solutions.
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

      {/* ── RUNNING LOGOS (opsional, dinonaktifkan) ──
      <div className="relative z-20 shrink-0 bg-white border-t border-gray-200 overflow-hidden py-3">
        <RunningLogos />
      </div> */}
    </section>
  );
};

export default About;