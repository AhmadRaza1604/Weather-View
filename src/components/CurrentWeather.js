import React, { useEffect, useState } from 'react';
import { fetchCurrentWeather } from '../utils/api';

const CurrentWeather = ({ location }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      const data = await fetchCurrentWeather(location);
      setWeather(data);
    };
    getWeather();
  }, [location]);

  if (!weather) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="flex justify-center mt-10">
      <div className="max-w-sm bg-white rounded-lg shadow-md p-6 text-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-4">Current Weather</h2>
        <h2 className="text-2xl font-semibold text-center mb-4">{weather.location.name}</h2>
        <div className="flex justify-center mb-4">
          <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
        </div>
        <p className="text-center text-4xl font-bold mb-2">{weather.current.temp_c}°C</p>
        <p className="text-center text-1xl font-bold mb-2">Feels Like: {weather.current.feelslike_c}°C</p>
        <p className="text-center text-xl mb-4">{weather.current.condition.text}</p>
        
        <p className="text-center text-xl mb-4">Cloudy: {weather.current.cloud}%</p>
        <div className="flex justify-between">
          <p>Humidity: {weather.current.humidity}% -</p>
          <p>- Wind: {weather.current.wind_kph} kph</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
