import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAP3dThefg1AaS0oC4958gMtJIodorKSIs",
  authDomain: "newloginscreen-ace71.firebaseapp.com",
  projectId: "newloginscreen-ace71",
  storageBucket: "newloginscreen-ace71.appspot.com",
  messagingSenderId: "453017656577",
  appId: "1:453017656577:web:cdcdb69713cca94f7e4f00"
};

export const firebase = initializeApp(firebaseConfig);
export const auth = initializeAuth(firebase, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
