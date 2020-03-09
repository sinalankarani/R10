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
        <View style={styles.faveIconBox}>
          <Text style={styles.location}>{item.location}</Text>
          {faveIds?.includes(item.id) && (
            <Icon
              style={styles.faveIcon}
              name="heart"
              color="#cf392a"
              size={18}
            />
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default SessionListItem;
