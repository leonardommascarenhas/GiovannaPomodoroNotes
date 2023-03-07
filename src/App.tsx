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
      <main className="w-11/12 md:max-w-[480px] lg:max-w-[680px] mt-6">
        <Timer timeOutH={0} timeOutM={1} timeOutS={5} restTimeOutH={0} restTimeOutM={1} restTimeOutS={0} />
      </main>
    </div>
  );
};

export default App;
