import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyle } from "./styled/global";
import { ThemeContext, state } from "./context/themeContext.tsx";

// ReactDOM.createRoot(document.getElementById("root")!).render(
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    {/* <ThemeContext.Provider value={state}> // 초기값 설정용 */}
    <App />
    {/* </ThemeContext.Provider> */}
  </React.StrictMode>
);

// export default
