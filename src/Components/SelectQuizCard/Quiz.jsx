import "./SelectQuizCard.css";

import questionsArr from '../../questions';

const calculateQuestions = (oblast) => {
  let n = 0;
  if (oblast === "Sve oblasti") return (questionsArr.length - 1).toString();
  for (let i = 0; i < questionsArr.length; i++)
    if (questionsArr[i].category === oblast) n++;
  return n.toString();
}

const Quiz = (props) => {
  return (
    <button onClick={() => { if (props.startQuiz) props.startQuiz(props.title) }}>
      <p className="quiz-number">{props.number}.</p>
      <p className="quiz-title">{props.title}</p>
      <div className="quiz-questionCount">{calculateQuestions(props.title)}</div>
    </button>
  )
}

export default Quiz;