// resources/js/pages/Organization.jsx
import React from 'react';
import ExperienceCard from '../components/ExperienceCard';
import CardCertificate from '../components/CardCertificate';

const Organization = () => {
  // Data organisasi (bisa dipindah ke file terpisah)
  const organizations = [
    {
      id: 1,
      title: "Himpunan Mahasiswa Komputer",
      role: "Ketua Divisi Web",
      period: "2022-2023",
      image: "/images/org-himakom.jpg",
      description: "Memimpin pengembangan website organisasi..."
    },
    // Data lainnya...
  ];

  return (
    <section id="Organization" className="py-16 bg-gradient-to-b from-[#F4F2DD] to-[f2f2f2]">
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#97B9B5]">
          Organization Experiences
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <h2 className="text-4xl font-bold text-left mb-8 text-[#E7BB2C]">
          StudentsxCEOs Semarang Batch 6
        </h2>

        <h2 className="text-4xl font-bold text-left mb-8 text-[#E7BB2C]">
          Google Developer Students Club Politeknik Negeri Semarang
        </h2>

        <h2 className="text-4xl font-bold text-left mb-8 text-[#E7BB2C]">
          LPM Dimensi Politeknik Negeri Semarang
        </h2>



          {/* {organizations.map(org => (
            <ExperienceCard
              key={org.id}
              title={org.title}
              subtitle={`${org.role} • ${org.period}`}
              image={org.image}
              description={org.description}
            />           
          ))} */}

          <CardCertificate/>

          <CardCertificate/>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Organization;