import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Login from "../src/components/Authentication/Login";
import SignUp from "../src/components/Authentication/SignUp";
import { AppRoutes } from "./components/AppRoutes";
import CartContext from "./components/Context";
import NavBar from "./components/NavBar";
import { useUser } from "./hooks/useUser";

function App() {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [orders, setOrders] = useState([]);
  const [toggleForm, setToggleForm] = useState(true);

  const formMode = () => {
    setToggleForm(!toggleForm);
  };

  const { user, loading: userIsLoading } = useUser();

  if (userIsLoading) return <div>Loading...</div>;

  if (user) {
    return (
      <>
        <CartContext.Provider
          value={{ cart, setCart, favorites, setFavorites, orders, setOrders }}
        >
          <Header />
          <AppRoutes />
          <Main />
          <Footer />
        </CartContext.Provider>
      </>
    );
  }

  return (
    <>
      {<NavBar />}
      {toggleForm ? (
        <Login toggle={() => formMode()} />
      ) : (
        <SignUp toggle={() => formMode()} />
      )}
    </>
  );
}

export default App;
