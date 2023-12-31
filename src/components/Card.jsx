import React from 'react';

const StarWarsCard = ({ character }) => {
    console.log('character',character);
    if (character) {
        
        const { name, birth_year, height, mass, eye_color, hair_color } = character;
    }

    const imageFallback= 'https://i.pinimg.com/originals/c0/6c/9d/c06c9d63bda3f0a823aee1b2f47b0457.png'

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
        <img
            className="h-48 w-full object-cover md:w-48"
            src="https://user-images.githubusercontent.com/5948318/38711580-ea19e088-3e9c-11e8-9a02-6b46805f311ds.png"  // Agrega la URL de la imagen del personaje
            alt={`${character?.name} image`}
            onError={(e) => {
                e.target.src = imageFallback;
              }}
          />
         
        </div>
        <div className="p-8">
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            {character?.name}
          </h2>
          <p className="mt-2 text-gray-500">Birth Year: {character?.birth_year}</p>
          <p className="text-gray-500">
            Height: {character?.height} cm | Mass: {character?.mass} kg
          </p>
          <p className="text-gray-500">
            Eye Color: {character?.eye_color} | Hair Color: {character?.hair_color}
          </p>
          <div className="mt-4">
            {/* Agrega aquí tus iconos, puedes utilizar bibliotecas como Font Awesome */}
            <i className="fab fa-facebook-square mr-2 text-blue-500 hover:text-blue-700 cursor-pointer"></i>
            <i className="fab fa-twitter mr-2 text-blue-500 hover:text-blue-700 cursor-pointer"></i>
            <i className="fab fa-instagram mr-2 text-blue-500 hover:text-blue-700 cursor-pointer"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarWarsCard;
