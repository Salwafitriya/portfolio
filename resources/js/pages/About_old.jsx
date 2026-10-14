import React, { useState, useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import RunningLogos from "../components/RunningLogos";

/* ─── Toolkit categories ─────────────────────────────────── */
const toolkit = [
  {
    category: "DATA & ANALYTICS",
    accent: "#6366f1",
    items: ["Python", "SQL", "Power BI", "Pandas", "Scikit-learn", "Machine Learning"],
  },
  {
    category: "SYSTEMS & BUSINESS",
    accent: "#0ea5e9",
    items: ["Business Analysis", "System Analysis", "SAP", "QAD / ERP", "Data Analysis", "Process Understanding"],
  },
  {
    category: "SOFTWARE DEVELOPMENT",
    accent: "#10b981",
    items: ["React", "JavaScript", "Flutter", "Tailwind CSS", "PHP / Laravel", "MySQL / PostgreSQL"],
  },
];

/* ─── Reusable fade-up props ─────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: "easeOut", delay },
});

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  const bubbleVariants = {
    float1: { opacity: 1, y: [0, -10, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } },
    float2: { opacity: 1, y: [0, -14, 0], x: [0, 8, 0], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } },
    float3: { opacity: 1, y: [0, -8, 0], x: [0, -10, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } },
    float4: { opacity: 1, y: [0, -18, 0], x: [0, -6, 0], transition: { duration: 7, repeat: Infinity, ease: "easeInOut" } },
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
      className="bg-[#fafafa] relative overflow-hidden flex flex-col"
    >
      {/* Decorative blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/40 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-8%] w-[28%] h-[35%] rounded-full bg-indigo-100/40 blur-[100px] pointer-events-none" />

      {/* ── MAIN CONTENT ───────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 sm:px-8 lg:px-12 xl:px-16 pt-20 pb-10">

        {/* ── TOP ROW: intro text (left) + photo (right) ───── */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-14 lg:mb-10">

          {/* Left — text */}
          <div className="flex-1 min-w-0 order-2 lg:order-1">

            {/* Heading */}
            <div className="mb-5">
              {isVisible && (
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  <ReactTyped
                    strings={["Get to Know Me!"]}
                    typeSpeed={50}
                    backSpeed={30}
                    showCursor={false}
                  />
                </h2>
              )}
            </div>

            {/* Bio */}
            <p className="text-base md:text-lg text-slate-500 leading-relaxed font-light mb-7 max-w-md">
              I bridge the gap between ideas and action, uncover the story in data, shape possibilities through technology, and create solutions that serve the business.
            </p>

            {/* Languages
            <div className="mb-6">
              <h3 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-2.5">Languages</h3>
              <ul className="flex flex-wrap gap-2">
                <li className="px-3.5 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 font-medium text-sm">
                  Bahasa Indonesia
                </li>
                <li className="px-3.5 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 font-medium text-sm">
                  English (82)
                </li>
              </ul>
            </div> */}

            {/* CTA buttons — smaller */}
            <div className="flex flex-wrap gap-3">
              <a
                href="/Salwa-CV.pdf"
                download
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Download CV
              </a>
              <a
                href="https://www.linkedin.com/in/salwafitriyatunnisa/"
                className="inline-flex items-center justify-center bg-white border border-slate-200 hover:border-slate-800 text-slate-700 hover:text-slate-900 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
              >
                LinkedIn Page
              </a>
            </div>
          </div>

          {/* Right — photo */}
          <div className="order-1 lg:order-2 w-full max-w-[320px] sm:max-w-[360px] lg:w-[340px] lg:flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="relative aspect-[4/5]"
            >
              <div className="w-full h-full rounded-2xl overflow-hiddenl">
                <img
                  src="/assets/image.png"
                  alt="Salwa Fitriyatunnisa"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating bubbles — smaller & tighter */}
              <motion.div initial={{ opacity: 0 }} variants={bubbleVariants} animate="float1"
                className="absolute -top-3 -left-4 bg-white/85 backdrop-blur-md border border-white/60 px-3.5 py-1.5 rounded-xl shadow-lg text-slate-800 text-xs font-semibold whitespace-nowrap">
                👋 Hello, it's me Salwa
              </motion.div>
              <motion.div initial={{ opacity: 0 }} variants={bubbleVariants} animate="float2"
                className="absolute top-1/4 -right-6 bg-indigo-600/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-md text-white text-xs font-semibold whitespace-nowrap">
                Study, travel & code ✨
              </motion.div>
              <motion.div initial={{ opacity: 0 }} variants={bubbleVariants} animate="float3"
                className="absolute bottom-1/3 -left-6 bg-white/90 backdrop-blur-md border border-white/60 px-3.5 py-1.5 rounded-xl shadow-lg text-slate-800 text-xs font-semibold whitespace-nowrap">
                Let's make an impact! 🚀
              </motion.div>
              <motion.div initial={{ opacity: 0 }} variants={bubbleVariants} animate="float4"
                className="absolute -bottom-3 right-3 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-lg text-white text-xs font-semibold">
                ☕️ + 🎵 = ❤️
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ── TOOLKIT BAND ─────────────────────────────────── */}
        <div className="border-t border-slate-200/80">

          {/* Header row */}
          <motion.div
            {...fadeUp(0)}
            className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-1"
          >
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              What I Work With
            </h2>
          </motion.div>

          {/* 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/70">
            {toolkit.map((col, ci) => (
              <motion.div
                key={col.category}
                {...fadeUp(ci * 0.08)}
                className="py-5 md:py-0 md:px-7 first:md:pl-0 last:md:pr-0"
              >
                {/* Category label */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: col.accent }}
                  />
                  <span
                    className="text-[0.65rem] font-bold tracking-[0.2em] uppercase"
                    style={{ color: col.accent }}
                  >
                    {col.category}
                  </span>
                </div>

                {/* Skills — 2-column mini grid */}
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {col.items.map((item, ii) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: ci * 0.06 + ii * 0.04 }}
                      className="group/item flex items-center gap-2 cursor-default select-none"
                    >
                      <span
                        className="h-px flex-shrink-0 transition-all duration-300 w-3 group-hover/item:w-5"
                        style={{ background: col.accent, opacity: 0.5 }}
                      />
                      <span className="text-slate-600 font-medium text-xs transition-colors duration-200 group-hover/item:text-slate-900">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── RUNNING LOGOS — compact strip ────────────────────── */}
      <div className="relative z-10 shrink-0 border-t border-slate-100 bg-white overflow-hidden">
        <RunningLogos />
      </div>
    </section>
  );
};

export default About;
