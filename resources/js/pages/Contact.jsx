import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope, FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp,
  FaArrowRight, FaArrowUp, FaCopy, FaCheck,
} from 'react-icons/fa';

/* ─── Atur data kontak di sini (kosongkan untuk menyembunyikan) ─── */
const CONFIG = {
  name: 'Salwa Fitriya',
  email: 'salwafitriyatunnisa@gmail.com',
  socials: [
    { label: 'LinkedIn', handle: 'linkedin.com/in/salwafitriyatunnisa', href: 'https://www.linkedin.com/in/salwafitriyatunnisa/', icon: FaLinkedinIn },
    { label: 'GitHub', handle: 'github.com/Salwafitriya', href: 'https://github.com/Salwafitriya/', icon: FaGithub },
    { label: 'Instagram', handle: '@salwafitriya', href: 'https://instagram.com/salwafitriya', icon: FaInstagram },
    { label: 'WhatsApp', handle: '+62 811 2799 279', href: 'https://wa.me/628112799279', icon: FaWhatsapp },
  ],
};

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONFIG.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard tidak tersedia, abaikan */
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#070D20] text-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Cahaya aksen lembut senada dengan Hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 60% at 85% 10%, rgba(255,227,79,.10) 0%, transparent 65%), radial-gradient(40% 40% at 10% 90%, rgba(191,232,236,.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-[94px] pt-24 pb-12">
        {/* ── Heading ── */}
        <motion.div {...fade} transition={{ duration: 0.5 }}>
          <h2
            className="mt-2 font-editorial font-bold tracking-tight max-w-3xl leading-[1.05]"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
          >
            Let&apos;s build something{' '}
            <span className="inline-block rounded-lg bg-[#FFE34F] px-3.5 py-0.5 text-[#070D20] italic font-bold align-baseline shadow-md">
              together
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-base sm:text-lg font-light text-white/75 leading-relaxed">
            Open to professional opportunities, project collaborations, and conversations around enterprise systems, data analytics, and software development.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${CONFIG.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFE34F] text-[#070D20] text-sm font-semibold shadow-lg hover:shadow-xl hover:bg-white transition-all duration-200 hover:-translate-y-0.5"
            >
              <FaEnvelope size={14} /> Say hello <FaArrowRight size={12} />
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-3 pl-5 pr-4 py-3 rounded-full border border-white/30 text-sm font-medium text-white hover:bg-white/15 transition-colors"
              aria-label="Salin email"
            >
              {CONFIG.email}
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                {copied ? <FaCheck size={11} className="text-[#FFE34F]" /> : <FaCopy size={11} />}
              </span>
            </button>
          </div>
          <p className="mt-3 h-4 text-xs font-mono-tag text-[#FFE34F]" aria-live="polite">
            {copied ? '✓ Email disalin ke clipboard' : ''}
          </p>
        </motion.div>

        {/* ── Kartu sosial ── */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CONFIG.socials.map(({ label, handle, href, icon: Icon }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              {...fade}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group flex items-center gap-4 p-5 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-[#FFE34F]/40 transition-all duration-200"
            >
              <span className="w-11 h-11 shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-[#FFE34F] group-hover:text-[#070D20] transition-colors">
                <Icon size={18} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-white">{label}</span>
                <span className="block text-xs sm:text-sm text-white/55 truncate">{handle}</span>
              </span>
              <FaArrowRight
                size={13}
                className="text-white/40 transition-transform duration-300 -rotate-45 group-hover:rotate-0 group-hover:text-[#FFE34F]"
              />
            </motion.a>
          ))}
        </div>

        {/* ── Footer ── */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-white/50 font-mono-tag">
          <p>© {new Date().getFullYear()} {CONFIG.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#home" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              Back to top
              <span className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center">
                <FaArrowUp size={10} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
