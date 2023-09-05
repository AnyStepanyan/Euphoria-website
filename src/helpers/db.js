import { default as fiebaseCompat } from "firebase/compat/app";
// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAFQDeNCWXYVaFmWqeE4QFmaLJjdI5riss",
  authDomain: "euphoria-website-d2bac.firebaseapp.com",
  projectId: "euphoria-website-d2bac",
  storageBucket: "euphoria-website-d2bac.appspot.com",
  messagingSenderId: "580266217242",
  appId: "1:580266217242:web:e9a3157b8b900441c026a3",
};

export const firebase = fiebaseCompat.initializeApp(firebaseConfig);

const auth = getAuth(firebase);
const firestore = firebase.firestore();
const storage = firebase.storage();

export { auth, firestore, storage };
