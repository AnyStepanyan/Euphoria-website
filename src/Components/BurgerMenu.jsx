import MenuIcon from '@mui/icons-material/Menu';


function BurgerMenu({onClick, isBurgerOpen}) {

   
    return (
<MenuIcon  onClick={onClick} sx={{display: 'none',
        position: 'absolute',
        top: 35,
        left: 7,
        right: 15,
        zIndex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 35,
        height: 33,
        color: '#807D7E',
        cursor: 'pointer',
        '@media (max-width: 640px)': {
            display: 'flex'
        }}} />
    )
}
export default BurgerMenu