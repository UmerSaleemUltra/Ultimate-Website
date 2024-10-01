// import { Button } from '@mui/material';
// import React, { useState } from 'react';
// import EastIcon from '@mui/icons-material/East';
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

// export default function Step3({ onPrev, onSubmit }) {
//     const [address, setAddress] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSubmit({ address });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//              <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }} >
//             <Button onClick={onPrev} style={{ gap: 10, background: '#EA2024', color: 'white', margin: '44px 0px 44px' }}>
//                 <KeyboardBackspaceIcon /> Back
//             </Button>
//             <Button onClick={handleSubmit} style={{ gap: 10, background: '#EA2024', color: 'white', margin: '44px 0px 44px auto' }}>
//                 Continue <EastIcon />
//             </Button>
//             </Grid>
//         </form>
//     );
// };


import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import EastIcon from '@mui/icons-material/East';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const designatorList = ['LLC', 'L.L.C', 'Limited Liability', 'Inc', 'Co', 'Corp']
const industryList = ['Accounting and tax preparation', 'Accounting Software', 'Advertising', 'Amazon FBA Wholesale']

export default function Step2({ onPrev, onNext }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [roleInCompany, setRoleInCompany] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [ssn_Number, setSSN_Number] = useState('')
    const [errors, setErrors] = useState({});

    const handleError = (error, label) => {
        setErrors(prev => ({ ...prev, [label]: error }));
    };

    const validation = () => {
        let error = false;
        if (!firstName.trim()) {
            error = true;
            handleError('Please input First Name...', 'firstName');
        }
        if (!lastName.trim()) {
            error = true;
            handleError('Please input Last Name...', 'lastName');
        }
        if (!roleInCompany.trim()) {
            error = true;
            handleError('Please input Role in Company...', 'roleInCompany');
        } if (!phoneNumber.trim()) {
            error = true;
            handleError('Please input Phone Number...', 'phoneNumber');
        } if (!address.trim()) {
            error = true;
            handleError('Please input Address...', 'address');
        } if (!ssn_Number.trim()) {
            error = true;
            handleError('Please input SSN/ITIN Number...', 'ssn_Number');
        }
        return error;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const hasError = validation();
        if (!hasError) {
            onNext({ firstName, lastName, phoneNumber, roleInCompany, address, ssn_Number });
        }
    };


    return (
        <div style={{ display: 'flex', justifyContent: 'center' }} >
            <div style={{ width: '100%' }}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <div style={{ fontWeight: 500 }} >Members Details</div>
                                <span style={{ fontSize: 14, color: '#A1A5B7' }}>Please click to add button for multiple members </span>
                            </div>
                            <Button startIcon={<AddIcon />} style={{ textTransform: 'capitalize', gap: 10, background: '#EA2024', color: 'white' }}>
                                ADD
                            </Button>
                        </Grid>
                        <Grid item xs={6} style={{ marginTop: '8%' }}>
                            <TextField
                                onChange={(e) => setFirstName(e.target.value)}
                                label="Enter First Name"
                                onFocus={() => handleError('', 'firstName')}
                                error={errors.firstName}
                                helperText={errors.firstName}
                                fullWidth />
                        </Grid>
                        <Grid item xs={6} style={{ marginTop: '8%' }}>
                            <TextField
                                onChange={(e) => setLastName(e.target.value)}
                                label="Enter Last Name"
                                onFocus={() => handleError('', 'lastName')}
                                error={errors.lastName}
                                helperText={errors.lastName}
                                fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type='number'
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                onFocus={() => handleError('', 'phoneNumber')}
                                error={errors.phoneNumber}
                                helperText={errors.phoneNumber}
                                label="Phone Number"
                                fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label"> Role in Company </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={roleInCompany}
                                    label="Role in Company "
                                    onChange={(e) => setRoleInCompany(e.target.value)}
                                    onFocus={() => handleError('', 'roleInCompany')}
                                    error={errors.roleInCompany}
                                    helperText={errors.roleInCompany}
                                >
                                    {industryList.map((item) => {
                                        return (<MenuItem value={item}>{item}</MenuItem>)
                                    })}
                                </Select>
                            </FormControl>
                            {errors.roleInCompany ? <div style={{ color: '#EA2024', fontSize: 12 }}>{errors.roleInCompany}</div> : <></>}
                        </Grid>

                        <Grid item xs={12}>
                            <TextField type='text'
                                onChange={(e) => setAddress(e.target.value)}
                                onFocus={() => handleError('', 'address')}
                                error={errors.address}
                                helperText={errors.address}
                                label="Address" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={(e) => setSSN_Number(e.target.value)}
                                onFocus={() => handleError('', 'ssn_Number')}
                                error={errors.ssn_Number}
                                helperText={errors.ssn_Number}
                                label="SSN/ITIN Number" fullWidth />
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




