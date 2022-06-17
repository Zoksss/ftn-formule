import React from 'react';

import './QuestionCard.css';

const QuestionCard = (props) => {

  const [isAnswer, setIsAnswer] = React.useState(false);
  const [input, setInput] = React.useState("");

  return (
    <div className="ftn-forumle-question-container">
        <div className="question-row">
          <p className="question">{props.question}</p>
          <p className="question-number">{props.currentQuestion}/10</p>
        </div>
        <div className="down-row">
          <div className="answer-div">
            <p>odgovor:</p>
            <input type="text" placeholder="npr. log5(3)*7/2" onChange={ (e) => {setInput(e.target.value)}}></input>
            { !isAnswer && <button className="submit-btn" onClick={() => {props.submitAnswer(input); setIsAnswer(true)}}>Proveri</button> }
            {
              isAnswer && <div className="resoults-tab">
                <p className="your-answer">Vas odgovor je <b className={props.isCorrectAnswer?"correct-answer-text":"wrong-answer-text"}> {props.isCorrectAnswer?"tacan!":"pogresan!"}</b></p>
                <p>tacan odgovor je:</p>
                <p className="correct-answer">{props.correctAnswer}</p>
              </div>
            }
          </div>
          { props.hasImage && <img className="question-image" src={props.imagePath} alt=""></img> }
        </div>
        { isAnswer && <button className="next-question-btn" onClick={() => {
          props.nextQuestion();
          setIsAnswer(false);
        }}>Sledece</button> }

      </div>
  )
}

export default QuestionCard;