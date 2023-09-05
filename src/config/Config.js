import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAFQDeNCWXYVaFmWqeE4QFmaLJjdI5riss",
  authDomain: "euphoria-website-d2bac.firebaseapp.com",
  projectId: "euphoria-website-d2bac",
  storageBucket: "euphoria-website-d2bac.appspot.com",
  messagingSenderId: "580266217242",
  appId: "1:580266217242:web:e9a3157b8b900441c026a3",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
