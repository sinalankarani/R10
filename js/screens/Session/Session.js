import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const Session = ({
  item,
  navigation,
  addFaveSession,
  removeFaveSession,
  faveIds,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.faveIconBox}>
          <Text style={styles.location}>{item.location}</Text>
          {faveIds.includes(item.id) && (
            <Icon
              style={styles.faveIcon}
              name="heart"
              color="#cf392a"
              size={20}
            />
          )}
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.time}>{moment(item.startTime).format('LT')}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View>
          {item.speaker && (
            <>
              <Text style={styles.presented}>Presented by:</Text>
              <View style={styles.speakerBox}>
                <Image
                  style={styles.image}
                  source={{uri: `${item.speaker.image}`}}
                />

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Speaker', {id: item.speaker.id});
                  }}>
                  <Text style={styles.speaker}>{item.speaker.name}</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </View>

      <View>
        {!faveIds.includes(item.id) ? (
          <TouchableOpacity
            onPress={() => {
              addFaveSession(item.id);
              console.log(item);
            }}>
            <View style={styles.button}>
              <LinearGradient
                colors={['#9963ea', '#8797D6']}
                start={{x: 0.0, y: 1.0}}
                end={{x: 1.0, y: 0.0}}
                style={[
                  StyleSheet.absoluteFill,
                  {height: '100%', width: 'auto', borderRadius: 50},
                ]}
              />
              <Text style={styles.buttonText}>Add to Faves</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              removeFaveSession(item.id);
            }}>
            <View style={styles.button}>
              <LinearGradient
                colors={['#9963ea', '#8797D6']}
                start={{x: 0.0, y: 1.0}}
                end={{x: 1.0, y: 0.0}}
                style={[
                  StyleSheet.absoluteFill,
                  {height: '100%', width: 'auto', borderRadius: 50},
                ]}
              />
              <Text style={styles.buttonText}>Remove from Faves</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Session;
