import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { getIconByName } from 'src/helpers';
import { COLORS } from 'src/theme';
import { NavigationProps, NavigationType } from 'src/navigation';

import { styles } from './styles';

export const LocationBtn = () => {
  const navigation = useNavigation<NavigationProps>();

  const Plus = getIconByName('plus');

  return (
    <TouchableOpacity
      style={styles.addContainer}
      onPress={() => navigation.navigate(NavigationType.AddLocation)}
    >
      <Text style={[styles.drawerLabel, { color: COLORS.white, marginLeft: 12 }]}>
        Add Location
      </Text>
      <Plus width={26} height={26} color={COLORS.white} fill={COLORS.white} />
    </TouchableOpacity>
  );
};
