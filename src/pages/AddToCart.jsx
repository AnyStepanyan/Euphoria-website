import IncrementDecrement from '../components/IncrementDecrement'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { createUseStyles } from 'react-jss';
import PurpleButtons from '../components/PurpleButtons';
import { Link } from "react-router-dom";
import CartContext  from '../components/Context';
import { useContext } from 'react';
import { database } from "../helpers/db.js";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { ReactComponent as EmptyCartImage } from "../Assets/images/emptyCart.svg";



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
    totalWrapper: {
        justifyContent: 'flex-end',
        width: 280,
        margin: '30px 100px',
        '@media (max-width: 850px)': {
            margin: '30px 10px', 
        }
    },
    total: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 80,
        borderBottom: '1px solid #807D7E',
         marginBottom: 20,
    },

    button: {
        display: 'flex',
        justifyContent: 'center',
        textDecoration: "none",
    },
    select: {
      cursor: 'pointer'
    },
    emptyCartWrapper: {
        margin: 30,
        textAlign: 'center',
        '@media (max-width: 400px)': {
            marginTop: -40, 
        }
    },
    emptyCartTextDiv: {
        color: '#807D7E',
        '@media (max-width: 430px)': {
            marginTop: -50, 
        }
    }
})

function AddToCart() {
    const {cart, setCart, orders, setOrders} = useContext(CartContext)
    const [products, setProducts] = useState([]);
    const [selectedSize, setSelectedSize] = useState('');
    

    const classes = useStyles()

  
    const fetchProducts = async () => {
      await getDocs(collection(database, 'products')).then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProducts(newData);
      });
    };

    useEffect(() => {
        fetchProducts();
      }, []);
 
   let productsForCart = products.filter((product)=>{
        if(cart.includes(product.id)){
            return product
        }
    } )

    let subTotal = productsForCart.reduce((acc,product) => acc + product.price, 0)
    let shippingPrice = subTotal >= 100 || subTotal === 0 ? 0: 5
    let grandTotal = subTotal + shippingPrice

    const deleteProduct = (productId) => {
        return (
          setCart(cart.filter((id) => id !== productId))
        ) 
    }
   
    const handleSelectChange = (selectedSize, product) => {
        let b
            if(orders.length){
            return   orders.map((elem) => {
                if(elem.id === product.id && elem.chosenSize !== selectedSize ){
                    elem.chosenSize = selectedSize
                    return
                 }
                 else if(elem.id === product.id && elem.chosenSize === selectedSize ){
                        return 
             } else if(elem.id !== product.id){
                    setOrders( [...orders, {id: product.id, chosenSize: selectedSize, 
                        name: product.name, price: product.price }])  
                }
               
                })
            } else{
                setOrders([ {id: product.id, chosenSize: selectedSize,
                     name: product.name, price: product.price, }])
            }
            
        
    }

    console.log(orders, 'orders')

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
                            <select className={classes.select} onChange={(e) =>handleSelectChange(e.target.value, product)} >
                                <option value='' selected hidden disabled>Choose Size</option>
                                <option value='XS'>XS</option>
                                <option value='S'>S</option>
                                <option value='M'>M</option>
                                <option value='L'>L</option>
                                <option value='XL'>XL</option>
                            </select>
                        </div>
                    </div>
                    <div className={classes.productDetails2}>
                         <p className={classes.boldFont}>{product.price}</p>
                        <DeleteForeverIcon sx= {{'&:hover': {color: 'blue'}, cursor: 'pointer'}} onClick={() => deleteProduct(product.id)} />
                    </div>
                </div>
          );
        })}   
                
               {cart.length > 0 && <div className={classes.totalWrapper}>
                <div className={classes.total}>
                  <div>
                   <p>Sub Total</p> 
                   <p>Shipping</p>
                   <br></br>
                   <p><b>Grand Total</b></p>
                </div>
                <div>
                   <p>${subTotal.toFixed(2)}</p>
                   <p>${shippingPrice}</p>
                   <br></br>
                   <p><b>${grandTotal.toFixed(2)}</b></p>
                </div>  
                </div>
                
                
                <div className={classes.button}>
                <Link style={{textDecoration: 'none'}}  to="/checkout">  
                    <PurpleButtons   value='Proceed To Checkout'/>
                    </Link>
                    </div>
                </div>} 
            </div>

            {cart.length === 0 && 
            <div className={classes.emptyCartWrapper}>
              <div className={classes.emptyCartImgDiv}>
                <EmptyCartImage className={classes.img}  /> 
                </div> 
                <div className={classes.emptyCartTextDiv}>
                    <p><b>Your cart is empty and sad :(</b></p>
                    <p>Add something to make it happy!</p>
                    <div className={classes.button}>
                <Link style={{textDecoration: 'none'}}  to="/womenProducts">  
                    <PurpleButtons   value='continue shopping'/>
                    </Link>
                    </div>
                </div>
            </div>
            }
        </>

    )
}

export default AddToCart