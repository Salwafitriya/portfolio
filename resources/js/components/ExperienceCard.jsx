// resources/js/components/experience/ExperienceCard.jsx
import React from 'react';

const ExperienceCard = ({ title, subtitle, image, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-gray-600 mb-3">{subtitle}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;