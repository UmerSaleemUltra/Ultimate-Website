import React from 'react';
import { Button, Divider, useMediaQuery, useTheme } from '@mui/material';
import { Star } from '@mui/icons-material';

const StateFeesHero = () => {
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
        },
        reviewText: {
            marginLeft: isMobile ? '0' : '10px',
            marginTop: isMobile ? '3px' : '0',
            color: 'black',
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: 'bold',
        },
        starIcon: {
            color: '#FFD700',
            fontSize: isMobile ? '18px' : '20px',
        },
        heading: {
            fontSize: isMobile ? '30px' : '45px',
            textAlign: 'center',
            lineHeight: '1.1',
            color: '#EA2024',
            margin: '2% 0 4%',
            marginTop: isMobile ? '5%' : '',
        },
        vectorImage: {
            position: 'absolute',
            top: isMobile ? '10%' : '20%',
            left: '0%',
            width: isMobile ? '100%' : 'auto',
            height: isMobile ? 'auto' : '60%',
            zIndex: 0, 
        },
        gridContainer: {
            position: 'relative',
            width: isMobile ? '100%' : '85%',
            height: '500px',
            marginTop: isMobile ? '10%' : '0',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            paddingTop: isMobile ? '20px' : '20px', 
            marginBottom:'10%'
        },
        leftGridItem: {
            backgroundColor: 'transparent',
            boxShadow: '0px 0px 10px 0px #EA202440',
            padding: '20px',
            paddingTop:'50px',
            fontSize: '15px',
            lineHeight: '32px',
            position: 'relative',
            zIndex: 0,
            textAlign: 'left',
            height: '590px',
            overflow: 'auto', 
            // marginRight: '420px', // Ensure the right grid item does not overlap
            paddinRight:'400px',
            width:'100%'
        },
        rightGridItem: {
            backgroundColor: 'transparent',
            boxShadow: '0px 0px 10px 0px #EA202440',
            padding: '20px',
            textAlign: 'left',
            position: 'absolute',
            top: '15%',
            right: '0',
            width: '350px',
            height: '350px',
            zIndex: 3,
        },
        rightHeading: {
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '10px',
        },
        button: {
            
            width:'100%',
            backgroundColor: '#EA2024',
            color: 'white',
            marginTop: '10px',
            '&:hover': {
                backgroundColor: '#c8101e',
            },
        },
        startText: {
            marginTop: '10px',
        },
        priceText: {
            textAlign:'center',
            marginTop: '10px',
            fontSize: '12px',
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.starContainer}>
                <Star style={styles.starIcon} />
                <Star style={styles.starIcon} />
                <Star style={styles.starIcon} />
                <Star style={styles.starIcon} />
                <Star style={styles.starIcon} />
                <span style={styles.reviewText}>(2000+ reviews)</span>
            </div>
            <div>
                <h2 style={styles.heading}>
                    Business Initial Filing<br />
                    Fees by State in 2024
                </h2>
            </div>
            <div style={styles.gridContainer}>
                <div style={styles.leftGridItem}>
                    <div style={{width:'750px'}}>
                        <p>Find out how much it costs to start your business in your state, then begin with us by clicking the button below. When you start your business, filing fees vary by state or federal district. Boosty handles the complexity!</p>
                    </div>
                    <div style={{ marginTop: '20px',width:'750px' }}>
                        <p>During sign-up, we'll collect the exact fee required for your location and submit it to the appropriate government office. Simply select your state above to see the specific filing fee. Boosty streamlines the process, so you can focus on what matters - building your business!</p>
                    </div>
                </div>
                <div style={styles.rightGridItem}>
                    <h3 style={styles.rightHeading}>LLC Cost by State</h3>
                    <select style={{ width: '100%', padding: '10px', marginBottom: '10px' }}>
                        <option>Select your state</option>
                        {/* Add options dynamically based on your state list */}
                    </select>
                    <Divider style={{ margin: '10px 0' }} />
                    <div>
                        <h3 style={{fontSize:'15px'}}>State Fees</h3>
                        <h2 style={{color:'#EA2024',margin:0}}>$102</h2>
                        <h3 style={{fontSize:'10px'}}>Wyoming Business Formation Plan</h3>
                    </div>
                    <div>
                        <h3 style={{fontSize:'10px'}}>Boosty Pricing Covers State Fees:</h3>
                        <h2 style={{color:'#EA2024',margin:0}}>$351</h2>
                    </div>
                    <Button variant="contained" style={styles.button}>
                        Start your business
                    </Button>
                    <div style={styles.startText}>
                        <h3 style={styles.priceText}>Starts at $249 + State Fees</h3>
                    </div>
                </div>
            </div>
            <img src="/images/vector 1.svg" alt="Vector" style={styles.vectorImage} />
        </div>
    );
};

export default StateFeesHero;
