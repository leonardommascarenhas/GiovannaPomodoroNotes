import React, { useState, useEffect } from "react";

interface Time {
  seconds: number;
  minutes: number;
  hours: number;
}

interface Props {
  timeOut: number;
}

const Timer = ({ timeOut }: Props) => {
  const [time, setTime] = useState<Time>({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });
  const [intervalId, setIntervalId] = useState<number | undefined>(
    undefined
  );
  useEffect(() => {
    if (timeOut == time.minutes) {
      clearTimeout(intervalId);
    }
  }, [time]);

  const startTimer = () => {
    const id = setInterval(() => {
      setTime((current) => ({
        seconds: current.seconds < 59 ? current.seconds + 1 : 0,
        minutes:
          current.seconds === 59
            ? current.minutes < 59
              ? current.minutes + 1
              : 0
            : current.minutes,
        hours:
          current.seconds === 59 && current.minutes === 59
            ? current.hours + 1
            : current.hours,
      }));
    }, 1000);
    setIntervalId(id);
  };

  return (
    <div>
      <h1>
        {`
      ${time.hours.toString().padStart(2, "0")}:${time.minutes
          .toString()
          .padStart(2, "0")}:${time.seconds
          .toString()
          .padStart(2, "0")}
      `}
      </h1>
      <button onClick={startTimer}>Teste</button>
    </div>
  );
};

export default Timer;
