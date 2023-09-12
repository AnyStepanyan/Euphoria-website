import Header from '../components/Header'
import Footer from '../components/Footer'
import IncrementDecrement from '../components/IncrementDecrement'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { createUseStyles } from 'react-jss';
import { CartContext } from '../components/Context';
import { useContext } from 'react';
import { database } from "../helpers/db.js";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import {  IconButton } from "@mui/material";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { ReactComponent as EmptyWhishListImage } from "../Assets/images/emptyWhishList.svg";
import PurpleButtons from '../components/PurpleButtons';
import { Link } from "react-router-dom";



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
    },
    emptyWhishtListWrapper: {
      margin: 30,
      textAlign: 'center',
      
  },
  emptyWhishtListTextDiv: {
      color: '#807D7E',
   
  }
})

function WhishList() {
    const {cart, setCart, favorites, setFavorites} = useContext(CartContext)
    const [products, setProducts] = useState([]);
    const classes = useStyles()

    const handleToggleCart = (productId) => {
        setCart((previousToCart) => {
          if (previousToCart.includes(productId)) {
            return previousToCart;
          } else {
            return [...previousToCart, productId];
          }
        });
      };

    const fetchProducts = async () => {
        await getDocs(collection(database, 'products')).then((querySnapshot) => {
          const newData = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setProducts(newData);
        });
      };
   
     let productsForCart = products.filter((product)=>{
          if(favorites.includes(product.id)){
              return product
          }
      } )
    
      useEffect(() => {
        fetchProducts();
      }, []);
  
      const deleteProduct = (productId) => {
          return (
            setFavorites(favorites.filter((id) => id !== productId))
          ) 
      }
  

    return (
        <>
            <div className={classes.addToCartWrapper}>
            {productsForCart.map((product) => {
          return (
            <div className={classes.productsInCart} key={product.id}>
                    <div className={classes.productsDetails}>
                        <div className={classes.imgDiv}>
                            <img
                                src={product.mainImageUrl}
                                alt={product.name}
                                className={classes.img} />
                        </div>
                        <div>
                            <p className={classes.boldFont}>{product.name}</p>
                            <p>color: {product.color[0]}</p>
                        </div>
                    </div>
                    <div className={classes.productDetails2}>
                         <p className={classes.boldFont}>{product.price}</p>
                        <DeleteForeverIcon sx= {{'&:hover': {color: 'blue'}, cursor: 'pointer'}} onClick={() => deleteProduct(product.id)} />
                        <IconButton
                    aria-label="Add to cart"
                    color={cart.includes(product.id) ? "primary" : "default"}
                    onClick={() => handleToggleCart(product.id)}
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                    </div>
                </div>
          );
        })}   
            </div>
            {favorites.length === 0 && 
            <div className={classes.emptyWhishtListWrapper}>
              <div>
                <EmptyWhishListImage className={classes.img}  /> 
                </div> 
                <div >
                  <div className={classes.emptyWhishtListTextDiv}>
                    <p><b>Your wishlist is empty.</b></p>
                    <p>You don’t have any products in the wishlist yet. 
                       You will find a lot
                 of interesting products on our Shop page.</p>
                  </div>
                    
                    <div className={classes.button}>
                <Link  to="/womenProducts">  
                    <PurpleButtons   value='continue shopping'/>
                    </Link>
                    </div>
                </div>
            </div>
            }
            
        </>

    )
}

export default WhishList