import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; 
import { useTheme, useMediaQuery } from '@mui/material';


const Support = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const styles = {
        container: {
            width: '100%',
            borderSizing: 'border-box',
            overflow: 'hidden',
            display: 'flex',
            flexDirection:isMobile?'column': 'row',
        },
        imageContainer: {
            paddingLeft: '5%',
            width: '40%',
        },
        buttonContainer: {
            display: 'flex',
            marginTop: '60px',
        },
        contactButton: {
            background: '#EA2024',
            color: 'white',
            boxShadow: 'none',
            boxShadow: 'none',
            '&:hover': {
                backgroundColor: '#d0191f',
                boxShadow:'none'
            },
            '&:focus': {
                outline: 'none',
                backgroundColor: '#EA2024',
            },
            padding: '15px 20px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
        },
    }

    return (
        <div style={styles.container}>
            <div style={styles.imageContainer}>
                <img src="/images/support-left-img.svg" alt="LEFT IMG" width="400px" height="500px" />
            </div>
            <div style={{ marginTop: '5%', paddingLeft:isMobile?'25px':'' }}>
                <h3 style={{ fontSize: '30px' }}>Do you have any questions?</h3>
                <h4>Our team will be happy to assist.</h4>
                <div style={styles.buttonContainer}>
                    <Button variant="contained" sx={styles.contactButton}>
                        Contact Us
                        <ArrowForwardIcon sx={{ marginLeft: '10px' }} />
                    </Button>
                </div>
                <h4 style={{marginTop:'10%'}}>+(00)-000-000-0000</h4>
            </div>
        </div>
    );
}

export default Support;
