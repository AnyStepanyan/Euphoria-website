import React from "react";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// import "./product.css";

const Product = ({ product }) => {
  const { name, category, price, image } = product;

  return (
    <div className="product">
      <div className="image-container">
        <img src={`/Pictures/${image}`} alt={name} className="product-image" />
        <div className="product-details">
          <div className="product-category">{category}</div>
          <div className="product-price">{price}</div>
        </div>
        <div className="product-name">{name}</div>
      </div>
    </div>
  );
};

export default Product;
