// import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
// import { useState } from "react";
// const styles = {
//     root: { display: 'flex', alignItems: 'center', width: '50%', flexDirection: 'column' },
//     Form1: {
//         display: 'flex',
//         justifyContent: 'center'
//     },
//     card: {
//         display: 'flex',
//         padding: 20,
//         flexDirection: 'column',
//         alignItems: 'center',
//         border: '2px solid orange',
//         borderRadius: '10px'
//         , background: '#fff'
//     },
//     button: {
//         background: '#FF6326',
//         color: 'white',
//         textTransform: 'capitalize'
//     },
// }
// export default function Form1() {
//     const [values, setValues] = useState('');
//     const handleChange = (event) => {
//         setValues(event.target.value);
//     };

//     return (<div style={styles.root}>
//         <Grid container spacing={2} style={{ width: '60%' }}>
//             <Grid item xs={12} style={styles.Form1}>
//                 <h2>Your Personal Information</h2>
//             </Grid>
//             <Grid item xs={6} style={styles.Form1}>
//                 <TextField sx={{ bgcolor: 'white' }} label="First Name" fullWidth />
//             </Grid>
//             <Grid item xs={6} style={styles.Form1}>
//                 <TextField sx={{ bgcolor: 'white' }} label="Last Name" fullWidth />
//             </Grid>
//             <Grid item xs={12} style={styles.Form1}>
//                 <TextField sx={{ bgcolor: 'white' }} label="Phone Number" type="number" fullWidth />
//             </Grid>
//             <Grid item xs={12} style={styles.Form1}>
//                 <TextField sx={{ bgcolor: 'white' }} label="Email Id" type="email" fullWidth />
//             </Grid>
//         </Grid>

//         <Grid container spacing={2} style={{ width: '100%', marginTop: '10px' }}>
//             <Grid item xs={12} style={styles.Form1}>
//                 <h2>What type of company you need?</h2>
//             </Grid>
//             <Grid item xs={5.5} style={styles.Form1}>
//                 <Grid style={styles.card}>
//                     <h3>LLC</h3>
//                     <span style={{ fontSize: '14px' }}>
//                         Limited Liability Company If you want Paypal,
//                         Stripe, Amazon or Bank Accounts If you want to go global
//                     </span>
//                 </Grid>
//             </Grid>
//             <Grid item xs={1} style={styles.Form1}>
//                 <Grid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//                     <span style={{ fontSize: '14px' }}>or</span>
//                 </Grid>
//             </Grid>
//             <Grid item xs={5.5} style={styles.Form1}>
//                 <Grid style={styles.card}>
//                     <h3>INC.</h3>
//                     <span style={{ fontSize: '14px' }}>
//                         Inc, Also known as C-Corp.
//                         Is foreign company type,
//                         All bank and payments like LLC.
//                         Ideal for you if you have
//                         a plan to raise money from investors.
//                     </span>
//                 </Grid>
//             </Grid>

//             <Grid item xs={12} style={styles.Form1}>
//                 <Grid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                     <h2>Where you want to register your company?</h2>
//                 </Grid>
//             </Grid>

//         </Grid>

//         <Grid container spacing={2} style={{ width: '60%' }}>
//             <Grid item xs={12} style={styles.Form1}>
//                 <Box sx={{ width: '100%', bgcolor: '#fff' }}>
//                     <FormControl fullWidth>
//                         <InputLabel id="demo-simple-select-label">Country</InputLabel>
//                         <Select
//                             labelId="demo-simple-select-label"
//                             id="demo-simple-select"
//                             value={values}
//                             label="Selecte"
//                             onChange={handleChange}
//                         >
//                             <MenuItem value={10}>One</MenuItem>
//                             <MenuItem value={20}>Two</MenuItem>
//                             <MenuItem value={30}>Three</MenuItem>
//                         </Select>
//                     </FormControl>
//                 </Box>
//             </Grid>
//             <Grid item xs={12} style={styles.Form1}>
//                 <Box sx={{ width: '100%', bgcolor: '#fff' }}>
//                     <FormControl fullWidth>
//                         <InputLabel id="demo-simple-select-label">State</InputLabel>
//                         <Select
//                             labelId="demo-simple-select-label"
//                             id="demo-simple-select"
//                             value={values}
//                             label="Selecte"

