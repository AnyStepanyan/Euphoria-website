import React, { useContext, useState } from "react";
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
import ColorFilter from "./ColorFilter";
import { categories } from "../constants/categories";
import CartContext from "./Context";
import { colors } from "../constants/colors";

const useStyles = createUseStyles({
  container: {
    maxWidth: 1440,
    display: "flex",
    alignItems: "flex-start",
    marginTop: 20,
    justifyContent: "center",
    margin: {
      left: "auto",
      right: "auto",
      top: 17,
    },
  },
  filtersContainer: {
    width: "25%",
  },
  loading: {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translateY(-20%) translateX(-50%)",
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
  marginbottom: ${(props) => props.theme.spacing(1)};
`;

const Content = styled(CardContent)`
  object-fit: contain;
  object-position: center;
  display: flex;
  flex-direction: column;
  justifyContent: "space-between",
  align-items: center;
`;

const firestore = fire.firestore();

const WomenProductList = () => {
  const { cart, setCart, favorites, setFavorites } = useContext(CartContext);

  const classes = useStyles();

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
    async ({ selectedCategory }) => {
      let productsQuery = firestore
        .collection("products")
        .where("gender", "==", "female");

      if (selectedCategory) {
        productsQuery = productsQuery.where("category", "==", selectedCategory);
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

  const handleColorChange = (color) => {
    setSelectedColor(color);
    filterByColor({ selectedColor: color });
  };

  const { run: filterByColor } = useRequest(
    async ({ selectedColor }) => {
      let productsQuery = firestore
        .collection("products")
        .where("gender", "==", "female");

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

      mutateProductsList(products);
    },
    {
      manual: true,
    }
  );

  const { run: onApplyFilter } = useRequest(
    async ({ minPrice, maxPrice }) => {
      const snapshot = await firestore
        .collection("products")
        .where("gender", "==", "female")
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
      <div style={{ width: "100%", maxWidth: "300px", padding: "7px" }}>
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
      <Grid container spacing={2}>
        {productsListIsLoading ? (
          <div className={classes.loading}>Loading ...</div>
        ) : (
          productsList.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={3}>
              <RootCard>
                <MediaImage
                  component="img"
                  image={product.mainImageUrl}
                  alt={product.name}
                />
                <Content sx={{ flexGrow: 1, justifyContent: "space-between" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="h6" lineHeight={1.1}>
                      {product.name}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      textAlign={"center"}
                    >
                      Price: ${product.price}
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
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
                        color={
                          cart.includes(product.id) ? "primary" : "default"
                        }
                        onClick={() => handleToggleCart(product.id)}
                      >
                        <ShoppingCartIcon />
                      </IconButton>
                    </div>
                  </div>
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