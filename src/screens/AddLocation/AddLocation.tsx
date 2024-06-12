import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Toast from 'react-native-toast-message';
import _ from 'lodash';

import { Payload, useQueryForecast } from 'src/api/useQueryForecast';
import { BackButton } from 'src/components/BackButton';
import { Loader } from 'src/components/Loader';
import { Button } from 'src/components/Button';

import { getData, storeData } from 'src/helpers/asyncStorage';
import { LIST_CITIES } from 'src/constants';

import { styles } from './style';

export const AddLocation = () => {
  const [errorField, setErrorField] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState('');
  const { data, error } = useQueryForecast(city, 5);
  const navigation = useNavigation();

  const onPressBack = () => {
    navigation.goBack();
  };
  const onPressFetch = async () => {
    setIsLoading(true);
    const citiesData: Payload[] = _.compact(await getData(LIST_CITIES)) ?? [];
    if (
      !citiesData.length ||
      !citiesData?.find((item: Payload) => item?.location.name === data?.location.name)
    ) {
      setErrorField(false);
      storeData(LIST_CITIES, [...citiesData, data]).then(() => {
        setIsLoading(false);
      });
      setCity('');
      navigation.goBack();
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error with API',
        text2: typeof error === 'string' ? error : 'Something went wrong',
      });
      setErrorField(true);
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackButton {...navigation} title="Add Location" onPressButton={onPressBack} />
      <View style={styles.innerContainer}>
        <Text style={styles.titleText}>{`Add city name`}</Text>
        <TextInput
          value={city}
          placeholder="Add city"
          placeholderTextColor={'grey'}
          style={[styles.inputStyle, { marginBottom: errorField ? 0 : 26 }]}
          onChangeText={(text) => setCity(text)}
        />
        {errorField && <Text style={styles.errorText}>City has already added</Text>}
        <Button title="Add Location" onPress={onPressFetch} />
      </View>

      {isLoading && <Loader />}
    </SafeAreaView>
  );
};
