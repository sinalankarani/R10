import React, {Component} from 'react';
import Map from './Map';
import {SafeAreaView, ActivityIndicator} from 'react-native';
class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Map />;
  }
}

export default MapContainer;
