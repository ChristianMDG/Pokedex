import React from 'react';

const PokemonDetails = ({ pokemon }) => {
  const getWeaknesses = (types) => {
    const typeChart = {
      normal: ['fighting'],
      fire: ['water', 'rock', 'ground'],
      water: ['electric', 'grass'],
      grass: ['fire', 'ice', 'poison', 'flying', 'bug'],
      // Ajoute d'autres types ici si nécessaire
    };
    const weaknesses = new Set();
    types.forEach(type =>
      typeChart[type.type.name]?.forEach(w => weaknesses.add(w))
    );
    return Array.from(weaknesses);
  };

  const getIdFromUrl = (url) => url.split('/').filter(Boolean).pop();

  return (
    <div className="bg-pokedex-red p-4 rounded-lg mt-4 text-white">
      <h2 className="text-xl font-bold capitalize text-center">{pokemon.name}</h2>
      
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        alt={pokemon.name}
        className="mx-auto mt-2 w-40 h-40 object-contain"
      />

      <div className="mt-4 space-y-1">
        <p><span className="font-bold">Height:</span> {pokemon.height / 10} m</p>
        <p><span className="font-bold">Weight:</span> {pokemon.weight / 10} kg</p>
        <p><span className="font-bold">Health:</span> {pokemon.stats[0].base_stat} HP</p>
        <p><span className="font-bold">Category:</span> {pokemon.types.map(t => t.type.name).join(', ')}</p>
        <p><span className="font-bold">Abilities:</span> {pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
        <p><span className="font-bold">Weakness:</span> {getWeaknesses(pokemon.types).join(', ')}</p>
      </div>

      <div className="mt-4">
        <h3 className="font-bold">Evolution:</h3>
        <div className="flex items-center space-x-2 mt-2">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
            alt={pokemon.name}
            className="w-16 h-16"
          />

          {pokemon.evolution?.evolves_to?.length > 0 && (
            <>
              <p>→</p>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${getIdFromUrl(pokemon.evolution.evolves_to[0].species.url)}.png`}
                alt={pokemon.evolution.evolves_to[0].species.name}
                className="w-16 h-16"
              />
              {pokemon.evolution.evolves_to[0].evolves_to.length > 0 && (
                <>
                  <p>→</p>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${getIdFromUrl(pokemon.evolution.evolves_to[0].evolves_to[0].species.url)}.png`}
                    alt={pokemon.evolution.evolves_to[0].evolves_to[0].species.name}
                    className="w-16 h-16"
                  />
                </>
              )}
            </>
          )}
        </div>
      </div>

      <div className="mt-4 italic">
        {pokemon.description && <p>{pokemon.description.replace('\f', ' ')}</p>}
      </div>

      <div className="flex justify-between mt-6">
        <button className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">{'< Précédent'}</button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">{'Suivant >'}</button>
      </div>
    </div>
  );
};

export default PokemonDetails;
