import './Formulas.css';

const Formula = (props) => {
    return (
        <div className="question-and-formula">
            <p>{props.question}</p>
            <p className="formula-answer">{props.answer}</p>
        </div>
    )
}

export default Formula;