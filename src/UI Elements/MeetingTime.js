import React  from 'react';
import Box from '@mui/material/Box';
import Time from './Time';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const MeetingTime = () => {
  return (
    <>
      <Box style={{ display: 'flex', marginTop: 13 }}>
        <Time Time= 'Start Time' Date= '29 Nov 2021, 3:30pm'  />
        <ChevronRightIcon style={{ fontSize: 30, marginTop: 5 }} />
        <Time Time= 'End Time' Date= '31 Nov, 7:00pm'  />
      </Box>
    </>
  );
};

export default MeetingTime;
