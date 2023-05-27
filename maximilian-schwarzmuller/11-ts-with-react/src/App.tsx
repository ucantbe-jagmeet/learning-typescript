import React from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

const App: React.FC = () => {
  const todos = [{ id: "t1", text: "Finish the Course" }];

  const addHandler = (text: string) => {
    console.log(text);
  };

  return (
    <div>
      <h1>To Do List</h1>
      <NewTodo addTodo={addHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
