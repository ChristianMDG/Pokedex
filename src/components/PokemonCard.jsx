import React from 'react';

const PokemonCard = ({ pokemon, onClick }) => {
  const id = pokemon.url.split('/').filter(Boolean).pop(); 

  return (
    <div
      className="bg-pokedex-red p-4 rounded-lg text-center cursor-pointer hover:bg-red-300 transition"
      onClick={() => onClick(id)}
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
        alt={pokemon.name}
        className="mx-auto w-32 h-32 object-contain"
      />
      <p className="font-bold">{`#${id.padStart(3, '0')}`}</p>
      <p className="capitalize">{pokemon.name}</p>
    </div>
  );
};

export default PokemonCard;
