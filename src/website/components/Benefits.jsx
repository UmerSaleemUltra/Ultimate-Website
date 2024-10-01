import { Paper } from "@mui/material";

const Benefits = () => {
    const styles = {
        container: {
            backgroundImage: 'url(/images/wave-bg-2.jpg)',
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
            color:'#EA2024',
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
            width: '200px',
            padding: '20px',
            background: '#F9F9F933',
            borderRadius: '20px',
            boxShadow: '0px 14px 24px -15px #00000040',
            marginBottom: '20px', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', 
        },
        title: {
            marginTop: '5%',
            color: 'white',
            fontSize: '15px',
            fontWeight: 600,
            
        },
        description: {
            fontSize: '12px',
            color: 'white',
            fontWeight: 300,
            marginTop: '5%',
            marginBottom: '5%',
            
        },
        
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Benefits </h2>
            <h3 style={{fontSize:'40px', margin:0, marginBottom:'1%'}}>The Buzz Filing Advantage</h3>
            <div style={{marginBottom:'5%', fontWeight:100}}>4 Key Benefits of Choosing Us</div>
            <div style={styles.papersContainer}>
                <Paper style={styles.paper}>
                    <div>
                        <img src="/images/Paper Plane.png" alt="Half colored img" width="25%"/>
                        
                        <div style={styles.title}>Quick delivery</div>
                        <div style={styles.description}>
                        Efficient processes ensure fast company formation in the US, UK, and Canada.
                        </div>
                    </div>
                    
                </Paper>
                <Paper style={styles.paper}>
                    <div>
                        <img src="/images/Paper Plane.png" alt="Half colored img" width="25%"/>
                       
                        <div style={styles.title}>We accept all countries</div>
                        <div style={styles.description}>
                        Entrepreneurs worldwide can access our services, regardless of location, promoting global business growth.
                        </div>
                    </div>
                    
                </Paper>
                <Paper style={styles.paper}>
                    <div>
                        <img src="/images/Paper Plane.png" alt="Half colored img" width="25%"/>
                        
                        <div style={styles.title}>Expert Support</div>
                        <div style={styles.description}>
                        Our dedicated experts provide top-notch support, addressing concerns and ensuring a seamless experience throughout the process.
                        </div>
                    </div>
                    
                </Paper>
                <Paper style={styles.paper}>
                    <div>
                        <img src="/images/Paper Plane.png" alt="Half colored img" width="25%"/>
                        
                        <div style={styles.title}>Competitive prices</div>
                        <div style={styles.description}>
                        High-quality services at affordable rates, providing exceptional value without compromising on results.
                        </div>
                    </div>
                    
                </Paper>
                
            </div>
        </div>
    );
}

export default Benefits;