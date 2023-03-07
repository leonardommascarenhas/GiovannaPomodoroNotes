import React from "react";

//the value is a string because the props would be the formatted time from the formatTimeFunction
interface Props {
  studyTime: string;
}

const Study = ({ studyTime }: Props) => {
  return (
    <>
      <h2 className="text-4xl md:text-5xl font-bold">Study</h2>
      <p className="text-5xl md:text-8xl lg:text-9xl font-orbitron font-light">{studyTime}</p>
    </>
  );
};

export default Study;
