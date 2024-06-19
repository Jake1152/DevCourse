// import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { GlobalStyle } from "./style/global";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./style/theme";

function App() {
  // return <Layout children={<Home />} />;
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle themeName={dark} />
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );

  // return <Layout children={<Detail />} />;
  // return <Detail />;
}

export default App;
