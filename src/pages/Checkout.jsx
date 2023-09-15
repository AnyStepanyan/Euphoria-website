import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';

import AddressForm from '../components/AddressForm';
import PaymentForm from '../components/PaymentForm';
import Review from '../components/Review';
import PurpleButtons from '../components/PurpleButtons';
import { Link } from "react-router-dom";
import { CartContext } from '../components/Context';
import { useContext } from 'react';



const steps = ['Shipping address', 'Review your order','Payment details'];

function getStepContent(step) {
  
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <Review />;
    case 2:
      return <PaymentForm />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { setCart} = useContext(CartContext)

  

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if(activeStep === 2){
      setCart([])
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
   
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 1, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel >{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #000000. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
              <Link style={{textDecoration: 'none', textAlign: 'center', padding: 20}} to="/womenProducts">  
                    <PurpleButtons   value='continue shopping'/>
                    </Link>
            </React.Fragment>
            
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Pay' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
       
      </Container>
    </ThemeProvider>
   
   
  );
}