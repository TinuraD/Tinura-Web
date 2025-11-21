import React, { useState, useEffect } from 'react';

interface TimeDisplayProps {
  timezone?: string;
}

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timezone = 'Asia/Colombo' }) => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
          timeZone: timezone,
        })
      );
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timezone]);

  return <div className="text-sm px-3">{currentTime}</div>;
};

export default TimeDisplay;