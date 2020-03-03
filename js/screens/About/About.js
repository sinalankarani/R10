import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import styles from './styles';

const About = ({data}) => {
  return (
    <ScrollView>
      <View>
        <Image source={require('../../assets/images/r10_logo.png')} />
      </View>
    </ScrollView>
  );
};

export default About;
