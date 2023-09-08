// import { createUseStyles } from "react-jss";
// import slider from "../../Assets/images/Slider.png";
// import Button from "@mui/material/Button";
// // import rectangle13 from "../../Assets/images/Rectangle 13.svg";
// import StarRatingComponent from "react-star-rating-component";
// import ProductData from "./ProductData";
// import DetailsNavigation from "./DetailsNavigation";
// import { useState } from "react";
// import { v4 } from "uuid";

// const useStyles = createUseStyles({
//   section: {
//     width: "100%",
//     height: "100vh",
//     display: "flex",
//   },
//   left: {
//     backgroundColor: "#F6F6F6",
//     width: "50%",
//     height: "100vh",
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   slider: {
//     marginLeft: 90,
//     marginTop: 160,
//   },
//   girl: {
//     height: "100vh",
//     // borderRadius: "0%"
//   },
//   right: {
//     width: "50%",
//     height: "100vh",
//     "& p": {
//       marginLeft: 40,
//       marginTop: 20,
//       color: "GrayText",
//     },
//     "& h1": {
//       marginLeft: 45,
//       marginTop: 20,
//     },
//   },
//   innerDiv: {
//     width: 320,
//   },
//   detailsNavigation: {
//     marginLeft: 15,
//     marginTop: 30,
//   },

//   starRatingComponent: {
//     fontSize: 30,
//   },
//   rating: {
//     color: "black",
//     width: "100vh",
//     marginLeft: 40,
//     display: "flex",
//     "& p": {
//       marginTop: 6,
//       marginLeft: 20,
//       fontSize: 24,
//     },
//   },
//   size: {
//     width: "100vh",
//     marginLeft: 40,
//     marginTop: 20,
//     "& button": {
//       height: 40,
//       width: 40,
//       marginLeft: 6,
//       marginRight: 8,
//       borderRadius: 12,
//       border: "2px solid #BEBCBD",
//       transition: "all 0.5s",
//       cursor: "pointer",
//       "&:hover": {
//         backgroundColor: "black",
//         color: "white",
//         transition: "all 0.5s",
//       },
//     },
//     "& p": {
//       marginLeft: 8,
//       fontSize: 20,
//       marginBottom: 20,
//       color: "black",
//     },
//   },
//   color: {
//     width: "100vh",
//     height: 90,
//     marginLeft: 40,
//     marginTop: 20,
//     "& button": {
//       height: 30,
//       width: 30,
//       marginLeft: 12,
//       marginRight: 8,
//       borderRadius: "50%",
//       border: "0px",
//       cursor: "pointer",
//     },
//     "& p": {
//       marginLeft: 10,
//       fontSize: 20,
//       marginBottom: 20,
//       marginTop: 40,
//       color: "black",
//     },
//   },
//   buttonBlock: {
//     width: "100vh",
//     height: 80,
//     marginLeft: 40,
//     marginTop: 20,
//   },
//   addButton: {
//     backgroundColor: "#8A33FD",
//     height: 50,
//     width: 200,
//     marginLeft: 12,
//     marginRight: 8,
//     borderRadius: 10,
//     border: "0px",
//     color: "white",
//     cursor: "pointer",
//   },
//   priceButton: {
//     height: 50,
//     width: 140,
//     marginLeft: 12,
//     marginRight: 8,
//     borderRadius: 10,
//     border: "12px",
//     color: "black",
//   },
// });
// //onClick-i hamar stanalu enq es producti id
// const product = ProductData[0];

// export const SectionUp = () => {
//   const classes = useStyles();

//   const productDetails = product.details[0];
//   const [selectedColor, setSelectedColor] = useState(productDetails);
//   const [selectedImage, setSelectedImage] = useState(productDetails.images[0]);
//   const [rating, setRating] = useState(product.rating);
//   const [selectedSize, setSelectedSize] = useState(productDetails.sizes[0]);

//   return (
//     <section className={classes.section}>
//       <div className={classes.left}>
//         <div className={classes.slider}>
//           <img src={slider} alt="" />
//         </div>
//         <div>
//           <img
//             className={classes.girl}
//             src={selectedImage}
//             alt={product.title}
//           />
//         </div>
//       </div>
//       <div className={classes.right}>
//         <div className={classes.detailsNavigation}>
//           <DetailsNavigation />
//         </div>
//         <div className={classes.innerDiv}>
//           <h1>{product.title}</h1>
//           <div className={classes.rating}>
//             <StarRatingComponent className={classes.starRatingComponent} />
//             <p>{product.rating}</p>
//           </div>
//           <div className={classes.size}>
//             <p>
//               <b>Select Size</b>
//             </p>
//             {selectedColor.sizes.map((size) => (
//               <button key={size}>{size}</button>
//             ))}
//           </div>
//           <div className={classes.color}>
//             <p>
//               <b>Colors Available</b>
//             </p>
//             {product.details.map((detail) => (
//               <button key={v4()} style={{ backgroundColor: detail.color }} />
//             ))}
//           </div>
//         </div>
//         <div className={classes.buttonBlock}>
//           <button className={classes.addButton}>Add to card</button>
//           <button className={classes.priceButton}>{`$${product.price}`}</button>
//         </div>
//       </div>
//     </section>
//   );
// };