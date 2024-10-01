import { Divider, useMediaQuery, Tabs, Tab, Button } from '@mui/material';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const AllFaqs = () => {
    const theme = useTheme();
    const matches_md = useMediaQuery(theme.breakpoints.down('md'));
    const [openFaq, setOpenFaq] = useState(null);
    const [selectedTab, setSelectedTab] = useState(0); // 0 = Basics (default)

    const tabStyles = {
        tab: {
            minWidth: 50,
            fontWeight: 600,
            fontSize: matches_md ? '12px' : '16px',
            textTransform: 'none',
            color: '#EA2024',
        },
        selectedTab: {
            background: '#EA2024',
            color: 'white !important',
            borderRadius: '15px',
            padding: '10px 20px',
            margin: '0 5px',
            boxShadow: 'none',
        },
        unselectedTab: {
            color: '#EA2024',
            borderColor: '#EA2024',
            borderRadius: '15px',
            padding: '10px 20px',
            margin: '0 5px',
            background: 'transparent',
            boxShadow: 'none',
            '&:hover': {
                background: 'white',
            },
        },
        tabPanel: {
            paddingTop: '20px',
            width: '100%',
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

    const Section = styled.div`${applyStyles(sectionStyles)}`;
    const TextContainer = styled.div`${applyStyles(textContainerStyles)}`;
    const paperStyle = {
        padding: matches_md ? '10px 10px' : '10px 10px',
        width: matches_md ? '90%' : '70%',
        margin: '10px auto',
        backgroundColor: 'transparent',
        borderRadius: '10px',
        boxShadow: 'none',
        overflow: 'hidden',
    };
    const paperContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    };

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
        setOpenFaq(null); // Reset the open FAQ when tab changes
    };

    const faqBasicQuestions = [
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

    const faqBankingQuestions = [
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        
    ];

    const faqPFRQuestions = [
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        
    ];

    const faqRAQuestions = [
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        
    ];

    const faqOtherQuestions = [
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        
    ];

    const tabContent = [
        {
            title: 'Basics',
            content: (
                <div style={{ width: '100%' }}>
                    <Paper style={{ paddingTop: '10px' }}>
                        <TextContainer>
                            {faqBasicQuestions.map((faq, index) => (
                                <div key={index}>
                                    <h4
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            // fontWeight: 100,
                                            fontSize: matches_md ? 12 : 18,
                                            color: openFaq === index ? '#EA2024' : 'black',
                                        }}
                                        onClick={() => toggleFaq(index)}
                                    >
                                        {faq.question}
                                        <span style={{ fontSize: matches_md ? '4vw' : '', paddingRight: 5 }}>
                                            {openFaq === index ? '-' : '+'}
                                        </span>
                                    </h4>
                                    {openFaq === index && (
                                        <p
                                            style={{
                                                fontWeight: 300,
                                                color: '#000',
                                                fontSize: matches_md ? 10 : 15,
                                            }}
                                        >
                                            {faq.answer}
                                        </p>
                                    )}
                                    <Divider />
                                </div>
                            ))}
                        </TextContainer>
                    </Paper>
                </div>
            ),
        },
        {
            title: 'Banking',
            content: (
                <div style={{ width: '100%' }}>
                    <Paper style={{ paddingTop: '10px' }}>
                        <TextContainer>
                            {faqBankingQuestions.map((faq, index) => (
                                <div key={index}>
                                    <h4
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            fontWeight: 500,
                                            fontSize: matches_md ? 12 : 18,
                                            color: openFaq === index ? '#EA2024' : 'black',
                                        }}
                                        onClick={() => toggleFaq(index)}
                                    >
                                        {faq.question}
                                        <span style={{ fontSize: matches_md ? '4vw' : '', paddingRight: 5 }}>
                                            {openFaq === index ? '-' : '+'}
                                        </span>
                                    </h4>
                                    {openFaq === index && (
                                        <p
                                            style={{
                                                fontWeight: 300,
                                                color: '#000',
                                                fontSize: matches_md ? 10 : 15,
                                            }}
                                        >
                                            {faq.answer}
                                        </p>
                                    )}
                                    <Divider />
                                </div>
                            ))}
                        </TextContainer>
                    </Paper>
                </div>
            ),
        },
        {
            title: 'Pricing, Fees & Refunds',
            content: (
                <div style={{ width: '100%' }}>
                    <Paper style={{ paddingTop: '10px' }}>
                        <TextContainer>
                            {faqPFRQuestions.map((faq, index) => (
                                <div key={index}>
                                    <h4
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            fontWeight: 500,
                                            fontSize: matches_md ? 12 : 18,
                                            color: openFaq === index ? '#EA2024' : 'black',
                                        }}
                                        onClick={() => toggleFaq(index)}
                                    >
                                        {faq.question}
                                        <span style={{ fontSize: matches_md ? '4vw' : '', paddingRight: 5 }}>
                                            {openFaq === index ? '-' : '+'}
                                        </span>
                                    </h4>
                                    {openFaq === index && (
                                        <p
                                            style={{
                                                fontWeight: 300,
                                                color: '#000',
                                                fontSize: matches_md ? 10 : 15,
                                            }}
                                        >
                                            {faq.answer}
                                        </p>
                                    )}
                                    <Divider />
                                </div>
                            ))}
                        </TextContainer>
                    </Paper>
                </div>
            ),
        },
        
        {
            title: 'Registered Agent',
            content: (
                <div style={{ width: '100%' }}>
                    <Paper style={{ paddingTop: '10px' }}>
                        <TextContainer>
                            {faqRAQuestions.map((faq, index) => (
                                <div key={index}>
                                    <h4
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            fontWeight: 500,
                                            fontSize: matches_md ? 12 : 18,
                                            color: openFaq === index ? '#EA2024' : 'black',
                                        }}
                                        onClick={() => toggleFaq(index)}
                                    >
                                        {faq.question}
                                        <span style={{ fontSize: matches_md ? '4vw' : '', paddingRight: 5 }}>
                                            {openFaq === index ? '-' : '+'}
                                        </span>
                                    </h4>
                                    {openFaq === index && (
                                        <p
                                            style={{
                                                fontWeight: 300,
                                                color: '#000',
                                                fontSize: matches_md ? 10 : 15,
                                            }}
                                        >
                                            {faq.answer}
                                        </p>
                                    )}
                                    <Divider />
                                </div>
                            ))}
                        </TextContainer>
                    </Paper>
                </div>
            ),
        },
        {
            title: 'Other Info',
            content: (
                <div style={{ width: '100%' }}>
                    <Paper style={{ paddingTop: '10px' }}>
                        <TextContainer>
                            {faqOtherQuestions.map((faq, index) => (
                                <div key={index}>
                                    <h4
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            fontWeight: 500,
                                            fontSize: matches_md ? 12 : 18,
                                            color: openFaq === index ? '#EA2024' : 'black',
                                        }}
                                        onClick={() => toggleFaq(index)}
                                    >
                                        {faq.question}
                                        <span style={{ fontSize: matches_md ? '4vw' : '', paddingRight: 5 }}>
                                            {openFaq === index ? '-' : '+'}
                                        </span>
                                    </h4>
                                    {openFaq === index && (
                                        <p
                                            style={{
                                                fontWeight: 300,
                                                color: '#000',
                                                fontSize: matches_md ? 10 : 15,
                                            }}
                                        >
                                            {faq.answer}
                                        </p>
                                    )}
                                    <Divider />
                                </div>
                            ))}
                        </TextContainer>
                    </Paper>
                </div>
            ),
        },
    ];

    return (
        <div style={{ background: '', padding: matches_md ? '0 0 7%' : '0 2%', position: 'relative' }}>
            <div style={{ position: 'relative' }}>
                <h1
                    style={{
                        fontWeight: 600,
                        fontSize: matches_md ? 25 : 35,
                        textAlign: 'center',
                        marginTop: matches_md ? '' : '50px',
                        marginBottom: matches_md ? '10px' : '30px',
                        color: '#EA2024',
                    }}
                >
                    Frequently Asked Questions
                </h1>
                <div style={{ textAlign: 'center', fontSize: '12px' }}>
                    Got a question? Chances are, it's been asked before! Explore our collection of frequently asked questions.
                </div>

                {/* Tabs */}
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    centered
                    TabIndicatorProps={{
                        style: {
                            display: 'none',
                        },
                    }}
                >
                    {tabContent.map((tab, index) => (
                        <Tab
                            key={index}
                            label={tab.title}
                            sx={selectedTab === index ? { ...tabStyles.tab, ...tabStyles.selectedTab } : { ...tabStyles.tab, ...tabStyles.unselectedTab }}
                            style={{
                                marginTop: '3%',
                                fontWeight:400
                            }}
                        />
                    ))}
                </Tabs>

                {/* Tab Content */}
                <div style={paperContainerStyle}>
                    <Paper style={paperStyle}>
                        <div style={tabStyles.tabPanel}>{tabContent[selectedTab].content}</div>
                    </Paper>
                </div>
            </div>
        </div>
    );
};

export default AllFaqs;
