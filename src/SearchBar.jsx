// components/SearchBar.jsx

const SearchBar = ({ searchTerm, onSearch }) => (
  <input
    type="text"
    placeholder="Search by description..."
    value={searchTerm}
    onChange={(e) => onSearch(e.target.value)}
    className="border p-2 mb-4 w-full"
  />
);

export default SearchBar;
