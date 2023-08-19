import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 21,
        fontWeight: 500,
        margin: {
            left: 87,
        },
        '@media (max-width: 1100px)': {
            margin: { left: 40 }
        },
        '@media (max-width: 640px)': {
            display: 'none',
            flexDirection: 'column',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            height: '100%',
            width: '100%',
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
        }
    },
    navList: {
        display: 'flex',
        columnGap: 40,
        '& li': {
            transition: 'all 300ms ease-in-out',
            listStyle: 'none',
            '& a': {
                textDecoration: 'none',
                color: '#807D7E',
            },
            '& a:hover': {
                color: '#3C4242',
            },
        },
        '@media (max-width: 640px)': {
            flexDirection: 'column',
            rowGap: 30,

            '& li': {
                borderBottom: '2px solid #ffffff',
                padding: 7,
            }
        }
    },
    displayFlex: {
        '@media (max-width: 640px)': {
            display: 'flex',
        }
    }
})

function NavBar({ isBurgerOpen }) {
    const classes = useStyles()

    return (
        <nav className={`${classes.nav}  ${isBurgerOpen ? classes.displayFlex : ''}`}>
            <ul className={classes.navList}>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
            </ul>
        </nav>
    )
}
export default NavBar