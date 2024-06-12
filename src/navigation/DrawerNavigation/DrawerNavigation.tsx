import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Locations } from 'src/screens/Locations';
import { COLORS } from 'src/theme';

import { DrawerScreen } from '../screens';
import BottomTabNavigation from '../BottomTabNavigation';

export type RootStackParamList = {
  [DrawerScreen.BottomTab]: undefined;
  [DrawerScreen.Locations]: undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;
const { Navigator, Screen } = createDrawerNavigator<RootStackParamList>();

const DrawerNavigation = (): JSX.Element => {
  return (
    <Navigator
      screenOptions={() => ({
        headerShown: true,
        headerStyle: {
          height: 0,
        },
        headerTintColor: COLORS.yellow,
      })}
      drawerContent={(props) => <Locations {...props} />}
    >
      <Screen name={DrawerScreen.BottomTab} component={BottomTabNavigation} />
    </Navigator>
  );
};

export default DrawerNavigation;
