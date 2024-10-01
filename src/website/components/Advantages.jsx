import { Paper } from "@mui/material";
import { useTheme, useMediaQuery } from '@mui/material';

const Advantages = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const styles = {
        container: {
            width: '100%',
            marginTop: '5%',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        paper: {
            width: '280px',
            textAlign: 'left',
            padding: '20px',
            background: 'linear-gradient(180deg, #F9F9F9 0%, #F8F8F8 100%)',
            borderRadius: '20px',
            boxShadow: '0px 14px 24px -15px #00000040',
        },
        title: {
            marginTop: '5%',
            color: '#EA2024',
            fontSize: '17px',
            fontWeight: 600,
        },
        description: {
            fontSize: '15px',
            fontWeight: 300,
            marginTop: '5%',
            marginBottom: '5%',
        },
    };

    return (
        <div style={styles.container}>
            <div>
                <h3 style={{ color: '#EA2024',fontSize: isMobile ? '25px' : '34px', textAlign: 'center' }}>REGISTER</h3>
                <div style={{ marginTop: 0, fontSize: isMobile ? '20px' : '50px',fontWeight: 600, textAlign: 'center' }}>Everything to Register your LLC</div>
                <div style={{ marginTop: '3%', fontSize: isMobile ? '12px' : '18px', fontWeight: 400, textAlign: 'center' }}>Start, run and grow your business.</div>
            </div>
            <div style={{ marginTop:isMobile?'10%': '5%', marginBottom: '3%', display: 'flex', gap: '20px',flexDirection:isMobile?'column':'row' }}>
                <Paper style={styles.paper}>
                    <img src="/images/Paper Plane.png" alt="Half colored img" />
                    <div style={styles.title}>Pricing</div>
                    <div style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </Paper>
                <Paper style={styles.paper}>
                    <img src="/images/Paper Plane.png" alt="Half colored img" />
                    <div style={styles.title}>Support</div>
                    <div style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </Paper>
                <Paper style={styles.paper}>
                    <img src="/images/Paper Plane.png" alt="Half colored img" />
                    <div style={styles.title}>Cancellation</div>
                    <div style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </Paper>
                
            </div>
        </div>
    );
};

export default Advantages;
