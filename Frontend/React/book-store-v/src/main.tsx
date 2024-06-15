import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyle } from "./styled/global";

// ReactDOM.createRoot(document.getElementById("root")!).render(
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

// export default
