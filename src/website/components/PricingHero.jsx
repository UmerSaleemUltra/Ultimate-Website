import { Button } from '@mui/material';
import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import PricingPlans from './PricingPlans';
import zIndex from '@mui/material/styles/zIndex';

const PricingHero = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const styles = {
        container: {
            width: '100%',
            // height: '200vh',
            backgroundColor: 'white',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            // marginBottom: '20%',
        },
        starContainer: {
            marginTop: '3%',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
        },
        reviewText: {
            marginLeft: '10px',
            color: 'black',
            fontSize: '16px',
            fontWeight: 'bold',
        },
        starIcon: {
            color: '#FFD700',
        },
        buttonContainer: {
            display: 'flex',
            flexDirection:isMobile?'column':'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px',
            boxShadow: 'none',
            marginTop: '40px',
            zIndex: '2', // Ensure buttons are on top of images
        },
        startButton: {
            background: '#EA2024',
            color: 'white',
            padding: isMobile ? '10px 15px' : '15px 20px',
            borderRadius: '15px',
            fontSize: isMobile ? '10px' : 'inherit',
            zIndex: 10,
            '&:hover': {
                backgroundColor: '#d0191f',
            },
        },
        consultButton: {
            padding: isMobile ? '10px 15px' : '15px 20px',
            borderRadius: '15px',
            borderColor: '#EA2024',
            color: '#EA2024',
            backgroundColor: 'transparent',
            fontSize: isMobile ? '10px' : 'inherit',
            zIndex: 10,
            '&:hover': {
                borderColor: '#d0191f',

            },
        },
        imageContainer: {
            position: 'relative',
            top: '-5%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
       
        overviewImage: {
            zIndex: '2',
            width: '70%'
        },
        trustText: {
            position: 'absolute',
            bottom: '2%', // Position it near the bottom
            color: 'black',
            fontSize: '15px',
            fontWeight: '500',
            textAlign: 'center',
            zIndex: '3',
        },
    };

    return (
        <div style={styles.container} className='bg-gradient'>
            <div>
                <h2 style={{ fontSize:isMobile?'33px': '40px', textAlign: 'center', lineHeight: '1.1', color: '#EA2024', margin: '6% auto 2%', width: isMobile?'90%': '70%' }}>
                    All the Services You Need for Your US Company, <span style={{ color: 'black' }}>Now in One Place</span>
                </h2>
                <div style={{ fontSize:isMobile?'13px': '17px', fontWeight: '400', textAlign: 'center', lineHeight: '25.2px',marginTop:isMobile?'5%':'' }}>
                    Launch your business online abroad with our team's support, from anywhere.
                </div>
                <div style={styles.buttonContainer}>
                    <Button variant="contained" sx={{ ...styles.startButton, cursor: 'pointer' }}>Start my business</Button>
                    <Button variant="outlined" sx={{ ...styles.consultButton, cursor: 'pointer' }}>WhatsApp Support</Button>
                </div>
            </div>
            {/* <div style={styles.imageContainer}> */}
            {/* </div> */}
            <PricingPlans screen='pricing' />
        </div>
    );
}

export default PricingHero;
