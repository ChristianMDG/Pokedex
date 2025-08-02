import React from 'react'

const PokemonCard = ({ pokemon }) => {
  const id = pokemon.url.split('/')[6];
  return (
     <div
      className="bg-pokedex-red p-4 rounded-lg text-center cursor-pointer hover:bg-red-300 transition"
      
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        alt={pokemon.name}
        className="mx-auto"
      />
      <p className="font-bold">{`#${id.padStart(3, '0')}`}</p>
      <p className="capitalize">{pokemon.name}</p>
    </div>
  )
}

export default PokemonCard
