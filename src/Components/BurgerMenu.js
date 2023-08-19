import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    burger: {
        display: 'none',
        position: 'absolute',
        top: 45,
        left: 10,
        zIndex: 100,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 30,
        height: 18,
        cursor: 'pointer',
        '& span': {
            height: 2,
            width: '80%',
            transform: 'scale(1)',
            backgroundColor: '#807D7E',
        },
        '&::before': {
            content: '""',
            position: 'absolute',
            height: 2,
            width: '100%',
            backgroundColor: '#807D7E',
            transition: 'all 0.3s ease 0s',
            top: 0,
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            height: 2,
            width: '100%',
            backgroundColor: '#807D7E',
            transition: 'all 0.3s ease 0s',
            bottom: 0,
        },
        '@media (max-width: 640px)': {
            display: 'flex'
        }
    },
    closeButton: {
        '& span': {
            transform: 'scale(0)',   
        },
        '&::before': {
            top: '50%',
            transform: 'rotate(-45deg) translate(0, -50%)',
        },
        '&::after': {
            bottom: '50%',
            transform: 'rotate(45deg) translate(0, 50%)',
        },
        '@media (max-width: 640px)': {
            display: 'flex'
        }
    }
})

function BurgerMenu({onClick, isBurgerOpen}) {

    const classes = useStyles()
   
    return (
        <div onClick={onClick} className={`${classes.burger}  ${isBurgerOpen ? classes.closeButton : ''}`} >
            <span></span>
        </div>
    )
}
export default BurgerMenu