import { Button } from "@mui/material";
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
            flex: 1, // Allow image container to take up available space
            display: 'flex',
            justifyContent: isMobile ? 'center' : 'flex-start',
            alignItems: 'center',
            marginBottom: isMobile ? '20px' : '0', // Add space below image on mobile
        },
        textContainer: {
            flex: 1, // Allow text container to take up available space
            textAlign: 'left',
            marginTop: '1%',
            paddingLeft: isMobile ? '0' : '30px', // Adjust padding for mobile
        },
        heading: {
            fontSize: isMobile ? '20px' : '24px',
            marginBottom: '10px',
        },
        paragraph: {
            fontSize: isMobile ? '13px' : '15px',
            lineHeight: isMobile ? '20px' : '22.64px',
            marginTop: isMobile ? '10px' : '15px',
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
            padding: '15px 20px',
            borderRadius: '15px',
            fontSize: '10px',
            '&:hover': {
                background: '#d0191f', // Slightly darker on hover
                boxShadow: 'none',
            },
        },
        image: {
            width: isMobile ? '90%' : 'auto', // Make image larger on mobile
            maxWidth: '600px', // Limit max width for larger screens
            height: 'auto', // Maintain aspect ratio
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.imageContainer}>
                <img
                    src="/images/All-Fees.svg"
                    alt="All Fees"
                    style={styles.image} // Apply responsive styles directly
                />
            </div>
            <div style={styles.textContainer}>
                <h3 style={styles.heading}>All fees included</h3>
                <div style={styles.paragraph}>
                    We understand that starting a business can be a daunting task, especially when it comes to navigating the complex world of government regulations and fees. We're proud to offer a business formation package that includes all necessary government and other fees.
                </div>
                <div style={styles.paragraph}>
                    With our comprehensive package, you won't have to worry about unexpected expenses or hidden costs. We take care of all government fees, including state and federal registration fees.
                </div>
                <div style={styles.buttonContainer}>
                    <Button variant="contained" sx={styles.startButton}>Explore & Set Up</Button>
                </div>
            </div>
        </div>
    );
}

export default AllFees;
