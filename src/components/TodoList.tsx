import React from "react";
import { Todo } from "../model";
import TodoBlock from "./TodoBlock";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <section className=" w-9/12  mt-4 grid grid-cols-1  gap-3">
      {todos.map((todo) => (
        <TodoBlock
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </section>
  );
};

export default TodoList;
