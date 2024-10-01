import { Star } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import PricingPlans from './PricingPlans';

const PricingHero = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const styles = {
        container: {
            width: '100%',
            backgroundColor: 'white',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            padding: isMobile ? '20px' : '40px',  // Compact padding on mobile
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
            fontSize: isMobile ? '14px' : isTablet ? '16px' : '18px',  // Responsive font sizes
            fontWeight: 'bold',
        },
        starIcon: {
            color: '#FFD700',
        },
        buttonContainer: {
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: isMobile ? '10px' : '20px',
            marginTop: isMobile ? '30px' : '40px',
            zIndex: '2', // Ensure buttons are on top of images
        },
        startButton: {
            background: '#EA2024',
            color: 'white',
            boxShadow: 'none',
            padding: isMobile ? '10px 15px' : '15px 20px',  // Adjust padding for mobile
            borderRadius: '15px',
            zIndex: 10,
            fontSize: isMobile ? '14px' : '16px',
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
            zIndex: 10,
            fontSize: isMobile ? '14px' : '16px',
            '&:hover': {
                borderColor: '#d0191f',
            },
        },
        imageContainer: {
            position: 'relative',
            top: isMobile ? '-2%' : '-5%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        vectorImage: {
            position: 'absolute',
            left: '0',
            top: isMobile ? '14%' : '5%',
            width: isMobile ? '90%' : 'auto',  // Adjust width for mobile
        },
        overviewImage: {
            zIndex: '2',
            width: isMobile ? '80%' : isTablet ? '70%' : '50%',  // Adjust image size for different screens
        },
        trustText: {
            position: 'absolute',
            bottom: '2%', // Position it near the bottom
            color: 'black',
            fontSize: isMobile ? '12px' : '15px',
            fontWeight: '500',
            textAlign: 'center',
            zIndex: '3',
        },
    };

    return (
        <div style={styles.container} className='bg-gradient'>
            <div>
                <h2 style={{
                    fontSize: isMobile ? '28px' : isTablet ? '35px' : '40px',  // Adjust heading size based on screen size
                    textAlign: 'center',
                    lineHeight: '1.1',
                    color: '#EA2024',
                    margin: '6% auto 2%',
                    width: isMobile ? '90%' : '70%',  // Adjust width to prevent text from stretching
                }}>
                    All the Services You Need for Your US Company, <span style={{ color: 'black' }}>Now in One Place</span>
                </h2>
                <div style={{
                    fontSize: isMobile ? '13px' : '17px',
                    fontWeight: '400',
                    textAlign: 'center',
                    lineHeight: '25.2px',
                    marginTop: isMobile ? '5%' : '',
                    width: isMobile ? '90%' : '70%', // Adjust text width for better readability on smaller screens
                    margin: '0 auto',
                }}>
                    Launch your business online abroad with our team's support, from anywhere.
                </div>
                <div style={styles.buttonContainer}>
                    <Button variant="contained" sx={{ ...styles.startButton, cursor: 'pointer' }}>Start my business</Button>
                    <Button variant="outlined" sx={{ ...styles.consultButton, cursor: 'pointer' }}>Free Consultation</Button>
                </div>
            </div>
            <img src="/images/Vector 1.svg" alt="Vector Image" style={styles.vectorImage} width={isMobile ? '90%' : ''} />
            <PricingPlans screen='pricing' />
        </div>
    );
}

export default PricingHero;
