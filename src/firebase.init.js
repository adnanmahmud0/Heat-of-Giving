// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZiB-Ma44mRNplkFE7D7Wdsd_xN0jSMsU",
  authDomain: "heat-of-giving.firebaseapp.com",
  projectId: "heat-of-giving",
  storageBucket: "heat-of-giving.firebasestorage.app",
  messagingSenderId: "867766809852",
  appId: "1:867766809852:web:01700124dbde6484f0d379"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);