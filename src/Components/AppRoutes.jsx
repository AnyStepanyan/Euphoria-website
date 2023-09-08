import { Routes, Route } from "react-router-dom";
import WomenProductList from "./WomenProductList";
import AddProductPage from "./AddProductPage";
import { Authentication } from "./Authentication/Authentication";
import DetailPage from "./Details/DetailPage";
import Main from "./Main";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/womenProducts" element={<WomenProductList />} />
      <Route exact path="/addProduct" element={<AddProductPage />} />
      <Route path="/login" element={<Authentication />} />
      <Route path="/detailpage" element={<DetailPage />} />
    </Routes>
  );
};
