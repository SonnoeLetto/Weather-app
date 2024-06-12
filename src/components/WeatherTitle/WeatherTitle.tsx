import React from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';

import { Location } from 'src/api/useQueryForecast';

import { styles } from './styles';

type WeatherTitleProps = {
  location: Location;
};

export const WeatherTitle: React.FC<WeatherTitleProps> = ({ location }) => {
  return (
    <React.Fragment>
      <View style={styles.titleContainer}>
        <Text
          numberOfLines={2}
          style={styles.cityText}
        >{`${location?.name}, ${location?.country}`}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{moment(location.localtime).format('dddd, DD MMMM')}</Text>
      </View>
    </React.Fragment>
  );
};
