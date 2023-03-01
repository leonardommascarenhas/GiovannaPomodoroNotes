import React, { useState } from "react";

interface Time {
  hours: number;
  minutes: number;
  seconds: number;
  miliSeconds?: number;
}

const Timer = () => {
  const [time, setTime] = useState<Time>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const handleTime = () => {
    setTimeout(() => {
      setTime((prev) => ({
        ...prev,
        seconds: time.seconds + 1,
      }));
      if (time.seconds == 60) {
        setTime((prev) => ({
          ...prev,
          minutes: time.minutes++,
        }));
      }
      if (time.minutes == 60) {
        setTime((prev) => ({
          ...prev,
          hours: time.hours + 1,
          minutes: 0,
        }));
      }
    }, 1000);
  };

  return <div> </div>;
};

export default Timer;
