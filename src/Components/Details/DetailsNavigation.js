// import { Link } from "react-router-dom";
// import { createUseStyles } from "react-jss";
// import { Routes, Route } from "react-router-dom";
// import { Home } from "./Home";

// const useStyles = createUseStyles({
//   navigationBar: {
//     display: "flex",
//     alignItems: "center",
//     marginLeft: 30,
//   },
//   link: {
//     marginRight: 12,
//     color: "#807D7E",
//   },
//   separator: {
//     marginRight: 12,
//     fontWeight: "bold",
//     color: "#807D7E",
//   },
// });

// const DetailsNavigation = () => {
//   const classes = useStyles();

//   return (
//     <>
//       <div className={classes.navigationBar}>
//         <Link to="/" className={classes.link}>
//           Shop
//         </Link>
//         <span className={classes.separator}>&gt;</span>
//         <Link to="/women" className={classes.link}>
//           Women
//         </Link>
//         <span className={classes.separator}>&gt;</span>
//         <Link to="/top" className={classes.link}>
//           Top
//         </Link>
//       </div>

//       <Routes>
//         <Route path="/women" element={<Home />} />
//         <Route path="/men" element={<Home />} />
//         <Route path="/top" element={<Home />} />
//       </Routes>
//     </>
//   );
// };

export default DetailsNavigation;
