import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaYoutube, FaExternalLinkAlt, FaFigma, FaArrowLeft } from 'react-icons/fa';
import projects from '../data/projectsData';
import PhotoLightbox from '../components/PhotoLightbox';
import { PlayfulStyles, Sparkle, Cube, Sticker, Tape, CYCLE, PALETTE } from '../components/Playful';

const TILT = [-1.4, 1.1, -0.9, 1.5];

const LinkButton = ({ href, icon: Icon, label, color }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="pl-mono pl-hard pl-hard-hover inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full"
        style={{ background: color, border: '2px solid #111' }}
    >
        <Icon /> {label}
    </a>
);

function ProjectDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [preview, setPreview] = useState(null);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [location.pathname]);

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen pl-grid flex flex-col items-center justify-center gap-6 text-[#111]">
                <PlayfulStyles />
                <h2 className="text-3xl font-extrabold">Project not found</h2>
                <Link to="/#projects" className="pl-mono text-sm font-bold underline underline-offset-4">
                    ← Back to projects
                </Link>
            </div>
        );
    }

    const {
        title,
        category,
        description,
        longDescription,
        image,
        banner,
        tech = [],
        role,
        year,
        links = {},
        documentation = [],
    } = project;

    const heroImage = banner || image;
    const hasLinks = links.github || links.demo || links.youtube || links.figma;
    const docItems = documentation.map((src, i) => ({ image: src, title: `${title} — ${i + 1}` }));

    return (
        <div className="min-h-screen pl-grid text-[#111] overflow-x-hidden" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <PlayfulStyles />

            {/* ── Hero ── */}
            <header className="pl-hero relative overflow-hidden border-b-2 border-dashed border-black/40">
                <Cube className="absolute top-8 right-[6%] opacity-70 pl-float" size={90} />
                <Cube className="absolute bottom-8 left-[4%] opacity-50" size={60} />
                <Sparkle className="absolute top-24 left-[44%] pl-float" size={30} />
                <Sparkle className="absolute bottom-10 left-[48%]" size={20} color="#f5b400" />

                <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-[94px] pt-8 pb-16">
                    <div className={`mt-10 grid gap-12 items-center ${heroImage ? 'md:grid-cols-[1.1fr_0.9fr]' : ''}`}>
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55 }}
                        >
                            {category && <Sticker color={PALETTE.yellow} rotate={-4}>{category}</Sticker>}
                            <h1
                                className="mt-4 font-extrabold tracking-tight leading-[1.02]"
                                style={{ fontSize: 'clamp(2rem, 5.4vw, 4rem)' }}
                            >
                                {title}
                            </h1>
                            {description && (
                                <p className="pl-serif italic font-semibold mt-4 max-w-lg text-lg sm:text-xl leading-snug">
                                    {description}
                                </p>
                            )}
                        </motion.div>

                        {heroImage && (
                            <motion.div
                                initial={{ opacity: 0, y: 40, rotate: 0 }}
                                animate={{ opacity: 1, y: 0, rotate: 3 }}
                                transition={{ duration: 0.65, delay: 0.1 }}
                                className="relative bg-white p-3 rounded-2xl shadow-2xl"
                            >
                                <Tape className="-top-3 left-8 -rotate-6" />
                                <img src={heroImage} alt={title} className="w-full aspect-[16/10] object-cover rounded-xl" />
                                {year && (
                                    <Sticker color={PALETTE.pink} rotate={-8} className="absolute -bottom-4 -left-3">
                                        {year}
                                    </Sticker>
                                )}
                            </motion.div>
                        )}
                    </div>
                </div>
            </header>

            {/* ── Konten ── */}
            <main className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-[94px] py-16 pb-28">
                <div className="grid grid-cols-1 md:grid-cols-[1.25fr_1fr] gap-10 items-start">
                    {/* About */}
                    <motion.section
                        initial={{ opacity: 0, y: 24, rotate: 0 }}
                        whileInView={{ opacity: 1, y: 0, rotate: -0.8 }}
                        viewport={{ once: true }}
                        className="relative bg-white rounded-3xl p-7 sm:p-9"
                        style={{ border: '2px dashed #111' }}
                    >
                        <Sparkle className="absolute -top-4 -right-3" size={30} color="#f5b400" />
                        <h2 className="text-3xl font-extrabold leading-tight">
                            About the <span className="pl-serif italic">Project</span>
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-slate-700 text-justify">
                            {longDescription || description}
                        </p>
                    </motion.section>

                    {/* Info "ticket" */}
                    <motion.aside
                        initial={{ opacity: 0, y: 24, rotate: 0 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 1.2 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl p-7 flex flex-col gap-6"
                        style={{ background: PALETTE.cyan, border: '2px dashed #111' }}
                    >
                        <Tape className="-top-3 right-10 rotate-6" />
                        {role && (
                            <div>
                                <h3 className="pl-mono text-[11px] font-bold uppercase tracking-widest text-black/60 mb-1">Role</h3>
                                <p className="font-extrabold text-lg leading-snug">{role}</p>
                            </div>
                        )}

                        {tech.length > 0 && (
                            <div>
                                <h3 className="pl-mono text-[11px] font-bold uppercase tracking-widest text-black/60 mb-2">Tech</h3>
                                <div className="flex flex-wrap gap-2">
                                    {tech.map((t, i) => (
                                        <span
                                            key={t}
                                            className="pl-mono text-xs font-bold px-3 py-1 rounded-full"
                                            style={{
                                                background: [PALETTE.pink, PALETTE.yellow, PALETTE.green, '#fff'][i % 4],
                                                border: '1.5px solid #111',
                                            }}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {hasLinks && (
                            <div className="flex flex-wrap gap-3">
                                {links.github && <LinkButton href={links.github} icon={FaGithub} label="GitHub" color={PALETTE.yellow} />}
                                {links.demo && <LinkButton href={links.demo} icon={FaExternalLinkAlt} label="Live Demo" color={PALETTE.pink} />}
                                {links.youtube && <LinkButton href={links.youtube} icon={FaYoutube} label="YouTube" color={PALETTE.green} />}
                                {links.figma && <LinkButton href={links.figma} icon={FaFigma} label="Figma" color="#fff" />}
                            </div>
                        )}
                    </motion.aside>
                </div>

                {/* Dokumentasi: hanya tampil jika ada foto */}
                {documentation.length > 0 && (
                    <section className="mt-24">
                        <h2 className="text-3xl sm:text-4xl font-extrabold">
                            Docu<span className="pl-serif italic">mentation</span>
                            <Sparkle className="inline-block ml-3 -mt-3 pl-float" size={26} />
                        </h2>

                        <div className="mt-10 flex flex-col gap-12">
                            {documentation.map((src, i) => (
                                <motion.button
                                    key={src}
                                    type="button"
                                    onClick={() => setPreview(i)}
                                    initial={{ opacity: 0, y: 30, rotate: 0 }}
                                    whileInView={{ opacity: 1, y: 0, rotate: TILT[i % TILT.length] }}
                                    whileHover={{ rotate: 0, scale: 1.01 }}
                                    viewport={{ once: true, margin: '-60px' }}
                                    transition={{ duration: 0.5 }}
                                    className={`relative block rounded-3xl p-3 sm:p-4 cursor-zoom-in w-full md:w-[94%] ${i % 2 ? 'md:ml-auto' : ''}`}
                                    style={{ background: CYCLE[i % CYCLE.length], boxShadow: '0 14px 34px rgba(0,0,0,.16)' }}
                                    aria-label={`Perbesar foto dokumentasi ${i + 1}`}
                                >
                                    <Tape className={`-top-3 ${i % 2 ? 'right-12 rotate-6' : 'left-12 -rotate-6'}`} />
                                    <img
                                        src={src}
                                        alt={`${title} documentation ${i + 1}`}
                                        loading="lazy"
                                        className="w-full h-auto block rounded-2xl"
                                    />
                                </motion.button>
                            ))}
                        </div>
                    </section>
                )}

                <div className="mt-24 pt-8 border-t-2 border-dashed border-black/40">
                    <button
                        onClick={() => navigate('/#projects')}
                        className="pl-mono pl-hard pl-hard-hover inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full bg-white"
                        style={{ border: '2px solid #111' }}
                    >
                        <FaArrowLeft size={11} /> All Projects
                    </button>
                </div>
            </main>

            <PhotoLightbox items={docItems} index={preview} onClose={() => setPreview(null)} onChange={setPreview} />
        </div>
    );
}

export default ProjectDetail;
