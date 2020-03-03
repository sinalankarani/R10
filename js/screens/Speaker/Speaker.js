import React from 'react';
import {Text, View, Image} from 'react-native';

const Speaker = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image source={require('../../assets/images/r10_logo.png')} />
      <Text>Speaker</Text>
    </View>
  );
};

export default Speaker;
