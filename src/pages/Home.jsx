import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import PokemonCard from "../components/PokemonCard";
import PokemonDetails from "../components/PokemonDetails";
import Modal from "../components/Modal"; 
import { getPokemonList, getPokemonDetails } from "../services/pokemonService";
import DarkModeToggle from "../components/DarkModeToggle";
import { useNavigate } from "react-router-dom";
DarkModeToggle
const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 
const navigate = useNavigate();
  useEffect(() => {
    getPokemonList().then((data) => {
      setPokemons(data);
      setFilteredPokemons(data);
    });
  }, []);

  const handleSearch = ({ search, type }) => {
    let filtered = pokemons;

    if (search) {
      filtered = filtered.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (type) {
      fetch(`https://pokeapi.co/api/v2/type/${type}`)
        .then((res) => res.json())
        .then((data) => {
          const filteredByType = data.pokemon.map((p) => p.pokemon.name);
          const finalFiltered = filtered.filter((p) =>
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
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPokemon(null);
  };
  const back = () => {
    setTimeout(() => {
      navigate("/");
    }, 300);
  };

  return (
    <div className=" min-h-screen">
      <nav className="flex flex-row w-full h-20 md:justify-between items-center md:px-25 px-5 md:gap-3 gap-2 anime z-100 fixed bg-white">
        <div className="bg-amber-30 z-100">
          <img
            src="./assets/images/Pok-dex-3-4-2025 1.svg"
            className="md:w-60 w-50 ash "
            onClick={back}
          />
        </div>
        <SearchBar onSearch={handleSearch} />
       <DarkModeToggle />
      </nav>

      <main className="flex w-full h-full  justify-center items-center bg-amber-100">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full p-5 py-8 mt-20 ">
          {filteredPokemons.map((pokemon, index) => (
            <PokemonCard
              key={index}
              pokemon={pokemon}
              onClick={() => handlePokemonClick(pokemon.url)}
            />
          ))}
        </div>
      </main>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedPokemon && <PokemonDetails pokemon={selectedPokemon} />}
      </Modal>
    </div>
  );
};

export default Home;
