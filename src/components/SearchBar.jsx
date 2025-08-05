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
    <div className="  flex flex-row gap-4 items-center justify-end w-full ">
      <input
        type="text"
        placeholder="Search Pokemon "
        className="p-2 rounded text-black md:w-[50%] bg-amber-100 outline-none "
        value={search}
        onChange={handleSearch}
      />
      <select
        value={typeFilter}
        onChange={handleTypeChange}
        className="p-2 rounded text-black w-48 bg-amber-100 hidden md:block"
      >
        <option value="">All</option>
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
