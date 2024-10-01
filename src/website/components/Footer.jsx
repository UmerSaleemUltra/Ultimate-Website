import React from 'react';
import { Box, Typography, TextField, Button, useTheme, useMediaQuery } from '@mui/material';

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const styles = {
        container: {
            width: '100%',
            padding: '0 10% 3%',
            display: 'flex',
            flexDirection: isMobile?'column': 'row',
            justifyContent: isMobile?'center': 'space-between',
            alignItems: isMobile?'center':'',
            gap: '30px',

            color: '#333',
            overflow: 'hidden',
            boxSizing: 'border-box',
            marginBottom: isMobile?'13%':''
        },
        column: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
        },
        heading: {
            fontWeight: 500,
            fontSize: '16px',
            marginBottom: '10px',
            color: '#000',
            textAlign: isMobile?'center': 'left'
        },
        text: {
            textAlign: isMobile?'center': 'left',
            fontWeight: '300',
            color: '#666',
            fontSize: '13px',
        },
        subscribeContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            maxWidth: '300px',
        },
        textField: {
            backgroundColor: 'white',
            borderRadius: '4px',
        },
        button: {
            backgroundColor: '#EA2024',
            color: 'white',
            fontWeight: '500',
            padding: '10px 20px',
            width: '50%',
            borderRadius: '4px',
            '&:hover': {
                backgroundColor: '#d0191f',
            },
        },
        divider: {
            width: '100%',
            height: '1px',
            backgroundColor: '#BDBDBD',
            margin: '4% 0',
        }
    };

    return (
        <>
            <div style={{ paddingTop: '0.2%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '10%', marginTop: '5%', flexDirection: isMobile?'column':'' }}>
                    <span style={{}}><img src="/images/buzz-filling-logo.svg" alt="LOGO" /></span>
                    <span style={{ width: isMobile?'90%': '35%', textAlign: 'left', marginRight: '8%', fontSize: 14, fontWeight: 400, marginTop:isMobile?'8%':'' }}>
                        We offers end-to-end solutions that facilitate company set-up, management, and growth by enabling users to carry out all processes related to their business online, on a single platform.
                    </span>
                </div>
                <div style={styles.divider}></div>

                <Box sx={styles.container}>

                    <Box sx={styles.column}>
                        <Typography sx={styles.heading}>Company</Typography>
                        <Typography sx={styles.text}>Features</Typography>
                        <Typography sx={styles.text}>Pricing</Typography>
                        <Typography sx={styles.text}>Case Studies</Typography>
                        <Typography sx={styles.text}>Reviews</Typography>
                        <Typography sx={styles.text}>Updates</Typography>
                    </Box>
                    <Box sx={styles.column}>
                        <Typography sx={styles.heading}>Support</Typography>
                        <Typography sx={styles.text}>Help Center</Typography>
                        <Typography sx={styles.text}>Affiliate Program</Typography>
                        <Typography sx={styles.text}>About us</Typography>
                    </Box>
                    <Box sx={styles.column}>
                        <Typography sx={styles.heading}>Resources</Typography>
                        <Typography sx={styles.text}>Limited Liability Company</Typography>
                        <Typography sx={styles.text}>Doing Business As</Typography>
                        <Typography sx={styles.text}>Operating Agreement</Typography>
                        <Typography sx={styles.text}>Buzz Filing Tax Estimator</Typography>
                        <Typography sx={styles.text}>Site map</Typography>
                    </Box>
                    <Box sx={styles.column}>
                        <Typography sx={styles.heading}>Legal</Typography>
                        <Typography sx={styles.text}>Privacy</Typography>
                        <Typography sx={styles.text}>Terms</Typography>
                        <Typography sx={styles.text}>Cookie Policy</Typography>
                    </Box>
                    <Box sx={styles.subscribeContainer}>
                        <Typography sx={styles.heading}>Subscribe to our newsletter</Typography>
                        <Typography sx={styles.text}>
                            Enter your information below to subscribe with Buzz Filing.
                        </Typography>
                        <TextField
                            variant="outlined"
                            placeholder="Enter your email"
                            sx={styles.textField}
                        />
                        <Button sx={styles.button}>Subscribe</Button>
                    </Box>

                </Box>
            </div>
        </>
    );
};

export default Footer;
