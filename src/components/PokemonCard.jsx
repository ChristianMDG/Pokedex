import React from 'react';

const PokemonCard = ({ pokemon, onClick }) => {
  const id = pokemon.url.split('/').filter(Boolean).pop();

  return (
    <div
      className="w-80 h-90 perspective cursor-pointer"
      onClick={() => onClick(id)}
    >
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
        <div className="absolute w-full h-full backface-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-2xl shadow-lg flex flex-col justify-center items-center p-4">
          <div className="absolute inset-0 opacity-15 ">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
              alt="pokeball"
              className="w-full h-full object-contain"
            />
          </div>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
            alt={pokemon.name}
            className="w-48 h-48 z-10"
          />
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-300 mt-2 z-10">{`#${id.padStart(3, '0')}`}</p>
          <h3 className="text-lg font-bold capitalize text-gray-800 dark:text-white mt-1 z-10">
            {pokemon.name}
          </h3>
        </div>

     
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-red-500 to-yellow-400 rounded-2xl rotate-y-180 flex items-center justify-center text-white font-bold text-xl">
         <img  src="/src/assets/images/pokeball 1.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
