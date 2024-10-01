import React from 'react';
import { Paper } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';

const Services = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const styles = {
        container: {
            width: '100%',
            marginTop: isMobile ? '0' : '3%',
            boxSizing: 'border-box',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: isMobile ? '0 10px' : '', 
        },
        paperContainer: {
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row', 
            gap: isMobile ? '10px' : '20px', 
            whiteSpace: isMobile ? 'normal' : 'normal', 
            marginTop: isMobile ?'8%' :'5%'
        },
        paper: {
            width: isMobile ? '330px' : '280px',
            textAlign: 'left',
            padding: '20px',
            background: 'linear-gradient(180deg, #F9F9F9 0%, #F8F8F8 100%)',
            borderRadius: isMobile? '10px': '20px',
            boxShadow: '0px 14px 24px -15px #00000040',
            height: isMobile ?'170px':'',
            gap: isMobile?'20px':''
        },
        title: {
            marginTop: isMobile ? '3%' : '5%',
            color: '#EA2024',
            fontSize: isMobile ? '13px' : '20px',
            fontWeight: 600,
        },
        description: {
            fontSize: isMobile ? '10px' : '16px',
            fontWeight: 300,
            marginTop: '5%',
            marginBottom: isMobile ? '1%' : '5%',
        },
    };

    return (
        <div style={styles.container}>
            <div>
                <h3 style={{ color: '#EA2024', fontSize: isMobile ? '20px' : '34px', textAlign: 'center' }}>Our Services</h3>
                <div style={{ marginTop: 0, fontSize: isMobile ? '20px' : '50px', fontWeight: 600, textAlign: 'center' }}>Your One-Stop Solution</div>
                <div style={{ marginTop: '3%', fontSize: isMobile ? '10px' : '18px', fontWeight: 400, textAlign: 'center' }}>Trust our expertise for a seamless business setup process.</div>
            </div>
            <div style={styles.paperContainer}>
                <Paper style={styles.paper}>
                    <img src="/images/Paper Plane.png" alt="Half colored img" width={isMobile ? '18%' : ''} />
                    <div style={styles.title}>LLC Registration</div>
                    <div style={styles.description}>
                    We handle all document prep, state filings, and fees, included in one price.                    </div>
                </Paper>
                <Paper style={styles.paper}>
                    <img src="/images/Paper Plane.png" alt="Half colored img" width={isMobile ? '18%' : ''} />
                    <div style={styles.title}>IRS Tax ID (EIN)</div>
                    <div style={styles.description}>
                    Get expert help in obtaining your EIN for your U.S. business needs.                    </div>
                </Paper>
                <Paper style={styles.paper}>
                    <img src="/images/Paper Plane.png" alt="Half colored img" width={isMobile ? '18%' : ''} />
                    <div style={styles.title}>Business Bank Account</div>
                    <div style={styles.description}>
                    We assist in setting up your business bank account in the United States.                    </div>
                </Paper>
                <Paper style={styles.paper}>
                    <img src="/images/Paper Plane.png" alt="Half colored img" width={isMobile ? '18%' : ''} />
                    <div style={styles.title}>Business Licenses</div>
                    <div style={styles.description}>
                    Receive guidance to secure the business licenses you need to operate.                    </div>
                </Paper>
            </div>
        </div>
    );
};

export default Services;
