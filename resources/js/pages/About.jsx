import React, { useState, useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";
import { FaHtml5, FaCss3Alt, FaLaravel, FaBootstrap, FaJsSquare, FaReact, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiFlutter } from "react-icons/si";
import { motion } from "framer-motion";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  const bubbleVariants = {
    float1: {
      opacity: 1,
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    float2: {
      opacity: 1,
      y: [0, -20, 0],
      x: [0, 10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    float3: {
      opacity: 1,
      y: [0, -10, 0],
      x: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    float4: {
      opacity: 1,
      y: [0, -30, 0],
      x: [0, -10, 0],
      transition: {
        duration:7,
        repeat: Infinity,
        ease: "easeInOut"
      }

    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="min-h-screen bg-gradient-to-b from-[#Fffff] to-[#F4F2DD]/2 py-16 px-6 sm:px-8 lg:px-12 xl:px-16 relative"
    >
      <div className="max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        {/* Konten di kiri */}
        <div className="flex-1 order-2 md:order-1">
          {isVisible && (
            <h3 className="text-[36px] sm:text-3xl md:text-4xl font-bold text-[#E7BB2C] mb-6">
              <ReactTyped
                strings={["Who is Salwa Fitriyatunnisa?"]}
                typeSpeed={60}
                backSpeed={40}
                showCursor={false}
              />
            </h3>
          )}
          
          <p className="text-[24px] text-black-800 mb-8 leading-relaxed font-poppins font-normal">            
            I am a Computer Engineering student from Politeknik Negeri Semarang (2022). My curiosity in technology started with simple websites, 
            and now I'm diving deep into <span className="text-[#97B9B5] font-medium"> web and mobile development, UI/UX design, AI, 
            and project management.</span> Right now, I'm sharpening my skills to become a Fullstack Web Developer who can build, design, and lead impactful projects.
          </p>
       
          <h2 className="text-[24px] text-[#B7C098] mb-2 font-poppins font-bold">Language</h2>
          <ul className="text-[20px] list-disc pl-5 mb-6 text-[#B7C098] space-y-2 font-poppins font-semibold">
            <li>Bahasa Indonesia</li>
            <li>English (82)</li>
          </ul>

          <div className="flex flex-wrap gap-4">
            <a
              href="/Salwa-CV.pdf"
              download
              className="inline-block bg-[#B7C098] hover:bg-[#a3af8a] text-[#3B3128] px-6 py-3 rounded-full font-semibold transition text-lg"
            >
              Download CV
            </a>
         
            <a
              href="/Salwa-CV.pdf"
              download
              className="inline-block bg-[#B7C098] hover:bg-[#a3af8a] text-[#3B3128] px-6 py-3 rounded-full font-semibold transition text-lg"
            >
              LinkedIn Page
            </a>
          </div>
        </div>

        {/* Foto di kanan */}
        <div className="w-full md:w-2/5 lg:w-1/3 order-1 md:order-2 relative">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img 
              src="/assets/image.png" 
              alt="Salwa Fitriyatunnisa"
              className="w-[520px] h-[580px]"
            />

            {/* Bubble Chat 1 */}
            <motion.div
              initial={{ opacity: 0 }}
              variants={bubbleVariants}
              animate="float1"
              className="absolute -top-1 left-1 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg text-sm font-medium whitespace-nowrap"
            >
              Hello, it's me Salwa

            </motion.div>
                <motion.div
                initial={{ opacity: 0 }}
                variants={bubbleVariants}
                animate="float2"
                className="absolute -right-1 top-1/4 bg-[#F4F2DD]/90 text-black px-4 py-2 rounded-full shadow-lg text-sm font-medium whitespace-nowrap"
              >
                Love to study, travel, and code ✨
              </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  variants={bubbleVariants}
                  animate="float3"
                  className="absolute left bottom-1/4 bg-[#C5E1E4]/90 text-[#3B3128] px-4 py-2 rounded-full shadow-lg text-sm font-medium whitespace-nowrap"
                >
                  Let's make impact together!
                </motion.div>

                {/* Bubble Chat 4 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  variants={bubbleVariants}
                  animate="float4"
                  className="absolute -bottom-2 left-1/4 bg-[#B7C098] backdrop-blur-sm px-4 py-2 rounded-full shadow-lg text-sm font-medium"
                  >
                  ☕️+🎵 is my perfect combo
                </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;