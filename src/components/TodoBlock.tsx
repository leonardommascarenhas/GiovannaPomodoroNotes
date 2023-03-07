import React, { useEffect, useState } from "react";
import { Todo } from "../model";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoBlock({ todo, todos, setTodos }: Props) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    console.log(isActive);
  }, [isActive]);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditButton = () => {
    setIsActive(!isActive);
  };

  const handleChange = (id: number, newValue: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, todo: newValue } : todo)));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsActive(!isActive);
    }
  };

  const todoClassName: string | undefined = todo.isDone
    ? "bg-green-500"
    : "bg-yellow-400";

  return (
    <form
      key={todo.id}
      onSubmit={(e) => e.preventDefault()}
      className={`min-h-[70px] px-2 ${todoClassName} flex justify-between items-center rounded-sm`}
    >
      {isActive ? (
        <input
          type="text"
          name=""
          id=""
          value={todo.todo}
          onChange={(e) => handleChange(todo.id, e.target.value)}
          onKeyDown={(e) => handleKeyPress(e)}
          className="w-3/4"
        />
      ) : (
        <h1 className="text-xl font-roboto">{todo.todo}</h1>
      )}
      <div className="flex gap-3 md:w-1/4">
        <button>
          <AiTwotoneDelete onClick={() => handleDelete(todo.id)} />
        </button>
        <button onClick={() => handleEditButton()}>
          <AiTwotoneEdit />
        </button>
        <button
          className="border border-gray-600 rounded-xl"
          onClick={() => handleDone(todo.id)}
        >
          Done
        </button>
      </div>
    </form>
  );
}

export default TodoBlock;
