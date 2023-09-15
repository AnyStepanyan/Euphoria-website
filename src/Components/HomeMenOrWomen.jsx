import { useEffect, useState } from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../helpers/db.js";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  manCategoryWrapper: {
    maxWidth: 1280,
    margin: "auto",
    textAlign: "center",
    paddingLeft: 5,
    paddingRight: 5,
    "& h2": {
      textAlign: "left",
    },
  },
  title: {
    display: "flex",
    padding: 15,
    "@media (max-width: 800px)": {
      padding: 0,
      paddingLeft: 7,
    },
    "& div": {
      width: 5,
      height: 27,
      backgroundColor: "#8A33FD",
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
    },
    "& h2": {
      marginTop: 10,
      marginLeft: 10,
    },
  },
  productsWrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    columnGap: 20,
    justifyItems: "center",
    "@media (max-width: 800px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
      columnGap: 5,
    },
  },
  product: {
    maxWidth: 274,
    "& img": {
      width: "100%",
    },
  },
  productInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 5,
    fontWeight: 600,
    fontSize: 12,
  },
  arrowIcon: {
    margin: 6,
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
});

function HomeMenOrWomen({ genderFolder, title, href }) {
  const [products, setProducts] = useState([]);

  const classes = useStyles();

  const fetchProducts = async () => {
    await getDocs(collection(database, genderFolder)).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(newData);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={classes.manCategoryWrapper}>
      <div className={classes.title}>
        <div></div>
        <h2>{title}</h2>
      </div>

      <div className={classes.productsWrapper}>
        {products.map((product) => {
          return (
            <div className={classes.product} key={product.id}>
              <img src={product.image} alt={product.name} />

              <div className={classes.productInfo}>
                <p>{product.name}</p>
                <Link style={{textDecoration: 'none'}}  to={href}>  
                <TrendingFlatIcon className={classes.arrowIcon} />
                    </Link>
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeMenOrWomen;
