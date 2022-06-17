import "./SelectQuizCard.css";

const Quiz = (props) => {
    return (
        <button onClick={() => {props.startQuiz(props.title)}}>
            <p className="quiz-number">{props.number}.</p>
            <p className="quiz-title">{props.title}</p>
            <div className="quiz-questionCount">{props.questionNumber}</div>
        </button>
    )
}

export default Quiz;