import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Paste your Firebase configuration object here
const firebaseConfig = {
  apiKey: "AIzaSyDD2rFEp7DIXn1g0mDlDzJl-qvem7_BAGU",
  authDomain: "virtual-event-platform-6be83.firebaseapp.com",
  projectId: "virtual-event-platform-6be83",
  storageBucket: "virtual-event-platform-6be83.firebasestorage.app",
  messagingSenderId: "37215415485",
  appId: "1:37215415485:web:2d741674de24f9b1755bd4",
  measurementId: "G-1PCQXEDH4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();