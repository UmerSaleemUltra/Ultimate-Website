import { Padding } from "@mui/icons-material"
import { Button } from "@mui/material"
import Comparison from "./Comparison"
import { useNavigate } from "react-router-dom"
export default function PricingTable() {
    const styles = {
        root: {
            width: '100%',
            background: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            border: '5px solid #EA2024',
            borderRadius: '10px',
            margin: 20
        }
    }

    const navigate = useNavigate()

    return (<div style={styles.root}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', alignItems: 'center', }}>
            <div >
                <Button variant="outlined" color="error" style={{ textTransform: 'capitalize', borderRadius: '35px', fontSize: 10 }}>
                    First Year
                </Button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10 }}>
                <snap>$179 + State Fee</snap>
                <snap style={{ color: '#A1A5B7' }}>Business</snap>
                <h1><span style={{fontSize:15}}>$</span>229</h1>
                <Button onClick={() => {navigate('/start');window.scrollTo(0, 0);}}  variant="outlined" color="error" style={{textTransform:'capitalize'}}>
                       Start
                </Button>
            </div>
        </div>
        <div>
            <Comparison />
        </div>
    </div>)
}