import AsyncStorage from '@react-native-community/async-storage';

export const createFave = async faveId => {
  try {
    return await AsyncStorage.setItem(
      `${faveId}`,
      JSON.stringify({id: faveId, fave_on: new Date()}),
    );
  } catch (e) {
    throw e;
  }
};

export const deleteFave = async faveId => {
  try {
    return await AsyncStorage.removeItem(`${faveId}`);
  } catch (e) {
    throw e;
  }
};

export const queryFaves = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const allStores = await AsyncStorage.multiGet(keys);
    return allStores.filter(store => store[1].includes('fave_on'));
  } catch (e) {
    throw e;
  }
};
