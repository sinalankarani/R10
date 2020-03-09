import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  location: {
    fontFamily: 'Montserrat',
    fontSize: 15,
    color: '#999',
    fontWeight: '500',
    paddingBottom: 10,
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: 22,
    fontWeight: '500',
    paddingBottom: 10,
  },
  time: {
    fontFamily: 'Montserrat',
    fontSize: 15,
    fontWeight: '500',
    color: '#cf392a',
    paddingBottom: 10,
  },
  description: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '200',
    paddingBottom: 10,
  },
  presented: {
    fontFamily: 'Montserrat',
    fontSize: 15,
    color: '#999',
    fontWeight: '500',
    paddingBottom: 10,
  },
  speakerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    paddingRight: 10,
  },
  speaker: {
    fontFamily: 'Montserrat',
    fontSize: 15,
    fontWeight: '500',
    paddingLeft: 10,
  },
  button: {
    marginTop: 20,
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
    padding: 10,
  },
});

export default styles;
