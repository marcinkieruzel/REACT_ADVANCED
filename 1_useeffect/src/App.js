import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

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
  const [questionNumber, setQuestionNumber] = useState(0);
  const [userAnswers, setUSerAnswers] = useState([]);
  const [counter, setCounter] = useState(20);

  useEffect(() => {
    
    let ctr = 20;
    
    const timeout = setInterval(() => {

      if (ctr <= 0) {
        clearInterval(timeout);
        
      } 
      setCounter(ctr)
      ctr--
      
    }, 1000);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  useEffect(() => {
    if (userAnswers.length && userAnswers.length < questions.length) {
      setQuestionNumber((prev) => prev + 1);
    }
  }, [userAnswers]);

  const handleUserAnswer = (correct) => {
    setUSerAnswers((prev) => {
      const alreadyAnswered = prev.find(
        (x) => x.questionNumber === questionNumber
      );

      if (alreadyAnswered) {
        return prev;
      }

      return [
        ...prev,
        {
          questionNumber,
          correct,
        },
      ];
    });

    // console.log(userAnswers);
    // setQuestionNumber((prev) => prev + 1);
  };

  return (
    <div className="App">
      <h1>{questions[questionNumber].question}</h1>
      {questions[questionNumber].answers.map((x, i) => {
        return (
          <button
            disabled={counter <= 0}
            onClick={() => {
              handleUserAnswer(x.correct);
            }}
            key={i}
          >
            {x.option}
          </button>
        );
      })}

      <h2>
        Wynik: {userAnswers.filter((x) => x.correct).length} /{" "}
        {userAnswers.length}
      </h2>
      <h3>{counter}</h3>
    </div>
  );
}

export default App;
