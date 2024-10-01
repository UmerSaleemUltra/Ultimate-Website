import { Star } from '@mui/icons-material';
import { Button, useMediaQuery, useTheme } from '@mui/material';

const HeroSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const styles = {
        container: {
            width: '100%',
            backgroundColor: 'white',
            boxSizing: 'border-box',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            padding: isMobile ? '0 10px' : '0',
        
        },
        starContainer: {
            marginTop: isMobile ? '6%' : '3%',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            flexDirection: 'row',
            justifyContent: 'center', // Use this for horizontal centering in flex
            marginLeft: isMobile ? '20px' : '10px',

            
        },
        
        reviewText: {
            marginLeft: isMobile ? '15px' : '10px',
            marginTop: isMobile ? '3px' : '0',
            color: 'black',
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: 'bold',

        },
        starIcon: {
            color: '#FFD700',
            fontSize: isMobile ? '18px' : '20px',
            justifyContent: 'center', // Use this for horizontal centering in flex
        },
        buttonContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: isMobile ? '10px' : '15px',
            marginTop: isMobile ? '20px' : '40px',
            flexDirection: isMobile ? 'column' : 'row',
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
            top: isMobile ? '0%' : '-5%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
        },
        vectorImage: {
            position: 'absolute',
            left: isMobile ? '-2%' : '0',
            top: isMobile ? '-20%' : '-15%',
            width: isMobile ? '90%' : '',
        },
        overviewImage: {
            zIndex: 2,
            width: isMobile ? '70%' : '70%',
        },
        trustText: {
            position: 'absolute',
            bottom: isMobile ? '0' : '2%',
            color: 'black',
            fontSize: isMobile ? '12px' : '15px',
            fontWeight: '500',
            textAlign: 'center',
            zIndex: 3,
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.starContainer}>
                <Star style={styles.starIcon} />
                <Star style={styles.starIcon} />
                <Star style={styles.starIcon} />
                <Star style={styles.starIcon} />
                <Star style={styles.starIcon} />
                <span style={styles.reviewText}>(Top-Notch Customer Service)</span>
            </div>
            <div>
                <h2
                    style={{
                        fontSize: isMobile ? '30px' : '62px',
                        textAlign: 'center',
                        lineHeight: '1.1',
                        color: '#EA2024',
                        margin: isMobile ? '5% 0 4%' : '2% 0 4%',
                    }}
                >
                    Start, Run and Grow <br /> Your Business in the US.
                </h2>
                <div
                    style={{
                        fontSize: isMobile ? '8px' : '17px',
                        fontWeight: '400',
                        textAlign: 'center',
                        lineHeight: '1.5',
                    }}
                >
                    Get your U.S. business up and running online, supported by our team from anywhere.
                </div>
                <div style={styles.buttonContainer}>
                    <Button variant="contained" sx={styles.startButton}>
                        Start my business
                    </Button>
                    <Button variant="outlined" sx={styles.consultButton}>
                        WhatsApp Support
                    </Button>
                </div>
            </div>
            <div style={styles.imageContainer}>
                <img src="/images/Vector 1.svg" alt="Vector Image" style={styles.vectorImage} />
                <img src="/images/Overview 1.svg" alt="Overview Image" style={styles.overviewImage} />
                <img
                    src="/images/dashboard.svg"
                    alt="Dashboard Image"
                    style={{
                        ...styles.overviewImage,
                        position: 'absolute',
                        right: '10%',
                        zIndex: 1,
                        width: isMobile ? '60%' : '60%',
                    }}
                />
                <img
                    src="/images/dashboard.svg"
                    alt="Dashboard Image"
                    style={{
                        ...styles.overviewImage,
                        position: 'absolute',
                        left: '10%',
                        zIndex: 1,
                        width: isMobile ? '60%' : '60%',
                    }}
                />
            </div>
            <div style={styles.trustText}>Our business partners and affiliates.</div>
        </div>
    );
};

export default HeroSection;
