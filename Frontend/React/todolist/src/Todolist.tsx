import React, { useState } from "react";

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

const TodoList: React.FC = () => {
  const title: string = "TODO";

  // Destructuring
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "공부하기", isChecked: false },
    { id: 2, text: "잠자기", isChecked: false },
    { id: 3, text: "미팅하기", isChecked: false },
  ]);
  return (
    <div>
      <h1> {title} </h1>
      <p></p>
      <div className="container">
        <ul>
          <li>{todos[0].text}</li>
          <li>{todos[1].text}</li>
          <li>{todos[2].text}</li>
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
