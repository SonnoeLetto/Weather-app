import React from 'react';
import { Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

import { DIMENSIONS } from 'src/theme';

import { styles } from './styles';

export const SomethingWentWrong = () => {
  return (
    <View>
      <LottieView
        autoPlay
        source={require('assets/animation/error.json')}
        style={{
          marginTop: 10,
          width: DIMENSIONS.width,
        }}
      />
      <Text style={styles.errorText}>Something went wrong...</Text>
    </View>
  );
};
