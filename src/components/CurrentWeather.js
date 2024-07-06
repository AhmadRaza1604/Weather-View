import React, { useEffect, useState } from 'react';
import { fetchCurrentWeather } from '../utils/api';

const CurrentWeather = ({ location }) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      const data = await fetchCurrentWeather(location, setError);
      if (data) setWeather(data);
    };
    getWeather();
  }, [location]);

  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;
  if (!weather) return <div className="text-center mt-10">Loading...</div>;

  const localtime = new Date(weather.location.localtime);
  const timeString = localtime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

  return (
    <div className="flex justify-center mt-10">
      <div className="max-w-4xl bg-white rounded-lg shadow-md p-9 m-5 text-gray-800" style={{ backgroundColor: "springgreen" }}>
        <h2 className="text-3xl font-semibold text-center mb-4" style={{color:"white", marginLeft:"-36px", fontFamily:"monospace"}}>Current Weather</h2>
        <div className="flex">
          <div className="flex-shrink-0">
            <img src={weather.current.condition.icon} alt={weather.current.condition.text} className="h-32 w-32" />
          </div>
          <div className="ml-9">
            <h2 className="text-2xl font-semibold">{weather.location.name}, {weather.location.country}</h2>
            <h2 className="text-1xl font-semibold">Local Time: {timeString}</h2>
            <p className="text-4xl font-bold">{weather.current.temp_c}°C</p>
            <p className="text-1xl font-bold">Feels Like: {weather.current.feelslike_c}°C</p>
            <p className="text-xl">{weather.current.condition.text}</p>
            <p className="text-xl">Cloudy: {weather.current.cloud}%</p>
            <div className="flex justify-center mt-4">
              <p>Humidity: {weather.current.humidity}% -</p>
              <p>- Wind: {weather.current.wind_kph} kph {weather.current.wind_dir}° -</p>
              <p>- Precipitation: {weather.current.precip_mm} mm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
