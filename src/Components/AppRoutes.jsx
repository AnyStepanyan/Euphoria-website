import { Routes, Route } from "react-router-dom";
import WomenProductList from "./WomenProductList";
import MenProductList from "./MenProductList";
import AddProductPage from "./AddProductPage";
import { Authentication } from "./Authentication/Authentication";
import DetailPage from "./Details/DetailPage";
import Main from "./Main";
import AddToCart from "../pages/AddToCart";
import WhishList from "../pages/WhishList";
import Checkout from "../pages/Checkout";
import UserPage from "./UserPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/womenProducts" element={<WomenProductList />} />
      <Route exact path="/menProducts" element={<MenProductList />} />
      <Route exact path="/addProduct" element={<AddProductPage />} />
      <Route path="/login" element={<Authentication />} />
      <Route path="/addToCart" element={<AddToCart />} />
      <Route path="/whishList" element={<WhishList />} />
      <Route path="/userPage" element={<UserPage />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};
