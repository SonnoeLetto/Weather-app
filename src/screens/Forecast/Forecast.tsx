import React, { useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { useIsFocused } from '@react-navigation/native';

import { SomethingWentWrong } from 'src/components/SomethingWentWrong';
import { Payload, useQueryForecast } from 'src/api/useQueryForecast';
import { ForecastList } from 'src/components/ForecastList';
import { CURRENT_CITY } from 'src/constants';

import { getData } from 'src/helpers/asyncStorage';

import { styles } from './styles';

export const Forecast = () => {
  const [geoCity, setGeoCity] = useState('');
  const [currentCity, setCurrentCity] = useState<Payload | null>(null);
  const isFocused = useIsFocused();

  const { data, isLoading, isError } = useQueryForecast('', 5, geoCity);

  useEffect(() => {
    Geolocation.getCurrentPosition((info) => {
      setGeoCity(`${info.coords.latitude},${info.coords.longitude}`);
    });
  }, []);

  useEffect(() => {
    (async () => {
      const city: Payload = await getData(CURRENT_CITY);
      setCurrentCity(city);
    })();
  }, [isFocused]);

  if (isLoading || !data?.current || isError) {
    return <SomethingWentWrong />;
  }

  const activeCity = currentCity ? currentCity : data;

  return (
    <ImageBackground
      style={styles.container}
      resizeMode="cover"
      blurRadius={60}
      source={require('assets/images/bg.png')}
    >
      <SafeAreaView style={styles.container}>
        <ForecastList forecast={activeCity.forecast} />
      </SafeAreaView>
    </ImageBackground>
  );
};
