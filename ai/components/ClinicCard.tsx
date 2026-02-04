
import React from 'react';
import type { Clinic } from '../types';

interface ClinicCardProps {
  clinic: Clinic;
}

export const ClinicCard: React.FC<ClinicCardProps> = ({ clinic }) => {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`台南市 ${clinic.district} ${clinic.name}`)}`;
  const phoneSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(`${clinic.name} 電話`)}`;

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-cyan-500/50 hover:scale-105 flex flex-col h-full">
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{clinic.name}</h3>
        <p className="text-gray-400 text-sm">
          <i className="fas fa-notes-medical mr-2 text-cyan-400"></i>
          {clinic.services}
        </p>
      </div>
      <div className="bg-gray-700/50 p-4 grid grid-cols-2 gap-2">
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-sky-600 text-white font-semibold py-2 px-4 rounded-md text-center transition-colors duration-300 hover:bg-sky-500"
        >
          <i className="fas fa-map-marked-alt mr-2"></i>地圖
        </a>
        <a
          href={phoneSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-emerald-600 text-white font-semibold py-2 px-4 rounded-md text-center transition-colors duration-300 hover:bg-emerald-500"
        >
          <i className="fas fa-phone mr-2"></i>電話
        </a>
      </div>
    </div>
  );
};
