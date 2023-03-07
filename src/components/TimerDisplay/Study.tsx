import React from "react";

//the value is a string because the props would be the formatted time from the formatTimeFunction
interface Props {
  studyTime: string;
}

const Study = ({ studyTime }: Props) => {
  return (
    <>
      <h2 className="text-3xl">Study</h2>
      <p className="text-5xl font-orbitron">{studyTime}</p>
    </>
  );
};

export default Study;
