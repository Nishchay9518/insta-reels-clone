// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDpFHrrIBRbWgEKtSTIaIoOkXdkZwa3PrE",
    authDomain: "ig-reels-da461.firebaseapp.com",
    projectId: "ig-reels-da461",
    storageBucket: "ig-reels-da461.appspot.com",
    messagingSenderId: "724550046471",
    appId: "1:724550046471:web:1b215e8d1af7e2159daba2",
    measurementId: "G-JBFDDH71Z5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;