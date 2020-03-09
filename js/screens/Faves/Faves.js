import React from 'react';
import {Text, View} from 'react-native';
import SessionList from '../../components/SessionList';
import styles from '../../components/SessionListItem/styles';

const Faves = ({navigation, sessions, faveIds}) => {
  return (
    <View style={styles.container}>
      {sessions.length === 0 && (
        <Text>You don't have any favourite sessions</Text>
      )}
      {sessions.length > 0 && (
        <SessionList
          navigation={navigation}
          sessions={sessions}
          faveIds={faveIds}
        />
      )}
    </View>
  );
};

export default Faves;
