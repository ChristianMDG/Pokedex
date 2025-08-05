import React from 'react';

const TYPE_COLORS = {
  grass: 'bg-green-300 text-green-800',
  fire: 'bg-orange-300 text-orange-800',
  water: 'bg-blue-300 text-blue-800',
  poison: 'bg-purple-300 text-purple-800',
  bug: 'bg-lime-300 text-lime-800',
  flying: 'bg-sky-200 text-sky-800',
  psychic: 'bg-pink-300 text-pink-800',
  ice: 'bg-cyan-200 text-cyan-800',
  rock: 'bg-yellow-400 text-yellow-900',
  ground: 'bg-yellow-600 text-white',
  electric: 'bg-yellow-300 text-yellow-800',
  normal: 'bg-gray-300 text-gray-800',
  fighting: 'bg-red-400 text-white',

};

const PokemonDetails = ({ pokemon }) => {
  const getWeaknesses = (types) => {
    const typeChart = {
      normal: ['fighting'],
      fire: ['water', 'rock', 'ground'],
      water: ['electric', 'grass'],
      grass: ['fire', 'ice', 'poison', 'flying', 'bug'],
    };
    const weaknesses = new Set();
    types.forEach(type =>
      typeChart[type.type.name]?.forEach(w => weaknesses.add(w))
    );
    return Array.from(weaknesses);
  };

  const getIdFromUrl = (url) => url.split('/').filter(Boolean).pop();

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl text-black max-w-lg mx-auto">
     
      <h2 className="text-2xl font-bold capitalize text-center mb-2">{pokemon.name}</h2>

    
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
        alt={pokemon.name}
        className="mx-auto w-40 h-40 object-contain mb-4 bird"
      />

      
      <div className="flex justify-center gap-2 mb-4">
        {pokemon.types.map(t => (
          <span
            key={t.type.name}
            className={`text-sm font-semibold px-2 py-1 rounded-full ${TYPE_COLORS[t.type.name] || 'bg-gray-200 text-gray-800'}`}
          >
            {t.type.name}
          </span>
        ))}
      </div>

    
      <div className="mb-4">
        <p className="font-bold mb-1">Weaknesses:</p>
        <div className="flex flex-wrap gap-2">
          {getWeaknesses(pokemon.types).map(w => (
            <span
              key={w}
              className={`text-sm font-medium px-2 py-1 rounded-full ${TYPE_COLORS[w] || 'bg-gray-200 text-gray-800'}`}
            >
              {w}
            </span>
          ))}
        </div>
      </div>

    
      <div className="grid grid-cols-2 gap-2 text-sm mb-4">
        <p><strong>Height:</strong> {pokemon.height / 10} m</p>
        <p><strong>Weight:</strong> {pokemon.weight / 10} kg</p>
        <p><strong>Health:</strong> {pokemon.stats[0].base_stat} HP</p>
        <p><strong>Abilities:</strong> {pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
        <p><strong>Category:</strong> {pokemon.species?.genera?.find(gen => gen.language.name === 'en')?.genus || '—'}</p>
      </div>

     
      <div className="mb-4">
        <h3 className="font-bold mb-2">Evolution</h3>
        <div className="flex items-center justify-center gap-2">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
            alt={pokemon.name}
            className="w-16 h-16"
          />
          {pokemon.evolution?.evolves_to?.length > 0 && (
            <>
              <span>→</span>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${getIdFromUrl(pokemon.evolution.evolves_to[0].species.url)}.png`}
                alt={pokemon.evolution.evolves_to[0].species.name}
                className="w-16 h-16"
              />
              {pokemon.evolution.evolves_to[0].evolves_to.length > 0 && (
                <>
                  <span>→</span>
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

     
      <div className="mb-4 italic text-sm">
        {pokemon.description && <p>{pokemon.description.replace('\f', ' ')}</p>}
      </div>
    </div>
  );
};

export default PokemonDetails;
