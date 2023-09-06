import  "@firebase/firestore";
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAFQDeNCWXYVaFmWqeE4QFmaLJjdI5riss",
    authDomain: "euphoria-website-d2bac.firebaseapp.com",
    projectId: "euphoria-website-d2bac",
    storageBucket: "euphoria-website-d2bac.appspot.com",
    messagingSenderId: "580266217242",
    appId: "1:580266217242:web:e9a3157b8b900441c026a3"
  };
  
  // Initialize Firebase
  const fire  = initializeApp(firebaseConfig);

  export const database = getFirestore(fire);

  export default fire;