import { FC, useRef, useEffect } from "react";

type NewTodoProps = {
  addTodo: (todoText: string) => void;
};

const NewTodo: FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label htmlFor="todo-text">Todo text</label>
        <input
          type="text"
          id="todo-text"
          ref={textInputRef}
          style={{ width: "180px", margin: "10px" }}
        />
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
};

export default NewTodo;
