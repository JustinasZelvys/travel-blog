import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-bar">
    <input 
      type="text" 
      placeholder="Search posts..." 
      value={searchQuery} 
      onChange={(e) => setSearchQuery(e.target.value)} 
    />
    <i className="fas fa-search search-icon"></i>
    </div>
  );
};

export default SearchBar;
