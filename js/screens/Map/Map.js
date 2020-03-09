import React from 'react';
import {Text, View, Image, Alert} from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  Polygon,
} from 'react-native-maps';
import styles from './styles';

const MapScreen = props => {
  return (
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
