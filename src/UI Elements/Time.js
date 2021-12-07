import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';


const Time = ({Time, Date}) => {
  
  return (
    <Box>
      <Typography variant="subtitle1" color="primary">
        {Time}
      </Typography>

      <Typography variant="subtitle2">{Date}</Typography>
    </Box>
  );
};
Time.propTypes = {
  Time: PropTypes.string,
  Date: PropTypes.string,
};
export default Time;