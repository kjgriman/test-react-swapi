import React from 'react';

const StarWarsStarshipCard = ({ starship }) => {
    console.log(starship);
  const imageFallback = 'https://static.wikia.nocookie.net/starwars/images/9/9c/DCS_Destruction.png/revision/latest?cb=20130118053308'; // URL de la imagen de respaldo

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src="URL_DE_LA_IMAGEN_DE_LA_NAVE"
            alt={`${starship?.name} starship image`}
            onError={(e) => {
              e.target.src = imageFallback; // Cambia a la imagen de respaldo en caso de error
            }}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Star Wars Starship
          </div>
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            {starship?.name}
          </h2>
          <p className="mt-2 text-gray-500">Model: {starship?.model}</p>
          <p className="text-gray-500">Manufacturer: {starship?.manufacturer}</p>
          <p className="text-gray-500">Crew: {starship?.crew}</p>
          <p className="text-gray-500">Passengers: {starship?.passengers}</p>
          <p className="text-gray-500">Cargo Capacity: {starship?.cargo_capacity} metric tons</p>
          <p className="text-gray-500">Length: {starship?.length} meters</p>
        </div>
      </div>
    </div>
  );
};

export default StarWarsStarshipCard;