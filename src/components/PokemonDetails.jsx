import React, { useState, useEffect } from 'react';

const TYPE_COLORS = {
  grass: 'bg-green-500',
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  poison: 'bg-purple-500',
  bug: 'bg-lime-500',
  flying: 'bg-sky-400',
  psychic: 'bg-pink-500',
  ice: 'bg-cyan-400',
  rock: 'bg-yellow-700',
  ground: 'bg-yellow-800',
  electric: 'bg-yellow-400',
  normal: 'bg-gray-400',
  fighting: 'bg-red-600',
  fairy: 'bg-pink-300',
  steel: 'bg-gray-500',
  dragon: 'bg-indigo-700',
  dark: 'bg-gray-800',
  ghost: 'bg-purple-700',
};

const PokemonDetails = ({ pokemon }) => {
  const [description, setDescription] = useState('');
  const [evolutionChain, setEvolutionChain] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const speciesRes = await fetch(pokemon.species.url);
        const speciesData = await speciesRes.json();

        const flavorTextEntry = speciesData.flavor_text_entries.find(
          entry => entry.language.name === 'fr'
        ) || speciesData.flavor_text_entries.find(
          entry => entry.language.name === 'en'
        );
        setDescription(flavorTextEntry ? flavorTextEntry.flavor_text.replace('\f', ' ') : 'Description non disponible.');

        const evolutionRes = await fetch(speciesData.evolution_chain.url);
        const evolutionData = await evolutionRes.json();
        setEvolutionChain(evolutionData.chain);
      } catch (error) {
        console.error("Erreur lors de la récupération des données supplémentaires:", error);
      }
    };
    fetchData();
  }, [pokemon.species.url]); 

  const renderEvolution = (chain) => {
    const evolutions = [];
    let currentEvolution = chain;

    while (currentEvolution) {
      const id = currentEvolution.species.url.split('/').filter(Boolean).pop();
      evolutions.push(
        <div key={id} className="flex flex-col items-center">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
            alt={currentEvolution.species.name}
            className="w-16 h-16"
          />
          <span className="text-sm capitalize mt-1">{currentEvolution.species.name}</span>
        </div>
      );
      if (currentEvolution.evolves_to.length > 0) {
        evolutions.push(<span key={`arrow-${id}`} className="mx-2 text-xl">→</span>);
        currentEvolution = currentEvolution.evolves_to[0];
      } else {
        currentEvolution = null;
      }
    }
    return evolutions;
  };
  
  // Table de faiblesses plus complète
  const typeChart = {
    normal: ['fighting'],
    fire: ['water', 'ground', 'rock'],
    water: ['electric', 'grass'],
    grass: ['fire', 'ice', 'poison', 'flying', 'bug'],
    electric: ['ground'],
    ice: ['fire', 'fighting', 'rock', 'steel'],
    fighting: ['flying', 'psychic', 'fairy'],
    poison: ['ground', 'psychic'],
    ground: ['water', 'grass', 'ice'],
    flying: ['electric', 'ice', 'rock'],
    psychic: ['bug', 'ghost', 'dark'],
    bug: ['fire', 'flying', 'rock'],
    rock: ['water', 'grass', 'fighting', 'ground', 'steel'],
    ghost: ['ghost', 'dark'],
    dragon: ['ice', 'dragon', 'fairy'],
    steel: ['fire', 'fighting', 'ground'],
    dark: ['fighting', 'bug', 'fairy'],
    fairy: ['poison', 'steel'],
  };

  const getWeaknesses = (types) => {
    const weaknesses = new Set();
    types.forEach(type =>
      typeChart[type.type.name]?.forEach(w => weaknesses.add(w))
    );
    return Array.from(weaknesses);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl text-black max-w-lg mx-auto overflow-y-auto max-h-[85vh]">
      
      <h2 className="text-3xl font-extrabold capitalize text-center mb-2 text-gray-800">
        {pokemon.name} <span className="text-gray-500 font-semibold">#{String(pokemon.id).padStart(3, '0')}</span>
      </h2>

      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        alt={pokemon.name}
        className="mx-auto w-48 h-48 object-contain mb-4 animate-fadeIn"
      />

      <div className="flex justify-center gap-2 mb-4">
        {pokemon.types.map(t => (
          <span
            key={t.type.name}
            className={`text-sm font-semibold px-4 py-2 rounded-full text-white ${TYPE_COLORS[t.type.name] || 'bg-gray-400'}`}
          >
            {t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)}
          </span>
        ))}
      </div>
      <p className="text-center italic text-gray-600 mb-4">{description}</p>
      
      <div className="grid grid-cols-2 gap-4 text-sm mb-6 bg-gray-100 p-4 rounded-lg">
        <div><strong>Height:</strong> {pokemon.height / 10} m</div>
        <div><strong>Weight:</strong> {pokemon.weight / 10} kg</div>
        <div><strong>Health:</strong> <span className="font-bold">{pokemon.stats[0].base_stat}</span> HP</div>
        <div><strong>Abilities:</strong> {pokemon.abilities.map(a => a.ability.name).join(', ')}</div>
      </div>
      
      <div className="mb-6">
        <h3 className="font-bold mb-2 text-gray-800 text-lg">Faiblesses</h3>
        <div className="flex flex-wrap gap-2">
          {getWeaknesses(pokemon.types).map(w => (
            <span
              key={w}
              className={`text-sm font-medium px-3 py-1 rounded-full text-white ${TYPE_COLORS[w] || 'bg-gray-400'}`}
            >
              {w.charAt(0).toUpperCase() + w.slice(1)}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-bold mb-2 text-gray-800 text-lg">Chaîne d'évolution</h3>
        <div className="flex items-center justify-center gap-2">
          {renderEvolution(evolutionChain)}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;