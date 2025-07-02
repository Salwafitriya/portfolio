import React from 'react';
import CardProject from '../components/CardProject';

function Project() {
    const projects = [
        {
            id: 1,
            imageUrl: '/assets/bg-card-sigasi.png',
            tag: 'Web Development',
            title: 'Sistem Informasi Geospasial Anak Sehat Indonesia (SIGASI)',
            description: 'Stunting website prevention using Geographic Information System (GIS)',
            links: {
                demo: 'https://sigasi.web.id/',
                // github: 'https://github.com/username/sigasi-project',
                // youtube: 'https://youtube.com/watch?v=example'
            }
        },
        {
            id: 2,
            imageUrl: '/assets/KIABookCover.png',
            tag: 'Mobile App',
            title: 'KIABook Application',
            description: 'Built a full-stack multiplatform application for Integrated Health Post (Posyandu) using Flutter and Firebase.',
            links: {
                // demo: 'https://example-ecommerce.com',
                github: 'https://github.com/Salwafitriya/KIABOOK',
                youtube: 'htthttps://youtu.be/plbw_RV6gUw?si=43a6diz8Srd_15c8ps://youtube.com/watch?v=example2'
            }
        },
            {
            id: 3,
            imageUrl: 'assets/Fitst Page.png',
            tag: 'UI/UX Design',
            title: 'Mingle',
            description: 'Built a UI/UX design for project management mobile application.',
            links: {
                // demo: 'https://example-ecommerce.com',
                figma: 'https://www.figma.com/proto/guw1om20Er70dpzzFiLhPO/Mingle?node-id=770-1523&p=f&t=2ALvcStv3QlKP0iy-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=738%3A877&show-proto-sidebar=1',
                // youtube: 'htthttps://youtu.be/plbw_RV6gUw?si=43a6diz8Srd_15c8ps://youtube.com/watch?v=example2'
            }  
        },
                {
            id: 4,
            imageUrl: '/assets/Sirata.png',
            tag: 'Web Development',
            title: 'Sistem Informasi Surat Menyurat Terpadu (SIRATA)',
            description: 'Website untuk permohonan surat menyurat dan manajemen data surat lingkup program studi D3 Teknik Informatika dan D4 Teknologi Rekayasa Komputer.',
            links: {
                // demo: 'https://example-ecommerce.com',
                github: 'https://github.com/denyryn/sirata',
                // youtube: 'htthttps://youtu.be/plbw_RV6gUw?si=43a6diz8Srd_15c8ps://youtube.com/watch?v=example2'
            }
        },
                {
            id: 5,
            imageUrl: '/assets/Web_Nirmala.png',
            tag: 'Mobile App',
            title: 'Website Pencatatan Posyandu',
            description: 'Developed a web-based information system designed to record and monitor the growth and development of toddlers and pregnant women at community health posts (Posyandu). The system enables health workers to input, manage, and track data on child growth metrics and maternal health records efficiently..',
            links: {
                // demo: 'https://example-ecommerce.com',
                github: 'https://github.com/Salwafitriya/Posyandu_SimpleWeb.git',
                // youtube: 'htthttps://youtu.be/plbw_RV6gUw?si=43a6diz8Srd_15c8ps://youtube.com/watch?v=example2'
            }
        },
                {
            id: 6,
            imageUrl: '/assets/Desaged.jpg',
            tag: 'UI/UX Design',
            title: 'DESAGED Mobile App',
            description: 'Application as a Digital Platform for Tourism Villages with a Smart Tourism Concept Based on AR and AI.',
            links: {
                // demo: 'https://example-ecommerce.com',
                github: 'https://github.com/Salwafitriya/KIABOOK',
                youtube: 'htthttps://youtu.be/plbw_RV6gUw?si=43a6diz8Srd_15c8ps://youtube.com/watch?v=example2'
            }
        },
        // Add other projects with the same structure
    ];

    return (
        <section id="projects" className="py-16 bg-gradient-to-b from-[#f2f2f2]/4 via-[#F4F2DD] to-[#f2f2f2]/4">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#97B9B5]">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 max-w-7xl mx-auto">
                {projects.map((project) => (
                    <CardProject
                        key={project.id}
                        imageUrl={project.imageUrl}
                        tag={project.tag}
                        title={project.title}
                        description={project.description}
                        links={project.links}
                    />
                ))}
            </div>
        </section>
    );
}

export default Project;