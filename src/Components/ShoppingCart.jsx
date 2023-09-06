import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';

function ShoppingCart() {
    return (
        <Badge color="primary" badgeContent={0} showZero>
        <ShoppingCartOutlinedIcon sx={{ fontSize: 28, color: '#807D7E',  marginTop: 0.4, cursor: 'pointer'}} />
    </Badge>
    );
  }
  
  export default ShoppingCart;