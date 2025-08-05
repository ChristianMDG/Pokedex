import { useState, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchTypes = async () => {
      const res = await fetch('https://pokeapi.co/api/v2/type');
      const data = await res.json();
      setTypes(data.results.map(t => t.name));
    };
    fetchTypes();
  }, []);


  const handleSearch = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    onSearch({ search: newSearch, type: typeFilter });
  };


  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setTypeFilter(selectedType);
    onSearch({ search, type: selectedType });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-4 bg-amber-300">
      <input
        type="text"
        placeholder="Rechercher par nom ou numéro"
        className="p-2 rounded text-black w-64"
        value={search}
        onChange={handleSearch}
      />
      <select
        value={typeFilter}
        onChange={handleTypeChange}
        className="p-2 rounded text-black w-48"
      >
        <option value="">Tous les types</option>
        {types.map((type, index) => (
          <option key={index} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;
