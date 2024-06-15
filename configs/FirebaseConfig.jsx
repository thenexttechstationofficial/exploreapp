// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfnma9kflXsDRsg7s96VZOgKfKmG20tbE",
  authDomain: "exploreapp-62634.firebaseapp.com",
  projectId: "exploreapp-62634",
  storageBucket: "exploreapp-62634.appspot.com",
  messagingSenderId: "278388057631",
  appId: "1:278388057631:web:c1a0bd26b09ffe691f172a",
  measurementId: "G-6ZGG4VEQML"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);