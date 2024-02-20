import React from 'react';
import './Countdown.css';
import alarmSound from './alarm.mp3';


const Countdown = ({ countdown, onCancel }) => {


    const formatTime = (time) => {
        let days = Math.floor(time / (1000 * 60 * 60 * 24));
        let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((time % (1000 * 60)) / 1000);
        
        if (days > 99) {
            days = 99;
            hours = 99;
            minutes = 99;
            seconds = 99;
        }
    
        return (
          <div className="countdown-time">
            <div className='showcase'>{days}</div>
            <div className='showcase'>{hours}</div>
            <div className='showcase'>{minutes}</div>
            <div className='showcase'>{seconds}</div>
          </div>
        );
    };
    

  return (
    <div className="countdown-container">
      <h2>Countdown:</h2>
      <div className="countdown-box">
        {formatTime(countdown)}
      </div>
      <div className="countdown-box">
        <div className="countdown-label">Days</div>
        <div className="countdown-label">Hours</div>
        <div className="countdown-label">Minutes</div>
        <div className="countdown-label">Seconds</div>
      </div>
      
      <button onClick={onCancel}>Cancel Countdown</button>
    </div>
  );
};

export default Countdown;
