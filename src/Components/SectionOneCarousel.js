import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { ReactComponent as Banner1 } from "../Assets/images/banner1.svg";
import { createUseStyles } from "react-jss";
import ButtonShopNow from "./ButtonShopNow";



const useStyles = createUseStyles({
    carouselWrapper: {
        maxWidth: 1440,
        margin: {
            left: 'auto',
            right: 'auto',
            top: 5,
        },
        '@media (max-width: 500px)': {
           maxWidth: 500,
           height: 350,
           overflow: 'hidden'
        }
     
    },
    slide: {
        position: 'relative',
        '&  div': {
            position: 'absolute',
            width: 439,
            left: 200,
            top: 60,
            margin: 10,
            textAlign: 'left',
            '@media (max-width: 1200px)': {
                width: "36vw",
                left: '12vw',
                top: '5vw',
            },
            '@media (max-width: 500px)': {
                width: 290,
                left: '10%',
                top: '1%',

            }
        },
        '&  p': {
            fontSize: 32,
            color: '#FFFFFF',
            '@media (max-width: 1200px)': {
                fontSize: '2.6vw',
            },
            '@media (max-width: 500px)': {
                fontSize: 20,
            }
        },
        '&  h6': {
            fontSize: 75,
            color: '#FFFFFF',
            fontWeight: 600,
            margin: 0,
            '@media (max-width: 1200px)': {
                fontSize: '6vw',
            },
            '@media (max-width: 500px)': {
                fontSize: 35,
            }
        }
    },
    banner: {
        
            width: '100%',
            height: '100%',
            '@media (max-width: 500px)': {
                width: 1000,
                height:'100%',
                backgroundRepeat: 'no-repeat',
                overflow: 'hidden'
            }
       
 
    }
})

function DemoCarousel() {
    const classes = useStyles()


    return (
        <Carousel
            className={classes.carouselWrapper}
            showArrows={true}
            showStatus={false}
            autoPlay
            infiniteLoop
        >
            <div className={classes.slide}>
                <div>
                    <p>T-shirt / Tops</p>
                    <h6>Summer Value Pack</h6>
                    <p>cool / colorful / comfy</p>
                    <ButtonShopNow />
                </div>

                <Banner1 className={classes.banner} />

            </div>

            <div className={classes.slide}>
                <div>
                    <p>T-shirt / Tops</p>
                    <h6>Summer Value Pack</h6>
                    <p>cool / colorful / comfy</p>
                    <ButtonShopNow />
                </div>

                <Banner1 className={classes.banner} />
            </div>
        </Carousel>
    )
}

export default DemoCarousel