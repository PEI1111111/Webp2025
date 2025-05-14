import React from 'react';
import IconButton from '@mui/material/IconButton';  // 使用 MUI v5
import DeleteIcon from '@mui/icons-material/Delete';  // 使用 MUI v5
import AlarmIcon from '@mui/icons-material/Alarm';  // 使用 MUI v5
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';  // 使用 MUI v5

const MultiButton = (num) => {
  let output = [];

  // 渲染 num 个按钮
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