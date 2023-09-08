import Header from '../components/Header'
import Footer from '../components/Footer'
import IncrementDecrement from '../components/IncrementDecrement'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    addToCartWrapper: {
        maxWidth: 1440,
        margin: {
            left: 'auto',
            right: 'auto',
            top: 10,
        },
    },
    productsInCart: {
        display: 'flex',
        columnGap: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
         color: '#807D7E',
         margin: '5px 100px',
         padding: '10px 0',
        borderBottom: '1px solid #807D7E',
        '@media (max-width: 850px)': {
            margin: '5px 10px', 
        },
    },
    productsDetails: {
        display: 'flex',
    },
    imgDiv: {
        width: 100,
        marginRight: 5,
    },
    img: {
        width: '100%'
    },
    boldFont: {
        fontWeight: 600,
        fontSize: 16,
    },
    productDetails2: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      columnGap: 30,
      justifyContent: 'center',
      alignItems: 'center',
      '@media (max-width: 560px)': {
        columnGap: 5,
      },
      '@media (max-width: 520px)': {
        gridTemplateColumns: '1fr',
        rowGap: 10,
        alignItems: 'center',
        marginBottom: 23,
      }
    },
    button: {
        display: 'flex',
        justifyContent: 'center'
    }
})

function WhishList() {
    const classes = useStyles()

    return (
        <>
            <div className={classes.addToCartWrapper}>
                <div className={classes.productsInCart}>
                    <div className={classes.productsDetails}>
                        <div className={classes.imgDiv}>
                            <img
                                src='https://firebasestorage.googleapis.com/v0/b/euphoria-website-d2bac.appspot.com/o/womenProducts%2Fwoman01.svg?alt=media&token=2e606760-3cfa-474a-b873-df7e40f83e1e'
                                alt='sdfsddsf'
                                className={classes.img} />
                        </div>
                        <div>
                            <p className={classes.boldFont}>title</p>
                            <p>color: yellow</p>
                            <p>Size: M</p>
                        </div>
                    </div>
                    <div className={classes.productDetails2}>
                         <p className={classes.boldFont}>$29.00</p>
                        <DeleteForeverIcon />
                    </div>
                       
                </div>
            </div>
        </>

    )
}

export default WhishList