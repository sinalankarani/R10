import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import SessionList from '../../components/SessionList';
import styles from './styles';

const Faves = ({navigation, sessions, faveIds}) => {
  return (
    <>
      <View style={styles.container}>
        {sessions.length === 0 && (
          <TouchableOpacity onPress={() => navigation.navigate('Session')}>
            <Text style={styles.text}>
              You don't have any favourite sessions
            </Text>
            <Text style={styles.text}>Go to sessions</Text>
          </TouchableOpacity>
        )}
      </View>
      {sessions.length > 0 && (
        <SessionList
          navigation={navigation}
          sessions={sessions}
          faveIds={faveIds}
        />
      )}
    </>
  );
};

export default Faves;
