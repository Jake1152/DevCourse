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

  const handleCheckedChange = (itemId: number) => {
    // isChecked를 toggle로 사용
    setTodos((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  return (
    <div>
      <h1> {title} </h1>
      <p></p>
      <div className="container">
        <ul>
          {todos.map((todo, index) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                onChange={() => {
                  handleCheckedChange(todo.id);
                }}
              ></input>
              <span>
                {
                  // # Error
                  // if (todo.isChecked) {
                  //   <del>{todo.text}</del>
                  // } else {
                  //   todo.text
                  // }

                  /**
                   * JSX tag안에서는 if문을 못쓰는가?
                   * 식만 가능한가? 문은 불가능한가?
                   */
                  // work
                  todo.isChecked ? (
                    <del> {todo.text} </del>
                  ) : (
                    <span> {todo.text} </span>
                  )
                }
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
