import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
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

const Drawer = createDrawerNavigator();
const DrawerNav = props => (
  <Drawer.Navigator>
    <Drawer.Screen name="Schedule" component={ScheduleStackScreens} />
    <Drawer.Screen name="Maps" component={MapStackScreens} />
    <Drawer.Screen name="Faves" component={FaveStackScreens} />
    <Drawer.Screen name="Session" component={AboutStackScreens} />
  </Drawer.Navigator>
);

export default DrawerNav;
