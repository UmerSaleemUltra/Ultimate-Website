import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';

const GrowBusiness = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const styles = {
        container: {
            width: '100%',
            height: isMobile ? 'auto' : '600px',
            backgroundImage: 'url(/images/wave-bg-1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: isMobile ? '20px' : '0',
        },
        textContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: isMobile ? 'center' : 'flex-start',
            width: isMobile ? '100%' : '40%', // Make text container responsive
            marginLeft: isMobile ? '0' : '10%', // Adjust margin for mobile
        },
        heading: {
            paddingTop: '30px',
            textAlign: 'center',
            fontSize: isMobile ? '30px' : '43px',
            fontWeight: 500,
            marginBottom: '10px',
        },
        buttonContainer: {
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px',
            marginTop: '40px',
            zIndex: '2',
        },
        startButton: {
            background: '#EA2024',
            color: 'white',
            padding: '15px 20px',
            borderRadius: '15px',
            '&:hover': {
                backgroundColor: '#d0191f',
            },
        },
        consultButton: {
            padding: '15px 20px',
            borderRadius: '15px',
            borderColor: 'white',
            color: '#EA2024',
            backgroundColor: 'white',
            '&:hover': {
                backgroundColor: 'rgba(234, 32, 36, 0.1)',
            },
        },
        imageContainer: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: isMobile ? '100%' : '60%', // Adjust image container width
            marginLeft: isMobile ? '0' : '20px',
            marginTop: isMobile ? '20px' : '0', // Add margin for mobile
        },
        image: {
            width: '100%', // Make image responsive
            maxWidth: isMobile ? '80%' : '70%', // Limit max width for mobile
            height: 'auto',
            objectFit: 'contain', // Maintain aspect ratio
        },
        overviewImage: {
            zIndex: '1',
            width: '80%',
            position: 'absolute',
            top: '10%',
            left: '10%',
        },
    };

    return (
        <div style={{ marginBottom: '5%', overflow: 'hidden' }}>
            <Box sx={styles.container} className='ctaBg'>
                <Box sx={styles.textContainer}>
                    <Typography sx={styles.heading}>
                        Start, Run and Grow your <br /> business
                    </Typography>
                    <div style={styles.buttonContainer}>
                        <Button variant="contained" sx={styles.startButton}>
                            Start my business
                        </Button>
                        <Button variant="outlined" sx={styles.consultButton}>
                            Free Consultation
                        </Button>
                    </div>
                </Box>
                <Box sx={styles.imageContainer}>
                    <img src="/images/growbusiness.svg" alt="Grow Business" style={styles.image} />
                    <img
                        src="/images/growbusiness.svg"
                        alt="Grow Business Overview"
                        style={styles.overviewImage}
                    />
                </Box>
            </Box>
        </div>
    );
}

export default GrowBusiness;
