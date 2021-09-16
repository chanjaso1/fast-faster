// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebase from "firebase";
import "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlRPOm-N6KwRY8J-TFrA2F5sKe1BQN2IQ",
  authDomain: "ass2-de510.firebaseapp.com",
  projectId: "ass2-de510",
  storageBucket: "ass2-de510.appspot.com",
  messagingSenderId: "854043785229",
  appId: "1:854043785229:web:06b18a8dc79cd9e8fcfd44",
  measurementId: "G-YTWRJS2C64"
};

// Initialize Firebase

let app;
//   export default function firebase () {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    //   }
    }
    
    const dbh = firebase.firestore(app);
    export default Firebase;
    
    //   dbh.collection("test").doc("testDoc").set({
    //     a : "dog",
    //     b : "busy-bee"
    //   });
  