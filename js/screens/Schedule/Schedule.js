import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const Schedule = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Schedule</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Session')}>
        <Text>Go to Session</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('Speaker')}>
        <Text>Go to Speaker Modal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Schedule;
