import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

/**
 * Editorial Project Card:
 * Clean, structured, larger mockups, distinct category tags, and subtle hover interactions.
 */
export default function ProjectCard({ project, isFeatured = false }) {
    const { slug, title, category, description, mockup, image, background, tech = [], year } = project;

    if (isFeatured) {
        return (
            <Link
                to={`/projects/${slug}`}
                className="group relative block rounded-3xl bg-white border border-[#E8E2D5] p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left: Info */}
                    <div className="lg:col-span-5 flex flex-col justify-between order-2 lg:order-1">
                        <div>
                            <div className="flex flex-wrap items-center gap-2.5 mb-4">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#070D20] text-[#FFE34F] text-xs font-mono-tag font-bold tracking-wider uppercase">
                                    ✦ Featured Project
                                </span>
                                {category && (
                                    <span className="px-3 py-1 rounded-full bg-[#F5F1E8] text-[#070D20]/80 text-xs font-mono-tag font-semibold">
                                        {category}
                                    </span>
                                )}
                                {year && (
                                    <span className="text-xs font-mono-tag text-[#60687E]">
                                        {year}
                                    </span>
                                )}
                            </div>

                            <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#070D20] font-bold leading-tight group-hover:text-[#070D20] transition-colors">
                                {title}
                            </h3>

                            {description && (
                                <p className="mt-4 text-sm sm:text-base text-[#60687E] font-light leading-relaxed">
                                    {description}
                                </p>
                            )}
                        </div>

                        <div className="mt-8 pt-6 border-t border-[#E8E2D5] flex flex-wrap items-center justify-between gap-4">
                            {tech.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 max-w-sm">
                                    {tech.slice(0, 5).map((t) => (
                                        <span
                                            key={t}
                                            className="px-2.5 py-1 rounded-md bg-[#F5F1E8] text-[11px] font-mono-tag text-[#141B2D]/80"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#070D20] text-white text-xs font-semibold group-hover:bg-[#FFE34F] group-hover:text-[#070D20] transition-colors">
                                View Case Study <FaArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                            </span>
                        </div>
                    </div>

                    {/* Right: Big Mockup */}
                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <div
                            className="aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden flex items-center justify-center p-6 sm:p-10 border border-[#E8E2D5]/60 transition-transform duration-500 group-hover:scale-[1.01]"
                            style={{ backgroundColor: background || '#F5F1E8' }}
                        >
                            <img
                                src={mockup || image}
                                alt={title}
                                loading="lazy"
                                className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <Link
            to={`/projects/${slug}`}
            className="group flex flex-col h-full rounded-2xl bg-white border border-[#E8E2D5] p-5 shadow-sm hover:shadow-lg transition-all duration-300 focus-visible:outline-none"
        >
            <div
                className="aspect-[16/10] rounded-xl overflow-hidden flex items-center justify-center border border-[#E8E2D5]/50 transition-colors duration-300"
                style={{ backgroundColor: background || '#F5F1E8' }}
            >
                <img
                    src={mockup || image}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-contain p-4 drop-shadow-md transition-transform duration-500 group-hover:scale-[1.05]"
                />
            </div>

            <div className="mt-4 flex flex-col flex-1 justify-between">
                <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                        {category && (
                            <span className="text-[11px] font-mono-tag font-semibold text-[#070D20]/70 px-2 py-0.5 rounded bg-[#F5F1E8]">
                                {category}
                            </span>
                        )}
                        {year && (
                            <span className="text-[11px] font-mono-tag text-[#60687E]">
                                {year}
                            </span>
                        )}
                    </div>

                    <h3 className="font-editorial text-lg sm:text-xl font-bold leading-snug text-[#070D20] group-hover:text-[#070D20] transition-colors">
                        {title}
                    </h3>

                    {description && (
                        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#60687E] line-clamp-2 font-light">
                            {description}
                        </p>
                    )}
                </div>

                <div className="mt-5 pt-3 border-t border-[#E8E2D5]/70 flex items-center justify-between">
                    <span className="text-[11px] font-mono-tag text-[#60687E] truncate max-w-[180px]">
                        {tech.slice(0, 3).join(' · ')}
                    </span>
                    <span className="w-8 h-8 rounded-full border border-[#E8E2D5] flex items-center justify-center text-[#070D20] transition-all duration-300 group-hover:bg-[#070D20] group-hover:border-[#070D20] group-hover:text-[#FFE34F] group-hover:-rotate-45">
                        <FaArrowRight size={10} />
                    </span>
                </div>
            </div>
        </Link>
    );
}
