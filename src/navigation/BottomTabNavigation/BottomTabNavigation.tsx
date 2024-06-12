import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SvgProps } from 'react-native-svg';

import { getIconByName } from 'src/helpers';
import { COLORS, DIMENSIONS, FONTS } from 'src/theme';

import { Dashboard } from 'src/screens/Dashboard';
import { Forecast } from 'src/screens/Forecast';
import { BottomTabScreen } from '../screens';

const { Navigator, Screen } = createBottomTabNavigator();

type TabOptions = BottomTabScreen.Dashboard | BottomTabScreen.Forecast;

type ReadonlyTabsType = Readonly<{
  [key in TabOptions]: {
    name: string;
    icon: (svgProps: SvgProps) => JSX.Element;
    activeColor: string;
  };
}>;

const Home = getIconByName('home');
const Storm = getIconByName('storm');

const tabLabelMap: ReadonlyTabsType = {
  Dashboard: {
    name: BottomTabScreen.Dashboard,
    icon: (svgProps: React.JSX.IntrinsicAttributes & SvgProps) => <Home {...svgProps} />,
    activeColor: COLORS.yellow,
  },
  Forecast: {
    name: BottomTabScreen.Forecast,
    icon: (svgProps: React.JSX.IntrinsicAttributes & SvgProps) => <Storm {...svgProps} />,
    activeColor: COLORS.yellow,
  },
};

const getLabelForTab = (label: TabOptions) => tabLabelMap[label]?.name;
const getIconForTab = (name: TabOptions) => tabLabelMap[name]?.icon;
const getActiveIconColor = (name: TabOptions) => tabLabelMap[name]?.activeColor;

const getTabIcon = (name: TabOptions, focused: boolean) => {
  const props = {
    height: 35,
    weight: 35,
    fill: getActiveIconColor(name),
  };

  return (
    <View style={styles.tabIconContainer}>
      <View style={{ paddingTop: 10, paddingBottom: focused ? 7 : 5 }}>
        {getIconForTab?.(name)(props)}
      </View>
    </View>
  );
};

const BottomTabNavigation = () => {
  return (
    <Navigator
      screenOptions={({ route }) => {
        return {
          tabBarStyle: {
            ...styles.tabBar,
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 100,
          },
          tabBarLabelStyle: {
            fontFamily: FONTS.YBIMedium,
            fontSize: 16,
          },
          tabBarActiveTintColor: getActiveIconColor(route.name as TabOptions),
          tabBarInactiveTintColor: COLORS.black,
          tabBarIcon: ({ focused }) => getTabIcon(route.name as TabOptions, focused),
          headerShown: false,
          tabBarAccessibilityLabel: getLabelForTab(route.name as TabOptions) + ' Tab',
        };
      }}
    >
      <Screen name={BottomTabScreen.Dashboard} component={Dashboard} />
      <Screen name={BottomTabScreen.Forecast} component={Forecast} />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 96,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: DIMENSIONS.width,
  },
  tabIconContainer: {
    alignItems: 'center',
  },
});

export default BottomTabNavigation;
