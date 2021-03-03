import * as firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCaXINAm_M5H41oA27iIwif5upi_4HkwJM",
  authDomain: "sprout-9eb1d.firebaseapp.com",
  projectId: "sprout-9eb1d",
  storageBucket: "sprout-9eb1d.appspot.com",
  messagingSenderId: "812450706171",
  appId: "1:812450706171:web:308f9fa8bb7d958b69b65e",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const firestore = firebase.firestore;

export { db, firestore };
