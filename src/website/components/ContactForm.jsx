import React, { useState } from 'react';
import { TextField, Button, useTheme, useMediaQuery } from '@mui/material'; 
import { primaryColor } from '../../constant';

const ContactForm = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // State to handle form fields
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    // State to handle form validation errors
    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phoneNumber: false,
        message: false,
    });

    // Handle input change and reset error state for the field
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: false });
    };

    // Form submission handler
    const handleSubmit = () => {
        const { firstName, lastName, email, phoneNumber, message } = formData;

        // Basic validation
        let validationErrors = {};
        if (!firstName) validationErrors.firstName = true;
        if (!lastName) validationErrors.lastName = true;
        if (!email) validationErrors.email = true;
        if (!phoneNumber) validationErrors.phoneNumber = true;
        if (!message) validationErrors.message = true;

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // If no errors, create the payload
            const payload = {
                firstName,
                lastName,
                email,
                phoneNumber,
                message,
            };

            console.log("Form submitted with payload:", payload);

            // You can handle further actions here like sending the data to a server
        }
    };

    const styles = {
        container: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            boxSizing: 'border-box',
            marginTop: '3%',
        },
        heading: {
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '10px',
        },
        subHeading: {
            fontSize: '12px',
            color: 'grey',
            marginBottom: '20px',
        },
        formGroup: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '15px',
            width: isMobile?'100%': '50%', 
        },
        fieldGroup: {
            display: 'flex',
            flexDirection: 'column',
            width:isMobile?'100%': '47%', 
        },
        fieldLabel: {
            fontSize: '14px',
            fontWeight: 'bold',
            marginBottom: '5px',
        },
        fullWidthGroup: {
            display: 'flex',
            flexDirection: 'column',
            width: isMobile?'100%': '50%', 
            marginBottom: '15px',
        },
        messageField: {
            width: '50%', 
            marginBottom: '15px',
        },
        button: {
            width: isMobile?'100%':  '50%', 
            backgroundColor: primaryColor,
            color: 'white',
            padding: '10px 20px',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
            textTransform: 'uppercase',
            '&:hover': {
                backgroundColor: primaryColor, 
            }
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.heading}>Send Us a Message</div>
            <div style={styles.subHeading}>We'll get back to you within 24 hours.</div>
            
            <div style={styles.formGroup}>
                <div style={styles.fieldGroup}>
                    <div style={styles.fieldLabel}>First Name</div>
                    <TextField
                        variant="outlined"
                        placeholder="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        error={errors.firstName}
                        helperText={errors.firstName && "First name is required*"}
                        sx={styles.textField}
                    />
                </div>
                <div style={styles.fieldGroup}>
                    <div style={styles.fieldLabel}>Last Name</div>
                    <TextField
                        variant="outlined"
                        placeholder="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        error={errors.lastName}
                        helperText={errors.lastName && "Last name is required*"}
                        sx={styles.textField}
                    />
                </div>
            </div>
            
            <div style={styles.fullWidthGroup}>
                <div style={styles.fieldLabel}>Enter your email</div>
                <TextField
                    variant="outlined"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    helperText={errors.email && "Email is required*"}
                    sx={styles.fullWidth}
                />
            </div>
            
            <div style={styles.fullWidthGroup}>
                <div style={styles.fieldLabel}>Phone Number</div>
                <TextField
                    variant="outlined"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    error={errors.phoneNumber}
                    helperText={errors.phoneNumber && "Phone number is required*"}
                    sx={styles.fullWidth}
                />
            </div>
            
            <div style={styles.fullWidthGroup}>
                <div style={styles.fieldLabel}>Your Message</div>
                <TextField
                    variant="outlined"
                    placeholder="Your Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    helperText={errors.message && "Message is required*"}
                    sx={styles.fullWidth}
                />
            </div>
            
            <Button style={styles.button} onClick={handleSubmit}>Send Message</Button>
        </div>
    );
}

export default ContactForm;
