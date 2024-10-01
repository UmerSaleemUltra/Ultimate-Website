import { Button, Grid, Checkbox, Card } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EastIcon from '@mui/icons-material/East';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Divider from '@mui/material/Divider';

export default function Step4({ onNext, onPrev }) {
    // State to store selected checkbox values
    const [selectedAddons, setSelectedAddons] = useState([]);

    const handleSubmit = (e) => {
        onNext({});
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '100%' }}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <div style={{ fontWeight: 600, fontSize: 20, }}>Summary!</div>
                        <span style={{ fontSize: 14, color: '#A1A5B7' }}>
                            If you need more info, please check out <Link style={{ color: '#EA2024', textDecoration: 'none' }} to={''}>Help Page.</Link>
                        </span>
                    </Grid>

                    <Grid item xs={12} style={{ marginTop: "8%" }}>
                        <Grid container spacing={2} padding={4} style={{ border: '1px solid gainsboro', borderRadius: 5 }}>
                            <Grid item xs={1}>
                                <ShoppingCartIcon sx={{ fontSize: 40, color: '#EA2024' }} />
                            </Grid>
                            <Grid item xs={11}>
                                <div style={{ fontWeight: 600 }}>Billing Details</div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 25 }}>
                                    <div>
                                        Your subscriptional amount
                                    </div>
                                    <div>
                                        $229
                                    </div>
                                </div>
                                <Divider style={{ margin: '12px 0px' }} />
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        Quarterly Sales Tax Return to State - Billing Period Every 3 Months
                                    </div>
                                    <div>
                                        $39/month
                                    </div>
                                </div>
                                <Divider style={{ margin: '12px 0px 60px 0px' }} />
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{ fontWeight: 600 }}>
                                        Total
                                    </div>
                                    <div>
                                        $268
                                    </div>
                                </div>
                                <Divider style={{ margin: '12px 0px 40px 0px' }} />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button startIcon={<KeyboardBackspaceIcon />} onClick={onPrev} style={{ gap: 10, background: 'black', color: 'white', margin: '44px 0px 44px' }}>
                            Back
                        </Button>
                        <Button endIcon={<EastIcon />} onClick={handleSubmit} style={{ gap: 10, background: '#EA2024', color: 'white', margin: '44px 0px 44px auto' }}>
                            Continue
                        </Button>
                    </Grid>
                </Grid>

            </div>
        </div>
    );
}
