import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import RunningLogos from "../components/RunningLogos";


const SkillsSection = () => {
  const skills = [
    {
      title: "Data Analyst",
      description: "Experienced work with data using Python and SQL. Currently learning about AI and Machine Learning.",
      icon: "📊",
      // color: "from-stone-300 to-stone-400",
      textColor: "text-stone-600"
    },
    {
      title: "Mobile Dev",
      description: "Experienced in developing mobile apps and cross-platform solutions using the Flutter framework.",
      icon: "📱",
      // color: "from-amber-300 to-amber-400",
      textColor: "text-amber-600"
    },
    {
      title: "Frontend Dev",
      description: "Passionate about implementing UI/UX in code. Over 3 years of development experience in HTML, CSS, JS, React, Bootstrap, and Tailwind.",
      icon: "💻",
      // color: "from-slate-300 to-slate-400",
      textColor: "text-slate-600"
    }
  ];

  return (
    <section
      id="skill"
      className="min-h-screen bg-gradient-to-t from-[#F4F2DD]/4 via-[#F4F2DD] to-[#2f2f2] py-16 px-6 sm:px-8 lg:px-12 xl:px-16 relative"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3B3128] mb-12">
          My Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <TiltCard key={index} skill={skill} />
          ))}
        </div>
      </div>
      <RunningLogos/>
    </section>
  );
};

const ROTATION_RANGE = 15;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard = ({ skill }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className={`relative h-64 w-full rounded-xl bg-gradient-to-br ${skill.color} shadow-lg`}
    >
      <div
        style={{
          transform: "translateZ(40px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 flex flex-col items-center justify-center rounded-xl bg-white/90 p-6"
      >
        {/* Icon */}
        <div 
          style={{ transform: "translateZ(50px)" }}
          className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-4"
        >
          <span className="text-2xl">{skill.icon}</span>
        </div>
        
        {/* Title */}
        <h3 
          style={{ transform: "translateZ(30px)" }}
          className={`text-lg font-bold text-center mb-2 ${skill.textColor}`}
        >
          {skill.title}
        </h3>
        
        {/* Description */}
        <p 
          style={{ transform: "translateZ(20px)" }}
          className="text-sm text-center text-gray-700"
        >
          {skill.description}
        </p>
      </div>
    </motion.div>
  );
};

export default SkillsSection;