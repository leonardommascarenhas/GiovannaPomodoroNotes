interface Props {
  restTime: string;
}

const Study = ({ restTime }: Props) => {
  return (
    <>
      <h2>Rest</h2>
      <p>{restTime}</p>
    </>
  );
};

export default Study;
