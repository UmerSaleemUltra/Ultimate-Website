import { useTheme, useMediaQuery } from '@mui/material'; 

const ContactChannels = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const styles = {
        container: {
            backgroundImage: 'url(/images/wave-bg-2.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            color: 'white',
            marginTop: '5%',
            paddingTop:isMobile?'70px': '100px',
            paddingLeft: '30px',
            boxSizing: 'border-box',
            overflow: 'hidden',
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start',
            paddingBottom:'30px' ,
            flexDirection: isMobile?'column':''
        },
        headerSection: {
            marginBottom: '30px',
        },
        locationsContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '50px',
        },
        locationItem: {
            width: 'calc(50% - 25px)',
            boxSizing: 'border-box',
        },
        title: {
            fontWeight: 'bold',
        },
        address: {
            fontWeight: 200,
            fontSize:'15px',
            marginTop: '10px',
        }
    };

    const locations = [
        {
            city: 'Melbourne',
            address: '100 Finder Street',
            details: 'Melbourne VIC 300 AU',
        },
        {
            city: 'London',
            address: '100 Oxford Street',
            details: 'London WID 1LL UK',
        },
        {
            city: 'Sydney',
            address: '100 George Street',
            details: 'Sydney NSW 1000 AU',
        },
        {
            city: 'San Francisco',
            address: '100 Market Street',
            details: 'San Francisco, CA 9150 USA',
        }
    ];

    return (
        <div style={styles.container}>
            <div style={styles.headerSection}>
                <div style={{fontSize:'15px', fontWeight:200}}>Our Location</div>
                <h3 style={{fontWeight:500}}>Visit Our Stores</h3>
                <div style={{fontSize:'15px', fontWeight:200}}>Find us at these locations.</div>
            </div>
            <div style={styles.locationsContainer}>
                {locations.map((location, index) => (
                    <div key={index} style={styles.locationItem}>
                        <div style={styles.title}>{location.city}</div>
                        <h3 style={{fontWeight: 200,
            fontSize:'15px',}}>{location.address}</h3>
                        <div style={styles.address}>{location.details}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactChannels;
