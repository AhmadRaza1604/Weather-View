import axios from 'axios';

const API_KEY = '7bd182598f2e4642a75132035240307'; // Replace with your actual API key
const BASE_URL = 'https://api.weatherapi.com/v1';

export const fetchCurrentWeather = async (location) => {
  try {
    const response = await axios.get(`${BASE_URL}/current.json?key=${API_KEY}&q=${location}`);
    return response.data;
  } catch (error) {
    alert('Error fetching current weather data.');
    console.error('Error fetching current weather data:', error);
    return null;
  }
};

export const fetchForecast = async (location, days = 7) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=${days}`);
    return response.data;
  } catch (error) {
    alert('Error fetching forecast data. Please try again later.');
    console.error('Error fetching forecast data:', error);
    return null;
  }
};
