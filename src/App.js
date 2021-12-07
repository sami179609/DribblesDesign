import React from 'react';
import './App.css';
import CustomCard from './UI Elements/CustomCard';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import Header1 from './UI Elements/Header1';
import theme from './theme';
import Box from '@mui/material/Box';
import MeetingTime from './UI Elements/MeetingTime';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import Typography from '@mui/material/Typography';
import Button from './UI Elements/Button'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 120,
  },
});


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        style={{
          display: 'flex',
          marginTop: 100,
          marginBottom: 100,
          justifyContent: 'space-around',
        }}
      >
        <Grid container rowSpacing={4} columnSpacing={{ md: -15 }}>
          <Grid item md={4}>
            <CustomCard>
              <Header1 Heading="HDMI Room" style={{borderLeft: '4px solid #F0783C'}} />
              <MeetingTime />
              <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 35,
          }}
        >
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <Button
              Icon={<AddIcon style={{ fontSize: '10', marginLeft: 10 }} />}
              style={{ borderRadius: '5px', width: 18, height: 18 }}
            />
            <Typography
              variant="subtitle1"
              color="primary"
              style={{ marginLeft: 7 }}
            >
              Projectors(2),Catering
            </Typography>
          </Box>
          <CustomWidthTooltip  placement="top-end" arrow title="This booking has not been yet confirmed!">
            <Box>
            <Button
              Label="Pending"
              Icon={<MoreTimeIcon  />}
            
              style={{
                background : "#F9C9B2" ,
                cursor: 'pointer',
              }}
            />
            </Box>
         </CustomWidthTooltip>       
        </Box>
            </CustomCard>
          </Grid>
          <Grid item md={4}>
            <CustomCard>
              <Header1 Heading="RJ-45 Room" style={{borderLeft: '4px solid #DDB40A'}} />
              <MeetingTime />
              <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 35,
          
          }}
        >
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <Button
              Icon={<AddIcon style={{ fontSize: '10', marginLeft: 10 }} />}
              style={{ borderRadius: '5px', width: 18, height: 18 }}
            />
            <Typography
              variant="subtitle1"
              color="primary"
              style={{ marginLeft: 7 }}
            >
              Catering
            </Typography>
          </Box>
          <CustomWidthTooltip placement="top-end" arrow title="This booking has been  confirmed">
            <Box>
            <Button
              Label="Confirmed"
              Icon={<CheckBoxOutlinedIcon  />}
            
              style={{
                background : "#AAE3C0" ,
                cursor: 'pointer',
              }}
            />
            </Box>
          </CustomWidthTooltip>
        </Box>
            </CustomCard>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}