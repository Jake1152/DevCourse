// import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  // return <Layout children={<Home />} />;
  return (
    <Layout>
      <Home />
    </Layout>
  );

  // return <Layout children={<Detail />} />;
  // return <Detail />;
}

export default App;
