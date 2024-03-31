// src/components/SearchBar.js
const SearchBar = ({ onSearch }) => (
    <input
      type="text"
      placeholder="Search by name..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
  
  export default SearchBar;
  