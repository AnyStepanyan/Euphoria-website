// import React, { useState, useEffect } from "react";
// import { firebase, storage } from "../helpers/db";
// import "firebase/compat/firestore";
// import "firebase/compat/storage";
// import "./product.css";

// const firestore = firebase.firestore();

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const productsCollection = await firestore.collection("products").get();
//         const productData = [];

//         await Promise.all(
//           productsCollection.docs.map(async (doc) => {
//             const product = doc.data();
//             product.id = doc.id;
//             const imageURL = await storage
//               .ref()
//               .child(`images/${product.FileName}`)
//               .getDownloadURL();
//             product.imageURL = imageURL;
//             productData.push(product);
//           })
//         );

//         setProducts(productData);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="container">
//       {products.map((product) => (
//         <div className="product" key={product.id}>
//           <div className="image-container">
//             <img
//               className="product-image"
//               src={product.imageURL}
//               alt={product.name}
//             />
//             <div className="product-name">{product.name}</div>
//           </div>
//           <div className="product-details">
//             <div className="product-category">{product.category}</div>
//             <div className="product-price">${product.price}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;

// // const WomenProductList = () => {
// //   const [filteredProducts, setFilteredProducts] = useState([]);
// //   const [selectedCategories, setSelectedCategories] = useState([]);
// //   const [allCategories, setAllCategories] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   const database = firebase.firestore();

// //   useEffect(() => {
// //     database.ref("products").on("value", (snapshot) => {
// //       const data = snapshot.val();
// //       const products = Object.values(data);
// //       const categories = Array.from(
// //         new Set(products.map((product) => product.category))
// //       );

// //       setFilteredProducts(products);
// //       setAllCategories(categories);
// //       setLoading(false);
// //     });
// //   }, []);

// //   const handleCategoryFilter = (category) => {
// //     const updatedCategories = selectedCategories.includes(category)
// //       ? selectedCategories.filter((cat) => cat !== category)
// //       : [...selectedCategories, category];

// //     setSelectedCategories(updatedCategories);

// //     if (updatedCategories.length === 0) {
// //       setFilteredProducts(products);
// //     } else {
// //       const filtered = products.filter((product) =>
// //         updatedCategories.includes(product.category)
// //       );
// //       setFilteredProducts(filtered);
// //     }
// //   };

// //   const handlePriceFilter = (minPrice, maxPrice) => {
// //     const filtered = products.filter((product) => {
// //       const price = parseFloat(product.price.replace("$", ""));
// //       return (
// //         (isNaN(minPrice) || price >= parseFloat(minPrice)) &&
// //         (isNaN(maxPrice) || price <= parseFloat(maxPrice))
// //       );
// //     });
// //     setFilteredProducts(filtered);
// //   };

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div>
// //       <h2 style={{ marginLeft: "30px" }}>Women's Catalog</h2>
// //       <div className="horizontal-line">
// //         <div className="container">
// //           <div className="search-container">
// //             <CategoryFilter
// //               categories={allCategories}
// //               onCategoryFilter={handleCategoryFilter}
// //             />
// //             <h3>Price</h3>
// //             <PriceFilter onPriceFilter={handlePriceFilter} />{" "}
// //           </div>
// //           <div className="product-container">
// //             {filteredProducts.map((product) => (
// //               <Product key={product.id} product={product} />
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default WomenProductList;

// // const { data: products, loading: productsAreLoading } = useRequest(
// //   async () => {
// //     const snapshot = await firestore
// //       .collection("products")
// //       // .where("price", ">", 62)
// //       .get();
// //     const result = snapshot.docs.map((doc) => doc.data());
// //     console.log(result);
// //     return result;
// //   }
// // );

// //   </label>
// //   My Products
// //   {/* <div>
// //     {productsAreLoading ? (
// //       <div>Products are loading</div>
// //     ) : (
// //       JSON.stringify(products)
// //     )}
// //     ;
// //   </div> */}
// //   <label>
