import { Divider, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const FAQ = () => {
    const theme = useTheme();
    const matches_md = useMediaQuery(theme.breakpoints.down('md'));
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const containerStyles = {
        marginTop: '5%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        marginBottom: '5%',
        padding: '1px 20px',
        '@media (max-width: 768px)': {
            padding: '20px',
        },
        '@media (max-width: 480px)': {
            padding: '10px',
        },
    };

    const sectionStyles = {
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-between',
        margin: '20px 0',
        width: '100%',
        maxWidth: '1200px',
        '@media (max-width: 768px)': {
            flexDirection: 'column',
            alignItems: 'center',
        },
    };

    const textContainerStyles = {
        flex: 1,
        padding: '0 20px',
        '@media (max-width: 768px)': {
            padding: '10px 0',
        },
    };

    const applyStyles = (styles) => css(styles);

    const Container = styled.div`${applyStyles(containerStyles)}`;
    const Section = styled.div`${applyStyles(sectionStyles)}`;
    const TextContainer = styled.div`${applyStyles(textContainerStyles)}`;

    const paperStyle = {
        padding: matches_md ? '10px 10px' : '10px 10px',
        width: matches_md ? '90%' : '80%',
        margin: '10px auto',
        backgroundColor: 'transparent',
        borderRadius: '10px',
        boxShadow: 'none',
        overflow: 'hidden',
    };

    // Array of FAQ objects
    const faqs = [
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
    ];

    return (
        <div style={{ background: '', padding: matches_md ? '0 0 7%' : '0 2%', position: 'relative' }}>
            <Container>
                <div style={{ position: 'relative' }}>
                    <h2 style={{ color: '#EA2024', fontWeight: 600, textAlign: 'center' }}>FAQ'S</h2>
                    <h1 style={{ fontWeight: 600, fontSize: matches_md ? 25 : 35, textAlign: 'center', marginTop: matches_md ? '' : '50px', marginBottom: matches_md ? '10px' : '30px' }}>
                        Frequently Asked Questions
                    </h1>
                    <div style={{ textAlign: 'center', fontSize: '15px' }}>Start, run and grow your business.</div>
                    <Section>
                        <Paper style={paperStyle}>
                            <TextContainer>
                                {faqs.map((faq, index) => (
                                    <div key={index}>
                                        <h4
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                cursor: 'pointer',
                                                fontWeight: 500,
                                                fontSize: matches_md ? 12 : 18,
                                                color: openFaq === index ? '#EA2024' : 'black', // Change color based on openFaq state
                                            }}
                                            onClick={() => toggleFaq(index)}
                                        >
                                            {faq.question}
                                            <span style={{ fontSize: matches_md ? '4vw' : '', paddingRight: 5 }}>
                                                {openFaq === index ? '-' : '+'}
                                            </span>
                                        </h4>
                                        {openFaq === index && (
                                            <p style={{ fontWeight: 300, color: '#000', fontSize: matches_md ? 10 : 15 }}>
                                                {faq.answer}
                                            </p>
                                        )}
                                        <Divider />
                                    </div>
                                ))}
                            </TextContainer>
                        </Paper>
                    </Section>
                </div>
            </Container>
        </div>
    );
}

export default FAQ;
