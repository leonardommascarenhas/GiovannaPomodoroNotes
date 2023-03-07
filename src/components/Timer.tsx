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
  restTimeOutH: number;
  restTimeOutM: number;
  restTimeOutS: number;
}

const Timer = ({ timeOutS, timeOutM, timeOutH, restTimeOutM, restTimeOutH, restTimeOutS }: Props) => {
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
  const [isResting, setIsResting] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (timeOutS == time.seconds && timeOutM == time.minutes && timeOutH == time.hours) {
      clearInterval(intervalId);
      setIsResting(!isResting);
    }
  }, [time]);
  useEffect(() => {
    if (restTimeOutS == rest.restS && restTimeOutM == rest.restM && restTimeOutH == rest.restH) {
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
            current.seconds === 59 ? (current.minutes < 59 ? current.minutes + 1 : 0) : current.minutes,
          hours: current.seconds === 59 && current.minutes === 59 ? current.hours + 1 : current.hours,
        }));
      }, 1000);
      setIntervalId(id);
    }
    if (isResting) {
      const id = setInterval(() => {
        setRest((current) => ({
          restS: current.restS < 59 ? current.restS + 1 : 0,
          restM: current.restS == 59 ? (current.restM < 59 ? current.restM + 1 : 0) : current.restM,
          restH: current.restM == 59 && current.restS == 59 ? current.restH + 1 : current.restH,
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
    <section className="flex flex-col gap-4 bg-white bg-opacity-50 rounded-lg p-4 transition">
      {!isResting ? (
        <>
          <h2>timer de estudo</h2>
          <p>{formatTime(time.hours, time.minutes, time.seconds)}</p>
        </>
      ) : (
        <>
          <h1>{formatTime(restTimeOutH, restTimeOutM, restTimeOutS)}</h1>
          <h2>Timer de descanso</h2>
          <p>{formatTime(rest.restH, rest.restM, rest.restS)}</p>
        </>
      )}
      <button
        onClick={startTimer}
        className="bg-blue-500 rounded-sm px-2 py-1 text-white text-lg font-bold font-lato hover:bg-blue-600"
      >
        Iniciar
      </button>
    </section>
  );
};

export default Timer;
