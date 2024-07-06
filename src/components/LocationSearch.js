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
    <form onSubmit={handleSubmit} className="flex items-center justify-center space-x-1 mt-0 w-full">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter city or zip code"
        className="p-4 w-[90%] border border-gray-300 rounded-l-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="p-5 bg-green-500 text-white font-bold rounded-r-lg shadow-md hover:bg-pink-600 transition duration-300"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default LocationSearch;
