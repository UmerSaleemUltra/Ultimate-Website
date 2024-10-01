import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';

const Comparison = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const styles = {
        container: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            boxSizing: 'border-box',
            padding: isMobile ? '2% 2% 10%' : '1% 3% 7%',
        },
        table: {
            width: isMobile ? '100%' : '1100px',
            borderCollapse: 'collapse',
            textAlign: 'center',
            border: 'none',
            backgroundColor: '#fff',
        },
        th: {
            border: '1px solid white',
            padding: isMobile ? '5%' : '2.5%',
            backgroundColor: '#f9f9f9',
            fontWeight: '600',
            fontSize: isMobile ? '12px' : '16px',
            color: 'black',
        },
        thBuzzFiling: {
            backgroundColor: 'black',
            color: 'white', 
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
        },
        td: {
            borderBottom: '1px solid grey',
            padding: isMobile ? '5%' : '2.5%',
            fontSize: isMobile ? '12px' : '14px',
        },
        column1: {
            color: 'black',
        },
        column2: {
            backgroundColor: 'black',
            color: 'white', 
            padding: isMobile ? '10px' : '20px',
            borderRadius: '0px',
        },
        column2Total: {
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
        },
        totalRow: {
            fontWeight: '600',
            backgroundColor: '#f9f9f9',
        },
        image: {
            width: isMobile ? '15px' : '20px',
            height: isMobile ? '15px' : '20px',
        },
        totalText: {
            color: 'white',
        },
        totalBold: {
            fontWeight: '600',
        },
        blackBold: {
            color: 'black',
            fontWeight: '600',
        },
    };

    const rowContent = [
        ['Company Formation'],
        ['EIN'],
        ['Registered Address'],
        ['Business Address'],
        ['Operating Agreement'],
        ['US Bank Account'],
        ['Compliance Calendar'],
        ['Digital Document Access'],
        ['Total', '$699 + State Fee', '$699 + State Fee', '$699 + State Fee'],
    ];

    const renderRow = (rowIndex) => {
        const isImageRow = rowIndex <= 7;
        const iconSrc = {
            buzzFiling: '/images/check-icon.svg',
            column3:
                [0, 1, 3, 5, 7].includes(rowIndex)
                    ? '/images/check-icon.svg'
                    : '/images/cross-icon.svg',
            column4:
                [2, 6, 7].includes(rowIndex)
                    ? '/images/check-icon.svg'
                    : '/images/cross-icon.svg',
        };

        return (
            <tr key={rowIndex}>
                <td style={{ ...styles.td, ...styles.column1, ...(rowIndex === 8 && styles.totalBold) }}>
                    {rowContent[rowIndex][0]}
                </td>
                <td style={{ 
                        ...styles.td, 
                        ...styles.column2, 
                        ...(rowIndex === 8 && styles.column2Total)  
                    }}>
                    {isImageRow ? (
                        <img src={iconSrc.buzzFiling} alt="icon" style={styles.image} />
                    ) : (
                        <span style={styles.totalText}>{rowContent[rowIndex][1]}</span>
                    )}
                </td>
                <td style={{ ...styles.td, ...(rowIndex === 8 && styles.blackBold) }}>
                    {isImageRow ? (
                        <img src={iconSrc.column3} alt="icon" style={styles.image} />
                    ) : (
                        rowContent[rowIndex][2]
                    )}
                </td>
                <td style={{ ...styles.td, ...(rowIndex === 8 && styles.blackBold) }}>
                    {isImageRow ? (
                        <img src={iconSrc.column4} alt="icon" style={styles.image} />
                    ) : (
                        rowContent[rowIndex][3]
                    )}
                </td>
            </tr>
        );
    };

    return (
        <div style={styles.container}>
            <h2 style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '50px', color:'#EA2024' }}>COMPARISON</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={{ ...styles.th }}>Comparison</th>
                        <th style={{ ...styles.th, ...styles.thBuzzFiling }}>Buzz Filing</th>
                        <th style={styles.th}>Others</th>
                        <th style={styles.th}>Others</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 8 }, (_, i) => renderRow(i))}
                    {renderRow(8)}
                </tbody>
            </table>
        </div>
    );
};

export default Comparison;
