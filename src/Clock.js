import React, { useState, useEffect } from 'react';
import './Clock.css';

const Clock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const formatTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const amPm = hours >= 12 ? 'PM' : 'AM';

      hours = hours % 12 || 12; // Convert to 12-hour format and handle 0-hour edge case
      setTime(`${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${amPm}`);
    };

    formatTime();
    const intervalId = setInterval(formatTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock-container">
      <div className="clock-time">
        {time.split(' ')[0]}
        <span className="clock-am-pm">{time.split(' ')[1]}</span>
      </div>
    </div>
  );
};

export default Clock;
