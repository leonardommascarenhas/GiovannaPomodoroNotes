import { useState, useEffect } from "react";
import Study from "./TimerDisplay/Study";
import Rest from "./TimerDisplay/Rest";

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
  const [isStarted, setIsStarted] = useState<boolean>(false);

  useEffect(() => {
    if (timeOutS == time.seconds && timeOutM == time.minutes && timeOutH == time.hours) {
      clearInterval(intervalId);
      setIsResting(!isResting);
      setTime({ hours: 0, minutes: 0, seconds: 0 });
    }
  }, [time]);

  useEffect(() => {
    if (restTimeOutS == rest.restS && restTimeOutM == rest.restM && restTimeOutH == rest.restH) {
      clearInterval(intervalId);
      setIsResting(!isResting);
      setRest({ restH: 0, restM: 0, restS: 0 });
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
    setIsStarted(true);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIsStarted(false);
  };
  const formatTime = (hours: number, minutes: number, seconds: number) => {
    let timeFormated = "";

    if (hours >= 1) {
      timeFormated += `${hours.toString().padStart(2, "0")}:`;
    }

    timeFormated += `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    return timeFormated;
  };

  return (
    <section className="flex flex-col items-center gap-3 bg-white bg-opacity-50 rounded-lg p-6  transition text-white shadow-xl">
      {!isResting ? (
        <Study studyTime={formatTime(time.hours, time.minutes, time.seconds)} />
      ) : (
        <Rest restTime={formatTime(rest.restH, rest.restM, rest.restS)} />
      )}
      {!isStarted ? (
        <button onClick={startTimer} className="timerButtons bg-green-500 hover:bg-green-600">
          START
        </button>
      ) : (
        <button onClick={stopTimer} className="timerButtons bg-red-500 hover:bg-red-600">
          STOP
        </button>
      )}
    </section>
  );
};

export default Timer;
