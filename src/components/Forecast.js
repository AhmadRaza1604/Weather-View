import React, { useEffect, useState } from 'react';
import { fetchForecast } from '../utils/api';

const Forecast = ({ location }) => {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const getForecast = async () => {
      const data = await fetchForecast(location);
      setForecast(data);
    };
    getForecast();
  }, [location]);

  if (!forecast) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">7-Days Forecast for {forecast.location.name}</h2>
      <div className="flex  space-x-4 p-4">
        {forecast.forecast.forecastday.map((day) => (
          <div key={day.date} className="forecast-day min-w-[175px] bg-white rounded-lg shadow-md p-4 text-gray-800">
            <p className="text-center font-semibold mb-2">{day.date}</p>
            <div className="flex justify-center mb-2">
              <img src={day.day.condition.icon} alt={day.day.condition.text} />
            </div>
            <p className="text-center text-xl font-bold mb-2">{day.day.avgtemp_c}°C</p>
            <p className="text-center">{day.day.condition.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
