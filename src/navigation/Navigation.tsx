import React from 'react';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { AddLocation } from 'src/screens/AddLocation';

import DrawerNavigation from './DrawerNavigation';
import { NavigationType } from './type';

export type RootStackParamList = {
  [NavigationType.Drawer]: undefined;
  [NavigationType.AddLocation]: undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;
const { Navigator, Screen } = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        <Screen name={NavigationType.Drawer} component={DrawerNavigation} />
        <Screen name={NavigationType.AddLocation} component={AddLocation} />
      </Navigator>
    </NavigationContainer>
  );
};
