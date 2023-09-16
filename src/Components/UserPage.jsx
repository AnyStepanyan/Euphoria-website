import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import User from "./User";
import Favourite from "./Favourite"
import ShoppingCart from "./ShoppingCart"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import LogOutIcon from './LogOutIcon';
import CartContext from "./Context";
import { useContext } from 'react';


export default function UserPage() {
    const {cart, setCart, userEmail, setUserEmail} = useContext(CartContext)
    const handleLogOut = () => {
      setCart([]) 
      setUserEmail(localStorage.removeItem('user'))
    }

  return (
    <div style={{ display: 'flex', maxWidth: 1440, justifyContent: 'flex-start',
    margin:'auto'}}>
    <List sx={{ bgcolor: 'background.paper', textAlign: 'center', }}>
      <ListItem>
            <User />
        <ListItemText sx={{marginLeft: 2}} secondary={JSON.parse(userEmail).email}  />
      </ListItem>
      <ListItem>
            <Favourite />
        <ListItemText sx={{marginLeft: 2}} secondary="WishList"  />
      </ListItem>
      <ListItem>
            <ShoppingCart />
        <ListItemText sx={{marginLeft: 2}} secondary="Shopping Cart"  />
      </ListItem>
      <ListItem>
            <LogOutIcon onClick={handleLogOut} />
        <ListItemText sx={{marginLeft: 2}} secondary="Log Out"  />
      </ListItem>
    </List>
    </div>
  );
}
