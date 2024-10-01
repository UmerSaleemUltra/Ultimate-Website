import { Box, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material"
import { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PricingTable from "./PricingTable";
import StarIcon from '@mui/icons-material/Star';
import SecurityIcon from '@mui/icons-material/Security';


const data = { 'LLC': ['MP', 'Rajasthan', 'UP', 'Telangana', 'Andhra Pradesh'] }

const q = [
    { querys: "Do I need to be a US citizen to work with Micahguru Formations?", Ans: 'No, you don t! We help entrepreneurs around the world get their businesses incorporated.' },
    { querys: "What's the Micahguru Formations process?", Ans: 'We ll set up your company and get you an EIN (Employer Identification Number), open a bank account for your business, and give you your business mailing address so you can share it with your clients.' },
    { querys: "How long does it take to start a company with Micahguru Formations?", Ans: 'The process of formation varies depending on the state you choose, but it generally takes six to ten business days, and obtaining an EIN from the IRS takes two to three weeks.' },
    { querys: "What is an LLC (Limited Liability Company)?", Ans: 'A limited liability company, or LLC, is a business structure that provides its owners with some legal protection from creditors.' },
    { querys: "What is a Registered Agent?", Ans: 'A Registered Agent is a person or business authorized to receive legal documents on behalf of a corporation or limited liability company (LLC). These documents include summonses, notices, and other official communications from government agencies.' },
]

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
}

export default function RegisterForm() {
    const [intity, setIntity] = useState('');
    const [state, setState] = useState('');

    const handleChange = (event) => {
        setIntity(event.target.value);
    };

    const AccordionExpandIcon = (item) => {
        return (
            <div style={{ marginBottom: 15 }}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography >{item.querys}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{color:'#A1A5B7',fontSize:'0.8rem'}}>
                            {item.Ans}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        );
    }

    return (<div style={styles.root}>
        <div style={{ ...styles.root, width: '55%', }}>
            <h1 style={{ ...styles.root, }} >
                Start your Business with
            </h1>
            <h1 style={{ marginTop: '-10px' }}>
                Confidence
            </h1>
            <span style={{ color: '#A1A5B7' }}>Start a business today by choosing your state of formation and entity type.</span>
        </div>
        <Grid container spacing={2} padding={'6% 20%'} >
            <Grid item xs={6}>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Intity type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={intity}
                            label="Intity type"
                            onChange={handleChange}
                        >
                            <MenuItem value={'LLC'}>LLC - Limited Company</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">State Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={state}
                            label="State Type"
                            onChange={(e)=>setState(e.target.value)}
                        >
                            {data[intity]?.map((item) => {
                                return (<MenuItem value={item}>{item}</MenuItem>)
                            })}
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
        </Grid>
        <Grid container spacing={2} width={400} style={{gap:20}}>
            <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ background: '#ea2024', padding: 5, borderRadius: '10px' }}>
                    <StarIcon sx={{ color: '#fff', width: 40, height: 40, }} />
                </div>
                <div>
                    <span  >More trusted, Verified reviews</span>
                    <div style={{ color: '#A1A5B7' ,fontSize: 12, }}>Rating</div>
                </div>
            </Grid>

            <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ background: '#ea2024', padding: 5, borderRadius: '10px' }}>
                    <SecurityIcon sx={{ color: '#fff', width: 40, height: 40, }} />
                </div>
                <div>
                    <span>Top Notch Customer Support</span>
                </div>
            </Grid>
        </Grid>
        <div style={{ ...styles.root, color: '#A1A5B7',marginTop:60 }}>
            <span>State-specific pricing will display below once</span>
            <span> your selection has been made.</span>
        </div>
        {state ? <><div style={{ width: '80%' }}>
            <PricingTable />
        </div></> : <></>}

        <h1 style={{ padding: 25 }}>
            Frequently Asked Questions
        </h1>
        <div style={{ width: '50%',marginBottom:70 }}>
            {q?.map((item) => {
                return (<>{AccordionExpandIcon(item)}</>)
            })}
        </div>
    </div>)
}