import React, { useState } from "react";

interface Time {
  hours: number;
  minutes: number;
  seconds: number;
  miliSeconds: number;
}

const Timer = () => {
  const [time, setTime] = useState<Time>({
    hours: 0,
    minutes: 0,
    seconds: 0,
    miliSeconds: 0,
  });
  setTimeout(() => {}, 1);
  return <div> </div>;
};

export default Timer;
