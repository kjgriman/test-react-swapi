import React from 'react';
import { Popover } from '../PopOver';

const StarWarsPlanetCard = ({ planet }) => {
    console.log('planet');
    let id
    if (planet) {
       id=  Number(planet?.url.split('/').slice(-2)[0])
    }
  const imageFallback = 'https://user-images.githubusercontent.com/5948318/38711585-ef6a8970-3e9c-11e8-96c7-fc8a610cdde2.png'; // URL de la imagen de respaldo

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg` } 
            alt={`${planet?.name} planet image`}
            onError={(e) => {
              e.target.src = imageFallback; // Cambia a la imagen de respaldo en caso de error
            }}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Star Wars Planet
          </div>
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            {planet?.name}
          </h2>
          <p className="mt-2 text-gray-500">Climate: {planet?.climate}</p>
          <p className="text-gray-500">Terrain: {planet?.terrain}</p>
          <p className="text-gray-500">Population: {planet?.population}</p>
          <p className="text-gray-500">Diameter: {planet?.diameter} km</p>
        </div>

      </div>
        <Popover text={planet?.residents}/>
    </div>
  );
};

export default StarWarsPlanetCard;