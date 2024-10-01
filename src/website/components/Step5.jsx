import { Button, Grid, } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default function Step5({ onNext, onPrev }) {

    const handleSubmit = (e) => {
        onNext({});
    };
    return (<div>
        step5

        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button startIcon={<KeyboardBackspaceIcon />} onClick={onPrev} style={{ gap: 10, background: 'black', color: 'white', margin: '44px 0px 44px' }}>
                Back
            </Button>
            <Button endIcon={<EastIcon />} onClick={handleSubmit} style={{ gap: 10, background: '#EA2024', color: 'white', margin: '44px 0px 44px auto' }}>
                Continue
            </Button>
        </Grid>
    </div>)
}