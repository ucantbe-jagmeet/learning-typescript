import React from "react";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const todos = [
    { id: "t1", text: "Finish the Course" },
    { id: "t2", text: "End Of Course" },
  ];

  return (
    <div>
      <h1>To Do List</h1>
      <TodoList items={todos} />
    </div>
  );
};

export default App;
