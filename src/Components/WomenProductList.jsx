import React, { useState } from "react";
import fire from "../helpers/db";
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
import ColorFilter from "./ColorFilter";
import Loading from "./Loading";
import { colors } from "../constants/colors";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    alignItems: "flex-start",
  },
  filtersContainer: {
    maxWidth: "300px",
    width: "100%",
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
  max-height: 250px;
  height: 100%;
`;

const firestore = fire.firestore();

const WomenProductList = () => {
  const classes = useStyles();
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

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

  const { run: filterByCategory } = useRequest(
    async ({ selectedCategory, minPrice, maxPrice }) => {
      let productsQuery = firestore.collection("products");

      if (selectedCategory && minPrice && maxPrice) {
        // add where statements for pricem
        productsQuery = productsQuery
          .where("category", "==", selectedCategory)
          .where("minPrice", ">=", minPrice)
          .where("maxPrice", "<=", maxPrice);
      }

      const snapshot = await productsQuery.get();
      const products = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      mutateProductsList(products);
    },
    {
      manual: true,
    }
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterByCategory({ selectedCategory: category });
  };

  const {
    data: productsList,
    loading: productsListIsLoading,
    mutate: mutateProductsList,
  } = useRequest(async () => {
    const snapshot = await firestore
      .collection("products")
      .where("gender", "==", "female")
      .get();
    const result = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return result;
  });

  const { run: onApplyFilter } = useRequest(
    async ({ minPrice, maxPrice }) => {
      // add where statement for category filter
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

  const { run: filterByColor } = useRequest(
    async ({ selectedColor }) => {
      let productsQuery = firestore.collection("products");
      console.log("selectedColor", selectedColor);

      if (selectedColor) {
        productsQuery = productsQuery.where(
          "color",
          "array-contains",
          selectedColor
        );
      }

      const snapshot = await productsQuery.get();
      const products = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log("products", products);
      mutateProductsList(products);
    },
    {
      manual: true,
    }
  );

  const handleColorChange = (color) => {
    setSelectedColor(color);
    filterByColor({ selectedColor: color });
    console.log("col", { selectedColor });
  };

  return (
    <div style={{ backgroundColor: "#F0F0F0" }}>
      <div className={classes.container}>
        <div // Filters container
          style={{ width: "100%", maxWidth: "300px", padding: "7px" }}
        >
          <PriceFilter onApplyFilter={onApplyFilter} />
          <CategoryFilter
            category={selectedCategory}
            setCategory={handleCategoryChange}
            categories={categories}
          />
          <ColorFilter
            color={selectedColor}
            setColor={handleColorChange}
            colors={colors}
          />
        </div>
        <Grid container spacing={2} style={{ padding: "5px" }}>
          {productsListIsLoading ? (
            <Loading />
          ) : (
            productsList.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={3}>
                <RootCard>
                  <div style={{ position: "relative" }}>
                    <MediaImage
                      component="img"
                      image={product.mainImageUrl}
                      alt={product.name}
                    />
                    <IconButton
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        boxSizing: "border-box",
                      }}
                      aria-label="Add to favorites"
                      color={
                        favorites.includes(product.id) ? "primary" : "default"
                      }
                      onClick={() => handleToggleFavorite(product.id)}
                    >
                      <FavoriteIcon />
                    </IconButton>
                  </div>
                  <Content style={{ padding: "5px" }}>
                    <Typography
                      variant="h9"
                      component="div"
                      style={{ marginBottom: "10px" }}
                    >
                      {product.category}
                    </Typography>
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
    </div>
  );
};

export default WomenProductList;
