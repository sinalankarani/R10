import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <Image source={require('./assets/images/r10_logo.png')} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
