/**
 * Centralized internship experience data based on Salwa's official CV.
 * Covers companies, roles, timeline, descriptions, key contributions, and gallery photos.
 */
const internships = [
    {
        id: 1,
        company: 'Accenture Indonesia',
        shortName: 'Accenture (ACN)',
        role: 'SAP Materials Management Intern',
        location: 'Semarang, Indonesia',
        period: '19 Nov 2025 – 13 Mar 2026',
        clientProject: 'Project: Telkomsel',
        type: 'Enterprise Consulting',
        badge: 'SAP S/4HANA MM',
        description:
            'Supported SAP MM Non-Finance activities related to procurement, asset, and material management processes on the Telkomsel project, including process mapping, workflow analysis, and functional consulting support.',
        highlights: [
            'Supported SAP MM Non-Finance activities related to procurement, asset, and material management processes, including process mapping and workflow analysis',
            'Extracted, processed, and validated 10,000+ procurement records in SAP MM',
            'Performed root cause analysis on 20+ client-reported system issues, delivering sustainable solutions that reduced recurring incidents and improved system reliability',
            'Contributed to procurement workflow improvements by preparing daily Excel reports, enabling faster project monitoring',
            'Contributed to the development of Generative AI solutions within the project to support process improvement and business needs',
        ],
        specializedSkills: [
            'SAP MM Non-Finance Configuration',
            'Procurement Process Mapping',
            'Root Cause Analysis',
            'Functional Consulting',
            'ERP Workflow Analysis',
        ],
        technologies: ['SAP S/4HANA', 'SAP MM', 'Microsoft Excel'],
        softSkills: ['Analytical Thinking', 'Client Communication', 'Cross-team Collaboration', 'Attention to Detail'],
        stats: [
            { value: '20+', label: 'Issues solved' },
            { value: '10,000+', label: 'Records processed' },
        ],
        // referral: null,
        photos: [
            {
                url: '/assets/foto/internship/acn/acn 1.jpeg',
            },
            {
                url: '/assets/foto/internship/acn/acn 2.jpeg',
            },
            {
                url: '/assets/foto/internship/acn/acnkerja.jpg',
            },
            {
                url: '/assets/foto/internship/acn/acnkerja1.jpg',
            },
            {
                url: '/assets/foto/internship/acn/acnkerja2.jpg',
            },
            {
                url: '/assets/foto/internship/acn/dinner with leader.jpg',
            },
        ],
    },
    {
        id: 2,
        company: 'PT Nusantara Global Inovasi (NGI)',
        shortName: 'PT NGI',
        role: 'Full Stack Web Developer Intern',
        location: 'Semarang, Indonesia',
        period: '4 Aug 2025 – 14 Nov 2025',
        clientProject: 'Internal Personnel Management System',
        type: 'Software House',
        badge: 'Full Stack Web Dev',
        description:
            'Developed end-to-end personnel management web application using CodeIgniter 4, building employee complaint and goods procurement modules utilized by 40+ employees.',
        highlights: [
            'Developed a personnel management web application using CodeIgniter 4, building employee complaint and goods procurement modules used by 40+ employees',
            'Transformed user requirements into actionable technical and functional specification documents for development',
            'Designed database schemas, feature specifications, and wireframes supporting end-to-end development',
            'Conducted testing, debugging, and performance optimization to ensure high system reliability',
        ],
        specializedSkills: [
            'Full-Stack Web Development (MVC)',
            'Database Schema Design',
            'Software Requirements Specification (SRS)',
            'Unit Testing & Debugging',
            'Wireframing & Prototyping',
        ],
        technologies: ['CodeIgniter 4', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'Figma', 'Git', 'DBeaver'],
        softSkills: ['Problem Solving', 'Proactive Communication', 'Project Management', 'Teamwork'],
        stats: [
            { value: '2', label: 'Modules built' },
            { value: '40+', label: 'Employees served' },
        ],
        // referral: {
        //     name: 'Eky Anggara',
        //     title: 'Mentor and UI/UX Designer',
        //     mail: 'ekyanggara@gmail.com/',
        // },
        photos: [
            {
                url: '/assets/foto/internship/ngi/ngi 1.png',
            },
            {
                url: '/assets/foto/internship/ngi/ngi 2.jpeg',
            },
            {
                url: '/assets/foto/internship/ngi/ngi 3.jpeg',
            },
            {
                url: '/assets/foto/internship/ngi/ngi 4.jpeg',
            },
            {
                url: '/assets/foto/internship/ngi/ngi 6.jpeg',
            },
            {
                url: '/assets/foto/internship/ngi/ngi 7.jpeg',
            },
        ],
    },
    {
        id: 3,
        company: 'PT Phapros Tbk',
        shortName: 'PT Phapros Tbk',
        role: 'Audit, Monitoring, and Data Analytics',
        location: 'Semarang, Indonesia',
        period: 'Sept 2026 - Present',
        clientProject: 'Internal Audit',
        type: 'Pharmaceutical Industry',
        badge: 'Data Analyst',
        description:
            'Contributed to data-driven internal audit initiatives in pharmaceutical manufacturing through operational and financial data analysis, historical production and BOP data preparation, and the development of performance dashboards using Power BI.',
        highlights: [
            'Supported data analytical audits by collecting, preparing, and analyzing historical production and BOP data from enterprise systems.',
            'Analyzed operational and financial data (procurement, inventory, maintenance, R&D, asset depreciation, quality) to identify trends and support audit insights.',
            'Developed performance dashboards and data visualizations using PowerBI.',
        ],
        specializedSkills: [
            'Data Analytics for Internal Audit',
            'Financial & Operational Data Analysis',
            'Dashboard Development',
            'BOP Data Preparation',
            'Trend Analysis',
        ],
        technologies: ['Power BI', 'Microsoft Excel', 'QAD'],
        softSkills: ['Analytical Thinking', 'Data-Driven Decision Making', 'Integrity & Confidentiality', 'Detail-Oriented'],
        stats: [
            // { value: '2', label: 'Dashboards built' },
            // { value: '6+', label: 'Departments analyzed' },
        ],
        // referral: {
        //     name: 'Salwa Nadhifa Rahma',
        //     title: 'Jabatan mentor atau supervisor',
        //     linkedin: 'https://www.linkedin.com/in/salwa-nadhifa-rahma/',
        // },
        photos: [
            {
                url: '/assets/foto/internship/Phapros/phapros 1.jpeg',
                caption: 'Enterprise IT collaboration and workflow evaluation at PT Phapros Tbk',
            },
            {
                url: '/assets/foto/internship/Phapros/phapros 2.jpeg',
                caption: 'Requirements gathering and system analysis session',
            },
        ],
    },
];

export default internships;
