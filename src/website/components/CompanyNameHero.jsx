import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { Star } from '@mui/icons-material';

const CompanyNameHero = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const styles = {
        container: {
            width: '100%',
            backgroundColor: 'white',
            boxSizing: 'border-box',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            padding: isMobile ? '0 10px' : '0',
        },
        starContainer: {
            marginTop: isMobile ? '6%' : '3%',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            flexDirection: 'row',
        },
        reviewText: {
            marginLeft: isMobile ? '0' : '10px',
            marginTop: isMobile ? '3px' : '0',
            color: 'black',
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: 'bold',
        },
        starIcon: {
            color: '#FFD700',
            fontSize: isMobile ? '18px' : '20px',
        },
        imageContainer: {
            position: 'relative',
            top: isMobile ? '0%' : '-5%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
        },
        vectorImage: {
            left: isMobile ? '-2%' : '0',
            top: isMobile ? '-20%' : '-50%',
            width: isMobile ? '90%' : '150%',
            maxHeight: isMobile ? '200px' : '800px', // Limiting the height
            zIndex: 1,
        },
        overlayContainer: {
            position: 'absolute',
            top: isMobile ? '0%' : '10%',
            width: '90%',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            padding: '20px',
            zIndex: 2,
        },
        overlayText: {
            color: '#333',
            fontSize: isMobile ? '14px' : '16px',
            lineHeight: '32px',
        },
        bottomText: {
            marginTop: '20px',
            color: '#333',
            fontSize: isMobile ? '14px' : '16px',
            lineHeight: '28px',
            textAlign: 'center',
            width:'90%'
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.starContainer}>
                <Star style={styles.starIcon} />
                <Star style={styles.starIcon} />
                <Star style={styles.starIcon} />
                <Star style={styles.starIcon} />
                <Star style={styles.starIcon} />
                <span style={styles.reviewText}>(2000+ reviews)</span>
            </div>
            <div>
                <h2 style={{ fontSize: isMobile ? '30px' : '50px', textAlign: 'center', lineHeight: '1.1', color: '#EA2024', margin: '2% 0 4%', marginTop: isMobile ? '5%' : '' }}>
                    Find the Perfect Name <br />for Your Company
                </h2>
            </div>
            <div style={styles.imageContainer}>
                <img src="/images/Vector 1.svg" alt="Vector Image" style={styles.vectorImage} />
                <div style={styles.overlayContainer}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={7}>
                            <div style={styles.overlayText}>
                                <p>One of the most important aspects of your business is its name. You may already have a name in mind, but you should see if it’s available first! The most common reason a proposed company name is rejected is because it’s either identical or very similar to an entity name that has already been registered with your State. Here are a few things to keep in mind when determining whether your company name is too similar to another existing entity:</p>
                                <ul>
                                    <li>Spacing and punctuation do not make one word different from another (e.g., AGX, A G X, and A.G.X. are all the same).</li>
                                    <li>"And" and "&" are considered the same.</li>
                                    <li>The plural or possessive version of a word is considered the same as the singular version (e.g., "Systems," "System," and "System’s" are the same).</li>
                                    <li>"Four," "4," and "IV" are considered the same.</li>
                                    <li>Abbreviations are the same as a full word (e.g., "Brothers" is the same as "Bros.").</li>
                                    <li>"The," "A," and "An" do not alone make one word different from another (e.g., "The Kitchen," "A Kitchen," and "Kitchen" are all considered the same).</li>
                                    <li>The entity suffix at the end of your company name does not make it different from other names (e.g., "Business Enterprises, Inc." is the same as "Business Enterprises, LLC").</li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <img src="/images/hero-right-img.svg" alt="Overlay Right Image" style={{ width: '100%', height: 'auto' }} />
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div style={styles.bottomText}>
                The entity naming rules are complicated, and even if the above guidelines are followed, your company name may still be rejected. But don’t worry, the name search tool on this page will help. When you provide us with your company information, you can also provide two alternative names that you’re willing to use for your company. That way, you’re covered if your first name is taken.
            </div>
        </div>
    );
}

export default CompanyNameHero;
