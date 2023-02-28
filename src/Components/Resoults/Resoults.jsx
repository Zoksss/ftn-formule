import React from 'react';
import { useTransition, animated } from "react-spring"

import './Resoults.css';

const Resoults = (props) => {

    const transition = useTransition(props.state, {
        from: { x: 150, opacity: 0 },
        enter: { x: 0, opacity: 1 },
        leave: { x: -150, opacity: 0 },
    });

    return (
        <>
            {transition((style, item) =>
                item ?
                    <animated.div className="ftn-formule-resoults-container" style={style}>
                        <div className="resoults-row">
                            <p className="resoults-title">Rezultat</p>
                            <div className="resoluts-row-resoult">
                                <p className="resoults">{props.resoult}</p>
                                <p className="resoults-number">/10</p>
                            </div>
                        </div>
                        <div className="resoults-down-row">
                            <p className="chance">Šansa za prolaz: <span className='chance-percentage'>{(props.resoult)*(props.resoult)>15?((props.resoult)*(props.resoult)):"15"}%</span></p>
                            <div className="resoluts-buttons">
                                <button className="ponovi-button" onClick={() => props.setIsResoluts(false)}>Ponovi </button>
                                <button className="nazad-button" onClick={() => { props.setIsResoluts(false); props.setIsQuizStarted(false) }}>Nazad</button>
                            </div>
                        </div>
                    </animated.div > : ""
            )}
        </>


    )
}

export default Resoults;