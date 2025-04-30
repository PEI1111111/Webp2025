import React from 'react';
import IconButton from '@mui/material/IconButton';  
import DeleteIcon from '@mui/icons-material/Delete';  
import AlarmIcon from '@mui/icons-material/Alarm';  
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';  

const MultiButton = (num) => {
  let output = [];

  for (let i = 1; i <= num; i++) {
    output.push(
      <IconButton color="primary" aria-label="add to shopping cart" key={`add-cart-${i}`}>
        <AddShoppingCartIcon />
      </IconButton>
    );
    output.push(
      <IconButton color="primary" aria-label="delete" key={`delete-${i}`}>
        <DeleteIcon />
      </IconButton>
    );
    output.push(
      <IconButton color="primary" aria-label="add an alarm" key={`alarm-${i}`}>
        <AlarmIcon />
      </IconButton>
    );
  }

  return output;
};

export default MultiButton;
