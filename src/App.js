import React from 'react';

import './App.css';

import Navbar from './Components/Navbar/Navbar';
import QuestionCard from './Components/QuestionCard/QuestionCard';
import SelectQuizCard from './Components/SelectQuizCard/SelectQuizCard';
import Formulas from "./Components/Formulas/Formulas"
import Resoults from './Components/Resoults/Resoults';

import questionsArr from './questions';

const getRandom = (max) => {
  return Math.floor(Math.random() * (max - 0)) + 0;
}

const formatString = (string) => {
  return string.replace(/\s+/g, '').toLowerCase();
}





let currentQuestionIndex = 0;

const App = () => {

  const [questions, setQuestions] = React.useState(questionsArr);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = React.useState(false);
  const [isQuizStarted, setIsQuizStarted] = React.useState(false);
  const [extraOperationSign, setExtraOperationSign] = React.useState("");
  const [isFormulas, setIsFormulas] = React.useState(false);
  const [isResoluts, setIsResoluts] = React.useState(false);
  const [resoult, setResoult] = React.useState(0);

  //!isFormulas


  React.useEffect(() => {
    setExtraOperationSign("");
  }, [extraOperationSign]);

  let currResult = 3;
  
  const submitAnswer = (userInput) => {
    console.log(userInput);
    if (formatString(userInput) === questions[currentQuestionIndex].correctAnswer.toLowerCase()) {
      console.log("tacan odgovor");
      setIsCorrectAnswer(true);
      setResoult(prevRes => prevRes+1);
      return;
    }
    console.log("netacan odgovor");
    setIsCorrectAnswer(false);
  }

  const nextQuestion = (info) => {
    if (currentQuestion === 10 || info === "restart") {
      // end screen
      console.log(resoult)
      setIsResoluts(true);
      console.log("restart");
      //setIsQuizStarted(false);
      setCurrentQuestion(0);
      return
    }
    currentQuestionIndex = getRandom(questions.length-1);
    setCurrentQuestion(prevCurrentQuestion => prevCurrentQuestion + 1);
    setIsCorrectAnswer(null);

  }

  const startQuiz = (oblast) => {
    setCurrentQuestion(0);
    setResoult(0);
    setQuestions(questionsArr);
    if (oblast !== "Sve oblasti") {
      let sortiraniNiz = [];
      for (let i = 0; i < questions.length; i++)
        if (questions[i].category === oblast) sortiraniNiz.push(questions[i]);
      setQuestions(sortiraniNiz);
      setIsQuizStarted(true);
      return;
    }

    setQuestions(questionsArr);
    setIsQuizStarted(true);
    return;

  }

  const returnToHome = () => {
    nextQuestion("restart");
    setQuestions(questionsArr);
    setCurrentQuestion(0);
  }

  return (
    <div className="ftn-forume">
      <Navbar setIsFormulas={setIsFormulas} returnToHome={returnToHome} />
      <SelectQuizCard startQuiz={startQuiz} state={!isFormulas && !isQuizStarted} />
      {isQuizStarted && !isFormulas && !isResoluts &&
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
      {isQuizStarted && !isFormulas && !isResoluts && <div className="extra-operations">
        <div>
          <button className="extra-operation-button" onClick={() => { setExtraOperationSign("²"); }}>n²</button>
          <button className="extra-operation-button" onClick={() => { setExtraOperationSign("³"); }} >n³</button>
          <button className="extra-operation-button" onClick={() => { setExtraOperationSign("^x"); }} >n^x</button>
          <button className="extra-operation-button" onClick={() => { setExtraOperationSign("√"); }} >√n</button>
        </div>
        <div>
          <button className="extra-operation-button" onClick={() => { setExtraOperationSign("α"); }}>α</button>
          <button className="extra-operation-button" onClick={() => { setExtraOperationSign("β"); }} >β</button>
          <button className="extra-operation-button" onClick={() => { setExtraOperationSign("γ"); }} >γ</button>
          <button className="extra-operation-button" onClick={() => { setExtraOperationSign("δ"); }} >δ</button>
        </div>
      </div>
      }
      {<Formulas state={isFormulas} />} 
      {!isFormulas && < Resoults setIsResoluts={setIsResoluts} setIsQuizStarted={setIsQuizStarted} state={isResoluts} resoult={resoult}/>}
    </div>
  );
}

export default App;
