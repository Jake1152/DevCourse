import React from "react";

const TodoList: React.FC = () => {
  const title: string = "TODO";

  const [todos] = useState(["공부하기", "잠자기", "미팅하기"]);
  return (
    <div>
      <h1> {title} </h1>
      <p></p>
      <div className="container">
        <ul>
          <li>{todos[0]}</li>
          <li>{todos[1]}</li>
          <li>{todos[2]}</li>
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
