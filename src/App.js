import React from 'react';
import './App.css';

//components
import CountdownContainer from './components/CountdownContainer';



function App(props) {
  return (
    <div className="container-countdown">
      <h1>Countdown Timer</h1>
      <CountdownContainer />
    </div>
  );
}

export default App;
