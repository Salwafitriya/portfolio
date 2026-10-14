import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaArrowLeft,
    FaCalendarDays,
    FaLocationDot,
    FaCircleUser,
    FaArrowUpRightFromSquare,
    FaImage,
    FaImages,
} from 'react-icons/fa6';
import internships from '../data/internshipsData';
import PhotoLightbox from '../components/PhotoLightbox';
import { PlayfulStyles, Cube, Sparkle } from '../components/Playful';

// ── Foto strip: tampilkan max 3, tile ke-4 = "+N" overlay ──
const STRIP_MAX = 3;

function PhotoStrip({ photos, onOpen }) {
    const shown = photos.slice(0, STRIP_MAX);
    const extra = photos.length - STRIP_MAX;

    return (
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {shown.map((photo, i) => (
                <button
                    key={i}
                    type="button"
                    onClick={() => onOpen(photo.url)}
                    className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-[#F5F1E8] cursor-zoom-in focus-visible:outline-none"
                >
                    <img
                        src={photo.url}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </button>
            ))}

            {/* Tile "+N" */}
            {extra > 0 ? (
                <button
                    type="button"
                    onClick={() => onOpen(photos[STRIP_MAX]?.url)}
                    className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#070D20] flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-[#141B2D] transition-colors focus-visible:outline-none"
                >
                    <FaImages size={20} className="text-[#FFE34F]" />
                    <span className="font-editorial font-bold text-white text-lg leading-none">+{extra}</span>
                </button>
            ) : (
                // Slot kosong kalau foto < 4
                photos.length < 4 && <div />
            )}
        </div>
    );
}

function Internship() {
    const navigate = useNavigate();
    const [selectedCompany, setSelectedCompany] = useState('All');
    const [activePhoto, setActivePhoto] = useState(null);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    const companies = ['All', ...internships.map((i) => i.company)];

    const filteredInternships =
        selectedCompany === 'All'
            ? internships
            : internships.filter((i) => i.company === selectedCompany);

    // Flatten photos untuk lightbox (per intern)
    const buildPhotos = (intern) =>
        intern.photos.map((p) => ({
            image: p.url,
            title: intern.company,
            caption: intern.role,
        }));

    const openLightbox = (intern, photoUrl) => {
        const photos = buildPhotos(intern);
        const idx = photos.findIndex((p) => p.image === photoUrl);
        // simpan offset global
        let offset = 0;
        for (const item of filteredInternships) {
            if (item.id === intern.id) break;
            offset += item.photos.length;
        }
        setActivePhoto(offset + (idx >= 0 ? idx : 0));
    };

    const allPhotos = filteredInternships.flatMap((item) => buildPhotos(item));

    return (
        <div
            id="internship"
            className="min-h-screen bg-[#F5F1E8] text-[#141B2D] overflow-x-hidden"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            <PlayfulStyles />

            {/* ── Page Header ── */}
            <header className="relative overflow-hidden border-b border-[#E8E2D5] bg-[#F5F1E8]">
                <Cube className="absolute top-10 right-[8%] opacity-50 pl-float" size={72} />
                <Sparkle className="absolute top-16 left-[45%] pl-float" size={22} color="#FFE34F" />

                <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-[94px] pt-12 pb-14">
                    {/* <button
                        onClick={() => navigate('/')}
                        className="inline-flex items-center gap-2 text-xs font-mono-tag font-bold uppercase tracking-wider px-4 py-1.5 rounded-full bg-white text-[#141B2D]/80 border border-[#E8E2D5] hover:border-[#070D20] transition-colors"
                    >
                        <FaArrowLeft size={11} /> Back to Portfolio
                    </button> */}

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55 }}
                        className="mt-8"
                    >
                        <div className="inline-flex items-center gap-2 mb-3">
                            <span className="font-mono-tag text-xs uppercase tracking-widest font-bold text-[#070D20]/75 bg-[#FFE34F] px-2.5 py-0.5 rounded">
                                Work &amp; Industry
                            </span>
                            <span className="text-xs font-mono-tag text-[#60687E]">Work Experiences</span>
                        </div>

                        <h1
                            className="font-editorial text-[#070D20] font-bold tracking-tight leading-[1.05]"
                            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
                        >
                            Professional <span className="italic font-normal">Experiences</span>
                        </h1>
                    </motion.div>

                    {/* Filter Bar */}
                    <div className="mt-8 flex flex-wrap gap-2">
                        {companies.map((c) => {
                            const on = c === selectedCompany;
                            return (
                                <button
                                    key={c}
                                    onClick={() => setSelectedCompany(c)}
                                    className={`font-mono-tag text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full transition-all duration-200 ${on
                                        ? 'bg-[#070D20] text-[#FFE34F] shadow-sm'
                                        : 'bg-white border border-[#E8E2D5] text-[#141B2D]/75 hover:border-[#070D20]/40'
                                        }`}
                                >
                                    {c}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </header>


            {/* ── Cards ── */}
            <main className="max-w-6xl mx-auto px-2 sm:px-10 lg:px-[94px] pb-28">
                <div className="space-y-4">
                    {filteredInternships.map((intern, idx) => (
                        <motion.article
                            key={intern.id}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.5, delay: idx * 0.07 }}
                            className="rounded-2xl bg-white border border-[#E8E2D5] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            {/* ── 1. Header ── */}
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 p-6 sm:p-8 pb-5 sm:pb-6">
                                <div>
                                    <h2 className="font-editorial text-2xl sm:text-[1.75rem] font-bold text-[#070D20] leading-tight">
                                        {intern.company}
                                    </h2>
                                    <p className="mt-0.5 text-sm font-medium text-[#4f67e8]">{intern.role}</p>
                                    <p className="mt-1 text-xs font-mono-tag text-[#60687E] flex items-center gap-2 flex-wrap">
                                        <span className="inline-flex items-center gap-1">
                                            <FaCalendarDays size={10} className="opacity-60" />
                                            {intern.period}
                                        </span>
                                        <span className="opacity-40">·</span>
                                        <span className="inline-flex items-center gap-1">
                                            < FaLocationDot size={10} className="opacity-60" />
                                            {intern.location}
                                        </span>
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-1.5 sm:flex-col sm:items-end">
                                    <span className="font-mono-tag text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#070D20] text-[#FFE34F] whitespace-nowrap">
                                        {intern.badge}
                                    </span>
                                    {intern.clientProject && (
                                        <span className="font-mono-tag text-[11px] font-semibold px-3 py-1 rounded-full bg-[#FFE34F] text-[#070D20] whitespace-nowrap">
                                            {intern.clientProject}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* ── 2. Stats boxes ── */}

                            {intern.stats?.length > 0 && (
                                <div className="mx-6 sm:mx-8 mb-6 grid grid-cols-2 gap-3">
                                    {intern.stats.map((s, i) => (
                                        <div
                                            key={i}
                                            className="rounded-xl bg-[#F5F1E8] border border-[#E8E2D5] px-4 py-3"
                                        >
                                            <p className="font-editorial font-bold text-[#070D20] text-xl sm:text-2xl leading-none">
                                                {s.value}
                                            </p>
                                            <p className="mt-1.5 text-[9px] sm:text-[10px] font-mono-tag text-[#60687E] uppercase tracking-wide">
                                                {s.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}



                            {/* ── 3. Key Contributions ── */}
                            <div className="mx-6 sm:mx-8 pb-6 border-b border-[#E8E2D5]">
                                <h3 className="font-mono-tag text-[10px] font-bold uppercase tracking-widest text-[#070D20]/60 mb-3">
                                    Key Contributions
                                </h3>
                                <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                                    {intern.highlights.map((h, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-[#141B2D]/80 leading-relaxed">
                                            <span className="font-mono-tag text-[10px] text-[#60687E] mt-0.5 shrink-0 w-4">
                                                {i + 1}.
                                            </span>
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            {/* ── 4. Skills & Technologies ── */}
                            <div className="mx-6 sm:mx-8 py-6 border-b border-[#E8E2D5] grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {intern.specializedSkills?.length > 0 && (
                                    <div>
                                        <h3 className="font-mono-tag text-[10px] font-bold uppercase tracking-widest text-[#070D20]/60 mb-3">
                                            Specialized Skills
                                        </h3>
                                        <div className="flex flex-wrap gap-1.5">
                                            {intern.specializedSkills.map((s) => (
                                                <span
                                                    key={s}
                                                    className="px-2.5 py-1 rounded-md bg-[#F5F1E8] border border-[#E8E2D5] text-[11px] font-mono-tag text-[#141B2D]/80"
                                                >
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {intern.technologies?.length > 0 && (
                                    <div>
                                        <h3 className="font-mono-tag text-[10px] font-bold uppercase tracking-widest text-[#070D20]/60 mb-3">
                                            Technologies
                                        </h3>
                                        <div className="flex flex-wrap gap-1.5">
                                            {intern.technologies.map((t) => (
                                                <span
                                                    key={t}
                                                    className="px-2.5 py-1 rounded-md bg-[#070D20]/5 border border-[#070D20]/10 text-[11px] font-mono-tag text-[#141B2D]/80"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* ── 5. Photo Strip ── */}
                            <div className="mx-6 sm:mx-8 py-6 border-b border-[#E8E2D5]">
                                <h3 className="font-mono-tag text-[10px] font-bold uppercase tracking-widest text-[#60687E] mb-4 flex items-center gap-1.5">
                                    <FaImages size={11} />
                                    Internship Moments · {intern.photos.length} photo{intern.photos.length !== 1 ? 's' : ''}
                                </h3>
                                <PhotoStrip
                                    photos={intern.photos}
                                    onOpen={(url) => openLightbox(intern, url)}
                                />
                            </div>

                            {/* ── 6. Referral Footer ── */}
                            {/* <div className="mx-6 sm:mx-8 py-5 flex items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-[#F5F1E8] border border-[#E8E2D5] flex items-center justify-center shrink-0">
                                        <FaCircleUser size={18} className="text-[#60687E]" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-[#070D20] leading-tight">
                                            {intern.referral ? intern.referral.name : 'Professional Reference'}
                                        </p>
                                        <p className="text-xs font-mono-tag text-[#60687E] mt-0.5">
                                            {intern.referral
                                                ? intern.referral.title
                                                : 'Available upon request'}
                                        </p>
                                    </div>
                                </div>
                                {intern.referral?.contact && (
                                    <a
                                        href={`mailto:${intern.referral.contact}`}
                                        className="text-[#60687E] hover:text-[#070D20] transition-colors"
                                        aria-label="Contact referral"
                                    >
                                        <FaArrowUpRightFromSquare size={13} />
                                    </a>
                                )}
                                {!intern.referral && (
                                    <FaArrowUpRightFromSquare size={13} className="text-[#D0CAC0]" />
                                )}
                            </div> */}
                        </motion.article>
                    ))}
                </div>
            </main>

            <PhotoLightbox
                items={allPhotos}
                index={activePhoto}
                onClose={() => setActivePhoto(null)}
                onChange={setActivePhoto}
            />
        </div>
    );
}

export default Internship;
