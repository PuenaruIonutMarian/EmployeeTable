import '../styles/employee.css';

type SearchBarProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="searchBar-container">
      <label htmlFor="search-input">Search:</label>
      <input
        id="search-input" 
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        aria-label="Search"
      />
    </div>
  );
};

export default SearchBar;
