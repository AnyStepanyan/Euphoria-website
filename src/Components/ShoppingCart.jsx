import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";
import { CartContext } from '../components/Context';
import { useContext } from 'react';


function ShoppingCart() {
    const [cart] = useContext(CartContext)

    return (
        <Badge color="primary" badgeContent={cart.length} showZero>
         <Link to="/addToCart">
            <ShoppingCartOutlinedIcon 
            sx={{ fontSize: 28, color: '#807D7E',  marginTop: 0.4, cursor: 'pointer'}}
             />
         </Link>
    </Badge>
    );
  }
  
  export default ShoppingCart;