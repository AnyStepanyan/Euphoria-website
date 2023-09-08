import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";


function ShoppingCart() {
    return (
        <Badge color="primary" badgeContent={0} showZero>
         <Link to="/addToCart">
            <ShoppingCartOutlinedIcon 
            sx={{ fontSize: 28, color: '#807D7E',  marginTop: 0.4, cursor: 'pointer'}}
             />
         </Link>
    </Badge>
    );
  }
  
  export default ShoppingCart;