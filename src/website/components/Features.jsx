import React from 'react';
import { Button } from "@mui/material";
import { useTheme, useMediaQuery } from '@mui/material';

const Features = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // Additional for tablets

    const styles = {
        container: {
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            overflow: 'hidden',
            justifyContent: isMobile ? 'center' : 'space-between',
            alignItems: isMobile ? 'center' : 'flex-start',
            padding: isMobile ? '0 3%' : '0 5%',
            marginTop: isMobile ? '10%' : '8%',
            boxSizing: 'border-box',
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: isMobile ? 'center' : 'flex-start',
            marginTop: isMobile ? '30px' : '40px',
        },
        startButton: {
            background: '#EA2024',
            color: 'white',
            boxShadow: 'none',
            '&:hover': {
                backgroundColor: '#d0191f',
                boxShadow: 'none',
            },
            '&:focus': {
                outline: 'none',
                backgroundColor: '#EA2024',
            },
            padding: isMobile ? '12px 16px' : '15px 20px', // Adjusted for mobile
            borderRadius: '15px',
            fontSize: isMobile ? '12px' : isTablet ? '14px' : 'inherit', // Added tablet font size
            marginRight: isMobile ? '0' : '20px',
        },
        imageContainer: {
            marginTop: isMobile ? '20px' : '0',
            position: 'relative',
            width: '100%',
            height: isMobile ? 'auto' : '649px',
        },
        rightTopImage: {
            position: 'absolute',
            top: isMobile ? '10%' : '15%',
            left: 0,
            zIndex: 2,
            width: isMobile ? '80%' : isTablet ? '60%' : 'auto', // Tablet scaling
            maxWidth: isMobile ? '80%' : '600px',
            height: 'auto',
        },
        rightBottomImage: {
            position: isMobile ? 'relative' : 'absolute',
            top: isMobile ? '20px' : '5%',
            left: 0,
            zIndex: 1,
            width: isMobile ? '80%' : isTablet ? '60%' : 'auto', // Tablet scaling
            maxWidth: isMobile ? '80%' : '600px',
            height: 'auto',
        },
        textContainer: {
            width: isMobile ? '100%' : '50%',
            textAlign: isMobile ? 'center' : 'left',
            padding: isMobile ? '10px' : isTablet ? '50px' : '100px',
        },
        mainText: {
            fontSize: isMobile ? '18px' : isTablet ? '22px' : '28px',
            fontWeight: 400,
            lineHeight: isMobile ? '24px' : isTablet ? '30px' : '34.72px',
        },
        subText: {
            marginTop: '8%',
            fontSize: isMobile ? '12px' : isTablet ? '14px' : '16px',
            fontWeight: 300,
            lineHeight: isMobile ? '16px' : isTablet ? '20px' : '22.68px',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.textContainer}>
                <div style={styles.mainText}>
                    We offer complete and sophisticated<br /> services that make setting up <br /> a company effortless.
                </div>
                <div style={styles.subText}>
                    An initiative that tries to make things easier for entrepreneurs, we develop practical solutions to problems that occur when establishing and managing a company. We not only carry out company formation processes quickly and online, but also simplify financial process management through digitalization.
                </div>
                <div style={styles.buttonContainer}>
                    <Button variant="contained" sx={styles.startButton}>Start my business</Button>
                </div>
            </div>
            <div style={styles.imageContainer}>
                <img src="/images/right-top.svg" alt="Right top image" style={styles.rightTopImage} />
                <img src="/images/right-bottom.svg" alt="Right bottom image" style={styles.rightBottomImage} />
            </div>
        </div>
    );
};

export default Features;
