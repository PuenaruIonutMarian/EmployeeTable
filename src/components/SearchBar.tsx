import '../styles/employee.css';

/**
 * Props for the SearchBar component.
 * @typedef {Object} SearchBarProps
 * @property {string} searchQuery - The current search query string.
 * @property {function(string): void} setSearchQuery - Callback function to handle search query changes. Receives the new search query string as an argument, update the search query state.
 */
type SearchBarProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

/**
 * SearchBar is a React component that provides a text input for users to enter search queries.
 * It displays the current search query and updates it as the user types.
 * 
 * @param {SearchBarProps} props - The props for the component.
 * @param {string} props.searchQuery - The current search query string.
 * @param {function(string): void} props.setSearchQuery - Function to update the search query.
 * @returns {JSX.Element} The JSX for the SearchBar component.
 */
const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  /**
   * Handles the change event for the search input, updating the search query state.
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
   */
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
