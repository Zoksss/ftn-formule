import React from 'react';

import './Resoults.css';

const Resoults = (props) => {
    return (

        <div className="ftn-formule-resoults-container">
            <div className="resoults-row">
                <p className="resoults-title">Rezultat</p>
                <div className="resoluts-row-resoult">
                    <p className="resoults">8</p>
                    <p className="resoults-number">/10</p>
                </div>
            </div>
            <div className="resoults-down-row">
                <p className="chance">Šansa za prolaz: : <span className='chance-percentage'>78%</span></p>
                <div className="resoluts-buttons">
                    <button className="ponovi-button" onClick={() => props.setIsResoluts(false)}>Ponovi </button>
                    <button className="nazad-button" onClick={() => {props.setIsResoluts(false); props.setIsQuizStarted(false)}}>Nazad</button>
                </div>
            </div>
        </div>

    )
}

export default Resoults;