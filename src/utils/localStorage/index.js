import AsyncStorage from '@react-native-community/async-storage';

// post data to localstorage
export const storeData = async (key,value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
      // saving error
    }
}

// get data to local storage
export const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if(value !== null) {
        return JSON.parse(value)
      }
    } catch(e) {
      // error reading value
    }
}