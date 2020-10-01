// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCxKgyf5u5Rnn8Q3dcTV6SWktaZsNVTHyI",
    authDomain: "goblintrade.firebaseapp.com",
    databaseURL: "https://goblintrade.firebaseio.com",
    projectId: "goblintrade",
    storageBucket: "goblintrade.appspot.com",
    messagingSenderId: "723918642634",
    appId: "1:723918642634:web:9c52e6c07618e721148333"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;