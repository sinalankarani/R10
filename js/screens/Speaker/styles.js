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
    justifyContent: 'center',
  },
  aboutSpeaker: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 40,
    fontSize: 20,
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
  },
  button: {
    height: 40,
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    padding: 10,
    fontWeight: '500',
    fontSize: 16,
    color: 'white',
  },
  closeMarker: {
    position: 'absolute',
    top: 0,
    left: 15,
  },
});

export default styles;
