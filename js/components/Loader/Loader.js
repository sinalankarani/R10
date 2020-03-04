import React from 'react';
import {ActivityIndicator} from 'react-native';
import styles from './styles';

export default Loader = () => {
  return (
    <ActivityIndicator style={styles.loader} animating={true} size="large" />
  );
};
