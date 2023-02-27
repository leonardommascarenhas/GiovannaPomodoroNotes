import React from "react";
import { Todo } from "../model";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoBlock({ todo, todos, setTodos }: Props) {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const todoClassName: string | undefined = todo.isDone
    ? "bg-green-500"
    : "bg-yellow-400";

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div
        key={todo.id}
        className={`${todoClassName} flex justify-between`}
      >
        <h1>{todo.todo}</h1>
        <div className="flex gap-3">
          <button>
            <AiTwotoneDelete onClick={() => handleDelete(todo.id)} />
          </button>
          <button>
            <AiTwotoneEdit />
          </button>
          <button
            className="border border-gray-600 rounded-xl"
            onClick={() => handleDone(todo.id)}
          >
            Done
          </button>
        </div>
      </div>
    </form>
  );
}

export default TodoBlock;