//                             onChange={handleChange}
//                         >
//                             <MenuItem value={10}>One</MenuItem>
//                             <MenuItem value={20}>Two</MenuItem>
//                             <MenuItem value={30}>Three</MenuItem>
//                         </Select>
//                     </FormControl>
//                 </Box>
//             </Grid>
//             <Grid item xs={12}>
//                 <Button style={styles.button} fullWidth>
//                     Next
//                 </Button>
//             </Grid>
//         </Grid>

//     </div>)
// }


import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import EastIcon from '@mui/icons-material/East';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const styles = {

}
export default function Step1({ onNext }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [conformPassword, setConformPassword] = useState('');
    const [gender, setGender] = useState('')
    const [check, setCheck] = useState(false)
    const [errors, setErrors] = useState({});

    const handleError = (error, label) => {
        setErrors(prev => ({ ...prev, [label]: error }));
    };

    const validation = () => {
        let error = false;
        if (!name.trim()) {
            error = true;
            handleError('Please input Name...', 'name');
        }
        if (!email.trim()) {
            error = true;
            handleError('Please input Email...', 'email');
        }
        if (!phone.trim()) {
            error = true;
            handleError('Please input Phone...', 'phone');
        }
        if (!gender.trim()) {
            error = true;
            handleError('Please input Gender...', 'gender');
        }
        if (!password.trim()) {
            error = true;
            handleError('Please input Password...', 'password');
        } if (!conformPassword.trim()) {
            error = true;
            handleError('Please input Conforme Password...', 'conformPassword');
        }


        return error;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const hasError = validation();
        if (!hasError) {
            if (check) {
                onNext({ name, email, phone, password, gender, conformPassword });
            }else{
                alert('ples check First')
            }

        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }} >
            <div style={{ width: '100%' }}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <div style={{ fontWeight: 500 }} >Account Info</div>
                            <span style={{ fontSize: 14, color: '#A1A5B7' }}>If you need more info, please check out <Link style={{ color: '#EA2024', textDecoration: 'none' }} to={''}>Help Page.</Link> </span>
                        </Grid>
                        <Grid item xs={12} style={{ marginTop: '8%' }}>
                            <TextField
                                onChange={(e) => setName(e.target.value)}
                                label="Enter Full Name"
                                onFocus={() => handleError('', 'name')}
                                error={errors.name}
                                helperText={errors.name}
                                fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField type='email'
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={() => handleError('', 'email')}
                                error={errors.email}
                                helperText={errors.email}
                                label="Email Address" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={gender}
                                    label="Gender"
                                    onChange={(e) => setGender(e.target.value)}
                                    onFocus={() => handleError('', 'gender')}
                                    error={errors.gender}
                                    helperText={errors.gender}
                                >
                                    <MenuItem value={'Male'}>Male</MenuItem>
                                    <MenuItem value={'Female'}>Female</MenuItem>
                                </Select>
                            </FormControl>
                            {errors.gender ? <div style={{ color: '#EA2024', fontSize: 12 }}>{errors.gender}</div> : <></>}
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                onChange={(e) => setPassword(e.target.value)}
                                onFocus={() => handleError('', 'password')}
                                error={errors.password}
                                helperText={errors.password}
                                label="Password" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                onChange={(e) => setConformPassword(e.target.value)}
                                onFocus={() => handleError('', 'conformPassword')}
                                error={errors.conformPassword}
                                helperText={errors.conformPassword}
                                label="Confirm Password" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField type='number'
                                onChange={(e) => setPhone(e.target.value)}
                                onFocus={() => handleError('', 'phone')}
                                error={errors.phone}
                                helperText={errors.phone}
                                label="Phone Number" fullWidth />
                        </Grid>
                        <Grid item xs={12} style={{ marginTop: '5%' }} >
                            <Checkbox {...label} onChange={(e)=>setCheck(e.target.value)} value={true} />
                            <span>Opt-in to receive text message updates</span>
                            <div style={{ marginLeft: 40, fontSize: 14, color: '#A1A5B7' }}>You agree to the terms & privacy policy for recurring
                                automated text messages from Micahguru to the phone
                                number you provide. Msg&data rates may apply.
                            </div>
                        </Grid>
                        <Grid item xs={12} style={{ display: 'flex' }} >
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