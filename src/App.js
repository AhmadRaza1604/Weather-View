import React, { useState } from 'react';
import CurrentWeather from './components/CurrentWeather';
import LocationSearch from './components/LocationSearch';
import Forecast from './components/Forecast';
import WeatherComparison from './components/WeatherComparison';
import './styles/index.css';
import logo from './utils/Logo.webp';

const App = () => {
  const [location, setLocation] = useState('Lahore');

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center space-x-4 mb-8">
        <img src={logo} alt="Weather Logo" className="h-12 w-12" />
        <h2 className="text-4xl font-bold" style={{fontFamily:"cursive", color:"#298096"}}>Weather View </h2>
      </div>
      <LocationSearch onSearch={setLocation} />
      <CurrentWeather location={location} />
      <Forecast location={location} />
    </div>
  );
};

export default App;
