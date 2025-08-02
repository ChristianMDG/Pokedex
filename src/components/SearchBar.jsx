import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        placeholder="name or number"
        className="p-2 rounded w-1/2 text-black"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;