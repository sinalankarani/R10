import React from 'react';
import SessionList from '../../components/SessionList';

const Schedule = ({navigation, sessions}) => {
  return (
    sessions.length > 0 && (
      <SessionList navigation={navigation} sessions={sessions} />
    )
  );
};

export default Schedule;
