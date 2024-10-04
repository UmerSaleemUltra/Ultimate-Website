import { Button, Typography } from "@mui/material";
import { useTheme, useMediaQuery } from '@mui/material';

const AllFees = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const styles = {
        container: {
            width: '100%',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            marginTop: '3%',
            padding: isMobile ? '0 20px' : '0 50px',
            boxSizing: 'border-box',
            overflow: 'hidden',
        },
        imageContainer: {
            flex: 1,
            display: 'flex',
            justifyContent: isMobile ? 'center' : 'flex-start',
            alignItems: 'center',
            marginBottom: isMobile ? '20px' : '0',
        },
        textContainer: {
            flex: 1,
            textAlign: 'left',
            marginTop: '1%',
            paddingLeft: isMobile ? '0' : '30px',
        },
        heading: {
            fontSize: isMobile ? '20px' : '24px',
            fontWeight: 'bold',
            marginBottom: '10px',
            textAlign: isMobile ? 'center' : 'left',
        },
        paragraph: {
            textAlign: isMobile ? 'center' : 'left',
            fontSize: '14px',
            fontWeight: '300',
            lineHeight: '1.6',
            marginBottom: '10px',
            color: '#333', // Softer color for text
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: isMobile ? 'center' : 'flex-start',
            marginTop: '20px',
        },
        startButton: {
            background: '#EA2024',
            color: 'white',
            boxShadow: 'none',
            padding: '12px 24px',
            borderRadius: '15px',
            fontSize: '14px',
            fontWeight: 'bold', // Make button text bold
            '&:hover': {
                background: '#d0191f',
                boxShadow: 'none',
            },
        },
        image: {
            width: isMobile ? '90%' : 'auto',
            maxWidth: '600px',
            height: 'auto',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.imageContainer}>
                <img
                    src="/images/All-Fees.svg"
                    alt="All Fees"
                    style={styles.image}
                />
            </div>
            <div style={styles.textContainer}>
                <Typography variant="h5" component="h3" sx={styles.heading}>
                    All fees included
                </Typography>
                <Typography variant="body1" sx={styles.paragraph}>
                    We understand that starting a business can be a daunting task, especially when it comes to navigating the complex world of government regulations and fees. We're proud to offer a business formation package that includes all necessary government and other fees.
                </Typography>
                <Typography variant="body1" sx={styles.paragraph}>
                    With our comprehensive package, you won't have to worry about unexpected expenses or hidden costs. We take care of all government fees, including state and federal registration fees.
                </Typography>
                <div style={styles.buttonContainer}>
                    <Button variant="contained" sx={styles.startButton}>
                        Explore & Set Up
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AllFees;
