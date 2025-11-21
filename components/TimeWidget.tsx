import React, { useState, useEffect } from 'react';

interface TimeWidgetProps {
  timezone?: string;
}

const TimeWidget: React.FC<TimeWidgetProps> = ({ timezone = 'Asia/Colombo' }) => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
          timeZone: timezone,
        })
      );
      setDate(
        now.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          timeZone: timezone,
        })
      );
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timezone]);

  return (
    <div className="bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-sm p-4 rounded-lg shadow-lg text-white text-center">
      <div className="text-4xl font-bold mb-1">{time}</div>
      <div className="text-lg font-light">{date}</div>
    </div>
  );
};

export default TimeWidget;