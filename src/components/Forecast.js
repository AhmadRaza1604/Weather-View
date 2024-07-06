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
    <div className="mt-10" >
      <h2 className="text-2xl font-semibold text-center mb-6">7-Days Forecast for {forecast.location.name}</h2>
      <div className="flex  space-x-2 p-4">
        {forecast.forecast.forecastday.map((day) => (
          <div key={day.date} style={{backgroundColor:"powderblue"}} className="forecast-day min-w-[180px] bg-white rounded-lg shadow-md p-4 text-gray-800">
            <p className="text-center font-semibold mb-2">{day.date}</p>
            <div className="flex justify-center mb-2">
              <img src={day.day.condition.icon} alt={day.day.condition.text} />
            </div>
            <p className="text-center 1xl font-bold mb-2">{day.day.maxtemp_c}°C / {day.day.mintemp_c}°C</p>
            <p className="text-center 1xl  mb-2 font-bold">{day.day.condition.text}</p>
            <p className="text-center 1xl  mb-2">Humidity: {day.day.avghumidity}%</p>
            <p className="text-center 1xl  mb-2">Precip: {day.day.totalprecip_mm} mm</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
