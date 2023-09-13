import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { useState } from "react";
// import Login from './Authentication/Login';
// import SignUp from './Authentication/SignUp';
// import DetailPage from './components/Details/DetailPage'
import { AppRoutes } from "./Components/AppRoutes";
import  CartContext  from "./Components/Context";

function App() {
  const [cart, setCart] = useState([])
  const [favorites, setFavorites] = useState([])
  const [orders, setOrders] = useState([])
  return (
    <>
    {/* <NavBar /> */}
    {/* {toggleForm ? (<Login toggle = {() => formMode()} />) : (<SignUp toggle = {() => formMode()} />)} */}
      <CartContext.Provider value={{cart, setCart,favorites, setFavorites,orders, setOrders}}>
      <Header />
      <AppRoutes />
      <Main />
      <Footer />
      </CartContext.Provider>
    </>
  );
}

export default App;
