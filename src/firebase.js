import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBN7zhXJQlqZm_k50ybfNhzx30vE5N6wuU",
    authDomain: "clone-39633.firebaseapp.com",
    databaseURL: "https://clone-39633.firebaseio.com",
    projectId: "clone-39633",
    storageBucket: "clone-39633.appspot.com",
    messagingSenderId: "656354275876",
    appId: "1:656354275876:web:72dff44a49b17d3125deb1",
    measurementId: "G-M9QSQVZCXV"
  });

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};