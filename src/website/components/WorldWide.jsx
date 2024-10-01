import { useTheme, useMediaQuery } from '@mui/material';

const WorldWide = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const styles = {
        container: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',

        }
    }

    return (<div style={styles.container}>
        <h3 style={{ width: isMobile?'100%': '70%', margin: 'auto', marginTop:isMobile ?'10%': '7%', fontSize: isMobile?'30px': '45px', color: '#EA2024', textAlign: 'center' }}>
            No matter where you are in the world, we are always here to support.
        </h3>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="/images/map-img.svg" alt="World map img" style={{ width:isMobile?'100%': '70%' }} />
        </div>
    </div>)
}

export default WorldWide;