// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import { styled } from '@mui/material/styles';

// // Define your custom styles
// const CustomStep = styled(Step)(({ theme }) => ({
//   '& .MuiStepIcon-root': {
//     border:'10px solid yellow',
//     borderRadius:'50%',
//     color: 'gray', // Default color for inactive dots
//   },
//   '& .MuiStepIcon-active': {
//     color: 'blue', // Color for active dot
//   },
//   '& .MuiStepIcon-completed': {
//     color: 'green', // Color for completed dots
//   },
// }));

// const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
//   '& .MuiStepLabel-label': {
//     fontWeight: 'bold', // Customize the font weight
//   },
// }));

// const steps = [
//   'Entity Information',
//   'Company Info',
//   'Members',
//   'Company Address',
//   'Place Order',
// ];

// export default function Steppers() {
//   return (
//     <Box sx={{ width: '50%', padding: 5, }}>
//       <Stepper activeStep={0} alternativeLabel>
//         {steps.map((label, index) => (
//           <CustomStep key={label}>
//             <CustomStepLabel>{label}</CustomStepLabel>
//           </CustomStep>
//         ))}
//       </Stepper>
//     </Box>
//   );
// }



import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const steps = [
  {
    label: 'Account Info',
    description: `Setup Your Account Details`,
  },
  {
    label: 'Business Info',
    description:'Your Business Related Info',
  },
  {
    label: 'Members Details',
    description:'Your Members Related Info',
  },
  {
    label: 'Addons (Additional Services)',
    description:'Add extra services to your package',
  },
  {
    label: 'Summary',
    description:'Check your shopping details',
  },
  {
    label: 'Billing Details',
    description:'Set Your Payment Methods',
  },
  {
    label: 'Completed',
    description:'Woah, we are here',
  },
];

export default function VerticalLinearStepper({step}) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400, display: 'flex', justifyContent: 'center' }}>
      <Stepper activeStep={step} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === steps.length - 1 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
              <Typography fontSize={14}>{step.description}</Typography>
            </StepLabel>
            <StepContent>
            
              {/* <Box sx={{ mb: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {index === steps.length - 1 ? 'Finish' : 'Continue'}
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
              </Box> */}
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {/* {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )} */}
    </Box>
  );
}
