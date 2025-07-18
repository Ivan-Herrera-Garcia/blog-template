'use client';
import { useState } from 'react';

export default function Card3D({ front, back, alt = 'Card Image' }) {
  const [rotated, setRotated] = useState(false);

  return (
    <div
      className="relative w-72 h-[26rem] md:w-full md:h-full transition-transform duration-500 transform-style-preserve-3d"
      onClick={() => setRotated(!rotated)} // Click en móviles
    >
      <div
        className={`absolute inset-0 transition-transform duration-500 transform-style-preserve-3d ${
          rotated ? 'rotate-y-180' : ''
        } md:hover:rotate-y-180`} // Hover en escritorio
      >
        {/* FRONT */}
        <div className="absolute inset-0 backface-hidden flex items-center justify-center bg-gray-50 rounded-lg shadow">
          {typeof front === 'string' ? (
            <img src={front} alt={alt} className="w-full h-full object-cover rounded-lg" />
          ) : (
            front
          )}
        </div>

        {/* BACK */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center bg-gray-800 text-white rounded-lg shadow">
          {typeof back === 'string' && back.includes(".") ? (
            <img src={back} alt={alt} className="w-full h-full object-cover rounded-lg" />
          ) : (
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{back}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
