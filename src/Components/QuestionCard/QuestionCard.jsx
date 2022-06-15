import './QuestionCard.css';

const QuestionCard = (props) => {
  return (
    <div className="ftn-forumle-question-container">
        <div className="question-row">
          <p className="question">Pitanje</p>
          <p className="question-number">{props.currentQuestion}/10</p>
        </div>
        <div className="down-row">
          <div class="answer-div">
            <p>odgovor:</p>
            <input type="text" placeholder="npr. log5(3)*7/2"></input>
            <button className="submit-btn">Proveri</button>

            {
              false && <div className="resoults-tab">
                <p className="your-answer">Vas odgovor je <b className="answer-state">pogresan!</b></p>
                <p>tacan odgovor je:</p>
                <p className="correct-answer">log(10)+log(3^3)</p>
              </div>
            }
          </div>
          { false && <img className="question-image" src="" alt=""></img> }
        </div>
      </div>
  )
}

export default QuestionCard;