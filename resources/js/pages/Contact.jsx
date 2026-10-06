import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-transparent text-slate-900 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-12">
          Let's work together.
        </h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-xl md:text-2xl font-light">
          <a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">LinkedIn</a>
          <a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">GitHub</a>
          <a href="mailto:email@example.com" className="text-slate-600 hover:text-indigo-600 transition-colors">Email</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
