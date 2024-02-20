import React, { useState, useEffect } from 'react';
import Countdown from './Countdown';
import './App.css';

function App() {
  const [targetDate, setTargetDate] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [timerId, setTimerId] = useState(null);
  const [countdownRunning, setCountdownRunning] = useState(false);

  const handleInputChange = (event) => {
    setTargetDate(event.target.value);
  };

  const StartCountdown = () => {
    const now = new Date().getTime();
    const targetTime = new Date(targetDate).getTime();
    const timeDifference = targetTime - now;

    if (timeDifference <= 0) {
      alert('Please select a future date.');
      return;
    }

    setCountdown(timeDifference);
    const id = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 0) {
          clearInterval(id);
          setCountdownRunning(false);
          return 0;
        }
        return prevCountdown - 1000;
      });
    }, 1000);
    setTimerId(id);
    setCountdownRunning(true);
  };

  const stopCountdown = () => {
    clearInterval(timerId);
    setCountdown(0);
    setCountdownRunning(false);
  };

  useEffect(() => {
    return () => clearInterval(timerId);
  }, [timerId]);

  return (
    <div className="App">
      <h1>Select Date and Time for the Countdown Timer</h1>
      {!countdownRunning ? (
        <div className="input-container">
          <input
            className='tim-in'
            type="datetime-local"
            value={targetDate}
            onChange={handleInputChange}
          />
          <button onClick={StartCountdown}>Start Countdown</button>
        </div>
      ) : (
        <Countdown countdown={countdown} onCancel={stopCountdown} />
      )}
    </div>
  );
}

export default App;
