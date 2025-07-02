import React from 'react';
import { motion } from 'framer-motion';

const Flower = () => {
  return (
    <motion.div
      className="absolute w-10 h-10 rounded-full bg-pink-300 shadow-lg"
      style={{
        top: '200px',
        left: '100px',
      }}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        rotate: [0, 10, -10, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Bikin kelopak */}
      <div className="relative w-full h-full flex items-center justify-center">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-10 h-15 bg-pink-400 rounded-full"
            style={{
              transform: `rotate(${i * 72}deg) translateY(-10px)`
            }}
          />
        ))}
        {/* Tengah bunga */}
        <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full z-10" />
      </div>
    </motion.div>
  );
};

export default Flower;