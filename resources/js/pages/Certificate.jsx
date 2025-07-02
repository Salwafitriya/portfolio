import React from 'react';
import styled from 'styled-components';
import CardCertificate from '../components/CardCertificate';
import { ScrollReveal } from '../components/ScrollReveal';
import { MotionText } from '../components/MotionText';

const certificatesData = [
  {
    id: 1,
    imageUrl: '/assets/sertif-dicoding.jpg',
    title: 'BackEnd dengan Cloud',
    description: 'Online course by Dicoding "Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud.'
  },
  {
    id: 2,
    imageUrl: '/assets/Sertifikat-Digitalent.png',
    title: 'Junior Security Operation Center Analyst',
    description: 'Junior Security Operation Center Analyst Talent Scouting Academy Digital Talent Scholarship 2024 yang diselenggarakan oleh Pusbang Proserti pada tanggal 15 Februari 2024 - 24 Mei 2024 selama 176 Jam Pelatihan'
  },
  {
    id: 3,
    imageUrl: '/assets/IISMA_certificate.jpg',
    title: 'IIISMA (Exchange)',
    description: 'Indonesia International Students Mobility Awards 2024 in Polytechnic University of Porto, Portugal.'
  },
];

const Certificate = () => {
  return (
    <section id="certificate" className="py-16 bg-gradient-to-b from-[#f2f2f2]/4 via-[#F4F2DD] to-[#F4F2DD]">
    <StyledPage>
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-[#97B9B5]">
            Certificate
          </h1>

          <div className="card-grid">
            {certificatesData.map((cert) => (
              <CardCertificate
                key={cert.id}
                imageUrl={cert.imageUrl}
                title={cert.title}
                description={cert.description}
              />
            ))}
          </div>
        </div>

    </StyledPage>
    
    </section>
  );
};

export default Certificate;



const StyledPage = styled.div`
  padding: 30px;
  text-align: center;

  .card-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
`;


