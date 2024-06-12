import React from 'react';
import { Text, View } from 'react-native';

import { Current, Forecast } from 'src/api/useQueryForecast';

import { styles } from './styles';

type WeatherSummaryProps = {
  current: Current;
  forecast: Forecast;
};

export const WeatherSummary: React.FC<WeatherSummaryProps> = ({ current, forecast }) => {
  const day = forecast.forecastday[0].day;

  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.tempText}>{`${Math.ceil(current?.temp_f)}°`}</Text>

      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.summaryText}>
          {`Now it's feels like +${Math.ceil(current?.feelslike_f)}°, actully +${Math.ceil(
            current?.temp_f,
          )}°`}
        </Text>
      </View>
      <Text style={styles.summaryText}>
        {`the temprature is felt in the range from +${Math.ceil(day.mintemp_f)}° to +${Math.ceil(
          day.maxtemp_f,
        )}°`}
      </Text>
    </View>
  );
};
