import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaBriefcase } from 'react-icons/fa';
import internships from '../data/internshipsData';
import PhotoLightbox from '../components/PhotoLightbox';
import { PlayfulStyles, Cube, Sparkle } from '../components/Playful';

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

    // Flatten photos for lightbox
    const allPhotos = filteredInternships.flatMap((item) =>
        item.photos.map((p) => ({
            image: p.url,
            title: item.company,
            caption: `${item.role} · ${p.caption}`,
        }))
    );

    const openLightbox = (photoUrl) => {
        const idx = allPhotos.findIndex((p) => p.image === photoUrl);
        if (idx !== -1) setActivePhoto(idx);
    };

    return (
        <div
            id="internship"
            className="min-h-screen pl-grid text-[#141B2D] overflow-x-hidden"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            <PlayfulStyles />

            {/* ── Header ── */}
            <header className="pl-hero relative overflow-hidden border-b border-[#E8E2D5]">
                <Cube className="absolute top-10 right-[8%] opacity-60 pl-float" size={80} />
                <Sparkle className="absolute top-16 left-[45%] pl-float" size={24} color="#FFE34F" />

                <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-[94px] pt-12 pb-14">
                    <button
                        onClick={() => navigate('/')}
                        className="pl-mono inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full bg-white text-[#141B2D]/80 border border-[#E8E2D5] hover:border-[#070D20] transition-colors"
                    >
                        <FaArrowLeft size={11} /> Back to Portfolio
                    </button>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55 }}
                        className="mt-8 relative"
                    >
                        <div className="inline-flex items-center gap-2">
                            <span className="font-mono-tag text-xs uppercase tracking-widest font-bold text-[#070D20]/75 bg-[#FFE34F] px-2.5 py-0.5 rounded">
                                Work &amp; Industry ✦
                            </span>
                            <span className="text-xs font-mono-tag text-[#60687E]">
                                Internship Journey
                            </span>
                        </div>

                        <h1
                            className="mt-3 font-editorial text-[#070D20] font-bold tracking-tight leading-[1.05]"
                            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
                        >
                            Professional <span className="italic font-normal">Internships</span>
                        </h1>
                        <p className="mt-3 max-w-2xl text-[#60687E] font-light text-base leading-relaxed">
                            Pengalaman kerja industri, kontribusi nyata dalam pengembangan sistem, analisis proses bisnis,
                            dan kolaborasi lintas tim di berbagai perusahaan.
                        </p>
                    </motion.div>

                    {/* Filter Bar */}
                    <div className="mt-8 flex flex-wrap gap-2">
                        {companies.map((c) => {
                            const on = c === selectedCompany;
                            return (
                                <button
                                    key={c}
                                    onClick={() => setSelectedCompany(c)}
                                    className={`pl-mono text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full transition-all duration-200 ${
                                        on
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

            {/* ── Main Content: Internship Stories & Gallery ── */}
            <main className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-[94px] py-14 pb-28">
                <div className="space-y-16">
                    {filteredInternships.map((intern, idx) => (
                        <motion.article
                            key={intern.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                            className="rounded-3xl bg-white border border-[#E8E2D5] p-6 sm:p-9 shadow-sm hover:shadow-md transition-shadow"
                        >
                            {/* Company & Role Overview */}
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 pb-6 border-b border-[#E8E2D5]">
                                <div>
                                    <div className="flex flex-wrap items-center gap-2 mb-2.5">
                                        <span className="font-mono-tag text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#070D20] text-[#FFE34F]">
                                            {intern.badge}
                                        </span>
                                        {intern.clientProject && (
                                            <span className="font-mono-tag text-xs font-semibold px-2.5 py-0.5 rounded bg-[#FFE34F] text-[#070D20]">
                                                {intern.clientProject}
                                            </span>
                                        )}
                                        <span className="font-mono-tag text-xs text-[#60687E] bg-[#F5F1E8] px-2.5 py-0.5 rounded">
                                            {intern.type}
                                        </span>
                                    </div>
                                    <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#070D20]">
                                        {intern.company}
                                    </h2>
                                    <p className="mt-1 text-base sm:text-lg font-medium text-[#141B2D]/90">
                                        {intern.role}
                                    </p>
                                </div>

                                <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-3 text-xs sm:text-sm font-mono-tag text-[#60687E]">
                                    <span className="inline-flex items-center gap-1.5">
                                        <FaCalendarAlt className="text-[#070D20]/60" /> {intern.period}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <FaMapMarkerAlt className="text-[#070D20]/60" /> {intern.location}
                                    </span>
                                </div>
                            </div>

                            {/* Description & Key Highlights */}
                            <div className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                                <div className="lg:col-span-6">
                                    <h3 className="font-editorial text-lg font-bold text-[#070D20] mb-3 flex items-center gap-2">
                                        <FaBriefcase className="text-[#FFE34F]" size={15} /> Overview
                                    </h3>
                                    <p className="text-sm sm:text-base leading-relaxed text-[#141B2D]/80 font-light">
                                        {intern.description}
                                    </p>
                                </div>

                                <div className="lg:col-span-6 bg-[#F5F1E8]/60 rounded-2xl p-5 border border-[#E8E2D5]">
                                    <h3 className="font-mono-tag text-xs font-bold uppercase tracking-wider text-[#070D20] mb-3">
                                        Key Contributions &amp; Experience
                                    </h3>
                                    <ul className="space-y-2.5">
                                        {intern.highlights.map((h, i) => (
                                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#141B2D]/85">
                                                <FaCheckCircle className="text-[#070D20] shrink-0 mt-0.5" size={13} />
                                                <span>{h}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Internship Moments / Photo Gallery */}
                            <div className="pt-6 border-t border-[#E8E2D5]">
                                <h3 className="font-mono-tag text-xs font-bold uppercase tracking-widest text-[#60687E] mb-4">
                                    Documented Moments ({intern.photos.length} photos)
                                </h3>

                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                                    {intern.photos.map((photo, pIdx) => (
                                        <motion.button
                                            key={pIdx}
                                            type="button"
                                            onClick={() => openLightbox(photo.url)}
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                            className="group relative block aspect-[4/3] overflow-hidden rounded-xl bg-[#F5F1E8] border border-[#E8E2D5] cursor-zoom-in text-left shadow-sm hover:shadow-md"
                                            aria-label={`View photo ${pIdx + 1} from ${intern.company}`}
                                        >
                                            <img
                                                src={photo.url}
                                                alt={photo.caption}
                                                loading="lazy"
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2.5 flex items-end">
                                                <p className="text-[10px] text-white/90 font-medium leading-tight line-clamp-2">
                                                    {photo.caption}
                                                </p>
                                            </div>
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
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
