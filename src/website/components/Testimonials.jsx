import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';


const Testimonials = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const CustomNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <img
                src="/images/right-arrow.svg"
                alt="Next"
                style={{ ...style, left:isMobile?'85%': '64%', width: '40px', height: '50px', transform: 'rotate(0deg)', cursor: 'pointer', marginTop: isMobile?'35%': '35%' }}
                onClick={onClick}
                className={className}
            />
        );
    };
    
    const CustomPrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <img
                src="/images/right-arrow.svg"
                alt="Previous"
                style={{ ...style, left:isMobile?'50%': '56%', width: '40px', height: '50px', transform: 'rotate(180deg)', cursor: 'pointer', marginTop: '35%'}}
                onClick={onClick}
                className={className}
            />
        );
    };

    const styles = {
        titleContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            marginBottom: '5%',
            marginTop: isMobile ?'10%':''
        },
        heading: {
            width: isMobile ? '100%' : '900px',
            fontSize: isMobile ? '24px' : '50px',
            fontWeight: '600',
            textAlign: 'center',
            color: 'black',
            margin: isMobile ? '15px 0' : '20px',
        },
        heading2: {
            fontSize: isMobile ?'10px': '12px',
            textAlign: 'center',
            margin: '0',
        },
        testimonialContainer: {
            display: 'flex',
            flexDirection: isMobile ?'column':'',
            alignItems: 'center',
            // justifyContent: 'space-between',
            width: '100%',
            padding: '0 5%',
            boxSizing: 'border-box',
        },
        leftImageContainer: {
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        sliderContainer: {
            width: isMobile ?'100%': '50%',
            paddingRight: isMobile?'5%':'10%',
            boxSizing: 'border-box',
            position: 'relative',
        },
        testimonialItem: {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            padding: isMobile?'3%': '2%',
            boxSizing: 'border-box',
            border: '2px solid black',
            borderRadius: '10px',
            position: 'relative',
            width: isMobile?'100%': '80%',
            margin: '60px 0 0',
            marginTop: '30%',
            background: 'white',
        },
        testimonialText: {
            fontSize: '10px',
            color: 'black',
            marginBottom: '20px',
            marginTop: '20px',
        },
        testimonialAuthor: {
            fontWeight: '600',
            fontSize: '18px',
            color: 'black',
        },
    };

    const testimonials = [
        {
            image: '/images/slider1-img.svg',
            name: 'John Deo',
            role: 'CEO',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
            image: '/images/slider1-img.svg',
            name: 'John',
            role: 'Developer',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
    ];

    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };

    return (
        <div style={{ overflow: 'hidden', width: "100%", marginBottom:isMobile?'20%': '5%', boxSizing: 'border-box',}}>
            <div style={styles.titleContainer}>
                <h2 style={{ color: '#EA2024' }}>Testimonials</h2>
                <h2 style={styles.heading}>Learn about Buzz Filing from entrepreneurs.</h2>
                <div style={styles.heading2}>Check out the experiences of entrepreneurs to learn more about Buzz Filing.</div>
            </div>
            <div style={styles.testimonialContainer}>
                <div style={styles.leftImageContainer}>
                    <img src="/images/left-img.svg" alt="Left img" width= {isMobile ?'300px':'450px'} />
                </div>
                <div style={styles.sliderContainer}>
                    <Slider {...sliderSettings}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} style={{ position: 'relative' }}>
                                <div style={{ display: 'flex', flexDirection: 'row', position: 'absolute',paddingLeft: isMobile?'30px':'', paddingTop: isMobile?'20px':'' }}>
                                    <img src={testimonial.image} alt="Face IMG" style={{ right: '5%', marginBottom: '5%' }} width={isMobile?'35%':''}/>
                                    <img src="/images/Vector.svg" alt="Quotes" style={{ marginLeft: isMobile?'80%': '100%' }} width={isMobile?'25%':''}/>
                                </div>
                                <Box style={styles.testimonialItem}>
                                    <h2 style={{ color: "#EA2024" }}>{testimonial.name}</h2>
                                    <div>{testimonial.role}</div>
                                    <p style={styles.testimonialText}>{testimonial.text}</p>
                                </Box>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
