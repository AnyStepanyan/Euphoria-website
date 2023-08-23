import Button from '@mui/material/Button';

function ButtonShopNow() {
    
    return (
        <Button variant="outlined"
            sx={{
                backgroundColor: '#FFFFFF',
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 1.5,
                paddingBottom: 1.5,
                color: '#3C4242',
                fontSize: 18,
                fontWeight: 600,
                textTransform: "uppercase",
                borderRadius: 2,
                '&:hover': {
                    backgroundColor: '#FFFFFF',
                },
                '@media (max-width: 1200px)': {
                    paddingLeft: 4,
                    paddingRight: 4,
                    paddingTop: 1,
                    paddingBottom: 1,
                    fontSize: 12,
                },
                '@media (max-width: 500px)': {
                    marginTop: 0,
                    paddingLeft: 2,
                    paddingRight: 2,
                    paddingTop: 0.6,
                    paddingBottom: 0.6,
                    fontSize: 9
                }
            }}
        >
            Shop Now
        </Button>
    )
}

export default ButtonShopNow