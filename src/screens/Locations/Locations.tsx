import React, { useEffect, useState } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { DrawerNavigationState, ParamListBase, useIsFocused } from '@react-navigation/native';
import {
  DrawerDescriptorMap,
  DrawerNavigationHelpers,
} from '@react-navigation/drawer/lib/typescript/src/types';

import { LIST_CITIES } from 'src/constants';
import { LocationBtn } from 'src/components/LocationBtn';
import { Cities } from 'src/components/Cities';
import { getData } from 'src/helpers/asyncStorage';

import { styles } from './styles';

type LocationsProps = {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
};

export const Locations: React.FC<LocationsProps> = (navigation) => {
  const isFocused = useIsFocused();
  const [cities, setCities] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getData(LIST_CITIES);
      setCities(data);
    })();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <LocationBtn />
      <View style={styles.divider} />
      <Text style={styles.drawerLabel}>Locations</Text>
      <ScrollView>
        <Cities cityList={cities} navigation={navigation} />
      </ScrollView>
    </View>
  );
};
