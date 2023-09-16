import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

function LogOutIcon({onClick}) {

    return (
        <Link to="/" > 
        <LogoutIcon onClick={onClick} sx={{ fontSize: 31, color: '#807D7E',
          cursor: 'pointer', '&:hover': {color: 'blue'} }} 
          />
          </Link>
    )
}

export default LogOutIcon