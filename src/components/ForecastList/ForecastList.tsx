import React from 'react';
import { FlatList, Text, View } from 'react-native';
import moment from 'moment';
import LottieView from 'lottie-react-native';

import { Forecast, ForecastDay } from 'src/api/useQueryForecast';
import { getWeather } from 'src/helpers/getWeather';
import { DIMENSIONS } from 'src/theme';

import { styles } from './styles';

type ForecastListProps = {
  forecast: Forecast;
};

export const ForecastList: React.FC<ForecastListProps> = ({ forecast }) => {
  const displayDate = (date: string) => {
    const todayDate = moment().endOf('day').format('YYYY-MM-DD');
    if (date === todayDate) {
      return 'Today';
    } else {
      return moment(date).format('dddd');
    }
  };

  const _renderForeCastItem = ({ item }: { item: ForecastDay }) => {
    return (
      <View style={styles.foreCastContainer} key={item.date}>
        <Text style={styles.foreCastTemp}>{Math.ceil(item?.day?.avgtemp_f)}°</Text>
        <LottieView
          autoPlay
          source={getWeather(item.day.condition.code)}
          style={{
            width: 80,
            height: 80,
          }}
        />
        <Text style={styles.foreCastDate}>{displayDate(item?.date)}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={forecast.forecastday}
        renderItem={_renderForeCastItem}
        ItemSeparatorComponent={() => {
          return <View style={{ height: 12 }} />;
        }}
        scrollEnabled
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          maxHeight: DIMENSIONS.height,
        }}
        style={styles.list}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
