import React, { useState, useEffect } from "react";
import { firebase } from "../helpers/db";
import "firebase/compat/firestore";
import { styled } from "@mui/system";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PriceFilter from "./PriceFilter";
import { useRequest } from "ahooks";
import { createUseStyles } from "react-jss";
import CategoryFilter from "./CategoryFilter";
import { categories } from "../constants/categories";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    alignItems: "flex-start",
  },
  filtersContainer: {
    width: "25%",
  },
});

const RootCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const MediaImage = styled(CardMedia)`
  display: flex;
  flex: 1 0 auto;
  marginbottom: ${(props) => props.theme.spacing(1)};
`;

const Content = styled(CardContent)`
  object-fit: contain;
  object-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 auto;
`;

const firestore = firebase.firestore();

const WomenProductList = () => {
  const classes = useStyles();
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);

  const handleToggleFavorite = (productId) =>
    setFavorites((previousFavorites) =>
      previousFavorites.includes(productId)
        ? previousFavorites.filter((id) => id !== productId)
        : [...previousFavorites, productId]
    );

  const handleToggleCart = (productId) => {
    setCart((previousToCart) => {
      if (previousToCart.includes(productId)) {
        return previousToCart;
      } else {
        return [...previousToCart, productId];
      }
    });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      let query = firestore.collection("products");

      if (selectedCategory !== "") {
        console.log("selectedCategory:", selectedCategory);
        query = query.where("category", "==", selectedCategory);
      }

      try {
        const snapshot = await query.get();
        const productsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("result:", productsData);
        setProducts(productsData);
      } catch (error) {
        console.error("product add error:", error);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const {
    data: productsList,
    loading: productsListIsLoading,
    mutate: mutateProductsList,
  } = useRequest(async () => {
    const snapshot = await firestore.collection("products").get();
    const result = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return result;
  });

  const { run: onApplyFilter } = useRequest(
    async ({ minPrice, maxPrice }) => {
      const snapshot = await firestore
        .collection("products")
        .where("price", ">=", minPrice)
        .where("price", "<=", maxPrice)
        .get();

      const result = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      mutateProductsList(result);
    },
    {
      manual: true,
    }
  );

  return (
    <div className={classes.container}>
      <div className={classes.filtersContainer}>
        <PriceFilter onApplyFilter={onApplyFilter} />
        <CategoryFilter
          category={selectedCategory}
          setCategory={handleCategoryChange}
          categories={categories}
        />
      </div>
      <Grid container spacing={2}>
        {productsListIsLoading ? (
          <div>Loading ...</div>
        ) : (
          productsList.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={3}>
              <RootCard>
                <MediaImage
                  component="img"
                  image={product.mainImageUrl}
                  alt={product.name}
                />
                <Content>
                  <Typography variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.description}
                  </Typography>
                  <Typography variant="body1" color="textPrimary">
                    Price: ${product.price}
                  </Typography>
                  <IconButton
                    aria-label="Add to favorites"
                    color={
                      favorites.includes(product.id) ? "primary" : "default"
                    }
                    onClick={() => handleToggleFavorite(product.id)}
                  >
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton
                    aria-label="Add to cart"
                    color={cart.includes(product.id) ? "primary" : "default"}
                    onClick={() => handleToggleCart(product.id)}
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </Content>
              </RootCard>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default WomenProductList;
