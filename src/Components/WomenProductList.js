import React, { useState } from "react";
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
import PriceFilter from "./PriceFilter";
import { useRequest } from "ahooks";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
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
  alignitems: center;
  flex: 1 0 auto;
`;

const firestore = firebase.firestore();

const WomenProductList = () => {
  const classes = useStyles();
  const [favorites, setFavorites] = useState([]);

  const handleToggleFavorite = (productId) =>
    setFavorites((previousFavorites) =>
      previousFavorites.includes(productId)
        ? previousFavorites.filter((id) => id !== productId)
        : [...previousFavorites, productId]
    );

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
      <PriceFilter onApplyFilter={onApplyFilter} />
      <Grid container spacing={2}>
        {productsListIsLoading ? (
          <div>Loading ...</div>
        ) : (
          productsList.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4}>
              <RootCard>
                <MediaImage
                  component="img"
                  image={product.imageUrl}
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
