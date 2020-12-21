import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [clicks, setClicks] = useState(0);

  
  useEffect(() => {
    updatedTime();
  }, []);

  function updatedTime() {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }
  
  function handleButtonClick(clicks) {
    setClicks(clicks)
    updatedTime()
  }

  return (
      <div className="App">
        <header className="App-header">
          <p>The current time is {currentTime}.</p>
          <Button className="btn btn-light" onClick={() => handleButtonClick(clicks + 1)}>Click This</Button>
          <p>You clicked this {clicks} times</p>
        </header>
      </div>
  );
}

export default App;
