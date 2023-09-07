import "@firebase/firestore";
import { default as fiebaseCompat } from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFQDeNCWXYVaFmWqeE4QFmaLJjdI5riss",
  authDomain: "euphoria-website-d2bac.firebaseapp.com",
  projectId: "euphoria-website-d2bac",
  storageBucket: "euphoria-website-d2bac.appspot.com",
  messagingSenderId: "580266217242",
  appId: "1:580266217242:web:e9a3157b8b900441c026a3",
};

const fire = fiebaseCompat.initializeApp(firebaseConfig);

export const auth = getAuth(fire);
export const firestore = fire.firestore();
export const storage = fire.storage();

export const database = getFirestore(fire);

export default fire;
