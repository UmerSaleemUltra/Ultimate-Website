import { Paper, Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme, useMediaQuery } from '@mui/material';

const PricingFeatures = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const styles = {
        container: {
            backgroundImage: 'url(/images/Service-background.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
            flexDirection: 'column',
            marginBottom:'5%'
        },
        heading: {
            fontSize: '45px',
        },
        papersContainer: {
            marginBottom: '3%',
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            textAlign:'left'
        },
        paper: {
            width: '250px',
            padding: '20px',
            background: 'linear-gradient(180deg, #F9F9F9 0%, #F8F8F8 100%)',
            borderRadius: '20px',
            boxShadow: '0px 14px 24px -15px #00000040',
            marginBottom: '20px', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', 
        },
        title: {
            marginTop: '5%',
            color: '#EA2024',
            fontSize: '15px',
            fontWeight: 600,
            
        },
        description: {
            fontSize: '14px',
            fontWeight: 300,
            marginTop: '5%',
            marginBottom: '5%',
            
        },
        button: {
            backgroundColor: '#EA2024',
            color: 'white',
            marginTop: '10px',
            textTransform: 'none', 
            borderRadius: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 'fit-content', 
            padding: '12px 15px', 
            
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'flex-start', 
            marginBottom:'6%'
        },
        buttonIcon: {
            marginLeft: '5px', 
        },
    };

    return (
        <div style={styles.container}>
            <h3 style={styles.heading}>Services</h3>
            <div style={styles.papersContainer}>
                <Paper style={styles.paper}>
                    <div>
                        <img src="/images/Paper Plane.png" alt="Half colored img" />
                        <div style={{marginTop:'2%', fontWeight:'bold'}}>$120/Year</div>
                        <div style={styles.title}>Company Formation</div>
                        <div style={styles.description}>
                            Let us handle the procedures to establish your company in the US.
                        </div>
                    </div>
                    <div style={styles.buttonContainer}>
                        <Button style={styles.button}>
                            Apply Now
                            <ArrowForwardIcon style={styles.buttonIcon} />
                        </Button>
                    </div>
                </Paper>
                <Paper style={styles.paper}>
                    <div>
                        <img src="/images/Paper Plane.png" alt="Half colored img" />
                        <div style={{marginTop:'2%', fontWeight:'bold'}}>$120/Year</div>
                        <div style={styles.title}>Mailing Address - Annual</div>
                        <div style={styles.description}>
                            Use the mailing address we provide as your company address, without having to rent a physical office space in the US. Prices are subject to change depending on the state.
                        </div>
                    </div>
                    <div style={styles.buttonContainer}>
                        <Button style={styles.button}>
                            Apply Now
                            <ArrowForwardIcon style={styles.buttonIcon} />
                        </Button>
                    </div>
                </Paper>
                <Paper style={styles.paper}>
                    <div>
                        <img src="/images/Paper Plane.png" alt="Half colored img" />
                        <div style={{marginTop:'2%', fontWeight:'bold'}}>$120/Year</div>
                        <div style={styles.title}>EIN Number</div>
                        <div style={styles.description}>
                            Get your American tax identification number (EIN) to do your tax filing and reporting.
                        </div>
                    </div>
                    <div style={styles.buttonContainer}>
                        <Button style={styles.button}>
                            Apply Now
                            <ArrowForwardIcon style={styles.buttonIcon} />
                        </Button>
                    </div>
                </Paper>
                <Paper style={styles.paper}>
                    <div>
                        <img src="/images/Paper Plane.png" alt="Half colored img" />
                        <div style={{marginTop:'2%', fontWeight:'bold'}}>$120/Year</div>
                        <div style={styles.title}>EIN Number - Express</div>
                        <div style={styles.description}>
                            Get your American tax identification number (EIN) to do your tax filing and reporting.
                        </div>
                    </div>
                    <div style={styles.buttonContainer}>
                        <Button style={styles.button}>
                            Apply Now
                            <ArrowForwardIcon style={styles.buttonIcon} />
                        </Button>
                    </div>
                </Paper>
                <Paper style={styles.paper}>
                    <div>
                        <img src="/images/Paper Plane.png" alt="Half colored img" />
                        <div style={{marginTop:'2%', fontWeight:'bold'}}>$120/Year</div>
                        <div style={styles.title}>ITIN Number</div>
                        <div style={styles.description}>
                            Get an ITIN number, which is mandatory for every company that pays taxes in the US.
                        </div>
                    </div>
                    <div style={styles.buttonContainer}>
                        <Button style={styles.button}>
                            Apply Now
                            <ArrowForwardIcon style={styles.buttonIcon} />
                        </Button>
                    </div>
                </Paper>
                <Paper style={styles.paper}>
                    <div>
                        <img src="/images/Paper Plane.png" alt="Half colored img" />
                        <div style={{marginTop:'2%', fontWeight:'bold'}}>$120/Year</div>
                        <div style={styles.title}>Online Bank Account</div>
                        <div style={styles.description}>
                            Submit your application, sit back, and wait for your business bank account to be opened online for you.
                        </div>
                    </div>
                    <div style={styles.buttonContainer}>
                        <Button style={styles.button}>
                            Apply Now
                            <ArrowForwardIcon style={styles.buttonIcon} />
                        </Button>
                    </div>
                </Paper>
                <Paper style={styles.paper}>
                    <div>
                        <img src="/images/Paper Plane.png" alt="Half colored img" />
                        <div style={{marginTop:'2%', fontWeight:'bold'}}>$120/Year</div>
                        <div style={styles.title}>LLC Tax Filing</div>
                        <div style={styles.description}>
                            Federal income tax filing service for your single-member LLC operating in the US.
                        </div>
                    </div>
                    <div style={styles.buttonContainer}>
                        <Button style={styles.button}>
                            Apply Now
                            <ArrowForwardIcon style={styles.buttonIcon} />
                        </Button>
                    </div>
                </Paper>
                <Paper style={styles.paper}>
                    <div>
                        <img src="/images/Paper Plane.png" alt="Half colored img" />
                        <div style={{marginTop:'2%', fontWeight:'bold'}}>$120/Year</div>
                        <div style={styles.title}>Registered Agent</div>
                        <div style={styles.description}>
                            Appoint a registered agent to represent your company, and meet one of the requirements of company formation.
                        </div>
                    </div>
                    <div style={styles.buttonContainer}>
                        <Button style={styles.button}>
                            Apply Now
                            <ArrowForwardIcon style={styles.buttonIcon} />
                        </Button>
                    </div>
                </Paper>
            </div>
        </div>
    );
}

export default PricingFeatures;
