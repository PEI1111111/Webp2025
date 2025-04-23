import logo from './logo.svg';
import './App.css';
import React from 'react';

const changeText = (event) => {
  console.log(event.target);
  event.target.innerText = event.target.innerText + '被點了';
};

const styleArgument = {
  color: 'red',
  cursor: 'pointer'
};

function App() {
  return (
    <div className="App">
      <h1 style={styleArgument} onClick={changeText}>
        hello CGU!!
      </h1>
    </div>
  );
}

export default App;