const PokemonDetails = ({ pokemon }) => {
  const getWeaknesses = (types) => {
    const typeChart = {
      normal: ['fighting'],
      fire: ['water', 'rock', 'ground'],
      water: ['electric', 'grass'],
      grass: ['fire', 'ice', 'poison', 'flying', 'bug'],
     
    };
    const weaknesses = new Set();
    types.forEach(type => typeChart[type.type.name]?.forEach(w => weaknesses.add(w)));
    return Array.from(weaknesses);
  };

  return (
    <div className="bg-pokedex-red p-4 rounded-lg mt-4">
      <h2 className="text-xl font-bold capitalize">{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="mx-auto mt-2" />
      <div className="mt-2">
        <p><span className="font-bold">Height:</span> {pokemon.height / 10} m</p>
        <p><span className="font-bold">Weight:</span> {pokemon.weight / 10} kg</p>
        <p><span className="font-bold">Health:</span> {pokemon.stats[0].base_stat} HP</p>
        <p><span className="font-bold">Category:</span> {pokemon.types.map(t => t.type.name).join(', ')}</p>
        <p><span className="font-bold">Abilities:</span> {pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
        <p><span className="font-bold">Weakness:</span> {getWeaknesses(pokemon.types).join(', ')}</p>
      </div>
      <div className="mt-2">
        <h3 className="font-bold">Evolution:</h3>
        <div className="flex space-x-2">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} className="w-16 h-16" />
          {pokemon.evolution.evolves_to.length > 0 && (
            <>
              <p>→</p>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.evolution.evolves_to[0].species.url.split('/').slice(-2, -1)[0]}.png`}
                alt={pokemon.evolution.evolves_to[0].species.name}
                className="w-16 h-16"
              />
              {pokemon.evolution.evolves_to[0].evolves_to.length > 0 && (
                <>
                  <p>→</p>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.evolution.evolves_to[0].evolves_to[0].species.url.split('/').slice(-2, -1)[0]}.png`}
                    alt={pokemon.evolution.evolves_to[0].evolves_to[0].species.name}
                    className="w-16 h-16"
                  />
                </>
              )}
            </>
          )}
        </div>
      </div>
      <div className="mt-2">
        <p className="italic">{pokemon.description.replace('\f', ' ')}</p>
      </div>
      <div className="flex justify-between mt-4">
        <button className="bg-gray-300 p-2 rounded">{'< 1025'}</button>
        <button className="bg-gray-300 p-2 rounded">{'0002 >'}</button>
      </div>
    </div>
  );
};

export default PokemonDetails;