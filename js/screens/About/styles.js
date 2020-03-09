import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: '100%',
    paddingBottom: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: '#e6e6e6',
    alignItems: 'center',
  },
  header: {
    textAlign: 'left',
    padding: 10,
    fontSize: 24,
    fontFamily: 'Montserrat',
  },
  text: {
    padding: 10,
  },
  copyright: {
    fontSize: 16,
    borderTopWidth: 2,
    fontWeight: '300',
    alignSelf: 'flex-start',
    padding: 10,
  },
});

export default styles;
