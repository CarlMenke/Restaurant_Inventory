import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC5zJ0mFsIx8mgM2Dx5YLIuYq4yZ2lDdLM",
  authDomain: "inventory-e69af.firebaseapp.com",
  projectId: "inventory-e69af",
  storageBucket: "inventory-e69af.appspot.com",
  messagingSenderId: "589894823683",
  appId: "1:589894823683:web:c9a9081e317eacfc9cc336",
  measurementId: "G-BGD7ZRP79D"
};


const firebaseApp = initializeApp(firebaseConfig); 
const db = getDatabase(firebaseApp);

export const firebaseAuth = getAuth(firebaseApp);
export const firebaseAnalytics = getAnalytics(firebaseApp);
export { db };