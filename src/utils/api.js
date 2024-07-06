import axios from 'axios';

const API_KEY = '7bd182598f2e4642a75132035240307'; // Replace with your actual API key
const BASE_URL = 'https://api.weatherapi.com/v1';

export const fetchCurrentWeather = async (location) => {
  const response = await axios.get(`${BASE_URL}/current.json?key=${API_KEY}&q=${location}`);
  return response.data;
};

export const fetchForecast = async (location, days = 7) => {
  const response = await axios.get(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=${days}`);
  return response.data;
};
