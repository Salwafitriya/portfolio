import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-[#fafafa] px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-indigo-600 font-mono tracking-widest uppercase mb-12 text-sm">04 // Experience</p>
        <div className="space-y-16 border-l-2 border-slate-200 pl-8 ml-2">
          
          <div className="relative group">
            <div className="absolute w-5 h-5 bg-indigo-600 rounded-full -left-[42px] top-1.5 border-4 border-[#fafafa] group-hover:scale-125 transition-transform"></div>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Accenture</h3>
            <p className="text-indigo-600 font-mono text-sm mb-4">Position / Year</p>
            <p className="text-slate-600 font-light text-lg max-w-2xl leading-relaxed">
              Drove impactful solutions and learned world-class consulting practices to bridge the gap between technology and business needs.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute w-5 h-5 bg-slate-300 rounded-full -left-[42px] top-1.5 border-4 border-[#fafafa] group-hover:bg-indigo-400 group-hover:scale-125 transition-all"></div>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Phapros</h3>
            <p className="text-indigo-600 font-mono text-sm mb-4">Position / Year</p>
            <p className="text-slate-600 font-light text-lg max-w-2xl leading-relaxed">
              Gained hands-on experience in corporate IT operations, analyzing systems and ensuring smooth technological workflows.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute w-5 h-5 bg-slate-300 rounded-full -left-[42px] top-1.5 border-4 border-[#fafafa] group-hover:bg-indigo-400 group-hover:scale-125 transition-all"></div>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-2">IISMA</h3>
            <p className="text-indigo-600 font-mono text-sm mb-4">Awardee / Year</p>
            <p className="text-slate-600 font-light text-lg max-w-2xl leading-relaxed">
              Expanded global perspective through international study, exchanging ideas, and building cross-cultural networks.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
