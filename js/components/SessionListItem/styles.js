import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Montserrat',
    fontSize: 15,
    fontWeight: '500',
    padding: 7,
  },
  location: {
    fontFamily: 'Montserrat',
    fontSize: 13,
    color: '#999',
    fontWeight: '500',
    padding: 7,
  },
  itemInfo: {
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  faveIcon: {
    alignSelf: 'flex-end',
  },
  faveIconBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
