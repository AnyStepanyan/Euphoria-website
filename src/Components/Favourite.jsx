import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Favourite() {
    const location = useLocation()
    const {pathname} = location
    const splitLocation = pathname.split('/')

    return (
        <Link to="/whishList"> 
        <FavoriteBorderIcon sx={{ fontSize: 30, color: `${splitLocation[1] === 'whishList' ? 'blue': '#807D7E'}`, 
        cursor: 'pointer', '&:hover': {color: 'blue'} }} />
        </Link>
    );
  }
  
  export default Favourite;
  