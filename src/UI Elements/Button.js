import React from 'react';
import Chip from '@mui/material/Chip';
import PropTypes from 'prop-types';



const Button = ({Label, Icon, style}) => {
  
  return (
    <Chip  size="small" label={Label} icon={Icon}  style={style} />
       
  
    
  );
};
Button.propTypes = {
  Label: PropTypes.string,
};

export default Button;