import React from 'react';
import { useTransition, animated } from "react-spring"

import './QuestionCard.css';

const QuestionCard = (props) => {

  const [isAnswer, setIsAnswer] = React.useState(false);
  const [input, setInput] = React.useState("");

  React.useEffect(() => {
    setInput(prevInput => prevInput + props.extraOperationSign);
    console.log(mainInput);
    mainInput.current.focus();
    
  }, [props.extraOperationSign]);

  const transition = useTransition(props.state, {
    from: { x: 150, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: -150, y: 0, opacity: 0 },
  });

  const mainInput = React.useRef(null);

  return (
    <>
      {transition((style, item) =>
        item ?
          <animated.div style={style} className="ftn-forumle-question-container">
            <div className="question-row">
              <p className="question">{props.question}</p>
              <p className="question-number">{props.currentQuestion}/10</p>
            </div>
            <div className="down-row">
              <div className="answer-div">
                <p>odgovor:</p>
                <input ref={mainInput} type="text" placeholder="npr. log5(3)*7/2" value={input} onChange={(e) => { setInput(e.target.value); }}></input>
                {!isAnswer && <button className="submit-btn" onClick={() => { props.submitAnswer(input); setIsAnswer(true); setInput("") }}>Proveri</button>}
                {
                  isAnswer && <div className="resoults-tab">
                    <p className="your-answer">Vas odgovor je <b className={props.isCorrectAnswer ? "correct-answer-text" : "wrong-answer-text"}> {props.isCorrectAnswer ? "tacan!" : "pogresan!"}</b></p>
                    <p>tacan odgovor je:</p>
                    <p className="correct-answer">{props.correctAnswer}</p>
                  </div>
                }
              </div>
              {props.hasImage && <img className="question-image" src={props.imagePath} alt=""></img>}
            </div>
            {isAnswer && <button className="next-question-btn" onClick={() => {
              props.nextQuestion();
              setIsAnswer(false);
            }}>Sledece</button>}
          </animated.div> : ""
      )}
    </>
  )
}

export default QuestionCard;