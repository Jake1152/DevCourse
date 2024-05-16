import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import ClassCom from "./ClassCom";
// import FunctCom from "./FuncCom";
import TodoList from "./Todolist";

function App() {
  let name = "리액트";
  return (
    <div className="container">
      <TodoList></TodoList>
    </div>
  );
}

export default App;
