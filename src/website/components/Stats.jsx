import { useTheme, useMediaQuery } from '@mui/material';

const Stats = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const styles = {
        container: {
            display: 'flex',
            flexDirection:isMobile ?'column': 'row',
            padding: isMobile ?'15px': '2% 10%',
            marginTop:isMobile?'10%': '5%',
            overflow: 'hidden',
        },
        imageContainer: {
            width: '40%',
        },
        contentContainer: {
            width:isMobile?'100%': '60%',
            paddingLeft: '10px',
        },
        heading: {
            textAlign: 'left',
            fontSize: '24px',
            fontWeight: '600',
            marginBottom: '40px',
        },
        boxContainer: {
            marginTop: '7%',
            width: '450px',
            display: 'grid',
            gridTemplateColumns:isMobile ?'repeat(1, auto)': 'repeat(2, auto)',
            gap: '30px',
        },
        box: {
            width: isMobile?'70%': '200px',
            border: '1px solid black',
            borderRadius: '20px',
            padding: '15px',
            textAlign: 'center',
            fontSize: '16px',
            fontWeight: '500',
        },
        boxHeading: {
            fontSize: '32px',
            color: '#EA2024',
            marginTop: '0',
            marginBottom: '5px',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.imageContainer}>
                <img src="/images/right-img.svg" alt="Right Computer img" width="400px" height="500px" />
            </div>
            <div style={styles.contentContainer}>
                <h3 style={{ ...styles.heading, fontWeight: 600, }}>
                    Become one of the happy <span style={{ color: '#EA2024' }}>Buzz Filing</span> members whose<br /> dreams we've helped realize.
                </h3>
                <div style={styles.boxContainer}>
                    <div style={styles.box}>
                        <h3 style={styles.boxHeading}>25,000+</h3>
                        <div>Companies Established</div>
                    </div>
                    <div style={styles.box}>
                        <h3 style={styles.boxHeading}>140+</h3>
                        <div>Countries</div>
                    </div>
                    <div style={styles.box}>
                        <h3 style={styles.boxHeading}>140,000+</h3>
                        <div>Members</div>
                    </div>
                    <div style={styles.box}>
                        <h3 style={styles.boxHeading}>140</h3>
                        <div>Members</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
