import React, { useState } from 'react';
import { Button, Typography, Container, Box } from '@mui/material';

function MultiButton({ num, onClick }) {
  const output = [];

  for (let i = 1; i <= num; ++i) {
    output.push(
      <Button
        key={i}
        variant="contained"
        color="primary"
        onClick={() => onClick(i)}
        sx={{ margin: '4px' }}
      >
        第{i}個按鍵
      </Button>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {output}
    </Box>
  );
}

function App() {
  const [text, setText] = useState('hello CGU!!');

  const changeText = (i) => {
    setText(`按了第 ${i} 個按鍵！`);
  };

  return (
    <Container sx={{ textAlign: 'center', marginTop: '40px' }}>
      <Typography variant="h3" color="error" fontWeight="bold" gutterBottom>
        {text}
      </Typography>
      <MultiButton num={10} onClick={changeText} />
    </Container>
  );
}

export default App;