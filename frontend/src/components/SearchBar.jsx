import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    const handleClear = () => {
        setSearchTerm('');
        onSearch('');
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search games by title..."
                value={searchTerm}
                onChange={handleChange}
                className="search-input"
            />
            {searchTerm && (
                <button onClick={handleClear} className="clear-btn">
                    ✕
                </button>
            )}
        </div>
    );
}

export default SearchBar;