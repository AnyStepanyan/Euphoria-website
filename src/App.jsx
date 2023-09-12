import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";
// import Login from './Authentication/Login';
// import SignUp from './Authentication/SignUp';
// import DetailPage from './components/Details/DetailPage'
import { AppRoutes } from "./components/AppRoutes";
import { CartContext } from "./components/Context";

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
      <Footer />
      </CartContext.Provider>
    </>
  );
}

export default App;
