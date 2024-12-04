import AsyncStorage from "@react-native-async-storage/async-storage";

export async function setItemToStorage(accessToken:string) {
    try {
        await AsyncStorage.setItem('accessToken', accessToken);
      } catch (error) {
        console.log(error);
      }
}

export async function getAccessToken() {
  const token = await AsyncStorage.getItem('accessToken');
  return token;
}

export async function removeToken(){
  await AsyncStorage.removeItem('accessToken');
}