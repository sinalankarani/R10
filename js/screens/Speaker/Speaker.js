import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const Speaker = ({speaker, navigation}) => {
  return (
    <View style={styles.background}>
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              style={styles.closeMarker}
              name="close"
              size={25}
              color="white"
            />
          </TouchableOpacity>
          <Text style={styles.aboutSpeaker}>About the Speaker</Text>
        </View>
      </SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: `${speaker.image}`}} />
        <Text style={styles.name}>{speaker.name}</Text>
        <Text style={styles.bio}>{speaker.bio}</Text>

        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`${speaker.url}`).catch(err =>
              console.error('There was a problem, please go back.', err),
            );
          }}>
          <View style={styles.button}>
            <LinearGradient
              colors={['#9963ea', '#8797D6']}
              start={{x: 0.0, y: 1.0}}
              end={{x: 1.0, y: 0.0}}
              style={[
                StyleSheet.absoluteFill,
                {
                  height: '100%',
                  width: 'auto',
                  borderRadius: 50,
                },
              ]}
            />
            <Text style={styles.buttonText}>Read More on Wikipedia</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Speaker;
