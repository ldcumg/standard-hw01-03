import { useState } from "react";
import Content from "../components/Content";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Status from "../components/Status";

function App() {
  const [count, setCount] = useState(0);

  const title = "Counter App";
  const year = 2024;

  return (
    <div>
      <Header title={title} />
      <Content />
      <Counter count={count} setCount={setCount} />
      <Status count={count} />
      <Footer year={year} />
    </div>
  );
}

export default App;
