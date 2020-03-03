import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNav from './navigation';
import RootStackScreens from './navigation';

export default class App extends Component {
  render() {
    return (
      // <ApolloProvider client={client}>
      <NavigationContainer>
        <RootNav />
      </NavigationContainer>
      // </ApolloProvider>
    );
  }
}
