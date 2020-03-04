import React from 'react';
import {Text, View} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {ALL_SESSIONS} from '../../config/queries';
import Loader from '../Loader';

const SessionListItem = ({title}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

const SessionList = () => {
  const {loading, error, data} = useQuery(ALL_SESSIONS);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <p>Error</p>;
  }
  return <SessionListItem />;
};

export default SessionList;
