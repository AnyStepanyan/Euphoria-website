import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import Login from '../src/components/Authentication/Login';
import SignUp from '../src/components/Authentication/SignUp';
import { AppRoutes } from "./components/AppRoutes";
import  CartContext from "./components/Context";
import NavBar from "../src/layouts/NavBar";
import { getAuth } from "firebase/auth";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import { database } from "./helpers/db.js";

const auth = getAuth();
const user = auth.currentUser;

function App() {
  const [cart, setCart] = useState([])
  const [favorites, setFavorites] = useState([])
  const [orders, setOrders] = useState([])
  const [toggleForm, setToggleForm] = useState(true);
  const [userEmail, setUserEmail] = useState()
  const [cartFireStore, setCartFireStore] = useState([])
  const formMode = () => {
    setToggleForm(!toggleForm);
  }



  

  if (userEmail) {
    
    return (
      <>
       <CartContext.Provider value={{cart, setCart,favorites, 
        setFavorites,orders, setOrders, 
        userEmail, setUserEmail,cartFireStore, setCartFireStore}}>
        <Header />
        <AppRoutes />
        <Footer />
        </CartContext.Provider>
      </> )
  } else {
    return (
      <>
      
      {toggleForm ?
       ( <CartContext.Provider value={{cart, setCart,favorites, 
        setFavorites,orders, setOrders, userEmail, setUserEmail,
        cartFireStore, setCartFireStore}}>
         <Header />
        <Login toggle = {() => formMode()} />
        </CartContext.Provider>) :
       ( <CartContext.Provider value={{cart, setCart,favorites, 
        setFavorites,orders, setOrders, userEmail, setUserEmail,
        cartFireStore, setCartFireStore}}>
        <Header />
        <SignUp toggle = {() => formMode()} />
        <Footer />
        </CartContext.Provider> )}
        <Footer />
        </> )
  }
}

export default App;
