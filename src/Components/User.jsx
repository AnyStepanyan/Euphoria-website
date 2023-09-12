import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


function User() {
    const location = useLocation()
    const {pathname} = location
    const splitLocation = pathname.split('/')
    return (
        <Link to="/user"> 
        <PersonOutlineOutlinedIcon sx={{ fontSize: 31, color: `${splitLocation[1] === 'user' ? 'blue': '#807D7E'}`,
          cursor: 'pointer', '&:hover': {color: 'blue'} }} />
          </Link>
    )
}

export default User