
import React from "react";

const SearchBar = ({ searchTerm, onSearch }) => (
  <input
    type="text"
    placeholder="Search by description..."
    value={searchTerm}
    onChange={(e) => onSearch(e.target.value)}
    className="search-input"
  />
);

export default SearchBar;
