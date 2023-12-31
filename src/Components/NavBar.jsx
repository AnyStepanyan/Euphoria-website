import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const useStyles = createUseStyles({
  nav: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 21,
    fontWeight: 500,
    margin: {
      left: 30,
    },
    "@media (max-width: 1100px)": {
      margin: { left: 40 },
    },
    "@media (max-width: 640px)": {
      display: "none",
      flexDirection: "column",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: 50,
      overflow: "auto",
      margin: 0,
      padding: {
        top: 80,
        rigt: 40,
        bottom: 80,
        left: 20,
      },
      backgroundColor: "#F6F6F6",
    },
  },
  navList: {
    display: "flex",
    columnGap: 40,
    "& li": {
      transition: "all 300ms ease-in-out",
      listStyle: "none",
      // "& a": {
      //   textDecoration: "none",
      //   color: "#807D7E",
      // },
      // "& a:hover": {
      //   color: "#3C4242",
      // },
    },
    "@media (max-width: 640px)": {
      flexDirection: "column",
      rowGap: 30,

      "& li": {
        borderBottom: "2px solid #ffffff",
        padding: 7,
      },
    },
  },
  displayFlex: {
    "@media (max-width: 640px)": {
      display: "flex",
    },
  },
  liClass: {
    "& a": {
      textDecoration: "none",
      color: "#807D7E",
    },
    "& a:hover": {
      color: "#3C4242",
    },
  },
  active: {
    "& a": {
      color: "blue",
    },
    "& a:hover": {
      color: "blue",
    },
  },
});

function NavBar({ isBurgerOpen }) {
  const classes = useStyles();

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <nav
      className={`${classes.nav}  ${isBurgerOpen ? classes.displayFlex : ""}`}
    >
      <ul className={classes.navList}>
        <li
          className={`${classes.liClass} ${
            splitLocation[1] === "" ? classes.active : ""
          }`}
        >
          <Link to="/">Shop</Link>
        </li>
        <li
          className={`${classes.liClass} ${
            splitLocation[1] === "menProducts" ? classes.active : ""
          }`}
        >
          <Link to="/menProducts">Men</Link>
        </li>
        <li
          className={`${classes.liClass} ${
            splitLocation[1] === "womenProducts" ? classes.active : ""
          }`}
        >
          <Link to="/womenProducts">Women</Link>
        </li>
        <li
          className={`${classes.liClass} ${
            splitLocation[1] === "addProduct" ? classes.active : ""
          }`}
        >
          <Link to="/addProduct">Add</Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
