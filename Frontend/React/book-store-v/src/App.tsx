// import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { GlobalStyle } from "./style/global";
import { ThemeProvider } from "styled-components";
import { getTheme } from "./style/theme";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { useContext, useState } from "react";
import { BookStoreThemeProvider, ThemeContext } from "./context/themeContext";

function App() {
  // return <Layout children={<Home />} />;
  // 지역상태 스타일의 테마
  // const [themeName, setThemeName] = useState<ThemeName>("light");

  //전역 상태 스타일의 테마
  const { themeName, setThemeName } = useContext(ThemeContext);

  return (
    <BookStoreThemeProvider>
      <ThemeProvider theme={getTheme(themeName)}>
        <GlobalStyle themeName={themeName} />
        <ThemeSwitcher themeName={themeName} setThemeName={() => {}} />
        <Layout>
          <Home />
        </Layout>
      </ThemeProvider>
    </BookStoreThemeProvider>
  );

  // return <Layout children={<Detail />} />;
  // return <Detail />;
}

export default App;
