import React, { useState, useEffect } from "react";

interface Time {
  seconds: number;
  minutes: number;
  hours: number;
}
interface Props {
  timeOutS: number;
  timeOutM: number;
  timeOutH: number;
  resttH: number;
  resttM: number;
  resttS: number;
}

const Timer = ({ timeOutS, timeOutM, timeOutH, resttM, resttH, resttS }: Props) => {
  const [time, setTime] = useState<Time>({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });
  const [rest, setRest] = useState({
    restH: 0,
    restM: 0,
    restS: 0,
  });
  const [isResting, setIsResting] = useState(false);

  const [intervalId, setIntervalId] = useState<number | undefined>(undefined);
  useEffect(() => {
    if (timeOutS == time.seconds && timeOutM == time.minutes && timeOutH == time.hours) {
      clearInterval(intervalId);
      setIsResting(!isResting);
    }
  }, [time]);
  useEffect(() => {
    if (resttS == rest.restS && resttM == rest.restM && resttH == rest.restH) {
      clearInterval(intervalId);
      setIsResting(!isResting);
    }
  }, [rest]);

  const startTimer = () => {
    if (!isResting) {
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
    }
    if (isResting) {
      const id = setInterval(() => {
        setRest((current) => ({
          restS: current.restS < 59 ? current.restS + 1 : 0,
          restM:
            current.restS == 59
              ? current.restM < 59
                ? current.restM + 1
                : 0
              : current.restM,
          restH:
            current.restM == 59 && current.restS == 59
              ? current.restH + 1
              : current.restH,
        }));
      }, 1000);
      setIntervalId(id);
    }
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
      <h1>Sessão {formatTime(timeOutH, timeOutM, timeOutS)}</h1>
      <h1>{formatTime(resttH, resttM, resttS)}</h1>
      <p>{formatTime(time.hours, time.minutes, time.seconds)}</p>
      <p>{formatTime(rest.restH, rest.restM, rest.restS)}</p>
      <button onClick={startTimer}>Iniciar</button>
    </section>
  );
};

export default Timer;
