import React from 'react';

const states = [
    { id: 1, title: 'Alabama', logo: 'images/alabama.svg', link: 'https://example.com/alabama' },
    { id: 2, title: 'Alaska', logo: 'images/alaska.svg', link: 'https://example.com/alaska' },
    { id: 3, title: 'Arizona', logo: 'images/arizona.svg', link: 'https://example.com/arizona' },
    { id: 4, title: 'Arkansas', logo: 'images/arkansas.svg', link: 'https://example.com/arkansas' },
    { id: 5, title: 'California', logo: 'images/california.svg', link: 'https://example.com/california' },
    { id: 6, title: 'Colorado', logo: 'images/colorado.svg', link: 'https://example.com/colorado' },
    { id: 7, title: 'Connecticut', logo: 'images/connecticut.svg', link: 'https://example.com/connecticut' },
    { id: 8, title: 'Delaware', logo: 'images/delaware.svg', link: 'https://example.com/delaware' },
    { id: 9, title: 'Florida', logo: 'images/florida.svg', link: 'https://example.com/florida' },
    { id: 10, title: 'Georgia', logo: 'images/georgia.svg', link: 'https://example.com/georgia' },
    { id: 11, title: 'Hawaii', logo: 'images/hawaii.svg', link: 'https://example.com/hawaii' },
    { id: 12, title: 'Idaho', logo: 'images/idaho.svg', link: 'https://example.com/idaho' },
    { id: 13, title: 'Illinois', logo: 'images/illinois.svg', link: 'https://example.com/illinois' },
    { id: 14, title: 'Indiana', logo: 'images/indiana.svg', link: 'https://example.com/indiana' },
    { id: 15, title: 'Iowa', logo: 'images/iowa.svg', link: 'https://example.com/iowa' },
    { id: 16, title: 'Kansas', logo: 'images/kansas.svg', link: 'https://example.com/kansas' },
    { id: 17, title: 'Kentucky', logo: 'images/kentucky.svg', link: 'https://example.com/kentucky' },
    { id: 18, title: 'Louisiana', logo: 'images/louisiana.svg', link: 'https://example.com/louisiana' },
    { id: 19, title: 'Maine', logo: 'images/maine.svg', link: 'https://example.com/maine' },
    { id: 20, title: 'Maryland', logo: 'images/maryland.svg', link: 'https://example.com/maryland' },
    { id: 21, title: 'Massachusetts', logo: 'images/massachusetts.svg', link: 'https://example.com/massachusetts' },
    { id: 22, title: 'Michigan', logo: 'images/michigan.svg', link: 'https://example.com/michigan' },
    { id: 23, title: 'Minnesota', logo: 'images/minnesota.svg', link: 'https://example.com/minnesota' },
    { id: 24, title: 'Mississippi', logo: 'images/mississippi.svg', link: 'https://example.com/mississippi' },
    { id: 25, title: 'Missouri', logo: 'images/missouri.svg', link: 'https://example.com/missouri' },
    { id: 26, title: 'Montana', logo: 'images/montana.svg', link: 'https://example.com/montana' },
    { id: 27, title: 'Nebraska', logo: 'images/nebraska.svg', link: 'https://example.com/nebraska' },
    { id: 28, title: 'Nevada', logo: 'images/nevada.svg', link: 'https://example.com/nevada' },
    { id: 29, title: 'New Hampshire', logo: 'images/new-hampshire.svg', link: 'https://example.com/newhampshire' },
    { id: 30, title: 'New Jersey', logo: 'images/new-jersey.svg', link: 'https://example.com/newjersey' },
    { id: 31, title: 'New Mexico', logo: 'images/new-mexico.svg', link: 'https://example.com/newmexico' },
    { id: 32, title: 'New York', logo: 'images/new-york.svg', link: 'https://example.com/newyork' },
    { id: 33, title: 'North Carolina', logo: 'images/north-carolina.svg', link: 'https://example.com/northcarolina' },
    { id: 34, title: 'North Dakota', logo: 'images/north-dakota.svg', link: 'https://example.com/northdakota' },
    { id: 35, title: 'Ohio', logo: 'images/ohio.svg', link: 'https://example.com/ohio' },
    { id: 36, title: 'Oklahoma', logo: 'images/oklahoma.svg', link: 'https://example.com/oklahoma' },
    { id: 37, title: 'Oregon', logo: 'images/oregon.svg', link: 'https://example.com/oregon' },
    { id: 38, title: 'Pennsylvania', logo: 'images/pennsylvania.svg', link: 'https://example.com/pennsylvania' },
    { id: 39, title: 'Rhode Island', logo: 'images/rhodeisland.svg', link: 'https://example.com/rhodeisland' },
    { id: 40, title: 'South Carolina', logo: 'images/south-carolina.svg', link: 'https://example.com/southcarolina' },
    { id: 41, title: 'South Dakota', logo: 'images/south-dakota.svg', link: 'https://example.com/southdakota' },
    { id: 42, title: 'Tennessee', logo: 'images/tennessee.svg', link: 'https://example.com/tennessee' },
    { id: 43, title: 'Texas', logo: 'images/texas.svg', link: 'https://example.com/texas' },
    { id: 44, title: 'Utah', logo: 'images/utah.svg', link: 'https://example.com/utah' },
    { id: 45, title: 'Vermont', logo: 'images/vermont.svg', link: 'https://example.com/vermont' },
    { id: 46, title: 'Virginia', logo: 'images/virginia.svg', link: 'https://example.com/virginia' },
    { id: 47, title: 'Washington', logo: 'images/washington.svg', link: 'https://example.com/washington' },
    { id: 48, title: 'West Virginia', logo: 'images/west-virginia.svg', link: 'https://example.com/westvirginia' },
    { id: 49, title: 'Wisconsin', logo: 'images/wisconsin.svg', link: 'https://example.com/wisconsin' },
    { id: 50, title: 'Wyoming', logo: 'images/wyoming.svg', link: 'https://example.com/wyoming' },
];

const SearchState = () => {

    const styles = {
        container: {
            marginTop:'3%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridGap: '10px',
            width: '80%',
            marginTop:'3%',
            marginBottom:'5%'
            // padding: '50px',
        },
        card: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent: 'center',
            border: '1px solid #FFA1A3',
            width: '200px',
            padding: '10px',
            borderRadius:'5px'
        },
        img: {
            width: '30px',
            height: '30px',
            objectFit: 'cover',
            
        },
        stateName: {
            // marginTop: '10px',
            fontSize: '13px',
            fontWeight: 400,
            marginLeft:'10%'
        }
    }

    return (
        <div style={styles.container}>
            <h3 style={{ fontSize: '35px' }}>Search your company name in each state</h3>
            <div style={styles.grid}>
                {states.map(state => (
                    <div key={state.id} style={styles.card}>
                        <img src={state.logo} alt={state.title} style={styles.img} />
                        <div style={styles.stateName}>{state.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchState;
