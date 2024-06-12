import { API_KEY, BASE_URI } from 'src/constants';

export const ENDPOINTS = {
  forecastEndpoint: (cityName: string, days: number, cityGeo?: string) =>
    `${BASE_URI}/forecast.json?key=${API_KEY}&q=${cityGeo ?? cityName}&days=${days}`,
  locationsEndpoint: (cityName: string) => `${BASE_URI}/search.json?key=${API_KEY}$&q=${cityName}`,
};
