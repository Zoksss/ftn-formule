import React from 'react';

import './SelectQuizCard.css';
import Quiz from "./Quiz";

const SelectQuizCard = (props) => {
    return (
        <div className="select-quiz-card-container">
            <div className="quiz-selection-title-row">
                <p className="quiz-count-title">Oblasti</p>
                <p className="question-count-num">14</p>
            </div>
            <div className="quiz-select-button-container">
                <Quiz number="0" title="Sve oblasti" questionNumber={"11"} startQuiz={props.startQuiz} />
                <Quiz number="1" title="Algebra" questionNumber="0" />
                <Quiz number="2" title="Jednacine" questionNumber="0" />
                <Quiz number="3" title="Eksponencijalne i logaritmi" questionNumber="0" />
                <Quiz number="4" title="Triganometrija" questionNumber="0" />
                <Quiz number="5" title="Vektori" questionNumber="6" startQuiz={props.startQuiz} />
                <Quiz number="6" title="Analitcka geometrija" questionNumber="5" startQuiz={props.startQuiz} />
                <Quiz number="7" title="Planimetrija" questionNumber="5" startQuiz={props.startQuiz} />
                <Quiz number="8" title="Stereometrija" questionNumber="5" startQuiz={props.startQuiz} />
                <Quiz number="9" title="Progresije" questionNumber="5" startQuiz={props.startQuiz} />
                <Quiz number="10" title="Indukcija i kombinatorika" questionNumber="5" startQuiz={props.startQuiz} />
                <Quiz number="11" title="Proporcije i procenti" questionNumber="5" startQuiz={props.startQuiz} />
                <Quiz number="12" title="Realne funkcije" questionNumber="5" startQuiz={props.startQuiz} />
                <Quiz number="13" title="Integrali" questionNumber="5" startQuiz={props.startQuiz} />
                <Quiz number="14" title="Kompleksni brojevi" questionNumber="5" startQuiz={props.startQuiz} />
            </div>
        </div>
    )
}

export default SelectQuizCard;