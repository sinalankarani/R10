import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabNavScreens from './BottomTabNav';
import SpeakerModal from '../screens/Speaker';

const RootStack = createStackNavigator();

const RootStackScreens = props => (
  <RootStack.Navigator headerMode="none" mode="modal">
    <RootStack.Screen name="BottomTab" component={BottomTabNavScreens} />
    <RootStack.Screen name="Speaker" component={SpeakerModal} />
  </RootStack.Navigator>
);

export default RootStackScreens;
