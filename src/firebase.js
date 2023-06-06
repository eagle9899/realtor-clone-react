// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCabvUlrZp_RNCU0foiSivT32TEWR0t1_U",
  authDomain: "realtor-537dd.firebaseapp.com",
  projectId: "realtor-537dd",
  storageBucket: "realtor-537dd.appspot.com",
  messagingSenderId: "227597112515",
  appId: "1:227597112515:web:94a523052d578529537e76",
  measurementId: "G-EW6NDVKMP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();