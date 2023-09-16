import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useContext } from "react";
import CartContext from "./Context";
import { auth } from '../helpers/db';

export default function Review() {
  const { cart, setCart, orders, setOrders } = useContext(CartContext);

  const products = orders.filter((obj, index) => {
    if (cart.includes(obj.id)) {
      return index === orders.findIndex((o) => obj.id === o.id);
    }
  });

  let total = products.reduce((acc, product) => acc + product.price, 0);
  let shippingPrice = total >= 100 || total === 0 ? 0 : 5;

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={product.name}
              secondary={product.chosenSize}
            />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Shipping" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${shippingPrice}
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${(total + shippingPrice).toFixed(2)}
          </Typography>
        </ListItem>
      </List>
    </>
  );
}
