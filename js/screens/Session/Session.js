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
    <View>
      <View>
        <View>
          <Text>{item.location}</Text>
          {faveIds.includes(item.id) && (
            <Icon name="heart" color="#cf392a" size={20} />
          )}
        </View>
        <Text>{item.title}</Text>
        <Text>{moment(item.startTime).format('LT')}</Text>
        <Text>{item.description}</Text>
        <View>
          {item.speaker && (
            <>
              <Text>Presented by:</Text>
              <View>
                <Image source={{uri: `${item.speaker.image}`}} />

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Speaker', {id: item.speaker.id});
                  }}>
                  <Text>{item.speaker.name}</Text>
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
            <View>
              <LinearGradient
                colors={['#9963ea', '#8797D6']}
                start={{x: 0.0, y: 1.0}}
                end={{x: 1.0, y: 0.0}}
                style={[
                  StyleSheet.absoluteFill,
                  {height: '100%', width: '25%', borderRadius: 50},
                ]}
              />
              <Text>Add to Faves</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              removeFaveSession(item.id);
            }}>
            <View>
              <Text>Remove from Faves</Text>
              <LinearGradient
                colors={['#9963ea', '#8797D6']}
                start={{x: 0.0, y: 1.0}}
                end={{x: 1.0, y: 0.0}}
                style={[
                  StyleSheet.absoluteFill,
                  {height: '100%', width: '25%', borderRadius: 50},
                ]}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Session;
