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
        location: 'Jakarta / Semarang, Indonesia',
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
        photos: [
            {
                url: '/assets/foto/internship/acn/acn 1.jpeg',
                caption: 'Accenture Indonesia — Project kickoff & SAP MM Consulting session',
            },
            {
                url: '/assets/foto/internship/acn/acn 2.jpeg',
                caption: 'Procurement data validation & workflow analysis moment',
            },
            {
                url: '/assets/foto/internship/acn/acn 3.jpeg',
                caption: 'Team collaboration and milestone achievement at Accenture',
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
        photos: [
            {
                url: '/assets/foto/internship/ngi/ngi 1.JPG',
                caption: 'Sprint review and software development session at NGI',
            },
            {
                url: '/assets/foto/internship/ngi/ngi 2.jpeg',
                caption: 'Full-stack engineering workspace and module implementation',
            },
            {
                url: '/assets/foto/internship/ngi/ngi 3.jpeg',
                caption: 'Project milestone presentation with the development team',
            },
            {
                url: '/assets/foto/internship/ngi/ngi 4.jpeg',
                caption: 'Feature specification and schema design discussion',
            },
            {
                url: '/assets/foto/internship/ngi/ngi 6.jpeg',
                caption: 'Completion and acknowledgment ceremony at PT NGI',
            },
            {
                url: '/assets/foto/internship/ngi/ngi 7.jpeg',
                caption: 'Engineering team solidarity and project wrap-up',
            },
        ],
    },
    {
        id: 3,
        company: 'PT Phapros Tbk',
        shortName: 'PT Phapros Tbk',
        role: 'System Analyst & IT Intern',
        location: 'Semarang, Indonesia',
        period: '2024',
        clientProject: 'Enterprise IT Operations',
        type: 'Pharmaceutical Industry',
        badge: 'System Analyst',
        description:
            'Engaged in enterprise information system analysis, business process mapping, and operational workflow optimization for pharmaceutical manufacturing IT systems.',
        highlights: [
            'Analyzed departmental operational workflows to identify digital optimization and system improvement opportunities',
            'Drafted software requirements specifications (SRS) and comprehensive business process flowcharts',
            'Collaborated with cross-functional teams to ensure data integrity and compliance across enterprise systems',
        ],
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
