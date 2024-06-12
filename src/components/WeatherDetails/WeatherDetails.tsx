import React from 'react';
import { Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

import { Current, Forecast } from 'src/api/useQueryForecast';

import { WeatherSummary } from '../WeatherSummary';
import { styles } from './styles';

type WeatherDetailsProps = {
  current: Current;
  forecast: Forecast;
};

export const WeatherDetails: React.FC<WeatherDetailsProps> = ({ current, forecast }) => {
  return (
    <View style={styles.container}>
      <WeatherSummary current={current} forecast={forecast} />
      <View style={styles.wrapper}>
        <LottieView
          autoPlay
          source={require('assets/animation/wind.json')}
          style={{
            height: 50,
            width: 50,
          }}
        />
        <Text style={styles.text}>{`${current.wind_mph} Mph/h`}</Text>
        <Text style={styles.textSecond}>Wind</Text>
      </View>
      <View style={styles.wrapper}>
        <LottieView
          autoPlay
          source={require('assets/animation/humidity.json')}
          style={{
            height: 50,
            width: 50,
          }}
        />
        <Text style={styles.text}>{`${current.humidity}%`}</Text>
        <Text style={styles.textSecond}>Humidity</Text>
      </View>
      <View style={styles.wrapper}>
        <LottieView
          autoPlay
          source={require('assets/animation/eye1.json')}
          style={{
            height: 50,
            width: 50,
          }}
        />
        <Text style={styles.text}>{`${current.vis_miles} Miles`}</Text>
        <Text style={styles.textSecond}>Visibility</Text>
      </View>
    </View>
  );
};
