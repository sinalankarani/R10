import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import styles from './styles';

const Faves = ({data}) => {
  return (
    <SafeAreaView>
      <View>
        <Image source={require('../../assets/images/r10_logo.png')} />
        <Text>Faves</Text>
      </View>
    </SafeAreaView>
  );
};

export default Faves;
