import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import SessionList from '../../components/SessionList';

const Faves = ({navigation, sessions, faveIds}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
