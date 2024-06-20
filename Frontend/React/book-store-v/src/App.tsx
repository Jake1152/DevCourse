// import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";

import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { useContext, useState } from "react";
import { BookStoreThemeProvider, ThemeContext } from "./context/themeContext";

function App() {
  return (
    <BookStoreThemeProvider>
      <ThemeSwitcher />
      <Layout>
        <Home />
      </Layout>
    </BookStoreThemeProvider>
  );

  // return <Layout children={<Detail />} />;
  // return <Detail />;
}

export default App;
