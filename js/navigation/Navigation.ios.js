import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Schedule from '../screens/Schedule';
import Session from '../screens/Session';
import MapScreen from '../screens/Map';
import About from '../screens/About';
import Faves from '../screens/Faves';
import {sharedScreenOptions} from './config';

const ScheduleStack = createStackNavigator();
const ScheduleStackScreens = props => (
  <ScheduleStack.Navigator screenOptions={sharedScreenOptions}>
    <ScheduleStack.Screen name="Schedule" component={Schedule} />
    <ScheduleStack.Screen name="Session" component={Session} />
  </ScheduleStack.Navigator>
);

const MapStack = createStackNavigator();
const MapStackScreens = props => (
  <MapStack.Navigator screenOptions={sharedScreenOptions}>
    <MapStack.Screen name="Maps" component={MapScreen} />
  </MapStack.Navigator>
);

const FaveStack = createStackNavigator();
const FaveStackScreens = props => (
  <FaveStack.Navigator
    initialRouteName="Faves"
    screenOptions={sharedScreenOptions}>
    <FaveStack.Screen name="Faves" component={Faves} />
    <FaveStack.Screen name="Session" component={Session} />
  </FaveStack.Navigator>
);
const AboutStack = createStackNavigator();
const AboutStackScreens = props => (
  <AboutStack.Navigator screenOptions={sharedScreenOptions}>
    <AboutStack.Screen name="About" component={About} />
  </AboutStack.Navigator>
);

const BottomTabNav = createBottomTabNavigator();
const BottomTabNavScreens = props => (
  <BottomTabNav.Navigator
    tabBarOptions={{
      activeTintColor: 'white',
      inactiveTintColor: '#999',
      labelStyle: {fontSize: 10, fontFamily: 'Montserrat'},
      style: {
        backgroundColor: 'black',
      },
    }}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        if (route.name === 'Schedule') {
          iconName = focused ? 'calendar' : 'calendar-blank-outline';
        } else if (route.name === 'Faves') {
          iconName = focused ? 'heart' : 'heart-outline';
        } else if (route.name === 'Maps') {
          iconName = focused ? 'map' : 'map-outline';
        } else if (route.name === 'About') {
          iconName = focused ? 'information' : 'information-outline';
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}>
    <BottomTabNav.Screen name="Schedule" component={ScheduleStackScreens} />
    <BottomTabNav.Screen name="Maps" component={MapStackScreens} />
    <BottomTabNav.Screen name="Faves" component={FaveStackScreens} />
    <BottomTabNav.Screen name="About" component={AboutStackScreens} />
  </BottomTabNav.Navigator>
);

export default BottomTabNavScreens;
