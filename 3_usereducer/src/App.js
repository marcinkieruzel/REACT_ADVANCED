import logo from "./logo.svg";
import "./App.css";

function App() {

  return (
    <div className="App">
      <form>
        <input type="number" />
        <div>
          <button>Dodaj</button>
          <button>Odejmij</button>
          <button>Podziel</button>
          <button>Pomnóż</button>
        </div>
      </form>
      <h1>Wynik: </h1>
    </div>
  );
}

export default App;
