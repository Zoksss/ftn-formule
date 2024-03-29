import React from 'react';
import { useTransition, animated } from "react-spring"

import './SelectQuizCard.css';
import Quiz from "./Quiz";


const SelectQuizCard = (props) => {
    const transition = useTransition(props.state, {
        from: { x: 150, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: -150, y: 0, opacity: 0 },
    });

    return (
        <>
            {transition((style, item) => 
                item ? <animated.div style={style} className="select-quiz-card-container">
                    <div className="quiz-selection-title-row">
                        <p className="quiz-count-title">Oblasti</p>
                        <p className="question-count-num">14</p>
                    </div>
                    <div className="quiz-select-button-container">
                        <Quiz number="0" title="Sve oblasti" startQuiz={props.startQuiz} />
                        <Quiz number="1" title="Algebra" startQuiz={() => props.startQuiz("Algebra")}/>
                        <Quiz number="2" title="Jednacine" startQuiz={() => props.startQuiz("Jednacine")}/>
                        <Quiz number="3" title="Eksponencijalne i logaritmi"/>
                        <Quiz number="4" title="Triganometrija" />
                        <Quiz number="5" title="Vektori" startQuiz={() => props.startQuiz("Vektori")} />
                        <Quiz number="6" title="Analitcka geometrija" startQuiz={() => props.startQuiz("Analitcka geometrija")} />
                        <Quiz number="7" title="Planimetrija" startQuiz={() => props.startQuiz("Planimetrija")} />
                        <Quiz number="8" title="Stereometrija" />
                        <Quiz number="9" title="Progresije" />
                        <Quiz number="10" title="Indukcija i kombinatorika" />
                        <Quiz number="11" title="Proporcije i procenti" startQuiz={() => props.startQuiz("Proporcije i procenti")} />
                        <Quiz number="12" title="Realne funkcije" />
                        <Quiz number="13" title="Integrali" startQuiz={() => props.startQuiz("Integrali")}/>
                        <Quiz number="14" title="Kompleksni brojevi" startQuiz={() => props.startQuiz("Kompleksni brojevi")} />
                    </div>
                </animated.div> : ""
            )
            }
        </>
    )
}

export default SelectQuizCard;


