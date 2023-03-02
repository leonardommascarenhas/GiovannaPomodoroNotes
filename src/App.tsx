import { useState, useEffect } from "react";
import InputField from "./components/InputField";
import Timer from "./components/Timer";
import TodoList from "./components/TodoList";
import { Todo } from "./model";
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todo) {
      setTodos([...todos, { id: todos.length, todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center bg-pink-500">
      <h1 className="text-5xl font-lato font-bold my-3 text-white z-10">MY NOTES</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      <TodoList todos={todos} setTodos={setTodos} />
      <main>
        <Timer timeOutH={0} timeOutM={50} timeOutS={0} restH={1} restM={1} />
      </main>
    </div>
  );
};

export default App;
