import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
  },
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    height: '80%',
    width: '90%',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
  },
  aboutSpeaker: {
    color: 'white',
    fontSize: 15,
    paddingLeft: '25%',
    fontFamily: 'Montserrat',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 10,
  },
  name: {
    fontSize: 30,
    margin: 10,
    fontFamily: 'Montserrat',
  },
  bio: {
    fontFamily: 'Montserrat',
    fontWeight: '200',
    fontSize: 15,
  },
  button: {
    height: 40,
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontFamily: 'Montserrat',
    padding: 10,
    fontWeight: '500',
    fontSize: 15,
    color: 'white',
  },
  closeMarker: {
    alignSelf: 'flex-start',
    paddingLeft: 10,
  },
});

export default styles;
