import React, { useState } from 'react';
import CurrentWeather from './CurrentWeather';

const WeatherComparison = () => {
  const [locations, setLocations] = useState([]);
  const [input, setInput] = useState('');

  const addLocation = (e) => {
    e.preventDefault();
    if (input) {
      setLocations([...locations, input]);
      setInput('');
    }
  };

  return (
    <div className="weather-comparison">
      <form onSubmit={addLocation} className="location-search">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter city or zip code"
          className="p-2 border rounded"
        />
        <button type="submit" className="p-2 ml-2 bg-blue-500 text-white rounded">Add</button>
      </form>
      <div className="comparison-list">
        {locations.map((location, index) => (
          <CurrentWeather key={index} location={location} />
        ))}
      </div>
    </div>
  );
};

export default WeatherComparison;
