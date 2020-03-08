import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const SessionListItem = ({item, navigation, faveIds}) => {
  return (
    <TouchableHighlight
      onPress={() => {
        navigation.navigate('Session', {item, navigation});
      }}>
      <View style={styles.itemInfo}>
        <Text style={styles.title}>{item.title}</Text>
        <View>
          <Text style={styles.location}>{item.location}</Text>
          {faveIds?.includes(item.id) && (
            <Icon name="heart" color="#cf392a" size={22} />
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default SessionListItem;
