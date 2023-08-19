import { createUseStyles } from 'react-jss';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const useStyles = createUseStyles({
    footerWrapper: {
        maxWidth: 1440,
        display: 'block',
        margin: {
            left: 'auto',
            right: 'auto',
            top: 17,
        },
        padding: {
            top: 50,
            bottom: 10,
        },
        justifyContent: 'center',
        backgroundColor: ' #3C4242',
        color: '#F6F6F6',
    },
    footerRow: {
        display: 'flex',
        justifyContent: 'center',
        columnGap: 100,
        flexWrap: 'wrap',
        '& h3': {
            fontSize: 26,
            fontWeight: 700,
        },
        '& li': {
            listStyle: 'none',
            marginTop: 40,
            fontSize: 18,
        },
        '& a': {
            color: '#F6F6F6',
            textDecoration: 'none',
            listStyle: 'none',
            transition: 'all 400ms ease-in-out'
        },
        '& a:hover': {
            color: '#BEBCBD',
        }
    },
    socialMedia: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 20,
        '& a': {
            cursor: 'pointer',
        },
    },
    border: {
       width: "100%",
       height: 1,
       backgroundColor: '#BEBCBD',
    },
    footerLastRow: {
        textAlign: 'center',
        marginTop:20,
        fontSize: 16,
        fontWeight: 700,
    }

})


function Footer() {

    const classes = useStyles()

    return (
        <footer>
            <div className={classes.footerWrapper} >
                <div className={classes.footerRow}>
                    <div>
                        <h3>Need Help</h3>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Track Order</a></li>
                        <li><a href="#">Returns & Refunds</a></li>
                        <li><a href="#">FAQ's</a></li>
                        <li><a href="#">Career</a></li>
                    </div>
                    <div>
                        <h3>Company</h3>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">euphoria Blog</a></li>
                        <li><a href="#">euphoriastan</a></li>
                        <li><a href="#">Collaboration</a></li>
                        <li><a href="#">Media</a></li>
                    </div>
                    <div>
                        <h3>More Info</h3>
                        <li><a href="#">Term and Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Shipping Policy</a></li>
                        <li><a href="#">Sitemap</a></li>
                    </div>
                    <div>
                        <h3>Location</h3>
                        <li><a href="#">support@euphoria.in</a></li>
                        <li><a href="#">Eklingpura Chouraha, Ahmedabad Main Road</a></li>
                        <li><a href="#">(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</a></li>
                    </div>
                </div>
                <div className={classes.socialMedia}>
                    <a href=''><FacebookIcon fontSize="large" sx={{ color: "#ffffff" }} /></a>
                    <a href=''><InstagramIcon fontSize="large" sx={{ color: "#ffffff" }} /></a>
                    <a href=''><TwitterIcon fontSize="large" sx={{ color: "#ffffff" }} /></a>
                    <a href=''><LinkedInIcon fontSize="large" sx={{ color: "#ffffff" }} /></a>
                </div>

                <div className={classes.border}></div>
                
  
                <div className={classes.footerLastRow}>
                    <p>Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )

}
export default Footer