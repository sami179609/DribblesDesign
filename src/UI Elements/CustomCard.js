import React from 'react';
import Box from '@mui/material/Box';

const CustomCard = (props) => {
  return (
    <>
      <Box
        style={{
          padding: '20px 20px 20px 25px',
          width: 340,
          borderRadius: 20,
          minHeight: 180,
          boxShadow: ' 0px 2px 12px -7px',
          background: 'white',
        }}
      >
        {props.children}
      </Box>
    </>
  );
};

export default CustomCard;