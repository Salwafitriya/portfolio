import { webview } from "framer-motion/client";

/**
 * Centralized project data.
 * Each entry drives both the Projects section cards and the detail page.
 *
 * Fields:
 *   mockup   – path to the device/laptop mockup image in /assets/mockup/
 *   image    – raw screenshot used on the detail page body
 *   background – soft card background colour
 */
const projects = [
    {
        id: 1,
        slug: 'sentimenanalisis',
        title: 'Sentimen Analisis dan Topic Modeling Perlindungan Data Pribadi di Indonesia',
        category: 'Data Analysis & Web Development',
        description:
            'A machine learning model for sentiment analysis and topic modeling on public discussions related to personal data protection in Indonesia.',
        image: '/assets/project/sentimen/mockup.png',
        mockup: '/assets/project/sentimen/mockup.png',
        background: '#a5a0d8ff',
        accent: '#5958c7ff',
        links: {
            demo: 'https://pdp-sentiment-analysis.streamlit.app/',
        },
        tech: ['Python', 'Streamlit', 'Pandas', 'Numpy', 'Scikit-learn', 'HuggingFace'],
        year: '2026',
        role: 'Data Analyst & Machine Learning Engineer',
        longDescription:
            'An NLP-based project that analyzes public sentiment and uncovers discussion topics surrounding personal data protection in Indonesia from 2020 to 2025. Using SVM, Bi-LSTM, IndoBERT and IndoBERTa for sentiment classification and BERTopic for topic modeling, the project explores public perspectives across social media and online news, presented through an interactive Streamlit dashboard with data visualizations.',
        documentation: [
            '/assets/project/sentimen/1.png',
            '/assets/project/sentimen/4.png',
            '/assets/project/sentimen/5.png',
            '/assets/project/sentimen/2.png',
            '/assets/project/sentimen/3.png',
        ],
    },
    {
        id: 2,
        slug: 'sigasi',
        title: 'Sistem Informasi Geospasial Anak Sehat Indonesia (SIGASI)',
        category: 'Web Development',
        description:
            'A geographic information system for stunting prevention in Central Java, enabling health workers to visualise and track child-nutrition data on an interactive map.',
        image: '/assets/bg-card-sigasi.png',
        mockup: '/assets/mockup/sigasi.png',
        background: '#d8c6a0',
        accent: '#4F67E8',
        links: {
            demo: 'https://sigasi.web.id/',
        },
        tech: ['Laravel', 'Leaflet.js', 'PostgreSQL', 'Figma'],
        year: '2024',
        role: 'Front End Developer & System Analyst',
        longDescription:
            'SIGASI (Sistem Informasi Geospasial Anak Sehat Indonesia) is a web-based GIS platform for monitoring Posyandu activities and visualizing child health data across Central Java. It integrates interactive maps with AI-powered stunting detection based on anthropometric data such as age, weight, and height.',
        documentation: [
            '/assets/project/sigasi/bg-card-sigasi.png',
            '/assets/project/sigasi/peta.png',
            // '/assets/project/sigasi/dashboard peta.png',
            '/assets/project/sigasi/grafikdashboard.png',
            '/assets/project/sigasi/history.png',
            '/assets/project/sigasi/grafperkembangan.png',
            '/assets/project/sigasi/pesansiaran.png',
            '/assets/project/sigasi/analisisai.png',
            '/assets/project/sigasi/theteam.jpeg',
        ],
    },
    {
        id: 3,
        slug: 'sirata',
        title: 'Sistem Informasi Surat Menyurat Mahasiswa (SIRATA)',
        category: 'Web Development',
        description:
            'A document-request management system for D3 Informatics and D4 Computer Engineering students at Politeknik Negeri Semarang — streamlining letter submissions and approvals.',
        image: '/assets/Sirata.png',
        mockup: '/assets/mockup/sirata.png',
        background: '#ECEEFF',
        accent: '#7C5CFA',
        links: {
            github: 'https://github.com/denyryn/sirata',
        },
        tech: ['PHP', 'Laravel', 'Tailwind'],
        year: '2024',
        role: 'Database Designer & System Analyst',
        longDescription:
            'SIRATA replaces paper-based letter requests with a fully digital workflow. Students submit requests online; staff review, approve, and issue official letters electronically. Notification emails and real-time status tracking reduce turnaround time significantly.',
        documentation: [
            '/assets/project/sirata/Lacak Surat.png',
            '/assets/project/sirata/Preview (1).png',
            '/assets/project/sirata/Preview (2).png',
            '/assets/project/sirata/Sirata-ERD-1.png',
            // '/assets/project/sirata/Sirata-ERD-2.png',
        ],
    },
    {
        id: 4,
        slug: 'posyandu-web',
        title: 'Website Pencatatan Posyandu',
        category: 'Web Development',
        description:
            'A web-based information system for recording and monitoring toddler growth and pregnant-women data at community health posts.',
        image: '/assets/Web_Nirmala.png',
        mockup: '/assets/mockup/posyandu web.png',
        background: '#FFF8E7',
        accent: '#D4900A',
        links: {
            github: 'https://github.com/Salwafitriya/Posyandu_SimpleWeb.git',
        },
        tech: ['PHP', 'MySQL', 'Bootstrap'],
        year: '2023',
        role: 'Full-Stack Developer',
        longDescription:
            'This system was built for Posyandu Nirmala to replace handwritten registers. Officers input monthly weight, height, and MUAC measurements; the system auto-generates growth charts and flags children at nutritional risk.',
        documentation: [
            '/assets/project/webposyandu/Screenshot 2025-06-20 125824.png',
            '/assets/project/webposyandu/Screenshot 2025-06-20 130001.png',
        ],
    },
    {
        id: 5,
        slug: 'mingle',
        title: 'Mingle — Project Management App',
        category: 'UI/UX Design',
        description:
            'A clean, modern UI/UX design for a collaborative project-management mobile application, focused on intuitive task tracking and team communication.',
        image: '/assets/Fitst Page.png',
        mockup: '/assets/mockup/migle.png',
        background: '#F0FFF6',
        accent: '#1EA066',
        links: {
            figma: 'https://www.figma.com/proto/guw1om20Er70dpzzFiLhPO/Mingle?node-id=770-1523&p=f&t=2ALvcStv3QlKP0iy-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=738%3A877&show-proto-sidebar=1',
        },
        tech: ['Figma', 'Prototyping', 'Design Systems'],
        year: '2024',
        role: 'UI/UX Designer',
        longDescription:
            'Mingle was designed from scratch in Figma, covering end-to-end user flows: onboarding, project dashboards, task Kanban, calendar view, and team chat. The design emphasises clarity and speed, reducing cognitive load for busy teams.',
        documentation: [
            '/assets/project/mingle/mingle1.png',
            '/assets/project/mingle/mingle2.png',
        ],
    },

    {
        id: 6,
        slug: 'kiabook',
        title: 'KIABook Application',
        category: 'Mobile App',
        description:
            'A cross-platform Flutter & Firebase app for Integrated Health Posts (Posyandu) that digitises the traditional mother-and-child health record booklet.',
        image: '/assets/KIABook.png',
        mockup: '/assets/mockup/kia.png',
        background: '#FFF4EC',
        accent: '#F07A2A',
        links: {
            github: 'https://github.com/Salwafitriya/KIABOOK',
            youtube: 'https://youtu.be/plbw_RV6gUw?si=43a6diz8Srd_15c8',
        },
        tech: ['Flutter', 'Firebase', 'Dart'],
        year: '2023',
        role: 'Full-Stack Mobile Developer',
        longDescription:
            'KIABook digitises the traditional KIA booklet used in Posyandu health posts. Parents and midwives can record growth measurements, vaccination history, and pregnancy milestones on any device. Real-time Firebase sync ensures data is always up to date.',
        links: {
            github: 'https://github.com/Salwafitriya/KIABOOK.git',
            youtube: 'https://youtu.be/plbw_RV6gUw?si=43a6diz8Srd_15c8',
        },
    },
    {
        id: 7,
        slug: 'desaged',
        title: 'DESAGED Mobile App',
        category: 'UI/UX Design',
        description:
            'A digital platform for tourism villages featuring Augmented Reality and AI, designed to enrich visitor experiences with smart, contextual content.',
        image: '/assets/Desaged.jpg',
        mockup: '/assets/mockup/desaged.png',
        background: '#F5F0FF',
        accent: '#8B44F7',
        links: {
            youtube: 'https://youtu.be/plbw_RV6gUw',
        },
        tech: ['Flutter', 'AR', 'AI', 'Firebase'],
        year: '2024',
        role: 'UI/UX Designer & System Analyst',
        longDescription:
            'DESAGED turns traditional village tourism into a smart experience. Visitors can scan heritage objects for AR overlays with historical facts, use an AI chatbot for local recommendations, and explore a virtual map of the village.',
        figma: 'https://www.figma.com/proto/kVJyy9P1HjCC2YNsG9IXl2/LOMBA-UPNVJ?node-id=409-736&t=pGkyBBNMrB67q1MZ-1&scaling=min-zoom&content-scaling=fixed&page-id=74%3A224&starting-point-node-id=409%3A736&show-proto-sidebar=1',

        documentation: [
            '/assets/project/DESAGED/1.png',
            '/assets/project/DESAGED/2.png',
        ],
    },
];

export default projects;
