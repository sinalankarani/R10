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
      <View>
        <Text>{item.title}</Text>
        <View>
          <Text>{item.location}</Text>
          {faveIds?.includes(item.id) && (
            <Icon name="heart" color="#cf392a" size={20} />
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default SessionListItem;
