import { collection, getDocs } from "firebase/firestore";
import { database } from '../helpers/db.js'
import { useEffect, useState } from 'react'
// import {getStorage, ref, getDownloadURL} from 'firebase/storage'
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    manCategoryWrapper: {    
        maxWidth: 1280,
        margin: 'auto',
        textAlign: 'center',
        '& h2': {
            textAlign: 'left'
        }

    },
    productsWrapper: {
         display: 'grid',
         gridTemplateColumns: 'repeat(4, 1fr)',
         columnGap: 20,
         justifyItems: 'center',
         '@media (max-width: 500px)': {
            columnGap: 3,
         }

    }, 
    product: {
        maxWidth: 274,
        '& img': {
            width: '100%'
        },
        
    }

})


function HomeManCategory() {
    const [menProducts, setMenProducts] = useState([])
    const [menImageURL, setMenImageURL] = useState('')

    const classes = useStyles()

    const fetchPost = async () => {
        await getDocs(collection(database, 'menProducts'))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }))
                setMenProducts(newData)
            })
    }

    // const getImageURL = async (imageName) => {
    //     const storage = getStorage()
    //     const reference = ref(storage, "/menProducts/men01.svg")
    //     await getDownloadURL(reference).then((x) => setMenImageURL(x))
    // }

    useEffect(() => {
        fetchPost()
    }, [])


    return (
        <div className={classes.manCategoryWrapper}>
            <h2>Categories For Men</h2>

            <div className={classes.productsWrapper}>
                {menProducts.map((product) => {
                    return (
                        <div className={classes.product} key={product.name}>
                            <img src={product.image} alt='menimage' />

                            <div>
                                <p>{product.name}</p>
                            </div>
                        </div>
                    )
                })

                }
            </div>

        </div>
    )
}

export default HomeManCategory