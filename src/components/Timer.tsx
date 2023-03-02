import React, { useState, useEffect } from "react";

interface Time {
  seconds: number;
  minutes: number;
  hours: number;
}
interface Props {
  timeOutSeconds: number;
  timeOutMinutes: number;
  timeOutHours: number;
}

const Timer = ({ timeOutSeconds, timeOutMinutes, timeOutHours }: Props) => {
  const [time, setTime] = useState<Time>({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });
  const [intervalId, setIntervalId] = useState<number | undefined>(undefined);
  useEffect(() => {
    if (
      timeOutSeconds == time.seconds &&
      timeOutMinutes == time.minutes &&
      timeOutHours == time.hours
    ) {
      clearInterval(intervalId);
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

  const formatTime = (hours: number, minutes: number, seconds: number) => {
    const timeFormated = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}
      `;
    return timeFormated;
  };
  return (
    <section>
      <h1>Sessão {formatTime(timeOutHours, timeOutMinutes, timeOutSeconds)}</h1>
      <p>{formatTime(time.hours, time.minutes, time.seconds)}</p>
      <button onClick={startTimer}>Iniciar</button>
    </section>
  );
};

export default Timer;
