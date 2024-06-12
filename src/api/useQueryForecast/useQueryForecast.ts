import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Toast from 'react-native-toast-message';

import { ENDPOINTS } from '../endpoints';
import { QueryKeys } from '../queryKeys';

export type Condition = {
  code: number;
  icon: string;
  text: string;
};

export type Astro = {
  is_moon_up: number;
  is_sun_up: number;
  moon_illumination: string;
  moon_phase: string;
  moonrise: string;
  moonset: string;
  sunrise: string;
  sunset: string;
};

export type Day = {
  avghumidity: number;
  avgtemp_c: number;
  avgtemp_f: number;
  avgvis_km: number;
  avgvis_miles: number;
  condition: Condition;
  daily_chance_of_rain: number;
  daily_chance_of_snow: number;
  daily_will_it_rain: number;
  daily_will_it_snow: number;
  maxtemp_c: number;
  maxtemp_f: number;
  maxwind_kph: number;
  maxwind_mph: number;
  mintemp_c: number;
  mintemp_f: number;
  totalprecip_in: number;
  totalprecip_mm: number;
  totalsnow_cm: number;
  uv: number;
};

export type ForecastDay = {
  astro: Astro;
  date: string;
  date_epoch: number;
  day: Day;
  hour: [];
};

export type Forecast = {
  forecastday: ForecastDay[];
};

export type Current = {
  cloud: number;
  condition: Condition;
  feelslike_c: number;
  feelslike_f: number;
  gust_kph: number;
  gust_mph: number;
  humidity: number;
  is_day: number;
  last_updated: string;
  last_updated_epoch: number;
  precip_in: number;
  precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  temp_c: number;
  temp_f: number;
  uv: number;
  vis_km: number;
  vis_miles: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
};

export type Location = {
  country: string;
  lat: number;
  localtime: string;
  localtime_epoch: number;
  lon: number;
  name: string;
  region: string;
  tz_id: string;
};

export type Payload = {
  forecast: Forecast;
  current: Current;
  location: Location;
};

const fetchForecast = async (cityName: string, days: number, cityGeo?: string) => {
  try {
    const data: Promise<Payload> = axios
      .get(ENDPOINTS.forecastEndpoint(cityName, days, cityGeo))
      .then((res) => res.data);
    return data;
  } catch (err) {
    Toast.show({
      type: 'error',
      text1: 'Error with API',
      text2: typeof err === 'string' ? err : 'Something went wrong',
    });
    throw err;
  }
};

export const useQueryForecast = (
  cityName: string,
  days: number,
  cityGeo?: string,
  enabled?: boolean,
  refetchOnWindowFocus?: boolean,
) => {
  const { data, error, isLoading, isFetching, isError, refetch } = useQuery({
    queryKey: [QueryKeys.Forecast, cityName, days, cityGeo],
    queryFn: () => fetchForecast(cityName, days, cityGeo),
    enabled,
    refetchOnWindowFocus,
  });

  return {
    data,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  };
};
