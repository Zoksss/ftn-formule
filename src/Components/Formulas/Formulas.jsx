import './Formulas.css';
import { useTransition, animated } from "react-spring"

import Formula from './Formula';
import questions from '../../questions';

const generateQuestions = () => {
    let t = [];
    let usedCategories = [];
    questions.forEach(question => {
        let x = usedCategories.find(o => o === question.category);
        if (!x) {
            // add new category
            usedCategories.push(question.category);
            let obj = { question: "category", correctAnswer: question.category, categoryNum: question.categoryNumber};
            t.push(obj);
            return;
        }
        t.push(question);
    })
    return t;
}


const Formulas = (props) => {
    const questions = generateQuestions().map(element => {
        return (element.question !== "category" ? <Formula question={element.question} answer={element.correctAnswer} /> : <div className="formulas-title-row"><p>{element.correctAnswer}</p><p>{element.categoryNum}</p></div>)
    });

    const transition = useTransition(props.state, {
        from: { x: 150, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: -150, y: 0, opacity: 0 },
    });

    

    return (
        <>
            {transition((style, item) =>
                item ?
                    <animated.div style={style}>
                        <div className="formulas">
                            {questions}
                        </div >
                    </animated.div > : ""
            )}
        </>
    )
}

export default Formulas;