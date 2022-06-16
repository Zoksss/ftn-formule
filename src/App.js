import React from 'react';

import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import QuestionCard from './Components/QuestionCard/QuestionCard';

import questions from './questions';

const getRandom = (max) => {
  return Math.floor(Math.random() * (max - 0)) + 0;
}



let currentQuestionIndex = 0;
const App = () => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = React.useState(false);

  const submitAnswer = (userInput) => {
    console.log(userInput);
    if (userInput === questions[currentQuestionIndex].correctAnswer) {
      console.log("tacan odgovor");
      setIsCorrectAnswer(true);
      return;
    }
    console.log("netacan odgovor");
    setIsCorrectAnswer(false);
  }

  const nextQuestion = () => {
    if(currentQuestion == 10){
      // end screen
      console.log("restart");
      setCurrentQuestion(0);
      return
    }
    currentQuestionIndex = getRandom(questions.length);
    setCurrentQuestion(prevCurrentQuestion => prevCurrentQuestion + 1);
    setIsCorrectAnswer(null);

  }

  return (
    <div className="ftn-forume">
      <Navbar />
      <QuestionCard
        currentQuestion={currentQuestion}
        question={questions[currentQuestionIndex].question}
        correctAnswer={questions[currentQuestionIndex].correctAnswer}
        hasImage={questions[currentQuestionIndex].hasImage}
        imagePath={questions[currentQuestionIndex].imagePath}
        submitAnswer={submitAnswer}
        isCorrectAnswer={isCorrectAnswer}
        nextQuestion={nextQuestion}
      />
    </div>
  );
}

export default App;
