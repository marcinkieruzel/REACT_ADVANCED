import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [state, setState] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setState({ width, height });

    function getDimensions(event) {
      const width = event.currentTarget.innerWidth,
        height = event.currentTarget.innerHeight;

      setState({ width, height });
    }

    window.addEventListener("resize", getDimensions);

    return () => {
      window.removeEventListener("resize", getDimensions);
    };
  }, []);

  return state;
};

function App() {
  const windowSize = useWindowSize();

  return (
    <div className="App">
      <h2>Window width: {windowSize.width}</h2>
      <h2>Window height: {windowSize.height} </h2>
    </div>
  );
}

export default App;
