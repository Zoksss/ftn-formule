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
                <Quiz number="0" title="Sve oblasti" startQuiz={props.startQuiz} />
                <Quiz number="1" title="Algebra" />
                <Quiz number="2" title="Jednacine"  />
                <Quiz number="3" title="Eksponencijalne i logaritmi" />
                <Quiz number="4" title="Triganometrija" />
                <Quiz number="5" title="Vektori" startQuiz={props.startQuiz} />
                <Quiz number="6" title="Analitcka geometrija"startQuiz={props.startQuiz} />
                <Quiz number="7" title="Planimetrija" startQuiz={props.startQuiz}/>
                <Quiz number="8" title="Stereometrija" />
                <Quiz number="9" title="Progresije" />
                <Quiz number="10" title="Indukcija i kombinatorika" />
                <Quiz number="11" title="Proporcije i procenti" startQuiz={props.startQuiz} />
                <Quiz number="12" title="Realne funkcije" />
                <Quiz number="13" title="Integrali"  />
                <Quiz number="14" title="Kompleksni brojevi" startQuiz={props.startQuiz} />
            </div>
        </div>
    )
}

export default SelectQuizCard;