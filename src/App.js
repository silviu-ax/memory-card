import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  const [score, setScore] = useState(0);

  return (
    <div id="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
