import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaYoutube, FaExternalLinkAlt, FaFigma, FaArrowLeft, FaTimes } from 'react-icons/fa';
import projects from '../data/projectsData';

/* Tombol link (GitHub, demo, dll) */
const LinkButton = ({ href, icon: Icon, label, color }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        style={{ backgroundColor: color, outlineColor: color }}
    >
        <Icon />
        {label}
    </a>
);

function ProjectDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [preview, setPreview] = useState(null); // foto yang sedang dibuka (lightbox)

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [location.pathname]);

    // Tutup lightbox dengan tombol Esc
    useEffect(() => {
        if (!preview) return;
        const onKey = (e) => e.key === 'Escape' && setPreview(null);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [preview]);

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-white text-slate-900">
                <h2 className="text-3xl font-bold">Project not found</h2>
                <a
                    href="/#projects"
                    className="text-indigo-600 underline underline-offset-4 text-sm font-medium"
                >
                    ← Back to projects
                </a>
            </div>
        );
    }

    const {
        title,
        category,
        longDescription,
        description,
        image,
        banner,
        accent = '#4f46e5',
        tech = [],
        role,
        year,
        links = {},
        documentation = [], // opsional: ['/img/a.png', '/img/b.png', ...] (jumlah bebas)
    } = project;

    const heroImage = banner || image;
    const hasLinks = links.github || links.demo || links.youtube || links.figma;

    return (
        <div className="min-h-screen bg-[#F5F1E8] text-[#141B2D]" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {/* ── Hero ── */}
            <header className="relative w-full h-[260px] sm:h-[320px] overflow-hidden bg-[#FAF7F0] border-b border-[#E8E2D5]">
                {heroImage && (
                    <img
                        src={heroImage}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover scale-105 opacity-25"
                    />
                )}
                {/* kabut lembut memudar ke ivory di bagian bawah */}
                <div className="absolute inset-0 bg-[#F5F1E8]/70" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F5F1E8] to-transparent" />

                {/* Back button on top */}
                <div className="absolute top-6 left-6 z-20">
                    <button
                        onClick={() => navigate(`/#projects`)}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E8E2D5] text-xs font-mono-tag font-bold uppercase tracking-wider text-[#141B2D]/80 hover:text-[#070D20] hover:bg-white shadow-sm transition-all"
                    >
                        <FaArrowLeft className="text-xs" />
                        Back to Projects
                    </button>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative h-full flex flex-col items-center justify-center gap-3 px-6 pb-6 text-center max-w-4xl mx-auto"
                >
                    {category && (
                        <span className="text-xs font-mono-tag font-semibold px-3 py-1 rounded-full bg-[#070D20] text-[#FFE34F]">
                            {category}
                        </span>
                    )}
                    <h1
                        className="font-editorial font-bold text-[#070D20] leading-tight"
                        style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                    >
                        {title}
                    </h1>
                    {year && <p className="text-xs font-mono-tag text-[#60687E]">{year}</p>}
                </motion.div>
            </header>

            {/* ── Konten ── */}
            <main className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-[94px] pb-20 pt-8">
                <div className="grid grid-cols-1 md:grid-cols-[1.25fr_1fr] gap-8 md:gap-14 items-start">
                    {/* About */}
                    <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2D5] shadow-sm">
                        <h2 className="font-editorial text-xl font-bold mb-4 flex items-center gap-3 text-[#070D20]">
                            <span className="inline-block w-1.5 h-5 rounded-full bg-[#FFE34F]" />
                            About the Project
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed text-[#141B2D]/85 font-light">
                            {longDescription || description}
                        </p>
                    </section>

                    {/* Info card */}
                    <aside
                        className="rounded-3xl border border-[#E8E2D5] p-6 sm:p-8 flex flex-col gap-6 bg-white shadow-sm"
                    >
                        {role && (
                            <div>
                                <h2 className="font-mono-tag text-xs font-bold uppercase tracking-wider text-[#60687E] mb-1">Role</h2>
                                <p className="text-sm sm:text-base font-semibold text-[#070D20]">{role}</p>
                            </div>
                        )}

                        {tech.length > 0 && (
                            <div>
                                <h2 className="font-mono-tag text-xs font-bold uppercase tracking-wider text-[#60687E] mb-2">Tech Stack</h2>
                                <div className="flex flex-wrap gap-1.5">
                                    {tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-2.5 py-1 rounded-md text-xs font-mono-tag bg-[#F5F1E8] text-[#141B2D]/80"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {hasLinks && (
                            <div className="flex flex-wrap gap-2">
                                {links.github && <LinkButton href={links.github} icon={FaGithub} label="GitHub" color="#1a1a2e" />}
                                {links.demo && <LinkButton href={links.demo} icon={FaExternalLinkAlt} label="Live Demo" color={accent} />}
                                {links.youtube && <LinkButton href={links.youtube} icon={FaYoutube} label="YouTube" color="#CC0000" />}
                                {links.figma && <LinkButton href={links.figma} icon={FaFigma} label="Figma" color="#7B61FF" />}
                            </div>
                        )}
                    </aside>
                </div>

                {/* Dokumentasi: hanya tampil jika ada foto, jumlah bebas */}
                {documentation.length > 0 && (
                    <section className="mt-16">
                        <h2 className="text-lg font-semibold mb-5 flex items-center gap-3">
                            <span className="inline-block w-1 h-5 rounded-full" style={{ backgroundColor: accent }} />
                            Documentation
                        </h2>

                        <div className="flex flex-col gap-8">
                            {documentation.map((src, i) => (
                                <motion.button
                                    key={src}
                                    type="button"
                                    onClick={() => setPreview(src)}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-60px' }}
                                    transition={{ duration: 0.45 }}
                                    className="group block w-full overflow-hidden rounded-2xl bg-slate-100 shadow-md ring-1 ring-slate-200 cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                                    style={{ outlineColor: accent }}
                                    aria-label={`Perbesar foto dokumentasi ${i + 1}`}
                                >
                                    <img
                                        src={src}
                                        alt={`${title} documentation ${i + 1}`}
                                        loading="lazy"
                                        className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                                    />
                                </motion.button>
                            ))}
                        </div>
                    </section>
                )}

                <div className="mt-16 pt-8 border-t border-slate-200">
                    <button
                        onClick={() => navigate(`/#project-${slug || project?.id || 'projects'}`)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
                    >
                        <FaArrowLeft />
                        Back to Projects
                    </button>
                </div>
            </main>

            {/* ── Lightbox ── */}
            {preview && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-8 cursor-zoom-out"
                    onClick={() => setPreview(null)}
                    role="dialog"
                    aria-modal="true"
                >
                    <button
                        className="absolute top-5 right-5 text-white/80 hover:text-white"
                        onClick={() => setPreview(null)}
                        aria-label="Tutup"
                    >
                        <FaTimes size={24} />
                    </button>
                    <img src={preview} alt="" className="max-w-full max-h-full rounded-lg shadow-2xl" />
                </div>
            )}
        </div>
    );
}

export default ProjectDetail;
