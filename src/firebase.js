import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjzpvF5YSp5Cm3pGA6-MTkixMK-ZLyWD0",
  authDomain: "linkedin-clone-cyberrie.firebaseapp.com",
  projectId: "linkedin-clone-cyberrie",
  storageBucket: "linkedin-clone-cyberrie.appspot.com",
  messagingSenderId: "583112469115",
  appId: "1:583112469115:web:300a172deeebec8c4410de",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
