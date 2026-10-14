import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import projects from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

function Projects() {
    const navigate = useNavigate();
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    const categories = useMemo(
        () => ['All', ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))],
        []
    );
    const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

    // Featured project is the first item in the visible list
    const featuredProject = visible[0];
    const otherProjects = visible.slice(1);

    return (
        <section
            id="projects"
            className="min-h-screen bg-[#F5F1E8] text-[#141B2D]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-[94px] pt-16 pb-24">
                <button
                    onClick={() => navigate('/')}
                    className="inline-flex items-center gap-2 text-xs font-mono-tag uppercase tracking-wider font-bold text-[#60687E] hover:text-[#070D20] transition-colors"
                >
                    <FaArrowLeft size={11} /> Back to Home
                </button>

                {/* Editorial Header */}
                <motion.header
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    className="mt-8 mb-12"
                >
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="font-mono-tag text-xs uppercase tracking-widest font-bold text-[#070D20]/70 bg-[#FFE34F]/80 px-2.5 py-0.5 rounded">
                            Curated Works
                        </span>
                        <span className="text-xs font-mono-tag text-[#60687E]">
                            2023 — 2026
                        </span>
                    </div>

                    <h1
                        className="font-editorial text-[#070D20] font-bold tracking-tight"
                        style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)', lineHeight: 1.08 }}
                    >
                        Selected <span className="italic font-normal">Projects</span>
                    </h1>

                    <p className="mt-4 max-w-2xl text-[#60687E] font-light text-base leading-relaxed">
                        Kumpulan proyek edukasi dan kolaborasi yang saya kerjakan, berfokus pada data analysis,
                        sistem informasi, dan front-end development dengan sentuhan desain fungsional.
                    </p>

                    {/* Filter Bar with Editorial styling */}
                    {categories.length > 2 && (
                        <div className="mt-8 flex flex-wrap gap-2">
                            {categories.map((c) => {
                                const on = c === filter;
                                return (
                                    <button
                                        key={c}
                                        onClick={() => setFilter(c)}
                                        className={`px-4 py-1.5 rounded-full text-xs font-mono-tag tracking-wider font-semibold transition-all duration-200 ${on
                                                ? 'bg-[#070D20] text-[#FFE34F] shadow-sm'
                                                : 'bg-white border border-[#E8E2D5] text-[#141B2D]/70 hover:border-[#070D20]/40'
                                            }`}
                                    >
                                        {c}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </motion.header>

                {/* Editorial Collage Content */}
                {visible.length === 0 ? (
                    <p className="font-mono-tag text-slate-500 py-20 text-center">Belum ada proyek.</p>
                ) : (
                    <div key={filter} className="space-y-10">
                        {/* 1. Featured Big Project */}
                        {featuredProject && (
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.5 }}
                            >
                                <ProjectCard project={featuredProject} isFeatured={true} />
                            </motion.div>
                        )}

                        {/* 2. Structured Asymmetric Collage for Other Projects */}
                        {otherProjects.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                                {otherProjects.map((p, i) => {
                                    // Make 2nd item span 2 columns on medium/large if index matches to create rhythm
                                    const isSpanned = i === 0 && otherProjects.length >= 3;
                                    return (
                                        <motion.div
                                            key={p.slug}
                                            initial={{ opacity: 0, y: 24 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: '-40px' }}
                                            transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                                            className={isSpanned ? 'md:col-span-2 lg:col-span-2' : ''}
                                        >
                                            <ProjectCard project={p} isFeatured={false} />
                                        </motion.div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Projects;
