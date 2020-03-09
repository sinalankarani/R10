import React from 'react';
import SessionList from '../../components/SessionList';

const Schedule = ({navigation, sessions, faveIds}) => {
  console.log(sessions);
  return (
    sessions.length > 0 && (
      <SessionList
        navigation={navigation}
        sessions={sessions}
        faveIds={faveIds}
      />
    )
  );
};

export default Schedule;
