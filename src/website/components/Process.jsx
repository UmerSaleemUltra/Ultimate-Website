import { FaCheck } from 'react-icons/fa';
import { useTheme, useMediaQuery } from '@mui/material';

const Process = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const styles = {
        container: {
            overflow: 'hidden',
            width: "100%",
            marginBottom: '5%',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
        },
        titleContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            marginBottom: '5%',
            padding: isMobile ? '0 20px' : '0 40px', // Added padding for smaller devices
        },
        heading: {
            fontSize: isMobile ? '28px' : isTablet ? '35px' : '40px',
            fontWeight: '600',
            textAlign: 'center',
            color: 'black',
            margin: isMobile ? '15px' : '20px',
        },
        heading2: {
            fontSize: isMobile ? '12px' : '16px',
            textAlign: 'center',
            margin: '0',
            padding: isMobile ? '0 10px' : '0', // Additional padding for mobile
        },
        boxShadowContainer: {
            width: isMobile ? '90%' : '70%',
            margin: '0 auto',
            padding: isMobile ? '20px' : '20px 50px 30px 50px',
            boxShadow: '0px 0px 10px 0px #EA202440',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            marginBottom: '2%',
            borderRadius: '10px',
        },
        imageContainer: {
            alignSelf: 'flex-start',
            marginRight: isMobile ? '0' : '30px',
            marginBottom: isMobile ? '20px' : '0',
        },
        contentContainer: {
            flex: isMobile ? '1' : '2',
            display: 'flex',
            flexDirection: 'column',
            textAlign: isMobile ? 'center' : 'left',
        },
        timeline: {
            width: 'fit-content',
            fontSize: isMobile ? '13px' : '15px',
            marginTop: isMobile ? '10%' : '3%',
        },
        planItemsContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: isMobile ? 'center' : 'space-between',
            marginTop: '40px',
        },
        planItem: {
            display: 'flex',
            alignItems: 'center',
            width: isMobile ? '100%' : '48%',
            marginBottom: '20px',
        },
        planText: {
            flex: 1,
            fontSize: isMobile ? '14px' : '16px',
        },
        planIcon: {
            width: '20px',
            height: '20px',
            backgroundColor: '#EA2024',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            marginRight: '10px',
            fontSize: '10px',
        },
        stepImage: {
            width: isMobile ? '100%' : isTablet ? '70%' : 'auto',
            maxWidth: '100%', // Ensures images don't overflow the container
            height: 'auto', // Maintain aspect ratio
        },
        description: {
            fontWeight: isMobile ? '300' : '400', // Unbold text for mobile
            color: '#666',
            fontSize: '13px',
            marginBottom: '10px', // Added margin for better spacing
        }
    };

    const steps = [
        {
            stepNumber: "Step 1",
            title: "Operating Agreement",
            description: "We understand that starting a business can be a daunting task, especially when it comes to navigating the complex world of government regulations and fees. We’re proud to offer a business formation package that includes all necessary government and other fees. With our comprehensive package, you won’t have to worry about unexpected expenses or hidden costs. We take care of all government fees, including state and federal registration fees.",
            timeline: "15 minutes",
            image: "/images/step1-img.svg",
            planItems: [],
        },
        {
            stepNumber: "Step 2",
            title: "Verification",
            description: "To ensure the security of our platform, we require verification of your identity. This is a standard practice to prevent fraud and ensure compliance with legal requirements. Simply submit a copy of your passport or other national ID document, and we’ll take care of the rest. Rest assured that all information provided is kept confidential and secure.",
            timeline: "Immediately",
            image: "/images/step2-img.svg",
            planItems: [],
        },
        {
            stepNumber: "Step 3",
            title: "State Filing",
            description: "We require verification of your identity to prevent fraud and ensure compliance with legal requirements. Simply submit a copy of your passport or other national ID document, and we’ll take care of the rest.",
            timeline: "2 days",
            image: "/images/step3-img.svg",
            planItems: [
                "Detailed name check.",
                "E-filing documents.",
                "All state fees and registered agent fees.",
            ],
        },
        {
            stepNumber: "Step 4",
            title: "Federal EIN",
            description: "We will help you obtain your Federal Tax ID (EIN) from the IRS, which is a crucial step in the business formation process.",
            timeline: "20-40 days",
            image: "/images/step2-img.svg",
            planItems: [],
        }
    ];

    return (
        <div style={styles.container}>
            <div style={styles.titleContainer}>
                <h2 style={{ color: '#EA2024', textTransform: 'uppercase' }}>Select your new LLC</h2>
                <h2 style={styles.heading}>buzzfiling LLC Formation Process</h2>
                <div style={styles.heading2}>
                    Check out the experiences of entrepreneurs to learn more about Buzz Filing.
                </div>
            </div>
            {steps.map((step, index) => (
                <div key={index} style={styles.boxShadowContainer}>
                    <div style={styles.imageContainer}>
                        <img
                            src={step.image}
                            alt={step.title}
                            style={styles.stepImage}
                        />
                    </div>
                    <div style={styles.contentContainer}>
                        <h4>{step.stepNumber}</h4>
                        <h3 style={{ color: '#EA2024', marginTop: '0' }}>{step.title}</h3>
                        <div style={styles.description}>{step.description}</div>
                        <div style={styles.timeline}>Time Line: {step.timeline}</div>
                        {step.planItems.length > 0 && (
                            <div style={styles.planItemsContainer}>
                                {step.planItems.map((item, i) => (
                                    <div key={i} style={styles.planItem}>
                                        <div style={styles.planIcon}><FaCheck /></div>
                                        <div style={styles.planText}>{item}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Process;
