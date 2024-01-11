// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf9kg4Xn4k5PKvEUXhtWNunDMWPFmNXls",
  authDomain: "who-went-to-gym.firebaseapp.com",
  projectId: "who-went-to-gym",
  storageBucket: "who-went-to-gym.appspot.com",
  messagingSenderId: "767351817771",
  appId: "1:767351817771:web:00da844b1fcb6beae48c6e",
  measurementId: "G-PD8EYN2V6K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();
export const storage = getStorage(app);

export { analytics, db, auth };
