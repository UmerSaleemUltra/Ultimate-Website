import { useTheme, useMediaQuery } from '@mui/material'; 

const Map = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const styles = {
        container: {
            width: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '5%',
            gap:isMobile?'5px': '18px',
        },
        contactSection: {
            width: isMobile?'100%':'',
            display: 'flex',
            textAlign: 'center',
            flexDirection: isMobile?'column': 'row',
            gap: isMobile?'50px': '250px',
            marginTop: '3%',
        },
        contactItem: {
            fontSize: '15px',
            color: 'grey',
            
        },
        heading: {
            fontWeight: 'bold',
            color: 'black',
        },
        email: {
            fontSize: '15px',
            color: 'black',
            marginTop:'5%'
        },
        text: {
            fontSize: '10px',
            color: 'grey',
            marginTop:'5%'
        }
    };

    const contactInfo = [
        {
            heading: 'Support',
            text: 'Our Friendly team is here to help.',
            email: 'support@untitled.com'
        },
        {
            heading: 'Sales',
            text: 'Questions to queries? Get in touch!',
            email: 'sales@untitled.com'
        },
        {
            heading: 'Phone',
            text: 'Mon-Fri 8am to 5pm.',
            email: '(000)+00000'
        }
    ];

    return (
        <div style={styles.container}>
            <div style={{ fontSize: 12 }}>Contact Us</div>
            <div style={{ fontSize: isMobile?'35px': '35px', padding: isMobile?'10px':'' }}>We'd love to hear from you</div>
            <div style={{ fontSize: 12 }}>We have offices and teams around the world.</div>
            <img src="/images/map.svg" alt="Global Map" style={{ marginTop:isMobile?'5%': '3%' }} width={isMobile?'100%':''}/>
            <div style={styles.contactSection}>
                {contactInfo.map((contact, index) => (
                    <div key={index} style={styles.contactItem}>
                        <div style={styles.heading}>{contact.heading}</div>
                        <div style={styles.text}>{contact.text}</div>
                        <div style={styles.email}>{contact.email}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Map;
