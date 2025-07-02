import React from 'react';
import clsx from 'clsx';

/**
 * Komponen teks animasi per huruf
 * @param {string} text - Isi teks yang akan dianimasikan
 * @param {boolean} isActive - Apakah animasi aktif atau belum
 */
export const MotionText = ({ text, isActive }) => {
  return (
    <h1 className="text-3xl font-bold md:text-4xl text-center mb-6">
      {text.split('').map((char, index) => (
        <span
          key={index}
          style={{
            "--delay": `${index * 20}ms`,
          }}
          className={clsx(
            {
              "translate-y-8 opacity-0": !isActive,
              "delay-[--delay]": isActive,
            },
            "inline-block whitespace-pre-wrap transition-[transform,opacity] duration-150"
          )}
        >
          {char}
        </span>
      ))}
    </h1>
  );
};
