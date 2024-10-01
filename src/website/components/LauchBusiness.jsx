import React from 'react';
import { TextField, Button } from '@mui/material';

const LaunchBusiness = () => {
    const styles = {
        container: {
            width: '100%',
            backgroundImage: 'url("/images/statefees-background.svg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px',
            boxSizing: 'border-box',
            marginBottom: '5%',
        },
        leftImage: {
            width: '350px',
            height: '350px',
            marginLeft:'10%'
        },
        rightContent: {
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingLeft: '20px',
            boxSizing: 'border-box',
        },
        heading: {
            fontSize: '40px',
            fontWeight: 'bold',
            marginBottom: '10px',
            color:'#fff'
        },
        subheading: {
            fontSize: '10px',
            marginBottom: '20px',
            color:'#fff'
        },
        textField: {
            width: '60%',
            marginBottom: '10px',
        },
        button: {
            width: '60%',
            padding: '10px',
            backgroundColor: '#EA2024',
            color: 'white',
            fontSize: '11px',
            borderRadius: '5px',
            '&:hover': {
                boxShadow: '0px 0px 10px 0px #FFFFFF40',
            },
        },
    };

    return (
        <div style={styles.container}>
            <img src="/images/Documents-rafiki 1.svg" alt="Left Side" style={styles.leftImage} />
            <div style={styles.rightContent}>
                <h2 style={styles.heading}>Get Legit</h2>
                <p style={styles.subheading}>Launch Your Business Today</p>
                <TextField
                    variant="outlined"
                    placeholder="Enter your details"
                    style={styles.textField}
                    InputProps={{
                        style: {
                            color: 'white',
                            borderColor: 'white',
                        },
                        classes: {
                            notchedOutline: {
                                borderColor: 'white !important',
                            },
                        },
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'white',
                            },
                            '&:hover fieldset': {
                                borderColor: 'white',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'white',
                            },
                        },
                        input: { color: 'white' },
                    }}
                />
                <Button variant="contained" style={styles.button}>
                    Start Your Business
                </Button>
            </div>
        </div>
    );
}

export default LaunchBusiness;
