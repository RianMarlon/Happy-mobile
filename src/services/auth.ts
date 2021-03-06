import AsyncStorage from '@react-native-async-storage/async-storage';

import api from './api';

export const TOKEN_KEY = '@happy:user';

export const hasToken = async () => {

  const tokenAsyncStorage = await AsyncStorage.getItem(TOKEN_KEY);
  
  const hasTokenInAsyncStorage = tokenAsyncStorage !== null;

  if (hasTokenInAsyncStorage) {
    return true;
  }

  else {
    return false;
  }
};

export const hasTokenValid = async () => {

  if (hasToken()) {
    const tokenAsyncStorage = await AsyncStorage.getItem(TOKEN_KEY);

    const data = {
      token: tokenAsyncStorage,
    }

    try {
      const response = await api.post('/validate-token', data);
      const { is_valid_token: isValidToken } = response.data;
  
      return isValidToken;
    }

    catch(err) {
      await AsyncStorage.removeItem(TOKEN_KEY);

      return false;
    }
  }

  else {
    return false;
  }
};

export const getToken = async () => {
  const tokenAsyncStorage = await AsyncStorage.getItem(TOKEN_KEY);
  
  const hasTokenInAsyncStorage = tokenAsyncStorage !== null;

  if (hasTokenInAsyncStorage) {
    return tokenAsyncStorage;
  }
};

export const removeToken = async () => {
  await AsyncStorage.removeItem(TOKEN_KEY);
};
