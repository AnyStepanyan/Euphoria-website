import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from "react-router-dom";

function Favourite() {
    return (
        <Link to="/whishList"> 
        <FavoriteBorderIcon sx={{ fontSize: 30, color: '#807D7E', cursor: 'pointer' }} />
        </Link>
    );
  }
  
  export default Favourite;
  