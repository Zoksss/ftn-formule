import React from 'react';

import './App.css';

import Navbar from './Components/Navbar/Navbar';
import QuestionCard from './Components/QuestionCard/QuestionCard';
import SelectQuizCard from './Components/SelectQuizCard/SelectQuizCard';
import Formulas from "./Components/Formulas/Formulas"

import questionsArr from './questions';

const getRandom = (max) => {
  return Math.floor(Math.random() * (max - 0)) + 0;
}

const formatString = (string) => {
  return string.replace(/\s+/g, '').toLowerCase();
}


let questions = questionsArr;

let currentQuestionIndex = 0;



const App = () => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = React.useState(false);
  const [isQuizStarted, setIsQuizStarted] = React.useState(false);
  const [extraOperationSign, setExtraOperationSign] = React.useState("");
  const [isFormulas, setIsFormulas] = React.useState(false);

  //!isFormulas
  

  React.useEffect(() => {
    setExtraOperationSign("");
  }, [extraOperationSign]);


  const submitAnswer = (userInput) => {
    console.log(userInput);
    if (formatString(userInput) === questions[currentQuestionIndex].correctAnswer.toLowerCase()) {
      console.log("tacan odgovor");
      setIsCorrectAnswer(true);
      return;
    }
    console.log("netacan odgovor");
    setIsCorrectAnswer(false);
  }

  const nextQuestion = () => {
    if (currentQuestion === 10) {
      // end screen
      console.log("restart");
      setIsQuizStarted(false);
      setCurrentQuestion(0);
      return
    }
    currentQuestionIndex = getRandom(questions.length);
    setCurrentQuestion(prevCurrentQuestion => prevCurrentQuestion + 1);
    setIsCorrectAnswer(null);

  }

  const startQuiz = (oblast) => {
    console.log(oblast);
    setCurrentQuestion(0);
    if (oblast === "Sve oblasti") {
      questions = questionsArr;
      setIsQuizStarted(true);
      return;
    }
    let sortiraniNiz = [];
    for (let i = 0; i < questions.length; i++)
      if (questions[i].category === oblast) sortiraniNiz.push(questions[i]);
    questions = sortiraniNiz;
    setIsQuizStarted(true);

  }

  return (
    <div className="ftn-forume">
      <Navbar setIsFormulas={setIsFormulas} />
      {
          <SelectQuizCard  startQuiz={startQuiz} state={!isFormulas && !isQuizStarted} />
      }
      {isQuizStarted && !isFormulas &&
        <QuestionCard
          currentQuestion={currentQuestion}
          question={questions[currentQuestionIndex].question}
          correctAnswer={questions[currentQuestionIndex].correctAnswer}
          hasImage={questions[currentQuestionIndex].hasImage}
          imagePath={questions[currentQuestionIndex].imagePath}
          submitAnswer={submitAnswer}
          isCorrectAnswer={isCorrectAnswer}
          nextQuestion={nextQuestion}
          extraOperationSign={extraOperationSign}
          state={isQuizStarted}
        />
      }
      {isQuizStarted && !isFormulas && <div className="extra-operations">
        <button className="extra-operation-button" onClick={() => { setExtraOperationSign("²"); }}>n²</button>
        <button className="extra-operation-button" onClick={() => { setExtraOperationSign("³"); }} >n³</button>
        <button className="extra-operation-button" onClick={() => { setExtraOperationSign("√"); }} >√n</button>
      </div>
      }
      {<Formulas state={isFormulas} />}
    </div>
  );
}

export default App;
