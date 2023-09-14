import { ReactComponent as Image1 } from "../Assets/images/sectionThreeImg1.svg"
import { ReactComponent as Image2 } from "../Assets/images/sectionThreeImg2.svg"
import { createUseStyles } from "react-jss";
import ButtonShopNow from "./ButtonShopNow";


const useStyles = createUseStyles({
  sectionThreeWrapper: {
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    margin: {
      left: 'auto',
      right: 'auto',
      top: -25,
    },
  },
  childDiv: {
    position: 'relative',
    // paddingRight: 5,
  },
  shopNowDiv: {
    position: 'absolute',
    maxWidth: 500,
    top: 50,
    left: 30,
    paddingRight:15, 
    '@media (max-width: 1036px)': {
      top: 10,
      left: 20,
   },

    '& h5': {
      color: '#ffffff',
      fontSize: 34,
      letterSpacing: 2,
      '@media (max-width: 1200px)': {
        fontSize: '2.8vw',
    },
    },
    '& p': {
      color: 'rgba(250, 250, 250, 0.7)',
      fontSize: 20,
      marginBottom: 50,
      letterSpacing: 2,
      textAlign: 'justify',
      '@media (max-width: 1200px)': {
        fontSize: '1.6vw',
      marginBottom: '4.1vw',
    },
    },
  },
  images: {
    width: '100%',
    height: '100%',
  },
})

function SectionThree() {

  const classes = useStyles()

  return (
    <div className={classes.sectionThreeWrapper}>
      <div className={classes.childDiv}>
        <div className={classes.shopNowDiv}>
          <h5> WE MADE YOUR EVERYDAY FASHION BETTER!</h5>
          <p>In our journey to improve everyday fashion, euphoria presents
            EVERYDAY wear range -Comfortable & Affordable fashion 24/7</p>
          <ButtonShopNow />
        </div>
        <div>
          <Image1 className={classes.images} />
        </div>
      </div>

      <div>
        <Image2 className={classes.images} />
      </div>

    </div>
  )
}

export default SectionThree