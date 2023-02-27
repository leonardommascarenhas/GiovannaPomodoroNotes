import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: React.FormEvent<HTMLFormElement>) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form
      className=" relative flex justify-center w-11/12"
      onSubmit={handleAdd}
    >
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter the task"
        className="relative w-full border border-gray-200 px-7 py-2 text-2xl rounded-full transition shadow-xl focus:outline-none"
      />
      <button
        type="submit"
        className="absolute w-9 h-9 right-3 top-1/2 -translate-y-1/2 bg-blue-500 text-white rounded-full shadow-2xl transform hover:bg-blue-400 active:scale-75"
      >
        Add
      </button>
    </form>
  );
};

export default InputField;
