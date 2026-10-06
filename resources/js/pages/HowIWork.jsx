import React from 'react';

const HowIWork = () => {
  return (
    <section id="how-i-work" className="py-32 bg-transparent text-slate-900 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-indigo-600 font-mono tracking-widest uppercase mb-8 text-sm">03 // How I Work</p>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-16">
          Data &times; Systems &times; Business
        </h2>
        <div className="grid md:grid-cols-3 gap-12 border-t border-slate-200 pt-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Data</h3>
            <p className="text-slate-600 font-light leading-relaxed">Extracting insights and patterns from complex datasets to drive informed decisions and strategy.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Systems</h3>
            <p className="text-slate-600 font-light leading-relaxed">Architecting scalable and efficient solutions that form the reliable backbone of applications.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Business</h3>
            <p className="text-slate-600 font-light leading-relaxed">Aligning technical implementations with core business objectives to deliver measurable value.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
