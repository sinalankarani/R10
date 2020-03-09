import React from 'react';
import {Text, View, Image} from 'react-native';
import CodeOfConduct from '../../components/CodeOfConduct';
import styles from './styles';

const About = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../../assets/images/r10_logo.png')} />
      </View>
      <View style={styles.text}>
        <Text>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
        <Text style={styles.header}>Date &amp; Venue</Text>
        <Text style={styles.text}>
          The R10 conference will take place on Saturday December 8, 2020 in
          Vancouver, BC.
        </Text>
        <Text style={styles.header}>Code of Conduct</Text>
        {data.map(item => (
          <CodeOfConduct item={item} key={item.id} />
        ))}
      </View>
      <Text style={styles.copyright}>&copy; RED Academy 2020</Text>
    </View>
  );
};

export default About;
