import React from "react";
import { motion } from "framer-motion";
import {
  SiFlutter,
  SiLaravel,
  SiReact,
  SiTailwindcss,
  SiDocker,
  SiMysql,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiFigma,
} from "react-icons/si";

const logos = [
  { icon: <SiFlutter />, name: "Flutter" },
  { icon: <SiLaravel />, name: "Laravel" },
  { icon: <SiReact />, name: "React" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  // { icon: <SiDocker />, name: "Docker" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiPython />, name: "Python"},
  { icon: <SiHtml5 />, name: "HTML"},
  { icon: <SiCss3/>, name: "CSS"},
  { icon: <SiFigma/>, name: "Figma"},
];

const RunningLogos = () => {
  const fullList = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden py-3">
      <motion.div
        className="flex gap-8 text-2xl text-slate-400 whitespace-nowrap w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "linear",
        }}
      >
        {fullList.map((logo, index) => (
          <div
            key={index}
            className="flex items-center gap-1.5 px-3 hover:text-slate-700 hover:scale-110 transition-all duration-300"
            title={logo.name}
          >
            {logo.icon}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default RunningLogos;