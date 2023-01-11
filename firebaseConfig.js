import firebase from 'firebase';
import '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC5zJ0mFsIx8mgM2Dx5YLIuYq4yZ2lDdLM",
  authDomain: "inventory-e69af.firebaseapp.com",
  projectId: "inventory-e69af",
  storageBucket: "inventory-e69af.appspot.com",
  messagingSenderId: "589894823683",
  appId: "1:589894823683:web:c9a9081e317eacfc9cc336",
  measurementId: "G-BGD7ZRP79D"
};


firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();