import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';

const CTA = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    const styles = {
        container: {
            width: isMobile?'90%': '80%',
            backgroundColor: 'black',
            color: 'white',
            display: 'flex',
           
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '20px',
            borderRadius: '20px',
            margin: '0 auto',
            marginTop: isMobile ?'2%':''

        },
        textContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '780px',
            padding: '50px'
        },
        heading: {
            textAlign: 'left',
            fontSize:isMobile?'35px': '43px',
            fontWeight: 500,
            marginBottom: '10px',
        },
        inputContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginTop: '10px',
            flexDirection: isMobile?'column':''
        },
        textField: {

            backgroundColor: 'white',
            borderRadius: '4px',
        },
        button: {
            backgroundColor: 'black',
            color: 'white',
            fontWeight: 500,
            padding: '15px 20px',
            borderRadius: '4px',
            '&:hover': {
                backgroundColor: '#d0191f',
            },
        },
        imageContainer: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginLeft: '20px',
        },
        image: {
            // maxHeight: '80px', 
            width: isMobile?'200%' :'90%',
            // objectFit: 'contain',
            marginTop:isMobile?'auto':''
        },
        divider: {
            width: '100%',
            height: '1px',
            backgroundColor: '#BDBDBD',
            marginTop: '30px',
        }
    };

    return (<div style={{ marginBottom: '5%', overflow: 'hidden' }}>
        <Box sx={styles.container} className='ctaBg'>
            <Box sx={styles.textContainer}>
                <Typography sx={styles.heading}>
                    Start, Run and Grow your <br /> business
                </Typography>
                <Box sx={styles.inputContainer}>
                    <TextField
                        variant="outlined"
                        placeholder="Enter your email"
                        sx={styles.textField}
                    />
                    <Button sx={styles.button}>Subscribe</Button>
                </Box>
            </Box>
            <Box sx={styles.imageContainer}>
                <img src="/images/CTA-IMG.svg" alt="CTA Image" style={styles.image} />
            </Box>
        </Box>
    </div>
    );
}

export default CTA;
