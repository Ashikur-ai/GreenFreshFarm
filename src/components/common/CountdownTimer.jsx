import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-white p-4">
      <div className="flex space-x-4 text-center mt-4">
        <div>
          <p className="text-2xl font-bold">{String(timeLeft.days).padStart(2, '0')}</p>
          <span>DAYS</span>
        </div>
        <div>
          <p className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</p>
          <span>HOURS</span>
        </div>
        <div>
          <p className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</p>
          <span>MINS</span>
        </div>
        <div>
          <p className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</p>
          <span>SECS</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
