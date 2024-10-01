import { Button, Grid, Checkbox } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const addonsDetailsList = [
    { text: 'Wyoming Business Mailing Address with Forwarding Services', price: '$120/year' },
    { text: 'Delaware Business Mailing Address with Forwarding Services', price: '$120/year' },
    { text: 'Florida Business Mailing Address with Forwarding Services', price: '$120/year' },
    { text: 'Texas Business Mailing Address with Forwarding Services', price: '$120/year' },
    { text: 'Shopify or Wordpress Website', price: '$249.99' },
    { text: 'Brand Logo Design', price: '$49.99' },
    { text: 'Hosting,Domain and Business Email', price: '$29.99' },
    { text: 'Resale Certificate / Sales Tax ID', price: '$149.99' },
    { text: 'ITIN - Individual Tax Identification Number', price: '$399.99' },
    { text: 'Quarterly Sales Tax Return to State - Billing Period Every 3 Months', price: '$39.99/Month' },
];

export default function Step3({ onNext, onPrev }) {
    // State to store selected checkbox values
    const [selectedAddons, setSelectedAddons] = useState([]);
    const [errors, setErrors] = useState({});

    const handleValue = (event) => {
        const value = event.target.value;
        setSelectedAddons(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
    };

    const handleError = (error, label) => {
        setErrors(prev => ({ ...prev, [label]: error }));
    };

    const validation = () => {
        let error = false;
        if (selectedAddons.length === 0) {
            error = true;
            handleError('Please select at least one addon...', 'addons');
        }
        return error;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const hasError = validation();
        if (!hasError) {
            console.log('Selected Addons:--', selectedAddons);
            onNext({ selectedAddons });
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '100%' }}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={4}>
                        step4
                        <Grid item xs={12}>
                            <div style={{ fontWeight: 600, fontSize: 20, }}>Addons Details</div>
                            <span style={{ fontSize: 14, color: '#A1A5B7' }}>
                                Select all the additional services you need.
                                If you need more info, please check out Help Page.
                                <Link style={{ color: '#EA2024', textDecoration: 'none' }} to={''}>Help Page.</Link>
                            </span>
                        </Grid>
                        {addonsDetailsList.map((item, index) => (
                            <Grid key={index} item xs={12} style={{ marginTop: '', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <Checkbox
                                        value={`${item.text} ${item.price}`}
                                        checked={selectedAddons.includes(`${item.text} ${item.price}`)}
                                        onChange={handleValue}
                                        inputProps={{ 'aria-label': 'Checkbox demo' }}
                                    />
                                    <span style={{ fontSize: 14 }}>{item.text}</span>
                                </div>
                                <div>{item.price}</div>
                            </Grid>
                        ))}
                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button startIcon={<KeyboardBackspaceIcon />} onClick={onPrev} style={{ gap: 10, background: 'black', color: 'white', margin: '44px 0px 44px' }}>
                                Back
                            </Button>
                            <Button endIcon={<EastIcon />} type="submit" style={{ gap: 10, background: '#EA2024', color: 'white', margin: '44px 0px 44px auto' }}>
                                Continue
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    );
}
