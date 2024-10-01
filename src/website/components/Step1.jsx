import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const designatorList = ['LLC', 'L.L.C', 'Limited Liability', 'Inc', 'Co', 'Corp']
const industryList = ['Accounting and tax preparation', 'Accounting Software', 'Advertising', 'Amazon FBA Wholesale'

]
export default function Step1({ onNext, onPrev }) {
    const [companyName, setCompanyName] = useState('');
    const [companyIndustry, setCompanyIndustry] = useState('');
    const [website, setWebsite] = useState('');
    const [businessDescription, setBusinessDescription] = useState('');
    const [designator, setDesignator] = useState('')
    const [errors, setErrors] = useState({});

    const handleError = (error, label) => {
        setErrors(prev => ({ ...prev, [label]: error }));
    };

    const validation = () => {
        let error = false;
        if (!companyName.trim()) {
            error = true;
            handleError('Please input Company Name...', 'companyName');
        }
        if (!companyIndustry.trim()) {
            error = true;
            handleError('Please input Company Industry...', 'companyIndustry');
        }
        if (!designator.trim()) {
            error = true;
            handleError('Please input Designator...', 'designator');
        }
        // if (!website.trim()) {
        //     error = true;
        //     handleError('Please input website...', 'website');
        // } 
        return error;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const hasError = validation();
        if (!hasError) {
            onNext({ companyName, designator, companyIndustry, website, businessDescription });
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }} >
            <div style={{ width: '100%' }}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <div style={{ fontWeight: 500 }} >Business Info</div>
                            <span style={{ fontSize: 14, color: '#A1A5B7' }}>If you need more info, please check out <Link style={{ color: '#EA2024', textDecoration: 'none' }} to={''}>Help Page.</Link> </span>
                        </Grid>
                        <Grid item xs={12} style={{ marginTop: '8%' }}>
                            <TextField
                                onChange={(e) => setCompanyName(e.target.value)}
                                label="Enter Your Company Name"
                                onFocus={() => handleError('', 'companyName')}
                                error={errors.companyName}
                                helperText={errors.companyName}
                                fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Choose a Designator </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={designator}
                                    label="Choose a Designator "
                                    onChange={(e) => setDesignator(e.target.value)}
                                    onFocus={() => handleError('', 'designator')}
                                    error={errors.designator}
                                    helperText={errors.designator}
                                >{designatorList.map((item, index) => {
                                    return (<MenuItem value={item}>{item}</MenuItem>)
                                })}
                                </Select>
                            </FormControl>
                            {errors.designator ? <div style={{ color: '#EA2024', fontSize: 12 }}>{errors.designator}</div> : <></>}
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label"> Company Industry </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={companyIndustry}
                                    label="Company Industry "
                                    onChange={(e) => setCompanyIndustry(e.target.value)}
                                    onFocus={() => handleError('', 'companyIndustry')}
                                    error={errors.companyIndustry}
                                    helperText={errors.companyIndustry}
                                >
                                    {industryList.map((item) => {
                                        return (<MenuItem value={item}>{item}</MenuItem>)
                                    })}
                                </Select>
                            </FormControl>
                            {errors.companyIndustry ? <div style={{ color: '#EA2024', fontSize: 12 }}>{errors.companyIndustry}</div> : <></>}
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                onChange={(e) => setWebsite(e.target.value)}
                                label="Your business's website"
                                fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField type='text'
                                onChange={(e) => setBusinessDescription(e.target.value)}
                                label="Business description" fullWidth />
                        </Grid>
                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }} >
                            <Button startIcon={<KeyboardBackspaceIcon />} onClick={onPrev} style={{ gap: 10, background: 'black', color: 'white', margin: '44px 0px 44px' }}>
                                Back
                            </Button>
                            <Button endIcon={<EastIcon />} onClick={handleSubmit} style={{ gap: 10, background: '#EA2024', color: 'white', margin: '44px 0px 44px auto' }}>
                                Continue
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    );
};
