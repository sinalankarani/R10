import React from 'react';
import {View, Text, Platform} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';

import styles from './styles';

const MapScreen = props => {
  return Platform.OS === 'android' ? (
    <View style={styles.androidSucks}>
      <Text>Get an iPhone dude!</Text>
    </View>
  ) : (
    <MapView
      style={styles.map}
      showsUserLocation={true}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 49.26336,
        longitude: -123.13813,
        latitudeDelta: 0.0142,
        longitudeDelta: 0.0131,
      }}>
      <Marker
        coordinate={{latitude: 49.26336, longitude: -123.13813}}
        title={'Red Academy'}>
        <Callout>
          <Text>Red Academy, Vancouver</Text>
        </Callout>
      </Marker>
    </MapView>
  );
};

export default MapScreen;
