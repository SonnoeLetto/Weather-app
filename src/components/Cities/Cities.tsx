import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { getData, storeData } from 'src/helpers/asyncStorage';
import { CURRENT_CITY, CURRENT_CITY_INDEX } from 'src/constants';
import { BottomTabScreen } from 'src/navigation/screens';
import { COLORS } from 'src/theme';

import { styles } from './styles';

type CitiesProps = {
  cityList: Array<any>;
  navigation: any;
};

export const Cities: React.FC<CitiesProps> = ({ cityList, navigation }) => {
  const [selectedCity, setSelectedCity] = useState(0);
  useEffect(() => {
    (async () => {
      if (!selectedCity) {
        const index = await getData(CURRENT_CITY_INDEX);
        setSelectedCity(index);
      }
    })();
  }, [selectedCity]);

  return cityList?.map((item, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          setSelectedCity(index);
          storeData(CURRENT_CITY_INDEX, index);
          storeData(CURRENT_CITY, item);
          navigation.navigation.navigate(BottomTabScreen.Dashboard, item);
        }}
        style={[
          styles.cityContainer,
          {
            borderWidth: selectedCity === index ? 3 : 0,
            borderColor: selectedCity === index ? COLORS.black : COLORS.yellow,
          },
        ]}
      >
        <Text style={[styles.cityText]}>{item?.location?.name}</Text>
      </TouchableOpacity>
    );
  });
};
