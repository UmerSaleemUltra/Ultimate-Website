import { useTheme, useMediaQuery, Paper } from '@mui/material';
import { FaCheck } from 'react-icons/fa';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Fragment, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccountMenu = (item) => {
    const styles = {
        Iicon: {
            background: 'rgb(178, 190, 181)',
            color: 'white',
            width: 20, height: 20,
            borderRadius: '50%',
            boxShadow: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 13
        }
    }
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 12,
                                height: 12,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'white',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose} >
                    <div style={{ background: '#white', fontSize: 12 }}>{item?.details}</div>
                </MenuItem>
            </Menu>
        </>
    );
}


const AccordionUsage = (leftPlanItems) => {
    const styles = {
        planIcon: {
            width: '16px',
            height: '16px',
            backgroundColor: '#EA2024',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            marginRight: '10px',
            fontSize: '9px'
        },
    }
    return (
        <div>
            <Accordion
                style={{ boxShadow: 'none', background: '#f2f2f2' }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Starter Plans Included
                </AccordionSummary>
                <AccordionDetails >

                    {leftPlanItems.map((item, index) => {
                        return (<div style={{ display: 'flex', padding: 5 }} >
                            <div style={{ ...styles.planIcon }}><FaCheck /></div>
                            <p style={{ fontSize: 15, margin: 0 }}>{item.plan}</p>
                        </div>)
                    })}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}




const PricingPlans = ({ screen }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const styles = {
        container: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxSizing: 'border-box',
            alignItems: 'center',
            position: 'relative',
            padding: '5% 0',
        },
        header: {
            textAlign: 'center',
        },
        headingPrimary: {
            fontSize: '35px',
            color: '#EA2024',
        },
        headingSecondary: {
            fontSize: isMobile ? '25px' : '40px',
            lineHeight: '42px',
            marginTop: '10px',
        },
        subHeading: {
            marginTop: '-1.5%',
        },
        plansContainer: {
            marginTop: isMobile ? '8%' : '3%',
            display: 'flex',
            flexDirection: isMobile ? 'column' : '',
            justifyContent: 'center',
            alignItems: isMobile ? 'center' : '',
            gap: isMobile ? '5px' : '20px',
            width: '100%',
        },
        contentContainer: {
            display: 'flex',
            flexDirection: isMobile ? 'column' : '',
            justifyContent: 'space-around',
            width: '100%',
            marginTop: '30px',
        },
        leftContent: {
            width: isMobile ? '90%' : '45%',
            textAlign: 'left',
            marginLeft: isMobile ? '5%' : '22%',
        },
        rightContent: {
            width: isMobile ? '90%' : '45%',
            textAlign: 'left',
            marginRight: isMobile ? '' : '16%',
            marginLeft: isMobile ? '5%' : ''
        },
        planItem: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
        },
        planText: {
            flex: 1,
            fontSize: '15px',
        },
        planIcon: {
            width: '16px',
            height: '16px',
            backgroundColor: '#EA2024',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            marginRight: '10px',
            fontSize: '9px'
        },
        vectorImage: {
            position: 'absolute',
            left: '0',
            zIndex: -1,
            top: isMobile ? '10%' : '5%',
        },
    };

    const leftPlanItems = [
        { plan: "Company Formation", },
        { plan: "Registered Agent (Annually)",  },
        { plan: "Standard Business Address", },
        { plan: "All Fees Included", },
        { plan: "EIN (Employer Identification Number)", },
        { plan: "U.S. Phone Number", },
        { plan: "Business Bank Account Setup", },
        { plan: "Payment Gateway Setup Guidance",  },
        { plan: "Business Tax Updates",},
        { plan: "FinCEN BOI Report",  },
        { plan: "Digital Document Access", }
    ];

    const rightPlanItems = [
        { plan: "Unique Business Address (Annually)", },
        { plan: "Reseller Certificate / Seller Permit", },
        { plan: "Business Domain Name", },
        { plan: "Dedicated IP VPS - 1 Month",  },
        { plan: "Professional Logo",  },
        { plan: "Company Letterhead", },
        // { plan: "Payment Solutions Application Guide", details: "Compliance Formation" },
        // { plan: "Compliance Calendar and Reminders", details: "Compliance Formation" },
        // { plan: "Digital Document Access", details: "Compliance Formation" },
        // { plan: "Exclusive Rewards $50,000+", details: "Compliance Formation" }
    ];

    return (
        <div style={styles.container}>
            {screen !== 'pricing' && (
                <>

                    <div style={styles.header}>
                        <h3 style={styles.headingPrimary}>Pricing</h3>
                        <h2 style={styles.headingSecondary}>
                            All the Services You Need for Your US Company, <br />Now in One Place
                        </h2>
                        <div style={styles.subHeading}>Count on transparent pricing. We'll set up your LLC and help manage your business.</div>
                    </div>
                </>
            )}
            <div style={styles.plansContainer}>
                {isMobile ? <><img src="images/left-plan.svg" alt="LEFT" width={isMobile ? '390px' : '450px'} /></> : <>
                    <img src="images/left-plan.svg" alt="LEFT" width={isMobile ? '390px' : '450px'} />
                    <img src="images/right-plan.svg" alt="RIGHT" width={isMobile ? '390px' : '450px'} /></>}

            </div>
            <div style={styles.contentContainer}>
                <div style={styles.leftContent}>
                    {leftPlanItems.map((item, index) => (
                        <div key={index} style={styles.planItem}>
                            <div style={styles.planIcon}><FaCheck /></div>
                            <div style={styles.planText}>{item.plan}</div>
                            <div style={{ marginLeft: 'auto', marginRight: '20px' }}>{AccountMenu(item)}</div>
                        </div>
                    ))}
                </div>
                {isMobile ? <div style={styles.plansContainer}>
                    <img src="images/right-plan.svg" alt="RIGHT" width={isMobile ? '390px' : '450px'} />
                </div> : <></>}
                <div style={styles.rightContent}>
                    {rightPlanItems.map((item, index) => (
                        <div key={index} style={styles.planItem}>
                            <div style={styles.planIcon}><FaCheck /></div>
                            <div style={styles.planText}>{item.plan}</div>
                            <div style={{ marginLeft: 'auto', marginRight: '20px' }}>{AccountMenu(item)}</div>
                        </div>
                    ))}
                    <div style={{ width: '95%' }}>{AccordionUsage(leftPlanItems, rightPlanItems)}</div>
                </div>
            </div>
        </div>
    );
}

export default PricingPlans;