interface Props {
  restTime: string;
}

const Study = ({ restTime }: Props) => {
  return (
    <>
      <h2 className="text-3xl">Rest</h2>
      <p className="text-5xl">{restTime}</p>
    </>
  );
};

export default Study;
