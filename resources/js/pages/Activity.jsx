import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import activities from '../data/activitiesData';
import PhotoLightbox from '../components/PhotoLightbox';
import { PlayfulStyles, Sparkle, Cube, FilterBar } from '../components/Playful';

const TILT = [-2.5, 1.8, -1.2, 2.4, -1.8, 1.2];

function Activity() {
    const navigate = useNavigate();
    const [filter, setFilter] = useState('All');
    const [active, setActive] = useState(null);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    const categories = useMemo(
        () => ['All', ...Array.from(new Set(activities.map((a) => a.category).filter(Boolean)))],
        []
    );
    const visible = filter === 'All' ? activities : activities.filter((a) => a.category === filter);

    return (
        <div id="activities" className="min-h-screen pl-grid text-[#111] overflow-x-hidden" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <PlayfulStyles />

            {/* ── Header ── */}
            <header className="pl-hero relative overflow-hidden border-b border-[#E8E2D5]">
                <Cube className="absolute top-10 right-[8%] opacity-60 pl-float" size={80} />
                <Sparkle className="absolute top-20 left-[48%] pl-float" size={24} color="#FFE34F" />

                <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-[94px] pt-12 pb-14">

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55 }}
                        className="mt-8 relative"
                    >
                        <div className="inline-flex items-center gap-2">
                            <span className="font-mono-tag text-xs uppercase tracking-widest font-bold text-[#070D20]/75 bg-[#FFE34F] px-2.5 py-0.5 rounded">
                                Photo Dump ✦
                            </span>
                            <span className="text-xs font-mono-tag text-[#60687E]">
                                Campus &amp; Events
                            </span>
                        </div>

                        <h1
                            className="mt-3 font-editorial text-[#070D20] font-bold tracking-tight leading-[1.05]"
                            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
                        >
                            Activities <span className="italic font-normal">&amp; Memories</span>
                        </h1>
                        <p className="mt-3 max-w-xl text-[#60687E] font-light text-base leading-relaxed">
                            A collection of moments from university activities, student organizations, and competitions I've been part of.
                        </p>
                    </motion.div>

                    <div className="mt-8">
                        <FilterBar categories={categories} value={filter} onChange={setFilter} />
                    </div>
                </div>
            </header>

            {/* ── Collage ── */}
            <main className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-[94px] py-14 pb-28">
                {visible.length === 0 ? (
                    <p className="pl-mono text-center py-20 text-[#60687E]">Belum ada foto kegiatan.</p>
                ) : (
                    <div key={filter} className="columns-1 sm:columns-2 lg:columns-3 gap-6">
                        {visible.map((item, i) => {
                            const tilt = TILT[i % TILT.length];
                            return (
                                <motion.button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setActive(i)}
                                    initial={{ opacity: 0, y: 24, rotate: 0 }}
                                    whileInView={{ opacity: 1, y: 0, rotate: tilt * 0.7 }}
                                    whileHover={{ rotate: 0, scale: 1.02, zIndex: 10 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                    transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
                                    className="relative block w-full mb-6 break-inside-avoid rounded-2xl p-3 text-left cursor-zoom-in bg-white border border-[#E8E2D5] shadow-sm hover:shadow-lg transition-all"
                                >
                                    <div className="relative overflow-hidden rounded-xl bg-[#F5F1E8]">
                                        <img src={item.image} alt={item.title} loading="lazy" className="w-full h-auto block" />
                                        {item.category && (
                                            <span className="absolute top-2.5 left-2.5 font-mono-tag text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#070D20] text-[#FFE34F]">
                                                {item.category}
                                            </span>
                                        )}
                                    </div>
                                    <div className="px-1 pt-3 pb-1">
                                        <p className="font-editorial font-bold text-sm sm:text-base text-[#070D20] leading-snug">{item.title}</p>
                                        <p className="pl-mono text-[11px] mt-1 text-[#60687E]">
                                            {[item.date, item.caption].filter(Boolean).join(' · ')}
                                        </p>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>
                )}
            </main>

            <PhotoLightbox items={visible} index={active} onClose={() => setActive(null)} onChange={setActive} />
        </div>
    );
}

export default Activity;
