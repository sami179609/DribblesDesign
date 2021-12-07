import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import DropDownMenu from './DropDownMenu';
import Button from './Button'
import PropTypes from 'prop-types';

const Header1 = ({ Heading, style}) => {
 
  return (
    <>
      <Box
        component="span"
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          style={style }
        >
          <Box
            component="span"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: 7,
            }}
          >
            <Typography variant="h1">{Heading}</Typography>
            <DropDownMenu />
          </Box>
          <Stack
            direction="row"
            spacing={0.5}
            style={{ marginLeft: 7, fontWeight:'bold' }}
          >
            <Button Label ="Small meeting Room"/>
            <Button Label ="Boardroom"/>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

Header1.propTypes = {
  Heading: PropTypes.string,

};
export default Header1;
