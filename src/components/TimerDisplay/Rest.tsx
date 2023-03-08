interface Props {
  restTime: string;
}

const Study = ({ restTime }: Props) => {
  return (
    <>
      <h2 className="text-3xl md:text-5xl font-bold">Rest</h2>
      <p className="text-5xl md:text-8xl lg:text-9xl font-orbitron font-light">{restTime}</p>
    </>
  );
};

export default Study;
