import { Grid, Paper } from "@mui/material";
import Steppers from "./Steppers";
import { useState } from 'react';
import Step0 from './Step0';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";


const styles = { root: { display: 'flex', alignItems: 'center', width: '100%', flexDirection: 'column', background: '#F5F6FD' } }
export default function MultiStepForm() {

    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({});

    const handleNext = (data) => {
        console.log('DATA:', data)

        setFormData((prev) => ({ ...prev, ...data }));
        setStep((prev) => prev + 1);
    };

    const handlePrev = () => {
        setStep((prev) => prev - 1);
    };

    const handleSubmit = (data) => {
        setFormData((prev) => ({ ...prev, ...data }));
        console.log('Form submitted with data:', { ...formData, ...data });
        alert('Data Submited')
        setStep(0)
    };


    return (
        <div style={{ padding: '0 6%' }} >
            <Grid container spcing={2} style={{ marginTop: '5%' }} gap={2}>
                <Grid item xs={3.3} >
                    <div style={{ padding: 20 }}>
                        <Steppers step={step} />
                    </div>

                </Grid>
                <Grid item xs={8}>
                    <div style={{ padding: 20 }}>
                        {step === 0 &&
                            <Step0 onNext={handleNext} />
                        }
                        {step === 1 && (
                            <Step1 onNext={handleNext} onPrev={handlePrev} />
                        )}
                        {step === 2 && (
                            <Step2 onPrev={handlePrev}
                                onNext={handleNext}
                            />
                        )}
                        {step === 3 && (
                            <Step3 onNext={handleNext} onPrev={handlePrev} />
                        )}
                        {step === 4 && (
                            <Step4 onNext={handleNext} onPrev={handlePrev} />
                        )}
                        {step === 5 && (
                            <Step5 onNext={handleNext} onPrev={handlePrev} />
                        )}
                        {step === 6 && (
                            <Step6 onSubmit={handleSubmit} onPrev={handlePrev} />
                        )}
                    </div>
                </Grid>
            </Grid>
        </div>)
}
