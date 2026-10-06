import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * CardProject — macOS-style project archive window.
 *
 * Props:
 *   project {object} – one entry from projectsData.js
 */
const CardProject = ({ project }) => {
    const {
        slug,
        title,
        category,
        description,
        mockup,
        background,
        accent,
        year,
    } = project;

    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.55,
                ease: 'easeOut',
            }}
            className="
                group
                relative
                w-full
                h-[360px]
                sm:h-[380px]
                rounded-2xl
                overflow-hidden
                border
                border-[#d8d3ca]
                shadow-[0_12px_35px_rgba(40,35,25,0.12)]
                bg-[#f5f3ef]
            "
        >

            {/* =====================================================
                PROJECT BACKGROUND
            ====================================================== */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-[1.02]"
                style={{
                    backgroundImage: `url("${background}")`,
                }}
            />

            {/* Soft overlay */}
            <div className="absolute inset-0 bg-black/10" />

            {/* =====================================================
                MACOS WINDOW
            ====================================================== */}
            <div className="relative z-10 h-full flex flex-col">

                {/* ───────── Window Header ───────── */}
                <div className="
                    relative
                    flex
                    items-center
                    justify-between
                    h-11
                    px-4
                    bg-[#f1efeb]/90
                    backdrop-blur-xl
                    border-b
                    border-black/10
                    shrink-0
                ">

                    {/* Traffic lights */}
                    <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-sm" />
                        <span className="w-3 h-3 rounded-full bg-[#febc2e] shadow-sm" />
                        <span className="w-3 h-3 rounded-full bg-[#28c840] shadow-sm" />
                    </div>

                    {/* Window title */}
                    <div className="
                        absolute
                        left-1/2
                        -translate-x-1/2
                        flex
                        items-center
                        gap-2
                        text-[11px]
                        font-medium
                        text-[#706b63]
                    ">
                        <span className="opacity-60">✦</span>
                        <span>{title}</span>
                    </div>

                    {/* Year */}
                    <span className="text-[10px] font-mono text-[#99938a]">
                        {year || '—'}
                    </span>

                </div>


                {/* ───────── Window Content ───────── */}
                <div className="relative flex-1 flex flex-col sm:flex-row overflow-hidden">

                    {/* =================================================
                        LEFT — TEXT
                    ================================================== */}
                    <div className="
                        relative
                        z-10
                        flex
                        flex-col
                        justify-between
                        p-7
                        sm:p-9
                        w-full
                        sm:w-[55%]
                    ">

                        <div>

                            {/* Category */}
                            <span
                                className="
                                    inline-flex
                                    items-center
                                    gap-1.5
                                    text-[10px]
                                    font-semibold
                                    tracking-[0.16em]
                                    uppercase
                                    mb-5
                                    px-3
                                    py-1.5
                                    rounded-full
                                    backdrop-blur-md
                                    border
                                "
                                style={{
                                    // color: accent || '#665b4c',
                                    // backgroundColor: `${accent || '#665b4c'}18`,
                                    // borderColor: `${accent || '#665b4c'}30`,
                                }}
                            >

                                {category}
                            </span>


                            {/* Title */}
                            <h2
                                className="
                                    font-serif
                                    font-semibold
                                    text-[#29251f]
                                    leading-tight
                                    mb-4
                                    drop-shadow-sm
                                "
                                style={{
                                    fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)',
                                }}
                            >
                                {title}
                            </h2>


                            {/* Description */}
                            <p className="
                                text-[#514a40]
                                text-sm
                                sm:text-[15px]
                                leading-relaxed
                                max-w-md
                                font-serif
                            ">
                                {description}
                            </p>

                        </div>


                        {/* Learn More */}
                        <div className="mt-6">

                            <Link
                                to={`/projects/${slug}`}
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    font-serif
                                    italic
                                    text-sm
                                    font-semibold
                                    text-[#66583f]
                                    transition-colors
                                    duration-200
                                "
                            >

                                <span className="
                                    relative
                                    after:absolute
                                    after:left-0
                                    after:-bottom-1
                                    after:w-full
                                    after:h-[1px]
                                    after:bg-current
                                    after:origin-left
                                    after:scale-x-100
                                    group-hover:after:scale-x-0
                                    after:transition-transform
                                    after:duration-300
                                ">
                                    Open project
                                </span>

                                <span className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                ">
                                    →
                                </span>

                            </Link>

                        </div>

                    </div>


                    {/* =================================================
                        RIGHT — MOCKUP
                    ================================================== */}
                    <div className="
                        relative
                        z-10
                        flex-shrink-0
                        w-full
                        sm:w-[45%]
                        h-[180px]
                        sm:h-full
                        flex
                        items-center
                        justify-center
                        p-5
                        sm:p-7
                    ">

                        {/* subtle glass behind mockup */}
                        <div className="
                            absolute
                            inset-5
                            rounded-xl
                            bg-white/10
                            backdrop-blur-[2px]
                        " />

                        {mockup && (
                            <motion.img
                                src={mockup}
                                alt={title}
                                whileHover={{
                                    scale: 1.04,
                                    y: -4,
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: 'easeOut',
                                }}
                                className="
                                    relative
                                    z-10
                                    w-full
                                    max-w-[430px]
                                    max-h-full
                                    object-contain
                                    drop-shadow-[0_15px_20px_rgba(0,0,0,0.3)]
                                "
                            />
                        )}

                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default CardProject;