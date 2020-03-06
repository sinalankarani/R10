import React from 'react';
import {SectionList, View, Text} from 'react-native';
import SessionListItem from '../SessionListItem/SessionListItem';
import moment from 'moment';
import styles from './styles';

const SessionList = ({sessions, navigation, faveIds}) => {
  return (
    <View>
      <SectionList
        sections={sessions}
        renderSectionHeader={({section: {title}}) => (
          <View>
            <Text>{moment(title).format('LT')}</Text>
          </View>
        )}
        renderItem={({item}) => (
          <SessionListItem
            item={item}
            navigation={navigation}
            faveIds={faveIds}
          />
        )}></SectionList>
    </View>
  );
};

export default SessionList;
