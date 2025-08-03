import { useState, useEffect } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa'; 
import { motion } from 'framer-motion'; 

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const res = await fetch('https://pokeapi.co/api/v2/type');
        const data = await res.json();
        const filteredTypes = data.results
          .map(t => t.name)
          .filter(t => t !== 'unknown' && t !== 'shadow');
        setTypes(filteredTypes);
      } catch (error) {
        console.error("Erreur lors de la récupération des types de Pokémon:", error);
      }
    };
    fetchTypes();
  }, []);

  const handleSearch = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    onSearch({ search: newSearch, type: typeFilter });
  };

  const handleClearSearch = () => {
    setSearch('');
    onSearch({ search: '', type: typeFilter });
  };

  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setTypeFilter(selectedType);
    onSearch({ search, type: selectedType });
  };

  return (
    <div className="flex justify-center mb-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex items-center w-full max-w-2xl bg-white rounded-full shadow-lg p-1
                   hover:shadow-xl transition-shadow duration-300 ease-in-out
                   focus-within:ring-2 focus-within:ring-blue-400 focus-within:ring-opacity-75" // Effet au focus
      >
        <FaSearch className="text-gray-400 mx-4 text-lg" />

        <input
          type="text"
          placeholder="Rechercher par nom ou numéro..."
          className="flex-1 bg-transparent outline-none text-gray-800 py-2 pr-2"
          value={search}
          onChange={handleSearch}
        />

        {search && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={handleClearSearch}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full transition-colors duration-200"
            aria-label="Effacer la recherche"
          >
            <FaTimes className="text-sm" />
          </motion.button>
        )}

        <div className="h-8 w-px bg-gray-300 mx-2"></div>

        <div className="relative">
          <select
            value={typeFilter}
            onChange={handleTypeChange}
            className="p-2 pr-8 rounded-full text-black bg-white appearance-none focus:outline-none cursor-pointer
                       hover:bg-gray-50 transition-colors duration-200" 
          >
            <option value="">Type</option>
            {types.map((type, index) => (
              <option key={index} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
          {/* Flèche de menu déroulant personnalisée */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.95 4.95z" />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SearchBar;
