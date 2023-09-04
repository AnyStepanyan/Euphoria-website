import { createUseStyles } from 'react-jss'
import CloseIcon from '@mui/icons-material/Close';


const useStyles = createUseStyles({
    nav: {
        display: 'none',
        overflow: 'hidden',
        position: 'relative',
        flexDirection: 'column',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        height: '100%',
        width: '100%',
        fontSize: 21,
        fontWeight: 500,
        zIndex: 50,
        overflow: 'auto',
        margin: 0,
        padding: {
            top: 80,
            rigt: 40,
            bottom: 80,
            left: 20
        },
        backgroundColor: '#F6F6F6',
    },
    navList: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: 30,
        '& li': {
            transition: 'all 300ms ease-in-out',
            listStyle: 'none',
            borderBottom: '2px solid #ffffff',
            padding: 7,
            '& a': {
                textDecoration: 'none',
                color: '#807D7E',
            },
            '& a:hover': {
                color: '#3C4242',
            },
        },
    },
    displayFlex: {
        display: 'flex',
    }
})

function NavBarMobile({ onClick, isBurgerOpen }) {
    const classes = useStyles()

    if(isBurgerOpen){
        document.body.style.overflow='hidden'
    }else{
        document.body.style.overflow='unset'
    }

    return (
        <nav className={`${classes.nav}  ${isBurgerOpen ? classes.displayFlex : ''}`}>
            <ul className={classes.navList}>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
            </ul>
            <CloseIcon onClick={onClick} sx={{
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
            }} />
        </nav>
    )
}
export default NavBarMobile