import React from 'react';
import './employee.css';

type SearchBarProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

// Allows users to filter the table's data based on the input search query.
const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="searchBar-container">
      <label>Search:</label>
      <input type="text" value={searchQuery} onChange={handleInputChange} />
    </div>
  );
};

export default SearchBar;

