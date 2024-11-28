// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzBSy9H6F9mDQ83tYVLdhNw_T3fkgz2SY",
  authDomain: "project-a6d9b.firebaseapp.com",
  databaseURL: "https://project-a6d9b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-a6d9b",
  storageBucket: "project-a6d9b.firebasestorage.app",
  messagingSenderId: "177859685656",
  appId: "1:177859685656:web:c54319c2f8b806788a826d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Use `initializeAuth` with AsyncStorage for persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// Initialize Firestore
const db = getFirestore(app);

export { auth, db, app };
