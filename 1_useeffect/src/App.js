import logo from "./logo.svg";
import "./App.css";

const questions = [
  {
    question: "Stolica Polski to?",
    answers: [
      {
        option: "Warszawa",
        correct: true,
      },
      {
        option: "Kraków",
        correct: false,
      },
      {
        option: "Toruń",
        correct: false,
      },
      {
        option: "Gdańsk",
        correct: false,
      },
    ],
  },
  {
    question: "Bitwa pod Grunwaldem miała miejsce w roku",
    answers: [
      {
        option: 1410,
        correct: true,
      },
      {
        option: 1370,
        correct: false,
      },
      {
        option: 1656,
        correct: false,
      },
      {
        option: 1939,
        correct: false,
      },
    ],
  },
  {
    question: "W którym roku Polska wstąpiła do NATO",
    answers: [
      {
        option: 1560,
        correct: false,
      },
      {
        option: 1999,
        correct: true,
      },
      {
        option: 2005,
        correct: false,
      },
      {
        option: 996,
        correct: false,
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
