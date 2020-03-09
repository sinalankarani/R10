import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const Faves = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Session');
        }}>
        <Text>Go to session</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Faves;
