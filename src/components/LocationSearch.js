import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const LocationSearch = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location) {
      onSearch(location);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center space-x-2 mt-4 w-full">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter city or zip code"
        className="p-3 w-[90%] border border-gray-300 rounded-l-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="p-3 bg-green-500 text-white font-semibold rounded-r-lg shadow-md hover:bg-pink-600 transition duration-300"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default LocationSearch;
