import React, { useEffect, useState } from 'react';
import { ImageBackground, View, ScrollView } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import LottieView from 'lottie-react-native';

import { SomethingWentWrong } from 'src/components/SomethingWentWrong';
import { Payload, useQueryForecast } from 'src/api/useQueryForecast';
import { WeatherDetails } from 'src/components/WeatherDetails';
import { WeatherTitle } from 'src/components/WeatherTitle';
import { getWeather } from 'src/helpers/getWeather';
import { Loader } from 'src/components/Loader';
import { DIMENSIONS } from 'src/theme';

import { styles } from './styles';

export const Dashboard = (props: any) => {
  const [geoCity, setGeoCity] = useState('');
  const [currentCity, setCurrentCity] = useState<Payload | null>(null);
  const { data, isLoading, isError } = useQueryForecast('', 5, geoCity);

  useEffect(() => {
    Geolocation.getCurrentPosition((info) => {
      setGeoCity(`${info.coords.latitude},${info.coords.longitude}`);
    });
  }, []);

  useEffect(() => {
    (async () => {
      setCurrentCity(props.route.params);
    })();
  }, [props.route.params]);

  if (isLoading) {
    return (
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        blurRadius={60}
        source={require('assets/images/bg.png')}
      >
        <Loader />
      </ImageBackground>
    );
  }

  const activeCity = currentCity ? currentCity : data;

  if (!activeCity || isError) {
    return <SomethingWentWrong />;
  }

  return (
    <ImageBackground
      style={styles.container}
      resizeMode="cover"
      blurRadius={60}
      source={require('assets/images/bg.png')}
    >
      <ScrollView>
        <View style={styles.container}>
          <LottieView
            autoPlay
            source={getWeather(activeCity.current.condition.code, activeCity.current.is_day)}
            style={{
              marginTop: 10,
              width: DIMENSIONS.width,
            }}
          />
          <WeatherTitle location={activeCity.location} />
          <WeatherDetails current={activeCity.current} forecast={activeCity.forecast} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
