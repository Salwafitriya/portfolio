import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import certifications from '../data/certificationsData';
import PhotoLightbox from '../components/PhotoLightbox';
import { PlayfulStyles, Sparkle, Cube, Tape, FilterBar } from '../components/Playful';

const TILT = [-1.6, 1.2, -0.8, 1.8, -1.2, 0.9];

function Certification() {
    const navigate = useNavigate();
    const [filter, setFilter] = useState('All');
    const [active, setActive] = useState(null);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    const categories = useMemo(
        () => ['All', ...Array.from(new Set(certifications.map((c) => c.category).filter(Boolean)))],
        []
    );
    const visible = filter === 'All' ? certifications : certifications.filter((c) => c.category === filter);

    const lightboxItems = visible.map((c) => ({
        image: c.image,
        title: c.title,
        caption: [c.issuer, c.date].filter(Boolean).join(' · '),
    }));

    return (
        <div id="certification" className="min-h-screen pl-grid text-[#111] overflow-x-hidden" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <PlayfulStyles />

            {/* ── Header ── */}
            <header className="pl-hero relative overflow-hidden border-b border-[#E8E2D5]">
                <Cube className="absolute top-8 left-[6%] opacity-60 pl-float" size={76} />
                <Sparkle className="absolute top-16 right-[24%] pl-float" size={24} color="#FFE34F" />

                <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-[94px] pt-12 pb-14 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55 }}
                        className="mt-8 relative"
                    >


                        <h1
                            className="mt-4 font-editorial text-[#070D20] font-bold tracking-tight leading-[1.05] max-w-3xl mx-auto"
                            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
                        >
                            Certifi<span className="italic font-normal">cations</span>
                        </h1>
                    </motion.div>

                    <div className="mt-8 flex justify-center">
                        <FilterBar categories={categories} value={filter} onChange={setFilter} />
                    </div>
                </div>
            </header>

            {/* ── Sheets ── */}
            <main className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-[94px] pb-28">
                {visible.length === 0 ? (
                    <p className="pl-mono text-center py-20 text-[#60687E]">Belum ada sertifikat.</p>
                ) : (
                    <div key={filter} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {visible.map((c, i) => {
                            const tilt = TILT[i % TILT.length];
                            return (
                                <motion.article
                                    key={c.id}
                                    initial={{ opacity: 0, y: 24, rotate: 0 }}
                                    whileInView={{ opacity: 1, y: 0, rotate: tilt * 0.6 }}
                                    whileHover={{ rotate: 0, y: -4, zIndex: 10 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                    transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
                                    className="relative rounded-2xl p-4 flex flex-col bg-white border border-[#E8E2D5] shadow-sm hover:shadow-lg transition-all"
                                >
                                    <Tape className="-top-2 left-1/2 -translate-x-1/2 -rotate-2" />

                                    <div className="rounded-xl p-2.5 flex flex-col gap-3 flex-1 bg-[#F5F1E8]/50 border border-[#E8E2D5]/70">
                                        <button
                                            type="button"
                                            onClick={() => setActive(i)}
                                            className="relative block aspect-[4/3] overflow-hidden rounded-lg bg-white p-1.5 shadow-sm cursor-zoom-in"
                                            aria-label={`Perbesar ${c.title}`}
                                        >
                                            <img
                                                src={c.image}
                                                alt={c.title}
                                                loading="lazy"
                                                className="w-full h-full object-cover rounded"
                                            />
                                            {c.category && (
                                                <span className="absolute top-3 left-3 font-mono-tag text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#070D20] text-[#FFE34F]">
                                                    {c.category}
                                                </span>
                                            )}
                                        </button>

                                        <div className="px-1 flex flex-col justify-between flex-1">
                                            <div>
                                                <h3 className="font-editorial font-bold text-base sm:text-lg text-[#070D20] leading-snug">{c.title}</h3>
                                                <p className="pl-mono text-[11px] mt-1 text-[#60687E]">
                                                    {[c.issuer, c.date].filter(Boolean).join(' · ')}
                                                </p>
                                            </div>

                                            {c.credentialUrl && (
                                                <div className="mt-4 pt-3 border-t border-[#E8E2D5]">
                                                    <a
                                                        href={c.credentialUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="pl-mono inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#070D20] hover:text-[#070D20]/60 transition-colors"
                                                    >
                                                        Lihat kredensial <FaExternalLinkAlt size={10} />
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                )}
            </main>

            <PhotoLightbox items={lightboxItems} index={active} onClose={() => setActive(null)} onChange={setActive} />
        </div>
    );
}

export default Certification;
