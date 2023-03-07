import React from "react";

//the value is a string because the props would be the formatted time from the formatTimeFunction
interface Props {
  studyTime: string;
}

const Study = ({ studyTime }: Props) => {
  return (
    <>
      <h2>Study</h2>
      <p>{studyTime}</p>
    </>
  );
};

export default Study;
