import React from "react";

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => {
        return (
          <li key={todo.id} style={{ margin: "20px" }}>
            <span>{todo.text}</span>
            <button
              onClick={props.onDeleteTodo.bind(null, todo.id)}
              style={{ marginLeft: "20px" }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
