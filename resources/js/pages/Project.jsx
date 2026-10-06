import React from 'react';
import { motion } from 'framer-motion';
import CardProject from '../components/CardProject';
import projects from '../data/projectsData';

function Project() {
    return (
        <section
            id="projects"
            className="relative py-24 md:py-32 overflow-hidden bg-[#f5f1e8]"
        >

            {/* Subtle paper texture / atmosphere */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#e8d9b5]/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#d8c6a0]/15 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">

                {/* ================= HEADER ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >

                    {/* macOS breadcrumb */}
                    <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-white/70 border border-[#ddd4c4] shadow-sm">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />

                        <span className="ml-2 text-xs font-mono text-[#8b8172]">
                            Macintosh HD / Projects
                        </span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">

                        <div>
                            <p className="font-serif italic text-[#a38b5b] text-sm mb-2">
                                a little collection of my work ✦
                            </p>

                            <h2 className="font-serif text-5xl md:text-6xl text-[#29251f] leading-none">
                                Projects
                            </h2>

                            <p className="mt-4 max-w-xl font-serif text-[#756d62] leading-relaxed">
                                Things I've built, explored, and learned along the way.
                                Each one holds a little piece of the journey.
                            </p>
                        </div>
                    </div>
                </motion.div>


                {/* ================= PROJECT WINDOW ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="
                        bg-[#faf9f6]/90
                        backdrop-blur-xl
                        border border-[#d9d3c8]
                        rounded-2xl
                        shadow-[0_20px_60px_rgba(70,60,45,0.12)]
                        overflow-hidden
                    "
                >

                    {/* macOS window header */}
                    <div className="
                        flex items-center justify-between
                        px-5 py-3
                        bg-[#eeece8]/90
                        border-b border-[#d8d3ca]
                    ">

                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                        </div>

                        <span className="absolute left-1/2 -translate-x-1/2 text-xs font-medium text-[#817b72]">
                            Projects
                        </span>

                        <div className="text-xs text-[#a29b91] font-mono">
                            {projects.length} items
                        </div>
                    </div>


                    {/* Project list */}
                    <div className="p-5 sm:p-7 md:p-10 flex flex-col gap-7">

                        {projects.map((project, index) => (
                            <CardProject
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ))}

                    </div>

                </motion.div>


                {/* Bottom diary note */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-10 text-center"
                >
                    <p className="font-serif italic text-sm text-[#8d8375]">
                        More stories are still being written...
                    </p>
                </motion.div>

            </div>
        </section>
    );
}

export default Project;