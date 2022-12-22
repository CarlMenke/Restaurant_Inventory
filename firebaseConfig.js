import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC5zJ0mFsIx8mgM2Dx5YLIuYq4yZ2lDdLM",
  authDomain: "inventory-e69af.firebaseapp.com",
  projectId: "inventory-e69af",
  storageBucket: "inventory-e69af.appspot.com",
  messagingSenderId: "589894823683",
  appId: "1:589894823683:web:c9a9081e317eacfc9cc336",
  measurementId: "G-BGD7ZRP79D"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);