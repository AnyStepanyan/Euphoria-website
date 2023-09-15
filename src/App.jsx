import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { useState } from "react";
import Login from '../src/Components/Authentication/Login';
import SignUp from '../src/Components/Authentication/SignUp';
import DetailPage from '../src/Components/Details/DetailPage'
import { AppRoutes } from "./Components/AppRoutes";
import  CartContext  from "./Components/Context";
import NavBar from "../src/Components/NavBar";
import { getAuth } from "firebase/auth";
const auth = getAuth();
const user = auth.currentUser;

function App() {
  const [cart, setCart] = useState([])
  const [favorites, setFavorites] = useState([])
  const [orders, setOrders] = useState([])
  const [toggleForm, setToggleForm] = useState(true);
  const formMode = () => {
    setToggleForm(!toggleForm);
  }

  if (user) {
    return (
      <>
       <CartContext.Provider value={{cart, setCart,favorites, setFavorites,orders, setOrders}}>
        <Header />
        <AppRoutes />
        <Main />
        <Footer />
        </CartContext.Provider>
      </> )
  } else {
    return (
      <>
      { <NavBar /> }
      {toggleForm ? (<Login toggle = {() => formMode()} />) : (<SignUp toggle = {() => formMode()} />)}
        </> )
  }
}

export default App;
