import Search from "./Search"
import SearchIcon from "@mui/icons-material/Search";
import User from "./User";
import Favourite from "./Favourite"
import ShoppingCart from "./ShoppingCart"
import NavBar from "./NavBar";
import BurgerMenu from "./BurgerMenu";
import { ReactComponent as Logo } from "../Assets/images/logo.svg";
import { createUseStyles } from 'react-jss';
import { useEffect, useState } from 'react';


const useStyles = createUseStyles({
    headerWrapper: {
        maxWidth: 1440,
        display: 'flex',
        margin: {
            left: 'auto',
            right: 'auto',
            top: 17,
        },
        padding: {
            left: 10,
        },
        justifyContent: 'center',
    },
    logo: {
        minWidth: 93,
        minHeight: 45,
        margin: {
            top: 14,
            left: 5
        },
        cursor: 'pointer',
        '@media (max-width: 640px)': {
            margin: {
                top: 14,
                left: 40
            },
        }
    },
    icons: {
        display: 'flex',
        margin: {
            top: 23,
            right: 20,
            left: 20,
        }
    }
})

function Header() {
    const classes = useStyles()
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);


    const toggleMenu = () => {
        setIsBurgerOpen((open) => !open)
    }

    const toggleSearchButton = () => {
        setIsSearchInputOpen((open) => !open)
    }

    useEffect(() => {
        setIsBurgerOpen(isBurgerOpen)
        setIsSearchInputOpen(isSearchInputOpen)
    }, [isBurgerOpen, isSearchInputOpen])

    return (
        <header>
            <div className={classes.headerWrapper}>
                <BurgerMenu onClick = {toggleMenu} isBurgerOpen={isBurgerOpen}/>
                <Logo className={classes.logo} />
                <NavBar isBurgerOpen={isBurgerOpen} />
                <Search   isSearchInputOpen={isSearchInputOpen} />



                <div className={classes.icons} >
                    <SearchIcon sx={{
                        fontSize: 30, color: 'gray', display: 'none', cursor: 'pointer',
                        '@media (max-width: 960px)': {
                            display: 'flex'
                        }
                    }} onClick = {toggleSearchButton}/>
                    <Favourite />
                    <User />
                    <ShoppingCart />                    
                </div>
            </div>
        </header>
    )
}

export default Header