import React from 'react';
import {Text, View, Image} from 'react-native';

const About = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image source={require('../../assets/images/r10_logo.png')} />
      <Text>About</Text>
    </View>
  );
};

export default About;
