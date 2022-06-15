import React from 'react';

import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import QuestionCard from './Components/QuestionCard/QuestionCard';

import questions from './questions';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  return (
    <div className="ftn-forume">
      <Navbar />
      <QuestionCard currentQuestion = {currentQuestion}/>
    </div>
  );
}

export default App;
