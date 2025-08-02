import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import PokemonCard from '../components/PokemonCard';
import PokemonDetails from '../components/PokemonDetails';
import { getPokemonList, getPokemonDetails } from '../services/pokemonService';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    getPokemonList().then(data => {
      setPokemons(data);
      setFilteredPokemons(data);
    });
  }, []);

 const handleSearch = ({ search, type }) => {
  let filtered = pokemons;

  if (search) {
    filtered = filtered.filter(pokemon =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (type) {
    fetch(`https://pokeapi.co/api/v2/type/${type}`)
      .then(res => res.json())
      .then(data => {
        const filteredByType = data.pokemon.map(p => p.pokemon.name);
        const finalFiltered = filtered.filter(p =>
          filteredByType.includes(p.name)
        );
        setFilteredPokemons(finalFiltered);
      });
  } else {
    setFilteredPokemons(filtered);
  }
};


  const handlePokemonClick = async (url) => {
    const details = await getPokemonDetails(url);
    setSelectedPokemon(details);
  };

  return (
    <div className="bg-pokedex-gray min-h-screen p-4">
      <h1 className="text-4xl font-bold text-white text-center mb-4">Pokédex</h1>
      <SearchBar onSearch={handleSearch} />
      <main className='flex w-full h-full'>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[70%]">
        {filteredPokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} onClick={() => handlePokemonClick(pokemon.url)} />
        ))}
      </div>
      <div>{selectedPokemon && <PokemonDetails pokemon={selectedPokemon} />}</div>
      </main>
     
     
    </div>
  );
};

export default Home;