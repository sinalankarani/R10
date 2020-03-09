import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import SessionList from '../../components/SessionList';
import styles from './styles';

const Faves = ({navigation, sessions, faveIds}) => {
  return (
    <>
      {sessions.length > 0 && (
        <SessionList
          navigation={navigation}
          sessions={sessions}
          faveIds={faveIds}
        />
      )}
      <View style={styles.container}>
        {sessions.length === 0 && (
          <TouchableOpacity onPress={() => navigation.navigate('Schedule')}>
            <Text style={styles.text}>
              You don't have any favourite sessions
            </Text>
            <Text style={styles.text}>Go to schedule</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default Faves;
