import React from 'react';

const Journey = () => {
  return (
    <section id="journey" className="py-32 bg-indigo-50 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-12">
        <div className="flex-1">
          <p className="text-indigo-600 font-mono tracking-widest uppercase mb-6 text-sm">06 // Journey</p>
          <h2 className="text-6xl md:text-8xl font-extrabold text-slate-900 tracking-tighter">
            2022 <br/>
            <span className="text-indigo-300">&rarr;</span> 2026
          </h2>
        </div>
        <div className="flex-1">
          <p className="text-slate-700 text-xl md:text-2xl font-light leading-relaxed">
            A continuous path of learning, building, and evolving. From starting as an engineering student to becoming a versatile professional ready to tackle complex challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Journey;
