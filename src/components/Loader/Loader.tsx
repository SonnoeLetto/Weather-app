import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { COLORS } from 'src/theme';
import { styles } from './styles';

export const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.black} />
    </View>
  );
};
